import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import QuizView from './components/QuizView';
import { courseContent } from './data/courseContent';

function App() {
  const [currentLesson, setCurrentLesson] = useState(null);
  const [isQuizMode, setIsQuizMode] = useState(false);

  const handleSelectLesson = (levelId, moduleId, lessonId) => {
    const level = courseContent.find(l => l.id === levelId);
    if (level) {
      const module = level.modules.find(m => m.id === moduleId);
      if (module) {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (lesson) {
          setCurrentLesson(lesson);
          setIsQuizMode(false);
        }
      }
    }
  };

  const handleSelectQuiz = () => {
    setIsQuizMode(true);
    setCurrentLesson(null);
  };

  return (
    <>
      <Header />
      <div className="app-container" style={{ marginTop: 'var(--header-height)' }}>
        <Sidebar
          content={courseContent}
          currentLesson={currentLesson}
          onSelectLesson={handleSelectLesson}
          onSelectQuiz={handleSelectQuiz}
          isQuizMode={isQuizMode}
        />

        {isQuizMode ? (
          <QuizView />
        ) : (
          <LessonView lesson={currentLesson} />
        )}
      </div>
    </>
  );
}

export default App;
