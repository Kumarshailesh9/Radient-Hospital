
// components/InsuranceLogos.tsx
'use client';

export default function InsuranceLogos() {
  const confirmedLogos = Array.from({ length: 4 }, (_, i) => `/images/logos/logo${i + 1}.png`);
  const pendingLogos = Array.from({ length: 7 }, (_, i) => `/images/logos/logo${i + 5}.png`);

  return (
    <section className="py-10 bg-yellow-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* TPA Information */}
        <div className="max-w-4xl mx-auto mb-12 text-center text-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">TPA Information | Health Insurance</h2>
          <p className="text-sm sm:text-xl mb-4">
            <strong>What is a TPA?</strong> A TPA (Third Party Administrator) is an organization licensed
            by <strong>IRDAI</strong> that helps health insurance companies deliver services to their policyholders.
          </p>
        </div>

        {/* Confirmed Partners */}
        <h2 className="text-2xl font-bold text-center mb-4">Health Insurance Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center mb-8">
          {confirmedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Confirmed Insurance Company ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
        </div>

        {/* Pending Partners */}
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Partnerships Under Process</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {pendingLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Pending Insurance Company ${index + 5}`}
              className="h-16 object-contain opacity-60 "
              title="Partnership under process"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
