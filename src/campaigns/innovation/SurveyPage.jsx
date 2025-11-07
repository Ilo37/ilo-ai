import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignLayout from './components/CampaignLayout';
import { useSurvey } from './hooks/useSurvey';

const SurveyPage = () => {
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [leadId, setLeadId] = useState(null);
  
  const navigate = useNavigate();
  const { submitSurvey } = useSurvey();

  useEffect(() => {
    // Lead-ID aus localStorage holen
    const storedLeadId = localStorage.getItem('leadId');
    if (!storedLeadId) {
      // Wenn keine Lead-ID vorhanden, zurück zur Landingpage
      navigate('/campaign/innovation');
      return;
    }
    // UUID als String verwenden, NICHT parsen!
    setLeadId(storedLeadId);
  }, [navigate]);

  const handleAnswerChange = (question, answer) => {
    setAnswers(prev => ({
      ...prev,
      [question]: answer
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!leadId) {
      setError('Keine Lead-ID gefunden. Bitte füllen Sie zuerst das Formular aus.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const result = await submitSurvey(leadId, answers);
      
      if (result.success) {
        // Survey erfolgreich gespeichert
        alert('Vielen Dank für Ihre Teilnahme an der Umfrage!');
        // Lead-ID aus localStorage entfernen
        localStorage.removeItem('leadId');
        // Zurück zur Landingpage oder zu einer Erfolgsseite
        navigate('/campaign/innovation');
      } else {
        setError(result.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch (err) {
      console.error('Fehler beim Speichern der Survey:', err);
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CampaignLayout>
      <div className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-black/5 rounded-full text-sm font-medium text-black mb-6">
              Schritt 2 von 2
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Noch ein paar kurze Fragen
            </h1>
            <p className="text-lg text-gray-600">
              Dauert ca. 2 Minuten · Hilft uns, Sie besser zu verstehen
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-xl">
            <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Frage 1 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Was verkauft ihr hauptsächlich in eurem Online-Shop?
                </h3>
                <select
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  onChange={(e) => handleAnswerChange('product_category', e.target.value)}
                >
                  <option value="">Bitte wählen</option>
                  <option value="damenmode">Damenmode</option>
                  <option value="herrenmode">Herrenmode</option>
                  <option value="streetwear">Streetwear</option>
                  <option value="massanfertigung">Maßanfertigung</option>
                  <option value="sportbekleidung">Sportbekleidung</option>
                  <option value="accessoires">Accessoires</option>
                  <option value="andere">Andere</option>
                </select>
              </div>

              {/* Frage 2 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Wie viele Online-Bestellungen habt ihr durchschnittlich pro Monat?
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'unter_100', label: 'Unter 100' },
                    { value: '100_500', label: '100–500' },
                    { value: '500_2000', label: '500–2.000' },
                    { value: 'ueber_2000', label: 'Über 2.000' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="radio" 
                        name="monthly_orders" 
                        value={option.value}
                        onChange={(e) => handleAnswerChange('monthly_orders', e.target.value)}
                        className="w-4 h-4 text-black focus:ring-black" 
                      />
                      <span className="ml-3 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 3 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Wie viele Retouren entstehen im Schnitt pro Monat?
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'unter_5', label: 'Unter 5 %' },
                    { value: '5_10', label: '5–10 %' },
                    { value: '10_20', label: '10–20 %' },
                    { value: '20_30', label: '20–30 %' },
                    { value: 'ueber_30', label: 'Über 30 %' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="radio" 
                        name="monthly_returns" 
                        value={option.value}
                        onChange={(e) => handleAnswerChange('monthly_returns', e.target.value)}
                        className="w-4 h-4 text-black focus:ring-black" 
                      />
                      <span className="ml-3 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 4 - NEU */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Wie viel kostet euch im Schnitt eine einzelne Retoure (inkl. Versand & Aufwand)?
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'unter_5', label: 'Unter 5 €' },
                    { value: '5_10', label: '5–10 €' },
                    { value: '10_20', label: '10–20 €' },
                    { value: '20_30', label: '20–30 €' },
                    { value: 'ueber_30', label: 'Über 30 €' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="radio" 
                        name="return_cost" 
                        value={option.value}
                        onChange={(e) => handleAnswerChange('return_cost', e.target.value)}
                        className="w-4 h-4 text-black focus:ring-black" 
                      />
                      <span className="ml-3 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 4 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Welche Faktoren beeinflussen eure Profitabilität am stärksten?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Retouren', 'Produktionskosten', 'Versandkosten', 'Marketing', 'Plattformgebühren', 'Anderes'].map(factor => (
                    <label 
                      key={factor} 
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="checkbox" 
                        value={factor}
                        onChange={(e) => {
                          const current = answers.profitability_factors || [];
                          if (e.target.checked) {
                            handleAnswerChange('profitability_factors', [...current, factor]);
                          } else {
                            handleAnswerChange('profitability_factors', current.filter(f => f !== factor));
                          }
                        }}
                        className="w-4 h-4 text-black focus:ring-black rounded" 
                      />
                      <span className="ml-3 text-gray-700 text-sm">{factor}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 5 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Erfasst ihr aktuell Maße eurer Kleidungsstücke?
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'detailliert', label: 'Ja, detailliert pro Produkt' },
                    { value: 'teilweise', label: 'Teilweise' },
                    { value: 'nein', label: 'Nein' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="radio" 
                        name="measurements_tracking" 
                        value={option.value}
                        onChange={(e) => handleAnswerChange('measurements_tracking', e.target.value)}
                        className="w-4 h-4 text-black focus:ring-black" 
                      />
                      <span className="ml-3 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 6 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Wenn ja, in welchem Format liegen diese Maße vor?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Excel-Tabellen', 'ERP-System', 'Shopify / Shop-System direkt', 'CSV-/Datenexporte', 'Andere'].map(format => (
                    <label 
                      key={format} 
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="checkbox" 
                        value={format}
                        onChange={(e) => {
                          const current = answers.measurements_format || [];
                          if (e.target.checked) {
                            handleAnswerChange('measurements_format', [...current, format]);
                          } else {
                            handleAnswerChange('measurements_format', current.filter(f => f !== format));
                          }
                        }}
                        className="w-4 h-4 text-black focus:ring-black rounded" 
                      />
                      <span className="ml-3 text-gray-700 text-sm">{format}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 7 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Welche Tools nutzt ihr für Produktdarstellung oder Größenberatung?
                </h3>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="z.B. Shopify-Plugins, Fit-Finder, 3D-Tools..."
                  onChange={(e) => handleAnswerChange('current_tools', e.target.value)}
                />
              </div>

              {/* Frage 8 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Wie wichtig ist euch eine realistische Produktdarstellung im Shop?
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'nicht_wichtig', label: 'Nicht wichtig' },
                    { value: 'neutral', label: 'Neutral' },
                    { value: 'wichtig', label: 'Wichtig' },
                    { value: 'sehr_wichtig', label: 'Sehr wichtig' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="radio" 
                        name="importance_realistic_display" 
                        value={option.value}
                        onChange={(e) => handleAnswerChange('importance_realistic_display', e.target.value)}
                        className="w-4 h-4 text-black focus:ring-black" 
                      />
                      <span className="ml-3 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 9 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-6">
                  Was wäre euch so ein Tool wert, wenn Retouren dadurch drastisch reduziert werden und kaum noch eine Rolle spielen?
                </h3>
                <div className="space-y-4">
                  {[
                    { value: '50_100', label: '50–100 €' },
                    { value: '100_300', label: '100–300 €' },
                    { value: '300_500', label: '300–500 €' },
                    { value: '500_1000', label: '500–1.000 €' },
                    { value: 'ueber_1000', label: 'Über 1.000 €' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="radio" 
                        name="pricing_willingness" 
                        value={option.value}
                        onChange={(e) => handleAnswerChange('pricing_willingness', e.target.value)}
                        className="w-4 h-4 text-black focus:ring-black" 
                      />
                      <span className="ml-4 text-gray-700 font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 10 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Was wäre euch bei so einem Tool am wichtigsten?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Einfache Integration', 'Realistische Darstellung', 'Kosten', 'Stabilität', 'Kundenerlebnis', 'Anderes'].map(priority => (
                    <label 
                      key={priority} 
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="checkbox" 
                        value={priority}
                        onChange={(e) => {
                          const current = answers.tool_priorities || [];
                          if (e.target.checked) {
                            handleAnswerChange('tool_priorities', [...current, priority]);
                          } else {
                            handleAnswerChange('tool_priorities', current.filter(p => p !== priority));
                          }
                        }}
                        className="w-4 h-4 text-black focus:ring-black rounded" 
                      />
                      <span className="ml-3 text-gray-700 text-sm">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frage 11 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Was würde euch davon abhalten, so ein Tool einzusetzen?
                </h3>
                <div className="space-y-3 mb-4">
                  {['Zu hoher Preis', 'Technische Umsetzung', 'Datenschutz', 'Kein Mehrwert erkannt'].map(barrier => (
                    <label 
                      key={barrier} 
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="checkbox" 
                        value={barrier}
                        onChange={(e) => {
                          const current = answers.adoption_barriers || [];
                          if (e.target.checked) {
                            handleAnswerChange('adoption_barriers', [...current, barrier]);
                          } else {
                            handleAnswerChange('adoption_barriers', current.filter(b => b !== barrier));
                          }
                        }}
                        className="w-4 h-4 text-black focus:ring-black rounded" 
                      />
                      <span className="ml-3 text-gray-700 text-sm">{barrier}</span>
                    </label>
                  ))}
                </div>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Sonstiges (optional)"
                  onChange={(e) => handleAnswerChange('adoption_barriers_other', e.target.value)}
                />
              </div>

              {/* Frage 12 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Wer entscheidet bei euch über neue Shop-Tools oder Integrationen?
                </h3>
                <select
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  onChange={(e) => handleAnswerChange('decision_maker', e.target.value)}
                >
                  <option value="">Bitte wählen</option>
                  <option value="gruender">Gründer / Inhaber</option>
                  <option value="ecommerce">E-Commerce-Leitung</option>
                  <option value="marketing">Marketing-Leitung</option>
                  <option value="it">IT-/Technik-Verantwortliche</option>
                  <option value="dienstleister">Externer Dienstleister</option>
                  <option value="andere">Andere</option>
                </select>
              </div>

              {/* Frage 13 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Wann wäre für euch der richtige Zeitpunkt, so etwas zu testen?
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'sofort', label: 'Sofort' },
                    { value: 'innerhalb_3_monate', label: 'Innerhalb 3 Monate' },
                    { value: 'nach_saison', label: 'Nach Saisonwechsel' },
                    { value: 'kein_bedarf', label: 'Aktuell kein Bedarf' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input 
                        type="radio" 
                        name="testing_timeline" 
                        value={option.value}
                        onChange={(e) => handleAnswerChange('testing_timeline', e.target.value)}
                        className="w-4 h-4 text-black focus:ring-black" 
                      />
                      <span className="ml-3 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Wird gespeichert...</span>
                  </>
                ) : (
                  <>
                    <span>Umfrage abschließen</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </CampaignLayout>
  );
};

export default SurveyPage;
