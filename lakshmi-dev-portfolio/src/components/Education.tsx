// src/components/Education.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Calendar, Award } from 'lucide-react';

const eduData = [
  { year: '2023', title: 'Full Stack Development Certification', inst: 'Naresh Institute of Technologies', grade: 'Industry Ready Certified' },
  { year: '2021 – 2023', title: 'Master of Computer Applications (MCA)', inst: 'Sri Sai College of IT & Management, Kadapa', grade: 'Grade: 8.4 CGPA' },
  { year: '2018 – 2021', title: 'B.Sc in Computer Science', inst: 'Sri Hari Degree College, Kadapa', grade: 'Grade: 7.4 CGPA' },
  { year: '2016 – 2018', title: 'Intermediate (MPC)', inst: 'Government Junior College', grade: 'Grade: 70%' },
];

export const Education: React.FC = () => {
  return (
    <AnimatedSection id="education" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="text-light fw-bold">Education</h2>
        <p className="text-muted">My academic qualification timeline</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="border-start border-primary border-2 ps-4 ms-2">
            {eduData.map((edu, idx) => (
              <div key={idx} className="mb-4 position-relative">
                <div className="position-absolute start-0 top-0 translate-middle-x bg-primary rounded-circle" style={{ width: '12px', height: '12px', marginLeft: '-25px', marginTop: '6px' }}></div>
                <div className="p-3 bg-dark border border-secondary rounded-3">
                  <span className="badge bg-secondary text-light mb-2"><Calendar size={12} className="me-1" /> {edu.year}</span>
                  <h3 className="h6 text-light fw-bold mb-1">{edu.title}</h3>
                  <p className="text-muted small mb-1">{edu.inst}</p>
                  <span className="text-primary small fw-semibold"><Award size={14} className="me-1" /> {edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};