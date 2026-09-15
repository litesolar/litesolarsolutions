'use client';
import Link from 'next/link';

export default function AboutUsPage() {
  const values = [
    { title: "Integrity", desc: "Honest recommendations, transparent pricing, and dependable business ethics." },
    { title: "Quality", desc: "Sourcing durable, top-tier solar equipment built to withstand local environmental conditions." },
    { title: "Reliability", desc: "Consistent power uptime and dependable after-sales maintenance support[cite: 1]." },
    { title: "Customer First", desc: "Tailoring every single energy architecture around the specific needs of the client[cite: 1]." },
    { title: "Innovation", desc: "Utilizing modern engineering practices and smart technology for maximum efficiency[cite: 1]." }
  ];

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>ABOUT US</span>
          <Link href="/request-a-quote" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Quote
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            WHO WE ARE
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Powering Homes. Supporting Businesses. <span style={{ color: '#60a5fa' }}>Building a Better Energy Future.</span>[cite: 1]
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            Dedicated to bringing reliable, independent energy solutions to residential, commercial, and industrial clients across Nigeria[cite: 1].
          </p>
        </div>
      </section>

      {/* WHO WE ARE & MISSION/VISION */}
      <main style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem' }}>
        
        <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', marginBottom: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#111827', marginBottom: '0.75rem' }}>Our Mission & Vision</h2>
          <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
            We aim to bridge energy gaps by providing meticulously designed solar installations that offer true financial savings and absolute peace of mind against grid instability.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
            Our vision is to become a leading trusted household name for sustainable power engineering, defined by uncompromising quality and technical excellence.
          </p>
        </div>

        {/* CORE VALUES */}
        <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#111827', marginBottom: '1rem', textAlign: 'center' }}>
          Our Core Values
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {values.map((val, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '900', color: '#dc2626', marginBottom: '0.4rem' }}>{val.title}[cite: 1]</h3>
              <p style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.4', margin: 0 }}>{val.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY CUSTOMERS TRUST US */}
        <div style={{ backgroundColor: '#111827', color: '#ffffff', padding: '1.75rem', borderRadius: '0.75rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '0.75rem', color: '#60a5fa' }}>Why Customers Trust Us[cite: 1]</h2>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', lineHeight: '1.5', maxWidth: '700px', margin: '0 auto 1.25rem auto' }}>
            We adhere strictly to transparency, professional safety measures, and custom system sizing to guarantee optimal performance without exaggerated claims[cite: 1].
          </p>
          <Link 
            href="/request-a-quote"
            style={{ display: 'inline-block', backgroundColor: '#dc2626', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.75rem' }}
          >
            Get in Touch With Us
          </Link>
        </div>

      </main>

    </div>
  );
}
