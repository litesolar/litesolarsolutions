'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>CONTACT US</span>
          <Link href="/request-a-quote" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Quote
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            REACH OUT TO US
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Let's Talk About <span style={{ color: '#60a5fa' }}>Your Energy Needs</span>
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            Get in touch for professional consultations, system inquiries, and dependable customer support.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <main style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        
        {/* CONTACT INFO CARD */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '1rem', color: '#111827' }}>Contact Information[cite: 1]</h2>
          
          <div style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 'bold', color: '#dc2626', marginBottom: '0.2rem' }}>📞 Phone & WhatsApp</div>
            <div style={{ color: '#374151' }}>07030671806</div>
          </div>

          <div style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 'bold', color: '#dc2626', marginBottom: '0.2rem' }}>📧 Email Address</div>
            <div style={{ color: '#374151' }}>info@solarmetrics.ng (Placeholder)</div>
          </div>

          <div style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 'bold', color: '#dc2626', marginBottom: '0.2rem' }}>📍 Office Address</div>
            <div style={{ color: '#374151' }}>Ibadan, Oyo State, Nigeria</div>
          </div>

          <div style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 'bold', color: '#dc2626', marginBottom: '0.2rem' }}>⏰ Business Hours</div>
            <div style={{ color: '#374151' }}>Mon - Sat: 8:00 AM - 6:00 PM</div>
          </div>

          <div style={{ marginBottom: '1.25rem', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 'bold', color: '#dc2626', marginBottom: '0.3rem' }}>🌐 Social Handles</div>
            <div style={{ color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span>Instagram: <strong>@litesolarsolutions</strong></span>
              <span>TikTok: <strong>@litesolarenergy</strong></span>
            </div>
          </div>

          <div>
            <a 
              href="https://wa.me/2347030671806" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', backgroundColor: '#16a34a', color: '#fff', padding: '0.6rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.75rem' }}
            >
              Chat on WhatsApp[cite: 1]
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '1rem', color: '#111827' }}>Send Us a Message[cite: 1]</h2>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Full Name[cite: 1]</label>
              <input type="text" placeholder="Enter your full name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Phone Number[cite: 1]</label>
              <input type="tel" placeholder="07030671806" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Email Address[cite: 1]</label>
              <input type="email" placeholder="yourname@email.com" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Message[cite: 1]</label>
              <textarea rows="3" placeholder="Tell us about your power requirements..." required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }}></textarea>
            </div>

            <button type="submit" style={{ backgroundColor: '#dc2626', color: '#fff', padding: '0.6rem', borderRadius: '4px', border: 'none', fontWeight: 'bold', fontSize: '0.75rem', cursor: 'pointer', marginTop: '0.5rem' }}>
              Send Message[cite: 1]
            </button>
          </form>
        </div>

      </main>

    </div>
  );
}
