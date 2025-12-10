import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const QuizView = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (optionIndex) => {
        setUserAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: optionIndex
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const calculateScore = () => {
        let score = 0;
        quizQuestions.forEach((q, index) => {
            if (userAnswers[index] === q.answer) {
                score++;
            }
        });
        return score;
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setShowResults(false);
    };

    if (showResults) {
        const score = calculateScore();
        const percentage = (score / quizQuestions.length) * 100;

        return (
            <div className="main-content" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>نتيجة الاختبار النهائي</h2>

                <div style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    color: percentage >= 50 ? 'green' : 'red',
                    marginBottom: '1rem'
                }}>
                    {score} / {quizQuestions.length}
                </div>

                <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                    {percentage >= 50 ? 'مبروك! لقد اجتزت الاختبار.' : 'حاول مرة أخرى لتحسين مستواك.'}
                </p>

                <button onClick={resetQuiz} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto' }}>
                    <RefreshCw size={20} /> إعادة الاختبار
                </button>
            </div>
        );
    }

    const question = quizQuestions[currentQuestionIndex];

    return (
        <div className="main-content">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <h2 style={{ color: 'var(--primary-color)' }}>الاختبار النهائي الشامل</h2>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        السؤال {currentQuestionIndex + 1} من {quizQuestions.length}
                    </span>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>{question.question}</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {question.options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleAnswer(index)}
                                style={{
                                    padding: '1rem',
                                    border: '2px solid',
                                    borderColor: userAnswers[currentQuestionIndex] === index ? 'var(--primary-color)' : 'var(--border-color)',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    backgroundColor: userAnswers[currentQuestionIndex] === index ? 'var(--primary-light)' : 'white',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <button
                        onClick={handlePrev}
                        className="btn"
                        style={{ backgroundColor: 'var(--text-light)', visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible' }}
                    >
                        السابق
                    </button>

                    <button onClick={handleNext} className="btn">
                        {currentQuestionIndex === quizQuestions.length - 1 ? 'إنهاء الاختبار' : 'التالي'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizView;
