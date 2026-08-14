// src/components/About.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { User, Mail, Phone, MapPin, GraduationCap, Globe, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  const personalInfo = [
    { icon: <User size={18} />, label: 'Age', value: '24 Years' },
    { icon: <GraduationCap size={18} />, label: 'Post Graduate', value: 'MCA (8.4 CGPA)' },
    { icon: <GraduationCap size={18} />, label: 'Degree', value: 'B.Sc Computer Science' },
    { icon: <Globe size={18} />, label: 'Website', value: 'lmportfolio.vercel.app' },
    { icon: <Mail size={18} />, label: 'Email', value: 'lakshmimulinti70@gmail.com' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+91 6303482296' },
    { icon: <MapPin size={18} />, label: 'City', value: 'Hyderabad, India' },
    { icon: <Briefcase size={18} />, label: 'Freelance', value: 'Available' },
  ];

  return (
    <AnimatedSection id="about" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="text-light fw-bold">About Me</h2>
        <p className="text-muted">Full Stack Developer with 1 Year Professional Experience</p>
      </div>

      <div className="row g-4 align-items-center">
       
<div className="col-lg-6">
  {/* Added a subtle dark glass wrapper for maximum contrast over robot body */}
  <div className="p-4 bg-dark border border-secondary rounded-4 shadow-lg">
    <h3 className="h4 text-light fw-bold mb-3">
      I'm Mulinti Lakshmi, <span className="text-primary">Full Stack Developer</span>
    </h3>
    <p className="text-light-50 leading-relaxed mb-3" style={{ color: '#e2e8f0', fontSize: '0.98rem' }}>
      Full Stack Developer with 1 year of hands-on experience in developing scalable and responsive web applications using React.js, Next.js, Angular, Node.js, Express.js, and PostgreSQL.
    </p>
    <p className="text-light-50 leading-relaxed mb-0" style={{ color: '#e2e8f0', fontSize: '0.98rem' }}>
      Skilled in frontend and backend architecture, REST API integration, JWT authentication, and high-performance databases. Experienced in building enterprise applications, banking dashboards, and live e-commerce platforms.
    </p>
  </div>
</div>

        <div className="col-lg-6">
          <div className="row g-3">
            {personalInfo.map((info, idx) => (
              <div key={idx} className="col-sm-6">
                <div className="p-3 bg-dark border border-secondary rounded-3 d-flex align-items-center gap-3">
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <span className="d-block text-muted fs-7">{info.label}</span>
                    <strong className="text-light fs-6">{info.value}</strong>
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