'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070b', color: '#ffffff', fontFamily: 'sans-serif', paddingBottom: '7rem' }}>
      
      {/* Top Strategic Red Accent Bar */}
      <div style={{ height: '4px', backgroundColor: '#dc2626', width: '100%' }}></div>

      {/* Navigation Header (Fixed mobile spacing) */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: '#0b0f19', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', overflow: 'hidden' }}>
          <img 
            src="https://i.ibb.co/rGYcpw14/Whats-App-Image-2026-09-14-at-10-04-51.jpg" 
            alt="Logo" 
            style={{ height: '32px', width: '32px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #2563eb', flexShrink: 0 }} 
          />
          <span style={{ fontSize: '0.85rem', fontWeight: '900', color: '#2563eb', letterSpacing: '0.3px', whiteSpace: 'nowrap' }}>LITESOLARSOLUTIONS</span>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '700', backgroundColor: '#1f2937', padding: '0.4rem 0.75rem', borderRadius: '0.4rem' }}>
            Home
          </Link>
          <Link href="/packages" style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.4rem 0.75rem', borderRadius: '0.4rem', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none' }}>
            Solutions
          </Link>
        </div>
      </nav>

      {/* Quote Form Section */}
      <section style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem 1.25rem' }}>
        
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563eb', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
            ⚡ CUSTOM PROPOSAL
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', marginBottom: '0.75rem', textTransform: 'uppercase', lineHeight: '1.2' }}>
            Request a Solar <span style={{ color: '#2563eb' }}>Quote</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Fill out the form below with what you want to power, and our team will get back to you with a custom proposal.
          </p>
        </div>

        {submitted ? (
          <div style={{ backgroundColor: '#0b0f19', border: '2px solid #22c55e', borderRadius: '1rem', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ffffff', marginBottom: '0.75rem' }}>Request Received!</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Thank you! Our technical team has received your details and will contact you via WhatsApp shortly with your custom quote.
            </p>
            <Link href="/" style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
              Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#0b0f19', border: '1px solid #1f2937', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g., John Ade" 
                style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '0.5rem', padding: '0.85rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>Phone Number / WhatsApp</label>
              <input 
                type="tel" 
                required 
                placeholder="e.g., 07030671806" 
                style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '0.5rem', padding: '0.85rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>Location / City</label>
              <input 
                type="text" 
                required 
                placeholder="e.g., ijebu ode, ogunstate" 
                style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '0.5rem', padding: '0.85rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>What appliances do you want to power?</label>
              <textarea 
                rows="4" 
                required 
                placeholder="e.g., 1 Fridge, 3 Fans, TV, 6 Bulbs, Washing machine" 
                style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '0.5rem', padding: '0.85rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }} 
              ></textarea>
            </div>

            <button 
              type="submit" 
              style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '1rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}
            >
              Submit Solar Request →
            </button>

          </form>
        )}

      </section>

      {/* Bottom Mobile Navigation Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#030508', borderTop: '1px solid #1f2937', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0.75rem 0', zIndex: 150 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>☀️</span>
          <span>Home</span>
        </Link>
        <Link href="/packages" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>⚡</span>
          <span>Solutions</span>
        </Link>
        <Link href="/#calculator" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>🧮</span>
          <span>Calculator</span>
        </Link>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#22c55e', textDecoration: 'none', fontSize: '0.75rem', gap: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem' }}>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
