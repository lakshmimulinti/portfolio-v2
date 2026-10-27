
import React, { useState, useEffect } from 'react';
import styles from '../styles/components/navbar.module.scss';
import { Palette } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'rose' | 'cyan' | 'emerald'>(() => {
    const saved = localStorage.getItem('user-theme');
    if (saved === 'cyan' || saved === 'emerald' || saved === 'rose') {
      return saved;
    }
    return 'rose';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <nav className={`navbar navbar-expand-lg py-2 px-4 ${styles.navbar}`}>
        <a href="#home" className={styles.logo}>
          LAKSHMI<span>.dev</span>
        </a>

        {/* 3-Theme Switcher Controls */}
        <div className="d-flex align-items-center gap-2 ms-auto me-3 me-lg-0 order-lg-last">
          <div className="d-flex align-items-center gap-1.5 p-1 bg-dark border border-secondary rounded-pill me-2">
            <Palette size={14} className="text-muted ms-1 me-1" />
            
            {/* Rose Dot */}
            <button
              type="button"
              onClick={() => setTheme('rose')}
              className="btn p-0 rounded-circle"
              style={{ 
                width: '18px', 
                height: '18px', 
                backgroundColor: '#f43f5e',
                boxShadow: theme === 'rose' ? '0 0 0 2px #ffffff, 0 0 10px #f43f5e' : 'none',
                transform: theme === 'rose' ? 'scale(1.15)' : 'scale(1)',
                transition: 'all 0.2s ease'
              }}
              title="Rose Theme"
              aria-label="Switch to Rose Theme"
            />
            
            {/* Cyan Dot */}
            <button
              type="button"
              onClick={() => setTheme('cyan')}
              className="btn p-0 rounded-circle"
              style={{ 
                width: '18px', 
                height: '18px', 
                backgroundColor: '#06b6d4',
                boxShadow: theme === 'cyan' ? '0 0 0 2px #ffffff, 0 0 10px #06b6d4' : 'none',
                transform: theme === 'cyan' ? 'scale(1.15)' : 'scale(1)',
                transition: 'all 0.2s ease'
              }}
              title="Cyan Theme"
              aria-label="Switch to Cyan Theme"
            />
            
            {/* Emerald Dot */}
            <button
              type="button"
              onClick={() => setTheme('emerald')}
              className="btn p-0 rounded-circle"
              style={{ 
                width: '18px', 
                height: '18px', 
                backgroundColor: '#10b981',
                boxShadow: theme === 'emerald' ? '0 0 0 2px #ffffff, 0 0 10px #10b981' : 'none',
                transform: theme === 'emerald' ? 'scale(1.15)' : 'scale(1)',
                transition: 'all 0.2s ease'
              }}
              title="Emerald Theme"
              aria-label="Switch to Emerald Theme"
            />
          </div>

          <a href="#contact" className="btn btn-primary rounded-pill px-3 py-1.5 btn-sm fw-bold d-none d-sm-inline-block">
            Hire Me
          </a>
        </div>

        <button 
          className="navbar-toggler border-0 text-light" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 align-items-center me-lg-3">
            <li className="nav-item"><a href="#home" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</a></li>
            <li className="nav-item"><a href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</a></li>
            <li className="nav-item"><a href="#services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</a></li>
            <li className="nav-item"><a href="#skills" className={styles.navLink} onClick={() => setIsOpen(false)}>Skills</a></li>
            <li className="nav-item"><a href="#education" className={styles.navLink} onClick={() => setIsOpen(false)}>Education</a></li>
            <li className="nav-item"><a href="#experience" className={styles.navLink} onClick={() => setIsOpen(false)}>Experience</a></li>
            <li className="nav-item"><a href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>Projects</a></li>
            <li className="nav-item"><a href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};