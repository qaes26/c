import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, Circle, Book, Award } from 'lucide-react';

const Sidebar = ({ content, currentLesson, onSelectLesson, onSelectQuiz, isQuizMode }) => {
    const [expandedLevels, setExpandedLevels] = useState({});
    const [expandedModules, setExpandedModules] = useState({});

    const toggleLevel = (levelId) => {
        setExpandedLevels(prev => ({ ...prev, [levelId]: !prev[levelId] }));
    };

    const toggleModule = (moduleId) => {
        setExpandedModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
    };

    return (
        <aside style={{
            width: 'var(--sidebar-width)',
            backgroundColor: 'var(--white)',
            borderLeft: '1px solid var(--border-color)',
            overflowY: 'auto',
            height: '100%',
            padding: '1rem'
        }}>
            {/* Course Content */}
            {content.map(level => (
                <div key={level.id} style={{ marginBottom: '0.5rem' }}>
                    <div
                        onClick={() => toggleLevel(level.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.8rem',
                            backgroundColor: '#e9ecef',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            color: 'var(--secondary-color)',
                            marginBottom: '0.5rem'
                        }}
                    >
                        <span style={{ fontSize: '0.9rem' }}>{level.title}</span>
                        {expandedLevels[level.id] ? <ChevronDown size={16} /> : <ChevronLeft size={16} />}
                    </div>

                    {expandedLevels[level.id] && (
                        <div style={{ paddingRight: '0.5rem' }}>
                            {level.modules.map(module => (
                                <div key={module.id} style={{ marginBottom: '0.5rem' }}>
                                    <div
                                        onClick={() => toggleModule(module.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.5rem',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-color)',
                                            fontWeight: '500'
                                        }}
                                    >
                                        <Book size={14} />
                                        <span>{module.title}</span>
                                    </div>

                                    {expandedModules[module.id] && (
                                        <div style={{ paddingRight: '1rem', borderRight: '2px solid #eee' }}>
                                            {module.lessons.map(lesson => (
                                                <div
                                                    key={lesson.id}
                                                    onClick={() => onSelectLesson(level.id, module.id, lesson.id)}
                                                    style={{
                                                        padding: '0.4rem',
                                                        cursor: 'pointer',
                                                        fontSize: '0.85rem',
                                                        color: (currentLesson?.id === lesson.id && !isQuizMode) ? 'var(--primary-color)' : 'var(--text-light)',
                                                        backgroundColor: (currentLesson?.id === lesson.id && !isQuizMode) ? 'var(--primary-light)' : 'transparent',
                                                        borderRadius: '4px',
                                                        marginTop: '0.2rem'
                                                    }}
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

            {/* Quiz Section */}
            <div
                onClick={onSelectQuiz}
                style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    backgroundColor: isQuizMode ? 'var(--primary-color)' : 'var(--secondary-color)',
                    color: 'white',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontWeight: 'bold',
                    transition: 'background 0.3s'
                }}
            >
                <Award size={24} />
                <span>الاختبار النهائي (100 سؤال)</span>
            </div>
        </aside>
    );
};

export default Sidebar;
