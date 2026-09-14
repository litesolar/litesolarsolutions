import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#111827', fontFamily: 'sans-serif' }}>
      
      {/* Navigation Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', backgroundColor: '#ffffff', borderBottom: '2px solid #2563eb', borderTop: '4px solid #dc2626' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img 
            src="https://i.ibb.co/rGYcpw14/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
            alt="LITESOLARSOLUTIONS Logo" 
            style={{ height: '42px', width: '42px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #2563eb' }} 
          />
          <span style={{ fontSize: '1.35rem', fontWeight: '900', color: '#2563eb', letterSpacing: '0.5px' }}>LITESOLARSOLUTIONS</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '700' }}>Home</Link>
          <Link href="/packages" style={{ color: '#111827', textDecoration: 'none', fontWeight: '600' }}>Solar Packages</Link>
          <Link href="/services" style={{ color: '#111827', textDecoration: 'none', fontWeight: '600' }}>Services</Link>
          <Link href="/quote" style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.5rem 1.1rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>Get a Quote</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#dc2626', padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '700', marginBottom: '1.5rem', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
          🔥 24/7 Uninterrupted Power Solutions
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem', color: '#111827' }}>
          Reliable Solar Energy for Your <span style={{ color: '#2563eb' }}>Home & Business</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#374151', maxWidth: '800px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
          Say goodbye to generator noise and high fuel costs. LITESOLARSOLUTIONS delivers custom solar installations, high-efficiency panels, and long-lasting lithium storage engineered for maximum reliability.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/quote" style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)' }}>
            Request a Free Quote
          </Link>
          <Link href="/packages" style={{ backgroundColor: '#ffffff', color: '#111827', padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 'bold', textDecoration: 'none', border: '2px solid #111827' }}>
            View Solar Packages
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #2563eb', borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111827' }}>✓ Professional Installation</h3>
          <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.5' }}>Expert engineers handle wiring, mounting, and safe system configuration tailored to your load requirements.</p>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #dc2626', borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111827' }}>✓ Top-Tier Equipment</h3>
          <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.5' }}>Equipped with original monocrystalline panels and high-performance lithium-ion batteries that stand the test of time.</p>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #2563eb', borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111827' }}>✓ Reliable Maintenance</h3>
          <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.5' }}>Routine performance checks, cleanings, and active customer support to keep your power running smoothly.</p>
        </div>
      </section>

    </div>
  );
}
