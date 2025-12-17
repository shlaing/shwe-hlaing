import React from 'react';
import { EDUCATION, CERTIFICATIONS, SKILLS_DATA } from '../constants';
import { Award, BookOpen, ScrollText } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { useTheme } from './ThemeContext';

export const EducationSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartColor = isDark ? '#60A5FA' : '#1F3A5F'; // Highlight vs Accent

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Education & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Academic foundation, professional certifications, and technical proficiency.
          </p>
        </div>

        {/* Row 1: Education and Certifications Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Education History */}
          <div className="space-y-10 h-full">
             <div className="flex items-center space-x-3 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="p-2.5 bg-accent/10 dark:bg-highlight/10 rounded-xl">
                  <BookOpen className="h-6 w-6 text-accent dark:text-highlight" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                  Education
                </h3>
              </div>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-10 pb-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="pl-8 relative group">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent dark:bg-highlight border-4 border-slate-50 dark:border-slate-900 transition-transform group-hover:scale-110" />
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-accent/30 dark:hover:border-highlight/30 transition-all shadow-sm hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{edu.institution}</h4>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 whitespace-nowrap">{edu.year}</span>
                    </div>
                    <div className="text-base text-accent dark:text-highlight font-medium mb-3">{edu.degree}</div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-10 h-full">
              <div className="flex items-center space-x-3 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="p-2.5 bg-blue-500/10 rounded-xl">
                  <Award className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                  Certifications
                </h3>
              </div>

              <div className="grid gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                        <ScrollText className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm md:text-base leading-snug">{cert.name}</h4>
                        <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.year && <span className="text-xs font-mono text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded hidden sm:block shrink-0 ml-4">{cert.year}</span>}
                  </div>
                ))}
              </div>
          </div>

        </div>

        {/* Row 2: Unified Skill Chart */}
        {/* <div className="max-w-4xl mx-auto">
             <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 relative shadow-2xl overflow-hidden">
                
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono uppercase tracking-widest inline-block border-b-2 border-accent dark:border-highlight pb-2">
                    Area-Focused
                  </h3>
                </div>
                
                <div className="h-[400px] w-full relative z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_DATA}>
                      <PolarGrid stroke={isDark ? "#334155" : "#cbd5e1"} strokeOpacity={0.5} gridType="polygon" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: isDark ? '#e2e8f0' : '#334155', fontSize: 13, fontWeight: 600 }} 
                      />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar
                        name="Proficiency"
                        dataKey="A"
                        stroke={chartColor}
                        strokeWidth={4}
                        fill={chartColor}
                        fillOpacity={0.25}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#ffffff', borderColor: isDark ? '#334155' : '#e2e8f0', borderRadius: '12px', color: isDark ? '#fff' : '#0f172a', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                        itemStyle={{ color: chartColor, fontWeight: 'bold' }}
                      />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
             </div>
        </div> */}

      </div>
    </section>
  );
};