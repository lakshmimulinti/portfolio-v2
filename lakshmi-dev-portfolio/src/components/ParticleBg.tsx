import React from 'react';

export const ParticleBg: React.FC = () => {
  // Generate floating particle dots dynamically
  const particles = Array.from({ length: 30 });

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: i % 2 === 0 ? '#f43f5e' : '#38bdf8',
              borderRadius: '50%',
              opacity: 0.6,
              boxShadow: '0 0 10px rgba(244, 63, 94, 0.8)',
              animation: `floatUp ${duration}s infinite linear`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};