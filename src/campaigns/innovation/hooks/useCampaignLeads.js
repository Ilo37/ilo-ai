import { supabase } from '../../../lib/supabase';

export function useCampaignLeads() {
    async function saveLead(leadData) {
        try {
            // Zuerst prüfen, ob die Innovation-Kampagne existiert, sonst erstellen
            let { data: campaign, error: campaignError } = await supabase
                .from('campaigns')
                .select('id')
                .eq('name', 'innovation')
                .eq('variant', 'default')
                .single();

            if (campaignError && campaignError.code === 'PGRST116') {
                // Kampagne existiert nicht, erstellen
                const { data: newCampaign, error: createError } = await supabase
                    .from('campaigns')
                    .insert({
                        name: 'innovation',
                        variant: 'default',
                        active: true,
                        start_date: new Date().toISOString()
                    })
                    .select()
                    .single();

                if (createError) {
                    console.error('Fehler beim Erstellen der Kampagne:', createError);
                    throw createError;
                }
                campaign = newCampaign;
            } else if (campaignError) {
                console.error('Fehler beim Abrufen der Kampagne:', campaignError);
                throw campaignError;
            }

            // Lead speichern
            const { data, error } = await supabase
                .from('leads')
                .insert({
                    campaign_id: campaign.id,
                    email: leadData.email,
                    name: leadData.name,
                    company: leadData.company,
                    role: leadData.role || null,
                    variant: 'default',
                    created_at: new Date().toISOString()
                })
                .select()
                .single();

            if (error) {
                console.error('Fehler beim Speichern des Leads:', error);
                throw error;
            }

            console.log('Lead erfolgreich gespeichert:', data);
            return { success: true, data };

        } catch (error) {
            console.error('Fehler in saveLead:', error);
            return { success: false, error: error.message };
        }
    }

    async function saveResponse(responseData) {
        try {
            const { data, error } = await supabase
                .from('responses')
                .insert({
                    lead_id: responseData.lead_id,
                    question: responseData.question,
                    answer: responseData.answer,
                    created_at: new Date().toISOString()
                })
                .select()
                .single();

            if (error) {
                console.error('Fehler beim Speichern der Response:', error);
                throw error;
            }

            console.log('Response erfolgreich gespeichert:', data);
            return { success: true, data };

        } catch (error) {
            console.error('Fehler in saveResponse:', error);
            return { success: false, error: error.message };
        }
    }

    return { saveLead, saveResponse };
}