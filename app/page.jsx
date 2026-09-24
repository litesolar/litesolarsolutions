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
    <div style={{ backgroundColor: '#030712', color: '#f3f4f6', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '5rem', fontSize: '14px' }}>
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div style={{ backgroundColor: '#090d16', color: '#93c5fd', padding: '0.4rem 1rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '11px', fontWeight: '600', borderBottom: '1px solid rgba(245, 158, 11, 0.15)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/projects" style={{ color: '#fbbf24', textDecoration: 'none' }}>PROJECTS</Link>
          <span style={{ color: '#475569' }}>|</span>
          <Link href="/about" style={{ color: '#fbbf24', textDecoration: 'none' }}>ABOUT US</Link>
        </div>
      </div>

      {/* CLEAN STICKY HEADER WITH LOGO */}
      <header className="solar-glass" style={{ padding: '0.5rem 1rem', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <img 
              src="https://i.ibb.co/TBbM6PH8/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
              alt="litesolarsolutions logo" 
              style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(245, 158, 11, 0.3)' }} 
            />
            <span style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '0.3px' }}>
              <span style={{ color: '#ffffff' }}>LITESOLAR</span>
              <span style={{ color: '#f59e0b' }}>SOLUTIONS</span>
            </span>
          </Link>

          <Link 
            href="/store"
            style={{ backgroundColor: '#f59e0b', color: '#030712', textDecoration: 'none', padding: '0.4rem 0.75rem', borderRadius: '0.35rem', fontWeight: '700', fontSize: '12px', boxShadow: '0 2px 10px rgba(245, 158, 11, 0.3)' }}
          >
            Store Catalog 🏪
          </Link>
        </div>
      </header>

      {/* WELCOME BANNER SECTION */}
      <section style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', padding: '0.75rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: '#34d399', fontWeight: '700', margin: 0 }}>
            👋 Welcome to LITESOLARSOLUTIONS! Experience uninterrupted power with our certified solar systems, hybrid inverters, and lithium energy storage.
          </p>
        </div>
      </section>

      {/* HERO SECTION */}
      <section style={{ 
        padding: '3rem 1rem', 
        backgroundColor: '#0f172a', 
        backgroundImage: 'linear-gradient(rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.92)), url("https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        borderBottom: '1px solid rgba(245, 158, 11, 0.15)'
      }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '10px', fontWeight: '700', marginBottom: '0.75rem' }}>
            ✨ POWERING NIGERIA SUSTAINABLY
          </div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '0.75rem', color: '#ffffff' }}>
            Illuminating your world with <span style={{ color: '#fbbf24' }}>affordable solar energy</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            Reliable solar panels, high-performance inverters, and lithium batteries engineered for modern homes and businesses.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/store"
              style={{ backgroundColor: '#f59e0b', color: '#030712', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.4rem', fontWeight: '800', fontSize: '12px', boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)' }}
            >
              Browse Packages ➔
            </Link>
            <Link 
              href="/request-a-quote"
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', color: '#ffffff', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.4rem', fontWeight: '700', fontSize: '12px', border: '1px solid rgba(245, 158, 11, 0.3)' }}
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & GUARANTEE SECTION WITH DETAILED IMAGES & DESCRIPTIONS */}
      <section style={{ backgroundColor: '#050b14', borderBottom: '1px solid rgba(245, 158, 11, 0.15)', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '10px', fontWeight: '800', color: '#fbbf24', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>💎 WHY CHOOSE US</div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff' }}>Our Core Guarantees & Excellence</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Genuine Components Card */}
            <div className="solar-glass solar-card-hover" style={{ borderRadius: '0.85rem', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '180px', backgroundColor: '#090d16', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(245, 158, 11, 0.1)' }}>
                <img 
                  src="https://i.ibb.co/0p7tfrvw/Whats-App-Image-2026-09-16-at-05-40-07-1.jpg" 
                  alt="Genuine Solar Components" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '18px' }}>🛡️</span>
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#fbbf24' }}>Genuine High-Grade Components</h3>
                </div>
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5' }}>
                  We source and supply 100% authentic, durable solar panels, high-efficiency hybrid inverters, and long-lasting deep-cycle lithium batteries designed to withstand tough power conditions and deliver optimal energy output for decades.
                </p>
              </div>
            </div>

            {/* Expert Installation Card */}
            <div className="solar-glass solar-card-hover" style={{ borderRadius: '0.85rem', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '180px', backgroundColor: '#090d16', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(245, 158, 11, 0.1)' }}>
                <img 
                  src="https://i.ibb.co/JWZQnjHb/collage-export-0-C85-FA90-4-AF6-4-CB7-963-A-099578566274.jpg" 
                  alt="Expert Engineering Installation" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '18px' }}>🔧</span>
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#fbbf24' }}>Expert Professional Installation</h3>
                </div>
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5' }}>
                  Our certified electrical engineers execute meticulous, clean wiring, proper load balancing, and secure circuit configurations. From our base in Ijebu Ode to locations nationwide, we guarantee safe and flawless setup.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE SYSTEM SIZER CALCULATOR ON HOMEPAGE */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div className="solar-glass" style={{ borderRadius: '0.85rem', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#fbbf24', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>🧮 INSTANT SYSTEM SIZER</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>Calculate What Power You Need</h2>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '1rem' }}>Select the appliances you want to run to instantly view your estimated load and recommended inverter size:</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem', fontSize: '12px', marginBottom: '1.25rem' }}>
            {applianceList.map((app, i) => (
              <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '0.5rem', borderRadius: '6px', border: selectedAppliances.includes(app.name) ? '1px solid #f59e0b' : '1px solid rgba(245, 158, 11, 0.2)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={selectedAppliances.includes(app.name)}
                  onChange={() => handleCheckboxChange(app.name)}
                /> 
                <span style={{ fontWeight: '600', color: selectedAppliances.includes(app.name) ? '#fbbf24' : '#e2e8f0' }}>{app.name}</span>
              </label>
            ))}
          </div>

          <div style={{ backgroundColor: '#090d16', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#fff', padding: '1rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700' }}>ESTIMATED TOTAL LOAD</div>
              <div style={{ fontSize: '1.15rem', fontWeight: '900', color: '#ffffff' }}>{totalWatts} Watts</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700' }}>RECOMMENDED SYSTEM</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#34d399' }}>{recommendedKva} KVA System</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link 
              href={`https://wa.me/2347030671806?text=Hello%20litesolarsolutions,%20I%20used%20your%20calculator%20and%20need%20a%20quote%20for%20a%20${recommendedKva}KVA%20system%20(${totalWatts}W%20total%20load).`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#25D366', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '0.4rem', textDecoration: 'none', fontWeight: '700', fontSize: '12px', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)' }}
            >
              Get Custom Quote for this Setup on WhatsApp 💬
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY / INSTALLATION SHOWCASE */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#fbbf24', letterSpacing: '0.5px' }}>📸 OUR WORK IN ACTION</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>Recent Solar Installations</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          
          <div className="solar-glass solar-card-hover" style={{ borderRadius: '0.6rem', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '160px', backgroundColor: '#090d16', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(245, 158, 11, 0.1)' }}>
              <img 
                src="https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png" 
                alt="Residential Solar Setup" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#fbbf24', marginBottom: '0.25rem' }}>5KVA Residential Hybrid System</h3>
              <p style={{ fontSize: '11px', color: '#94a3b8' }}>Clean rooftop solar panel array with lithium battery backup in Ijebu Ode.</p>
            </div>
          </div>

          <div className="solar-glass solar-card-hover" style={{ borderRadius: '0.6rem', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '160px', backgroundColor: '#090d16', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(245, 158, 11, 0.1)' }}>
              <img 
                src="https://i.ibb.co/LXpJTbsP/Whats-App-Image-2026-09-14-at-15-40-58.jpg" 
                alt="Commercial Inverter Setup" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#fbbf24', marginBottom: '0.25rem' }}>3.5KVA Hybrid Setup</h3>
              <p style={{ fontSize: '11px', color: '#94a3b8' }}>Zero-downtime power configuration for modern homes.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#fbbf24', letterSpacing: '0.5px' }}>⭐ TRUSTED REVIEWS</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>What Our Customers Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          <div className="solar-glass" style={{ borderRadius: '0.6rem', padding: '1.25rem' }}>
            <p style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              &ldquo;Litesolar installed my 5KVA hybrid system in Ijebu Ode. The transition is seamless, and my family now enjoys 24/7 steady power with zero noise.&rdquo;
            </p>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#fbbf24' }}>— Mr. Adebayo, Ijebu Ode</div>
          </div>

          <div className="solar-glass" style={{ borderRadius: '0.6rem', padding: '1.25rem' }}>
            <p style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              &ldquo;Top-tier professionalism! Their engineering team completed our office inverter setup in one day. Highly recommended for any business.&rdquo;
            </p>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#fbbf24' }}>— Mrs. Chinwe, Ogun State</div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#fbbf24', letterSpacing: '0.5px' }}>❓ GOT QUESTIONS?</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="solar-glass" style={{ borderRadius: '0.6rem', padding: '1rem' }}>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#fbbf24', marginBottom: '0.3rem' }}>Q: How long do your lithium batteries last?</div>
            <div style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.4' }}>Our premium LiFePO4 lithium batteries are engineered for over 10 years of reliable daily use with built-in safety management systems.</div>
          </div>

          <div className="solar-glass" style={{ borderRadius: '0.6rem', padding: '1rem' }}>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#fbbf24', marginBottom: '0.3rem' }}>Q: Do you offer nationwide delivery and installation?</div>
            <div style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.4' }}>Yes, we deliver and execute professional solar installations across all states in Nigeria through our certified engineering teams.</div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL CORPORATE FOOTER */}
      <footer style={{ backgroundColor: '#030712', color: '#ffffff', padding: '2.5rem 1rem 1.5rem 1rem', marginTop: '3rem', borderTop: '1px solid rgba(245, 158, 11, 0.2)' }}>
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
                <span style={{ color: '#f59e0b' }}>SOLUTIONS</span>
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#94a3b8', maxWidth: '280px', lineHeight: '1.4' }}>
              Illuminating Nigerian homes and businesses with clean, reliable, and affordable solar energy solutions.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#fbbf24', marginBottom: '0.75rem' }}>QUICK LINKS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '12px' }}>
              <Link href="/store" style={{ color: '#94a3b8', textDecoration: 'none' }}>Store Catalog</Link>
              <Link href="/request-a-quote" style={{ color: '#94a3b8', textDecoration: 'none' }}>Request Quote</Link>
              <Link href="/projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Our Projects</Link>
              <Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#fbbf24', marginBottom: '0.75rem' }}>CONTACT US</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '12px' }}>
              <a href="tel:07030671806" style={{ color: '#94a3b8', textDecoration: 'none' }}>📞 07030671806</a>
              <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>💬 WhatsApp Support</a>
              <span style={{ color: '#94a3b8', fontSize: '11px' }}>📍 Ijebu Ode, Ogun State</span>
            </div>
          </div>

        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', borderTop: '1px solid rgba(245, 158, 11, 0.1)', paddingTop: '1rem', textAlign: 'center', fontSize: '11px', color: '#64748b' }}>
          &copy; 2026 LITESOLARSOLUTIONS. All rights reserved.
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/2347030671806" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ position: 'fixed', bottom: '1rem', right: '1rem', backgroundColor: '#25D366', color: '#fff', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.5)', zIndex: 1100, textDecoration: 'none' }}
        title="Chat on WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
