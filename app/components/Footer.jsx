import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#030508', borderTop: '1px solid #1f2937', color: '#9ca3af', padding: '4rem 2rem 2rem 2rem', marginTop: '5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div>
          <span style={{ fontSize: '1.25rem', fontWeight: '900', color: '#2563eb' }}>LITESOLARSOLUTIONS</span>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#9ca3af', lineHeight: '1.5' }}>
            Providing reliable, clean, and sustainable solar energy solutions for homes and businesses across Nigeria.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li><Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link></li>
            <li><Link href="/packages" style={{ color: '#9ca3af', textDecoration: 'none' }}>Solar Packages</Link></li>
            <li><Link href="/services" style={{ color: '#9ca3af', textDecoration: 'none' }}>Services</Link></li>
            <li><Link href="/quote" style={{ color: '#9ca3af', textDecoration: 'none' }}>Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '1rem' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#9ca3af' }}>
            <li>Residential Installation</li>
            <li>Commercial Solar Systems</li>
            <li>Inverter & Battery Upgrades</li>
            <li>Routine System Maintenance</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '1rem' }}>Contact Us</h4>
          <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Ready to power up? Reach out for a custom assessment.</p>
          <p style={{ fontSize: '0.95rem', color: '#dc2626', fontWeight: '700' }}>Phone / WhatsApp: 080XXXXXXXX</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #111827', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#6b7280' }}>
        &copy; {new Date().getFullYear()} LITESOLARSOLUTIONS. All rights reserved.
      </div>
    </footer>
  );
}
