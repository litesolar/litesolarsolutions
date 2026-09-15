import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, capacity, price, description, features } = body;

    // Turn comma-separated features text into a clean list for the database
    const formattedFeatures = typeof features === 'string' 
      ? features.split(',').map(item => item.trim()).filter(Boolean)
      : [];

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price,
        description,
        features: formattedFeatures,
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error("Prisma Creation Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
