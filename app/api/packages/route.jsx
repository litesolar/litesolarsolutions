import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// GET: Fetch all packages
export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(packages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Add a new package
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, capacity, price, description, features } = body;

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price,
        description,
        features: features ? features.split(',').map(f => f.trim()) : [],
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    // This will now send the exact database error to your screen!
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
