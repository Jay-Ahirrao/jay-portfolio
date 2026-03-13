import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none bg-black overflow-hidden">
      
      {/* Primary Red Glow */}
      <motion.div
        className="absolute w-[120vw] h-[120vw] rounded-full opacity-30 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(225, 35, 35, 0.25) 0%, transparent 70%)',
          top: '-10%', 
          left: '-10%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          x: ['-20%', '10%', '-5%', '-10%'],
          y: ['-30%', '5%', '10%', '-10%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary Accent Glow (Purple/Crimson) */}
      <motion.div
        className="absolute w-[100vw] h-[100vw] rounded-full opacity-20 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(146, 51, 234, 0.3) 0%, transparent 70%)',
          bottom: '-20%', 
          right: '-20%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          x: ['10%', '-10%', '5%', '10%'],
          y: ['10%', '-5%', '-10%', '10%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Tertiary Violet Glow */}
      <motion.div
        className="absolute w-[90vw] h-[90vw] rounded-full opacity-25 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.25) 0%, transparent 70%)',
          top: '10%', 
          right: '-15%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          x: ['-10%', '15%', '-5%', '-10%'],
          y: ['10%', '-15%', '5%', '10%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center'
        }}
      />
    </div>
  );
};

export default Background;
