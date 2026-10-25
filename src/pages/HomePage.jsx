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
              {/* Modern Cyber Vector Graphic */}
              <svg className="hero-visual-svg" viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heroBg" x1="0" y1="0" x2="520" y2="340" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0B132B"/>
                    <stop offset="50%" stopColor="#1C2541"/>
                    <stop offset="100%" stopColor="#3A506B"/>
                  </linearGradient>
                  <linearGradient id="meshGrad" x1="0" y1="0" x2="520" y2="340" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4285F4" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#34A853" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
                <rect width="520" height="340" rx="20" fill="url(#heroBg)"/>
                
                {/* Cyber Grid Lines */}
                <path d="M0 60 H520 M0 120 H520 M0 180 H520 M0 240 H520 M0 300 H520" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                <path d="M60 0 V340 M140 0 V340 M220 0 V340 M300 0 V340 M380 0 V340 M460 0 V340" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                
                {/* Hooded Figure & Terminal Silhouette */}
                <ellipse cx="260" cy="270" rx="90" ry="70" fill="#0B1120"/>
                <path d="M220 220 C220 170 300 170 300 220 C300 245 285 270 260 270 C235 270 220 245 220 220 Z" fill="#1E293B"/>
                <path d="M225 210 C235 180 285 180 295 210 C290 225 280 235 260 235 C240 235 230 225 225 210 Z" fill="#0F172A"/>
                
                {/* Glowing Laptop Display */}
                <polygon points="190,285 330,285 350,320 170,320" fill="#334155"/>
                <rect x="200" y="225" width="120" height="60" rx="4" fill="#0EA5E9" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2"/>
                <line x1="215" y1="240" x2="265" y2="240" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
                <line x1="215" y1="250" x2="295" y2="250" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
                <line x1="215" y1="260" x2="245" y2="260" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
                
                {/* Glowing Network Nodes */}
                <circle cx="80" cy="80" r="4" fill="#4285F4"/>
                <circle cx="140" cy="130" r="3" fill="#34A853"/>
                <circle cx="420" cy="90" r="5" fill="#FBBC05"/>
                <circle cx="450" cy="180" r="4" fill="#EA4335"/>
                <line x1="80" y1="80" x2="140" y2="130" stroke="#4285F4" strokeOpacity="0.4" strokeWidth="1.5"/>
                <line x1="140" y1="130" x2="210" y2="160" stroke="#34A853" strokeOpacity="0.4" strokeWidth="1.5"/>
                <line x1="420" y1="90" x2="350" y2="140" stroke="#FBBC05" strokeOpacity="0.4" strokeWidth="1.5"/>
                <line x1="420" y1="90" x2="450" y2="180" stroke="#EA4335" strokeOpacity="0.4" strokeWidth="1.5"/>
              </svg>

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
