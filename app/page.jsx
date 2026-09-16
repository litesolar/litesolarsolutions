import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let packages = [];
  
  try {
    packages = await prisma.package.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error("Failed to load packages from database:", error);
  }

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

      {/* CLEAN STICKY HEADER */}
      <header style={{ backgroundColor: '#ffffff', color: '#1e3a8a', padding: '0.6rem 1rem', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: '#1e3a8a' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px' }}>
              ⚡
            </div>
            <div style={{ lineHeight: '1.1' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '0.3px', display: 'block' }}>litesolarsolutions</span>
              <span style={{ fontSize: '9px', fontWeight: '600', color: '#2563eb', letterSpacing: '0.5px', display: 'block' }}>SOLAR TECHNOLOGIES</span>
            </div>
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

      {/* NEW: TRUST & GUARANTEE BAR */}
      <section style={{ backgroundColor: '#f1f5f9', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '0.5rem', textAlign: 'center', fontSize: '11px', fontWeight: '700', color: '#334155' }}>
          <div>🛡️ Genuine Components</div>
          <div>🔧 Expert Installation</div>
          <div>⚡ Nationwide Delivery</div>
        </div>
      </section>

      {/* LIVE DATABASE PACKAGES SECTION */}
      <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: '800', color: '#2563eb', letterSpacing: '0.5px' }}>⚡ LIVE INVENTORY</div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a' }}>Published Solar Packages</h2>
          </div>
        </div>

        {packages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
            <p style={{ color: '#64748b', fontSize: '13px' }}>No packages published yet. Use your admin dashboard to upload items!</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {packages.map((pkg) => {
              // Format price cleanly with commas and Naira sign if it's purely numeric
              const formattedPrice = !isNaN(pkg.price) 
                ? `₦${Number(pkg.price).toLocaleString()}` 
                : pkg.price;

              return (
                <div key={pkg.id} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div>
                    <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#1e3a8a', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontSize: '11px', fontWeight: '700', marginBottom: '0.5rem', border: '1px solid #bfdbfe' }}>
                      {pkg.capacity}
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.4rem', color: '#1e3a8a', textTransform: 'capitalize' }}>{pkg.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '12px', marginBottom: '0.75rem', lineHeight: '1.4' }}>{pkg.description}</p>
                    
                    {pkg.features && pkg.features.length > 0 && (
                      <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', marginBottom: '1rem', color: '#475569', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {pkg.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#16a34a', marginBottom: '0.75rem' }}>
                      {formattedPrice}
                    </div>
                    <a 
                      href={`https://wa.me/2347030671806?text=Hello%20litesolarsolutions,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20(${encodeURIComponent(formattedPrice)})`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ display: 'block', textAlign: 'center', backgroundColor: '#2563eb', color: '#fff', padding: '0.5rem', borderRadius: '0.25rem', textDecoration: 'none', fontWeight: '700', fontSize: '12px' }}
                    >
                      Enquire on WhatsApp 💬
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* NEW: ENERGY CALCULATOR / CUSTOM LOAD BANNER */}
      <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.5rem', padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#2563eb', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>💡 NEED A CUSTOM CONFIGURATION?</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.4rem' }}>Unsure of your exact power requirement?</h3>
          <p style={{ fontSize: '12px', color: '#475569', marginBottom: '1rem' }}>Tell us your appliances (TVs, ACs, Fridges), and our engineers will size the ideal system for your budget.</p>
          <Link href="/request-a-quote" style={{ display: 'inline-block', backgroundColor: '#1e3a8a', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none', fontWeight: '700', fontSize: '12px' }}>
            Request System Sizing ➔
          </Link>
        </div>
      </section>

      {/* RECENT PROJECTS PREVIEW */}
      <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '10px', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.5px' }}>⚡ RECENT INSTALLATIONS</div>
            <Link href="/projects" style={{ fontSize: '11px', fontWeight: '700', color: '#2563eb', textDecoration: 'none' }}>View All ➔</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
            <div style={{ backgroundColor: '#fff', padding: '0.85rem', borderRadius: '0.35rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#1e3a8a', marginBottom: '0.2rem' }}>5KVA Residential Hybrid System</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Ikeja, Lagos • Monocrystalline setup.</div>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '0.85rem', borderRadius: '0.35rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#1e3a8a', marginBottom: '0.2rem' }}>10KVA Commercial Setup</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Ibadan, Oyo State • Zero downtime configuration.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer style={{ maxWidth: '900px', margin: '2rem auto 0 auto', padding: '1.5rem 1rem', backgroundColor: '#1e3a8a', color: '#ffffff', borderRadius: '0.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '10px', fontWeight: '800', color: '#93c5fd', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>🤝 GET IN TOUCH</div>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.4rem' }}>litesolarsolutions</h2>
        <p style={{ fontSize: '11px', opacity: '0.9', marginBottom: '1rem' }}>Contact us for inspections, purchases, and nationwide installations:</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem', fontSize: '11px' }}>
          <a href="tel:07030671806" style={{ backgroundColor: '#fff', color: '#1e3a8a', padding: '0.4rem 0.85rem', borderRadius: '0.25rem', textDecoration: 'none', fontWeight: '700' }}>
            📞 07030671806
          </a>
          <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: '#fff', padding: '0.4rem 0.85rem', borderRadius: '0.25rem', textDecoration: 'none', fontWeight: '700' }}>
            💬 WhatsApp Us
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontSize: '12px' }}>
          <Link href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
          <Link href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</Link>
          <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          <a href="https://instagram.com/litesolarsolutions" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Instagram: @litesolarsolutions</a>
          <a href="https://tiktok.com/@litesolarenergy" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>TikTok: @litesolarenergy</a>
        </div>
      </footer>

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
