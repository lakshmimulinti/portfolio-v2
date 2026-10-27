// src/components/StickyBg.tsx
import React from 'react';

export const StickyBg: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 15% 15%, rgba(15, 23, 42, 0.95) 0%, #0b0f17 80%)',
        backgroundColor: '#0b0f17',
        transition: 'background 0.5s ease',
      }}
    >
      {/* Top-left theme glowing ambient orb */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '5%',
          width: '580px',
          height: '580px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--bg-glow-1, rgba(6, 182, 212, 0.22)) 0%, transparent 68%)',
          filter: 'blur(75px)',
          opacity: 0.85,
          transition: 'background 0.5s ease',
        }}
      />

      {/* Center-right theme glowing ambient orb */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '-5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--bg-glow-2, rgba(56, 189, 248, 0.15)) 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.75,
          transition: 'background 0.5s ease',
        }}
      />

      {/* Bottom subtle ambient floor light */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '25%',
          width: '700px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--bg-glow-1, rgba(6, 182, 212, 0.15)) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.5,
          transition: 'background 0.5s ease',
        }}
      />
    </div>
  );
};