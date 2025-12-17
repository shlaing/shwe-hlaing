import React from 'react';
import { Download, ArrowRight, Terminal } from 'lucide-react';
import { Button } from './ui/Button';
import { HERO_DATA, CORE_TECHNOLOGIES } from '../constants';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <>
      <section id="about" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-transparent">
        
        {/* Background Wave Shape */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
             <path 
               d="M0,550 C350,700 850,300 1440,320 V800 H0 Z" 
               className="fill-blue-50 dark:fill-blue-900/10 transition-colors duration-300"
             />
           </svg>
        </div>

        {/* Enhanced Background Gradients - Professional Blue Mix */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent/20 to-blue-600/20 rounded-full blur-[100px] pointer-events-none opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen z-0" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 to-blue-400/20 rounded-full blur-[100px] pointer-events-none opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16 space-y-8 animate-in slide-in-from-top-10 duration-700 fade-in">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-700/50">
              <span className="relative flex h-2.5 w-2.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="font-mono text-xs tracking-wide">OPEN_TO_WORK = TRUE</span>
            </div>
            
            <h5 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white max-w-5xl transition-colors">
              Hello, I am <span className="text-blue-500">{HERO_DATA.name}</span>
            </h5>
            
             <p className="text-xl md:text-3xl text-slate-800 dark:text-slate-100 leading-relaxed text-center max-w-4xl font-medium tracking-tight">
                {HERO_DATA.pitch}
              </p>

             {/* Action Buttons - Moved to Header */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 sm:px-0 pt-4">
                <Button onClick={onContactClick} size="lg" className="group shadow-xl shadow-accent/20 border-0 w-full sm:w-auto">
                  Hire Me
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open(HERO_DATA.resumeLink, '_blank')} className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm w-full sm:w-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
          </div>

          {/* Content Section - Equal Height Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Tech Stack Grid */}
            <div className="h-full animate-in slide-in-from-left-10 duration-700 fade-in delay-100 order-2 lg:order-1">
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xl h-full flex flex-col justify-center">
                 <p className="text-base text-slate-900 dark:text-white mb-6 uppercase tracking-widest font-bold flex items-center border-b border-slate-200 dark:border-slate-700 pb-4">
                   <Terminal className="w-5 h-5 mr-3 text-accent dark:text-highlight" />
                   Core Technologies
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                   {CORE_TECHNOLOGIES.map((section, index) => (
                     <div key={index} className="flex flex-col space-y-2">
                       <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide opacity-90">{section.category}</h4>
                       <div className="flex flex-wrap gap-1.5">
                         {section.items.map(tech => (
                           <span key={tech} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-md text-slate-700 dark:text-slate-300 text-xs font-semibold font-mono hover:border-accent dark:hover:border-highlight hover:text-accent dark:hover:text-highlight hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default shadow-sm">
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            {/* Right Column: Profile Photo */}
            <div className="h-full animate-in slide-in-from-right-10 duration-700 fade-in delay-200 order-1 lg:order-2">
              <div className="relative group w-full h-full flex items-center justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl w-full h-full min-h-[400px]">
                  <img 
                    src={HERO_DATA.profileImage} 
                    alt={HERO_DATA.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};