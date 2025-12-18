import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github, MapPin, Globe, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-slate-200 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Let's work together.</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Available for full-time and contract engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Email Card */}
            <div className="flex items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                </div>
                <div className="ml-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-accent dark:hover:text-highlight transition-colors">
                        {CONTACT_INFO.email}
                    </a>
                </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                </div>
                <div className="ml-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-accent dark:hover:text-highlight transition-colors">
                        {CONTACT_INFO.phone}
                    </a>
                </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                        {CONTACT_INFO.location}
                    </p>
                </div>
            </div>

            {/* Visa Status Card */}
            <div className="flex items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    <Briefcase className="h-6 w-6" />
                </div>
                <div className="ml-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Visa Status</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-slate-900 dark:text-white mr-2">
                            {CONTACT_INFO.visa}
                        </p>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex gap-4">
                <Button variant="secondary" size="lg" onClick={() => window.open(`https://${CONTACT_INFO.linkedin}`, '_blank')} className="min-w-[160px]">
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Button>
                <Button variant="secondary" size="lg" onClick={() => window.open(`https://${CONTACT_INFO.github}`, '_blank')} className="min-w-[160px]">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                </Button>
            </div>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-mono">
            <p>&copy; {new Date().getFullYear()} Shwe Hlaing.</p>
        </div>
      </div>
    </section>
  );
};