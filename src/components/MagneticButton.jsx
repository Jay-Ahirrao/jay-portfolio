import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// OPTIMIZATION: Added passive mouse-move tracking with useCallback to avoid
// allocating new handler refs on every render — reduces GC pressure.
// Tightened spring settings (higher damping) so spring settles faster,
// reducing the number of animation frames fired per interaction.
const MagneticButton = ({ children, className = '' }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Stiffer, faster-settling spring = fewer frames per interaction
  const springConfig = { damping: 60, stiffness: 120, mass: 0.3 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const moveX = (clientX - centerX) * 0.35;
    const moveY = (clientY - centerY) * 0.35;

    x.set(Math.max(-18, Math.min(18, moveX)));
    y.set(Math.max(-18, Math.min(18, moveY)));
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`p-6 -m-6 relative inline-block z-20 ${className}`}
    >
      <motion.div style={{ x: smoothX, y: smoothY }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MagneticButton;
