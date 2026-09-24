'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage({ initialProducts = [] }) {
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
            <span style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '0.3px' }}>
              <span style={{ color: '#1e3a8a' }}>LITESOLAR</span>
              <span style={{ color: '#dc2626' }}>SOLUTIONS</span>
            </span>
          </Link>

          <Link 
            href="/store"
            style={{ backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: '0.25rem', fontWeight: '600', fontSize: '12px', boxShadow: '0 2px 5px rgba(37, 99, 235, 0.2)' }}
          >
            Store Catalog
          </Link>
        </div>
      </header>

      {/* WELCOME BANNER SECTION */}
      <section style={{ backgroundColor: '#f0fdf4', borderBottom: '1px solid #dcfce7', padding: '0.75rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#166534', fontWeight: '700', margin: 0 }}>
            Welcome to LITESOLARSOLUTIONS. Experience uninterrupted power with certified solar systems, hybrid inverters, and lithium energy storage.
          </p>
        </div>
      </section>

      {/* HERO SECTION */}
      <section style={{ 
        padding: '3.5rem 1rem', 
        backgroundColor: '#1e3a8a', 
        backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.82), rgba(30, 58, 138, 0.92)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        borderBottom: '1px solid #cbd5e1'
      }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.4)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '10px', fontWeight: '700', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>
            POWERING NIGERIA SUSTAINABLY
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '0.75rem', color: '#ffffff' }}>
            Illuminating your world with <span style={{ color: '#93c5fd' }}>affordable solar energy</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            Reliable solar panels, high-performance inverters, and lithium batteries engineered for modern homes and businesses.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/store"
              style={{ backgroundColor: '#ffffff', color: '#1e3a8a', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.35rem', fontWeight: '800', fontSize: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
              Browse Packages
            </Link>
            <Link 
              href="/request-a-quote"
              style={{ backgroundColor: 'transparent', color: '#ffffff', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.35rem', fontWeight: '700', fontSize: '12px', border: '1px solid rgba(255,255,255,0.6)' }}
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & GUARANTEE SECTION (WITH SCROLLABLE GALLERY IN EXPERT INSTALLATION) */}
      <section style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>WHY CHOOSE US</div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e3a8a' }}>Our Core Guarantees & Excellence</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Genuine Components Card */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '100%', height: '180px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e2e8f0' }}>
                <img 
                  src="https://i.ibb.co/0p7tfrvw/Whats-App-Image-2026-09-16-at-05-40-07-1.jpg" 
                  alt="Genuine Solar Components" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>Genuine High-Grade Components</h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5' }}>
                  We source and supply 100% authentic, durable solar panels, high-efficiency hybrid inverters, and long-lasting deep-cycle lithium batteries designed to withstand tough power conditions and deliver optimal energy output for decades.
                </p>
              </div>
            </div>

            {/* Expert Installation Card with Horizontal Scrollable Gallery */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              
              {/* Scrollable Image Gallery Container */}
              <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                gap: '0.75rem', 
                padding: '0.75rem', 
                backgroundColor: '#f8fafc', 
                borderBottom: '1px solid #e2e8f0',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch'
              }}>
                <img 
                  src="https://i.ibb.co/4nF6hrQy/88185879-b4d1-4a39-847e-acb0cd516a32.jpg" 
                  alt="Installation angle 1" 
                  style={{ width: '220px', height: '180px', objectFit: 'cover', borderRadius: '0.5rem', flexShrink: 0, scrollSnapAlign: 'start', border: '1px solid #cbd5e1' }} 
                />
                <img 
                  src="https://i.ibb.co/zV1hMTQS/e45300bd-7d95-4564-a156-7f7df9b44663.jpg" 
                  alt="Installation angle 2" 
                  style={{ width: '220px', height: '180px', objectFit: 'cover', borderRadius: '0.5rem', flexShrink: 0, scrollSnapAlign: 'start', border: '1px solid #cbd5e1' }} 
                />
                <img 
                  src="https://i.ibb.co/hFt84vtx/4ec4bbcc-fbe9-41d8-b3f7-306946991a86.jpg" 
                  alt="Installation angle 3" 
                  style={{ width: '220px', height: '180px', objectFit: 'cover', borderRadius: '0.5rem', flexShrink: 0, scrollSnapAlign: 'start', border: '1px solid #cbd5e1' }} 
                />
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>Expert Professional Installation</h3>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5' }}>
                  Our certified electrical engineers execute meticulous, clean wiring, proper load balancing, and secure circuit configurations. From our base in Ijebu Ode to locations nationwide, we guarantee safe and flawless setup.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RECENT SOLAR INSTALLATIONS SECTION (BROUGHT BACK) */}
      <section style={{ maxWidth: '1100px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>OUR WORK IN ACTION</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e3a8a' }}>Recent Solar Installations</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '100%', height: '220px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e2e8f0' }}>
              <img 
                src="https://i.ibb.co/DfpZWPVt/Whats-App-Image-2026-09-14-at-15-44-44.jpg" 
                alt="5KVA Residential Hybrid System" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>5KVA Residential Hybrid System</h3>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5' }}>
                Clean rooftop solar panel array with lithium battery backup in Ijebu Ode.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '100%', height: '220px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e2e8f0' }}>
              <img 
                src="https://i.ibb.co/b9b8CqF/Whats-App-Image-2026-09-14-at-15-40-58.jpg" 
                alt="3.5KVA Hybrid Setup" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>3.5KVA Hybrid Setup</h3>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5' }}>
                Zero-downtime power configuration for modern homes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE SYSTEM SIZER CALCULATOR */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(30, 58, 138, 0.08)' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>INSTANT SYSTEM SIZER</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>Calculate What Power You Need</h2>
          <p style={{ fontSize: '12px', color: '#475569', marginBottom: '1rem' }}>Select the appliances you want to run to instantly view your estimated load and recommended inverter size:</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem', fontSize: '12px', marginBottom: '1.25rem' }}>
            {applianceList.map((app, i) => (
              <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '6px', border: selectedAppliances.includes(app.name) ? '1px solid #2563eb' : '1px solid #cbd5e1', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={selectedAppliances.includes(app.name)}
                  onChange={() => handleCheckboxChange(app.name)}
                /> 
                <span style={{ fontWeight: '600', color: selectedAppliances.includes(app.name) ? '#1e3a8a' : '#334155' }}>{app.name}</span>
              </label>
            ))}
          </div>

          <div style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '1rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', boxShadow: '0 2px 8px rgba(30, 58, 138, 0.2)' }}>
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
              style={{ display: 'inline-block', backgroundColor: '#25D366', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '0.35rem', textDecoration: 'none', fontWeight: '700', fontSize: '12px', boxShadow: '0 3px 8px rgba(37, 211, 102, 0.3)' }}
            >
              Get Custom Quote for this Setup on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px' }}>TRUSTED REVIEWS</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a' }}>What Our Customers Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '1.25rem' }}>
            <p style={{ fontSize: '12px', color: '#475569', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              &ldquo;Litesolar installed my 5KVA hybrid system in Ijebu Ode. The transition is seamless, and my family now enjoys 24/7 steady power with zero noise.&rdquo;
            </p>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a8a' }}>— Mr. Adebayo, Ijebu Ode</div>
          </div>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '1.25rem' }}>
            <p style={{ fontSize: '12px', color: '#475569', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              &ldquo;Top-tier professionalism! Their engineering team completed our office inverter setup in one day. Highly recommended for any business.&rdquo;
            </p>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a8a' }}>— Mrs. Chinwe, Ogun State</div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px' }}>GOT QUESTIONS?</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a' }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '1rem' }}>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.3rem' }}>Q: How long do your lithium batteries last?</div>
            <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Our premium LiFePO4 lithium batteries are engineered for over 10 years of reliable daily use with built-in safety management systems.</div>
          </div>

          <div style={{ backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '1rem' }}>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.3rem' }}>Q: Do you offer nationwide delivery and installation?</div>
            <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Yes, we deliver and execute professional solar installations across all states in Nigeria through our certified engineering teams.</div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL CORPORATE FOOTER */}
      <footer style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '2.5rem 1rem 1.5rem 1rem', marginTop: '3rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <img 
                src="https://i.ibb.co/TBbM6PH8/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
                alt="litesolarsolutions logo" 
                style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <span style={{ fontSize: '14px', fontWeight: '800' }}>
                <span style={{ color: '#ffffff' }}>LITESOLAR</span>
                <span style={{ color: '#f87171' }}>SOLUTIONS</span>
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#cbd5e1', maxWidth: '280px', lineHeight: '1.4' }}>
              Illuminating Nigerian homes and businesses with clean, reliable, and affordable solar energy solutions.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#93c5fd', marginBottom: '0.75rem' }}>QUICK LINKS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '12px' }}>
              <Link href="/store" style={{ color: '#fff', textDecoration: 'none' }}>Store Catalog</Link>
              <Link href="/request-a-quote" style={{ color: '#fff', textDecoration: 'none' }}>Request Quote</Link>
              <Link href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Our Projects</Link>
              <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#93c5fd', marginBottom: '0.75rem' }}>CONTACT US</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '12px' }}>
              <a href="tel:07030671806" style={{ color: '#fff', textDecoration: 'none' }}>Phone: 07030671806</a>
              <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>WhatsApp Support</a>
              <span style={{ color: '#cbd5e1', fontSize: '11px' }}>Ijebu Ode, Ogun State</span>
            </div>
          </div>

        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem', textAlign: 'center', fontSize: '11px', color: '#94a3b8' }}>
          &copy; 2026 LITESOLARSOLUTIONS. All rights reserved.
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '1rem', right: '1rem', backgroundColor: '#25D366', color: '#fff', padding: '0.6rem 1rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '12px', fontWeight: '700', boxShadow: '0 3px 8px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        <span>WhatsApp Chat</span>
      </a>

    </div>
  );
}
