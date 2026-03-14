import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(index * 0.08, 0.24), duration: 0.45, ease: 'easeOut' }}
                className="group relative flex flex-col rounded-3xl bg-neutral-900/50 border border-white/10 overflow-hidden hover:border-white/30 transition-[border-color,box-shadow] duration-1200 hover:shadow-[0_0_35px_rgba(255,255,255,0.09)]"
              >
                <div className="aspect-video w-full overflow-hidden bg-neutral-800 relative">
                  <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                    {project.date}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="max-w-[70%]">
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                        {project.type}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-4 flex-shrink-0">
                      {project.github !== "#" && (
                        <MagneticButton>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all inline-flex items-center justify-center">
                            <Github size={20} />
                          </a>
                        </MagneticButton>
                      )}
                      {project.live !== "#" && (
                        <MagneticButton>
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all inline-flex items-center justify-center">
                            <ExternalLink size={20} />
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-neutral-400 mb-8 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3.5 py-2 text-[10px] font-bold tracking-wider uppercase rounded-lg bg-white/5 border border-white/10 text-neutral-200 flex items-center gap-3 hover:bg-white/10 transition-all border-hover:border-white/30"
                      >
                        {iconMap[tech] && (
                          <img 
                            src={iconMap[tech]} 
                            alt={tech} 
                            className={`w-4 h-4 object-contain ${(tech === "Express" || tech === "EJS" || tech === "Github") ? "invert" : ""}`} 
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
