import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import JourneyPage from './pages/JourneyPage';
import PartnersPage from './pages/PartnersPage';
import ImpactPage from './pages/ImpactPage';
import DNAPage from './pages/DNAPage';
import MethodologyPage from './pages/MethodologyPage';
import ResourcesPage from './pages/ResourcesPage';
import FollowUpPage from './pages/FollowUpPage';

/**
 * Main App Component
 * ECU Interactive Dashboard - Routing Configuration
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main Dashboard Modules */}
          <Route index element={<DashboardPage />} />
          <Route path="journey" element={<JourneyPage />} />
          <Route path="journey/:dayId" element={<JourneyPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="dna" element={<DNAPage />} />
          <Route path="methodology" element={<MethodologyPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="followup" element={<FollowUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
