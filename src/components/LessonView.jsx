import React from 'react';
import Footer from './Footer';
import { courseContent } from '../data/courseContent';
import { BookOpen, Star, ChevronLeft, Award, PlayCircle } from 'lucide-react';

const LessonView = ({ lesson, onOpenMenu }) => {
    if (!lesson) {
        return (
            <div className="content-area dashboard-view">
                <div className="dashboard-header">
                    <h2>لوحة التحكم</h2>
                    <p>مرحباً بك في رحلة تعلم C++</p>
                </div>

                <div className="dashboard-grid">
                    {courseContent.map((level, index) => (
                        <div key={level.id} className="app-card" onClick={onOpenMenu} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="card-icon-wrapper" style={{
                                background: `var(--gradient-${(index % 4) + 1})`
                            }}>
                                <span className="level-number">{index + 1}</span>
                            </div>

                            <div className="card-content">
                                <h3>{level.title}</h3>
                                <p>{level.modules?.length || 0} وحدات تعليمية</p>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '0%' }}></div>
                                </div>
                            </div>

                            <div className="card-action">
                                <PlayCircle size={32} color="var(--primary)" />
                            </div>
                        </div>
                    ))}

                    <div className="app-card final-exam-card" onClick={onOpenMenu}>
                        <div className="card-icon-wrapper" style={{ background: 'var(--gradient-primary)' }}>
                            <Award size={24} color="white" />
                        </div>
                        <div className="card-content">
                            <h3>الاختبار النهائي</h3>
                            <p>احصل على شهادة إتمام الكورس</p>
                        </div>
                        <div className="card-action">
                            <ChevronLeft size={24} color="#aaa" />
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
