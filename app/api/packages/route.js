import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(packages);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // 1. Read the raw text instead of request.json() so we can wipe out null bytes first!
    const rawText = await request.text();
    
    // 2. Aggressively strip out all null bytes (0x00) and UTF-16 artifacts from the raw string
    const sanitizedRawText = rawText
      .replace(/\0/g, '')
      .replace(/[\x00-\x1F\u007F-\u009F]/g, '')
      .replace(/[\u200B-\u200D\uFEFF]/g, '');

    const rawBody = JSON.parse(sanitizedRawText || '{}');

    const secretKey = String(rawBody.secretKey || '').trim();
    const expectedSecret = process.env.SEED_SECRET || 'mysecretkey123';

    if (secretKey !== expectedSecret) {
      return NextResponse.json({ error: "Invalid Secret Key" }, { status: 401 });
    }

    const items = rawBody.items;
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Provide a valid JSON array of products." }, { status: 400 });
    }

    let createdCount = 0;
    for (const item of items) {
      const title = String(item.title || item.name || '').replace(/\0/g, '').trim();
      const capacity = String(item.capacity || item.spec || 'Standard').replace(/\0/g, '').trim();
      const priceRaw = item.price;
      const category = String(item.category || 'inverter').replace(/\0/g, '').trim();
      const description = String(item.description || '').replace(/\0/g, '').trim();
      const image = String(item.image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png').replace(/\0/g, '').trim();
      const installationKits = String(item.installationKits || '').replace(/\0/g, '').trim();

      if (!title) continue;

      const numericPrice = typeof priceRaw === 'number' 
        ? priceRaw 
        : parseFloat(String(priceRaw || '0').replace(/,/g, '')) || 0;

      await prisma.package.create({
        data: {
          title,
          capacity,
          price: numericPrice,
          category,
          description,
          image,
          installationKits,
        },
      });
      createdCount++;
    }

    return NextResponse.json({ message: `Successfully published ${createdCount} items! 🚀` }, { status: 201 });
  } catch (error) {
    console.error("BULK INSERT ERROR:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: "Item ID required" }, { status: 400 });
    }

    await prisma.package.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Item deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
