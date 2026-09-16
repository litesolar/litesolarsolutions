'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: 'Luxury Duplex Off-Grid Solution',
      category: 'RESIDENTIAL',
      location: 'Ijebu Ode, Ogun State',
      description: 'Complete residential migration to clean energy, powering heavy household appliances seamlessly 24/7.',
      system: '10KVA Hybrid Inverter',
      solar: '5.4kW Panels',
      storage: '15kWh Lithium Storage',
      image: 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png'
    },
    {
      id: 2,
      title: 'Supermarket Solar Backup System',
      category: 'COMMERCIAL',
      location: 'Ijebu Ode, Ogun State',
      description: 'Commercial installation designed to eliminate diesel generator costs and keep refrigeration units running continuously.',
      system: '15KVA Three-Phase',
      solar: '8.2kW Panels',
      storage: '20kWh Battery Bank',
      image: 'https://i.ibb.co/LXpJTbsP/Whats-App-Image-2026-09-14-at-15-40-58.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Warehouse Power Hub',
      category: 'INDUSTRIAL',
      location: 'Ogun State Industrial Zone',
      description: 'Heavy-duty power infrastructure built to sustain industrial equipment and operational lighting.',
      system: '30KVA Industrial Setup',
      solar: '18kW Panels',
      storage: '40kWh Storage',
      image: 'https://i.ibb.co/zHjNx5rm/Whats-App-Image-2026-09-16-at-06-16-42.jpg'
    },
    {
      id: 4,
      title: 'Residential Estate Apartment Block',
      category: 'RESIDENTIAL',
      location: 'Ijebu Ode, Ogun State',
      description: 'Multi-apartment shared solar energy system providing reliable backup to tenants.',
      system: '20KVA Hybrid System',
      solar: '10kW Panels',
      storage: '30kWh Lithium Storage',
      image: 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png'
    }
  ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1f2937', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '5rem', fontSize: '14px' }}>
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.4rem 1rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '11px', fontWeight: '600' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>PROJECTS</Link>
          <span>|</span>
          <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>ABOUT US</Link>
        </div>
      </div>

      {/* CLEAN STICKY HEADER WITH LOGO */}
      <header style={{ backgroundColor: '#ffffff', color: '#1e3a8a', padding: '0.5rem 1rem', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#1e3a8a' }}>
            <img 
              src="https://i.ibb.co/TBbM6PH8/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
              alt="litesolarsolutions logo" 
              style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
            />
            <span style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '0.3px' }}>litesolarsolutions</span>
          </Link>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/" style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', textDecoration: 'none' }}>
              ← Back to Home
            </Link>
            <Link 
              href="/request-a-quote"
              style={{ backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: '0.25rem', fontWeight: '600', fontSize: '12px' }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION - PROFESSIONAL BLUE & WHITE */}
      <section style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.95)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#93c5fd', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            TRACK RECORD OF EXCELLENCE
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2', color: '#ffffff' }}>
            Completed Solar <span style={{ color: '#93c5fd' }}>Installations</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
            Browse through our portfolio of successful residential, commercial, and industrial energy deployments across Nigeria.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div style={{ maxWidth: '1100px', margin: '2rem auto 1rem auto', padding: '0 1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '0.3rem',
              fontSize: '11px',
              fontWeight: '800',
              cursor: 'pointer',
              border: filter === cat ? '1px solid #1e3a8a' : '1px solid #cbd5e1',
              backgroundColor: filter === cat ? '#1e3a8a' : '#ffffff',
              color: filter === cat ? '#ffffff' : '#334155'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredProjects.map((project) => (
            <div key={project.id} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '9px', fontWeight: '800', backgroundColor: '#eff6ff', color: '#2563eb', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
                    📍 {project.location}
                  </span>
                </div>

                <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.4', marginBottom: '1rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '0.4rem', fontSize: '11px', color: '#334155', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div>⚡ <strong>System:</strong> {project.system}</div>
                  <div>☀️ <strong>Solar:</strong> {project.solar}</div>
                  <div>🔋 <strong>Storage:</strong> {project.storage}</div>
                </div>

                <Link 
                  href={`https://wa.me/2347030671806?text=Hello%20litesolarsolutions,%20I%20am%20interested%20in%20a%20setup%20similar%20to%20your%20project:%20${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textAlign: 'center', backgroundColor: '#2563eb', color: '#fff', padding: '0.6rem', borderRadius: '0.3rem', textDecoration: 'none', fontWeight: '700', fontSize: '12px' }}
                >
                  Request Similar Setup 💬
                </Link>
              </div>

            </div>
          ))}
        </div>
      </main>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '1rem', right: '1rem', backgroundColor: '#25D366', color: '#fff', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: '0 3px 8px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
