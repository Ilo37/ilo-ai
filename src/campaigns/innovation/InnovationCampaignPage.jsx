import React from 'react';
import CampaignLayout from './components/CampaignLayout';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FutureSection from './components/FutureSection';
import CTASection from './components/CTASection';

const InnovationCampaignPage = () => {
  return (
    <CampaignLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FutureSection />
      <CTASection />
    </CampaignLayout>
  );
};

export default InnovationCampaignPage;
