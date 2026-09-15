import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Fetch all packages for your public packages page
export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(packages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 });
  }
}

// POST: Add a new package from your admin dashboard
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
        features: features.split(',').map(f => f.trim()), // Turn comma-separated features into an array
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create package' }, { status: 500 });
  }
}
