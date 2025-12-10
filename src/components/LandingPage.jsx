import React from 'react';
import { BookOpen, Code, Globe, ArrowLeft } from 'lucide-react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">احترف لغة C++ من الصفر</h1>
                    <p className="hero-subtitle">
                        رحلة تعليمية شاملة تأخذك من الأساسيات إلى الاحتراف، مع شرح مبسط باللغة العربية ومصطلحات إنجليزية دقيقة.
                    </p>
                    <button className="start-btn" onClick={onStart}>
                        <span>ابدأ التعلم الآن</span>
                        <ArrowLeft size={20} />
                    </button>
                </div>
                <div className="hero-badge">
                    <span>إعداد الطالب: قيس الجازي</span>
                </div>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <div className="icon-wrapper">
                        <BookOpen size={32} />
                    </div>
                    <h3>محتوى شامل</h3>
                    <p>5 مستويات متدرجة تغطي كل جوانب اللغة بعمق وتفصيل.</p>
                </div>

                <div className="feature-card">
                    <div className="icon-wrapper">
                        <Code size={32} />
                    </div>
                    <h3>أمثلة عملية</h3>
                    <p>مئات الأمثلة البرمجية المشروحة لترسيخ الفهم النظري.</p>
                </div>

                <div className="feature-card">
                    <div className="icon-wrapper">
                        <Globe size={32} />
                    </div>
                    <h3>ثنائي اللغة</h3>
                    <p>شرح عربي وافي مع المصطلحات الإنجليزية لتهيئتك لسوق العمل.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
