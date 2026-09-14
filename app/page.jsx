import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070b', color: '#ffffff', fontFamily: 'sans-serif', position: 'relative', paddingBottom: '5rem' }}>
      
      {/* Top Strategic Red Accent Bar */}
      <div style={{ height: '4px', backgroundColor: '#dc2626', width: '100%' }}></div>

      {/* Navigation Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: '#0b0f19', borderBottom: '1px solid #1f2937' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="https://i.ibb.co/rGYcpw14/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
            alt="LITESOLARSOLUTIONS Logo" 
            style={{ height: '38px', width: '38px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #2563eb' }} 
          />
          <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#2563eb', letterSpacing: '0.5px' }}>LITESOLARSOLUTIONS</span>
        </div>
        
        {/* Menu Icon Placeholder */}
        <div style={{ color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff' }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff' }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff' }}></div>
        </div>
      </nav>

      {/* Hero Section Layout */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563eb', letterSpacing: '1.5px', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>☀️</span> POWER & SUSTAINABILITY
        </div>

        <h1 style={{ fontSize: '2.75rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
          <span style={{ color: '#ffffff' }}>LITE SOLAR</span> <br />
          <span style={{ color: '#2563eb' }}>SOLUTIONS</span>
        </h1>

        <p style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.4', marginBottom: '1.25rem', letterSpacing: '0.5px' }}>
          ILLUMINATEING YOUR WORLD WITH AFFORDABLE SOLAR SOLUTIONS.
        </p>

        <p style={{ fontSize: '0.95rem', color: '#9ca3af', marginBottom: '2rem', lineHeight: '1.5' }}>
          Smart solar energy solutions designed to bring reliable, clean and efficient power to homes and businesses.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <Link href="/quote" style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '1rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}>
            <span>GET A SOLAR ASSESSMENT</span>
            <span style={{ fontSize: '1.25rem' }}>→</span>
          </Link>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', paddingRight: '0.5rem' }}>
            <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#ffffff' }}>TALK TO US</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #374151', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0b0f19' }}>
              💬
            </div>
          </div>
        </div>

        {/* Power Calculator Banner */}
        <Link href="/quote" style={{ display: 'block', textDecoration: 'none', border: '1px solid #374151', borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', backgroundColor: '#0b0f19', color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          CALCULATE YOUR POWER NEEDS 🧮
        </Link>
      </section>

      {/* Bottom Mobile Navigation Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#030508', borderTop: '1px solid #1f2937', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 0', zIndex: 50 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#2563eb', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>☀️</span>
          <span>Home</span>
        </Link>
        <Link href="/packages" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>⚡</span>
          <span>Solutions</span>
        </Link>
        <Link href="/quote" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
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
