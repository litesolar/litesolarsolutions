'use client';
import Link from 'next/link';

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Integrity',
      description: 'Honest recommendations, transparent pricing, and dependable business ethics.'
    },
    {
      title: 'Quality',
      description: 'Sourcing durable, top-tier solar equipment built to withstand local environmental conditions.'
    },
    {
      title: 'Reliability',
      description: 'Consistent power uptime and dependable after-sales maintenance support.'
    },
    {
      title: 'Customer First',
      description: 'Tailoring every installation to fit exact household or business energy requirements and budgets.'
    },
    {
      title: 'Innovation',
      description: 'Leveraging modern smart inverters and lithium energy storage technologies for maximum efficiency.'
    }
  ];

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
      <section style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '3rem 1rem', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.95)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#93c5fd', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            WHO WE ARE
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.3', color: '#ffffff' }}>
            Powering Homes. Supporting Businesses. <span style={{ color: '#93c5fd' }}>Building a Better Energy Future.</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
            Dedicated to bringing reliable, independent energy solutions to residential, commercial, and industrial clients from our base in Ijebu Ode, Ogun State and across Nigeria.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* MISSION & VISION BOX */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.75rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
            Our Mission & Vision
          </h2>
          <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', marginBottom: '1rem' }}>
            We aim to bridge energy gaps by providing meticulously designed solar installations that offer true financial savings and absolute peace of mind against grid instability.
          </p>
          <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
            Our vision is to become a leading trusted household name for sustainable power engineering, defined by uncompromising quality and technical excellence.
          </p>
        </div>

        {/* CORE VALUES SECTION */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e3a8a' }}>Our Core Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {coreValues.map((val, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.4rem' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5' }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
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
