import { motion } from 'framer-motion';
import { ChevronDown, Shield, Code, Terminal } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="terminal-box inline-block px-4 py-2 mb-6">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground ml-2">whoami</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-4">
              <span className="text-foreground">Hariom</span>{' '}
              <span className="gradient-text">Singh</span>
            </h1>

            <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground font-mono mb-6">
              <span className="text-primary">&gt;</span>
              <span className="typing-cursor">B.Tech CSE Student | Ethical Hacking Enthusiast | Full Stack Developer</span>
            </div>

            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              3rd-year Computer Science Engineering student passionate about ethical hacking and web development. 
              Currently building skills through hands-on cybersecurity labs and real-world projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#skills"
                className="cyber-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Skills
              </motion.a>
              <motion.a
                href="#contact"
                className="cyber-btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { icon: Shield, label: 'Ethical Hacking' },
                { icon: Code, label: 'Web Development' },
                { icon: Terminal, label: 'Lab Practice' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-lg opacity-50 animate-pulse-glow" />
              
              {/* Profile Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/50 overflow-hidden bg-card">
                {/* Profile Image */}
                <img
                  src={profilePhoto}
                  alt="Hariom Singh - Cybersecurity Enthusiast"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan opacity-50" />
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 -right-4 terminal-box px-3 py-1 text-xs font-mono"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-primary">TryHackMe</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 terminal-box px-3 py-1 text-xs font-mono"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-secondary">HackTheBox</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
