import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hier beschreiben wir kurz das Problem von flachen Produktbildern & fehlendem Erleben im Online-Shop */}
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 bg-green-500/100 rounded-full text-sm font-medium text-wh mb-6">
            Das Problem heute
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight">
          Ein Bild sagt viel, aber nie, ob’s passt
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600">
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/100 flex items-center justify-center mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">Fehlende Anprobe:</span> Kunden können Kleidung online nicht real anprobieren und wissen nicht, wie sie wirklich sitzt oder aussieht.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/100 flex items-center justify-center mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">Hohe Retourenquoten:</span> Falsche Größen und Erwartungen führen zu unnötigen Rücksendungen und Kosten.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/100 flex items-center justify-center mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">Geringes Vertrauen beim Kauf:</span> Ohne echtes Anprobe-Erlebnis zögern Kunden – und Marken verlieren Umsatz und Loyalität.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
