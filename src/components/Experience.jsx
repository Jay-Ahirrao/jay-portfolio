import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, MapPin, Code2, GraduationCap, School } from 'lucide-react';

const ExperienceItem = ({ exp, index, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      animate={{ opacity: isActive ? 1 : 0.35 }}
      className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 pb-24 transition-opacity"
    >
      {/* Timeline Dot — glows white when active */}
      <div
        className={`absolute left-6 lg:left-[30%] top-2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-lg transition-all duration-500 ${
          isActive
            ? 'bg-white/10 border border-white/40 shadow-[0_0_16px_rgba(255,255,255,0.3)]'
            : 'bg-black border border-white/10'
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
            isActive
              ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
              : 'bg-neutral-800 border border-white/20'
          }`}
        />
      </div>

      {/* Left Column */}
      <div className="lg:w-[30%] pl-16 lg:pl-0 lg:pr-16 pt-2">
        <div className={`text-xs font-mono tracking-widest uppercase mb-6 transition-colors duration-500 ${isActive ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {exp.duration}
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-xl shrink-0 overflow-hidden transition-all duration-500 ${isActive ? 'bg-white' : 'bg-white/60'}`}>
            {exp.type === 'Education' ? (
              <GraduationCap size={24} className="text-black" />
            ) : (
              <span className="text-black font-bold text-xl">{exp.company.charAt(0)}</span>
            )}
          </div>
          <h3 className={`font-heading text-2xl md:text-3xl tracking-wide transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-500'}`}>
            {exp.company}
          </h3>
        </div>

        <div className="space-y-3 mt-8">
          <div className={`flex items-center text-sm gap-3 transition-colors duration-500 ${isActive ? 'text-neutral-400' : 'text-neutral-600'}`}>
            <MapPin size={16} className={`transition-colors duration-500 ${isActive ? 'text-neutral-500' : 'text-neutral-700'}`} />
            {exp.location || 'Remote'}
          </div>
          <div className={`flex items-center text-sm gap-3 transition-colors duration-500 ${isActive ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {exp.type === 'Education'
              ? <School size={16} className={`transition-colors duration-500 ${isActive ? 'text-neutral-500' : 'text-neutral-700'}`} />
              : <Briefcase size={16} className={`transition-colors duration-500 ${isActive ? 'text-neutral-500' : 'text-neutral-700'}`} />
            }
            {exp.type || 'Full-time'}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-[70%] pl-16 lg:pl-12 pt-2 lg:pt-0">
        <h4 className={`text-2xl font-bold mb-8 tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-500'}`}>
          {exp.role}
        </h4>

        <ul className="space-y-6 mb-12">
          {exp.responsibilities.map((task, i) => (
            <li key={i} className="flex font-sans leading-relaxed text-[15px]">
              <span className={`mr-4 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${isActive ? 'bg-neutral-500' : 'bg-neutral-800'}`} />
              <span className={`font-light transition-colors duration-500 ${isActive ? 'text-neutral-400' : 'text-neutral-600'}`}>{task}</span>
            </li>
          ))}
        </ul>

        {exp.techStack && (
          <div className="flex flex-wrap gap-3">
            {exp.techStack.map((tech, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md border transition-all duration-500 ${
                  isActive
                    ? 'bg-white/[0.05] border-white/15 hover:bg-white/10'
                    : 'bg-white/[0.01] border-white/[0.04]'
                }`}
              >
                <Code2 size={12} className={`transition-colors duration-500 ${isActive ? 'text-neutral-500' : 'text-neutral-700'}`} />
                <span className={`text-[10px] font-mono tracking-wider uppercase transition-colors duration-500 ${isActive ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {tech}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // Maps progress → line height percentage
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Derive which experience item is "active" from scroll progress
  // Clamp to valid index range
  useMotionValueEvent(smoothProgress, 'change', (val) => {
    const idx = Math.min(
      Math.floor(val * experience.length),
      experience.length - 1
    );
    setActiveIndex(Math.max(0, idx));
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative border-t border-white/5 bg-black/50"
      style={{ contain: 'none' }}
    >
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="mb-20 relative z-20">
          <h5 className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase mb-6">
            Career Path
          </h5>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-4 text-white tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Professional{' '}
            <span 
              className="italic animate-gradient-text font-medium" 
              style={{ paddingRight: '10px' }}
            >
              Journey
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">My professional journey so far.</p>
        </div>

        <div className="relative">

          {/* Base timeline line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/[0.08] hidden lg:block"
            style={{ left: '30%', transform: 'translateX(-50%)' }}
          />

          {/* Progress line — grows from top as scroll advances */}
          <motion.div
            className="absolute top-0 w-[2px] rounded-full hidden lg:block"
            style={{
              left: '30%',
              translateX: '-50%',
              height: lineHeight,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(147,197,253,0.75) 40%, rgba(192,132,252,0.55) 80%, transparent 100%)',
              boxShadow: '0 0 6px rgba(147,197,253,0.4)',
            }}
          />

          {/* GIF — rides at the tip of the progress line */}
          <motion.div
            className="absolute hidden lg:block pointer-events-none"
            style={{
              left: '30%',
              top: lineHeight,
              translateX: '-50%',
              translateY: '-50%',
              zIndex: 30,
            }}
          >
            <img
              src="/astro.gif"
              alt="Scroll indicator"
              className="w-12 h-12 object-contain"
              onError={(e) => { e.target.src = 'https://media.giphy.com/media/MAX4V1A2LhInuJ3jVd/giphy.gif'; }}
            />
          </motion.div>

          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 lg:hidden" />

          {/* Experience items */}
          <div className="relative">
            {experience.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                exp={exp}
                index={index}
                isActive={index === activeIndex}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
