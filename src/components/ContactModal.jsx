import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Mail, Github, Linkedin, Twitter, Copy, Instagram } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ContactModal = ({ isOpen, onClose }) => {
  const EMAIL = "jayahirrao11@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(EMAIL);
    alert("Email copied to clipboard!");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl z-[101] px-6"
          >
            <div className="bg-neutral-900 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="p-8 pb-4 flex justify-between items-start">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 italic">Let's talk</h2>
                  <p className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                    Open to projects & collaborations
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 pt-4 space-y-4">
                {/* Main Card */}
                <a 
                  href={`mailto:${EMAIL}`}
                  className="group block p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all relative overflow-hidden"
                >
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Send me a message</h3>
                      <p className="text-neutral-500 text-sm">I usually reply within a day or two</p>
                    </div>
                    <Send size={24} className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -rotate-45 translate-x-12 -translate-y-12" />
                </a>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-start">
                      <Calendar size={20} className="text-neutral-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Schedule a call</h4>
                      <p className="text-neutral-500 text-xs">30 min • video or phone</p>
                    </div>
                  </a>

                  <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all flex flex-col gap-4 relative">
                    <div className="flex justify-between items-start text-neutral-500">
                      <Mail size={20} />
                      <button onClick={copyToClipboard} className="hover:text-white transition-colors">
                        <Copy size={16} />
                      </button>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Send on email</h4>
                      <p className="text-neutral-500 text-[10px] break-all">{EMAIL}</p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-center justify-center gap-8 pt-4">
                  <a href="https://linkedin.com/in/jay-ahirrao" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/messages/compose?recipient_name=@coder_jay_01" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.instagram.com/direct/t/jay_ahirrao_44/" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
