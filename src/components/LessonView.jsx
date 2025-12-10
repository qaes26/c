import React from 'react';
import Footer from './Footer';
import { courseContent } from '../data/courseContent';
import { BookOpen, Star, ChevronLeft, Award, PlayCircle, Zap } from 'lucide-react';

const LessonView = ({ lesson, onOpenMenu, onStartLevel }) => {

    const handleLevelClick = (level) => {
        // Find the first lesson of the clicked level
        if (level.modules && level.modules.length > 0) {
            const firstModule = level.modules[0];
            if (firstModule.lessons && firstModule.lessons.length > 0) {
                const firstLesson = firstModule.lessons[0];
                if (onStartLevel) {
                    onStartLevel(firstLesson);
                }
            }
        } else if (onOpenMenu) {
            // Fallback if no lessons found or it's the exam
            onOpenMenu();
        }
    };

    if (!lesson) {
        return (
            <div className="content-area dashboard-view">
                <div className="dashboard-header">
                    <h2>مسارك التعليمي</h2>
                    <p>اضغط على المستوى لبدء التعلم فوراً</p>
                </div>

                <div className="dashboard-grid big-squares">
                    {courseContent.map((level, index) => (
                        <div
                            key={level.id}
                            className="app-card big-square-card"
                            onClick={() => handleLevelClick(level)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="card-icon-large" style={{
                                background: `var(--gradient-${(index % 4) + 1})`
                            }}>
                                <span className="level-number-large">{index + 1}</span>
                            </div>

                            <div className="card-content-center">
                                <h3>{level.title}</h3>
                                <p>{level.modules?.length || 0} وحدات تعليمية</p>
                            </div>

                            <div className="card-action-center">
                                <span>ابدأ الدرس</span>
                                <ChevronLeft size={20} />
                            </div>
                        </div>
                    ))}

                    <div className="app-card big-square-card final-exam-card" onClick={onOpenMenu}>
                        <div className="card-icon-large" style={{ background: 'var(--gradient-primary)' }}>
                            <Award size={40} color="white" />
                        </div>
                        <div className="card-content-center">
                            <h3>الاختبار النهائي</h3>
                            <p>احصل على الشهادة</p>
                        </div>
                        <div className="card-action-center">
                            <span>اختبر الآن</span>
                            <ChevronLeft size={20} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="content-area">
            <div className="content-wrapper">
                <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{lesson.title}</h1>
                <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: lesson.content }}
                />
            </div>
            <Footer />
        </div>
    );
};

export default LessonView;
