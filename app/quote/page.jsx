import Link from 'next/link';

export default function QuotePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070b', color: '#ffffff', fontFamily: 'sans-serif', paddingBottom: '4rem' }}>
      
      {/* Top Strategic Red Accent Bar */}
      <div style={{ height: '4px', backgroundColor: '#dc2626', width: '100%' }}></div>

      {/* Navigation Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: '#0b0f19', borderBottom: '1px solid #1f2937' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="https://i.ibb.co/rGYcpw14/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
            alt="LITESOLARSOLUTIONS Logo" 
            style={{ height: '38px', width: '38px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #2563eb' }} 
          />
          <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#2563eb', letterSpacing: '0.5px' }}>LITESOLARSOLUTIONS</span>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>Home</Link>
          <Link href="/quote" style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.4rem 0.9rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>Get a Quote</Link>
        </div>
      </nav>

      {/* Form Container */}
      <main style={{ maxWidth: '700px', margin: '3rem auto', padding: '2.5rem', backgroundColor: '#0b0f19', borderRadius: '1rem', border: '1px solid #1f2937', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
        
        <h1 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.5rem', color: '#ffffff' }}>Request a Solar Quote</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
          Fill out the form below with what you want to power, and our team will get back to you with a custom proposal.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ffffff' }}>Full Name</label>
            <input 
              type="text" 
              placeholder="e.g., John Ade" 
              style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '0.5rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#ffffff', outline: 'none', fontSize: '0.95rem' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ffffff' }}>Phone Number / WhatsApp</label>
            <input 
              type="text" 
              placeholder="e.g., 08012345678" 
              style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '0.5rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#ffffff', outline: 'none', fontSize: '0.95rem' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ffffff' }}>Location / City</label>
            <input 
              type="text" 
              placeholder="e.g., Ibadan, Oyo State" 
              style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '0.5rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#ffffff', outline: 'none', fontSize: '0.95rem' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ffffff' }}>What appliances do you want to power?</label>
            <textarea 
              rows="4"
              placeholder="e.g., 1 Fridge, 2 TVs, 5 Fans, 1 Inverter Air Conditioner, and lights..." 
              style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '0.5rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#ffffff', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }} 
            />
          </div>

          <button 
            type="submit" 
            style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '1rem', borderRadius: '0.75rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)', marginTop: '0.5rem' }}
          >
            Submit Quote Request
          </button>

        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
        </div>

      </main>

    </div>
  );
}
