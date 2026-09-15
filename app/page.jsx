'use client';
import { useState } from 'react';
import Link from 'next/link';
import PackageList from './components/PackageList';

export default function LandingPage() {
  const [appliances, setAppliances] = useState({
    tv: 1,
    fans: 2,
    fridge: 0,
    ac: 0,
    lights: 4,
  });

  const calculateLoad = () => {
    let totalWatts = 
      appliances.tv * 100 + 
      appliances.fans * 75 + 
      appliances.fridge * 200 + 
      appliances.ac * 1500 + 
      appliances.lights * 20;

    let recommended = "1.5KVA Starter Pack";
    let price = "₦450,000";

    if (totalWatts > 800 && totalWatts <= 2000) {
      recommended = "3.5KVA Standard Home Pack";
      price = "₦980,000";
    } else if (totalWatts > 2000) {
      recommended = "5KVA / 10KVA Executive Mansion Pack";
      price = "₦2,200,000+";
    }

    return { totalWatts, recommended, price };
  };

  const result = calculateLoad();

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* Top Accent Strip */}
      <div style={{ height: '5px', background: 'linear-gradient(90deg, #1e3a8a 0%, #1e3a8a 50%, #dc2626 85%, #ef4444 100%)', width: '100%' }}></div>

      {/* HEADER / NAVBAR */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#fff', fontSize: '1.1rem', flexShrink: 0 }}>
            ⚡
          </div>
          <div style={{ lineHeight: '1.2' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: '900', letterSpacing: '0.5px', color: '#1e3a8a', display: 'block' }}>LITESOLAR</span>
            <span style={{ fontSize: '0.55rem', fontWeight: '700', letterSpacing: '1.2px', color: '#dc2626', display: 'block' }}>SOLUTIONS</span>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#packages" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Packages</Link>
          <Link href="#calculator" style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.5rem 1.1rem', borderRadius: '2rem', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '700', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)' }}>
            Get a Quote
          </Link>
        </div>
      </header>

      {/* HERO SECTION WITH EXPANDED BACKGROUND IMAGE */}
      <section style={{ 
        position: 'relative', 
        padding: '7rem 1.5rem 7rem 1.5rem', 
        backgroundColor: '#0b0f19', 
        backgroundImage: 'linear-gradient(rgba(11, 15, 25, 0.82), rgba(11, 15, 25, 0.88)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
        borderBottom: '1px solid #374151',
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.25)', color: '#f87171', border: '1px solid rgba(220, 38, 38, 0.4)', padding: '0.35rem 0.85rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', marginBottom: '1.25rem' }}>
            🔥 RELIABLE CLEAN ENERGY IN NIGERIA
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', lineHeight: '1.15', marginBottom: '1.25rem', color: '#ffffff', letterSpacing: '-0.5px' }}>
            Hello, Nigeria.<br />
            <span style={{ color: '#60a5fa' }}>Power up</span> your home & business.
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2.25rem', maxWidth: '700px' }}>
            Enjoy uninterrupted, climate-friendly, and cost-effective solar electricity engineered for Nigerian homes. Eliminate power outages forever with professional installations.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="#calculator" style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.85rem 1.75rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 14px rgba(220, 38, 38, 0.3)' }}>
              Request Consultation →
            </Link>
            <Link href="#packages" style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.85rem 1.75rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 14px rgba(30, 58, 138, 0.3)' }}>
              View Power Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US / MISSION */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '3.5rem 1.5rem 2rem 1.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1e3a8a', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
          ABOUT US
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>Our Mission</h2>
        <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.7' }}>
          Our mission as a premier Solar Utility provider is simply <strong style={{ color: '#111827' }}>solar electricity for everyone!</strong> By eliminating friction, high fuel costs, and unreliable grid fragmentation in the residential and commercial marketplace.
        </p>
      </section>

      {/* LIVE DATABASE PACKAGES SECTION */}
      <section id="packages" style={{ maxWidth: '1200px', margin: '0 auto 3rem auto', padding: '0 1.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1e3a8a', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
          CATALOG
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: '#111827' }}>Available Solar Packages</h2>
        <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Managed live from your secure admin dashboard.</p>
        <PackageList />
      </section>

      {/* INTERACTIVE LOAD CALCULATOR */}
      <section id="calculator" style={{ maxWidth: '800px', margin: '0 auto 3rem auto', padding: '2rem 1.5rem', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#dc2626', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
          🧮 INSTANT SYSTEM SIZER
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', color: '#111827' }}>Calculate What You Need</h2>
        <p style={{ color: '#4b5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Select the appliances you want to power:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span>📺 Television (100W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.tv} 
              onChange={(e) => setAppliances({...appliances, tv: parseInt(e.target.value) || 0})}
              style={{ width: '60px', padding: '0.4rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', color: '#111827', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span>🌀 Ceiling Fans (75W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.fans} 
              onChange={(e) => setAppliances({...appliances, fans: parseInt(e.target.value) || 0})}
              style={{ width: '60px', padding: '0.4rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', color: '#111827', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span>💡 LED Lights (20W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.lights} 
              onChange={(e) => setAppliances({...appliances, lights: parseInt(e.target.value) || 0})}
              style={{ width: '60px', padding: '0.4rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', color: '#111827', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span>🧊 Refrigerator / Freezer (200W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.fridge} 
              onChange={(e) => setAppliances({...appliances, fridge: parseInt(e.target.value) || 0})}
              style={{ width: '60px', padding: '0.4rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', color: '#111827', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span>❄️ Air Conditioner (1.5HP - 1500W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.ac} 
              onChange={(e) => setAppliances({...appliances, ac: parseInt(e.target.value) || 0})}
              style={{ width: '60px', padding: '0.4rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', color: '#111827', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }} 
            />
          </div>

        </div>

        {/* Calculation Result Box */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '0.5rem', border: '2px solid #1e3a8a', textAlign: 'center', boxShadow: '0 4px 12px rgba(30,58,138,0.08)' }}>
          <div style={{ fontSize: '0.8rem', color: '#4b5563', marginBottom: '0.25rem' }}>Estimated Load Requirement: <strong style={{ color: '#111827' }}>{result.totalWatts} Watts</strong></div>
          <div style={{ fontSize: '1.1rem', fontWeight: '950', color: '#1e3a8a', marginBottom: '0.5rem' }}>Recommended: {result.recommended}</div>
          <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#dc2626', marginBottom: '1rem' }}>Starting from {result.price}</div>
          <a href="#packages" style={{ display: 'inline-block', backgroundColor: '#dc2626', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: '0.4rem', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(220,38,38,0.3)' }}>
            View Matching Packages →
          </a>
        </div>
      </section>

      {/* SOCIAL FOOTER / INFO SECTION */}
      <section style={{ maxWidth: '800px', margin: '0 auto 4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>Connect with us on social media:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
          <a href="https://instagram.com/litesolarsolutions" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c', textDecoration: 'none' }}>
            IG: @litesolarsolutions
          </a>
          <a href="https://tiktok.com/@litesolarenergy" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none' }}>
            TikTok: @litesolarenergy
          </a>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '5rem', right: '1.5rem', backgroundColor: '#25D366', color: '#fff', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>

      {/* BOTTOM NAVIGATION BAR */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.6rem 0', zIndex: 1000, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)' }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#1e3a8a', textDecoration: 'none', fontSize: '0.7rem', gap: '0.2rem', fontWeight: 'bold' }}>
          <span style={{ fontSize: '1.2rem' }}>⚡</span>
          <span>Home</span>
        </Link>
        <Link href="#packages" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#4b5563', textDecoration: 'none', fontSize: '0.7rem', gap: '0.2rem' }}>
          <span style={{ fontSize: '1.2rem' }}>📦</span>
          <span>Packages</span>
        </Link>
        <Link href="#calculator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#4b5563', textDecoration: 'none', fontSize: '0.7rem', gap: '0.2rem' }}>
          <span style={{ fontSize: '1.2rem' }}>🧮</span>
          <span>Calculator</span>
        </Link>
        <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#16a34a', textDecoration: 'none', fontSize: '0.7rem', gap: '0.2rem' }}>
          <span style={{ fontSize: '1.2rem' }}>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
