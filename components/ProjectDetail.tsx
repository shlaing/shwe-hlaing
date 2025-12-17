import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle, TrendingUp, Layers, PlayCircle, Video as VideoIcon } from 'lucide-react';
import { Button } from './ui/Button';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header Image */}
          <div className="relative h-64 md:h-80 lg:h-96 w-full">
            <img 
              src={project.images[0] || project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 shadow-black drop-shadow-md">{project.title}</h2>
              <div className="flex flex-wrap gap-3">
                {project.demoLink && (
                  <Button size="sm" onClick={() => window.open(project.demoLink, '_blank')}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                )}
                {project.repoLink && (
                  <Button variant="secondary" size="sm" onClick={() => window.open(project.repoLink, '_blank')}>
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content (Left Col) */}
            <div className="lg:col-span-2 space-y-10">
              
              <section>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Layers className="mr-2 h-5 w-5 text-accent dark:text-highlight" />
                  Overview
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-accent dark:text-highlight" />
                  Key Contributions
                </h3>
                <ul className="space-y-3">
                  {project.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-mono text-accent dark:text-highlight mr-3 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Video Section */}
              {project.videoUrl && (
                <section>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                    <VideoIcon className="mr-2 h-5 w-5 text-accent dark:text-highlight" />
                    Video Demo
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl aspect-video group">
                     {!isPlaying ? (
                       <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
                         <img 
                           src={project.thumbnail} 
                           alt="Video Preview" 
                           className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <button className="h-16 w-16 rounded-full bg-accent dark:bg-highlight text-white dark:text-slate-900 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white transition-all shadow-lg shadow-accent/20">
                              <PlayCircle className="h-8 w-8 fill-current" />
                            </button>
                         </div>
                       </div>
                     ) : (
                       <iframe 
                         src={project.videoUrl} 
                         title={`${project.title} Video`}
                         className="w-full h-full"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                       />
                     )}
                  </div>
                </section>
              )}

              <section>
                 <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Gallery</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="group rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-accent/50 dark:hover:border-highlight/50 hover:shadow-[0_0_20px_rgba(31,58,95,0.15)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.15)] transition-all duration-300 cursor-pointer"
                      >
                        <img 
                          src={img} 
                          alt={`Gallery ${i}`} 
                          loading="lazy"
                          className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    ))}
                 </div>
              </section>

            </div>

            {/* Sidebar (Right Col) */}
            <div className="space-y-8">
              
              {/* Business Success Section */}
              {project.businessSuccess && project.businessSuccess.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-500 dark:text-green-400" />
                    Business Impact
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.businessSuccess.map((stat, idx) => (
                      <div 
                        key={idx} 
                        className="group bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800/60 hover:border-green-500/30 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-3xl font-bold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{stat.value}</span>
                          <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700/50 group-hover:bg-green-100 dark:group-hover:bg-green-500/20 flex items-center justify-center transition-colors">
                            <TrendingUp className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-accent dark:text-highlight mb-2 uppercase tracking-wide">
                          {stat.metric}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-700/50 pt-3 mt-1">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-lg border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          <div className="p-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
            <Button variant="secondary" onClick={onClose}>Close Project Details</Button>
          </div>

        </div>
      </div>
    </div>
  );
};