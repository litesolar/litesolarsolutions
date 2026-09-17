import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Prevent creating multiple prisma instances during serverless hot-reloads
const globalForPrisma = global;

// Explicitly append connection_limit and disable prepared statements for Supabase pooler
const connectionString = process.env.DATABASE_URL + (process.env.DATABASE_URL?.includes('?') ? '&' : '?') + 'pgbouncer=true&connection_limit=1';

const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

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
    // Accept 'features' from frontend payload (or fallback to installationKits if sent elsewhere)
    const { title, capacity, price, description, image, features, installationKits } = body;

    if (!capacity) {
      return NextResponse.json({ error: "Argument 'capacity' is missing." }, { status: 400 });
    }

    const finalKits = features !== undefined ? features : installationKits;

    const newPackage = await prisma.package.create({
      data: {
        title,
        capacity,
        price,
        description,
        image,
        installationKits: finalKits || "",
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
