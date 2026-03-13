import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Send } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = ({ onOpenContact }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-auto lg:max-w-xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-900 via-red-600 to-orange-500">Jay U. Ahirrao</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-neutral-400 mb-6">
                Full Stack Developer | Backend Systems
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-neutral-500 mb-10 max-w-2xl mx-auto lg:mx-0">
                MERN Stack Developer focused on backend systems, APIs and scalable web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6"
            >

              <MagneticButton>
                <button className="p-4 mr-2 rounded-xl bg-white text-black hover:bg-neutral-200 transition-colors flex items-center justify-center hover:scale-105 duration-700">
                  <FileText size={24} /><span className="ml-2 font-medium">Resume</span>
                </button>
              </MagneticButton>
              <MagneticButton>
                <a href="https://github.com/Jay-Ahirrao" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors flex items-center justify-center hover:scale-110 duration-300">
                  <Github size={24} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="https://linkedin.com/in/jay-ahirrao" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors flex items-center justify-center hover:scale-110 duration-300">
                  <Linkedin size={24} />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: User Image */}
          <div className="w-full lg:w-auto flex justify-center mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
              className="relative"
            >
              {/* Outer Glow behind image */}
              <div className="absolute inset-4 bg-red-600/10 rounded-3xl blur-xl" />
              
              {/* Image Container */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-[280px] lg:h-[380px] rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl">
                <img 
                  src="/main.png" 
                  alt="jay is gone, he'll not be here everytime" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-800"  
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback pattern if main.png is missing */}
                <div className="absolute inset-0 hidden items-center justify-center bg-neutral-800 text-neutral-500 flex-col gap-2">
                  <p className="text-sm">Place main.png in /public</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
