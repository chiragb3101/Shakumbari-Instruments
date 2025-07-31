'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/98 border-b border-slate-600' 
        : 'bg-slate-900/95 border-b border-slate-700'
    } backdrop-blur-md`}>
      <nav className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-slate-100 tracking-tight">
          Shakumbari Instruments
        </div>
        
        <ul className="hidden md:flex list-none gap-10">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('instruments')}
              className="text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 relative group"
            >
              Instruments
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 relative group"
            >
              Capabilities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        </ul>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Request Quote
        </button>
      </nav>
    </header>
  );
} 