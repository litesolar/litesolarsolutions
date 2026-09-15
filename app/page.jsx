'use client';
import { useState } from 'react';
import Link from 'next/link';
import PackageList from './components/PackageList';

export default function LandingPage() {
  const [showDepartments, setShowDepartments] = useState(false);
  const [appliances, setAppliances] = useState({
    tv: 1,
    fans: 2,
    fridge: 0,
    ac: 0,
    lights: 4,
    washingMachine: 1,
    pumpingMachine: 0,
    iron: 2,
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

  const departmentsList = [
    "Solar Panels",
    "Gennex Solar Inverters",
    "Growatt Inverters",
    "Lithium Batteries",
    "Tubular & AGM Batteries",
    "MPPT Solar Chargers",
    "Solar Street Lights",
    "Rechargeable Solar Fans",
    "LED Bulbs & Lighting",
    "Surge Arrestors",
    "Solar Installation Accessories",
    "MC4 Connectors & Cables",
    "Battery Racks & Cabinets"
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* Top Accent Strip */}
      <div style={{ height: '5px', background: 'linear-gradient(90deg, #1e3a8a 0%, #1e3a8a 50%, #dc2626 85%, #ef4444 100%)', width: '100%' }}></div>

      {/* TOP UTILITY BAR (HOTLINE & LOG IN) */}
      <div style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.4rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
        <div>📞 Hotline: <a href="tel:08179464060" style={{ color: '#fff', textDecoration: 'underline' }}>08179464060</a></div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>⚡ Nationwide Delivery & Installation</span>
        </div>
      </div>

      {/* MAIN HEADER / NAVBAR */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Shop By Department Toggle Button */}
          <button 
            onClick={() => setShowDepartments(!showDepartments)}
            style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: '0.4rem', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>☰</span> Shop By Department {showDepartments ? '▲' : '▼'}
          </button>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#fff', fontSize: '1.1rem', flexShrink: 0 }}>
              ⚡
            </div>
            <div style={{ lineHeight: '1.2' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: '900', letterSpacing: '0.5px', color: '#1e3a8a', display: 'block' }}>LITESOLAR</span>
              <span style={{ fontSize: '0.55rem', fontWeight: '700', letterSpacing: '1.2px', color: '#dc2626', display: 'block' }}>SOLUTIONS</span>
            </div>
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="#packages" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Packages</Link>
          <Link href="#catalog" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Catalog</Link>
          <Link href="#calculator" style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.5rem 1.1rem', borderRadius: '2rem', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '700', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)' }}>
            Get a Quote
          </Link>
        </div>
      </header>

      {/* DROPDOWN DEPARTMENT SIDEBAR / MENU */}
      {showDepartments && (
        <div style={{ backgroundColor: '#b91c1c', color: '#ffffff', padding: '1.5rem', borderBottom: '2px solid #991b1b', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', zIndex: 999, position: 'relative' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>
              Product Departments
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {departmentsList.map((dept, idx) => (
                <Link key={idx} href="#catalog" onClick={() => setShowDepartments(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', padding: '0.4rem 0.6rem', borderRadius: '4px', backgroundColor: 'rgba(0,0,0,0.1)', display: 'block', transition: 'background 0.2s' }}>
                  ▪ {dept}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
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
            <Link href="#catalog" style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.85rem 1.75rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 14px rgba(30, 58, 138, 0.3)' }}>
              Explore Shop Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* FULL SHOP CATALOG SECTION */}
      <section id="catalog" style={{ maxWidth: '1200px', margin: '3.5rem auto 3rem auto', padding: '0 1.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#dc2626', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
          FULL SHOP CATALOG
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1.5rem', color: '#111827' }}>Browse Our Solar Storefront</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          {/* Category Card 1 */}
          <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem', borderBottom: '2px solid #1e3a8a', paddingBottom: '0.4rem' }}>☀️ Solar Panels</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#4b5563', fontSize: '0.9rem' }}>
              <li>▪ 725 Watts Jinko Solar Panel</li>
              <li>▪ 720 Watts Jinko Solar Panel</li>
              <li>▪ 620 Watts Jinko Solar Panel</li>
              <li>▪ 625 Watts Monocrystalline Panel</li>
            </ul>
          </div>

          {/* Category Card 2 */}
          <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem', borderBottom: '2px solid #1e3a8a', paddingBottom: '0.4rem' }}>⚡ Hybrid Inverters</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#4b5563', fontSize: '0.9rem' }}>
              <li>▪ 10kW/48V Hybrid Inverter</li>
              <li>▪ Axpert King 5KVA Hybrid</li>
              <li>▪ Axpert MAX Twin 8KVA</li>
              <li>▪ 5kW/48V MKS Par B Inverter</li>
              <li>▪ 1.2KVA/720W/12V Lobo Inverter</li>
            </ul>
          </div>

          {/* Category Card 3 */}
          <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem', borderBottom: '2px solid #1e3a8a', paddingBottom: '0.4rem' }}>🔋 Batteries & UPS</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#4b5563', fontSize: '0.9rem' }}>
              <li>▪ Newmax AGM Solar Battery</li>
              <li>▪ Lithium-ion Battery Banks</li>
              <li>▪ MPPT Solar Charge Controllers</li>
              <li>▪ 3kva & 6kva Online UPS</li>
              <li>▪ Multi-Functional Power Gateway</li>
            </ul>
          </div>

          {/* Category Card 4 */}
          <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem', borderBottom: '2px solid #1e3a8a', paddingBottom: '0.4rem' }}>🌀 Fans, Lighting & Accessories</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#4b5563', fontSize: '0.9rem' }}>
              <li>▪ 18 Inches Rechargeable Solar Fan</li>
              <li>▪ 16” 120cm Height Solar Fan</li>
              <li>▪ High-Output LED Bulbs</li>
              <li>▪ DC/AC Surge Arrestors</li>
              <li>▪ MC4 Connectors & Mounting Rails</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LIVE DATABASE PACKAGES SECTION */}
      <section id="packages" style={{ maxWidth: '1200px', margin: '0 auto 3rem auto', padding: '0 1.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1e3a8a', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
          BUNDLE PACKAGES
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', color: '#111827' }}>Available Solar Packages</h2>
        <PackageList />
      </section>

      {/* INTERACTIVE LOAD CALCULATOR */}
      <section id="calculator" style={{ maxWidth: '800px', margin: '0 auto 4rem auto', padding: '2rem 1.5rem', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
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

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span>🧺 Washing Machine (800W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.washingMachine} 
              onChange={(e) => setAppliances({...appliances, washingMachine: parseInt(e.target.value) || 0})}
              style={{ width: '60px', padding: '0.4rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', color: '#111827', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span>💧 Pumping Machine (1100W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.pumpingMachine} 
              onChange={(e) => setAppliances({...appliances, pumpingMachine: parseInt(e.target.value) || 0})}
              style={{ width: '60px', padding: '0.4rem', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', color: '#111827', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <span> irons/Pressing Iron (1000W)</span>
            <input 
              type="number" 
              min="0" 
              value={appliances.iron} 
              onChange={(e) => setAppliances({...appliances, iron: parseInt(e.target.value) || 0})}
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
        <Link href="#catalog" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#4b5563', textDecoration: 'none', fontSize: '0.7rem', gap: '0.2rem' }}>
          <span style={{ fontSize: '1.2rem' }}>📂</span>
          <span>Catalog</span>
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
