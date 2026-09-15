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
      
      {/* TOP ANNOUNCEMENT BAR (10% Red accent) */}
      <div style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.4rem 0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', fontWeight: 'bold' }}>
        <div>
          Join our <Link href="/contact" style={{ color: '#fff', textDecoration: 'underline' }}>distributorship</Link> program
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>SOLAR PROJECTS</Link>
          <span>|</span>
          <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>ABOUT US</Link>
        </div>
      </div>

      {/* CLEAN STICKY HEADER (25% Blue & 5% Black balance) */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.6rem 0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link 
              href="/store"
              style={{ backgroundColor: '#dc2626', color: '#fff', textDecoration: 'none', padding: '0.45rem 0.7rem', borderRadius: '0.35rem', fontWeight: 'bold', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <span>🏪</span> Store
            </Link>

            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', color: '#fff' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#1e3a8a', fontSize: '0.85rem' }}>
                ⚡
              </div>
              <div style={{ lineHeight: '1.1' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.5px', display: 'block' }}>LITESOLAR</span>
                <span style={{ fontSize: '0.45rem', fontWeight: '700', letterSpacing: '0.5px', opacity: 0.9, display: 'block' }}>TECHNOLOGIES</span>
              </div>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Link href="/system-finder" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
              System Finder
            </Link>
            <Link href="/faq" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
              FAQ
            </Link>
            <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
              Contact
            </Link>
            <a href="tel:07030671806" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 'bold' }}>
              📞 07030671806
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION (60% White background layout with Blue/Red accents) */}
      <section style={{ 
        padding: '3rem 1rem', 
        backgroundColor: '#ffffff', 
        color: '#111827',
        textAlign: 'center',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a', border: '1px solid rgba(30, 58, 138, 0.2)', padding: '0.25rem 0.6rem', borderRadius: '2rem', fontSize: '0.65rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            🔥 POWERING A SMARTER TOMORROW
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '0.75rem', color: '#111827' }}>
            Shop Superior Quality <br />
            <span style={{ color: '#1e3a8a' }}>Solar Products</span> at Best Prices.
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            Reliable solar panels, high-performance inverters, and lithium batteries engineered for Nigerian homes and businesses.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/store"
              style={{ backgroundColor: '#dc2626', color: '#fff', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.4rem', fontWeight: '900', fontSize: '0.85rem' }}
            >
              Browse Complete Store Catalog ➔
            </Link>
            <Link 
              href="/request-a-quote"
              style={{ backgroundColor: '#1e3a8a', color: '#fff', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.4rem', fontWeight: '900', fontSize: '0.85rem' }}
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* LOAD CALCULATOR (60% White card frame with Blue/Red accents) */}
      <section style={{ maxWidth: '750px', margin: '1.5rem auto', padding: '1.25rem 1rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#dc2626', letterSpacing: '1px', marginBottom: '0.3rem' }}>
          🧮 INSTANT SYSTEM SIZER
        </div>
        <h2 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.3rem', color: '#111827' }}>Calculate What You Need</h2>
        <p style={{ color: '#4b5563', fontSize: '0.75rem', marginBottom: '1rem' }}>Select appliances to estimate your solar package:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
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
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.4rem 0.6rem', borderRadius: '0.35rem', border: '1px solid #e5e7eb', fontSize: '0.75rem' }}>
              <span>{item.label}</span>
              <input type="number" min="0" value={appliances[item.key]} onChange={(e) => setAppliances({...appliances, [item.key]: parseInt(e.target.value) || 0})} style={{ width: '40px', padding: '0.15rem', textAlign: 'center', fontWeight: 'bold', fontSize: '0.75rem' }} />
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#f3f4f6', padding: '0.85rem', borderRadius: '0.4rem', border: '2px solid #1e3a8a', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: '#4b5563' }}>Estimated Load: <strong>{result.totalWatts} Watts</strong></div>
          <div style={{ fontSize: '0.85rem', fontWeight: '900', color: '#1e3a8a', margin: '0.15rem 0' }}>Recommended: {result.recommended}</div>
          <div style={{ fontSize: '1rem', fontWeight: '900', color: '#dc2626', marginBottom: '0.75rem' }}>From {result.price}</div>
          <Link href="/request-a-quote" style={{ display: 'inline-block', backgroundColor: '#1e3a8a', color: '#fff', padding: '0.4rem 1rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Exact Quote for this Setup
          </Link>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '1.25rem', right: '1.25rem', backgroundColor: '#25D366', color: '#fff', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.35rem', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
