// src/components/AnimatedSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const AnimatedSection: React.FC<Props> = ({ children, className = '', id }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};