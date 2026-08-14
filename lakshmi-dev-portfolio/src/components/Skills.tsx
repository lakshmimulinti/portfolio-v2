// src/components/Skills.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const skillsData = [
  { name: 'React.js / Next.js', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Node.js / Express', category: 'Backend' },
  { name: 'JavaScript / TypeScript', category: 'Languages' },
  { name: 'PostgreSQL / MySQL', category: 'Database' },
  { name: 'HTML5 / SCSS / Bootstrap', category: 'Frontend' },
  { name: 'REST APIs / JWT', category: 'Backend' },
  { name: 'Python', category: 'Languages' },
];

export const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="text-light fw-bold" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9)' }}>
          Technical Skills
        </h2>
        <p className="fs-6" style={{ color: '#f1f5f9', textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>
          Technologies & tools I work with
        </p>
      </div>

      <div className="row g-3 justify-content-center">
        {skillsData.map((skill, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
            <div 
              className="p-3 text-center rounded-4 shadow-lg h-100 d-flex flex-column align-items-center justify-content-center skill-card"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.88)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <h3 className="h6 text-light fw-bold mb-2">{skill.name}</h3>
              
              <span className="badge rounded-pill">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};