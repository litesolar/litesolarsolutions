import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b0f19', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      {/* Navigation Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', backgroundColor: '#111827', borderBottom: '2px solid #ef4444' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Logo Image */}
          <img 
            src="https://i.ibb.co/rGYcpw14/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
            alt="Company Logo" 
            style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #3b82f6' }} 
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6', letterSpacing: '0.5px' }}>SolarTech</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>Home</Link>
          <Link href="/packages" style={{ color: '#9ca3af', textDecoration: 'none' }}>Solar Packages</Link>
          <Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none' }}>Services</Link>
          <Link href="/quote" style={{ backgroundColor: '#ef4444', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>Get a Quote</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '700', marginBottom: '1.5rem', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          🔥 24/7 Uninterrupted Power Solutions
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem', color: '#ffffff' }}>
          Reliable Solar Energy for Your <span style={{ color: '#3b82f6' }}>Home & Business</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '800px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
          Say goodbye to generator noise and high fuel costs. We deliver custom solar installations, high-efficiency panels, and long-lasting lithium storage engineered for maximum reliability.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/quote" style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)' }}>
            Request a Free Quote
          </Link>
          <Link href="/packages" style={{ backgroundColor: '#1f2937', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #ef4444' }}>
            View Solar Packages
          </Link>
        </div>
      </section>

      {/* Features Grid with Strategic Color Accents */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem 5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        <div style={{ backgroundColor: '#111827', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #3b82f6', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#ffffff' }}>✓ Professional Installation</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>Expert engineers handle wiring, mounting, and safe system configuration tailored to your load requirements.</p>
        </div>
        <div style={{ backgroundColor: '#111827', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #ef4444', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#ffffff' }}>✓ Top-Tier Equipment</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>Equipped with original monocrystalline panels and high-performance lithium-ion batteries that stand the test of time.</p>
        </div>
        <div style={{ backgroundColor: '#111827', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #3b82f6', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#ffffff' }}>✓ Reliable Maintenance</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>Routine performance checks, cleanings, and active customer support to keep your power running smoothly.</p>
        </div>
      </section>

    </div>
  );
}
