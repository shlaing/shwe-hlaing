import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    // { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('hero')}>
            <div className="p-2 bg-accent dark:bg-highlight rounded-lg shadow-lg shadow-accent/20">
              <Code2 className="h-6 w-6 text-white dark:text-slate-900" />
            </div>
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight transition-colors">{HERO_DATA.name}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-highlight transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button 
                onClick={() => handleLinkClick('contact')}
                className="px-4 py-2 text-sm font-medium bg-slate-800 dark:bg-slate-800 text-white dark:text-highlight border border-slate-700 rounded-full hover:bg-slate-700 transition-all shadow-md dark:shadow-none"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl absolute top-full left-0 right-0 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-5 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-highlight hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('contact')}
              className="block w-full text-left px-4 py-3 text-base font-medium text-accent dark:text-highlight hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};