'use client';
import { useEffect, useState } from 'react';

export default function PackageList() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/packages')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPackages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>Loading solar packages...</div>;
  if (packages.length === 0) return <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>No solar packages available right now. Check back soon!</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
      {packages.map((pkg) => (
        <div key={pkg.id} style={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {pkg.capacity}
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>{pkg.title}</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{pkg.description}</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80', marginBottom: '1rem' }}>{pkg.price}</div>
            <a href={`https://wa.me/?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', backgroundColor: '#16a34a', color: '#fff', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
              Order via WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
