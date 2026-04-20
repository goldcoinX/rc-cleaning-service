import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="text-2xl font-black tracking-tighter text-blue-600">
          RC <span className="text-slate-800 underline decoration-blue-500 decoration-4">CLEANING</span>
        </div>
        <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-widest">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition shadow-lg">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative px-8 py-24 md:py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            EXCELLENCE <br/> 
            <span className="text-blue-600 italic text-5xl md:text-7xl">IN EVERY CORNER.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Premium residential and commercial cleaning services for elite spaces in Lekki and Lagos Island. We don't just clean; we restore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-blue-200">
              Request a Bespoke Quote
            </button>
            <button className="bg-white border-2 border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all">
              Our Gallery
            </button>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/50 rounded-full blur-3xl -z-0"></div>
      </header>

      {/* Services Section */}
      <section id="services" className="px-8 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">The Service Suite</h2>
            <div className="w-20 h-2 bg-blue-600"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Elite Residential", 
                desc: "Detail-oriented sanitization for luxury villas and high-end apartments." 
              },
              { 
                title: "Executive Commercial", 
                desc: "Pristine office environments that reflect your professional standard." 
              },
              { 
                title: "Post-Construction", 
                desc: "Deep-scale restoration cleaning for newly developed elite properties." 
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                <div className="text-blue-600 text-4xl mb-6 font-black opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <div className="text-3xl font-black tracking-tighter mb-4 text-blue-400 uppercase">RC Cleaning</div>
            <p className="text-slate-400 max-w-sm">Elevating the standard of cleanliness for the most prestigious addresses in Nigeria.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Connect with us</p>
            <p className="text-xl font-bold">Lekki, Lagos Island</p>
            <p className="text-slate-400 mt-4">© 2026 RC Cleaning Service.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// CRITICAL: This is the logic that makes the site appear in the browser
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
