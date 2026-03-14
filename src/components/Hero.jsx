import React from 'react';
import { Github, Linkedin, FileText, ArrowDownRight, Code2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = ({ onOpenContact }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20 overflow-hidden text-center lg:text-left">

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left Column ── */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-1 relative z-20 hero-fade-in">

            {/* Pre‑tag */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="h-[1px] w-12 bg-white/30 hidden md:block"></span>
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">Full Stack Developer</span>
            </div>

            {/* Name */}
            <h1 className="text-[4rem] sm:text-6xl lg:text-[6.5rem] font-medium leading-[0.9] tracking-[-0.04em] mb-4 text-white">
              <span className="text-white">Jay</span>{' '}
              <span
                className="italic text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-600"
                style={{ fontFamily: '"Playfair Display", serif', paddingRight: '0.05em' }}
              >
                Ahirrao
              </span>
              <span className="animate-gradient-text">.</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-200 mb-8">
              Crafting{' '}
              <span className="italic animate-gradient-text" style={{ fontFamily: '"Playfair Display", serif', paddingRight: '4px' }}>
                scalable
              </span>{' '}
              systems.
            </h2>

            {/* Bio */}
            <p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              I specialize in building robust backend architectures and highly performant web applications that seamlessly bridge the gap between complex logic and beautiful interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <MagneticButton>
                <button
                  onClick={onOpenContact}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform duration-300"
                >
                  <span>Start a Project</span>
                  <ArrowDownRight size={18} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
                </button>
              </MagneticButton>

              <div className="flex items-center gap-4">
                <MagneticButton>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Resume">
                    <FileText size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="https://github.com/Jay-Ahirrao" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="GitHub">
                    <Github size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="https://linkedin.com/in/jay-ahirrao" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* ── Right Column: Image ── */}
          <div className="w-full lg:w-[45%] flex justify-center order-1 lg:order-2 relative h-[400px] sm:h-[450px] lg:h-[550px] hero-fade-in-delay">

            {/* Main photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[300px] lg:w-[340px] h-[320px] sm:h-[400px] lg:h-[460px] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl z-10 group">
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

            {/* Badge: Backend */}
            <div className="absolute top-[15%] right-[5%] lg:-right-4 px-4 py-2.5 rounded-xl bg-neutral-950/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-500/20">
                <Code2 size={16} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium text-[13px] tracking-wide">Backend Systems</div>
                <div className="text-neutral-400 text-[11px]">API & Architecture</div>
              </div>
            </div>

            {/* Badge: Available */}
            <div className="absolute bottom-[20%] left-[5%] lg:-left-4 px-4 py-2.5 rounded-xl bg-neutral-950/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20 flex items-center gap-3">
              <div className="relative flex items-center justify-center w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              </div>
              <div className="text-white font-mono text-[10px] uppercase tracking-wider font-bold">Available for work</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
