import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all packages
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

// POST new package
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, capacity, price, description, image, features } = body;

    // Validate that capacity exists
    if (!capacity) {
      return NextResponse.json({ error: "Argument 'capacity' is missing." }, { status: 400 });
    }

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price,
        description,
        image,
        features,
      },
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE package
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
