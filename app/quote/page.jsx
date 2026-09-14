'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Request a <span className="text-blue-400">Solar Quote</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Fill out the form below with what you want to power, and our team will get back to you with a custom proposal.
          </p>
        </div>

        {submitted ? (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center shadow-xl">
            <div className="text-green-400 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2">Quote Request Received!</h2>
            <p className="text-gray-300 mb-6">
              Thank you! We have received your details and will contact you via phone or WhatsApp shortly.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g., John Ade"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number / WhatsApp</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g., 08012345678"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location / City</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Ibadan, Oyo State"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">What appliances do you want to power?</label>
              <textarea 
                rows="4" 
                required
                placeholder="e.g., 1 Fridge, 2 TVs, 5 Fans, 1 Inverter Air Conditioner, and lights..."
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg text-center"
            >
              Submit Quote Request
            </button>
          </form>
        )}

        {/* Back Home link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-400 hover:underline text-sm font-medium">
            &larr; Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
