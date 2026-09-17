import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const connectionString = process.env.DATABASE_URL + (process.env.DATABASE_URL?.includes('?') ? '&' : '?') + 'pgbouncer=true&connection_limit=1';

const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Universal cleaner to strip out null bytes and weird invisible characters
const cleanText = (val) => {
  if (typeof val !== 'string') return val;
  return val.replace(/\0/g, '').replace(/[\u0000-\u001F\u007F-\u009F]/g, '').trim();
};

export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      orderBy: { id: 'desc' },
    });
    return NextResponse.json(packages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const title = cleanText(body.title);
    const capacity = cleanText(body.capacity);
    const priceStr = cleanText(body.price);
    const category = cleanText(body.category) || 'inverter';
    const description = cleanText(body.description);
    const image = cleanText(body.image);
    const installationKits = cleanText(body.installationKits);

    if (!title || !capacity) {
      return NextResponse.json({ error: "Title and capacity are required." }, { status: 400 });
    }

    const numericPrice = priceStr ? parseFloat(priceStr.replace(/,/g, '')) : 0;

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price: numericPrice,
        category,
        description,
        image: image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png',
        installationKits,
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Package ID required' }, { status: 400 });
    }

    await prisma.package.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
