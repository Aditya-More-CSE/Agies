import React from 'react';
import { 
  Phone, 
  FileText, 
  Camera, 
  Link as LinkIcon, 
  ShieldCheck, 
  Lock, 
  ExternalLink,
  ShieldAlert,
  AlertCircle
} from 'lucide-react';
import './HelpPage.css';

export default function HelpPage() {
  return (
    <div className="help-page bg-gradient-hero">
      <div className="container">
        {/* Header Hero */}
        <section className="help-hero-section">
          <div className="help-hero-text">
            <span className="pill-badge help-kicker">Help & Support</span>
            <h1 className="help-heading">
              Need <span className="highlight-blue">Help?</span>
            </h1>
            <p className="help-subheading">
              Quick access to official resources if you experience a cybercrime or need guidance on staying safe online.
            </p>
          </div>

          <div className="help-hero-visual">
            <div className="help-shield-frame">
              <img 
                src="/images/illustrations/help-shield.png" 
                alt="Cyber Security Emergency Support Shield" 
                className="help-shield-image"
              />
            </div>
          </div>
        </section>

        {/* Section 01: Get Help */}
        <section className="help-content-section" aria-labelledby="get-help-heading">
          <div className="section-label-header">
            <span className="section-step-badge">01</span>
            <div className="section-step-icon-box">
              <Phone size={18} />
            </div>
            <div>
              <h2 id="get-help-heading" className="section-step-title">Get Help</h2>
              <p className="section-step-desc">Use these official channels to report cybercrimes or get support.</p>
            </div>
          </div>

          <div className="official-channels-grid">
            {/* Card 1: National Portal */}
            <div className="channel-card">
              <div className="channel-header-row">
                <div className="emblem-box">
                  <img 
                    src="/images/illustrations/india-emblem.png" 
                    alt="National Emblem of India" 
                    className="emblem-image" 
                  />
                </div>
                <div>
                  <h3 className="channel-title">National Cyber Crime Reporting Portal</h3>
                  <p className="channel-subtitle">Report online frauds, hacking, identity theft and other cybercrimes.</p>
                </div>
              </div>
              <div className="channel-card-footer">
                <a 
                  href="https://cybercrime.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-soft channel-action-btn"
                >
                  Visit Portal <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Card 2: Cybercrime Helpline 1930 */}
            <div className="channel-card">
              <div className="channel-header-row">
                <div className="phone-icon-circle bg-pink-soft">
                  <Phone size={22} className="text-red" />
                </div>
                <div>
                  <h3 className="channel-title">Cybercrime Helpline (India)</h3>
                  <div className="channel-highlight-number">1930</div>
                  <p className="channel-subtitle">For financial cyber fraud and online scams.</p>
                </div>
              </div>
              <div className="channel-card-footer">
                <a href="tel:1930" className="btn btn-soft channel-action-btn">
                  <Phone size={15} /> Call 1930
                </a>
              </div>
            </div>

            {/* Card 3: Emergency 112 */}
            <div className="channel-card">
              <div className="channel-header-row">
                <div className="police-crest-box">
                  <img 
                    src="/images/illustrations/police-crest.png" 
                    alt="Police Emergency Crest" 
                    className="police-crest-image" 
                  />
                </div>
                <div>
                  <h3 className="channel-title">Emergency Number (India)</h3>
                  <div className="channel-highlight-number">112</div>
                  <p className="channel-subtitle">For immediate police assistance in serious cyber-related cases.</p>
                </div>
              </div>
              <div className="channel-card-footer">
                <a href="tel:112" className="btn btn-soft channel-action-btn">
                  <Phone size={15} /> Call 112
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Before You Report */}
        <section className="help-content-section" aria-labelledby="before-report-heading">
          <div className="section-label-header">
            <span className="section-step-badge">02</span>
            <div className="section-step-icon-box">
              <FileText size={18} />
            </div>
            <div>
              <h2 id="before-report-heading" className="section-step-title">Before You Report</h2>
              <p className="section-step-desc">Keep these ready to make the reporting process easier and faster.</p>
            </div>
          </div>

          <div className="checklist-grid">
            {/* Guidance 1: Screenshots & Evidence */}
            <div className="guidance-card">
              <div className="guidance-icon-circle">
                <Camera size={22} />
              </div>
              <h3 className="guidance-title">Screenshots & Evidence</h3>
              <p className="guidance-desc">Save messages, emails, profiles or any relevant proof.</p>
            </div>

            {/* Guidance 2: Relevant Details */}
            <div className="guidance-card">
              <div className="guidance-icon-circle">
                <LinkIcon size={22} />
              </div>
              <h3 className="guidance-title">Relevant Details</h3>
              <p className="guidance-desc">Keep URLs, transaction IDs, phone numbers and dates.</p>
            </div>

            {/* Guidance 3: Account Information */}
            <div className="guidance-card">
              <div className="guidance-icon-circle">
                <ShieldCheck size={22} />
              </div>
              <h3 className="guidance-title">Account Information</h3>
              <p className="guidance-desc">Note the affected account or platform details.</p>
            </div>

            {/* Guidance 4: Stay Safe */}
            <div className="guidance-card">
              <div className="guidance-icon-circle">
                <Lock size={22} />
              </div>
              <h3 className="guidance-title">Stay Safe</h3>
              <p className="guidance-desc">Do not share OTPs, passwords or banking PINs with anyone.</p>
            </div>
          </div>
        </section>

        {/* Advisory Callout */}
        <div className="help-advisory-banner">
          <AlertCircle size={20} className="advisory-icon" />
          <div className="advisory-text">
            <strong>Critical Security Reminder:</strong> Genuine bank representatives, police officers, and portal staff will <em>NEVER</em> ask for your UPI PIN, online banking passwords, or OTPs under any circumstance.
          </div>
        </div>
      </div>
    </div>
  );
}
