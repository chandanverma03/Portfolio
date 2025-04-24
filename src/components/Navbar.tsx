import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'competitive', label: 'Competitive' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'extracurricular', label: 'Extracurricular' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background-dark/90 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold flex items-center gap-2 text-white hover:text-primary-500 transition-colors"
          >
            <Code className="h-6 w-6 text-primary-500" />
            <span>Chandan</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative px-1 py-2 hover:text-primary-500 transition-colors ${
                      activeSection === item.id ? 'text-primary-500' : 'text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-500 rounded-full"
                        layoutId="navbar-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <a 
              href="/resume.pdf" 
              className="btn btn-outline"
              download
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-md shadow-lg py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block py-2 text-lg ${
                      activeSection === item.id ? 'text-primary-500' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <a 
                href="/resume.pdf" 
                className="btn btn-outline text-sm"
                download
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;