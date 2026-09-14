import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-blue-400">SolarTech</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/packages" className="hover:text-blue-400 transition">Solar Packages</Link>
            <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </nav>
          <div>
            <Link 
              href="/quote"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <span>⚡ 24/7 Uninterrupted Power Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
            Reliable Solar Energy for Your <span className="text-blue-400">Home & Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            Say goodbye to generator noise and fuel costs. We provide custom solar installations, high-efficiency panels, and long-lasting lithium battery storage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link 
              href="/quote"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
            >
              Request a Free Quote
            </Link>
            <Link 
              href="/packages"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition"
            >
              View Solar Packages
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-400 font-medium max-w-3xl w-full border-t border-slate-800 pt-8">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-lg">✓</span> Professional Installation
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-lg">✓</span> Top-Tier Equipment
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400 text-lg">✓</span> Reliable Maintenance
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
