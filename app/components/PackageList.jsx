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
      {packages.map((pkg) => {
        // Safely parse installationKits/features whether it's a string or array
        const rawFeatures = pkg.installationKits || pkg.features || '';
        const featureList = typeof rawFeatures === 'string' 
          ? rawFeatures.split(',').map(item => item.trim()).filter(Boolean)
          : Array.isArray(rawFeatures) ? rawFeatures : [];

        const cleanPrice = parseFloat(String(pkg.price).replace(/,/g, '')) || 0;

        return (
          <div key={pkg.id} style={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {pkg.image && (
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem', backgroundColor: '#1f2937' }} 
                />
              )}
              <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase' }}>
                {pkg.capacity}
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>{pkg.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{pkg.description}</p>
              
              {featureList.length > 0 && (
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {featureList.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
            
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80', marginBottom: '1rem' }}>
                ₦{cleanPrice.toLocaleString()}
              </div>
              <a 
                href={`https://wa.me/2347030671806?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20priced%20at%20₦${cleanPrice.toLocaleString()}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'block', textAlign: 'center', padding: '0.75rem', backgroundColor: '#16a34a', color: '#fff', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}
              >
                Order via WhatsApp 💬
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
