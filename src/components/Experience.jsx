import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, MapPin, Code2, GraduationCap, School } from 'lucide-react';

const ExperienceItem = ({ exp, progress, index, total }) => {
  // Calculate if this specific item is "active" based on shared scroll progress
  // We divide the 0-1 progress into equal segments for each experience
  const start = index / total;
  const end = (index + 1) / total;
  
  // Create a transform that highlights the section when progress is within its range
  const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      style={{ opacity }}
      className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 pb-24"
    >
      {/* Timeline Dot (Static) */}
      <div className="absolute left-6 lg:left-[30%] top-2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-lg">
        <div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/20 transition-colors" />
      </div>

      {/* Left Column: Company Info & Meta */}
      <div className="lg:w-[30%] pl-16 lg:pl-0 lg:pr-16 pt-2">
        <div className="text-xs font-mono tracking-widest text-neutral-500 mb-6 uppercase">
          {exp.duration}
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-xl shrink-0 overflow-hidden">
            {exp.type === "Education" ? (
              <GraduationCap size={24} className="text-black" />
            ) : (
              <span className="text-black font-bold text-xl">{exp.company.charAt(0)}</span>
            )}
          </div>
          <h3 className="font-heading text-2xl md:text-3xl text-white tracking-wide">
            {exp.company}
          </h3>
        </div>

        <div className="space-y-3 mt-8">
          <div className="flex items-center text-sm text-neutral-400 gap-3">
            <MapPin size={16} className="text-neutral-500" />
            {exp.location || "Remote"}
          </div>
          <div className="flex items-center text-sm text-neutral-400 gap-3">
            {exp.type === "Education" ? <School size={16} className="text-neutral-500" /> : <Briefcase size={16} className="text-neutral-500" />}
            {exp.type || "Full-time"}
          </div>
        </div>
      </div>

      {/* Right Column: Roles & Responsibilities */}
      <div className="lg:w-[70%] pl-16 lg:pl-12 pt-2 lg:pt-0">
        <h4 className="text-2xl font-bold text-white mb-8 tracking-tight">
          {exp.role}
        </h4>
        
        <ul className="space-y-6 mb-12">
          {exp.responsibilities.map((task, i) => (
            <li key={i} className="flex font-sans text-neutral-400 leading-relaxed text-[15px]">
              <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-700 flex-shrink-0" />
              <span className="font-light">{task}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        {exp.techStack && (
          <div className="flex flex-wrap gap-3">
            {exp.techStack.map((tech, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] hover:bg-white/10 transition-colors"
              >
                <Code2 size={12} className="text-neutral-500" />
                <span className="text-[10px] font-mono tracking-wider text-neutral-300 uppercase">
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
  const containerRef = useRef(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });

  // Map progress to vertical position (percentage)
  const y = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative border-t border-white/5 bg-black/50" ref={containerRef}>
      
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-20">
          <h5 className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-6">
            Career Path
          </h5>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-neutral-400 text-lg">My professional journey so far.</p>
        </div>

        <div className="relative">
          
          {/* Main vertical timeline line */}
          <div className="absolute left-8 lg:left-[30%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden lg:block" />
          
          {/* Moving Astro GIF on the line (Desktop only) */}
          <motion.div 
            style={{ top: y }}
            className="absolute left-8 lg:left-[30%] -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block"
          >
            <div className="relative">
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl scale-125" />
              
              {/* Moving GIF Container */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img 
                  src="/astro.gif" 
                  alt="Astro" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJidm91Z3o0Z3p6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3ZjJm1wPTkmY3Q9cw/MAX4V1A2LhInuJ3jVd/giphy.gif" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10 lg:hidden" />

          <div className="relative lg:block">
            {experience.map((exp, index) => (
              <ExperienceItem 
                key={exp.id} 
                exp={exp} 
                progress={smoothProgress} 
                index={index} 
                total={experience.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
