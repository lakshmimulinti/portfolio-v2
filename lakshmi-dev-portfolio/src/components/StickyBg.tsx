// src/components/StickyBg.tsx
import React from 'react';
import robotVideo from '../assets/robot-bg.mp4';

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
        backgroundColor: '#ffffff' // Pure bright fallback
      }}
    >
      {/* 1. Original Video - No Filters, No Brightness Reduction */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1, // Full 100% video clarity
        }}
      >
        <source src={robotVideo} type="video/mp4" />
      </video>
    </div>
  );
};