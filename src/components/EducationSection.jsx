import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// EDUCATION</span>
          <h2 className="section-title mt-2">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="cyber-card p-8 relative overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
            
            <div className="flex items-start gap-6">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-mono text-foreground mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  Computer Science Engineering
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>Chhatrapati Shivaji Maharaj University</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2022 - 2026 (Current: 3rd Year)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Maharashtra, India</span>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground mb-3">Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Cybersecurity', 'Web Development', 'Data Structures', 'Networking', 'Operating Systems'].map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 border border-primary/30 rounded-full text-primary"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
