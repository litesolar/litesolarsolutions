'use client';
import { useState } from 'react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [form, setForm] = useState({
    title: '',
    capacity: '',
    price: '',
    description: '',
    features: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Your passcode is now set to '1234'
    if (passcode === '1234') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect passcode!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Package successfully added live!');
        setForm({ title: '', capacity: '', price: '', description: '', features: '' });
      } else {
        setMessage('❌ Error: ' + (data.error || 'Failed to add package'));
      }
    } catch (err) {
      setMessage('❌ Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0b0f19', color: '#fff', fontFamily: 'sans-serif' }}>
        <form onSubmit={handleLogin} style={{ backgroundColor: '#111827', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #374151', width: '320px' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Admin Login</h2>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '1rem' }}>Passcode is set to: <strong>1234</strong></p>
          <input 
            type="password" 
            placeholder="Enter Admin Passcode" 
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #4b5563', backgroundColor: '#1f2937', color: '#fff' }}
          />
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#dc2626', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '3rem auto', padding: '2rem', backgroundColor: '#0b0f19', color: '#fff', borderRadius: '1rem', fontFamily: 'sans-serif', border: '1px solid #374151' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#60a5fa' }}>⚡ Litesolar Admin: Upload New Package</h1>
      
      {message && <div style={{ padding: '0.75rem', marginBottom: '1rem', borderRadius: '0.5rem', backgroundColor: message.includes('✅') ? 'rgba(22, 163, 74, 0.2)' : 'rgba(220, 38, 38, 0.2)', color: message.includes('✅') ? '#4ade80' : '#f87171' }}>{message}</div>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#9ca3af' }}>Package Title (e.g. Standard Home Pack)</label>
          <input type="text" required value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #4b5563', backgroundColor: '#1f2937', color: '#fff' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#9ca3af' }}>Capacity (e.g. 3.5KVA Capacity)</label>
          <input type="text" required value={form.capacity} onChange={(e) => setForm({...form, capacity: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #4b5563', backgroundColor: '#1f2937', color: '#fff' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#9ca3af' }}>Price (e.g. ₦980,000)</label>
          <input type="text" required value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #4b5563', backgroundColor: '#1f2937', color: '#fff' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#9ca3af' }}>Short Description</label>
          <input type="text" required value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #4b5563', backgroundColor: '#1f2937', color: '#fff' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem', color: '#9ca3af' }}>Features (Separate with commas: 3.5KVA Inverter, 2x Batteries, Free Installation)</label>
          <textarea rows="3" required value={form.features} onChange={(e) => setForm({...form, features: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #4b5563', backgroundColor: '#1f2937', color: '#fff' }} />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '0.85rem', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '0.5rem' }}>
          {loading ? 'Publishing...' : 'Publish Package Live 🚀'}
        </button>
      </form>
    </div>
  );
}
