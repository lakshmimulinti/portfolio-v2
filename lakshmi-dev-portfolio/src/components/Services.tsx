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
        <h2 className="display-6 fw-bold text-light mb-1">My Services</h2>
        <p className="text-muted">What I offer for your business</p>
      </div>

      <div className="row g-4">
        {servicesList.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="card p-4 h-100">
              <div className="mb-3">{service.icon}</div>
              <h3 className="h5 text-light fw-bold mb-2">{service.title}</h3>
              <p className="small text-light-50 mb-0">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};