'use client';
import Link from 'next/link';

export default function StorePage() {
  const products = [
    { id: 1, name: '5KVA Hybrid Inverter', price: '₦850,000', category: 'Inverters', img: '⚡' },
    { id: 2, name: '24V 100Ah Lithium Battery', price: '₦1,200,000', category: 'Batteries', img: '🔋' },
    { id: 3, name: '450W Monocrystalline Solar Panel', price: '₦145,000', category: 'Panels', img: '☀️' },
    { id: 4, name: '10KVA Pure Sine Wave Inverter', price: '₦1,650,000', category: 'Inverters', img: '⚡' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '6rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '1rem 1.25rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', letterSpacing: '0.5px' }}>LITESOLAR STORE</span>
          <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.8rem', backgroundColor: '#25D366', padding: '0.4rem 0.75rem', borderRadius: '0.35rem', fontWeight: 'bold' }}>
            💬 Order via WhatsApp
          </a>
        </div>
      </header>

      {/* STORE HERO */}
      <section style={{ padding: '3rem 1rem', backgroundColor: '#f8fafc', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#111827', marginBottom: '0.5rem' }}>Solar Products Catalog</h1>
        <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>Top-grade inverters, batteries, and solar panels available for nationwide delivery.</p>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {products.map((item) => (
            <div key={item.id} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ height: '140px', backgroundColor: '#f3f4f6', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', marginBottom: '1rem' }}>
                  {item.img}
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#1e3a8a', backgroundColor: '#eff6ff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{item.category}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', margin: '0.5rem 0' }}>{item.name}</h3>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#dc2626', marginBottom: '1rem' }}>{item.price}</div>
                <a 
                  href={`https://wa.me/2347030671806?text=Hello,%20I%20am%20interested%20in%20buying%20the%20${encodeURIComponent(item.name)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'block', width: '100%', backgroundColor: '#1e3a8a', color: '#fff', textAlign: 'center', padding: '0.65rem', borderRadius: '0.4rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  Buy on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
