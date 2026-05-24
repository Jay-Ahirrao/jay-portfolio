import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { 
  Code2, 
  GitBranch, 
  Database, 
  Cpu, 
  Network, 
  Workflow, 
  Layers 
} from 'lucide-react';

const iconMap = {
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Framer Motion": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  "Azure VMs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "EJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ejs/ejs-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "JWT": "https://jwt.io/img/pic_logo.svg",
};

const lucideMap = {
  "Data Structures and Algorithms": GitBranch,
  "Object Oriented Programming": Layers,
  "Database Management Systems": Database,
  "Operating Systems": Cpu,
  "Computer Networks": Network,
  "System Design": Workflow,
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const groupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      } 
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="text-center mb-16 relative z-20">
            <h5 className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase mb-6">
              Core Technologies
            </h5>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-4 text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Technical{' '}
              <span 
                className="italic animate-gradient-text font-medium" 
                style={{ paddingRight: '10px' }}
              >
                Arsenal
              </span>
            </h2>
          </div>

          {/* Staggered container of category groups */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            {skills.map((group, groupIndex) => (
              <motion.div 
                key={groupIndex} 
                variants={groupVariants}
                className="space-y-3"
              >
                {/* Category label with intense glowing white text */}
                <h3 
                  className="font-mono text-xs tracking-[0.25em] text-white font-semibold uppercase"
                  style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' }}
                >
                  {group.category}
                </h3>

                {/* Wrapping layout of skill capsules for this category */}
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, index) => {
                    const DeviconUrl = iconMap[skill];
                    const LucideIcon = lucideMap[skill];

                    return (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ 
                          y: -2,
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          borderColor: 'rgba(255, 255, 255, 0.12)'
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-neutral-900 border border-white/5 text-neutral-300 flex items-center gap-2 shadow-sm cursor-default select-none"
                      >
                        {DeviconUrl ? (
                          <img 
                            src={DeviconUrl} 
                            alt={`${skill} icon`} 
                            loading="lazy"
                            decoding="async"
                            className={`w-4 h-4 object-contain ${(skill === 'Express' || skill === 'Express.js' || skill === 'Framer Motion' || skill === 'EJS') ? 'invert' : ''}`} 
                          />
                        ) : LucideIcon ? (
                          <LucideIcon className="w-4 h-4 text-neutral-400 shrink-0" />
                        ) : (
                          <Code2 className="w-4 h-4 text-neutral-400 shrink-0" />
                        )}
                        <span>{skill}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
