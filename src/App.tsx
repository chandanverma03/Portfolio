import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import CompetitiveSection from './components/CompetitiveSection';
import ExtracurricularSection from './components/ExtracurricularSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-dark to-background-light text-white">
      <Navbar activeSection={activeSection} />
      <main>
        <IntroSection />
        <ProjectsSection />
        <CompetitiveSection />
        <AchievementsSection />
        <ExtracurricularSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;