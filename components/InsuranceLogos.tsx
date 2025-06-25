// components/InsuranceLogos.tsx
'use client';

export default function InsuranceLogos() {
  const logos = Array.from({ length: 11 }, (_, i) => `/images/logos/logo${i + 1}.png`);

  return (
    <section className="py-10 bg-white" style={{ backgroundColor: 'powderblue' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* TPA Information Section */}
<div className="max-w-4xl mx-auto mb-12 text-center text-gray-800">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4">TPA Information | Health Insurance</h2>

  <p className="text-sm sm:text-xl mb-4">
    <strong>What is a TPA?</strong> A TPA (Third Party Administrator) is an organization licensed
    by <strong>IRDAI</strong> that helps health insurance companies deliver services to their policyholders.
  </p>

 
</div>

        <h2 className="text-2xl font-bold text-center mb-8">Our Health Insurance Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Insurance Company ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
