import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ShieldAlert } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/cases?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="agies-navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" aria-label="AGIES Home">
          <svg className="brand-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L34 32H27L20 18L13 32H6L20 4Z" fill="#4285F4" />
            <path d="M6 32H13L16 26L9 26Z" fill="#EA4335" />
            <path d="M16 26L20 34L24 26L20 28Z" fill="#FBBC05" />
            <path d="M27 32H34L31 26L24 26Z" fill="#34A853" />
            <polygon points="20,7 32,31 27,31 20,17 13,31 8,31" fill="url(#navLogoGrad)"/>
            <defs>
              <linearGradient id="navLogoGrad" x1="8" y1="7" x2="32" y2="31" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4285F4" />
                <stop offset="35%" stopColor="#34A853" />
                <stop offset="70%" stopColor="#FBBC05" />
                <stop offset="100%" stopColor="#EA4335" />
              </linearGradient>
            </defs>
          </svg>
          <span className="brand-name">AGIES</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/cases" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Cases
          </NavLink>
          <NavLink to="/learn" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Learn
          </NavLink>
          <NavLink to="/help" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Help
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Search Trigger */}
          <button 
            type="button" 
            className="nav-icon-btn" 
            onClick={() => setSearchOpen(!searchOpen)} 
            aria-label="Search cases"
            title="Search cases"
          >
            <Search size={19} />
          </button>

          {/* Get Help CTA Button */}
          <Link to="/help" className="btn btn-primary nav-cta-btn">
            Get Help
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Global Quick Search Popup / Dropdown */}
      {searchOpen && (
        <div className="nav-search-overlay">
          <div className="container">
            <form onSubmit={handleSearchSubmit} className="nav-search-bar">
              <Search size={20} className="nav-search-icon" />
              <input 
                type="text" 
                placeholder="Search cybercrime cases, laws, or topics (e.g. ransomware, phishing, IT Act)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn-primary btn-sm">Search</button>
              <button type="button" className="btn-close-search" onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <NavLink to="/" end className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/cases" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Cases
            </NavLink>
            <NavLink to="/learn" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Learn
            </NavLink>
            <NavLink to="/help" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Help
            </NavLink>
            <div className="mobile-drawer-footer">
              <Link to="/help" className="btn btn-primary mobile-cta-btn" onClick={() => setMobileMenuOpen(false)}>
                <ShieldAlert size={18} />
                Get Help
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
