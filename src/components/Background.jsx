import React from 'react';

// OPTIMIZATION: Removed Framer Motion animated glows that were causing
// heavy GPU load via continuous blur+transform animations on 120vw elements.
// Replaced with pure CSS animations (runs on compositor thread, no JS overhead).
// This alone eliminates the #1 source of lag.
const Background = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none bg-black overflow-hidden">
      
      {/* Primary Red Glow — CSS animated, GPU composited */}
      <div
        className="absolute rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(225, 35, 35, 0.38) 0%, transparent 70%)',
          width: '90vw',
          height: '90vw',
          top: '-20%',
          left: '-20%',
          willChange: 'transform',
          animation: 'glow1 18s ease-in-out infinite alternate',
        }}
      />

      {/* Secondary Purple Glow */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(147, 53, 235, 0.31) 0%, transparent 70%)',
          width: '80vw',
          height: '80vw',
          bottom: '-25%',
          right: '-20%',
          willChange: 'transform',
          animation: 'glow2 25s ease-in-out infinite alternate',
        }}
      />

      {/* Tertiary Violet Glow */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(137, 43, 226, 0.34) 0%, transparent 70%)',
          width: '70vw',
          height: '70vw',
          top: '20%',
          right: '-10%',
          willChange: 'transform',
          animation: 'glow3 20s ease-in-out infinite alternate',
        }}
      />

      {/* Grid Lines Overlay — static, zero runtime cost */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* CSS keyframes injected once */}
      <style>{`
        @keyframes glow1 {
          0%   { transform: translate(0%, 0%) translateZ(0); }
          100% { transform: translate(15%, 12%) translateZ(0); }
        }
        @keyframes glow2 {
          0%   { transform: translate(0%, 0%) translateZ(0); }
          100% { transform: translate(-12%, -10%) translateZ(0); }
        }
        @keyframes glow3 {
          0%   { transform: translate(0%, 0%) translateZ(0); }
          100% { transform: translate(-10%, 8%) translateZ(0); }
        }
      `}</style>
    </div>
  );
};

export default Background;
