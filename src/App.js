import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InnovationCampaignPage from './campaigns/innovation/InnovationCampaignPage';
import ThankYouPage from './campaigns/innovation/ThankYouPage';
import SurveyPage from './campaigns/innovation/SurveyPage';
import PrivacyPage from './campaigns/innovation/PrivacyPage';
import ImprintPage from './campaigns/innovation/ImprintPage';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Routes > { /* Innovation-Kampagne Routen */ } <
        Route path = "/campaign/innovation"
        element = { < InnovationCampaignPage / > }
        /> <
        Route path = "/campaign/innovation/thank-you"
        element = { < ThankYouPage / > }
        /> <
        Route path = "/campaign/innovation/survey"
        element = { < SurveyPage / > }
        /> <
        Route path = "/datenschutz"
        element = { < PrivacyPage / > }
        /> <
        Route path = "/impressum"
        element = { < ImprintPage / > }
        />

        { /* Fallback für Root */ } <
        Route path = "/"
        element = { <
            div className = "min-h-screen flex items-center justify-center bg-gray-50" >
            <
            div className = "text-center" >
            <
            h1 className = "text-2xl font-bold text-gray-900 mb-4" > Ilo Kampagnen < /h1> <
            a
            href = "/campaign/innovation"
            className = "text-blue-600 hover:text-blue-800 underline" >
            →Innovation - Kampagne <
            /a> <
            /div> <
            /div>
        }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}

export default App;