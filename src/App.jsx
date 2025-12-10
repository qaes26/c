import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import QuizView from './components/QuizView';
import LandingPage from './components/LandingPage';

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleStartLearning = () => {
    setShowLanding(false);
  };

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setIsQuizMode(false);
    setIsMobileMenuOpen(false); // Close sidebar on mobile after selection
  };

  const handleSelectQuiz = () => {
    setIsQuizMode(true);
    setSelectedLesson(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (showLanding) {
    return <LandingPage onStart={handleStartLearning} />;
  }

  return (
    <div className="app-layout">
      <Header onToggleMenu={toggleMobileMenu} />
      <div className="main-container">
        <Sidebar
          onSelectLesson={handleSelectLesson}
          onSelectQuiz={handleSelectQuiz}
          isQuizMode={isQuizMode}
          isOpen={isMobileMenuOpen}
        />

        {/* Overlay for mobile when sidebar is open */}
        {isMobileMenuOpen && (
          <div
            className="mobile-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 800
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {isQuizMode ? (
          <QuizView />
        ) : (
          <LessonView
            lesson={selectedLesson}
            onOpenMenu={() => setIsMobileMenuOpen(true)}
            onStartLevel={handleSelectLesson}
          />
        )}
      </div>
    </div>
  );
};

export default App;
