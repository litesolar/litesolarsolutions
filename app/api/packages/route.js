import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

// Deep recursive function that strips null bytes from EVERY property and nested object
const sanitizeDeep = (data) => {
  if (typeof data === 'string') {
    return data
      .replace(/\u0000/g, '') // Explicitly targets null bytes
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Strips control characters
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
    return NextResponse.json({ error: error.message || "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const rawBody = await request.json().catch(() => ({}));
    
    // Clean the entire incoming request body recursively
    const body = sanitizeDeep(rawBody);

    const title = body.title || '';
    const capacity = body.capacity || '';
    const priceRaw = body.price || '';
    const category = body.category || 'inverter';
    const description = body.description || '';
    const image = body.image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png';
    const installationKits = body.installationKits || '';

    if (!title || !capacity) {
      return NextResponse.json({ error: "Title and capacity are required." }, { status: 400 });
    }

    const numericPrice = priceRaw ? parseFloat(String(priceRaw).replace(/,/g, '')) : 0;

    const newPackage = await prisma.package.create({
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

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error("DATABASE INSERT ERROR:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
