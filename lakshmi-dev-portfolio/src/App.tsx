import React from 'react';
import { StickyBg } from './components/StickyBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import './styles/global.scss';

export const App: React.FC = () => {
  return (
    <div className="app-root" style={{ position: 'relative', zIndex: 1 }}>
      <CustomCursor />
      <StickyBg />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      {/* ✅ Complete Professional Footer with Social Media Links */}
      <Footer />
    </div>
  );
};

export default App;