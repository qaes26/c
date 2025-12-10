import React from 'react';
import { BookOpen, Code, Globe, ArrowLeft, Star, Monitor, Smartphone, Award, ChevronDown } from 'lucide-react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <span className="hero-tag">الإصدار التعليمي الجديد 2025</span>
                    <h1 className="hero-title">
                        احترف لغة <span className="highlight">C++</span> <br />
                        من الصفر إلى الإبداع
                    </h1>
                    <p className="hero-subtitle">
                        منصة تعليمية تفاعلية صُممت خصيصاً لتأخذ بيدك خطوة بخطوة نحو احتراف البرمجة،
                        مع شرح مبسط باللغة العربية ومصطلحات عالمية.
                    </p>
                    <div className="hero-actions">
                        <button className="start-btn" onClick={onStart}>
                            <span>ابدأ الرحلة الآن</span>
                            <ArrowLeft size={20} />
                        </button>
                        <button className="demo-btn">
                            <span>شاهد المقدمة</span>
                            <Monitor size={20} />
                        </button>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>اكتشف المزيد</span>
                    <ChevronDown size={20} />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="section-header">
                    <h2>لماذا هذا الكورس؟</h2>
                    <p>مميزات تجعل رحلة تعلمك ممتعة وفعالة</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card glass">
                        <div className="icon-wrapper gradient-1">
                            <BookOpen size={28} />
                        </div>
                        <h3>منهاج شامل</h3>
                        <p>5 مستويات متدرجة تغطي كافة جوانب اللغة من الأساسيات وحتى البرمجة الكائنية المتقدمة.</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="icon-wrapper gradient-2">
                            <Smartphone size={28} />
                        </div>
                        <h3>تصميم عصري</h3>
                        <p>تجربة مستخدم سلسة ومريحة على جميع الأجهزة، لتتعلم في أي وقت وأي مكان.</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="icon-wrapper gradient-3">
                            <Globe size={28} />
                        </div>
                        <h3>لغة مزدوجة</h3>
                        <p>شرح عربي وافي يرافق المصطلحات الإنجليزية لضمان فهمك العميق واستعدادك لسوق العمل.</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="icon-wrapper gradient-4">
                            <Award size={28} />
                        </div>
                        <h3>اختبارات ذكية</h3>
                        <p>قيم مستواك بعد كل درس من خلال نظام اختبارات تفاعلي يعزز نقاط قوتك.</p>
                    </div>
                </div>
            </section>

            {/* Curriculum Preview */}
            <section className="curriculum-section">
                <div className="section-header">
                    <h2>رحلة التعلم</h2>
                    <p>خارطة طريق واضحة تقودك للهدف</p>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-number">01</div>
                        <div className="timeline-content">
                            <h3>المقدمة والأساسيات</h3>
                            <p>تعلم بنية اللغة، المتغيرات، وأنواع البيانات الأساسية.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-number">02</div>
                        <div className="timeline-content">
                            <h3>التحكم والمنطق</h3>
                            <p>الجمل الشرطية، الحلقات التكرارية، وبناء المنطق البرمجي السليم.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-number">03</div>
                        <div className="timeline-content">
                            <h3>الدوال والمصفوفات</h3>
                            <p>تنظيم الكود، إعادة الاستخدام، والتعامل مع مجموعات البيانات.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-number">04</div>
                        <div className="timeline-content">
                            <h3>المؤشرات والذاكرة</h3>
                            <p>فهم عميق لكيفية عمل الذاكرة والمؤشرات في C++.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-number">05</div>
                        <div className="timeline-content">
                            <h3>البرمجة كائنية التوجه</h3>
                            <p>المفاهيم المتقدمة مثل الكلاسات، الوراثة، وتعدد الأشكال.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <section className="author-section">
                <div className="author-container glass">
                    <div className="author-badge">إعداد وتطوير</div>
                    <h2>قيس طلال الجازي</h2>
                    <p className="author-bio">
                        طالب شغوف بالتكنولوجيا والبرمجة، يسعى لتقديم محتوى تعليمي عربي راقٍ يليق بالمبرمج العربي.
                        تم تطوير هذا المشروع كجزء من متطلبات الجامعة بهدف تيسير تعلم لغة C++.
                    </p>
                    <div className="author-stats">
                        <div className="stat">
                            <Star size={20} fill="#f59e0b" color="#f59e0b" />
                            <span>محتوى احترافي</span>
                        </div>
                        <div className="stat">
                            <Code size={20} color="#2563eb" />
                            <span>تطبيق عملي</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>جاهز للبدء؟</h2>
                    <p>انضم الآن وابدأ أولى خطواتك في عالم البرمجة</p>
                    <button className="start-btn large" onClick={onStart}>
                        <span>ابدأ الكورس مجاناً</span>
                        <ArrowLeft size={24} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
