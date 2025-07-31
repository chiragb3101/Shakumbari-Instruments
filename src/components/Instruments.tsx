'use client';

import { useEffect, useRef } from 'react';

const instruments = [
  {
    name: 'Tensile Strength Analyzer',
    description: 'Precision measurement of paper tensile strength, elongation, and break load with advanced digital control and comprehensive data analysis capabilities.',
    specs: [
      { label: 'Load Capacity', value: '0-2000 N' },
      { label: 'Measurement Accuracy', value: '±0.1%' },
      { label: 'Test Speed Range', value: '5-500 mm/min' },
      { label: 'Standards Compliance', value: 'TAPPI T494, ISO 12625' }
    ]
  },
  {
    name: 'Burst Strength Tester',
    description: 'Advanced burst strength measurement for corrugated materials, paperboard, and packaging applications with automated testing protocols.',
    specs: [
      { label: 'Pressure Range', value: '0-1000 kPa' },
      { label: 'Resolution', value: '0.1 kPa' },
      { label: 'Test Area', value: '10 cm²' },
      { label: 'Standards Compliance', value: 'TAPPI T403, ISO 2758' }
    ]
  },
  {
    name: 'Moisture Content Analyzer',
    description: 'Rapid moisture determination system utilizing halogen heating technology and precision balance for accurate moisture content analysis.',
    specs: [
      { label: 'Measurement Range', value: '0-100%' },
      { label: 'Readability', value: '0.01%' },
      { label: 'Sample Capacity', value: '120g' },
      { label: 'Heating System', value: 'Halogen 400W' }
    ]
  },
  {
    name: 'Digital Thickness Gauge',
    description: 'High-precision thickness measurement system for paper, cardboard, and multi-layer materials with automated measurement protocols.',
    specs: [
      { label: 'Measurement Range', value: '0-25mm' },
      { label: 'Resolution', value: '0.001mm' },
      { label: 'Applied Pressure', value: '100 kPa' },
      { label: 'Standards Compliance', value: 'TAPPI T411, ISO 534' }
    ]
  },
  {
    name: 'Edge Crush Strength Tester',
    description: 'Comprehensive edge crush strength analysis for corrugated materials with automated calculation and statistical analysis capabilities.',
    specs: [
      { label: 'Load Capacity', value: '0-10000 N' },
      { label: 'Test Speed', value: '12.5 mm/min' },
      { label: 'Clamp Width', value: '100mm' },
      { label: 'Standards Compliance', value: 'TAPPI T811, ISO 3037' }
    ]
  },
  {
    name: 'Opacity & Brightness Meter',
    description: 'Precision optical measurement system for opacity and brightness analysis with LED light source technology and digital processing.',
    specs: [
      { label: 'Opacity Range', value: '0-100%' },
      { label: 'Brightness Range', value: '0-200% ISO' },
      { label: 'Measurement Accuracy', value: '±0.1%' },
      { label: 'Light Source', value: 'LED Blue 457nm' }
    ]
  }
];

export default function Instruments() {
  const instrumentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (instrumentsRef.current) {
      const cards = instrumentsRef.current.querySelectorAll('.instrument-card');
      cards.forEach(card => observer.observe(card));
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
    <section id="instruments" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-slate-100 tracking-tight">
            Testing Instrument Portfolio
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of precision instruments engineered for accurate analysis of paper and packaging materials
          </p>
        </div>
        
        <div ref={instrumentsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instruments.map((instrument, index) => (
            <div 
              key={index}
              className="instrument-card bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 transition-all duration-500 opacity-0 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/15 overflow-hidden group"
            >
              {/* Instrument image placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg relative">
                  <div className="absolute inset-2 border-2 border-white rounded"></div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-100">
                  {instrument.name}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {instrument.description}
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 mb-6">
                  <ul className="space-y-3">
                    {instrument.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex justify-between items-center py-2 border-b border-slate-700 last:border-b-0">
                        <span className="text-sm font-semibold text-slate-300">{spec.label}</span>
                        <span className="text-sm text-blue-400 font-medium">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-md font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Request Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 