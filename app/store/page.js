'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const categories = [
  { label: 'All Products', value: 'all' },
  { label: 'Inverter Packages', value: 'inverter' },
  { label: 'Solar Panel Packages', value: 'solar' },
  { label: 'Battery Packs', value: 'battery' },
  { label: 'Complete Systems', value: 'complete' },
  { label: 'CCTV Solar Cameras', value: 'cctv' },
  { label: 'Fans (AC/DC)', value: 'fan-ac-dc' },
  { label: 'Rechargeable Fans', value: 'rechargeable-fan' },
  { label: 'Solar Power Boxes', value: 'solar-power-box' },
  { label: 'Smart Locks', value: 'smart-lock' },
  { label: 'Flood & Street Lights', value: 'flood-street-light' }
];

export default function StorePage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // States for search, category filtering, and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
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
  }, []);

  const addToCart = (pkg) => {
    const existing = cart.find(item => item.id === pkg.id);
    if (existing) {
      setCart(cart.map(item => item.id === pkg.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...pkg, qty: 1 }]);
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotalPrice = cart.reduce((sum, item) => {
    const cleanPrice = parseFloat(String(item.price).replace(/,/g, '')) || 0;
    return sum + (cleanPrice * item.qty);
  }, 0);

  const checkoutWhatsAppText = encodeURIComponent(
    `Hello litesolarsolutions, I want to place an order for the following items:\n` +
    cart.map(item => `- ${item.title} (Qty: ${item.qty}) - ₦${item.price}`).join('\n') +
    `\n\nTotal Estimated Price: ₦${cartTotalPrice.toLocaleString()}`
  );

  // 1. Filter products based on search query and category
  const filteredProducts = packages.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 2. Sort filtered products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(String(a.price).replace(/,/g, '')) || 0;
    const priceB = parseFloat(String(b.price).replace(/,/g, '')) || 0;
    if (sortBy === 'low-high') return priceA - priceB;
    if (sortBy === 'high-low') return priceB - priceA;
    return 0; // default order
  });

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#1f2937', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '7rem', fontSize: '14px' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#ffffff', color: '#1e3a8a', padding: '0.5rem 1rem', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#1e3a8a' }}>
            <img src="https://i.ibb.co/TBbM6PH8/Whats-App-Image-2026-09-14-at-10-04-51.jpg" alt="logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: '15px', fontWeight: '800' }}>litesolarsolutions</span>
          </Link>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', backgroundColor: '#eff6ff', padding: '0.4rem 0.75rem', borderRadius: '0.25rem', fontSize: '12px', fontWeight: '700', color: '#1e3a8a', border: '1px solid #bfdbfe' }}>
              🛒 Cart: {totalCartItems}
            </div>
            <Link href="/" style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', textDecoration: 'none' }}>
              ← Home
            </Link>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', fontWeight: '800', color: '#93c5fd', letterSpacing: '1.2px', marginBottom: '0.4rem' }}>
            PROFESSIONAL ENERGY STOREFRONT
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.5rem', lineHeight: '1.3' }}>
            Engineered Power Systems & <span style={{ color: '#93c5fd' }}>Turnkey Solar Solutions</span>
          </h1>
          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
            Explore our curated inventory of enterprise-grade inverters, high-efficiency panels, and advanced lithium energy storage systems—expertly configured and deployed across Nigeria.
          </p>
        </div>
      </section>

      {/* STORE MAIN CONTENT */}
      <main style={{ maxWidth: '1100px', margin: '2.5rem auto', padding: '0 1rem' }}>
        
        {/* Search and Sort Control Bar */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search for inverters, batteries, solar cameras..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, minWidth: '240px', padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '0.5rem', outline: 'none', backgroundColor: '#fff', fontSize: '14px' }}
          />
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '0.5rem', backgroundColor: '#fff', outline: 'none', fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}
          >
            <option value="default">Sort by: Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: '0.5rem', paddingBottom: '0.5rem', marginBottom: '2rem', whiteSpace: 'nowrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: selectedCategory === cat.value ? '#1e3a8a' : '#e2e8f0',
                color: selectedCategory === cat.value ? '#ffffff' : '#475569',
                transition: 'background-color 0.2s'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* LOADING / GRID STATES */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>Loading store catalog...</div>
        ) : sortedProducts.length === 0 ? (
          <div style={{ textAlign: 'center', backgroundColor: '#fff', padding: '3rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.5rem' }}>No Products Found</h2>
            <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '1rem' }}>No items match your search or filter criteria. Try adjusting your keywords.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {sortedProducts.map((pkg) => (
              <div key={pkg.id} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
                
                <div 
                  onClick={() => setSelectedProduct(pkg)}
                  style={{ width: '100%', height: '220px', backgroundColor: '#f8fafc', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderBottom: '1px solid #f1f5f9' }}
                  title="Click to view full specifications"
                >
                  <img 
                    src={pkg.image || "https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png"} 
                    alt={pkg.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                  />
                </div>

                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 
                    onClick={() => setSelectedProduct(pkg)}
                    style={{ fontSize: '15px', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.3rem', cursor: 'pointer' }}
                  >
                    {pkg.title}
                  </h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#16a34a', marginBottom: '1rem' }}>₦{pkg.price}</div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                    <button 
                      onClick={() => setSelectedProduct(pkg)}
                      style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#1e3a8a', border: '1px solid #cbd5e1', padding: '0.5rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '11px', cursor: 'pointer' }}
                    >
                      View Specs 🔍
                    </button>
                    
                    <button 
                      onClick={() => addToCart(pkg)}
                      style={{ backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '0.3rem', fontWeight: '700', fontSize: '11px', cursor: 'pointer' }}
                      title="Add to Cart"
                    >
                      🛒 +
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </main>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', maxWidth: '600px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', position: 'relative' }}>
            
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>

            <div style={{ width: '100%', height: '260px', backgroundColor: '#f8fafc', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', borderRadius: '0.5rem' }}>
              <img 
                src={selectedProduct.image || "https://i.ibb.co/B2McsRW6/Screenshot-2026-09-14-200213.png"} 
                alt={selectedProduct.title} 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
              />
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1e3a8a', marginBottom: '0.3rem' }}>{selectedProduct.title}</h2>
            <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#16a34a', marginBottom: '1rem' }}>₦{selectedProduct.price}</div>
            
            {/* DESCRIPTION */}
            {selectedProduct.description && (
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>DESCRIPTION:</h4>
                <p style={{ fontSize: '12px', color: '#334155', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{selectedProduct.description}</p>
              </div>
            )}

            {/* INSTALLATION KITS */}
            {selectedProduct.features && (
              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '11px', fontWeight: '800', color: '#166534', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>INSTALLATION KITS & INCLUSIONS:</h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '12px', color: '#14532d', lineHeight: '1.6' }}>
                  {selectedProduct.features.split(',').map((item, index) => {
                    const trimmed = item.trim();
                    return trimmed ? <li key={index}>{trimmed}</li> : null;
                  })}
                </ul>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href={`https://wa.me/2347030671806?text=Hello%20litesolarsolutions,%20I%20want%20to%20order%20the%20package:%20${selectedProduct.title}%20priced%20at%20₦${selectedProduct.price}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: 1, textAlign: 'center', backgroundColor: '#25D366', color: '#fff', padding: '0.75rem', borderRadius: '0.3rem', textDecoration: 'none', fontWeight: '800', fontSize: '12px' }}
              >
                Order on WhatsApp 💬
              </a>
              <button 
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                style={{ backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '0.75rem 1.25rem', borderRadius: '0.3rem', fontWeight: '800', fontSize: '12px', cursor: 'pointer' }}
              >
                Add to Cart 🛒
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FLOATING CART CHECKOUT BAR */}
      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#1e3a8a', color: '#fff', padding: '1rem', zIndex: 1050, boxShadow: '0 -4px 10px rgba(0,0,0,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '11px', color: '#93c5fd', fontWeight: '700' }}>CART SUMMARY ({totalCartItems} items)</div>
            <div style={{ fontSize: '13px', fontWeight: '800' }}>
              {cart.map(item => `${item.title} (x${item.qty})`).join(', ')}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#4ade80' }}>
              ₦{cartTotalPrice.toLocaleString()}
            </div>
            <a 
              href={`https://wa.me/2347030671806?text=${checkoutWhatsAppText}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25D366', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '0.3rem', textDecoration: 'none', fontWeight: '800', fontSize: '12px' }}
            >
              Checkout on WhatsApp 💬
            </a>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOATING BUTTON */}
      <a href="https://wa.me/2347030671806" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: cart.length > 0 ? '4.5rem' : '1rem', right: '1rem', backgroundColor: '#25D366', color: '#fff', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: '0 3px 8px rgba(37, 211, 102, 0.4)', zIndex: 1100, textDecoration: 'none', transition: 'bottom 0.2s' }} title="Chat on WhatsApp">
        💬
      </a>

    </div>
  );
}
