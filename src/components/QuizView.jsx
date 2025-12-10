import React, { useState } from 'react';
import { quizData } from '../data/quizData';

const QuizView = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = quizData[currentQuestionIndex];
    const totalQuestions = quizData.length;

    const handleAnswerSelect = (optionIndex) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion.id]: optionIndex
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = () => {
        let score = 0;
        quizData.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setShowResult(false);
    };

    if (showResult) {
        const score = calculateScore();
        const passed = score >= (totalQuestions / 2);

        return (
            <div className="content-area">
                <div className="content-wrapper" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: passed ? 'var(--success)' : 'var(--error)' }}>
                        {passed ? 'مبروك! لقد اجتزت الاختبار' : 'للأسف، لم تجتز الاختبار'}
                    </h2>
                    <p style={{ fontSize: '1.5rem', margin: '2rem 0' }}>
                        النتيجة: {score} / {totalQuestions}
                    </p>
                    <button className="btn btn-primary" onClick={resetQuiz}>
                        إعادة الاختبار
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="content-area">
            <div className="content-wrapper">
                <div className="quiz-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                            سؤال {currentQuestionIndex + 1} من {totalQuestions}
                        </span>
                        <span>التقدم: {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%</span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>{currentQuestion.question}</h3>

                    <div className="options-list">
                        {currentQuestion.options.map((option, index) => (
                            <div
                                key={index}
                                className={`option-card ${userAnswers[currentQuestion.id] === index ? 'selected' : ''}`}
                                onClick={() => handleAnswerSelect(index)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <button
                            className="btn btn-secondary"
                            onClick={handlePrev}
                            disabled={currentQuestionIndex === 0}
                            style={{ opacity: currentQuestionIndex === 0 ? 0.5 : 1 }}
                        >
                            السابق
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={handleNext}
                            disabled={userAnswers[currentQuestion.id] === undefined}
                            style={{ opacity: userAnswers[currentQuestion.id] === undefined ? 0.5 : 1 }}
                        >
                            {currentQuestionIndex === totalQuestions - 1 ? 'إنهاء الاختبار' : 'التالي'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizView;
