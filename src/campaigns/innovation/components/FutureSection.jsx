import React from 'react';

const FutureSection = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hier formulieren wir eine Vision: Wie sich Modehandel in den nächsten Jahren verändert und welchen Vorsprung Nutzer dieser Lösung haben */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Linke Seite - Vision */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-green-500/100 rounded-full text-sm font-medium text- mb-4">
              Blick nach vorne
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Der E-Commerce von morgen ist erlebnisorientiert
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
              In den kommenden Jahren wird Mode online nicht mehr nur gezeigt, sondern anprobiert. Kunden wollen erleben, wie Kleidung wirklich an ihnen aussieht, bevor sie kaufen.
              </p>
              <p>
                Wer jetzt auf innovative Shopping-Lösungen setzt, sichert sich einen 
                <span className="font-semibold text-black"> entscheidenden Wettbewerbsvorteil</span> und 
                positioniert seine Marke als Vorreiter.
              </p>
              <p>
                Die Frage ist nicht <em>ob</em>, sondern <em>wann</em> Sie diesen Schritt gehen.
              </p>
            </div>
          </div>

          {/* Rechte Seite - Stats/Highlights */}
          <div className="space-y-6">
            <div className="bg-green-500 text-white rounded-2xl p-8 lg:p-10">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl lg:text-6xl font-bold mb-2">67%</div>
                  <div className="text-gray-300 leading-relaxed">
                    der Online-Shopper wünschen sich interaktivere Produktdarstellungen
                  </div>
                </div>
                
                <div className="h-px bg-white/20"></div>
                
                <div>
                  <div className="text-5xl lg:text-6xl font-bold mb-2">-73%</div>
                  <div className="text-gray-300 leading-relaxed">
                    Retourenquote bei immersiven Shopping-Erlebnissen
                  </div>
                </div>
                
                <div className="h-px bg-white/20"></div>
                
                <div>
                  <div className="text-5xl lg:text-6xl font-bold mb-2">+85%</div>
                  <div className="text-gray-300 leading-relaxed">
                    höhere Conversion bei erlebnisorientierten Shops
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
