'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [packages, setPackages] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const res = await fetch('/api/packages');
      const data = await res.json();
      if (Array.isArray(data)) setPackages(data);
    } catch (err) {
      console.error('Failed to load packages', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, price, description, imageUrl })
      });

      if (res.ok) {
        setTitle('');
        setPrice('');
        setDescription('');
        setImageUrl('');
        fetchPackages();
        alert('Solar package published successfully!');
      } else {
        alert('Error publishing package.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1f2937', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '5rem', fontSize: '14px' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#ffffff', color: '#1e3a8a', padding: '0.5rem 1rem', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="https://i.ibb.co/TBbM6PH8/Whats-App-Image-2026-09-14-at-10-04-51.jpg" alt="logo" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '14px', fontWeight: '800' }}>Admin Dashboard</span>
          </div>
          <Link href="/" style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '1.5rem' }}>Publish Solar Package</h1>

        {/* PUBLISH FORM */}
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#334155' }}>Package Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. 5KVA Complete Hybrid System" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#334155' }}>Price (₦)</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g. 1,450,000" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#334155' }}>Image URL (Imbb link)</label>
            <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://i.ibb.co/..." style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '0.3rem', color: '#334155' }}>Description & Specifications</label>
            <textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Includes inverter, panels, lithium battery..." required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }}></textarea>
          </div>

          <button type="submit" disabled={loading} style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.6rem', borderRadius: '0.3rem', border: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
            {loading ? 'Publishing...' : 'Publish to Store Catalog 🚀'}
          </button>
        </form>

        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem' }}>Active Store Listings ({packages.length})</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {packages.map((pkg) => (
            <div key={pkg.id} style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', overflow: 'hidden', padding: '1rem' }}>
              {pkg.imageUrl && <img src={pkg.imageUrl} alt={pkg.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px', marginBottom: '0.5rem' }} />}
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.25rem' }}>{pkg.title}</h3>
              <div style={{ fontSize: '13px', fontWeight: '900', color: '#16a34a', marginBottom: '0.5rem' }}>₦{pkg.price}</div>
              <p style={{ fontSize: '11px', color: '#64748b' }}>{pkg.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
