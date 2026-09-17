export async function POST(request) {
  try {
    const rawBody = await request.json();
    console.log("RAW SUBMISSION BODY:", JSON.stringify(rawBody));

    // Helper to completely strip null bytes and invisible control characters from any value
    const clean = (val) => {
      if (val === null || val === undefined) return '';
      return String(val)
        .replace(/\0/g, '') // Removes null bytes (0x00)
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Removes control chars
        .trim();
    };

    const title = clean(rawBody.title);
    const capacity = clean(rawBody.capacity);
    const priceRaw = clean(rawBody.price);
    const category = clean(rawBody.category) || 'inverter';
    const description = clean(rawBody.description);
    const image = clean(rawBody.image) || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png';
    const installationKits = clean(rawBody.installationKits);

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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
