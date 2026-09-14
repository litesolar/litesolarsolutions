import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Solar Installations',
      description: 'Custom-designed power systems for apartments, duplexes, and family homes. We size your system accurately to ensure all appliances run smoothly day and night.',
      icon: '🏠'
    },
    {
      title: 'Commercial & Office Solutions',
      description: 'Keep your business open without interruption. Our heavy-duty industrial setups eliminate generator fuel costs and protect sensitive office equipment.',
      icon: '🏢'
    },
    {
      title: 'Inverter & Battery Upgrades',
      description: 'Is your current setup failing to hold power? We upgrade aging lead-acid setups to long-lasting lithium-ion batteries and high-efficiency solar arrays.',
      icon: '⚡'
    },
    {
      title: 'Routine Maintenance & Support',
      description: 'Professional panel cleaning, inverter diagnostics, and system checkups to guarantee your equipment performs at peak efficiency year-round.',
      icon: '🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Professional <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver end-to-end clean energy solutions, from initial site inspection and system design to professional installation and after-sales maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl flex items-start gap-6">
              <div className="text-4xl p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-blue-900/50 to-slate-800 border border-blue-500/30 rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to switch to clean, uninterrupted power?</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm">
            Contact our engineering team today for a custom power assessment and a transparent quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/quote"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/"
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold rounded-xl transition"
            >
              Back to Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
