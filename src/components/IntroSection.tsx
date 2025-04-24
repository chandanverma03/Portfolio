import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const IntroSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="lg:col-span-3 order-2 lg:order-1" variants={itemVariants}>
            <div className="space-y-6">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" variants={itemVariants}>
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                  Chandan
                </span>
              </motion.h1>
              
              <motion.div className="text-2xl md:text-3xl font-medium text-white/90 h-14" variants={itemVariants}>
                <TypeAnimation
                  sequence={[
                    'Computer Science Engineer',
                    1000,
                    'Full Stack Web Developer',
                    1000,
                    'Problem Solver',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              
              <motion.p className="text-lg text-white/70 max-w-2xl" variants={itemVariants}>
                Passionate about learning new technologies to build impactful solutions. I enjoy tackling complex problems and transforming ideas into elegant digital experiences.
              </motion.p>
              
              <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
                <a href="#projects" className="btn btn-primary group">
                  View My Work
                  <ArrowDown className="h-4 w-4 group-hover:animate-bounce" />
                </a>
                <a href="https://linkedin.com/in/chandan-v03" className="btn btn-outline">
                  Get In Touch
                </a>
              </motion.div>
              
              <motion.div className="flex space-x-5 pt-6" variants={itemVariants}>
                <a
                  href="https://github.com/chandanverma03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary-500 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/chandan-v03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary-500 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary-500 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end" variants={itemVariants}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500/50 shadow-glow">
                <img
                  src="/Public/Chandan.jpg"
                  alt="Chandan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-accent-500/20 blur-md"></div>
              <motion.div
                className="absolute -z-10 inset-0 rounded-full bg-primary-500/20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;