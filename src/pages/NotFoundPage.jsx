import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, Search } from 'lucide-react';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-card">
          <div className="not-found-icon-box">
            <ShieldAlert size={48} />
          </div>
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The destination you are trying to reach does not exist or may have been relocated.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> Return to Home
            </Link>
            <Link to="/cases" className="btn btn-secondary">
              <Search size={16} /> Explore Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
