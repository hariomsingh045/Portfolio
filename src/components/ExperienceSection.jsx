import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Bug, Database, Key, Shield, Lock } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const labExperiences = [
    {
      icon: Terminal,
      title: 'TryHackMe Labs',
      description: 'Solved multiple beginner to intermediate labs covering Networking, Linux, and Web Security fundamentals.',
    },
    {
      icon: Shield,
      title: 'Hack The Box',
      description: 'Completed beginner-level machines focusing on Enumeration & Exploitation techniques.',
    },
    {
      icon: Bug,
      title: 'DVWA Practice',
      description: 'Practiced vulnerable web application testing using Damn Vulnerable Web Application.',
    },
  ];

  const attackTypes = [
    { icon: Database, name: 'SQL Injection', color: 'text-red-400' },
    { icon: Key, name: 'Cross-Site Scripting (XSS)', color: 'text-orange-400' },
    { icon: Terminal, name: 'Command Injection', color: 'text-yellow-400' },
    { icon: Lock, name: 'Authentication Bypass', color: 'text-purple-400' },
  ];

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// HANDS-ON PRACTICE</span>
          <h2 className="section-title mt-2">
            Lab <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Practical cybersecurity experience gained through ethical hacking labs and vulnerable application testing.
          </p>
        </motion.div>

        {/* Lab Experiences Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {labExperiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:glow-box transition-all duration-300">
                <exp.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-mono font-bold text-foreground mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Attack Types Practiced */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cyber-card p-8"
        >
          <h3 className="text-xl font-mono font-bold text-center mb-8">
            <span className="text-primary">&gt;</span> Attack Techniques Practiced
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {attackTypes.map((attack, index) => (
              <motion.div
                key={attack.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="terminal-box p-4 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <attack.icon className={`w-8 h-8 ${attack.color} mx-auto mb-2`} />
                <p className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {attack.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tools Used */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <p className="text-center text-muted-foreground text-sm mb-4">Tools Used:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'Gobuster'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 font-mono text-sm bg-muted/50 border border-primary/20 rounded-lg text-primary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
