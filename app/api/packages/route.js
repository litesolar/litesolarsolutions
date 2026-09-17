import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

const sanitizeDeep = (data) => {
  if (typeof data === 'string') {
    return data
      .replace(/\u0000/g, '')
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
      .trim();
  }
  if (Array.isArray(data)) {
    return data.map(sanitizeDeep);
  }
  if (data !== null && typeof data === 'object') {
    const cleaned = {};
    for (const key of Object.keys(data)) {
      cleaned[key] = sanitizeDeep(data[key]);
    }
    return cleaned;
  }
  return data;
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
    const body = sanitizeDeep(rawBody);

    // Verify Secret Key (matches process.env.SEED_SECRET or defaults to 'mysecretkey123')
    const secretKey = body.secretKey;
    const expectedSecret = process.env.SEED_SECRET || 'mysecretkey123';

    if (secretKey !== expectedSecret) {
      return NextResponse.json({ error: "Invalid Secret Key" }, { status: 401 });
    }

    const items = body.items;
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Provide a valid JSON array of products." }, { status: 400 });
    }

    let createdCount = 0;
    for (const item of items) {
      const title = item.title || item.name;
      const capacity = item.capacity || item.spec || 'Standard';
      const priceRaw = item.price;
      const category = item.category || 'inverter';
      const description = item.description || '';
      const image = item.image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png';
      const installationKits = item.installationKits || '';

      if (!title) continue;

      const numericPrice = typeof priceRaw === 'number' ? priceRaw : parseFloat(String(priceRaw || '0').replace(/,/g, '')) || 0;

      await prisma.package.create({
        data: {
          title: String(title),
          capacity: String(capacity),
          price: numericPrice,
          category: String(category),
          description: String(description),
          image: String(image),
          installationKits: String(installationKits),
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
