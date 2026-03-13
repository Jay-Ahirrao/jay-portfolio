import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Contact = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-12">
            <h5 className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-6">
              Whats Next?
            </h5>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto">
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
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 hover:bg-neutral-800 transition-all duration-300 shadow-xl"
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
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 border border-white/5 text-neutral-400 hover:text-blue-400 hover:border-white/20 hover:bg-neutral-800 transition-all duration-300 shadow-xl"
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
