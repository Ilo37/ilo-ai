import React from 'react';

const SolutionSection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
      title: 'Drastisch weniger Retouren',
      description: 'Kunden sehen vor dem Kauf, wie ein Kleidungsstück an ihnen wirkt – Größe, Schnitt und Farbe passen auf Anhieb.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Ein völlig neues Einkaufserlebnis',
      description: 'Deine Mode wird digital anprobierbar – interaktiv, modern und realitätsnah. Das schafft Begeisterung und Differenzierung..'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      title: 'Zukunftsstandard für Fashion-Shops',
      description: 'Mit Ilo positionierst du dich als innovativer Vorreiter – ohne App, ohne komplizierte Integration, einfach über den Browser.'
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hier wird Ilo als Lösung erklärt – Fokus auf Erlebnis, Vertrauen, Markenwirkung, nicht auf technischen Details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Ilo macht Mode erlebbar
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Unsere Lösung verbindet Innovation mit Einfachheit. Kein technischer Aufwand, 
            maximale Wirkung für Ihre Conversion und Kundenzufriedenheit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-green-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 text-black group-hover:text-black transition-colors">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black group-hover:text-white mb-4 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
