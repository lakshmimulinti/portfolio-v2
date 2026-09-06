// src/components/Hero.tsx
import React from 'react';
import styles from '../styles/components/hero.module.scss';
import profileImg from '../assets/profileimg.png';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={`container-fluid ${styles.heroSection} position-relative overflow-hidden py-4`}>
      <div className="container position-relative z-1 py-lg-4">
        <div className="row align-items-center g-5">
          
          {/* Left Column Text */}
          <div className="col-lg-7 text-center text-lg-start">
            
            {/* Status Pill with Increased Width and Padding */}
            <div 
              className="d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-pill mb-3"
              style={{
                background: 'rgba(7, 15, 30, 0.95)',
                border: '1.5px solid rgba(56, 189, 248, 0.45)',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.7)',
                minWidth: '340px'
              }}
            >
              <span 
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 10px #22c55e'
                }}
              />
              <span className="small fw-semibold" style={{ color: '#38bdf8', fontSize: '0.88rem' }}>
                Open for Software Developer Roles
              </span>
              <span className="text-secondary opacity-50">|</span>
              <span className="small d-inline-flex align-items-center gap-1" style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>
                <MapPin size={14} className="text-info" /> Hyderabad, India
              </span>
            </div>
            
            <h1 className="display-4 fw-bold text-light mb-2">
              Hi, I'm <span style={{ color: '#ff5e62' }}>Lakshmi Mulinti</span>
            </h1>
            
            {/* Updated to 1+ Years Track */}
            <h2 className="h4 text-info fw-semibold mb-4">
              Full Stack Developer <span className="text-secondary fs-6 fw-normal">| 1+ Years Track</span>
            </h2>
            
            {/* Colored Tech Skills Block */}
            <div 
              className="p-3.5 p-md-4 rounded-4 mb-4" 
              style={{ 
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.85) 100%)', 
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                lineHeight: '2.1'
              }}
            >
              <span className="text-light fs-6">
                I build scalable web applications using{' '}
              </span>
              <span className="badge mx-1 px-2.5 py-1 rounded-pill" style={{ background: 'rgba(97, 218, 251, 0.18)', color: '#61dafb', border: '1px solid #61dafb' }}>
                React.js
              </span>
              <span className="badge mx-1 px-2.5 py-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff', border: '1px solid #ffffff' }}>
                Next.js
              </span>
              <span className="badge mx-1 px-2.5 py-1 rounded-pill" style={{ background: 'rgba(221, 0, 49, 0.2)', color: '#ff4d4d', border: '1px solid #ff4d4d' }}>
                Angular
              </span>
              <span className="badge mx-1 px-2.5 py-1 rounded-pill" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', border: '1px solid #38bdf8' }}>
                Python
              </span>
              <span className="badge mx-1 px-2.5 py-1 rounded-pill" style={{ background: 'rgba(104, 160, 99, 0.2)', color: '#4ade80', border: '1px solid #4ade80' }}>
                Node.js
              </span>
              <span className="badge mx-1 px-2.5 py-1 rounded-pill" style={{ background: 'rgba(51, 103, 145, 0.25)', color: '#60a5fa', border: '1px solid #60a5fa' }}>
                PostgreSQL
              </span>
              <span className="text-light-50 fs-6 d-block mt-2" style={{ color: '#cbd5e1' }}>
                Passionate about delivering responsive UIs, high-performance architectures, and robust backend APIs.
              </span>
            </div>

            {/* CTAs: High Contrast Download CV Button */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a 
                href="https://drive.google.com/file/d/1uT2OQvJhYTh76Vtn7Ko_e-QXCwl8C1w8/view" 
                target="_blank" 
                rel="noreferrer" 
                className="btn px-4 py-2.5 rounded-pill fw-bold shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 4px 15px rgba(14, 165, 233, 0.4)'
                }}
              >
                Download CV
              </a>
              <a 
                href="#projects" 
                className="btn px-4 py-2.5 rounded-pill fw-bold shadow-sm text-white"
                style={{ 
                  background: 'linear-gradient(135deg, #ff5e62 0%, #ff9966 100%)', 
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(255, 94, 98, 0.35)'
                }}
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right Column: Circular Profile Avatar */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div 
              style={{
                position: 'relative',
                width: '310px',
                height: '310px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 94, 98, 0.35) 0%, rgba(56, 189, 248, 0.25) 55%, transparent 75%)',
                  filter: 'blur(22px)',
                  zIndex: 0
                }}
              />

              <div 
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #ff5e62 0%, #38bdf8 50%, #818cf8 100%)',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: '#0f172a'
                  }}
                >
                  <img 
                    src={profileImg} 
                    alt="Lakshmi Mulinti" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transform: 'scale(1.05)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};