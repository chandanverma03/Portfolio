import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { competitiveData } from '../data/competitiveData';

const CompetitiveSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="competitive" className="section-padding bg-background-dark/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Competitive Programming</h2>
          <p className="text-white/70 text-lg max-w-3xl">
            Explore my competitive programming profiles and challenges I've solved on various platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {competitiveData.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism p-6 hover:bg-white/10 transition-colors flex flex-col"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    className="max-w-full max-h-full" 
                  />
                </div>
                <ExternalLink className="h-5 w-5 text-white/50" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-white/70 mb-4">{platform.description}</p>
              
              <div className="mt-auto">
                <div className="flex space-x-4">
                  <div>
                    <p className="text-sm text-white/50">Problems Solved</p>
                    <p className="text-2xl font-bold text-primary-500">{platform.problemsSolved}</p>
                  </div>
                  {platform.rating && (
                    <div>
                      <p className="text-sm text-white/50">Rating</p>
                      <p className="text-2xl font-bold text-accent-500">{platform.rating}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveSection;