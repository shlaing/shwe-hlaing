import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

interface ProjectsSectionProps {
  onProjectSelect: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectSelect }) => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
              Engineering solutions with real business impact.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-200 dark:bg-slate-800 ml-8 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-accent/50 dark:hover:border-highlight/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 dark:hover:shadow-highlight/10 hover:-translate-y-1 flex flex-col"
            >
              {/* Card Header Image */}
              <div className="relative aspect-video overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Tech Badges Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] font-mono font-medium px-2 py-1 bg-slate-900/90 text-white rounded backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white group-hover:bg-accent dark:group-hover:bg-highlight group-hover:text-white dark:group-hover:text-slate-900 transition-colors">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <button 
                    onClick={() => onProjectSelect(project)}
                    className="p-2 text-slate-400 hover:text-accent dark:hover:text-highlight transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-highlight transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between">
                   <span className="text-xs font-mono text-slate-500 dark:text-slate-500">
                     ID: {project.id.padStart(3, '0')}
                   </span>
                   <span className="text-xs font-medium text-accent dark:text-highlight hover:underline cursor-pointer" onClick={() => onProjectSelect(project)}>
                     View Details
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};