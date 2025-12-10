import React, { useEffect, useRef } from 'react';
import Footer from './Footer';

const LessonView = ({ lesson }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        // Scroll to top when lesson changes
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [lesson]);

    if (!lesson) {
        return (
            <div className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-light)' }}>
                    <h2>مرحباً بك في كورس C++ الشامل</h2>
                    <p>اختر درساً من القائمة الجانبية للبدء</p>
                </div>
            </div>
        );
    }

    return (
        <main className="main-content" ref={contentRef}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>{lesson.title}</h1>

                <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: lesson.content }}
                />

                <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--primary-light)', borderRadius: '8px' }}>
                    <h3>ملخص الدرس</h3>
                    <p>لقد تعلمت في هذا الدرس مفاهيم جديدة. حاول تطبيق الأمثلة بنفسك في بيئة التطوير الخاصة بك.</p>
                </div>
                <Footer />
            </div>
        </main>
    );
};

export default LessonView;
