// src/components/Portfolio.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ExternalLink } from 'lucide-react';

import hostelImg from '../assets/hostel.png';
import talentImg from '../assets/talent.png';
import webDesignImg from '../assets/websitesdesign.png';
import profileImg from '../assets/profileimg.jpg';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  objectPosition?: string; // Custom positioning for image focus
}

const projectData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Hostel Hub Management System',
    description: 'Full stack web application built for managing hostels, bookings, and resident services efficiently with robust dynamic data handling.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    image: hostelImg,
    liveUrl: 'https://hostel-project-1-3ubc.onrender.com/',
    objectPosition: 'center'
  },
  {
    id: 'proj-2',
    title: 'Talent Graph Platform',
    description: 'Modern Full-Stack web platform designed to analyze, visualize, and manage talent skills, profiles, and enterprise developer analytics.',
    tags: ['React.js', 'TypeScript', 'Node.js', 'REST APIs'],
    image: talentImg,
    liveUrl: 'https://talent-graph-frontend.onrender.com/',
    objectPosition: 'center'
  },
  {
    id: 'proj-3',
    title: 'India Files Management Portal',
    description: 'A comprehensive document management & file organization platform built for fast searching, dynamic uploads, and enterprise security.',
    tags: ['React.js', 'JavaScript', 'Node.js', 'Express.js'],
    image: webDesignImg,
    liveUrl: 'https://indiafileswebsite-1.onrender.com/',
    objectPosition: 'center'
  },
  {
    id: 'proj-4',
    title: 'Lakshmi Mulinti Portfolio V1',
    description: 'My official personal developer portfolio showcasing skills, full-stack projects, interactive tools, and direct contact integration.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    image: profileImg,
    liveUrl: 'https://lmportfolio.vercel.app',
    objectPosition: 'top center' // 👈 Face & Head 100% visible avvadaniki top positioning
  }
];

export const Portfolio: React.FC = () => {
  return (
    <AnimatedSection id="projects" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="text-light fw-bold" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9)' }}>
          Featured Projects
        </h2>
        <p className="fs-6" style={{ color: '#f1f5f9', textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>
          Real-world applications and platforms I have built
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {projectData.map((proj) => (
          <div key={proj.id} className="col-md-6">
            <a 
              href={proj.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none d-block h-100"
            >
              <div 
                className="card h-100 rounded-4 overflow-hidden shadow-lg border-secondary transition-all"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.92)',
                  cursor: 'pointer'
                }}
              >
                {/* Project Image Banner */}
                <div 
                  style={{ 
                    height: '220px', 
                    overflow: 'hidden', 
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    position: 'relative'
                  }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: proj.objectPosition || 'top center' // 👈 Corrects crop focus
                    }}
                  />
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h3 className="h5 text-light fw-bold mb-0">{proj.title}</h3>
                      <ExternalLink size={18} className="text-primary flex-shrink-0 ms-2" />
                    </div>
                    
                    <p className="small mt-2 mb-3" style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="d-flex gap-2 flex-wrap my-2">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="badge bg-secondary text-primary px-2.5 py-1.5 fs-7">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="btn btn-primary btn-sm w-100 mt-3 fw-semibold d-flex align-items-center justify-content-center gap-2">
                      Live Demo <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};