// src/components/Services.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Layout, Server, Database, Smartphone, Code, Search } from 'lucide-react';

const servicesList = [
  { icon: <Layout className="text-primary" size={32} />, title: 'Frontend Development', desc: 'Building responsive, performant UIs using React.js, Next.js, and Angular.' },
  { icon: <Server className="text-primary" size={32} />, title: 'Backend Development', desc: 'Developing scalable REST APIs & server logic using Node.js, Express.js & JWT Auth.' },
  { icon: <Database className="text-primary" size={32} />, title: 'Database Design', desc: 'Designing and optimizing PostgreSQL & MySQL database schemas for high performance.' },
  { icon: <Smartphone className="text-primary" size={32} />, title: 'Responsive UI Design', desc: 'Crafting pixel-perfect responsive layouts using Bootstrap, Material UI, HTML5, and CSS3.' },
  { icon: <Code className="text-primary" size={32} />, title: 'Full Stack Apps', desc: 'End-to-end development of e-commerce platforms and enterprise dashboards using the PERN stack.' },
  { icon: <Search className="text-primary" size={32} />, title: 'SEO & Performance', desc: 'Implementing Server-Side Rendering (SSR) with Next.js for improved SEO and faster page loading.' },
];

export const Services: React.FC = () => {
  return (
    <AnimatedSection id="services" className="container py-5 border-top border-secondary">
      <div className="text-center mb-5">
        <h2 className="text-light fw-bold" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9)' }}>
          My Services
        </h2>
        <p className="fs-6" style={{ color: '#f1f5f9', textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>
          What I offer for your business
        </p>
      </div>

      <div className="row g-4">
        {servicesList.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div 
              className="p-4 rounded-4 h-100 shadow-lg border border-secondary"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.92)', // High contrast solid card background
              }}
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="h5 text-light fw-bold mb-2">{service.title}</h3>
              
              {/* ✅ High Contrast Bright Text Styling */}
              <p 
                className="small mb-0" 
                style={{ 
                  color: '#e2e8f0', // Crisp bright off-white color
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  opacity: 1
                }}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};