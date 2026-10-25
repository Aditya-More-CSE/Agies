import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import quizzesData from '../data/quizzes.json';
import casesData from '../data/cases.json';
import { useQuizProgress } from '../hooks/useQuizProgress';
import './LearnPage.css';

// Platform and brand SVG icons for quizzes
function BrandIcon({ slug, category }) {
  if (slug === 'facebook-cambridge-analytica') {
    return (
      <svg className="quiz-brand-svg" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    );
  }
  if (slug === 'online-harassment-and-stalking' || slug === 'twitter-social-engineering-bitcoin-scam') {
    return (
      <svg className="quiz-brand-svg" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    );
  }
  if (slug === 'google-account-phishing-campaigns') {
    return (
      <svg className="quiz-brand-svg" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    );
  }
  if (slug === 'target-corporation-breach') {
    return (
      <svg className="quiz-brand-svg" viewBox="0 0 24 24" fill="#CC0000">
        <circle cx="12" cy="12" r="10" stroke="#CC0000" strokeWidth="2.5" fill="none"/>
        <circle cx="12" cy="12" r="5" stroke="#CC0000" strokeWidth="2.5" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="#CC0000"/>
      </svg>
    );
  }
  if (slug === 'linkedin-credential-scraping') {
    return (
      <svg className="quiz-brand-svg" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    );
  }
  if (slug === 'instagram-data-leak') {
    return (
      <svg className="quiz-brand-svg" viewBox="0 0 24 24" fill="#E4405F">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }

  // Fallback category icon badge
  return (
    <div className={`quiz-fallback-icon bg-${category.toLowerCase().replace(/\s+/g, '-')}`}>
      <Layers size={18} />
    </div>
  );
}

export default function LearnPage() {
  const { scores } = useQuizProgress();

  // Combine quiz records with case details
  const enrichedQuizzes = quizzesData.map((quiz, index) => {
    const matchedCase = casesData.find(c => c.slug === quiz.caseSlug) || {};
    const previousScore = scores[quiz.caseSlug] || null;
    return {
      ...quiz,
      caseTitle: matchedCase.title || quiz.title,
      category: matchedCase.category || 'Cybercrime',
      summary: matchedCase.summary || quiz.description,
      keywords: matchedCase.keywords || ['Cyber Security', 'Cyber Law'],
      indexNumber: String(index + 1).padStart(2, '0'),
      previousScore
    };
  });

  return (
    <div className="learn-page bg-gradient-hero">
      <div className="container">
        {/* Header Hero */}
        <section className="learn-hero-row">
          <div className="learn-hero-text">
            <span className="pill-badge learn-kicker">Learner Section</span>
            <h1 className="learn-heading">Quick Quizzes</h1>
            <p className="learn-subheading">
              Test your understanding with short quizzes on real cyber threats and case studies. Each quiz includes key concepts, real-world examples and instant feedback.
            </p>
          </div>

          <div className="learn-feature-card">
            <div className="feature-card-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2">
                <rect x="3" y="4" width="18" height="6" rx="2" fill="#E8F0FE"/>
                <rect x="3" y="14" width="12" height="6" rx="2" fill="#4285F4"/>
              </svg>
            </div>
            <ul className="feature-checklist">
              <li>
                <Check size={16} className="feature-check-icon" />
                <span>Learn key cyber threats</span>
              </li>
              <li>
                <Check size={16} className="feature-check-icon" />
                <span>One case study per quiz</span>
              </li>
              <li>
                <Check size={16} className="feature-check-icon" />
                <span>Instant feedback and explanations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* List of Quizzes */}
        <section className="quizzes-list-section" aria-label="Available Quizzes">
          <div className="quizzes-list">
            {enrichedQuizzes.map((quiz) => (
              <article key={quiz.id} className="quiz-card-item">
                <div className="quiz-card-left">
                  {/* Number pill */}
                  <span className="quiz-number-badge">{quiz.indexNumber}</span>

                  {/* Brand / Platform Icon */}
                  <div className="quiz-brand-wrapper">
                    <BrandIcon slug={quiz.caseSlug} category={quiz.category} />
                  </div>

                  {/* Body */}
                  <div className="quiz-info-body">
                    <div className="quiz-title-row">
                      <h3 className="quiz-category-label">{quiz.category}</h3>
                      {quiz.previousScore && (
                        <span className="quiz-score-badge">
                          <Award size={13} /> Score: {quiz.previousScore.score}/5 ({quiz.previousScore.percentage}%)
                        </span>
                      )}
                    </div>

                    <Link to={`/cases/${quiz.caseSlug}`} className="quiz-case-link" title="Read Case Study">
                      Case Study: {quiz.caseTitle}
                    </Link>

                    <p className="quiz-summary-text">{quiz.summary}</p>

                    {/* Topic Tags */}
                    <div className="quiz-tags-row">
                      {quiz.keywords.slice(0, 3).map((kw, i) => (
                        <span key={i} className="quiz-topic-tag">{kw}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Meta & CTA */}
                <div className="quiz-card-right">
                  <div className="quiz-meta-info">
                    <span className="quiz-meta-item">
                      <HelpCircle size={14} /> 5 Questions
                    </span>
                    <span className="quiz-meta-item">
                      <Clock size={14} /> ~ 3 minutes
                    </span>
                  </div>

                  <Link to={`/learn/${quiz.caseSlug}`} className="btn btn-primary quiz-start-btn">
                    <span>{quiz.previousScore ? 'Retake Quiz' : 'Start Quiz'}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
