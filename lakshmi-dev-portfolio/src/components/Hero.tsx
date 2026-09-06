// src/components/Hero.tsx
import React from 'react';
import styles from '../styles/components/hero.module.scss';
import profileImg from '../assets/profileimg.png';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={`container-fluid ${styles.heroSection} overflow-hidden`}>
      <div className="container position-relative z-1">
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Column Text Content */}
          <div className="col-lg-7 text-center text-lg-start">
            
            {/* Status Pill */}
            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Open for Software Developer Roles</span>
              <span className={styles.statusDivider}>|</span>
              <span className={styles.statusLocation}>
                <MapPin size={13} className="text-info" /> Hyderabad, India
              </span>
            </div>
            
            {/* Scaled Responsive Title */}
            <h1 className={`${styles.title} text-light mb-2`}>
              Hi, I'm <span className={styles.highlight}>Lakshmi Mulinti</span>
            </h1>
            
            <h2 className={styles.subtitle}>
              Full Stack Developer <span className="text-secondary fs-6 fw-normal">| 1+ Years Track</span>
            </h2>
            
            {/* Skills Card with Proper Interior Padding */}
            <div className={`card text-start ${styles.skillsCard}`}>
              <p className="text-light fs-6 mb-2">
                I build scalable web applications using{' '}
                <span className={`${styles.techPill} ${styles.react}`}>React.js</span>
                <span className={`${styles.techPill} ${styles.next}`}>Next.js</span>
                <span className={`${styles.techPill} ${styles.angular}`}>Angular</span>
                <span className={`${styles.techPill} ${styles.python}`}>Python</span>
                <span className={`${styles.techPill} ${styles.node}`}>Node.js</span>
                <span className={`${styles.techPill} ${styles.postgres}`}>PostgreSQL</span>
              </p>
              <p className="text-light-50 fs-6 mb-0">
                Passionate about delivering responsive UIs, high-performance architectures, and robust backend APIs.
              </p>
            </div>

            {/* Redesigned Button Actions */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a 
                href="https://drive.google.com/file/d/1uT2OQvJhYTh76Vtn7Ko_e-QXCwl8C1w8/view" 
                target="_blank" 
                rel="noreferrer" 
                className={styles.btnDownloadCv}
              >
                Download CV
              </a>
              <a 
                href="#projects" 
                className={styles.btnViewWork}
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right Column Profile Picture */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarAmbientGlow} />
              <div className={styles.avatarGradientRing}>
                <div className={styles.avatarCrop}>
                  <img 
                    src={profileImg} 
                    alt="Lakshmi Mulinti" 
                    className={styles.avatarImg}
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