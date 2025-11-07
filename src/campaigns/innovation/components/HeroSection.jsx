import React from 'react';

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Falls Video nicht lädt, verstecke das Video-Element
            e.target.style.display = 'none';
          }}
        >
          {/* Platzhalter-Video - später austauschen mit echtem Video */}
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback: Gradient-Background wird angezeigt wenn Video nicht lädt */}
        </video>
        
        {/* Dunkler Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            {/* Text mit Hintergrund für bessere Lesbarkeit */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                Machen Sie Mode im Online-Shop erlebbar
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
                Lassen Sie Ihre Kunden sehen, wie Ihre Kleidung an ihnen wirkt – bevor sie bestellen.
              </p>

              <div className="pt-4">
                <button 
                  onClick={scrollToCTA}
                  className="group bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
                >
                  <span>Interesse anmelden</span>
                  <svg className="W-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
