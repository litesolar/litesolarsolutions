'use client';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    { title: '5KVA Residential Hybrid System', location: 'Ikeja, Lagos', desc: 'Fully powered with Lithium Iron batteries and Monocrystalline panels ensuring uninterrupted power supply.', status: 'Completed' },
    { title: '10KVA Commercial Office Setup', location: 'Ibadan, Oyo State', desc: 'Zero downtime configuration supporting heavy office loads, computers, and multiple air conditioners.', status: 'Completed' },
    { title: '3.5KVA Home Backup Pack', location: 'Bodija, Ibadan', desc: 'Compact inverter setup configured to power entertainment systems, refrigeration, and lighting seamlessly.', status: 'Completed' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '6rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '1rem 1.25rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', letterSpacing: '0.5px' }}>OUR INSTALLATIONS</span>
          <Link href="/store" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.8rem', backgroundColor: '#dc2626', padding: '0.4rem 0.75rem', borderRadius: '0.35rem', fontWeight: 'bold' }}>
            Store Catalog
          </Link>
        </div>
      </header>

      {/* PROJECTS HERO */}
      <section style={{ padding: '3rem 1rem', backgroundColor: '#f8fafc', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#111827', marginBottom: '0.5rem' }}>Featured Solar Projects</h1>
        <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>Take a look at some of our recent residential and commercial installations.</p>
      </section>

      {/* PROJECTS LIST */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: '#1e3a8a' }}>{proj.title}</h3>
              <span style={{ fontSize: '0.7rem', backgroundColor: '#dcfce7', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold' }}>{proj.status}</span>
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '0.5rem' }}>📍 {proj.location}</div>
            <p style={{ color: '#4b5563', fontSize: '0.85rem', lineHeight: '1.5' }}>{proj.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
}
