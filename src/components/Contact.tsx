'use client';

export default function Contact() {
  const contactInfo = [
    {
      title: 'Sales Department',
      info: 'sales@precisiontech-instruments.com'
    },
    {
      title: 'Technical Support',
      info: '+1-555-PRECISION'
    },
    {
      title: 'Business Hours',
      info: 'Monday - Friday: 8:00 AM - 6:00 PM EST'
    },
    {
      title: 'Global Service',
      info: 'Worldwide Installation & Support'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-100 tracking-tight">
          Partner with Industry Leaders
        </h2>
        
        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Contact our technical specialists for detailed equipment specifications, comprehensive proposals, 
          and professional consultation on testing solutions tailored to your specific requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a 
            href="tel:+1-555-PRECISION"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Call: +1-555-PRECISION
          </a>
          <a 
            href="mailto:sales@precisiontech-instruments.com"
            className="bg-transparent text-slate-300 px-8 py-4 border-2 border-slate-600 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-slate-600 hover:text-white hover:-translate-y-1"
          >
            Request Proposal
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800/80 backdrop-blur-md p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h4 className="text-lg font-semibold mb-3 text-slate-100">
                {item.title}
              </h4>
              <p className="text-blue-400 font-medium">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 