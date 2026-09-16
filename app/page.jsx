'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  
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

          <Link 
            href="/store"
            style={{ backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: '0.25rem', fontWeight: '600', fontSize: '12px' }}
          >
            Store Catalog 🏪
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ 
        padding: '3rem 1rem', 
        backgroundColor: '#1e3a8a', 
        backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.75), rgba(30, 58, 138, 0.85)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.4)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '10px', fontWeight: '700', marginBottom: '0.75rem' }}>
            ✨ POWERING NIGERIA SUSTAINABLY
          </div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '0.75rem', color: '#ffffff' }}>
            Illuminating your world with <span style={{ color: '#93c5fd' }}>affordable solar energy</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            Reliable solar panels, high-performance inverters, and lithium batteries engineered for modern homes and businesses.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/store"
              style={{ backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '12px' }}
            >
              Browse Packages ➔
            </Link>
            <Link 
              href="/request-a-quote"
              style={{ backgroundColor: '#ffffff', color: '#1e3a8a', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '12px', border: '1px solid #cbd5e1' }}
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & GUARANTEE BAR */}
      <section style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '2.5rem', textAlign: 'left' }}>
          
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', maxWidth: '260px' }}>
            <span style={{ fontSize: '18px' }}>🛡️</span>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.15rem' }}>Genuine Components</div>
              <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Top-tier panels, inverters, and long-lasting lithium batteries.</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', maxWidth: '260px' }}>
            <span style={{ fontSize: '18px' }}>🔧</span>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.15rem' }}>Expert Installation</div>
              <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Professional engineering teams for safe, clean setups.</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', maxWidth: '260px' }}>
            <span style={{ fontSize: '18px' }}>⚡</span>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.15rem' }}>Nationwide Delivery</div>
              <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Fast, secure delivery and deployment across Nigeria.</div>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE SYSTEM SIZER CALCULATOR ON HOMEPAGE */}
      <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>🧮 INSTANT SYSTEM SIZER</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>Calculate What Power You Need</h2>
          <p style={{ fontSize: '12px', color: '#475569', marginBottom: '1rem' }}>Select the appliances you want to run to instantly view your estimated load and recommended inverter size:</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem', fontSize: '12px', marginBottom: '1.25rem' }}>
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

          <div style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '1rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ fontSize: '10px', color: '#93c5fd', fontWeight: '700' }}>ESTIMATED TOTAL LOAD</div>
              <div style={{ fontSize: '1.15rem', fontWeight: '900' }}>{totalWatts} Watts</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '10px', color: '#93c5fd', fontWeight: '700' }}>RECOMMENDED SYSTEM</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#4ade80' }}>{recommendedKva} KVA System</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link 
              href={`https://wa.me/2347030671806?text=Hello%20litesolarsolutions,%20I%20used%20your%20calculator%20and%20need%20a%20quote%20for%20a%20${recommendedKva}KVA%20system%20(${totalWatts}W%20total%20load).`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '0.3rem', textDecoration: 'none', fontWeight: '700', fontSize: '12px' }}
            >
              Get Custom Quote for this Setup on WhatsApp 💬
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY / INSTALLATION SHOWCASE */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px' }}>📸 OUR WORK IN ACTION</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a' }}>Recent Solar Installations</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          
          {/* Photo Card 1 */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <img 
              src="https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png" 
              alt="Residential Solar Setup" 
              style={{ width: '100%', height: '160px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#1e3a8a', marginBottom: '0.25rem' }}>5KVA Residential Hybrid System</h3>
              <p style={{ fontSize: '11px', color: '#64748b' }}>Clean rooftop solar panel array with lithium battery backup in Ibadan.</p>
            </div>
          </div>

          {/* Photo Card 2 */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <img 
              src="https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png" 
              alt="Commercial Inverter Setup" 
              style={{ width: '100%', height: '160px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#1e3a8a', marginBottom: '0.25rem' }}>10KVA Commercial Setup</h3>
              <p style={{ fontSize: '11px', color: '#64748b' }}>Zero-downtime power configuration for business offices and stores.</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '1rem', right: '1rem', backgroundColor: '#25D366', color: '#fff', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: '0 3px 8px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
