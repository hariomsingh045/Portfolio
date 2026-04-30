import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Folder, Code2, Rocket } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const upcomingProjects = [
    { title: 'Security Scanner Tool', type: 'Cybersecurity' },
    { title: 'Full Stack Web App', type: 'Web Development' },
    { title: 'Vulnerability Dashboard', type: 'Security' },
  ];

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// PROJECTS</span>
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="cyber-card p-8 text-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-mono font-bold text-foreground mb-4">
                Projects Coming Soon
              </h3>
              
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Currently working on hands-on cybersecurity and web development projects. 
                Stay tuned for exciting updates!
              </p>

              {/* Upcoming Project Placeholders */}
              <div className="grid sm:grid-cols-3 gap-4">
                {upcomingProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="terminal-box p-4 group"
                  >
                    <div className="flex justify-center mb-3">
                      {project.type === 'Cybersecurity' || project.type === 'Security' ? (
                        <Folder className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
                      ) : (
                        <Code2 className="w-8 h-8 text-secondary/50 group-hover:text-secondary transition-colors" />
                      )}
                    </div>
                    <p className="text-sm font-mono text-muted-foreground">{project.title}</p>
                    <span className="text-xs text-primary/50">{project.type}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
