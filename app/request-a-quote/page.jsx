'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [propertyType, setPropertyType] = useState('House');

  // Appliance power ratings (in Watts approx)
  const applianceList = [
    { name: 'Lights', watts: 50 },
    { name: 'Fans', watts: 75 },
    { name: 'TV', watts: 150 },
    { name: 'Refrigerator', watts: 200 },
    { name: 'Freezer', watts: 300 },
    { name: 'AC (1HP)', watts: 1000 },
    { name: 'Washing Machine', watts: 500 },
    { name: 'Water Pump', watts: 750 },
    { name: 'Computers', watts: 150 },
  ];

  const handleCheckboxChange = (appName) => {
    if (selectedAppliances.includes(appName)) {
      setSelectedAppliances(selectedAppliances.filter(item => item !== appName));
    } else {
      setSelectedAppliances([...selectedAppliances, appName]);
    }
  };

  // Calculate total wattage dynamically
  const totalWatts = selectedAppliances.reduce((sum, name) => {
    const found = applianceList.find(a => a.name === name);
    return sum + (found ? found.watts : 100);
  }, 0);

  // Suggest Inverter Size based on total load (adding a 30% headroom buffer)
  const recommendedKva = Math.max(1.5, Math.ceil((totalWatts * 1.3) / 800 * 2) / 2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          <Link href="/" style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* HERO SECTION - BLUE & WHITE THEME */}
      <section style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.95)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#93c5fd', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            CUSTOM SYSTEM SIZING & PRICING
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2', color: '#ffffff' }}>
            Request Your <span style={{ color: '#93c5fd' }}>Solar Quote</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
            Fill out the details or calculate your load below to receive a precise, custom-engineered energy proposal.
          </p>
        </div>
      </section>

      {/* FORM & CALCULATOR CONTAINER */}
      <main style={{ maxWidth: '750px', margin: '2rem auto', padding: '0 1rem' }}>
        {submitted ? (
          <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '0.5rem' }}>Quote Request Received!</h2>
            <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Thank you! Based on your system estimate of <strong>{recommendedKva}KVA</strong>, our engineering team will review your specifications and contact you shortly via WhatsApp.
            </p>
            <Link 
              href="/"
              style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '0.3rem', textDecoration: 'none', fontWeight: '700', fontSize: '12px' }}
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            
            {/* INTERACTIVE CALCULATOR WIDGET */}
            <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.5rem', padding: '1.25rem' }}>
              <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>🧮 STEP 1: SELECT APPLIANCES</div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.75rem' }}>
                What appliances do you want to power?
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem', fontSize: '12px', marginBottom: '1rem' }}>
                {applianceList.map((app, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedAppliances.includes(app.name)}
                      onChange={() => handleCheckboxChange(app.name)}
                    /> 
                    <span style={{ fontWeight: '600' }}>{app.name}</span>
                  </label>
                ))}
              </div>

              {/* LIVE ESTIMATE BOX */}
              <div style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '1rem', borderRadius: '0.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#93c5fd', fontWeight: '700' }}>ESTIMATED TOTAL LOAD</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '900' }}>{totalWatts} Watts</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: '#93c5fd', fontWeight: '700' }}>RECOMMENDED SYSTEM</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#4ade80' }}>{recommendedKva} KVA System</div>
                </div>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                2. Contact Information
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#374151' }}>Full Name</label>
                  <input type="text" placeholder="Enter full name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#374151' }}>Phone / WhatsApp Number</label>
                  <input type="tel" placeholder="07030671806" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#374151' }}>Property Type</label>
                  <select 
                    value={propertyType} 
                    onChange={(e) => setPropertyType(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', backgroundColor: '#fff' }}
                  >
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Office</option>
                    <option>Shop</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#374151' }}>Installation Location</label>
                  <input type="text" placeholder="e.g. Bodija, Ibadan, Oyo State" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#374151' }}>Additional Notes / Specific Requests</label>
                <textarea rows="3" placeholder="Mention any extra appliances or heavy-duty machinery..." style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }}></textarea>
              </div>
            </div>

            <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.75rem', borderRadius: '0.3rem', border: 'none', fontWeight: '800', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)' }}>
              SUBMIT QUOTE REQUEST ({recommendedKva}KVA SYSTEM) ➔
            </button>

          </form>
        )}
      </main>

    </div>
  );
}
