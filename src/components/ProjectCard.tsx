import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  type: 'github' | 'personal' | 'academic';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  image,
  type,
}) => {
  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div 
      className={`glassmorphism h-full overflow-hidden flex flex-col ${
        type === 'github' ? 'p-6' : type === 'personal' ? 'p-0' : 'p-5'
      }`}
      variants={cardVariants}
      whileHover="hover"
    >
      {type === 'personal' && image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      )}
      
      <div className={`flex flex-col ${
        type === 'personal' && image ? 'p-5 flex-grow' : type === 'personal' ? 'p-6' : ''
      }`}>
        {(type !== 'personal' || !image) && (
          <h3 className="text-xl font-bold mb-3">{title}</h3>
        )}
        
        <p className="text-white/70 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="tag">
              {tech}
            </span>
          ))}
        </div>
        
        {(githubUrl || demoUrl) && (
          <div className="flex space-x-3 mt-auto pt-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-500 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {type === 'academic' && (
              <span className="text-white/70 flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Academic</span>
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;