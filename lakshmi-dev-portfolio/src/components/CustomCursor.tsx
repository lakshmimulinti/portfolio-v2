// src/components/CustomCursor.tsx
import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a precise pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .card, [tabindex="0"]')
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing ring loop
    let currentX = -100;
    let currentY = -100;
    const loop = () => {
      currentX += (position.x - currentX) * 0.18;
      currentY += (position.y - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animFrame = requestAnimationFrame(loop);
    };
    animFrame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central glow dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '12px' : '8px',
          height: isPointer ? '12px' : '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-color, #f43f5e)',
          boxShadow: '0 0 12px var(--primary-color, #f43f5e)',
          transform: `translate3d(${position.x - (isPointer ? 6 : 4)}px, ${position.y - (isPointer ? 6 : 4)}px, 0) scale(${isClicked ? 0.7 : 1})`,
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.25s ease, box-shadow 0.25s ease',
        }}
      />

      {/* Outer fluid trailing ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          borderRadius: '50%',
          border: '1.5px solid var(--primary-color, #f43f5e)',
          backgroundColor: isPointer ? 'var(--badge-bg, rgba(244, 63, 94, 0.12))' : 'transparent',
          transform: `translate3d(${trailingPos.x - (isPointer ? 24 : 16)}px, ${trailingPos.y - (isPointer ? 24 : 16)}px, 0) scale(${isClicked ? 0.85 : 1})`,
          pointerEvents: 'none',
          zIndex: 99998,
          backdropFilter: isPointer ? 'blur(2px)' : 'none',
          WebkitBackdropFilter: isPointer ? 'blur(2px)' : 'none',
          boxShadow: isPointer ? '0 0 18px var(--primary-glow, rgba(244, 63, 94, 0.4))' : 'none',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.25s ease, background-color 0.25s ease',
        }}
      />
    </>
  );
};
