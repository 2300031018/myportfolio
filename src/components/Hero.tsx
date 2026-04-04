import React from 'react';
import { Button } from './ui/button';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Photo */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <div className="relative w-48 h-48 mx-auto rounded-full hover:scale-105 transition-transform duration-300">
            {/* Simple glowing ring border, no gradient */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-400/30 animate-pulse pointer-events-none"></div>
            {/* Profile image */}
            <img
              src="/My2.jpeg"
              alt="Tummala Pranav"
              className="w-full h-full rounded-full object-cover absolute top-0 left-0 z-10"
              style={{ background: 'transparent' }}
              onError={(e) => {
                console.error('Profile image failed to load');
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
            Tummala Pranav
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Data Scientist | Web Developer | Tech Enthusiast
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          I design and develop data-driven solutions by leveraging advanced analytics, machine learning, and scalable technologies to transform complex data into actionable insights and intelligent digital experiences..
        </p>

       {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
  <Button 
    onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
    className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
  >
    View My Work
    <ArrowDown className="ml-2 h-5 w-5" />
  </Button>
  <Button
    asChild
    className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
  >
    <a
      href="/ResumePranavv.pdf" 
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
      <Download className="ml-2 h-5 w-5" />
    </a>
  </Button>
</div>
      </div>
    </section>
  );
};

export default Hero;
