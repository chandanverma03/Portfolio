import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-white/70 text-lg max-w-3xl">
            Explore a collection of my recent projects, showcasing my skills in web development, 
            problem-solving, and creative design.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white/90">GitHub Repositories</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projectsData.github.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  type="github"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white/90">Personal Projects</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projectsData.personal.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  image={project.image}
                  type="personal"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-white/90">Academic Projects</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projectsData.academic.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  type="academic"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;