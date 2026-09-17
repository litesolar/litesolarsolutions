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
    return NextResponse.json({ error: error.message || "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const rawText = await request.text();
    
    // Completely wipe out any null bytes or control weirdness from the raw request string first
    const sanitizedText = rawText
      .replace(/\\u0000/g, '')
      .replace(/\u0000/g, '')
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

    const body = JSON.parse(sanitizedText || '{}');

    const clean = (val) => {
      if (val === null || val === undefined) return '';
      return String(val)
        .replace(/\u0000/g, '')
        .replace(/[\x00-\x1F\x7F]/g, '')
        .trim();
    };

    const title = clean(body.title);
    const capacity = clean(body.capacity);
    const priceRaw = clean(body.price);
    const category = clean(body.category) || 'inverter';
    const description = clean(body.description);
    const image = clean(body.image) || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png';
    const installationKits = clean(body.installationKits);

    if (!title || !capacity) {
      return NextResponse.json({ error: "Title and capacity are required." }, { status: 400 });
    }

    const numericPrice = priceRaw ? parseFloat(priceRaw.replace(/,/g, '')) : 0;

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
