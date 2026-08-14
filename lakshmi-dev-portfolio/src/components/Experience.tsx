// src/components/Experience.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="text-light fw-bold">Work Experience</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="p-4 bg-dark border border-secondary rounded-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <h3 className="h5 text-primary fw-bold mb-0">Full Stack Developer</h3>
              <span className="badge bg-secondary text-light px-3 py-2 rounded-pill">Jun 2025 – Present</span>
            </div>
            <h4 className="h6 text-light mb-3">Innostes Solutions Pvt Ltd — Hyderabad</h4>
            <ul className="text-light-50 small ps-3 mb-0" style={{ color: '#cbd5e1' }}>
              <li className="mb-2">Developed scalable E-Commerce Web Applications using React.js, Next.js, Node.js, and Express.js.</li>
              <li className="mb-2">Built enterprise-level Banking Dashboard Applications using Angular with real-time API integration.</li>
              <li className="mb-2">Designed secure REST APIs with JWT authentication and role-based authorization.</li>
              <li className="mb-2">Optimized PostgreSQL database queries for enhanced performance.</li>
            </ul>
          </div>

          <div className="p-4 bg-dark border border-secondary rounded-4">
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <h3 className="h5 text-primary fw-bold mb-0">Angular Developer Intern</h3>
              <span className="badge bg-secondary text-light px-3 py-2 rounded-pill">Apr 2024 – Jun 2024</span>
            </div>
            <h4 className="h6 text-light mb-3">VMANICO Technologies — Hyderabad</h4>
            <ul className="text-light-50 small ps-3 mb-0" style={{ color: '#cbd5e1' }}>
              <li className="mb-2">Developed responsive UI components and dashboards using Angular, TypeScript, HTML5, and CSS3.</li>
              <li className="mb-2">Integrated REST APIs for dynamic data rendering and component-based architecture.</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};