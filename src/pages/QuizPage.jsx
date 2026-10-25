import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  BookOpen, 
  Award,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import quizzesData from '../data/quizzes.json';
import casesData from '../data/cases.json';
import Breadcrumbs from '../components/Breadcrumbs';
import { useQuizProgress } from '../hooks/useQuizProgress';
import './QuizPage.css';

export default function QuizPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { saveScore, getScore } = useQuizProgress();

  const quiz = quizzesData.find(q => q.caseSlug === slug);
  const caseItem = casesData.find(c => c.slug === slug);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, currentQuestionIndex, isQuizCompleted]);

  if (!quiz) {
    return (
      <div className="container error-container">
        <div className="error-box">
          <h2>Quiz Not Found</h2>
          <p>The requested case study quiz could not be located.</p>
          <Link to="/learn" className="btn btn-primary">Back to Quizzes</Link>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progressPercent = Math.round(((currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)) / totalQuestions) * 100);

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return; // Prevent changing after submit
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctAnswerIndex;
    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        questionText: currentQ.question,
        selectedOption,
        correctOption: currentQ.correctAnswerIndex,
        isCorrect,
        explanation: currentQ.explanation,
        options: currentQ.options
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz Finished!
      const totalCorrect = userAnswers.filter(a => a.isCorrect).length;
      saveScore(slug, totalCorrect, totalQuestions);
      setIsQuizCompleted(true);
    }
  };

  const handleRetryQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserAnswers([]);
    setIsQuizCompleted(false);
  };

  // Result Screen Calculations
  const finalScore = userAnswers.filter(a => a.isCorrect).length;
  const scorePercent = Math.round((finalScore / totalQuestions) * 100);

  const getScoreVerdict = () => {
    if (scorePercent === 100) return { title: "Outstanding! Perfect 5/5", badge: "badge-green", desc: "You demonstrated complete mastery over the incident mechanics, statutes, and digital precautions." };
    if (scorePercent >= 80) return { title: "Great Work! 4/5 Passed", badge: "badge-blue", desc: "Solid understanding of the primary legal provisions and attack vectors." };
    if (scorePercent >= 60) return { title: "Good Effort! 3/5 Passed", badge: "badge-yellow", desc: "You grasped key principles, but reviewing the case study will clarify statutory subtleties." };
    return { title: "Review Recommended", badge: "badge-red", desc: "Spend a few minutes reviewing the case study overview and legal provisions before retrying." };
  };

  return (
    <div className="quiz-page bg-gradient-hero">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumbs items={[
          { label: 'Learn', link: '/learn' },
          { label: quiz.title }
        ]} />

        {!isQuizCompleted ? (
          /* Active Question Flow */
          <div className="quiz-flow-card">
            {/* Quiz Header Bar */}
            <div className="quiz-flow-header">
              <div>
                <span className="quiz-case-kicker">
                  {caseItem ? caseItem.category : 'Cybercrime'} • Case Quiz
                </span>
                <h1 className="quiz-flow-title">{quiz.title}</h1>
              </div>
              <div className="quiz-progress-meta">
                <span className="question-counter">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                <div className="quiz-progress-track">
                  <div className="quiz-progress-bar" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>
            </div>

            {/* Question Card */}
            <div className="question-body">
              <h2 className="question-prompt">{currentQ.question}</h2>

              {/* Options */}
              <div className="options-list" role="radiogroup" aria-label="Answer options">
                {currentQ.options.map((optText, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === currentQ.correctAnswerIndex;
                  let optionClass = 'option-btn';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionClass += ' option-correct';
                    } else if (isSelected) {
                      optionClass += ' option-incorrect';
                    } else {
                      optionClass += ' option-disabled';
                    }
                  } else if (isSelected) {
                    optionClass += ' option-selected';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      className={optionClass}
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={isAnswerSubmitted}
                      role="radio"
                      aria-checked={isSelected}
                    >
                      <span className="option-indicator">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="option-text">{optText}</span>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 size={20} className="result-icon-correct" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle size={20} className="result-icon-incorrect" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation Box */}
              {isAnswerSubmitted && (
                <div className={`explanation-callout ${selectedOption === currentQ.correctAnswerIndex ? 'callout-correct' : 'callout-incorrect'}`}>
                  <div className="callout-header">
                    {selectedOption === currentQ.correctAnswerIndex ? (
                      <>
                        <CheckCircle2 size={18} />
                        <strong>Correct Answer!</strong>
                      </>
                    ) : (
                      <>
                        <XCircle size={18} />
                        <strong>Incorrect — Here's the Breakdown:</strong>
                      </>
                    )}
                  </div>
                  <p className="callout-explanation-text">{currentQ.explanation}</p>
                  {currentQ.relatedTopic && (
                    <div className="callout-topic-tag">
                      <span>Concept Tested:</span> <strong>{currentQ.relatedTopic}</strong>
                    </div>
                  )}
                </div>
              )}

              {/* Quiz Actions Bar */}
              <div className="quiz-flow-actions">
                {!isAnswerSubmitted ? (
                  <button 
                    type="button" 
                    className="btn btn-primary btn-submit-answer"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button 
                    type="button" 
                    className="btn btn-primary btn-next-question"
                    onClick={handleNextQuestion}
                  >
                    <span>{currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight size={17} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Quiz Results View */
          <div className="quiz-results-card">
            <div className="results-hero">
              <div className="results-score-circle">
                <span className="score-big">{finalScore}</span>
                <span className="score-total">/ {totalQuestions}</span>
              </div>
              <h2 className="results-verdict-title">{getScoreVerdict().title}</h2>
              <p className="results-verdict-desc">{getScoreVerdict().desc}</p>

              <div className="results-actions-row">
                <button type="button" className="btn btn-primary" onClick={handleRetryQuiz}>
                  <RotateCcw size={16} />
                  Retry Quiz
                </button>
                {caseItem && (
                  <Link to={`/cases/${caseItem.slug}`} className="btn btn-secondary">
                    <BookOpen size={16} />
                    Review Case Study
                  </Link>
                )}
                <Link to="/learn" className="btn btn-soft">
                  All Quizzes <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Question Breakdown List */}
            <div className="results-breakdown-section">
              <h3 className="breakdown-heading">Question-by-Question Review</h3>
              <div className="breakdown-list">
                {userAnswers.map((item, idx) => (
                  <div key={idx} className={`breakdown-item ${item.isCorrect ? 'item-correct' : 'item-incorrect'}`}>
                    <div className="breakdown-item-header">
                      <span className="item-num">Question {idx + 1}</span>
                      <span className={`item-status-pill ${item.isCorrect ? 'pill-green' : 'pill-red'}`}>
                        {item.isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                      </span>
                    </div>

                    <h4 className="item-question-text">{item.questionText}</h4>

                    <div className="item-options-review">
                      <div className="review-choice user-choice">
                        <span className="choice-label">Your Answer:</span>
                        <span className="choice-val">{item.options[item.selectedOption]}</span>
                      </div>
                      {!item.isCorrect && (
                        <div className="review-choice correct-choice">
                          <span className="choice-label">Correct Answer:</span>
                          <span className="choice-val">{item.options[item.correctOption]}</span>
                        </div>
                      )}
                    </div>

                    <div className="item-explanation-box">
                      <strong>Explanation:</strong> {item.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
