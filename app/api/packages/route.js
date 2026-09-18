import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

function deepClean(value) {
  if (typeof value !== 'string') return value;
  return value
    .replace(/\u0000/g, '')
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '')
    .trim();
}

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
    const rawText = await request.text();
    const sanitizedRawText = deepClean(rawText);

    let rawBody;
    try {
      rawBody = JSON.parse(sanitizedRawText || '{}');
    } catch (err) {
      return NextResponse.json({ error: "Invalid JSON format. Please make sure you are using straight double quotes (\") for keys and values." }, { status: 400 });
    }

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
    for (const [itemIndex, item] of items.entries()) {
      const fields = {
        title: deepClean(String(item.title || item.name || '')),
        capacity: deepClean(String(item.capacity || item.spec || 'Standard')),
        category: deepClean(String(item.category || 'inverter')),
        description: deepClean(String(item.description || '')),
        image: deepClean(String(item.image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png')),
        installationKits: deepClean(String(item.installationKits || '')),
      };

      if (!fields.title) continue;

      const priceRaw = item.price;
      const numericPrice = typeof priceRaw === 'number'
        ? priceRaw
        : parseFloat(String(priceRaw || '0').replace(/,/g, '')) || 0;

      // Wrap just this insert so we can show exactly what we tried to save
      // if it fails, instead of a generic Postgres error.
      try {
        await prisma.package.create({
          data: {
            title: fields.title,
            capacity: fields.capacity,
            price: numericPrice,
            category: fields.category,
            description: fields.description,
            image: fields.image,
            installationKits: fields.installationKits,
          },
        });
        createdCount++;
      } catch (dbError) {
        return NextResponse.json({
          error: `Item ${itemIndex + 1} failed to save.\n\nDatabase said: ${dbError.message}\n\nData sent: ${JSON.stringify(fields)}`,
        }, { status: 500 });
      }
    }

    return NextResponse.json({ message: `Successfully published ${createdCount} items!` }, { status: 201 });
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
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Item deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 