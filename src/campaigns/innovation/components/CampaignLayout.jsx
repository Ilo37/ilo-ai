import React from 'react';
import { Link } from 'react-router-dom';

const CampaignLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Schlanker Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo-Bereich */}
            <div className="flex items-center">
              <img src="/Ilo-Kreise Logo.png" alt="Ilo Logo" className="h-16" />
            </div>
            
            {/* Rechte Navigation - Platzhalter */}
            <button 
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              Kontakt
            </button>
          </div>
        </div>
      </header>

      {/* Hauptinhalt mit Abstand für Fixed Header */}
      <main className="pt-16">
        {children}
      </main>

      {/* Minimalistischer Footer */}
      <footer className="border-t border-gray-100 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
            <div>© 2025 Ilo. Alle Rechte vorbehalten.</div>
            <div className="flex space-x-8">
              <Link to="/impressum" className="hover:text-black transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-black transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CampaignLayout;
