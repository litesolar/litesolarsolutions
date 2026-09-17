'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  
  const [form, setForm] = useState({
    title: '',
    capacity: '',
    price: '',
    category: 'inverter',
    description: '',
    image: '',
    installationKits: '',
  });

  const fetchPackages = async () => {
    try {
      const res = await fetch('/api/packages');
      const data = await res.json();
      if (Array.isArray(data)) setPackages(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to publish');
      }

      alert('Item published successfully! 🚀');
      setForm({
        title: '',
        capacity: '',
        price: '',
        category: 'inverter',
        description: '',
        image: '',
        installationKits: '',
      });
      fetchPackages();
    } catch (err) {
      alert(`Error publishing item:\n${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`/api/packages?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchPackages();
      } else {
        alert('Failed to delete item.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Filter and search logic
  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = 
      pkg.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.capacity?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || pkg.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070b', color: '#fff', padding: '2rem 1rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#2563eb' }}>ADMIN DASHBOARD</h1>
          <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</Link>
        </div>

        {/* Publish Form */}
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#0b0f19', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Add New Product / Package</h2>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Title / Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. 4K Pro Solar CCTV Camera"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Capacity / Spec</label>
              <input 
                type="text" 
                required
                placeholder="e.g. 1.5KVA or 1080P"
                value={form.capacity}
                onChange={(e) => setForm({ ...form, capacity: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Price (₦)</label>
              <input 
                type="text" 
                required
                placeholder="e.g. 450,000"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
            >
              <option value="inverter">Inverter Package</option>
              <option value="solar">Solar Panel Package</option>
              <option value="battery">Battery Pack</option>
              <option value="complete">Complete System</option>
              <option value="cctv">CCTV Solar Camera</option>
              <option value="fan-ac-dc">Fan AC/DC</option>
              <option value="rechargeable-fan">Rechargeable Fan</option>
              <option value="solar-power-box">Solar Power Box</option>
              <option value="smart-lock">Smart Lock</option>
              <option value="flood-street-light">Flood and Street Light</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Description</label>
            <textarea 
              rows="3"
              placeholder="Enter product features and specs..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Image URL</label>
            <input 
              type="text" 
              placeholder="https://..."
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.85rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}
          >
            {loading ? 'Publishing...' : 'Publish Item 🚀'}
          </button>
        </form>

        {/* Search and Category Filter Bar */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <input 
            type="text"
            placeholder="🔍 Search items by title or capacity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1, minWidth: '220px', padding: '0.75rem', backgroundColor: '#0b0f19', border: '1px solid #1f2937', color: '#fff', borderRadius: '0.5rem' }}
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            style={{ padding: '0.75rem', backgroundColor: '#0b0f19', border: '1px solid #1f2937', color: '#fff', borderRadius: '0.5rem' }}
          >
            <option value="all">All Categories</option>
            <option value="inverter">Inverter Package</option>
            <option value="solar">Solar Panel Package</option>
            <option value="battery">Battery Pack</option>
            <option value="complete">Complete System</option>
            <option value="cctv">CCTV Solar Camera</option>
            <option value="fan-ac-dc">Fan AC/DC</option>
            <option value="rechargeable-fan">Rechargeable Fan</option>
            <option value="solar-power-box">Solar Power Box</option>
            <option value="smart-lock">Smart Lock</option>
            <option value="flood-street-light">Flood and Street Light</option>
          </select>
        </div>

        {/* Existing Items Management List */}
        <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>
          Manage Items ({filteredPackages.length} of {packages.length})
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredPackages.length === 0 ? (
            <p style={{ color: '#9ca3af', textAlign: 'center', padding: '2rem' }}>No items found matching your criteria.</p>
          ) : (
            filteredPackages.map((pkg) => (
              <div key={pkg.id} style={{ backgroundColor: '#0b0f19', border: '1px solid #1f2937', padding: '1rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{pkg.title}</h3>
                    <span style={{ fontSize: '0.7rem', backgroundColor: '#1e3a8a', color: '#93c5fd', padding: '0.1rem 0.4rem', borderRadius: '0.3rem' }}>{pkg.category}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{pkg.capacity} | ₦{pkg.price?.toLocaleString()}</p>
                </div>
                <button 
                  onClick={() => handleDelete(pkg.id)}
                  style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '0.5rem 0.75rem', borderRadius: '0.4rem', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
