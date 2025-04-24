import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/70 max-w-md mb-6">
              Interested in working together or have any questions? Feel free to reach out!
            </p>
            <a 
              href="chandan000vrma@gmail.com" 
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
            chandan000vrma@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <a 
                href="https://github.com/chandanverma03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-500 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/chandan-v03/" 
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
            </div>
            <a 
              href="/Public/Chandan_12215429 General CV.pdf" 
              className="btn btn-outline"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Chandan. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center">
            Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;