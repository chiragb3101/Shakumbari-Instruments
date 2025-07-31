'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="mt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-100 tracking-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Paper Testing
            </span>{' '}
            Equipment
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Industry-leading precision instruments for comprehensive paper, pulp, and packaging material analysis. 
            Delivering accurate, reliable testing solutions for quality control and research applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Request Consultation
            </button>
            <button 
              onClick={() => scrollToSection('instruments')}
              className="bg-transparent text-slate-300 px-8 py-4 border-2 border-slate-600 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-slate-600 hover:text-white hover:-translate-y-1"
            >
              View Equipment
            </button>
          </div>
        </div>
        
        <div ref={statsRef} className="grid grid-cols-2 gap-6 opacity-0 transition-opacity duration-1000">
          <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-sm text-slate-400">Installations Worldwide</div>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">0.1%</div>
            <div className="text-sm text-slate-400">Measurement Accuracy</div>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">Technical Support</div>
          </div>
        </div>
      </div>
    </section>
  );
} 