'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form States
  const [title, setTitle] = useState('');
  const [capacity, setCapacity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('inverter'); // Added category state
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [installationKits, setInstallationKits] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchPackages();
    } else {
      alert('Incorrect Admin Password');
    }
  };

  const fetchPackages = () => {
    setLoading(true);
    fetch('/api/packages')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPackages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleCreatePackage = (e) => {
    e.preventDefault();
    if (!title || !price || !capacity) {
      alert('Please fill in Title, Capacity, and Price.');
      return;
    }

    setSubmitting(true);
    
    const payload = {
      title: title.trim(),
      capacity: capacity.trim(),
      price: price.trim(),
      category: category.trim(), // Passes category for store filtering
      description: description.trim(),
      image: image.trim() || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png',
      installationKits: installationKits.trim(),
    };

    fetch('/api/packages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to publish');
        return data;
      })
      .then(() => {
        setTitle('');
        setCapacity('');
        setPrice('');
        setCategory('inverter');
        setDescription('');
        setImage('');
        setInstallationKits('');
        setSubmitting(false);
        fetchPackages();
        alert('Package published successfully! 🚀');
      })
      .catch((err) => {
        console.error(err);
        alert('Error publishing package: ' + err.message);
        setSubmitting(false);
      });
  };

  const handleDeletePackage = (id) => {
    if (!confirm('Are you sure you want to delete this package?')) return;

    fetch(`/api/packages?id=${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to delete');
        fetchPackages();
      })
      .catch((err) => {
        console.error(err);
        alert('Error deleting package.');
      });
  };

  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: '#f8fafc', color: '#1f2937', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', padding: '1rem' }}>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '2rem', width: '100%', maxWidth: '380px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔐</div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1e3a8a' }}>Admin Portal</h1>
          </div>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>PASSWORD</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                style={{ width: '100%', padding: '0.6rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none' }}
                required
              />
            </div>
            <button type="submit" style={{ backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}>
              Access Dashboard
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <Link href="/" style={{ fontSize: '11px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>← Back to Homepage</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#1f2937', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', paddingBottom: '5rem', fontSize: '14px' }}>
      <header style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.75rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: '800' }}>Admin Dashboard — litesolarsolutions</span>
          <button onClick={() => setIsAuthenticated(false)} style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '0.3rem 0.75rem', borderRadius: '0.25rem', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>Logout</button>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem' }}>➕ Publish Solar Package</h2>
          
          <form onSubmit={handleCreatePackage} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'flex-end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>PACKAGE TITLE</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. itel powertank" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} required />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>CAPACITY</label>
              <input type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="e.g. 500W / 1000Wh" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} required />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>PRICE (₦)</label>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g. 600,000" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} required />
            </div>

            {/* PRODUCT CATEGORY SELECTOR */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>PRODUCT CATEGORY</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px', backgroundColor: '#fff', fontWeight: '600', color: '#1e3a8a' }}>
                <option value="inverter">Inverters</option>
                <option value="panels">Solar Panels</option>
                <option value="lithium batteries">Lithium Batteries</option>
                <option value="tubular batteries">Tubular Batteries</option>
                <option value="fans">Fans (AC/DC/Solar)</option>
                <option value="streetlight">Streetlights & Floodlights</option>
                <option value="solar cctv camera">Solar CCTV Cameras</option>
                <option value="charge controller">Charge Controllers</option>
                <option value="smart lock">Smart Locks</option>
                <option value="solar power boxes">Solar Power Boxes</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>IMAGE URL</label>
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image link..." style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>INSTALLATION KITS (Comma separated)</label>
              <input type="text" value={installationKits} onChange={(e) => setInstallationKits(e.target.value)} placeholder="e.g. Mounting rails, DC cables, Breakers" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>DESCRIPTION & SPECS</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Specifications..." rows="2" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} />
            </div>

            <div>
              <button type="submit" disabled={submitting} style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}>
                {submitting ? 'Publishing...' : 'Publish Package 🚀'}
              </button>
            </div>
          </form>
        </section>

        <section style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem' }}>📦 Active Store Listings ({packages.length})</h2>
          {loading ? <div>Loading...</div> : packages.map((pkg) => (
            <div key={pkg.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', marginBottom: '0.5rem', background: '#f8fafc' }}>
              <div>
                <strong>{pkg.title}</strong> — <span style={{ color: '#16a34a' }}>{pkg.capacity}</span> ({pkg.price}) <br />
                <span style={{ fontSize: '11px', color: '#64748b' }}>Category: <strong>{pkg.category || 'inverter'}</strong></span>
              </div>
              <button onClick={() => handleDeletePackage(pkg.id)} style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '0.3rem 0.6rem', borderRadius: '0.3rem', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>Delete</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
