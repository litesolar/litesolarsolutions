import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <span className="text-2xl font-bold tracking-tight text-blue-400">SolarTech</span>
          <p className="mt-4 text-sm text-gray-400">
            Providing reliable, clean, and sustainable solar energy solutions for homes and businesses across Nigeria.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/packages" className="hover:text-blue-400 transition">Solar Packages</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
            <li><Link href="/quote" className="hover:text-blue-400 transition">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Residential Installation</li>
            <li>Commercial Solar Systems</li>
            <li>Inverter & Battery Upgrades</li>
            <li>Routine System Maintenance</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400 mb-2">Ready to power up? Reach out for a custom assessment.</p>
          <p className="text-sm text-blue-400 font-semibold">Phone / WhatsApp: 080XXXXXXXX</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SolarTech. All rights reserved.
      </div>
    </footer>
  );
}
