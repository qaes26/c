import React, { useState } from 'react';
import { courseContent } from '../data/courseContent';
import { ChevronDown, ChevronLeft, BookOpen, GraduationCap } from 'lucide-react';

const Sidebar = ({ onSelectLesson, onSelectQuiz, isQuizMode }) => {
    const [expandedLevels, setExpandedLevels] = useState(['level-1']);
    const [expandedModules, setExpandedModules] = useState(['intro']);

    const toggleLevel = (levelId) => {
        setExpandedLevels(prev =>
            prev.includes(levelId) ? prev.filter(id => id !== levelId) : [...prev, levelId]
        );
    };

    const toggleModule = (moduleId) => {
        setExpandedModules(prev =>
            prev.includes(moduleId) ? prev.filter(id => id !== moduleId) : [...prev, moduleId]
        );
    };

    return (
        <div className="app-sidebar">
            {courseContent.map((level) => (
                <div key={level.id} className="level-card">
                    <div
                        className="level-header"
                        onClick={() => toggleLevel(level.id)}
                    >
                        <span>{level.title}</span>
                        {expandedLevels.includes(level.id) ? <ChevronDown size={18} /> : <ChevronLeft size={18} />}
                    </div>

                    {expandedLevels.includes(level.id) && (
                        <div>
                            {level.modules.map((module) => (
                                <div key={module.id}>
                                    <div
                                        className="module-item"
                                        onClick={() => toggleModule(module.id)}
                                    >
                                        <div className="module-title">
                                            <BookOpen size={16} color="var(--primary)" />
                                            <span>{module.title}</span>
                                        </div>
                                    </div>

                                    {expandedModules.includes(module.id) && (
                                        <div className="lesson-list">
                                            {module.lessons.map((lesson) => (
                                                <div
                                                    key={lesson.id}
                                                    className="lesson-item"
                                                    onClick={() => onSelectLesson(lesson)}
                                                >
                                                    {lesson.title}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div
                className={`quiz-btn ${isQuizMode ? 'active' : ''}`}
                onClick={onSelectQuiz}
            >
                <GraduationCap size={24} />
                <span>الاختبار النهائي</span>
            </div>
        </div>
    );
};

export default Sidebar;
