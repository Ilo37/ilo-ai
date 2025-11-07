import React from 'react';
import CampaignLayout from './components/CampaignLayout';

const PrivacyPage = () => {
  return (
    <CampaignLayout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
          Datenschutzerklärung
        </h1>
        
        <p className="text-gray-600 mb-12">Stand: November 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Verantwortlich</h2>
            <p className="mb-2">Ilo</p>
            <p>E-Mail: ilo.tech2ai@gmail.com</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mb-4">
              Wir verarbeiten personenbezogene Daten, die Sie uns über Formulare auf dieser Webseite zur Verfügung stellen.
            </p>
            <p className="mb-2">Dazu gehören insbesondere:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Name (falls angegeben)</li>
              <li>E-Mail-Adresse</li>
              <li>Angaben aus der Umfrage (z. B. Unternehmensdaten, Antworten zu Prozessen oder Einschätzungen)</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich verwendet, um Ihre Anfrage zu bearbeiten, statistisch auszuwerten 
              und Sie – sofern gewünscht – über neue Funktionen oder Angebote von Ilo zu informieren.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Speicherung und Sicherheit</h2>
            <p className="mb-4">
              Die Daten werden auf Servern des Dienstleisters Supabase (Supabase Inc., USA/EU) gespeichert.
            </p>
            <p>
              Ilo hat mit Supabase einen Vertrag zur Auftragsverarbeitung (Data Processing Agreement, DPA) abgeschlossen, 
              der den Schutz Ihrer Daten nach Art. 28 DSGVO sicherstellt.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
            <p className="mb-2">Die Verarbeitung erfolgt auf Basis von:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> – z. B. wenn Sie Ihre Daten über ein Formular übermitteln.
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</strong> – zur Analyse und Optimierung unserer Umfrageergebnisse.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Weitergabe an Dritte</h2>
            <p className="mb-4">
              Ihre Daten werden nicht an Dritte weitergegeben, verkauft oder für Werbung genutzt.
            </p>
            <p>
              Eine Übermittlung an Supabase erfolgt ausschließlich zur technischen Speicherung und Verwaltung.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Statistik und Auswertung</h2>
            <p className="mb-4">
              Ilo wertet Umfrageergebnisse intern und anonymisiert aus, um Trends und Anforderungen 
              im Online-Modehandel zu verstehen.
            </p>
            <p>
              Es werden keine externen Analysetools (z. B. Google Analytics, Meta Pixel etc.) eingesetzt.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Dauer der Speicherung</h2>
            <p>
              Ihre Daten werden so lange gespeichert, wie es für die Auswertung der Umfrage und eventuelle Rückfragen 
              erforderlich ist, längstens jedoch 12 Monate nach Abschluss der Kampagne.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Ihre Rechte</h2>
            <p className="mb-2">Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Auskunft über die gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Kontaktieren Sie uns hierzu per E-Mail an: <a href="mailto:ilo.tech2ai@gmail.com" className="text-black underline hover:text-gray-700">ilo.tech2ai@gmail.com</a>
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Ilo behält sich vor, diese Erklärung bei Bedarf zu aktualisieren, um rechtlichen Anforderungen 
              oder technischen Änderungen gerecht zu werden.
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

export default PrivacyPage;

