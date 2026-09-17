'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

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
      // Clean mobile smart quotes, weird spaces, and null bytes before parsing JSON
      const sanitizedJsonString = jsonInput
        .replace(/[\u201C\u201D]/g, '"') // Replace smart double quotes
        .replace(/[\u2018\u2019]/g, "'") // Replace smart single quotes
        .replace(/\u0000/g, '')          // Remove null bytes
        .trim();

      let parsedItems;
      try {
        parsedItems = JSON.parse(sanitizedJsonString);
      } catch (err) {
        throw new Error("Invalid JSON format. Please make sure you are using straight double quotes (\") for keys and values.");
      }

      if (!Array.isArray(parsedItems)) {
        throw new Error("Input must be a JSON array starting with '[' and ending with ']'.");
      }

      const res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secretKey,
          items: parsedItems,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to publish items');
      }

      alert(data.message || 'Items published successfully! 🚀');
      setJsonInput('');
      fetchPackages();
    } catch (err) {
      alert(`Error publishing:\n${err.message}`);
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#2563eb' }}>ADMIN JSON IMPORT</h1>
          <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</Link>
        </div>

        {/* Bulk Import Form */}
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#0b0f19', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Add Products via JSON Bulk Paste</h2>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Secret key</label>
            <input 
              type="password" 
              required
              placeholder="Your SEED_SECRET"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Product JSON (paste array here)</label>
            <textarea 
              rows="10"
              required
              placeholder={`[{"title": "5KVA Inverter Package", "capacity": "5KVA", "price": 750000, "category": "inverter", "description": "Full setup"}]`}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', backgroundColor: '#111827', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem', fontFamily: 'monospace', fontSize: '0.85rem' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.85rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}
          >
            {loading ? 'Submitting...' : 'Submit 🚀'}
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

        {/* Manage Items List */}
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
