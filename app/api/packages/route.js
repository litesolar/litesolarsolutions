import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Force Next.js to never cache this API so new products show up instantly
export const dynamic = 'force-dynamic';

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

// Deep recursive sanitizer to destroy null bytes
const sanitizeDeep = (obj) => {
  if (typeof obj === 'string') {
    return obj.replace(/\0/g, '').replace(/\u0000/g, '').replace(/[\u0000-\u001F\u007F-\u009F]/g, '').trim();
  } else if (Array.isArray(obj)) {
    return obj.map(sanitizeDeep);
  } else if (obj !== null && typeof obj === 'object') {
    const cleanedObj = {};
    for (const key of Object.keys(obj)) {
      cleanedObj[key] = sanitizeDeep(obj[key]);
    }
    return cleanedObj;
  }
  return obj;
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
    const body = sanitizeDeep(rawBody);
    
    const { title, capacity, price, category, description, image, installationKits } = body;

    if (!title || !capacity) {
      return NextResponse.json({ error: "Title and capacity are required." }, { status: 400 });
    }

    const numericPrice = price ? parseFloat(price.toString().replace(/,/g, '')) : 0;

    const newPackage = await prisma.package.create({
      data: {
        title: title.toString(),
        capacity: capacity.toString(),
        price: numericPrice,
        category: category ? category.toString() : 'inverter',
        description: description ? description.toString() : '',
        image: image ? image.toString() : 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png',
        installationKits: installationKits ? installationKits.toString() : '',
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error("DATABASE INSERT ERROR:", error.message);
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
