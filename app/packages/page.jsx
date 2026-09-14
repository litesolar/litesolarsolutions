'use client';
import Link from 'next/link';

export default function PackagesPage() {
  const packages = [
    {
      capacity: '1.5KVA Capacity',
      name: 'Basic Starter Pack',
      desc: 'Ideal for powering lights, fans, TV, Wi-Fi router, and phone charging.',
      price: '₦450,000',
      features: ['1.5KVA Inverter', '200Ah Tubular Battery', '2x 300W Solar Panels', 'Free Installation'],
    },
    {
      capacity: '3.5KVA Capacity',
      name: 'Standard Home Pack',
      desc: 'Great for medium homes. Powers a refrigerator, TVs, fans, laptops, and light appliances.',
      price: '₦980,000',
      features: ['3.5KVA Pure Sine Inverter', 'Lithium-ion Battery Pack', '4x 400W Solar Panels', 'Professional Wiring'],
    },
    {
      capacity: '5KVA / 10KVA Capacity',
      name: 'Executive / Mansion Pack',
      desc: 'Heavy-duty power for large homes and offices. Can power ACs, pumping machines, and all household appliances.',
      price: '₦2,200,000+',
      features: ['5KVA or 10KVA Robust Inverter', 'Dual Lithium Battery Bank', '8x 400W Solar Panels', 'Smart Changeover & Surges Protection'],
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070b', color: '#ffffff', fontFamily: 'sans-serif', paddingBottom: '7rem' }}>
      
      {/* Top Accent Bar */}
      <div style={{ height: '4px', backgroundColor: '#dc2626', width: '100%' }}></div>

      {/* Navigation Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: '#0b0f19', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="https://i.ibb.co/rGYcpw14/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
            alt="Logo" 
            style={{ height: '38px', width: '38px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #2563eb' }} 
          />
          <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#2563eb', letterSpacing: '0.5px' }}>LITESOLARSOLUTIONS</span>
        </Link>
        <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold', backgroundColor: '#1f2937', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
          ← Home
        </Link>
      </nav>

      {/* Header Section */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1.5rem 1.5rem 1.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563eb', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
          ⚡ OUR SOLAR POWER PACKAGES
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          Tailored Energy Bundles
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>
          Choose a complete solar bundle tailored to your energy needs and budget. All packages come with professional installation and warranties.
        </p>
      </div>

      {/* Packages List */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {packages.map((pkg, index) => (
          <div key={index} style={{ backgroundColor: '#0b0f19', border: '1px solid #1f2937', borderRadius: '1rem', padding: '1.75rem', boxShadow: '0 4px 16px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
            
            {/* Top Badge */}
            <div style={{ display: 'inline-block', backgroundColor: '#1e3a8a', color: '#93c5fd', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: '1rem', marginBottom: '0.75rem' }}>
              {pkg.capacity}
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
              {pkg.name}
            </h3>

            <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>
              {pkg.desc}
            </p>

            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#2563eb', marginBottom: '1.25rem' }}>
              {pkg.price}
            </div>

            {/* Features Checklist */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {pkg.features.map((feat, idx) => (
                <li key={idx} style={{ color: '#d1d5db', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#22c55e', fontWeight: 'bold' }}>✓</span> {feat}
                </li>
              ))}
            </ul>

            <Link href="/quote" style={{ display: 'block', textAlign: 'center', backgroundColor: '#2563eb', color: '#ffffff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)' }}>
              Inquire / Order Package →
            </Link>

          </div>
        ))}
      </div>

      {/* Bottom Mobile Navigation Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#030508', borderTop: '1px solid #1f2937', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 0', zIndex: 150 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>☀️</span>
          <span>Home</span>
        </Link>
        <Link href="/packages" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#2563eb', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>⚡</span>
          <span>Solutions</span>
        </Link>
        <Link href="/#calculator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>🧮</span>
          <span>Calculator</span>
        </Link>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#22c55e', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
