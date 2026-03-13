import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = "" }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring settings for a very snappy, satisfying magnetic pull and snap back
  const springConfig = { damping: 50, stiffness: 100, mass: 0.4 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate movement (damped by 0.4 so it doesn't instantly snap to cursor)
    const moveX = (clientX - centerX) * 0.4;
    const moveY = (clientY - centerY) * 0.4;

    // Cap the movement distance to 20px as requested
    x.set(Math.max(-20, Math.min(20, moveX)));
    y.set(Math.max(-20, Math.min(20, moveY)));
  };

  const handleMouseLeave = () => {
    // Snap back to 0 instantly
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Using padding and negative margin gives the button an "invisible" magnetic field around it
      // so if you miss the button by a bit, it still pulls towards your cursor.
      className={`p-6 -m-6 relative inline-block z-20 ${className}`}
    >
      <motion.div style={{ x: smoothX, y: smoothY }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MagneticButton;
