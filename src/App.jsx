import React, { useState, useEffect, useRef } from 'react';
import RoleSelection from './components/RoleSelection';
import LoveLetter from './components/LoveLetter';
import MainHub from './components/MainHub';
import MemoryTimeline from './components/MemoryTimeline';
import CouponBook from './components/CouponBook';
import ReasonsGenerator from './components/ReasonsGenerator';
import RomanticQuiz from './components/RomanticQuiz';
import AnshuDashboard from './components/AnshuDashboard';
import './index.css';

const SONG_MAP = {
  landing: '/cant_help_falling_in_love.mp3',
  hub: '/cant_help_falling_in_love.mp3',
  timeline: '/darkhaast.mp3',
  coupons: '/humraah.mp3',
  reasons: '/iris.mp3',
  quiz: '/margaret.mp3',
};

function App() {
  const [currentView, setCurrentView] = useState('role_selection');
  const audioRef = useRef(null);
  const currentSongRef = useRef('');

  useEffect(() => {
    if (currentView === 'role_selection' || currentView === 'admin') {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      return;
    }

    const nextSong = SONG_MAP[currentView];
    if (nextSong && audioRef.current) {
      if (currentSongRef.current !== nextSong) {
        audioRef.current.src = nextSong;
        currentSongRef.current = nextSong;
        audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
      } else if (audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
      }
    }
  }, [currentView]);

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
      <audio ref={audioRef} loop />
      {renderView()}
    </div>
  );
}

export default App;
