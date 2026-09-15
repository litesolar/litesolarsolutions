'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [appliances, setAppliances] = useState({
    tv: 1,
    fans: 2,
    fridge: 0,
    ac: 0,
    lights: 4,
    washingMachine: 0,
    pumpingMachine: 0,
    iron: 1,
  });

  const calculateLoad = () => {
    let totalWatts = 
      appliances.tv * 100 + 
      appliances.fans * 75 + 
      appliances.fridge * 200 + 
      appliances.ac * 1500 + 
      appliances.lights * 20 +
      appliances.washingMachine * 800 +
      appliances.pumpingMachine * 1100 +
      appliances.iron * 1000;

    let recommended = "1.5KVA Starter Pack";
    let price = "₦1,000,000";

    if (totalWatts > 800 && totalWatts <= 2000) {
      recommended = "3.5KVA Standard Home Pack";
      price = "₦2,500,000";
    } else if (totalWatts > 2000) {
      recommended = "5KVA / 10KVA Executive Mansion Pack";
      price = "₦5,200,000+";
    }

    return { totalWatts, recommended, price };
  };

  const result = calculateLoad();

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '6rem' }}>
      
      {/* TOP ANNOUNCEMENT BAR (Socials Removed) */}
      <div style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <Link href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>SOLAR PROJECTS</Link>
          <span>|</span>
          <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>ABOUT US</Link>
        </div>
      </div>

      {/* CLEAN STICKY HEADER (Navigation links moved to bottom) */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.8rem 1.25rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link 
              href="/store"
              style={{ backgroundColor: '#dc2626', color: '#fff', textDecoration: 'none', padding: '0.5rem 0.85rem', borderRadius: '0.35rem', fontWeight: 'bold', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <span>🏪</span> Store
            </Link>

            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#fff' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#1e3a8a', fontSize: '0.9rem' }}>
                ⚡
              </div>
              <div style={{ lineHeight: '1.15' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.5px', display: 'block' }}>LITESOLAR</span>
                <span style={{ fontSize: '0.5rem', fontWeight: '700', letterSpacing: '0.5px', opacity: 0.9, display: 'block' }}>TECHNOLOGIES</span>
              </div>
            </Link>
          </div>

        </div>
      </header>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section style={{ 
        padding: '4rem 1rem', 
        backgroundColor: '#0b0f19', 
        backgroundImage: 'linear-gradient(rgba(11, 15, 25, 0.90), rgba(11, 15, 25, 0.94)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        borderBottom: '1px solid #374151'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.25)', color: '#f87171', border: '1px solid rgba(220, 38, 38, 0.4)', padding: '0.3rem 0.75rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: '800', marginBottom: '1rem' }}>
            🔥 POWERING A SMARTER TOMORROW
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '900', lineHeight: '1.25', marginBottom: '1rem', color: '#ffffff' }}>
            Shop Superior Quality <br />
            <span style={{ color: '#60a5fa' }}>Solar Products</span> at Best Prices.
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Reliable solar panels, high-performance inverters, and lithium batteries engineered for Nigerian homes and businesses.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/store"
              style={{ backgroundColor: '#dc2626', color: '#fff', textDecoration: 'none', padding: '0.8rem 1.75rem', borderRadius: '0.4rem', fontWeight: '900', fontSize: '0.85rem' }}
            >
              Browse Complete Store Catalog ➔
            </Link>
            <Link 
              href="/request-a-quote"
              style={{ backgroundColor: '#1e3a8a', color: '#fff', textDecoration: 'none', padding: '0.8rem 1.75rem', borderRadius: '0.4rem', fontWeight: '900', fontSize: '0.85rem', border: '1px solid #374151' }}
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* LOAD CALCULATOR */}
      <section style={{ maxWidth: '750px', margin: '2rem auto', padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#dc2626', letterSpacing: '1px', marginBottom: '0.3rem' }}>
          🧮 INSTANT SYSTEM SIZER
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.4rem', color: '#111827' }}>Calculate What You Need</h2>
        <p style={{ color: '#4b5563', fontSize: '0.8rem', marginBottom: '1.25rem' }}>Select appliances to estimate your solar package:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {[
            { label: '📺 TV (100W)', key: 'tv' },
            { label: '🌀 Fans (75W)', key: 'fans' },
            { label: '🧊 Fridge (200W)', key: 'fridge' },
            { label: '❄️ AC (1500W)', key: 'ac' },
            { label: '💡 Lights (20W)', key: 'lights' },
            { label: '👕 Washer (800W)', key: 'washingMachine' },
            { label: '💧 Pump (1100W)', key: 'pumpingMachine' },
            { label: '🔌 Iron (1000W)', key: 'iron' }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.35rem', border: '1px solid #e5e7eb', fontSize: '0.8rem' }}>
              <span>{item.label}</span>
              <input type="number" min="0" value={appliances[item.key]} onChange={(e) => setAppliances({...appliances, [item.key]: parseInt(e.target.value) || 0})} style={{ width: '45px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold', fontSize: '0.8rem' }} />
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', border: '2px solid #1e3a8a', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>Estimated Load: <strong>{result.totalWatts} Watts</strong></div>
          <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#1e3a8a', margin: '0.25rem 0' }}>Recommended: {result.recommended}</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#dc2626', marginBottom: '0.85rem' }}>From {result.price}</div>
          <Link href="/request-a-quote" style={{ display: 'inline-block', backgroundColor: '#1e3a8a', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>
            Get Exact Quote for this Setup
          </Link>
        </div>
      </section>

      {/* PROJECTS PAGE PREVIEW */}
      <section style={{ maxWidth: '850px', margin: '2.5rem auto', padding: '1.75rem', backgroundColor: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#1e3a8a', letterSpacing: '1px' }}>⚡ RECENT INSTALLATIONS</div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#111827' }}>Our Featured Solar Projects</h2>
          </div>
          <Link href="/projects" style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#dc2626', textDecoration: 'none' }}>View All Projects ➔</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.3rem' }}>5KVA Residential Hybrid System</div>
            <div style={{ fontSize: '0.75rem', color: '#4b5563', marginBottom: '0.5rem' }}>Ikeja, Lagos • Fully powered with Lithium Iron batteries and Monocrystalline panels.</div>
            <span style={{ fontSize: '0.65rem', backgroundColor: '#dcfce7', color: '#166534', padding: '0.15rem 0.5rem', borderRadius: '3px', fontWeight: 'bold' }}>Completed</span>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.3rem' }}>10KVA Commercial Office Setup</div>
            <div style={{ fontSize: '0.75rem', color: '#4b5563', marginBottom: '0.5rem' }}>Ibadan, Oyo State • Zero downtime configuration supporting heavy office loads and ACs.</div>
            <span style={{ fontSize: '0.65rem', backgroundColor: '#dcfce7', color: '#166534', padding: '0.15rem 0.5rem', borderRadius: '3px', fontWeight: 'bold' }}>Completed</span>
          </div>
        </div>
      </section>

      {/* FAQ PAGE PREVIEW */}
      <section style={{ maxWidth: '850px', margin: '2.5rem auto', padding: '1.75rem', backgroundColor: '#ffffff', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#dc2626', letterSpacing: '1px' }}>❓ GOT QUESTIONS?</div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#111827' }}>Frequently Asked Questions</h2>
          </div>
          <Link href="/faq" style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#1e3a8a', textDecoration: 'none' }}>View Full FAQ ➔</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.8rem' }}>
          <div style={{ backgroundColor: '#f9fafb', padding: '0.85rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb' }}>
            <strong style={{ color: '#1e3a8a' }}>Q: How long do your lithium batteries last?</strong>
            <p style={{ color: '#4b5563', marginTop: '0.25rem' }}>A: Our premium lithium iron phosphate (LiFePO4) batteries are engineered for 10+ years (over 6,000 charge cycles) with proper maintenance.</p>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '0.85rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb' }}>
            <strong style={{ color: '#1e3a8a' }}>Q: Do you offer installation services outside Lagos?</strong>
            <p style={{ color: '#4b5563', marginTop: '0.25rem' }}>A: Yes! Litesolar Technologies provides nationwide delivery and professional installation teams across Nigeria.</p>
          </div>
        </div>
      </section>

      {/* CONTACT US, NAVIGATION, & SOCIAL HANDLES ON A VERTICAL LINE */}
      <section style={{ maxWidth: '850px', margin: '2.5rem auto', padding: '2rem 1.5rem', backgroundColor: '#1e3a8a', color: '#ffffff', borderRadius: '0.75rem', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.3rem' }}>🤝 GET IN TOUCH</div>
        <h2 style={{ fontSize: '1.35rem', fontWeight: '900', marginBottom: '0.6rem' }}>Contact Litesolar Technologies</h2>
        <p style={{ fontSize: '0.8rem', opacity: 0.9, marginBottom: '1.5rem' }}>Have questions about a system or need an inspection? Reach out to us directly:</p>
        
        {/* Quick Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem', fontSize: '0.8rem' }}>
          <a href="tel:07030671806" style={{ backgroundColor: '#fff', color: '#1e3a8a', padding: '0.6rem 1.25rem', borderRadius: '0.4rem', textDecoration: 'none', fontWeight: 'bold' }}>
            📞 Phone: 07030671806
          </a>
          <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '0.4rem', textDecoration: 'none', fontWeight: 'bold' }}>
            💬 WhatsApp Us
          </a>
        </div>

        {/* Vertical Stack for Links and Socials */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', fontSize: '0.85rem' }}>
          <Link href="/system-finder" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            System Finder
          </Link>
          <Link href="/projects" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            Projects
          </Link>
          <Link href="/faq" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            FAQ
          </Link>
          <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            Contact
          </Link>
          <a href="tel:07030671806" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            Phone: 07030671806
          </a>
          <a href="https://instagram.com/litesolarsolutions" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 'bold' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram: @litesolarsolutions
          </a>
          <a href="https://tiktok.com/@litesolarenergy" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 'bold' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            TikTok: @litesolarenergy
          </a>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '1.25rem', right: '1.25rem', backgroundColor: '#25D366', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
