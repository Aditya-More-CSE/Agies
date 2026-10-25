import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Grid, 
  List, 
  ShieldAlert, 
  CreditCard, 
  UserCheck, 
  Lock, 
  Share2, 
  MessageSquare, 
  Target, 
  ChevronDown,
  BarChart3,
  Bookmark
} from 'lucide-react';
import casesData from '../data/cases.json';
import CaseCard from '../components/CaseCard';
import EmptyState from '../components/EmptyState';
import { useBookmarks } from '../hooks/useBookmarks';
import './CasesPage.css';

export default function CasesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const urlCategory = searchParams.get('category') || 'All';

  const [searchTerm, setSearchTerm] = useState(urlQuery);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState('grid');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const { bookmarks } = useBookmarks();

  useEffect(() => {
    if (urlQuery !== searchTerm) {
      setSearchTerm(urlQuery);
    }
  }, [urlQuery]);

  useEffect(() => {
    if (urlCategory !== selectedCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  const categories = [
    { label: 'All', icon: null },
    { label: 'Data Breach', icon: <ShieldAlert size={14} className="cat-icon-red" /> },
    { label: 'Online Fraud', icon: <CreditCard size={14} className="cat-icon-yellow" /> },
    { label: 'Identity Theft', icon: <UserCheck size={14} className="cat-icon-purple" /> },
    { label: 'Ransomware', icon: <Lock size={14} className="cat-icon-green" /> },
    { label: 'Social Media', icon: <Share2 size={14} className="cat-icon-blue" /> },
    { label: 'Cyberbullying', icon: <MessageSquare size={14} className="cat-icon-pink" /> },
    { label: 'Cyber Espionage', icon: <Target size={14} className="cat-icon-cyan" /> },
  ];

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setShowBookmarksOnly(false);
    setMoreDropdownOpen(false);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (val.trim()) {
      searchParams.set('q', val.trim());
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  const filteredCases = useMemo(() => {
    return casesData.filter(c => {
      // Bookmarks filter
      if (showBookmarksOnly && !bookmarks.includes(c.slug)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && c.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Search term filter
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesSummary = c.summary.toLowerCase().includes(q);
        const matchesCategory = c.category.toLowerCase().includes(q);
        const matchesKeywords = c.keywords.some(k => k.toLowerCase().includes(q));
        const matchesJurisdiction = c.jurisdiction.toLowerCase().includes(q);
        const matchesLaws = c.laws.some(l => l.lawName.toLowerCase().includes(q) || l.section.toLowerCase().includes(q));

        if (!matchesTitle && !matchesSummary && !matchesCategory && !matchesKeywords && !matchesJurisdiction && !matchesLaws) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'latest') return parseInt(b.year) - parseInt(a.year);
      if (sortBy === 'oldest') return parseInt(a.year) - parseInt(b.year);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [selectedCategory, searchTerm, sortBy, showBookmarksOnly, bookmarks]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setShowBookmarksOnly(false);
    searchParams.delete('q');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="cases-page bg-gradient-hero">
      <div className="container">
        {/* Cases Page Header */}
        <div className="cases-hero-section">
          <div className="cases-hero-text">
            <span className="pill-kicker">EXPLORE. ANALYSE. LEARN. STAY SAFER.</span>
            <h1 className="cases-heading">
              Explore Case <span className="highlight-blue">Studies</span>
            </h1>
            <p className="cases-subheading">
              Discover real cybercrime incidents from around the world, understand the laws and learn how they were handled.
            </p>
          </div>

          <div className="cases-hero-visual">
            <div className="globe-card-frame">
              {/* Modern Cyber Globe Vector */}
              <svg className="globe-svg" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="200" rx="16" fill="#0B132B"/>
                <circle cx="160" cy="100" r="65" fill="#1C2541" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3"/>
                <ellipse cx="160" cy="100" rx="35" ry="65" fill="none" stroke="#38BDF8" strokeOpacity="0.6" strokeWidth="1.5"/>
                <line x1="95" y1="100" x2="225" y2="100" stroke="#38BDF8" strokeOpacity="0.6" strokeWidth="1.5"/>
                
                {/* Glowing Nodes & Arcs */}
                <path d="M120 70 Q160 50 200 80" stroke="#4285F4" strokeWidth="2" fill="none"/>
                <path d="M130 130 Q170 140 210 110" stroke="#34A853" strokeWidth="2" fill="none"/>
                <circle cx="120" cy="70" r="4" fill="#60A5FA"/>
                <circle cx="200" cy="80" r="4" fill="#60A5FA"/>
                <circle cx="130" cy="130" r="4" fill="#34D399"/>
                <circle cx="210" cy="110" r="4" fill="#F87171"/>
              </svg>

              <div className="globe-overlay-badge">
                <div className="globe-icon-box">
                  <BarChart3 size={18} />
                </div>
                <div>
                  <span className="badge-line-1">Real Cases</span>
                  <span className="badge-line-2">Global Perspective</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="cases-search-container">
          <div className="cases-search-box">
            <Search size={22} className="search-box-icon" />
            <input 
              type="text" 
              placeholder="Search cases (e.g. phishing, ransomware, data breach...)"
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search cases"
            />
            <button type="button" className="search-submit-btn" aria-label="Submit search">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="categories-pill-bar" role="tablist" aria-label="Filter cases by category">
          {categories.map((cat, idx) => {
            const isActive = selectedCategory.toLowerCase() === cat.label.toLowerCase() && !showBookmarksOnly;
            return (
              <button
                key={idx}
                type="button"
                className={`category-pill ${isActive ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat.label)}
                role="tab"
                aria-selected={isActive}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}

          {/* Bookmarks Toggle Pill */}
          <button
            type="button"
            className={`category-pill bookmark-pill ${showBookmarksOnly ? 'active' : ''}`}
            onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
          >
            <Bookmark size={14} fill={showBookmarksOnly ? "currentColor" : "none"} />
            <span>Saved ({bookmarks.length})</span>
          </button>
        </div>

        {/* Controls Bar: Count, Sort, Grid/List */}
        <div className="cases-toolbar">
          <div className="cases-count-label">
            Showing <strong>{filteredCases.length}</strong> {filteredCases.length === 1 ? 'case' : 'cases'}
            {showBookmarksOnly && <span className="filter-tag"> • Bookmarks Only</span>}
            {selectedCategory !== 'All' && <span className="filter-tag"> • {selectedCategory}</span>}
          </div>

          <div className="cases-controls-right">
            {/* Sort Control */}
            <div className="sort-control">
              <label htmlFor="sort-select" className="sort-label">Sort by</label>
              <div className="select-wrapper">
                <select 
                  id="sort-select" 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-dropdown"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="title">Title (A-Z)</option>
                </select>
                <ChevronDown size={14} className="select-caret" />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="view-toggle-group" role="group" aria-label="View layout switch">
              <button 
                type="button" 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                title="Grid view"
              >
                <Grid size={17} />
                <span>Grid</span>
              </button>
              <button 
                type="button" 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
                title="List view"
              >
                <List size={17} />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cases Grid / List Results */}
        {filteredCases.length > 0 ? (
          <div className={viewMode === 'list' ? 'cases-list-view' : 'cases-grid-view'}>
            {filteredCases.map(c => (
              <CaseCard key={c.id} caseItem={c} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No matching case studies" 
            message="We couldn't find any case studies matching your criteria. Try adjusting your search query or selecting 'All' categories."
            onReset={handleResetFilters}
          />
        )}
      </div>
    </div>
  );
}
