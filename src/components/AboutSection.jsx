import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    { year: '2024', event: 'Started B.Tech in Computer Science Engineering' },
    { year: '2023', event: 'Discovered passion for Cybersecurity' },
    { year: '2024', event: 'Began ethical hacking training & lab practice' },
    { year: 'Present', event: 'Building full stack development skills' },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// ABOUT ME</span>
          <h2 className="section-title mt-2">
            Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cyber-card p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-primary font-semibold">Hariom Singh</span>, a 3rd-year B.Tech 
                Computer Science Engineering student at <span className="text-foreground">Chhatrapati Shivaji 
                Maharaj University</span>. My journey into technology began with curiosity about how systems 
                can be both built and broken.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Passionate about cybersecurity and ethical hacking, I spend my time exploring vulnerabilities, 
                understanding attack vectors, and learning defensive strategies through hands-on lab practice. 
                Simultaneously, I'm developing my full stack web development skills to create secure, 
                robust applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and practical exposure. Every lab I complete, every 
                vulnerability I discover, and every line of code I write brings me closer to becoming 
                a skilled security professional.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: GraduationCap, title: 'Education', desc: 'B.Tech CSE - 3rd Year' },
                { icon: Target, title: 'Focus', desc: 'Ethical Hacking' },
                { icon: Lightbulb, title: 'Learning', desc: 'Always Curious' },
                { icon: Rocket, title: 'Goal', desc: 'Security Expert' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="terminal-box p-4 flex items-start gap-3"
                >
                  <item.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-mono font-bold mb-8 text-center lg:text-left">
              <span className="text-primary">&gt;</span> My Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary glow-box" />
                  
                  <div className="terminal-box p-4">
                    <span className="text-primary font-mono text-sm font-bold">{item.year}</span>
                    <p className="text-muted-foreground mt-1">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
