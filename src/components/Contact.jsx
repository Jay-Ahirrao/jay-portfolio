import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Contact = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-12 relative z-20">
            <h5 className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase mb-6">
              What's Next?
            </h5>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-4 text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Get In{' '}
              <span 
                className="italic animate-gradient-text font-medium" 
                style={{ paddingRight: '10px' }}
              >
                Touch
              </span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto leading-[1.8]">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <MagneticButton>
              <button 
                onClick={onOpenContact}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Say Hello</span>
              </button>
            </MagneticButton>
            
            <MagneticButton>
              <a 
                href="https://github.com/Jay-Ahirrao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 shadow-xl"
                title="GitHub"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a 
                href="https://linkedin.com/in/jay-ahirrao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 text-neutral-200 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 hover:shadow-[0_0_20px_rgba(0,119,181,0.2)] transition-all duration-300 shadow-xl"
                title="LinkedIn"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
