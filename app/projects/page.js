'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL');

  const projectsList = [
    {
      title: "Luxury Duplex Off-Grid Solution",
      category: "RESIDENTIAL",
      location: "Bodija, Ibadan",
      systemSize: "10KVA Hybrid Inverter",
      solarCapacity: "5.4kW Panels",
      batteryCapacity: "15kWh Lithium Storage",
      description: "Complete residential migration to clean energy, powering heavy household appliances seamlessly 24/7."
    },
    {
      title: "Supermarket Solar Backup System",
      category: "COMMERCIAL",
      location: "Ring Road, Ibadan",
      systemSize: "15KVA Three-Phase",
      solarCapacity: "8.2kW Panels",
      batteryCapacity: "20kWh Battery Bank",
      description: "Commercial installation designed to eliminate diesel generator costs and keep refrigeration units running continuously."
    },
    {
      title: "Manufacturing Warehouse Power Hub",
      category: "INDUSTRIAL",
      location: "Oluyole Industrial Estate",
      systemSize: "30KVA Industrial Setup",
      solarCapacity: "18kW Panels",
      batteryCapacity: "40kWh Storage",
      description: "Heavy-duty power infrastructure built to sustain industrial equipment and operational lighting."
    },
    {
      title: "Residential Estate Apartment Package",
      category: "RESIDENTIAL",
      location: "Akobo, Ibadan",
      systemSize: "5KVA Hybrid Inverter",
      solarCapacity: "3.2kW Panels",
      batteryCapacity: "10kWh Storage",
      description: "Compact, quiet home installation providing reliable backup for entertainment systems, cooling, and remote work."
    }
  ];

  const filteredProjects = filter === 'ALL' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>OUR PROJECTS</span>
          <Link href="/request-a-quote" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Quote
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            TRACK RECORD OF EXCELLENCE
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Completed Solar <span style={{ color: '#60a5fa' }}>Installations</span>[cite: 1]
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            Browse through our portfolio of successful residential, commercial, and industrial energy deployments[cite: 1].
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div style={{ maxWidth: '1200px', margin: '1.5rem auto 0 auto', padding: '0 1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              backgroundColor: filter === cat ? '#dc2626' : '#ffffff',
              color: filter === cat ? '#ffffff' : '#374151',
              border: '1px solid #d1d5db',
              padding: '0.4rem 0.8rem',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <main style={{ maxWidth: '1200px', margin: '1.5rem auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filteredProjects.map((proj, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#dc2626', backgroundColor: '#fee2e2', padding: '0.15rem 0.4rem', borderRadius: '3px' }}>
                    {proj.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: '600' }}>📍 {proj.location}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '900', color: '#111827', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#4b5563', lineHeight: '1.4', marginBottom: '1rem' }}>{proj.description}[cite: 1]</p>
                
                <div style={{ backgroundColor: '#f9fafb', padding: '0.75rem', borderRadius: '6px', fontSize: '0.75rem', marginBottom: '1rem', border: '1px solid #f3f4f6' }}>
                  <div style={{ marginBottom: '0.2rem' }}>⚡ <strong>System:</strong> {proj.systemSize}</div>
                  <div style={{ marginBottom: '0.2rem' }}>☀️ <strong>Solar:</strong> {proj.solarCapacity}</div>
                  <div>🔋 <strong>Storage:</strong> {proj.batteryCapacity}</div>
                </div>
              </div>

              <Link 
                href="/request-a-quote"
                style={{ textAlign: 'center', backgroundColor: '#111827', color: '#fff', padding: '0.5rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}
              >
                Request Similar Setup
              </Link>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}3
