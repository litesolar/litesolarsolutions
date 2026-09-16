'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Dashboard Data states
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // New Package Form State
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Simple password check
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
    if (!newTitle || !newPrice) {
      alert('Please fill in at least the title and price.');
      return;
    }

    setSubmitting(true);
    fetch('/api/packages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newTitle,
        price: newPrice,
        description: newDescription,
        imageUrl: newImageUrl || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png',
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setNewTitle('');
        setNewPrice('');
        setNewDescription('');
        setNewImageUrl('');
        setSubmitting(false);
        fetchPackages();
      })
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
      });
  };

  const handleDeletePackage = (id) => {
    if (!confirm('Are you sure you want to delete this package?')) return;

    fetch(`/api/packages?id=${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchPackages();
      })
      .catch((err) => console.error(err));
  };

  // Clear typed login credentials button action
  const handleClearInput = () => {
    setPassword('');
  };

  // IF NOT LOGGED IN, SHOW LOGIN SCREEN WITH DELETE / CLEAR BUTTON
  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: '#f8fafc', color: '#1f2937', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '1rem' }}>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '2rem', width: '100%', maxWidth: '380px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔐</div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1e3a8a' }}>Admin Portal</h1>
            <p style={{ fontSize: '12px', color: '#64748b' }}>Enter your administrator password to manage litesolarsolutions.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>PASSWORD</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password..."
                  style={{ width: '100%', padding: '0.6rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none' }}
                  required
                />
                {password && (
                  <button 
                    type="button"
                    onClick={handleClearInput}
                    title="Clear input"
                    style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '0 0.75rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <button 
              type="submit"
              style={{ backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
            >
              Access Dashboard
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <Link href="/" style={{ fontSize: '11px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
              ← Back to Homepage
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // LOGGED IN ADMIN DASHBOARD
  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#1f2937', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '5rem', fontSize: '14px' }}>
      
      {/* ADMIN HEADER */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '0.75rem 1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="https://i.ibb.co/TBbM6PH8/Whats-App-Image-2026-09-14-at-10-04-51.jpg" alt="logo" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '14px', fontWeight: '800' }}>Admin Dashboard — litesolarsolutions</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/store" target="_blank" style={{ color: '#93c5fd', fontSize: '12px', textDecoration: 'none', fontWeight: '600' }}>
              View Store ↗
            </Link>
            <button 
              onClick={() => setIsAuthenticated(false)}
              style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '0.3rem 0.75rem', borderRadius: '0.25rem', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* ADMIN CONTENT CONTAINER */}
      <main style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* QUICK STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>TOTAL STORE PACKAGES</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#1e3a8a', marginTop: '0.25rem' }}>{packages.length}</div>
          </div>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>PRIMARY LOCATION</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#16a34a', marginTop: '0.25rem' }}>Ijebu Ode, Ogun State</div>
          </div>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>DIRECT WHATSAPP LINE</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#2563eb', marginTop: '0.25rem' }}>07030671806</div>
          </div>
        </div>

        {/* ADD NEW PACKAGE FORM */}
        <section style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem' }}>➕ Add New Solar Package to Store</h2>
          
          <form onSubmit={handleCreatePackage} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'flex-end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>PACKAGE TITLE</label>
              <input 
                type="text" 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
                placeholder="e.g. 5KVA Hybrid Solar System" 
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }}
                required 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>PRICE (Naira)</label>
              <input 
                type="text" 
                value={newPrice} 
                onChange={(e) => setNewPrice(e.target.value)} 
                placeholder="e.g. 1,450,000" 
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }}
                required 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>IMAGE URL (Optional)</label>
              <input 
                type="text" 
                value={newImageUrl} 
                onChange={(e) => setNewImageUrl(e.target.value)} 
                placeholder="Paste image link here..." 
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} 
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#475569', marginBottom: '0.3rem' }}>DESCRIPTION / SPECIFICATIONS</label>
              <textarea 
                value={newDescription} 
                onChange={(e) => setNewDescription(e.target.value)} 
                placeholder="Detail what is included (Inverter, Panels, Lithium Battery, etc.)..." 
                rows="2"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid #cbd5e1', fontSize: '12px' }} 
              />
            </div>

            <div>
              <button 
                type="submit" 
                disabled={submitting}
                style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
              >
                {submitting ? 'Adding Package...' : 'Publish Package to Store 🚀'}
              </button>
            </div>
          </form>
        </section>

        {/* EXISTING PACKAGES LIST / INVENTORY WITH DELETE BUTTONS */}
        <section style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '1rem' }}>📦 Current Store Inventory ({packages.length})</h2>

          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading inventory...</div>
          ) : packages.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>No packages found in store database.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {packages.map((pkg) => (
                <div key={pkg.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#f8fafc', flexWrap: 'wrap', gap: '1rem' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={pkg.imageUrl || "https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png"} alt="" style={{ width: '45px', height: '45px', borderRadius: '0.3rem', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '800', color: '#1e3a8a' }}>{pkg.title}</div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#16a34a' }}>₦{pkg.price}</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleDeletePackage(pkg.id)}
                    style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '0.4rem 0.75rem', borderRadius: '0.3rem', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Delete Package 🗑️
                  </button>

                </div>
              ))}
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
