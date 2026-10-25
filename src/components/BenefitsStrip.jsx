import React from 'react';
import { BookOpen, Scale, Lightbulb, ShieldCheck } from 'lucide-react';
import './BenefitsStrip.css';

export default function BenefitsStrip() {
  const benefits = [
    {
      icon: <BookOpen size={24} />,
      colorClass: 'benefit-blue',
      title: 'Real Incidents',
      subtitle: 'From around the world'
    },
    {
      icon: <Scale size={24} />,
      colorClass: 'benefit-green',
      title: 'Clear Legal Insights',
      subtitle: 'In simple language'
    },
    {
      icon: <Lightbulb size={24} />,
      colorClass: 'benefit-yellow',
      title: 'Practical Guidance',
      subtitle: 'For a safer digital life'
    },
    {
      icon: <ShieldCheck size={24} />,
      colorClass: 'benefit-red',
      title: 'Free for Everyone',
      subtitle: 'Learn. Protect. Share.'
    }
  ];

  return (
    <section className="benefits-strip-wrapper" aria-label="Key Benefits">
      <div className="benefits-container">
        {benefits.map((item, idx) => (
          <div key={idx} className="benefit-item">
            <div className={`benefit-icon-box ${item.colorClass}`}>
              {item.icon}
            </div>
            <div className="benefit-text">
              <h4 className="benefit-title">{item.title}</h4>
              <p className="benefit-subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
