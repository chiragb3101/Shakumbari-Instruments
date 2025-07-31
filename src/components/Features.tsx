'use client';

import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'High Precision Measurement',
    description: 'Ultra-precise sensors and advanced calibration systems ensure measurement accuracy within ±0.1% tolerance for critical quality control applications.'
  },
  {
    icon: '🛡',
    title: 'Industrial Reliability',
    description: 'Robust construction and proven engineering deliver consistent performance in demanding industrial environments with minimal maintenance requirements.'
  },
  {
    icon: '📊',
    title: 'Digital Integration',
    description: 'Modern digital interfaces with comprehensive data logging, network connectivity, and software integration for seamless laboratory workflow management.'
  },
  {
    icon: '🔧',
    title: 'Operational Excellence',
    description: 'Intuitive controls and user-friendly interfaces combined with comprehensive training programs ensure rapid deployment and optimal utilization.'
  },
  {
    icon: '🏆',
    title: 'Standards Compliance',
    description: 'Full compliance with TAPPI, ISO, ASTM, and other international standards ensuring your testing meets global quality and regulatory requirements.'
  },
  {
    icon: '📞',
    title: 'Expert Technical Support',
    description: 'Comprehensive technical support with experienced engineers, extensive documentation, and full warranty coverage for complete peace of mind.'
  }
];

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll('.feature-card');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-32 bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-slate-100 tracking-tight">
            Advanced Testing Capabilities
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Precision-engineered instruments designed for demanding laboratory and production environments 
            with uncompromising accuracy and reliability
          </p>
        </div>
        
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-slate-900/80 backdrop-blur-md p-8 rounded-xl border border-slate-700 transition-all duration-500 opacity-0 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group"
            >
              {/* Gradient border effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-slate-100">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 