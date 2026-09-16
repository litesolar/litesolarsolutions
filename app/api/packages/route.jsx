import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// GET: Fetch all store packages from PostgreSQL
export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(packages, { status: 200 });
  } catch (error) {
    console.error("Prisma Fetch Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Create a new store package from the admin dashboard
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, capacity, price, description, image, features } = body;

    // Convert features to a clean array if it comes as a comma-separated string or array
    const formattedFeatures = Array.isArray(features)
      ? features
      : typeof features === 'string'
      ? features.split(',').map(item => item.trim()).filter(Boolean)
      : [];

    const newPackage = await prisma.package.create({
      data: {
        title: title || 'Solar Package',
        capacity: capacity || 'Standard',
        price: String(price),
        description: description || '',
        image: image || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png',
        features: formattedFeatures,
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error("Prisma Creation Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Remove a package by its CUID string ID
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Package ID is required' }, { status: 400 });
    }

    await prisma.package.delete({
      where: { id: String(id) },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Prisma Deletion Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
