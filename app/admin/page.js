'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('inverter');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  
  // States for product management / list
  const [products, setProducts] = useState([]);
  const [fetchingProducts, setFetchingProducts] = useState(true);

  // Fetch products on load
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/packages');
      const data = await res.json();
      if (res.ok) {
        setProducts(data);
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setFetchingProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle file selection and convert to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      title,
      price,
      category,
      description,
      features,
      image: imageBase64 || 'https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png'
    };

    try {
      const res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Product published successfully!');
        setTitle('');
        setPrice('');
        setDescription('');
        setFeatures('');
        setImageBase64('');
        setPreview('');
        fetchProducts(); // Refresh product list automatically
      } else {
        alert(`Failed to publish product: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while saving the product.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete Product
  const handleDelete = async (id, productTitle) => {
    if (!confirm(`Are you sure you want to delete "${productTitle}"?`)) return;

    try {
      const res = await fetch(`/api/packages?id=${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (res.ok) {
        alert('Item deleted successfully');
        fetchProducts(); // Refresh list after deletion
      } else {
        alert(`Failed to delete: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while deleting the item.');
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '2rem 1rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* UPLOAD SECTION */}
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1e3a8a' }}>Admin: Upload Product</h2>
            <Link href="/store" style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', textDecoration: 'none' }}>
              View Store →
            </Link>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '0.3rem' }}>Product Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="e.g. 3.5KVA Hybrid Inverter Complete Package"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0.5rem', fontSize: '14px', outline: 'none', backgroundColor: '#fff', color: '#1f2937' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '0.3rem' }}>Price (₦)</label>
              <input 
                type="text" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder="e.g. 450,000"
                required
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0.5rem', fontSize: '14px', outline: 'none', backgroundColor: '#fff', color: '#1f2937' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '0.3rem' }}>Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0.5rem', fontSize: '14px', backgroundColor: '#fff', outline: 'none', fontWeight: '600', color: '#1e3a8a' }}
              >
                <option value="inverter">Inverter Packages</option>
                <option value="solar">Solar Panel Packages</option>
                <option value="battery">Battery Packs</option>
                <option value="complete">Complete Systems</option>
                <option value="cctv">CCTV Solar Cameras</option>
                <option value="fan-ac-dc">Fans (AC/DC)</option>
                <option value="rechargeable-fan">Rechargeable Fans</option>
                <option value="solar-power-box">Solar Power Boxes</option>
                <option value="smart-lock">Smart Locks</option>
                <option value="flood-street-light">Flood & Street Lights</option>
              </select>
            </div>

            {/* IMAGE FILE PICKER */}
            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '0.3rem' }}>Select Product Image from Device</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                style={{ width: '100%', fontSize: '13px', padding: '0.5rem', border: '1px dashed #cbd5e1', borderRadius: '0.5rem', backgroundColor: '#f8fafc', cursor: 'pointer', color: '#1f2937' }}
              />
              {preview && (
                <div style={{ marginTop: '0.75rem', width: '90px', height: '90px', border: '1px solid #cbd5e1', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#f1f5f9', padding: '4px' }}>
                  <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              )}
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '0.3rem' }}>Description</label>
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                rows="3"
                placeholder="Detailed product overview..."
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0.5rem', fontSize: '14px', outline: 'none', backgroundColor: '#fff', color: '#1f2937' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', display: 'block', marginBottom: '0.3rem' }}>Installation Kits / Features (comma-separated)</label>
              <input 
                type="text" 
                value={features} 
                onChange={(e) => setFeatures(e.target.value)} 
                placeholder="e.g. 2x Solar Panels, 1x Tubular Battery, 10m DC Cable"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0.5rem', fontSize: '14px', outline: 'none', backgroundColor: '#fff', color: '#1f2937' }}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              style={{ backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '0.85rem', borderRadius: '0.5rem', fontWeight: '900', cursor: 'pointer', fontSize: '14px', marginTop: '0.5rem' }}
            >
              {loading ? 'Publishing Product...' : 'Save Product to Store'}
            </button>
          </form>
        </div>

        {/* MANAGEMENT / INVENTORY LIST SECTION */}
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '1rem' }}>Manage Inventory ({products.length} Items)</h2>
          
          {fetchingProducts ? (
            <p style={{ fontSize: '14px', color: '#64748b' }}>Loading products...</p>
          ) : products.length === 0 ? (
            <p style={{ fontSize: '14px', color: '#64748b' }}>No products found in the database yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '400px', overflowY: 'auto' }}>
              {products.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                    <img src={item.image} alt={item.title} style={{ width: '45px', height: '45px', objectFit: 'contain', borderRadius: '0.25rem', backgroundColor: '#fff', border: '1px solid #cbd5e1', flexShrink: 0 }} />
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>{item.title}</p>
                      <p style={{ fontSize: '12px', fontWeight: '600', color: '#2563eb', margin: 0 }}>₦{Number(item.price).toLocaleString()} • <span style={{ color: '#64748b', textTransform: 'uppercase' }}>{item.category}</span></p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(item.id, item.title)}
                    style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontSize: '12px', fontWeight: '700', cursor: 'pointer', flexShrink: 0 }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
