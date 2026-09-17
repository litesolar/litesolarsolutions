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

// Absolute sanitizer to strip null bytes (\0) and control characters
const sanitizeData = (data) => {
  if (typeof data === 'string') {
    return data.replace(/\0/g, '').replace(/[\u0000-\u001F\u007F-\u009F]/g, '').trim();
  } else if (Array.isArray(data)) {
    return data.map(sanitizeData);
  } else if (data !== null && typeof data === 'object') {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, sanitizeData(value)])
    );
  }
  return data;
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
    const rawBody = await request.json();
    const body = sanitizeData(rawBody);
    const { title, capacity, price, category, description, image, installationKits } = body;

    if (!title || !capacity) {
      return NextResponse.json({ error: "Title and capacity are required." }, { status: 400 });
    }

    // Clean the price: remove commas and convert to a number
    const numericPrice = price ? parseFloat(price.toString().replace(/,/g, '')) : 0;

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price: numericPrice,
        category: category || 'inverter',
        description: description || '',
        image: image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png',
        installationKits: installationKits || '',
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
