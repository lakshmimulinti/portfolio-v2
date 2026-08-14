// src/components/Hero.tsx
import React from 'react';
import styles from '../styles/components/hero.module.scss';
import profileImg from '../assets/profileimg.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={`container-fluid ${styles.heroSection} position-relative overflow-hidden`}>
      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center">
          
          {/* Left Column Text */}
          <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
            <span className={styles.badge}>👋 Welcome to my portfolio</span>
            
            <h1 className={`${styles.title} mt-3 mb-2`}>
              Hi, I'm <span className={styles.highlight}>Lakshmi Mulinti</span>
            </h1>
            
            <h2 className="text-light h4 mb-3">Full Stack Developer</h2>
            
            <p className="description lead fs-6 max-w-lg mb-4">
              I build scalable web applications using{' '}
              <strong>React.js, Next.js, Angular, Node.js, and PostgreSQL</strong>. 
              Passionate about delivering responsive UIs and robust backend APIs.
            </p>

            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a 
                href="https://drive.google.com/file/d/1uT2OQvJhYTh76Vtn7Ko_e-QXCwl8C1w8/view" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-dark border-light px-4 py-3 fw-semibold shadow-lg"
              >
                Download CV
              </a>
              <a href="#projects" className="btn btn-primary px-4 py-3 fw-semibold shadow-lg">
                View Work
              </a>
            </div>
          </div>

          {/* Right Column: Image WITH Cloud Background Layer */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className={styles.imageWrapper}>
              {/* Animated Cloud Glow Effect Behind Image */}
              <div className={styles.cloudGlow}></div>
              
              <div className={styles.imageCard}>
                <img src={profileImg} alt="Lakshmi Mulinti" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};