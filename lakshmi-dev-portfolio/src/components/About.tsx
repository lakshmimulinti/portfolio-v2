// src/components/About.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { User, Mail, Phone, MapPin, GraduationCap, Globe, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  const personalInfo = [
    { 
      icon: <User size={18} />, 
      label: 'Age', 
      value: '24 Years', 
      color: '#38bdf8', 
      bg: 'rgba(56, 189, 248, 0.15)' 
    },
    { 
      icon: <GraduationCap size={18} />, 
      label: 'Post Graduate', 
      value: 'MCA (8.4 CGPA)', 
      color: '#fbbf24', 
      bg: 'rgba(251, 191, 36, 0.15)' 
    },
    { 
      icon: <GraduationCap size={18} />, 
      label: 'Degree', 
      value: 'B.Sc Computer Science', 
      color: '#f43f5e', 
      bg: 'rgba(244, 63, 94, 0.15)' 
    },
    { 
      icon: <Globe size={18} />, 
      label: 'Website', 
      value: 'lmportfolio.vercel.app', 
      color: '#a855f7', 
      bg: 'rgba(168, 85, 247, 0.15)' 
    },
    { 
      icon: <Mail size={18} />, 
      label: 'Email', 
      value: 'lakshmimulinti70@gmail.com', 
      color: '#ef4444', 
      bg: 'rgba(239, 68, 68, 0.15)' 
    },
    { 
      icon: <Phone size={18} />, 
      label: 'Phone', 
      value: '+91 6303482296', 
      color: '#06b6d4', 
      bg: 'rgba(6, 182, 212, 0.15)' 
    },
    { 
      icon: <MapPin size={18} />, 
      label: 'City', 
      value: 'Hyderabad, India', 
      color: '#10b981', 
      bg: 'rgba(16, 185, 129, 0.15)' 
    },
    { 
      icon: <Briefcase size={18} />, 
      label: 'Freelance', 
      value: 'Available', 
      color: '#ec4899', 
      bg: 'rgba(236, 72, 153, 0.15)' 
    },
  ];

  return (
    <AnimatedSection id="about" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold text-light mb-1">About Me</h2>
        <p className="text-muted">Full Stack Developer with 1+ Years Experience Track</p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* Left Column Bio */}
        <div className="col-lg-6">
          <div className="card p-4 p-md-5 h-100 d-flex flex-column justify-content-center">
            <h3 className="h4 text-light fw-bold mb-3">
              I'm Mulinti Lakshmi, <span style={{ color: '#ff5e62' }}>Full Stack Developer</span>
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }} className="mb-3">
              Full Stack Developer specializing in building enterprise-scale, resilient, and high-performance applications with React.js, Next.js, Angular, Node.js, Python, and PostgreSQL.
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }} className="mb-0">
              Skilled in modern frontend-backend micro-architectures, REST API design, JWT session management, and database optimization. Experienced in developing enterprise dashboards, banking solutions, and high-traffic web apps.
            </p>
          </div>
        </div>

        {/* Right Column: Info Grid with Colorful Rounded Icons */}
        <div className="col-lg-6">
          <div className="row g-3">
            {personalInfo.map((info, idx) => (
              <div key={idx} className="col-sm-6">
                <div className="card p-3 d-flex flex-row align-items-center gap-3">
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: info.bg,
                      color: info.color,
                      border: `1.5px solid ${info.color}55`,
                      flexShrink: 0
                    }}
                  >
                    {info.icon}
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <span className="d-block text-muted" style={{ fontSize: '0.78rem' }}>{info.label}</span>
                    <strong className="text-light text-truncate d-block" style={{ fontSize: '0.88rem' }}>
                      {info.value}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};