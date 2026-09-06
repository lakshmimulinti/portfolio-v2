// src/components/Footer.tsx
import React from 'react';
import { Mail, Heart } from 'lucide-react';
import styles from '../styles/components/navbar.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section border-top border-secondary py-5 text-light position-relative z-1">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-lg-4 text-center text-lg-start">
            <a href="#home" className={`${styles.logo} text-decoration-none fs-4 fw-bold`}>
              LAKSHMI<span>.dev</span>
            </a>
            <p className="text-light-50 small mt-2 mb-0">
              Full Stack Developer specializing in building responsive, high-performance web applications using React, Angular, Node.js, and PostgreSQL.
            </p>
          </div>

          {/* Column 2: Quick Links with Orange Glow Hover */}
          <div className="col-lg-4 text-center">
            <div className="d-flex gap-2 justify-content-center flex-wrap mb-3">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <p className="text-muted small mb-0">
              Designed & Developed with <Heart size={13} className="text-danger d-inline mx-1" /> by Lakshmi Mulinti
            </p>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="col-lg-4 text-center text-lg-end">
            <h4 className="h6 text-light fw-semibold mb-3">Connect with me</h4>
            <div className="d-flex gap-2 justify-content-center justify-content-lg-end">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/lakshmi-mulinti-aaba97296" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/lakshmimulinti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:lakshmimulinti70@gmail.com" 
                className="footer-social-btn"
                title="Email Me"
              >
                <Mail size={18} className="text-warning" />
              </a>

            </div>
          </div>

        </div>

        <hr className="border-secondary my-4 opacity-25" />

        <div className="text-center text-muted small">
          © {new Date().getFullYear()} Lakshmi Mulinti. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};