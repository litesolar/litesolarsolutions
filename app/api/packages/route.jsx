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

// Helper to remove invisible broken/null characters that crash PostgreSQL
const sanitize = (val) => (typeof val === 'string' ? val.replace(/\0/g, '') : val);

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
    let { title, capacity, price, description, image, installationKits } = body;

    if (!capacity) {
      return NextResponse.json({ error: "Argument 'capacity' is missing." }, { status: 400 });
    }

    // 1. CLEAN THE PRICE: Removes commas (e.g. "120,000" becomes 120000)
    const numericPrice = price ? parseFloat(price.toString().replace(/,/g, '')) : 0;

    const newPackage = await prisma.package.create({
      data: {
        title: sanitize(title),
        capacity: sanitize(capacity),
        price: numericPrice,
        description: sanitize(description),
        image: sanitize(image),
        installationKits: sanitize(installationKits) || "",
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
