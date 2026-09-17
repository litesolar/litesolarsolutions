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
    const rawBody = await request.json().catch(() => ({}));
    console.log("--- INCOMING RAW BODY ---", JSON.stringify(rawBody));

    // Strict sanitizer that removes null bytes and low control codes while keeping normal newlines
    const cleanStr = (val) => {
      if (val === null || val === undefined) return '';
      return String(val)
        .replace(/\0/g, '')
        .replace(/\u0000/g, '')
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
        .trim();
    };

    const dataToCreate = {
      title: cleanStr(rawBody.title),
      capacity: cleanStr(rawBody.capacity),
      price: rawBody.price ? parseFloat(String(rawBody.price).replace(/,/g, '')) : 0,
      category: cleanStr(rawBody.category) || 'inverter',
      description: cleanStr(rawBody.description),
      image: cleanStr(rawBody.image) || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png',
      installationKits: cleanStr(rawBody.installationKits),
    };

    console.log("--- FINAL DATA TO PRISMA ---", JSON.stringify(dataToCreate));

    const newPackage = await prisma.package.create({
      data: dataToCreate,
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error("DATABASE INSERT ERROR:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
