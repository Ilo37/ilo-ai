import React from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignLayout from './components/CampaignLayout';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleSurveyClick = () => {
    navigate('/campaign/innovation/survey');
  };

  return (
    <CampaignLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Danke für dein Interesse! */}
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Vielen Dank für Ihr Interesse!
          </h1>
          
          <div className="space-y-4 mb-12 text-lg text-gray-600 leading-relaxed">
            <p>
              Wir haben Ihre Anmeldung erhalten und werden uns in Kürze bei Ihnen melden.
            </p>
            <p>
              Um Sie bestmöglich zu unterstützen, würden wir gerne mehr über Ihre spezifischen 
              Bedürfnisse erfahren. Dafür haben wir eine <strong className="text-black">kurze Umfrage</strong> vorbereitet.
            </p>
            <p>
              Die Umfrage dauert nur etwa 2 Minuten und hilft uns, Ihre Anforderungen 
              besser zu verstehen.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleSurveyClick}
              className="group bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Zur kurzen Umfrage</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button
              onClick={() => window.location.href = '/campaign/innovation'}
              className="text-gray-600 hover:text-black font-medium px-8 py-4 transition-colors"
            >
              Später
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            {/* Später können hier personalisierte Infos oder dynamische Inhalte ergänzt werden */}
            <p className="text-sm text-gray-500">
              Sie erhalten eine Bestätigungs-E-Mail in den nächsten Minuten.
            </p>
          </div>
        </div>
      </div>
    </CampaignLayout>
  );
};

export default ThankYouPage;
