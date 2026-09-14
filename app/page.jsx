'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // Calculator state
  const [appliances, setAppliances] = useState({
    tv: { qty: 0, watts: 100 },
    fridge: { qty: 0, watts: 200 },
    fan: { qty: 0, watts: 75 },
    bulb: { qty: 0, watts: 15 },
    ac: { qty: 0, watts: 1500 },
  });

  const updateQty = (appKey, change) => {
    setAppliances(prev => {
      const currentQty = prev[appKey].qty;
      const newQty = Math.max(0, currentQty + change);
      return { ...prev, [appKey]: { ...prev[appKey], qty: newQty } };
    });
  };

  // Calculate total wattage
  const totalWatts = Object.keys(appliances).reduce((sum, key) => {
    return sum + (appliances[key].qty * appliances[key].watts);
  }, 0);

  // Recommended inverter size (with 20% safety buffer)
  const recommendedInverter = totalWatts === 0 ? 0 : Math.ceil((totalWatts * 1.2) / 1000 * 2) / 2;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070b', color: '#ffffff', fontFamily: 'sans-serif', paddingBottom: '6rem' }}>
      
      {/* Top Strategic Red Accent Bar */}
      <div style={{ height: '4px', backgroundColor: '#dc2626', width: '100%' }}></div>

      {/* Navigation Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: '#0b0f19', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="https://i.ibb.co/rGYcpw14/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
            alt="LITESOLARSOLUTIONS Logo" 
            style={{ height: '38px', width: '38px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #2563eb' }} 
          />
          <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#2563eb', letterSpacing: '0.5px' }}>LITESOLARSOLUTIONS</span>
        </div>
        
        <div style={{ color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff' }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff' }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#ffffff' }}></div>
        </div>
      </nav>

      {/* Hero Section (Cleaned up & Motion-styled) */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 2rem 1.5rem', animation: 'fadeIn 0.8s ease-in-out' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563eb', letterSpacing: '1.5px', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>☀️</span> POWER & SUSTAINABILITY
        </div>

        <h1 style={{ fontSize: '2.75rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
          <span style={{ color: '#ffffff' }}>LITE SOLAR</span> <br />
          <span style={{ color: '#2563eb' }}>SOLUTIONS</span>
        </h1>

        <p style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.4', marginBottom: '1.25rem', letterSpacing: '0.5px' }}>
          ILLUMINATEING YOUR WORLD WITH AFFORDABLE SOLAR SOLUTIONS.
        </p>

        <p style={{ fontSize: '0.95rem', color: '#9ca3af', marginBottom: '2rem', lineHeight: '1.5' }}>
          Smart solar energy solutions designed to bring reliable, clean and efficient power to homes and businesses.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <Link href="/quote" style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '1rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}>
            <span>GET A SOLAR ASSESSMENT</span>
            <span style={{ fontSize: '1.25rem' }}>→</span>
          </Link>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', paddingRight: '0.5rem' }}>
            <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#ffffff' }}>TALK TO US</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #374151', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0b0f19' }}>
              💬
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Power Calculator Section */}
      <section id="calculator" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ backgroundColor: '#0b0f19', border: '1px solid #2563eb', borderRadius: '1rem', padding: '2rem', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ffffff', marginBottom: '0.5rem' }}>🧮 Interactive Power Calculator</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Select your appliances to instantly calculate your recommended inverter and solar system size.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            
            {/* Appliance Row: TV */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#ffffff' }}>Television (100W)</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>LED TV / Decoder</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => updateQty('tv', -1)} style={{ backgroundColor: '#1f2937', color: '#ffffff', border: '1px solid #4b5563', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{appliances.tv.qty}</span>
                <button onClick={() => updateQty('tv', 1)} style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
              </div>
            </div>

            {/* Appliance Row: Fridge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#ffffff' }}>Refrigerator / Freezer (200W)</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Standard Fridge</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => updateQty('fridge', -1)} style={{ backgroundColor: '#1f2937', color: '#ffffff', border: '1px solid #4b5563', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{appliances.fridge.qty}</span>
                <button onClick={() => updateQty('fridge', 1)} style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
              </div>
            </div>

            {/* Appliance Row: Fan */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#ffffff' }}>Ceiling / Standing Fan (75W)</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Standard Fan</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => updateQty('fan', -1)} style={{ backgroundColor: '#1f2937', color: '#ffffff', border: '1px solid #4b5563', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{appliances.fan.qty}</span>
                <button onClick={() => updateQty('fan', 1)} style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
              </div>
            </div>

            {/* Appliance Row: Bulbs */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#ffffff' }}>Lighting Bulbs (15W)</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>LED Bulbs</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => updateQty('bulb', -1)} style={{ backgroundColor: '#1f2937', color: '#ffffff', border: '1px solid #4b5563', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{appliances.bulb.qty}</span>
                <button onClick={() => updateQty('bulb', 1)} style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
              </div>
            </div>

            {/* Appliance Row: AC */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#ffffff' }}>Inverter Air Conditioner (1500W)</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>1.5 HP Inverter AC</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => updateQty('ac', -1)} style={{ backgroundColor: '#1f2937', color: '#ffffff', border: '1px solid #4b5563', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{appliances.ac.qty}</span>
                <button onClick={() => updateQty('ac', 1)} style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '0.25rem', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
              </div>
            </div>

          </div>

          {/* Results Box */}
          <div style={{ backgroundColor: '#111827', padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #dc2626', textAlign: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Total Estimated Load: <span style={{ color: '#ffffff', fontWeight: 'bold' }}>{totalWatts} Watts</span></div>
            <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#2563eb', marginBottom: '1rem' }}>
              Recommended System: {recommendedInverter} kVA Inverter Setup
            </div>
            <Link href="/quote" style={{ display: 'inline-block', backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
              Get Quote for this Setup →
            </Link>
          </div>

        </div>
      </section>

      {/* Bottom Mobile Navigation Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#030508', borderTop: '1px solid #1f2937', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 0', zIndex: 150 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#2563eb', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>☀️</span>
          <span>Home</span>
        </Link>
        <Link href="/packages" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>⚡</span>
          <span>Solutions</span>
        </Link>
        <a href="#calculator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>🧮</span>
          <span>Calculator</span>
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#22c55e', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
