'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>REQUEST A QUOTE</span>
          <Link href="/contact" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Contact
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            CUSTOM SYSTEM SIZING & PRICING
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Request Your <span style={{ color: '#60a5fa' }}>Solar Quote</span>
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            Fill out the details below to receive a precise, custom-engineered energy proposal for your property.
          </p>
        </div>
      </section>

      {/* FORM CONTAINER */}
      <main style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
        {submitted ? (
          <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#111827', marginBottom: '0.5ktrem' }}>Quote Request Received!</h2>
            <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Thank you! Your quote request has been submitted successfully. Our engineering team will review your specifications and contact you shortly via phone or WhatsApp.
            </p>
            <Link 
              href="/"
              style={{ display: 'inline-block', backgroundColor: '#dc2626', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <h2 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#111827', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.5rem' }}>
              1. Contact Information
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Full Name</label>
                <input type="text" placeholder="Enter full name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Phone Number[cite: 1]</label>
                <input type="tel" placeholder="07030671806" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>WhatsApp Number[cite: 1]</label>
                <input type="tel" placeholder="07030671806" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Email Address[cite: 1]</label>
                <input type="email" placeholder="yourname@email.com" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Location / Installation Address[cite: 1]</label>
              <input type="text" placeholder="e.g. Bodija, Ibadan, Oyo State" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }} />
            </div>

            <h2 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#111827', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.5rem', marginTop: '0.5rem' }}>
              2. Property & Power Configuration
            </h2>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Property Type[cite: 1]</label>
              <select style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem', backgroundColor: '#fff' }}>
                <option>House[cite: 1]</option>
                <option>Apartment[cite: 1]</option>
                <option>Office[cite: 1]</option>
                <option>Shop[cite: 1]</option>
                <option>Hotel[cite: 1]</option>
                <option>Factory[cite: 1]</option>
                <option>Other[cite: 1]</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Appliances to Power[cite: 1]</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem', fontSize: '0.75rem' }}>
                {['Lights[cite: 1]', 'Fans[cite: 1]', 'TV[cite: 1]', 'Refrigerator[cite: 1]', 'Freezer[cite: 1]', 'AC[cite: 1]', 'Washing Machine[cite: 1]', 'Water Pump[cite: 1]', 'Computers[cite: 1]', 'Other[cite: 1]'].map((app, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', backgroundColor: '#f9fafb', padding: '0.4rem', borderRadius: '4px', border: '1px solid #f3f4f6' }}>
                    <input type="checkbox" /> {app}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Current Power Source[cite: 1]</label>
                <select style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem', backgroundColor: '#fff' }}>
                  <option>Grid[cite: 1]</option>
                  <option>Generator[cite: 1]</option>
                  <option>Existing Solar[cite: 1]</option>
                  <option>Combination[cite: 1]</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Desired Backup Requirement[cite: 1]</label>
                <select style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem', backgroundColor: '#fff' }}>
                  <option>4 hours[cite: 1]</option>
                  <option>8 hours[cite: 1]</option>
                  <option>12 hours[cite: 1]</option>
                  <option>24 hours[cite: 1]</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Additional Message / Notes[cite: 1]</label>
              <textarea rows="3" placeholder="Any specific load details or requests..." style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.8rem' }}></textarea>
            </div>

            <button type="submit" style={{ backgroundColor: '#dc2626', color: '#fff', padding: '0.75rem', borderRadius: '4px', border: 'none', fontWeight: '900', fontSize: '0.85rem', cursor: 'pointer', marginTop: '0.5rem', boxShadow: '0 4px 10px rgba(220, 38, 38, 0.3)' }}>
              REQUEST MY QUOTE[cite: 1]
            </button>

          </form>
        )}
      </main>

    </div>
  );
}
