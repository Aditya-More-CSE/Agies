import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Bookmark, 
  Share2, 
  Calendar, 
  Clock, 
  MapPin, 
  Scale, 
  ShieldCheck, 
  AlertTriangle, 
  BookOpen, 
  ArrowRight, 
  ExternalLink,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import casesData from '../data/cases.json';
import Breadcrumbs from '../components/Breadcrumbs';
import { useBookmarks } from '../hooks/useBookmarks';
import './CaseDetailPage.css';

export default function CaseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const [activeSection, setActiveSection] = useState('overview');
  const [copied, setCopied] = useState(false);

  const caseItem = casesData.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseItem) {
    return (
      <div className="container error-container">
        <div className="error-box">
          <h2>Case Study Not Found</h2>
          <p>The requested cybercrime case study could not be located in the AGIES library.</p>
          <Link to="/cases" className="btn btn-primary">Return to Case Directory</Link>
        </div>
      </div>
    );
  }

  const bookmarked = isBookmarked(caseItem.slug);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'topics', label: 'Threat Topics' },
    { id: 'law', label: 'The Law' },
    { id: 'impact', label: 'Impact' },
    { id: 'lessons', label: 'Key Lessons' },
    { id: 'resources', label: 'References' },
    { id: 'quiz', label: 'Case Quiz' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="case-detail-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[
          { label: 'Cases', link: '/cases' },
          { label: caseItem.title }
        ]} />

        {/* Section A: Case Header */}
        <header className="case-article-header">
          <div className="case-header-meta-row">
            <span className={`pill-badge badge-${caseItem.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {caseItem.category}
            </span>
            <div className="case-header-actions">
              <button 
                type="button" 
                className={`action-pill-btn ${bookmarked ? 'active' : ''}`}
                onClick={() => toggleBookmark(caseItem.slug)}
              >
                <Bookmark size={15} fill={bookmarked ? "currentColor" : "none"} />
                <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
              </button>
              <button type="button" className="action-pill-btn" onClick={handleShare}>
                <Share2 size={15} />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>

          <h1 className="case-article-title">{caseItem.title}</h1>
          <p className="case-article-intro">{caseItem.introduction}</p>

          <div className="case-key-details-bar">
            <div className="key-detail-item">
              <Calendar size={16} className="detail-icon" />
              <div>
                <span className="detail-label">Incident Period</span>
                <span className="detail-value">{caseItem.incidentDate}</span>
              </div>
            </div>
            <div className="key-detail-item">
              <MapPin size={16} className="detail-icon" />
              <div>
                <span className="detail-label">Primary Country</span>
                <span className="detail-value">{caseItem.country}</span>
              </div>
            </div>
            <div className="key-detail-item">
              <Clock size={16} className="detail-icon" />
              <div>
                <span className="detail-label">Estimated Read</span>
                <span className="detail-value">{caseItem.estimatedReadTime}</span>
              </div>
            </div>
            <div className="key-detail-item">
              <Scale size={16} className="detail-icon" />
              <div>
                <span className="detail-label">Key Regulators</span>
                <span className="detail-value">{caseItem.jurisdiction}</span>
              </div>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="case-hero-banner">
            <img 
              src={caseItem.image} 
              alt={caseItem.imageAlt || caseItem.title}
              className="case-hero-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/cases/cambridge-analytica.svg';
              }}
            />
          </div>
        </header>

        {/* Article Layout with Sticky TOC Sidebar */}
        <div className="case-article-layout">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="case-toc-sidebar" aria-label="Table of contents">
            <div className="toc-card">
              <h4 className="toc-title">Article Sections</h4>
              <nav className="toc-nav">
                {sections.map(s => (
                  <button 
                    key={s.id} 
                    type="button" 
                    className={`toc-link ${activeSection === s.id ? 'active' : ''}`}
                    onClick={() => scrollTo(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>

              <div className="toc-quiz-prompt">
                <span className="quiz-prompt-label">Ready for testing?</span>
                <Link to={`/learn/${caseItem.slug}`} className="btn btn-primary btn-sm toc-quiz-btn">
                  Take Quiz (5 Qs) →
                </Link>
              </div>
            </div>
          </aside>

          {/* Continuous Editorial Body */}
          <main className="case-article-body">
            {/* Section B: Overview */}
            <section id="overview" className="article-section">
              <h2 className="section-title">Incident Overview</h2>
              <div className="editorial-prose">
                <p>{caseItem.overview}</p>
              </div>
            </section>

            {/* Section C: Timeline */}
            {caseItem.timeline && caseItem.timeline.length > 0 && (
              <section id="timeline" className="article-section">
                <h2 className="section-title">Verified Incident Timeline</h2>
                <div className="timeline-container">
                  {caseItem.timeline.map((step, idx) => (
                    <div key={idx} className="timeline-node">
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <span className="timeline-date">{step.date}</span>
                        <h4 className="timeline-step-title">{step.title}</h4>
                        <p className="timeline-step-desc">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section D: Cybersecurity Topics Covered */}
            <section id="topics" className="article-section">
              <h2 className="section-title">Cybersecurity Concepts & Threats</h2>
              <p className="section-intro-text">
                Key technical vectors, exploitation patterns, and system architectural vulnerabilities documented in this case:
              </p>
              <div className="topics-cards-grid">
                {caseItem.topics.map((t, idx) => (
                  <div key={idx} className="topic-card">
                    <span className="topic-category-tag">{t.category}</span>
                    <h3 className="topic-name">{t.name}</h3>
                    <p className="topic-desc">{t.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section E: The Law */}
            <section id="law" className="article-section">
              <h2 className="section-title">Applicable Laws & Legal Provisions</h2>
              <p className="section-intro-text">
                Statutory frameworks, judicial rulings, and regulatory compliance standards directly applicable to this incident:
              </p>
              <div className="laws-list">
                {caseItem.laws.map((law, idx) => (
                  <div key={idx} className="law-card">
                    <div className="law-header">
                      <div className="law-badge-group">
                        <span className="law-jurisdiction-badge">{law.jurisdiction}</span>
                        <span className="law-statute-badge">{law.lawName}</span>
                      </div>
                      {law.sourceUrl && (
                        <a href={law.sourceUrl} target="_blank" rel="noopener noreferrer" className="law-source-link">
                          Statute Reference <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <h3 className="law-section-name">{law.section}</h3>
                    <div className="law-body">
                      <div className="law-block">
                        <strong>Plain English Explanation:</strong>
                        <p>{law.explanation}</p>
                      </div>
                      <div className="law-block">
                        <strong>Connection to Incident:</strong>
                        <p>{law.incidentConnection}</p>
                      </div>
                      <div className="law-status-bar">
                        <strong>Current Legal Status:</strong> {law.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section F: Documented Impact */}
            <section id="impact" className="article-section">
              <h2 className="section-title">Documented Impact & Consequences</h2>
              <div className="impact-metrics-grid">
                {caseItem.impact.map((imp, idx) => (
                  <div key={idx} className="impact-metric-card">
                    <div className="impact-number">{imp.metric}</div>
                    <div className="impact-label">{imp.label}</div>
                    <p className="impact-detail">{imp.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section G: Key Lessons & Precautions */}
            <section id="lessons" className="article-section">
              <h2 className="section-title">Key Lessons & Recommended Precautions</h2>
              <div className="lessons-container">
                {caseItem.lessons.map((lesson, idx) => (
                  <div key={idx} className="lesson-item">
                    <div className="lesson-badge-col">
                      <span className="lesson-audience-pill">{lesson.category}</span>
                    </div>
                    <div className="lesson-content-col">
                      <h4 className="lesson-tip">{lesson.tip}</h4>
                      <p className="lesson-explanation">{lesson.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section H: Resources and References */}
            <section id="resources" className="article-section">
              <h2 className="section-title">Authoritative Resources & References</h2>
              <div className="references-list">
                {caseItem.sources.map((src, idx) => (
                  <div key={idx} className="reference-item">
                    <BookOpen size={18} className="ref-icon" />
                    <div className="ref-details">
                      <h4 className="ref-title">{src.title}</h4>
                      <span className="ref-publisher">{src.publisher} • {src.date}</span>
                    </div>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="ref-link-btn" title="Open source">
                      <ExternalLink size={15} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Section I: Quick Quiz CTA */}
            <section id="quiz" className="article-section quiz-cta-section">
              <div className="case-quiz-cta-card">
                <div className="quiz-cta-text">
                  <span className="pill-badge">
                    <CheckCircle size={14} /> Knowledge Verification
                  </span>
                  <h3 className="quiz-cta-title">Test Your Understanding on this Case</h3>
                  <p className="quiz-cta-desc">
                    Complete 5 targeted multiple-choice questions on this incident's technical mechanics, legal provisions, and best defenses.
                  </p>
                </div>
                <Link to={`/learn/${caseItem.slug}`} className="btn btn-primary quiz-cta-button">
                  Take Case Quiz <ArrowRight size={17} />
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
