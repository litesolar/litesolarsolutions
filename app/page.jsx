'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function StoreApp() {
  const [showStoreMegaMenu, setShowStoreMegaMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
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

  const storeCategories = [
    "PANELS", "INVERTERS", "BATTERIES", "MPPTS", "SOLAR GENERATORS", "FANS", "OTHERS"
  ];

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '6rem', overflowX: 'hidden' }}>
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.4rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>
        <div>
          Join our <Link href="#" style={{ color: '#fff', textDecoration: 'underline' }}>distributorship</Link> program or <Link href="#" style={{ color: '#fff', textDecoration: 'underline' }}>locate</Link> a distributor closest to you
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>SOLAR PROJECTS | ABOUT US | FREE SOLAR QUOTE</span>
        </div>
      </div>

      {/* CLEAN LANDING PAGE HEADER (Expands only when Store is clicked) */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* STORE TOGGLE BUTTON */}
            <button 
              onClick={() => setShowStoreMegaMenu(!showStoreMegaMenu)}
              style={{ backgroundColor: '#111827', color: '#fff', border: 'none', padding: '0.5rem 0.85rem', borderRadius: '0.4rem', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
            >
              <span>🏪</span> Store {showStoreMegaMenu ? '▲' : '▼'}
            </button>

            {/* BRAND LOGO */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: '#fff' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#dc2626', fontSize: '1rem', flexShrink: 0 }}>
                ⚡
              </div>
              <div style={{ lineHeight: '1.1' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.5px', display: 'block' }}>LITESOLAR</span>
                <span style={{ fontSize: '0.5rem', fontWeight: '700', letterSpacing: '1px', opacity: 0.9, display: 'block' }}>TECHNOLOGIES</span>
              </div>
            </Link>
          </div>

          {/* STANDARD LANDING NAV / ACTIONS (Hidden when store drawer is open to keep it clean, or can stay minimal) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="#calculator" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>
              Load Calculator
            </Link>
            <a href="tel:08179464060" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <span>📞</span> 08179464060
            </a>
          </div>

        </div>

        {/* ========================================================= */}
        {/* STORE SEARCH & CATEGORY STRIP (Appears ONLY when Store is clicked) */}
        {/* ========================================================= */}
        {showStoreMegaMenu && (
          <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            
            {/* Search Bar Row inside Store View */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: '100%', maxWidth: '500px', backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', border: '1px solid #ccc' }}>
                <input 
                  type="text" 
                  placeholder="Search store products (panels, inverters, batteries...)" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem 0.75rem', border: 'none', outline: 'none', fontSize: '0.8rem', color: '#111827' }}
                />
                <button style={{ backgroundColor: '#047857', color: '#fff', border: 'none', padding: '0 1rem', fontWeight: 'bold', fontSize: '0.75rem', cursor: 'pointer' }}>
                  SEARCH
                </button>
              </div>
            </div>

            {/* Category Navbar Strip */}
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', overflowX: 'auto', paddingBottom: '0.2rem', scrollbarWidth: 'none' }}>
              {storeCategories.map((cat, idx) => (
                <Link key={idx} href="#catalog" onClick={() => setShowStoreMegaMenu(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '800', whiteSpace: 'nowrap', opacity: 0.95 }}>
                  {cat}
                </Link>
              ))}
            </nav>

          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* FULL STORE MEGA-MENU DRAWER (Appears on Store click) */}
      {/* ========================================================= */}
      {showStoreMegaMenu && (
        <div style={{ backgroundColor: '#991b1b', color: '#ffffff', padding: '1.5rem 1rem', borderBottom: '3px solid #7f1d1d', boxShadow: '0 10px 30px rgba(0,0,0,0.25)', zIndex: 999, position: 'relative' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase' }}>
                🏪 Litesolar Storefront Departments & Catalog
              </div>
              <button 
                onClick={() => setShowStoreMegaMenu(false)} 
                style={{ backgroundColor: '#111827', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Close Store [✕]
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              
              <div style={{ gridColumn: 'span 2', backgroundColor: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#fca5a5', marginBottom: '0.75rem', letterSpacing: '1px' }}>ALL STORE DEPARTMENTS</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.6rem' }}>
                  {[
                    "Solar Panels", "Deye Inverters", "Fireman Inverter", "Kartel Inverter", 
                    "Sako Inverter", "Growatt Inverters", "Lithium Batteries", "Tubular Batteries", 
                    "Rechargeable Fans", "MPPT Chargers", "LED Lighting", "Solar Water Pumps"
                  ].map((item, i) => (
                    <Link key={i} href="#catalog" onClick={() => setShowStoreMegaMenu(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', padding: '0.45rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px', display: 'block' }}>
                      ▪ {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ backgroundColor: '#7f1d1d', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '900', marginBottom: '0.3rem' }}>RECHARGEABLE FANS WITH SOLAR</div>
                  <div style={{ fontSize: '1.8rem', margin: '0.3rem 0' }}>🌀</div>
                  <span style={{ fontSize: '0.65rem', color: '#fca5a5', textTransform: 'uppercase', fontWeight: '700' }}>High Airflow & Long Battery Life</span>
                </div>
                
                <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '0.5rem', color: '#fff', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '900', color: '#38bdf8', marginBottom: '0.3rem' }}>PAY-LATER BUNDLE PACKAGES</div>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0, lineHeight: '1.4' }}>Get complete 1.2KVA to 20KVA systems installed with up to 12 months flexible payment plans.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{ 
        padding: '3.5rem 1rem', 
        backgroundColor: '#0b0f19', 
        backgroundImage: 'linear-gradient(rgba(11, 15, 25, 0.9), rgba(11, 15, 25, 0.95)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', 
        backgroundSize: 'cover', 
        color: '#ffffff',
        borderBottom: '1px solid #374151'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.25)', color: '#f87171', border: '1px solid rgba(220, 38, 38, 0.4)', padding: '0.3rem 0.75rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '1px', marginBottom: '1rem' }}>
            🔥 POWERING A SMARTER TOMORROW
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '1rem', color: '#ffffff' }}>
            Shop Superior Quality <br />
            <span style={{ color: '#60a5fa' }}>Solar Products</span> at Best Prices.
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '1.5rem' }}>
            Click the <strong style={{ color: '#fff' }}>Store</strong> button in the header anytime to browse full store departments, categories, and bundle options.
          </p>
        </div>
      </section>

      {/* LOAD CALCULATOR */}
      <section id="calculator" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1.5rem 1rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#dc2626', letterSpacing: '1.5px', marginBottom: '0.4rem' }}>
          🧮 INSTANT SYSTEM SIZER
        </div>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.4rem', color: '#111827' }}>Calculate What You Need</h2>
        <p style={{ color: '#4b5563', fontSize: '0.8rem', marginBottom: '1rem' }}>Select appliances to estimate your solar package:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem', marginBottom: '1.25rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>📺 TV (100W)</span>
            <input type="number" min="0" value={appliances.tv} onChange={(e) => setAppliances({...appliances, tv: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>🌀 Fans (75W)</span>
            <input type="number" min="0" value={appliances.fans} onChange={(e) => setAppliances({...appliances, fans: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>🧊 Fridge (200W)</span>
            <input type="number" min="0" value={appliances.fridge} onChange={(e) => setAppliances({...appliances, fridge: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>❄️ AC (1500W)</span>
            <input type="number" min="0" value={appliances.ac} onChange={(e) => setAppliances({...appliances, ac: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>💡 Lights (20W)</span>
            <input type="number" min="0" value={appliances.lights} onChange={(e) => setAppliances({...appliances, lights: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>👕 Washer (800W)</span>
            <input type="number" min="0" value={appliances.washingMachine} onChange={(e) => setAppliances({...appliances, washingMachine: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>💧 Pump (1100W)</span>
            <input type="number" min="0" value={appliances.pumpingMachine} onChange={(e) => setAppliances({...appliances, pumpingMachine: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', border: '1px solid #e5e7eb', fontSize: '0.85rem' }}>
            <span>🔌 Iron (1000W)</span>
            <input type="number" min="0" value={appliances.iron} onChange={(e) => setAppliances({...appliances, iron: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.2rem', textAlign: 'center', fontWeight: 'bold' }} />
          </div>

        </div>

        <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', border: '2px solid #1e3a8a', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>Estimated Load: <strong>{result.totalWatts} Watts</strong></div>
          <div style={{ fontSize: '0.95rem', fontWeight: '900', color: '#1e3a8a', margin: '0.2rem 0' }}>Recommended: {result.recommended}</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#dc2626' }}>From {result.price}</div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', backgroundColor: '#25D366', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
