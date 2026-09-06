// src/components/Education.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    year: '2023 – 2024',
    title: 'Python Full Stack Developer Certification',
    inst: 'Naresh Institute of Technologies (Naresh i Technologies)',
    score: 'Distinction',
    desc: 'Python, Django, React.js, REST APIs, SQL, and End-to-End Application Architecture.',
    status: 'Industry Certified'
  },
  {
    year: '2023',
    title: 'Full Stack Web Development Certification',
    inst: 'Naresh Institute of Technologies',
    score: 'Certified',
    desc: 'Hands-on practical training on MERN/MEAN stack, PostgreSQL, and Cloud Deployment.',
    status: 'Completed'
  }
];

const academicData = [
  {
    year: '2021 – 2023',
    degree: 'Master of Computer Applications (MCA)',
    inst: 'Sri Sai College of IT & Management, Kadapa',
    score: '8.4 CGPA',
    desc: 'Advanced Algorithms, Database Management, and Enterprise Software Engineering.',
    status: 'Completed with Distinction'
  },
  {
    year: '2018 – 2021',
    degree: 'Bachelor of Science (B.Sc Computer Science)',
    inst: 'Sri Hari Degree College, Kadapa',
    score: '7.4 CGPA',
    desc: 'Data Structures, OOP Concepts, Web Technologies, and Operating Systems.',
    status: 'Completed'
  },
  {
    year: '2016 – 2018',
    degree: 'Intermediate (12th Standard - MPC)',
    inst: 'Government Junior College',
    score: '70%',
    desc: 'Mathematics, Physics, and Chemistry.',
    status: 'Completed'
  }
];

export const Education: React.FC = () => {
  return (
    <AnimatedSection id="education" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold text-light mb-1">Education & Certifications</h2>
        <p className="text-muted">Academic qualification timeline & professional certifications</p>
      </div>

      <div className="row g-4">
        {/* Left Column: Certifications */}
        <div className="col-lg-6">
          <div className="d-flex align-items-center gap-2 mb-4">
            <Award size={24} className="text-danger" />
            <h3 className="h5 text-light fw-bold mb-0">Professional Certifications</h3>
          </div>

          <div className="d-flex flex-column gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="card p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="year-pill">
                    Year: {cert.year}
                  </span>
                  <span className="score-pill">
                    {cert.score}
                  </span>
                </div>

                <div className="d-flex gap-3 align-items-start">
                  <div className="award-avatar-cert">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="h6 text-light fw-bold mb-1">{cert.title}</h4>
                    <p className="small text-info mb-2">{cert.inst}</p>
                    <p className="small text-muted mb-3">{cert.desc}</p>
                    
                    <div className="d-flex align-items-center gap-1 small text-success fw-semibold">
                      <CheckCircle2 size={15} /> {cert.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Qualifications */}
        <div className="col-lg-6">
          <div className="d-flex align-items-center gap-2 mb-4">
            <GraduationCap size={24} className="text-info" />
            <h3 className="h5 text-light fw-bold mb-0">Academic Qualification</h3>
          </div>

          <div className="d-flex flex-column gap-3">
            {academicData.map((edu, idx) => (
              <div key={idx} className="card p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="year-pill">
                    Passing Year: {edu.year}
                  </span>
                  <span className="score-pill">
                    {edu.score}
                  </span>
                </div>

                <div className="d-flex gap-3 align-items-start">
                  <div className="award-avatar-edu">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="h6 text-light fw-bold mb-1">{edu.degree}</h4>
                    <p className="small text-info mb-2">{edu.inst}</p>
                    <p className="small text-muted mb-3">{edu.desc}</p>
                    
                    <div className="d-flex align-items-center gap-1 small text-success fw-semibold">
                      <CheckCircle2 size={15} /> {edu.status}
                    </div>
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