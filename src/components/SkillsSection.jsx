import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Shield, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Web Development',
      icon: Code,
      skills: [
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 60 },
        { name: 'MongoDB', level: 55 },
      ],
    },
    {
      title: 'Ethical Hacking & Security',
      icon: Shield,
      skills: [
        { name: 'OWASP Top 10', level: 70 },
        { name: 'Web App Security', level: 65 },
        { name: 'Networking Basics', level: 70 },
        { name: 'Linux Fundamentals', level: 75 },
        { name: 'Vulnerability Assessment', level: 60 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        { name: 'Nmap', level: 70 },
        { name: 'Burp Suite', level: 65 },
        { name: 'Metasploit', level: 55 },
        { name: 'TryHackMe', level: 75 },
        { name: 'Hack The Box', level: 60 },
        { name: 'DVWA', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// SKILLS</span>
          <h2 className="section-title mt-2">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="cyber-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
