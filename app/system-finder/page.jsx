'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SystemFinderPage() {
  const [formData, setFormData] = useState({
    lights: 4,
    fans: 2,
    tv: 1,
    fridge: 1,
    ac: 0,
    backupHours: 8
  });

  const [calculated, setCalculated] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    setCalculated(true);
  };

  // Estimate sizing based on inputs
  const totalWatts = 
    (formData.lights * 20) + 
    (formData.fans * 75) + 
    (formData.tv * 100) + 
    (formData.fridge * 200) + 
    (formData.ac * 1500);

  const inverterSize = totalWatts > 2000 ? "5KVA / 10KVA Hybrid Inverter" : totalWatts > 800 ? "3.5KVA Inverter System" : "1.5KVA Starter Inverter";
  const panelCapacity = Math.ceil((totalWatts * 1.3) / 100) * 100 + "W Solar Panels";
  const batteryCapacity = Math.ceil((totalWatts * formData.backupHours) / 1000) + "kWh Deep Cycle / Lithium Battery Storage";

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>SOLAR SYSTEM FINDER</span>
          <Link href="/request-a-quote" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Get Exact Quote
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            INTERACTIVE SYSTEM SIZER
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Solar System <span style={{ color: '#60a5fa' }}>Finder</span>
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            Select what appliances you want to power, quantities, and desired backup hours to get an instant preliminary recommendation[cite: 1].
          </p>
        </div>
      </section>

      {/* FINDER CONTAINER */}
      <main style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
        <form onSubmit={handleCalculate} style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <h2 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#111827', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.5rem' }}>
            Select Appliance Quantities
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>💡 Lights</span>
              <input type="number" min="0" value={formData.lights} onChange={(e) => setFormData({...formData, lights: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.25rem', textAlign: 'center', fontWeight: 'bold' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>🌀 Fans</span>
              <input type="number" min="0" value={formData.fans} onChange={(e) => setFormData({...formData, fans: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.25rem', textAlign: 'center', fontWeight: 'bold' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>📺 Television</span>
              <input type="number" min="0" value={formData.tv} onChange={(e) => setFormData({...formData, tv: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.25rem', textAlign: 'center', fontWeight: 'bold' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>🧊 Refrigerator</span>
              <input type="number" min="0" value={formData.fridge} onChange={(e) => setFormData({...formData, fridge: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.25rem', textAlign: 'center', fontWeight: 'bold' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>❄️ Air Conditioner</span>
              <input type="number" min="0" value={formData.ac} onChange={(e) => setFormData({...formData, ac: parseInt(e.target.value) || 0})} style={{ width: '50px', padding: '0.25rem', textAlign: 'center', fontWeight: 'bold' }} />
            </div>

          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Desired Backup Duration[cite: 1]</label>
            <select 
              value={formData.backupHours} 
              onChange={(e) => setFormData({...formData, backupHours: parseInt(e.target.value)})}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem', backgroundColor: '#fff' }}
            >
              <option value={4}>4 Hours</option>
              <option value={8}>8 Hours</option>
              <option value={12}>12 Hours</option>
              <option value={24}>24 Hours (Full Day Independence)</option>
            </select>
          </div>

          <button type="submit" style={{ backgroundColor: '#dc2626', color: '#fff', padding: '0.75rem', borderRadius: '4px', border: 'none', fontWeight: '900', fontSize: '0.85rem', cursor: 'pointer', marginTop: '0.5rem' }}>
            CALCULATE ESTIMATED SYSTEM
          </button>
        </form>

        {calculated && (
          <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '0.75rem', border: '2px solid #047857', marginTop: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#047857', letterSpacing: '1px', marginBottom: '0.2rem' }}>
              PRELIMINARY RECOMMENDATION[cite: 1]
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: '#111827', marginBottom: '1rem' }}>
              Estimated Energy Load: ~{totalWatts} Watts
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1.25rem', backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '6px' }}>
              <div>⚡ <strong>Recommended Inverter:</strong> {inverterSize}[cite: 1]</div>
              <div>☀️ <strong>Solar Panel Capacity:</strong> {panelCapacity}[cite: 1]</div>
              <div>🔋 <strong>Battery Storage:</strong> {batteryCapacity}[cite: 1]</div>
            </div>

            <p style={{ fontSize: '0.75rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '1.25rem', lineHeight: '1.4' }}>
              “This is an initial estimate. Final system sizing should be confirmed by a qualified solar professional after assessing the customer’s actual load and installation conditions[cite: 1].”
            </p>

            <Link 
              href="/request-a-quote"
              style={{ display: 'block', textAlign: 'center', backgroundColor: '#111827', color: '#fff', padding: '0.7rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}
            >
              REQUEST EXACT QUOTE[cite: 1]
            </Link>
          </div>
        )}
      </main>

    </div>
  );
}
