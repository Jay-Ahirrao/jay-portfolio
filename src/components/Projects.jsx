import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Github, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

const iconMap = {
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Swing": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "AWT": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "AWT & Swing": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React Bits": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Zennit UI": "/zennitui.png",
  "Shadcn UI":"/shadcn.png",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "JDBC": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "EJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ejs/ejs-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "JWT": "https://jwt.io/img/pic_logo.svg",
  "Azure VMs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "NeonDB": "https://neon.tech/favicon/favicon-32x32.png",
  "XGBoost": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  "Random Forest": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  "Isolation Forest": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  "Google Forms": "https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png",
  "Sheets": "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png",
  "Drive APIs": "https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png",
  "Github": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
};

const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isFullscreen) {
      setIsZoomed(false);
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      } else if (e.key === 'ArrowRight') {
        setIsZoomed(false);
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setIsZoomed(false);
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Save original overflow style and prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isFullscreen, images.length]);

  if (!images || images.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsZoomed(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsZoomed(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    setIsZoomed(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const hasMultiple = images.length > 1;

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 30 : -30
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      opacity: 0,
      x: dir > 0 ? -30 : 30
    })
  };

  return (
    <div className="relative w-full h-full group/carousel overflow-hidden bg-neutral-950">
      {/* Dim overlay */}
      <div className="absolute inset-0 bg-neutral-900/10 group-hover/carousel:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
      
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - image ${currentIndex + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 400, damping: 38 },
              opacity: { duration: 0.2 }
            }}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover select-none pointer-events-none grayscale-[20%] group-hover/carousel:grayscale-0 transition-all duration-700"
          />
        </AnimatePresence>
      </div>

      {/* Chevrons */}
      {hasMultiple && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/70 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 cursor-pointer animate-none"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/70 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 cursor-pointer animate-none"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Expand button (bottom left) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsFullscreen(true);
        }}
        className="absolute left-3 bottom-3 z-20 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/70 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 cursor-pointer animate-none"
        aria-label="Expand image"
        title="View Fullscreen"
      >
        <Maximize2 size={14} />
      </button>

      {/* Indicator Bars */}
      {hasMultiple && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => handleDotClick(e, index)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'w-3.5 bg-white' : 'w-1 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Fullscreen Overlay Portal */}
      {isFullscreen && createPortal(
        <div 
          className="fixed inset-0 z-[999999] bg-neutral-950/98 backdrop-blur-md flex flex-col items-center justify-center select-none"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Header context */}
          {!isZoomed && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-neutral-400 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
              <span>{title}</span>
              <span className="text-neutral-600">&mdash;</span>
              <span className="text-white/80">{currentIndex + 1} / {images.length}</span>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            className="absolute top-6 right-6 z-[1000000] flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Close fullscreen"
            title="Close Fullscreen"
          >
            <X size={24} />
          </button>

          {/* Main image container */}
          <div 
            ref={containerRef}
            className="relative max-w-[90vw] max-h-[80vh] w-full h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full h-full flex items-center justify-center"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 }
                }}
              >
                <motion.img
                  src={images[currentIndex]}
                  alt={`${title} - image ${currentIndex + 1} (fullscreen)`}
                  animate={{ 
                    scale: isZoomed ? 2.2 : 1,
                    x: isZoomed ? undefined : 0,
                    y: isZoomed ? undefined : 0
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  drag={isZoomed}
                  dragConstraints={{
                    left: -window.innerWidth * 0.6,
                    right: window.innerWidth * 0.6,
                    top: -window.innerHeight * 0.6,
                    bottom: window.innerHeight * 0.6
                  }}
                  dragElastic={0.15}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className={`max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5 select-none ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                />
              </motion.div>
            </AnimatePresence>

            {/* Chevrons inside fullscreen */}
            {!isZoomed && hasMultiple && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-[1000000] flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-[1000000] flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Indicator Bars in fullscreen */}
          {!isZoomed && hasMultiple && (
            <div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000000] flex gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => handleDotClick(e, index)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20 relative z-20">
            <h5 className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase mb-4">
              Case Studies
            </h5>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Curated{' '}
              <span 
                className="italic animate-gradient-text font-medium" 
                style={{ paddingRight: '10px' }}
              >
                Work
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(index * 0.08, 0.24), duration: 0.5, ease: 'easeOut' }}
                className="group relative flex flex-col md:flex-row md:h-80 w-full rounded-3xl bg-neutral-900 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              >
                {/* Left Side - Image / Carousel */}
                <div className="w-full md:w-[42%] lg:w-[38%] h-56 md:h-full relative overflow-hidden shrink-0 bg-neutral-800">
                  <ProjectCarousel images={project.images} title={project.title} />
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/90">
                    {project.date}
                  </div>
                </div>
                
                {/* Right Side - Details */}
                <div className="w-full md:w-[58%] lg:w-[62%] p-6 md:p-8 flex flex-col justify-between md:h-full">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                          {project.type}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <div className="flex gap-2.5 flex-shrink-0">
                        {project.github !== "#" && (
                          <MagneticButton>
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:border-white transition-all inline-flex items-center justify-center cursor-pointer"
                              title="View Github repository"
                            >
                              <Github size={18} />
                            </a>
                          </MagneticButton>
                        )}
                        {project.live !== "#" && (
                          <MagneticButton>
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:border-white transition-all inline-flex items-center justify-center cursor-pointer"
                              title="View Live site"
                            >
                              <ExternalLink size={18} />
                            </a>
                          </MagneticButton>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 md:line-clamp-2 lg:line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1.5 text-[9px] font-bold tracking-wider uppercase rounded-lg bg-white/5 border border-white/10 text-neutral-300 flex items-center gap-1.5 hover:bg-white/10 transition-all hover:border-white/30"
                      >
                        {iconMap[tech] && (
                          <img 
                            src={iconMap[tech]} 
                            alt={tech} 
                            className={`w-3.5 h-3.5 object-contain ${(tech === "Express" || tech === "EJS" || tech === "Github") ? "invert" : ""}`} 
                          />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
