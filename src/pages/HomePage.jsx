import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';
import casesData from '../data/cases.json';
import CaseCard from '../components/CaseCard';
import BenefitsStrip from '../components/BenefitsStrip';
import './HomePage.css';

export default function HomePage() {
  // Extract 4 featured cases
  const featuredCases = casesData.filter(c => c.featured).slice(0, 4);

  return (
    <div className="home-page bg-gradient-hero">
      <div className="container">
        {/* Hero Section */}
        <section className="home-hero-section">
          <div className="hero-text-col">
            <span className="pill-kicker">
              REAL INCIDENTS. CLEAR LAWS. A SAFER DIGITAL YOU.
            </span>
            <h1 className="hero-heading">
              Learn from <span className="highlight-blue">real cybercrime</span> cases.
            </h1>
            <p className="hero-subheading">
              Explore true incidents, understand the laws, and learn how to stay safe online.
            </p>
            <div className="hero-cta-group">
              <Link to="/cases" className="btn btn-primary hero-btn-main">
                Explore Cases <ArrowRight size={18} />
              </Link>
              <a href="#how-it-works" className="btn btn-secondary hero-btn-secondary">
                <Play size={16} fill="currentColor" />
                How It Works
              </a>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-visual-frame">
              <img 
                src="/images/illustrations/home-hero-banner.png" 
                alt="AGIES Cybercrime Case Study Platform Banner" 
                className="hero-banner-image"
              />

              {/* Floating Hero Badge */}
              <div className="hero-floating-card">
                <div className="hero-floating-icon">
                  <Shield size={20} />
                </div>
                <div className="hero-floating-text">
                  <span className="floating-title">Real Cases</span>
                  <span className="floating-subtitle">Real Lessons</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <BenefitsStrip />

        {/* Featured Cases Section */}
        <section className="featured-section">
          <div className="section-header-row">
            <div>
              <h2 className="section-heading">Featured Case Studies</h2>
              <p className="section-subheading">Handpicked landmark incidents demonstrating critical cybersecurity and legal implications.</p>
            </div>
            <Link to="/cases" className="btn-view-all">
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cases-grid">
            {featuredCases.map(caseItem => (
              <CaseCard key={caseItem.id} caseItem={caseItem} viewMode="grid" />
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works-section">
          <div className="how-it-works-header">
            <span className="pill-badge">
              <Sparkles size={14} /> Guided Learning Path
            </span>
            <h2 className="section-heading">How AGIES Works</h2>
            <p className="section-subheading">A structured pedagogical model designed for students, educators, and security researchers.</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3 className="step-title">Investigate Real Incidents</h3>
              <p className="step-desc">
                Review verified technical breakdowns of documented cyberattacks, attack vectors, timelines, and impact metrics.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <h3 className="step-title">Analyze Legal Provisions</h3>
              <p className="step-desc">
                Understand applicable statutes (IT Act 2000, GDPR, CFAA), court precedents, and jurisdictional nuances in plain English.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <h3 className="step-title">Adopt Practical Precautions</h3>
              <p className="step-desc">
                Implement actionable security hygiene, defense-in-depth principles, and early detection controls.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">04</div>
              <h3 className="step-title">Validate with Quizzes</h3>
              <p className="step-desc">
                Test your conceptual grasp with 5-question case quizzes featuring instant explanations and progress tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Learn Page Entry Banner */}
        <section className="learn-cta-banner">
          <div className="learn-cta-content">
            <span className="learn-cta-kicker">Interactive Knowledge Check</span>
            <h2 className="learn-cta-title">Test your cyber law knowledge with Quick Quizzes</h2>
            <p className="learn-cta-desc">
              Challenge yourself with 20 curated case quizzes. Understand threat vectors, statutory provisions, and verified legal precedents.
            </p>
            <div className="learn-cta-actions">
              <Link to="/learn" className="btn btn-primary">
                Browse All Quizzes <ArrowRight size={18} />
              </Link>
              <Link to="/help" className="btn btn-secondary">
                <HelpCircle size={17} />
                Emergency Reporting
              </Link>
            </div>
          </div>
          <div className="learn-cta-graphic">
            <div className="quiz-graphic-card">
              <div className="graphic-row">
                <CheckCircle2 size={18} className="check-icon" />
                <span>100 Researched Questions</span>
              </div>
              <div className="graphic-row">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Immediate Legal Explanations</span>
              </div>
              <div className="graphic-row">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Local Browser Progress</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
