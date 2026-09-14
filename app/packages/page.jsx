import Link from 'next/link';

export default function PackagesPage() {
  const packages = [
    {
      id: '1',
      name: 'Basic Starter Pack',
      capacity: '1.5KVA',
      description: 'Ideal for powering lights, fans, TV, Wi-Fi router, and phone charging.',
      price: '₦450,000',
      features: ['1.5KVA Inverter', '200Ah Tubular Battery', '2x 300W Solar Panels', 'Free Installation']
    },
    {
      id: '2',
      name: 'Standard Home Pack',
      capacity: '3.5KVA',
      description: 'Great for medium homes. Powers a refrigerator, TVs, fans, laptops, and light appliances.',
      price: '₦980,000',
      features: ['3.5KVA Pure Sine Inverter', 'Lithium-ion Battery Pack', '4x 400W Solar Panels', 'Professional Wiring']
    },
    {
      id: '3',
      name: 'Heavy Duty / Executive Pack',
      capacity: '5KVA / 10KVA',
      description: 'For heavy luxury use. Capable of running air conditioners, pumping machines, and all home electronics.',
      price: '₦2,100,000',
      features: ['5KVA Inverter System', 'Dual Lithium Batteries', '8x Monocrystalline Panels', 'Smart Mobile Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Solar Power <span className="text-blue-400">Packages</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose a complete solar bundle tailored to your energy needs and budget. All packages come with professional installation and warranties.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full mb-4">
                  {pkg.capacity} Capacity
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{pkg.description}</p>
                
                <div className="text-3xl font-extrabold text-blue-400 mb-6">
                  {pkg.price}
                </div>

                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/quote"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-center font-semibold rounded-xl transition shadow"
              >
                Inquire / Order Package
              </Link>
            </div>
          ))}
        </div>

        {/* Back Home link */}
        <div className="text-center mt-12">
          <Link href="/" className="text-blue-400 hover:underline text-sm font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
