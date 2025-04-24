import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { extracurricularData } from '../data/extracurricularData';

const ExtracurricularSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="extracurricular" className="section-padding bg-background-dark/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Extracurricular Activities</h2>
          <p className="text-white/70 text-lg max-w-3xl">
            Beyond coding, I'm passionate about a variety of activities that help me maintain balance and foster creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {extracurricularData.map((activity, index) => (
            <motion.div
              key={index}
              className={`glassmorphism overflow-hidden ${
                index % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-white/80">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;