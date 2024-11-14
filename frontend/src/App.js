import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard';
import RecruitmentDashboard from './components/Recruitment/RecruitmentDashboard';
import RecruitmentPipeline from './components/Recruitment/RecruitmentPipeline';
import RecruitmentSurvey from './components/Recruitment/RecruitmentSurvey';
import RecruitmentCandidate from './components/Recruitment/RecruitmentCandidate';
import Interview from './components/Recruitment/Interview';
import SkillZone from './components/Recruitment/SkillZone';
import OpenJobs from './components/Recruitment/OpenJobs';
import Employee from './components/pages/Employee';
import Attendance from './components/pages/Attendance';
import Leave from './components/pages/Leave';
import Payroll from './components/pages/Payroll';
import Performance from './components/pages/Performance';
import Offboarding from './components/pages/Offboarding';
import Assets from './components/pages/Assets';
import HelpDesk from './components/pages/HelpDesk';
import Configuration from './components/pages/Configuration';
import OnboardingView from './components/Onboarding/OnboardingView';
import CandidatesView from './components/Onboarding/CandidatesView';
import QuickActionButton from './components/QuickActionButton';
import './App.css';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('Dashboard'); // Default to Dashboard

  // Function to render the current page based on state
  const renderPage = () => {
    switch (selectedPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Employee':
        return <Employee />;
      case 'Attendance':
        return <Attendance />;
      case 'Leave':
        return <Leave />;
      case 'Payroll':
        return <Payroll />;
      case 'Performance':
        return <Performance />;
      case 'Offboarding':
        return <Offboarding />;
      case 'Assets':
        return <Assets />;
      case 'Help Desk':
        return <HelpDesk />;
      case 'Configuration':
        return <Configuration />;
      case 'Onboarding View':
        return <OnboardingView />;
      case 'Candidates View':
        return <CandidatesView />;
      case 'Recruitment Dashboard':
        return <RecruitmentDashboard />;
      case 'Recruitment Pipeline':
        return <RecruitmentPipeline />;
      case 'Recruitment Survey':
        return <RecruitmentSurvey />;
      case 'Interview':
        return <Interview />;
      case 'Recruitment Candidate':
        return <RecruitmentCandidate />;
      case 'Skill Zone':
        return <SkillZone />;  
      case 'Open Jobs':
        return <OpenJobs />;  
      default:
        return <Dashboard />; // Default to Dashboard if an invalid page is selected
    }
  };

  return (
    <div className="app">
      {/* Sidebar on the left */}
      <Sidebar setSelectedPage={setSelectedPage} className="sidebar" />

      {/* Main content wrapper */}
      <div className="content-wrapper">
        {/* Header on top of the content */}
        <Header className="header" />

        {/* Content area that should be aligned beside the sidebar and below the header */}
        <div className="page-content">
          {renderPage()}
        </div>
      </div>

      {/* Quick Action Button for easy navigation */}
      <QuickActionButton setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
