import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetail } from './components/ProjectDetail';
import { EducationSection } from './components/EducationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Project } from './types';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 relative">
        {/* Global Grid Background */}
        <div className="fixed-grid transition-opacity duration-300" />
        
        <Navbar onNavigate={handleNavigate} />
        
        <main className="relative z-10">
          <Hero onContactClick={() => handleNavigate('contact')} />
          
          <ProjectsSection onProjectSelect={setSelectedProject} />
          
          <EducationSection />
          
          {/* <TestimonialsSection /> */}
          
          <ContactSection />
        </main>

        {/* Project Detail Overlay */}
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;