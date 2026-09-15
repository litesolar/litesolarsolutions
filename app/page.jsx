'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LitesolarApp() {
  // Simple view switcher based on URL path or state (e.g. '/' vs '/store')
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'store'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Handle browser back/forward buttons or initial load if using hash/path simulation
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname.includes('/store')) {
      setCurrentView('store');
    }
  }, []);

  const navigateToStore = (e) => {
    e.preventDefault();
    setCurrentView('store');
    window.history.pushState({}, '', '/store');
    window.scrollTo(0, 0);
  };

  const navigateToHome = (e) => {
    e.preventDefault();
    setCurrentView('home');
    window.history.pushState({}, '', '/');
    window.scrollTo(0, 0);
  };

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
  const storeCategories = ["PANELS", "INVERTERS", "BATTERIES", "MPPTS", "SOLAR GENERATORS", "FANS", "OTHERS"];

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '6rem', overflowX: 'hidden' }}>
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.4rem 0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', fontWeight: 'bold' }}>
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: '0.5rem' }}>
          Join our <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>distributorship</a> program
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
          <span>SOLAR PROJECTS | ABOUT US</span>
        </div>
      </div>

      {/* CLEAN STICKY HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.6rem 0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* STORE BUTTON -> Switches view and updates URL to /store */}
            <a 
              href="/store"
              onClick={navigateToStore}
              style={{ backgroundColor: '#111827', color: '#fff', textDecoration: 'none', padding: '0.45rem 0.7rem', borderRadius: '0.35rem', fontWeight: 'bold', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <span>🏪</span> Store {currentView === 'store' ? '●' : ''}
            </a>

            {/* BRAND LOGO -> Links back to Home */}
            <a href="/" onClick={navigateToHome} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none', color: '#fff' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#dc2626', fontSize: '0.85rem', flexShrink: 0 }}>
                ⚡
              </div>
              <div style={{ lineHeight: '1.1' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.5px', display: 'block' }}>LITESOLAR</span>
                <span style={{ fontSize: '0.45rem', fontWeight: '700', letterSpacing: '0.5px', opacity: 0.9, display: 'block' }}>TECHNOLOGIES</span>
              </div>
            </a>
          </div>

          {/* HEADER RIGHT ACTIONS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {currentView === 'home' ? (
              <a href="#calculator" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
                Calculator
              </a>
            ) : (
              <a href="/" onClick={navigateToHome} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
                Home
              </a>
            )}
            <a href="tel:08179464060" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
              <span>📞</span> <span style={{ display: 'none sm-inline' }}>08179464060</span>
            </a>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* VIEW 1: CLEAN LANDING PAGE (Default on '/') */}
      {/* ========================================================= */}
      {currentView === 'home' && (
        <main>
          {/* HERO SECTION */}
          <section style={{ 
            padding: '3rem 1rem', 
            backgroundColor: '#0b0f19', 
            backgroundImage: 'linear-gradient(rgba(11, 15, 25, 0.92), rgba(11, 15, 25, 0.96)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            color: '#ffffff',
            borderBottom: '1px solid #374151',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.25)', color: '#f87171', border: '1px solid rgba(220, 38, 38, 0.4)', padding: '0.25rem 0.6rem', borderRadius: '2rem', fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.5px', marginBottom: '0.75rem' }}>
                🔥 POWERING A SMARTER TOMORROW
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '0.75rem', color: '#ffffff' }}>
                Shop Superior Quality <br />
                <span style={{ color: '#60a5fa' }}>Solar Products</span> at Best Prices.
              </h1>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                Reliable solar panels, high-performance inverters, and lithium batteries engineered for Nigerian homes and businesses.
              </p>
              <a 
                href="/store"
                onClick={navigateToStore}
                style={{ backgroundColor: '#dc2626', color: '#fff', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.4rem', fontWeight: '900', fontSize: '0.85rem', display: 'inline-block', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)' }}
              >
                Browse Complete Store Catalog ➔
              </a>
            </div>
          </section>

          {/* LOAD CALCULATOR */}
          <section id="calculator" style={{ maxWidth: '750px', margin: '1.5rem auto', padding: '1.25rem 1rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
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
              <div style={{ fontSize: '1rem', fontWeight: '900', color: '#dc2626' }}>From {result.price}</div>
            </div>
          </section>
        </main>
      )}

      {/* ========================================================= */}
      {/* VIEW 2: DEDICATED STORE PAGE (Active on '/store') */}
      {/* ========================================================= */}
      {currentView === 'store' && (
        <main style={{ maxWidth: '1100px', margin: '1rem auto', padding: '0 0.75rem' }}>
          
          {/* Store Header Banner */}
          <div style={{ backgroundColor: '#991b1b', color: '#fff', padding: '1.25rem 1rem', borderRadius: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.35rem', fontWeight: '900', marginBottom: '0.3rem' }}>Litesolar Online Store</h1>
            <p style={{ fontSize: '0.75rem', opacity: 0.9, marginBottom: '1rem' }}>Browse verified solar panels, inverters, batteries, and accessories.</p>
            
            {/* Store Search Bar */}
            <div style={{ display: 'flex', maxWidth: '450px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', border: '1px solid #ccc' }}>
              <input 
                type="text" 
                placeholder="Search store inventory..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: 'none', outline: 'none', fontSize: '0.75rem', color: '#111827' }}
              />
              <button style={{ backgroundColor: '#047857', color: '#fff', border: 'none', padding: '0 0.85rem', fontWeight: 'bold', fontSize: '0.7rem', cursor: 'pointer' }}>
                SEARCH
              </button>
            </div>
          </div>

          {/* Categories Filter Strip */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
            {storeCategories.map((cat, idx) => (
              <button key={idx} style={{ backgroundColor: '#111827', color: '#fff', border: 'none', padding: '0.4rem 0.75rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: 'bold', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Store Catalog Grid */}
          <div style={{ fontSize: '0.85rem', fontWeight: '900', marginBottom: '0.75rem', color: '#1f2937' }}>Available Departments & Products</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {[
              { name: "Solar Panels (Monocrystalline)", price: "₦145,000", badge: "In Stock" },
              { name: "Deye Hybrid Inverter 5KVA", price: "₦1,450,000", badge: "Best Seller" },
              { name: "Tubular Deep Cycle Battery", price: "₦280,000", badge: "In Stock" },
              { name: "Lithium Iron Battery 48V 100Ah", price: "₦1,200,000", badge: "Hot" },
              { name: "Rechargeable Standing Fan", price: "₦65,000", badge: "Solar Compatible" },
              { name: "MPPT Solar Charge Controller", price: "₦45,000", badge: "In Stock" }
            ].map((prod, i) => (
              <div key={i} style={{ backgroundColor: '#fff', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.6rem', backgroundColor: '#fee2e2', color: '#991b1b', padding: '0.15rem 0.35rem', borderRadius: '3px', fontWeight: 'bold' }}>{prod.badge}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#111827', marginBottom: '0.3rem' }}>{prod.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#dc2626', marginBottom: '0.5rem' }}>{prod.price}</div>
                  <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#047857', color: '#fff', padding: '0.4rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 'bold' }}>
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

        </main>
      )}

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
