import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

// Ultra-aggressive cleaner that completely nukes null bytes, invisible spaces, and control codes
const cleanStr = (val) => {
  if (val === null || val === undefined) return '';
  return String(val)
    .replace(/\0/g, '')
    .replace(/\u0000/g, '')
    .replace(/[\x00-\x1F\x7F-\u009F]/g, '') // Removes all control codes & null bytes
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // Removes zero-width spaces
    .trim();
};

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
    const rawBody = await request.json().catch(() => ({}));
    
    const secretKey = cleanStr(rawBody.secretKey);
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
      // Explicitly clean every single field individually
      const title = cleanStr(item.title || item.name);
      const capacity = cleanStr(item.capacity || item.spec || 'Standard');
      const priceRaw = item.price;
      const category = cleanStr(item.category || 'inverter');
      const description = cleanStr(item.description);
      const image = cleanStr(item.image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png');
      const installationKits = cleanStr(item.installationKits);

      if (!title) continue;

      const numericPrice = typeof priceRaw === 'number' 
        ? priceRaw 
        : parseFloat(cleanStr(String(priceRaw || '0')).replace(/,/g, '')) || 0;

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
