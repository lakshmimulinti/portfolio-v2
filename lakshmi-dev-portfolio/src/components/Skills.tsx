// src/components/Skills.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import styles from '../styles/components/skills.module.scss';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  TerminalSquare 
} from 'lucide-react';

const skillsList = [
  { name: 'React.js / Next.js', category: 'Frontend', icon: <Layers size={22} className="text-info" /> },
  { name: 'Angular', category: 'Frontend', icon: <Code2 size={22} className="text-danger" /> },
  { name: 'Node.js / Express', category: 'Backend', icon: <Server size={22} className="text-success" /> },
  { name: 'JavaScript / TypeScript', category: 'Languages', icon: <TerminalSquare size={22} className="text-warning" /> },
  { name: 'PostgreSQL / MySQL', category: 'Database', icon: <Database size={22} className="text-primary" /> },
  { name: 'HTML5 / SCSS / Bootstrap', category: 'Frontend', icon: <Globe2 size={22} className="text-warning" /> },
  { name: 'REST APIs / JWT Auth', category: 'Backend Security', icon: <ShieldCheck size={22} className="text-danger" /> },
  { name: 'Python (Full Stack)', category: 'Core & Architecture', icon: <Cpu size={22} className="text-info" /> }
];

export const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold text-light mb-1">Technical Skills</h2>
        <p className="text-muted">Technologies, frameworks, and architecture tools I work with</p>
      </div>

      <div className="row g-4">
        {skillsList.map((skill, idx) => (
          <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
            <div className={`${styles.skillCard} p-3 d-flex flex-row align-items-center gap-3 h-100`} tabIndex={0}>
              <div className={styles.iconBox}>
                {skill.icon}
              </div>
              <div>
                <h3 className={styles.skillTitle}>
                  {skill.name}
                </h3>
                <span className={styles.skillCategory}>
                  {skill.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};