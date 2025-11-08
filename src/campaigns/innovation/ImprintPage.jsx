import React from 'react';
import { Link } from 'react-router-dom';
import CampaignLayout from './components/CampaignLayout';

const ImprintPage = () => {
  return (
    <CampaignLayout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-12">
          Impressum
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p className="font-semibold text-black">Ilo</p>
              <p>Projektleitung: Muhammed Bakir</p>
              <p>
                Kontakt ausschließlich per E-Mail:{' '}
                <a href="mailto:ilo.tech2ai@gmail.com" className="text-black underline hover:text-gray-700">
                  ilo.tech2ai@gmail.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://www.ilo-ai.de" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">
                  www.ilo-ai.de
                </a>
              </p>
            </div>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Haftung für Inhalte</h2>
            <p>
              Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt.
            </p>
            <p>
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
          </section>

          {/* Haftung für Links */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Haftung für Links</h2>
            <p className="mb-4">
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht.
            </p>
            <p>
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen 
              dem deutschen Urheberrecht.
            </p>
            <p className="mb-4">
              Beiträge Dritter sind als solche gekennzeichnet.
            </p>
            <p>
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.
            </p>
          </section>

          {/* Datenschutz */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Datenschutz</h2>
            <p>
              Bitte beachten Sie auch unsere{' '}
              <Link to="/datenschutz" className="text-black underline hover:text-gray-700">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Hinweis auf Verbraucherstreitbeilegung</h2>
            <p>
              Ilo ist nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor 
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <button
            onClick={() => window.history.back()}
            className="text-black hover:text-gray-700 font-medium inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Zurück</span>
          </button>
        </div>
      </div>
    </CampaignLayout>
  );
};

export default ImprintPage;

