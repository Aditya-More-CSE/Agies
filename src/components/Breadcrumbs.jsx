import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumbs.css';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="agies-breadcrumbs" aria-label="Breadcrumb navigation">
      <Link to="/" className="breadcrumb-link breadcrumb-home" aria-label="Home">
        <Home size={14} />
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={13} className="breadcrumb-separator" />
          {item.link ? (
            <Link to={item.link} className="breadcrumb-link">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumb-current" aria-current="page">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
