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

// Deep cleaner to remove invisible null bytes (0x00) from all incoming text fields automatically
const sanitizeData = (data) => {
  if (typeof data === 'string') {
    return data.replace(/\0/g, '');
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
    
    // Clean everything coming from the form
    const body = sanitizeData(rawBody);
    const { title, capacity, price, description, image, installationKits } = body;

    if (!capacity) {
      return NextResponse.json({ error: "Argument 'capacity' is missing." }, { status: 400 });
    }

    // Clean the price: remove commas and convert to a number
    const numericPrice = price ? parseFloat(price.toString().replace(/,/g, '')) : 0;

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price: numericPrice,
        description,
        image,
        installationKits: installationKits || "",
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
