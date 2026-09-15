'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      category: "Solar Basics",
      q: "How does a solar inverter system work?",
      a: "A solar system captures sunlight via photovoltaic panels, converts DC electricity into usable AC power through an inverter, and stores excess energy in batteries for use during grid outages or at night."
    },
    {
      category: "Products[cite: 1]",
      q: "Can I buy solar products without getting installation services?",
      a: "Yes, you can purchase individual products like panels, inverters, and batteries directly from our store catalog without bundling installation[cite: 1]."
    },
    {
      category: "Installation[cite: 1]",
      q: "How long does a typical solar installation take?",
      a: "Most residential and small commercial installations are fully completed, tested, and handed over within 1 to 2 days after site assessment."
    },
    {
      category: "Batteries[cite: 1]",
      q: "What is the expected lifespan of solar batteries?",
      a: "Modern lithium-ion batteries typically last between 8 to 15 years depending on depth of discharge and maintenance, while quality tubular batteries last 3 to 5 years."
    },
    {
      category: "Payments[cite: 1]",
      q: "What payment structures or gateways are available?",
      a: "We support secure bank transfers and online payment integrations via trusted Nigerian gateways like Paystack and Flutterwave[cite: 1]."
    },
    {
      category: "Maintenance[cite: 1]",
      q: "What kind of maintenance do solar panels require?",
      a: "Solar panels require very minimal maintenance—occasional cleaning to remove dust or debris and periodic system health checks by a technician."
    },
    {
      category: "Warranty[cite: 1]",
      q: "Do your products come with a warranty?",
      a: "Yes, all our major equipment including inverters, panels, and batteries carry manufacturer warranties ranging from 1 to 5 years."
    }
  ];

  const filteredFaq = faqList.filter(item => 
    item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '5rem' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ← Back to Home
          </Link>
          <span style={{ fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>FREQUENTLY ASKED QUESTIONS</span>
          <Link href="/contact" style={{ backgroundColor: '#111827', color: '#fff', padding: '0.35rem 0.65rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
            Contact
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#0b0f19', color: '#ffffff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#f87171', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            GOT QUESTIONS? WE HAVE ANSWERS
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', lineHeight: '1.2' }}>
            Frequently Asked <span style={{ color: '#60a5fa' }}>Questions</span>
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            Search through our organized guides covering solar basics, products, installation, and maintenance[cite: 1].
          </p>
          
          {/* SEARCH BAR */}
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="text" 
              placeholder="Search questions (e.g. batteries, installation, cost)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '4px', border: 'none', fontSize: '0.8rem', outline: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* ACCORDION LIST */}
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{ width: '100%', textAlign: 'left', padding: '1rem', backgroundColor: '#ffffff', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem', color: '#111827' }}
                  >
                    <span>{item.q}</span>
                    <span style={{ fontSize: '0.75rem', color: '#dc2626', background: '#fee2e2', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{item.category}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1rem 1rem 1rem', fontSize: '0.8rem', color: '#4b5563', lineHeight: '1.5', borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280', fontSize: '0.85rem' }}>
              No matching questions found. Feel free to contact our support team directly!
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
