import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';
import './CaseCard.css';

export default function CaseCard({ caseItem, viewMode = 'grid' }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(caseItem.slug);

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Data Breach': return 'badge-data-breach';
      case 'Online Fraud': return 'badge-online-fraud';
      case 'Identity Theft': return 'badge-identity-theft';
      case 'Ransomware': return 'badge-ransomware';
      case 'Social Media': return 'badge-social-media';
      case 'Cyberbullying': return 'badge-cyberbullying';
      case 'Cyber Espionage': return 'badge-cyber-espionage';
      default: return 'pill-badge';
    }
  };

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(caseItem.slug);
  };

  return (
    <article className={`case-card ${viewMode === 'list' ? 'case-card-list' : 'case-card-grid'}`}>
      <Link to={`/cases/${caseItem.slug}`} className="card-link-wrapper" aria-label={`View case study: ${caseItem.title}`}>
        {/* Card Media Header */}
        <div className="card-media">
          <img 
            src={caseItem.image} 
            alt={caseItem.imageAlt || caseItem.title} 
            loading="lazy"
            className="card-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/cases/cambridge-analytica.svg';
            }}
          />
          <div className="card-overlay-top">
            <span className={`card-category-badge ${getCategoryClass(caseItem.category)}`}>
              {caseItem.category}
            </span>
            <button 
              type="button" 
              className={`bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
              onClick={handleBookmarkClick}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this case"}
              title={bookmarked ? "Bookmarked" : "Bookmark case"}
            >
              <Bookmark size={16} fill={bookmarked ? "#4285F4" : "none"} color={bookmarked ? "#4285F4" : "#FFFFFF"} />
            </button>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="card-content">
          <h3 className="card-title">{caseItem.title}</h3>
          <p className="card-summary">{caseItem.summary}</p>

          {/* Card Footer Meta */}
          <div className="card-footer">
            <div className="card-meta">
              <span className="meta-item">
                <Calendar size={14} className="meta-icon" />
                {caseItem.year}
              </span>
              <span className="meta-item">
                <Clock size={14} className="meta-icon" />
                {caseItem.estimatedReadTime}
              </span>
            </div>
            <div className="card-action-btn" aria-hidden="true">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
