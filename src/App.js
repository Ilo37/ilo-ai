import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InnovationCampaignPage from './campaigns/innovation/InnovationCampaignPage';
import ThankYouPage from './campaigns/innovation/ThankYouPage';
import SurveyPage from './campaigns/innovation/SurveyPage';
import PrivacyPage from './campaigns/innovation/PrivacyPage';
import ImprintPage from './campaigns/innovation/ImprintPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Innovation-Kampagne Routen */}
          <Route path="/campaign/innovation" element={<InnovationCampaignPage />} />
          <Route path="/campaign/innovation/thank-you" element={<ThankYouPage />} />
          <Route path="/campaign/innovation/survey" element={<SurveyPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImprintPage />} />

          {/* Root leitet direkt zur Kampagne um */}
          <Route path="/" element={<Navigate to="/campaign/innovation" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;