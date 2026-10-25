import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ExternalLink, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="agies-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand and Mission */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <svg className="footer-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,7 32,31 27,31 20,17 13,31 8,31" fill="url(#footerLogoGrad)"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="8" y1="7" x2="32" y2="31" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="35%" stopColor="#34A853" />
                    <stop offset="70%" stopColor="#FBBC05" />
                    <stop offset="100%" stopColor="#EA4335" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="footer-brand-name">AGIES</span>
            </div>
            <p className="footer-tagline">
              REAL INCIDENTS. CLEAR LAWS. A SAFER DIGITAL YOU.
            </p>
            <p className="footer-desc">
              An interactive academic educational explorer analyzing documented cybercrime cases, corresponding legal frameworks, and digital hygiene practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/cases">Explore Case Studies</Link></li>
              <li><Link to="/learn">Interactive Quizzes</Link></li>
              <li><Link to="/help">Help & Support Channels</Link></li>
            </ul>
          </div>

          {/* Case Categories */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Threat Domains</h4>
            <ul className="footer-links-list">
              <li><Link to="/cases?category=Data+Breach">Data Breaches</Link></li>
              <li><Link to="/cases?category=Ransomware">Ransomware Attacks</Link></li>
              <li><Link to="/cases?category=Online+Fraud">Financial & UPI Scams</Link></li>
              <li><Link to="/cases?category=Identity+Theft">Identity Theft & Deepfakes</Link></li>
              <li><Link to="/cases?category=Cyber+Espionage">Cyber Espionage</Link></li>
            </ul>
          </div>

          {/* Official Emergency & Reporting */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Emergency Reporting</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="external-link">
                  National Cyber Crime Portal <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="tel:1930" className="external-link">
                  Financial Fraud Helpline: <strong>1930</strong>
                </a>
              </li>
              <li>
                <a href="tel:112" className="external-link">
                  Police Emergency: <strong>112</strong>
                </a>
              </li>
              <li>
                <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer" className="external-link">
                  CERT-In Advisories <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="footer-disclaimer-box">
          <div className="disclaimer-header">
            <AlertCircle size={16} className="disclaimer-icon" />
            <span>Academic Educational Disclaimer</span>
          </div>
          <p>
            AGIES is strictly an educational case study platform developed for Cyber Security & Cyber Law academic study. 
            The case analyses, statutory provisions, and quiz questions are for informational and pedagogical purposes only and do not constitute formal legal counsel, incident response services, or official police reporting channels.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AGIES — Cyber Law Case Study Explorer. Academic Engineering Project.</p>
          <div className="footer-badges">
            <span className="footer-pill">
              <ShieldCheck size={13} /> Documented Incidents
            </span>
            <span className="footer-pill">
              <BookOpen size={13} /> Jurisdiction Aware
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
