import { supabase } from '../../../lib/supabase';

export function useSurvey() {
    async function submitSurvey(leadId, answers) {
        try {
            // Alle Antworten als separate Einträge speichern
            const responses = Object.entries(answers).map(([question, answer]) => ({
                lead_id: leadId,
                question: question,
                answer: typeof answer === 'object' ? JSON.stringify(answer) : String(answer),
                created_at: new Date().toISOString()
            }));

            const { data, error } = await supabase
                .from('responses')
                .insert(responses)
                .select();

            if (error) {
                console.error('Fehler beim Speichern der Survey-Antworten:', error);
                throw error;
            }

            console.log('Survey-Antworten erfolgreich gespeichert:', data);
            return { success: true, data };

        } catch (error) {
            console.error('Fehler in submitSurvey:', error);
            return { success: false, error: error.message };
        }
    }

    return { submitSurvey };
}