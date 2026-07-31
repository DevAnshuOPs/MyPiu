import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection';
import LoveLetter from './components/LoveLetter';
import MainHub from './components/MainHub';
import MemoryTimeline from './components/MemoryTimeline';
import CouponBook from './components/CouponBook';
import ReasonsGenerator from './components/ReasonsGenerator';
import RomanticQuiz from './components/RomanticQuiz';
import AnshuDashboard from './components/AnshuDashboard';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('role_selection');

  const renderView = () => {
    switch (currentView) {
      case 'role_selection':
        return <RoleSelection onSelectRole={(role) => {
          if (role === 'piu') setCurrentView('landing');
          else if (role === 'anshu') setCurrentView('admin');
        }} />;
      case 'admin':
        return <AnshuDashboard onBack={() => setCurrentView('role_selection')} />;
      case 'landing':
        return <LoveLetter onOpen={() => setCurrentView('hub')} />;
      case 'hub':
        return <MainHub onNavigate={setCurrentView} />;
      case 'timeline':
        return <MemoryTimeline onBack={() => setCurrentView('hub')} />;
      case 'coupons':
        return <CouponBook onBack={() => setCurrentView('hub')} />;
      case 'reasons':
        return <ReasonsGenerator onBack={() => setCurrentView('hub')} />;
      case 'quiz':
        return <RomanticQuiz onBack={() => setCurrentView('hub')} />;
      default:
        return <RoleSelection onSelectRole={() => setCurrentView('landing')} />;
    }
  };

  return (
    <div className="app-container">
      {renderView()}
    </div>
  );
}

export default App;
