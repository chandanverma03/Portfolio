import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Medal, Trophy } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

const AchievementsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Function to determine which icon to use based on type
  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Award className="h-5 w-5 text-primary-500" />;
      case 'competition':
        return <Trophy className="h-5 w-5 text-accent-500" />;
      case 'award':
        return <Medal className="h-5 w-5 text-yellow-500" />;
      default:
        return <Award className="h-5 w-5 text-primary-500" />;
    }
  };

  return (
    <section id="achievements" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Achievements and Certificates</h2>
          <p className="text-white/70 text-lg max-w-3xl">
            A showcase of my certifications, awards, and accomplishments throughout my career and education.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 hover:bg-white/10 transition-colors"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-background-dark/60 flex items-center justify-center shrink-0">
                  {getIcon(achievement.type)}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-white/70 mb-3">{achievement.description}</p>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white/50">{achievement.issuer}</span>
                    <span className="text-xs py-1 px-2 bg-white/10 rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                  
                  {achievement.url && (
                    <a 
                      href={achievement.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-400 text-sm inline-flex items-center gap-1 mt-3"
                    >
                      View Certificate
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;