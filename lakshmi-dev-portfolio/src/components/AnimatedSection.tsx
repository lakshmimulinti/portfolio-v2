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
      initial={{ opacity: 0, y: 50, scale: 0.100 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.04 }} 
      transition={{ 
        type: 'spring',
        stiffness: 300, 
        damping: 24,     
        mass: 0.4
      }}
    >
      {children}
    </motion.section>
  );
};