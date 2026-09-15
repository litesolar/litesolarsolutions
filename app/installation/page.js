'use client';
import Link from 'next/link';

export default function InstallationPage() {
  const steps = [
    { title: "Site Assessment", desc: "Evaluating your property layout, energy requirements, and optimal panel positioning." },
    { title: "System Design", desc: "Engineering a custom solar architecture tailored to your specific load and backup goals." },
    { title: "Equipment Selection", desc: "Sourcing premium-grade panels, inverters, batteries, and balance-of-system hardware." },
    { title: "Installation", desc: "Professional mounting, wiring, and integration performed by certified technicians." },
    { title: "Testing", desc: "Rigorous electrical safety testing, voltage calibration, and system stress checks." },
    { title: "Handover", desc: "System commissioning, client walkthrough, and orientation on usage and monitoring." }
  ];

  const services = [
    "Solar Panels Setup", "Hybrid Inverters Configuration", "Off-Grid Power Systems", 
    "Battery Storage Integration", "Backup Power Systems", "Solar Accessories & Wiring"
  ];

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>INSTALLATION SERVICES</span>
          <Link href="/request-a-quote" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Quote
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            EXPERT ENGINEERING & DEPLOYMENT
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Professional Solar <span style={{ color: '#60a5fa' }}>Installation</span>
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '1.5rem' }}>
            We handle end-to-end system design, precision equipment selection, safe installation, rigorous testing, and final handover[cite: 1].
          </p>
          <Link 
            href="/request-a-quote"
            style={{ display: 'inline-block', backgroundColor: '#dc2626', color: '#fff', padding: '0.65rem 1.25rem', borderRadius: '0.4rem', fontWeight: '900', textDecoration: 'none', fontSize: '0.8rem' }}
          >
            Book a Site Assessment[cite: 1]
          </Link>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <main style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '900', textAlign: 'center', marginBottom: '1.5rem', color: '#111827' }}>
          Our Installation Process
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: '900', color: '#dc2626', marginBottom: '0.3rem' }}>STEP 0{idx + 1}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '900', color: '#111827', marginBottom: '0.4rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.4', margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* SERVICES OFFERED */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '1rem', color: '#111827' }}>Specialized Installation Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {services.map((srv, i) => (
              <div key={i} style={{ fontSize: '0.8rem', fontWeight: '700', color: '#1f2937', backgroundColor: '#f9fafb', padding: '0.6rem 0.8rem', borderRadius: '4px', border: '1px solid #f3f4f6' }}>
                ✓ {srv}
              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  );
}3
