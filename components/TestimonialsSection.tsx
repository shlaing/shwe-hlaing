import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-16 tracking-tight">Testimonials</h2>
        
        {/* Coming Soon Placeholder */}
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/50">
           <div className="p-4 bg-white dark:bg-slate-800 rounded-full mb-6 shadow-sm">
               <MessageSquare className="h-8 w-8 text-slate-400 dark:text-slate-500" />
           </div>
           <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">Coming Soon</h3>
           <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-lg">
             I am currently gathering feedback from my recent collaborations. Stay tuned for updates!
           </p>
        </div>

        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:border-accent/40 dark:hover:border-highlight/40 transition-colors group">
              <div className="absolute top-6 left-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                 <Quote className="h-5 w-5 text-accent dark:text-highlight" />
              </div>
              
              <div className="relative z-10 pt-12">
                <p className="text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4 border-t border-slate-200 dark:border-slate-700/50 pt-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full ring-2 ring-slate-200 dark:ring-slate-700 object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{testimonial.name}</h4>
                    <p className="text-sm text-accent dark:text-highlight font-medium">{testimonial.role}</p>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};