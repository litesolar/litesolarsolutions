'use client';
import Link from 'next/link';

export default function SolarSolutionsPage() {
  const solutions = [
    {
      title: "Residential Solar",
      description: "Dependable power solutions tailored for homes, ensuring uninterrupted supply for your family's daily needs.",
      ideal: "Homes & Duplexes",
      icon: "🏡"
    },
    {
      title: "Commercial Solar",
      description: "Keep your business operations running smoothly, reduce overhead electricity costs, and eliminate generator fuel stress.",
      ideal: "Offices, Retail Stores & Supermarkets",
      icon: "🏢"
    },
    {
      title: "Industrial Solar",
      description: "Heavy-duty power infrastructure built to sustain heavy machinery, manufacturing equipment, and large facilities.",
      ideal: "Factories & Large Complexes",
      icon: "🏭"
    },
    {
      title: "Hybrid Solar Systems",
      description: "Intelligent systems combining grid power, solar panels, and battery storage for maximum reliability and savings.",
      ideal: "All Properties",
      icon: "⚡"
    },
    {
      title: "Off-Grid Solar",
      description: "Complete energy independence for locations without access to the national grid or unreliable grid connections.",
      ideal: "Remote Sites & Estates",
      icon: "☀️"
    },
    {
      title: "Backup Power Solutions",
      description: "Instantaneous switchover battery and inverter setups to keep essential electronics powered during outages.",
      ideal: "Homes & Offices",
      icon: "🔋"
    }
  ];

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>SOLAR SOLUTIONS</span>
          <Link href="/request-a-quote" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Quote
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            TAILORED ENERGY ARCHITECTURE
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Solar Solutions Designed Around <span style={{ color: '#60a5fa' }}>Your Energy Needs</span>[cite: 1]
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            Explore our professionally engineered options engineered for maximum efficiency, uptime, and long-term financial savings.
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {solutions.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#111827', marginBottom: '0.5rem' }}>{item.title}[cite: 1]</h3>
                <p style={{ fontSize: '0.8rem', color: '#4b5563', lineHeight: '1.5', marginBottom: '1rem' }}>{item.description}[cite: 1]</p>
                <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#1e3a8a', backgroundColor: '#eff6ff', padding: '0.3rem 0.6rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1.25rem' }}>
                  Ideal For: {item.ideal}[cite: 1]
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid #f3f4f6', paddingTop: '1rem' }}>
                <Link href="/request-a-quote" style={{ flex: 1, textAlign: 'center', backgroundColor: '#dc2626', color: '#fff', padding: '0.5rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  Request Quote[cite: 1]
                </Link>
                <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', backgroundColor: '#111827', color: '#fff', padding: '0.5rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
