import React from 'react';
import LeadForm from './LeadForm';

const CTASection = () => {
  return (
    <section id="cta-section" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hier Haupt-Call-to-Action: LeadForm + kurzer Text, warum sich Eintragen lohnt */}
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Jetzt Early Access sichern
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Seien Sie unter den Ersten, die von dieser Innovation profitieren. 
              Exklusive Insights, bevorzugter Zugang und individuelle Beratung.
            </p>
          </div>
          
          {/* Form Card */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-xl">
            <LeadForm />
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <svg className="w-5 h-5 text-black flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="leading-relaxed">
                  Ihre Daten sind bei uns sicher. Kein Spam, keine Weitergabe an Dritte. 
                  Sie können sich jederzeit abmelden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
