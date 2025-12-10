import React from 'react';
import Footer from './Footer';

const LessonView = ({ lesson }) => {
    if (!lesson) {
        return (
            <div className="content-area">
                <div className="content-wrapper" style={{ textAlign: 'center', marginTop: '10%' }}>
                    <h2>مرحباً بك في كورس C++ الشامل</h2>
                    <p>اختر درساً من القائمة الجانبية للبدء.</p>
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
