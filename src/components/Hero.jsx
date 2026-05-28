import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight, Code2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = ({ onOpenContact }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20 overflow-hidden text-center lg:text-left">

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Original Violet Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        {/* Offset Red Glow */}
        <div className="absolute top-[55%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/7 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 xl:px-12 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left Column ── */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-1 relative z-20"
          >

            {/* Pre‑tag */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-green-400 font-bold">
                  Available for work
                </span>
              </div>
              <span className="h-[1px] w-8 bg-white/20 hidden sm:block"></span>
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">Full Stack Developer</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-[4rem] sm:text-6xl lg:text-[6.5rem] font-medium leading-[0.9] tracking-[-0.04em] mb-4 text-white">
              <span className="text-white">Jay</span>{' '}
              <span
                className="italic text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-600"
                style={{ fontFamily: '"Marcellus", serif', paddingRight: '0.18em' }}
              >
                Ahirrao
              </span>
              <span className="animate-gradient-text">.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-200 mb-8">
              Crafting{' '}
              <span className="italic animate-gradient-text" style={{ fontFamily: '"Playfair Display", serif', paddingRight: '4px' }}>
                scalable
              </span>{' '}
              systems.
            </motion.h2>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-12 leading-[1.8]">
              I specialize in building robust backend architectures and highly performant web applications that seamlessly bridge the gap between complex logic and beautiful interfaces.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <MagneticButton>
                <button
                  onClick={onOpenContact}
                  className="group relative flex items-center justify-between pl-8 pr-2 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium text-[15px] hover:border-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden"
                >
                  {/* Expanding background element */}
                  <div className="absolute right-2 top-2 bottom-2 w-10 rounded-full bg-white z-0 transition-all duration-300 ease-out group-hover:w-full group-hover:right-0 group-hover:top-0 group-hover:bottom-0" />

                  <span className="relative z-10 mr-6 group-hover:text-black transition-colors duration-300 select-none">
                    Start a Project
                  </span>
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center text-black pointer-events-none">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </MagneticButton>

              <div className="flex items-center gap-4">
                <MagneticButton>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full flex items-center justify-center social-btn-gradient-hover hover:scale-105 transition-all duration-300"
                    title="Resume">
                    <FileText size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="https://github.com/Jay-Ahirrao" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full flex items-center justify-center social-btn-gradient-hover hover:scale-105 transition-all duration-300"
                    title="GitHub">
                    <Github size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="https://linkedin.com/in/jay-ahirrao" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full flex items-center justify-center social-btn-gradient-hover hover:scale-105 transition-all duration-300"
                    title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Image ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            className="w-full lg:w-[45%] flex justify-center order-1 lg:order-2 relative h-[320px] sm:h-[380px] lg:h-[460px]"
          >

            {/* Main photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[220px] lg:w-[260px] h-[240px] sm:h-[300px] lg:h-[360px] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl z-10 group">
              <img
                src="/main.png"
                alt="Jay Ahirrao"
                loading="eager"
                fetchpriority="high"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-[transform,filter] duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center bg-neutral-800 text-neutral-500">
                <span className="font-mono text-xs">Image missing (/main.png)</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
