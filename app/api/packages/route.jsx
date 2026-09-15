import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, capacity, price, description, features } = body;

    // Convert the comma-separated string from the form into a clean array for Prisma
    const featuresArray = typeof features === 'string' 
      ? features.split(',').map(f => f.trim()).filter(Boolean) 
      : [];

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price,
        description,
        features: featuresArray, // Saved as an array of strings
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
