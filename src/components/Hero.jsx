import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logoGurmEt from '../gurm-et-logo.png';
import bullHead from '../bull-head.png'; // Asigură-te că ai această imagine în directorul assets/

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#DC2626]">
      {/* Bull head background image */}
      <img
        src={bullHead} // Asigură-te că ai această imagine și calea este corectă
        alt="Bull Head Background"
        className="absolute inset-0 w-full h-full object-contain opacity-[0.15] z-0 transform scale-100" // Opacitate și mai mică, și o scalare de 75%
        style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) scale(${1.1 - scrollY * 0.0005})` }} // Scalare dinamică și centrare
      />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 z-[1]"> {/* Z-index 1 pentru a fi peste capul de taur */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px',
          transform: `translateY(${scrollY * 0.3}px)`
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6" style={{
        transform: `translateY(${scrollY * 0.5}px)`,
        opacity: Math.max(0, 1 - scrollY / 500)
      }}>
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <img
            src={logoGurmEt}
            alt="Gurm-et Logo"
            className="h-24 sm:h-32 md:h-40 lg:h-48 mx-auto mb-8 sm:mb-12 drop-shadow-2xl max-w-full"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight animate-fade-in-up leading-tight">
          Măcelărie Premium.<br />
          <span className="text-[#DC2626]">Autentic Turcesc.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-12 font-light animate-fade-in-up-delay px-4">
          Unde tradiția întâlnește excelența în fiecare tăietură, fiecare produs, fiecare experiență.
        </p>

        <button
          onClick={scrollToContent}
          className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#DC2626] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#B91C1C] transition-all duration-300 hover:scale-105 animate-fade-in-up-delay-2 shadow-lg"
        >
          Descoperă Povestea Noastră
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </button>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{
        opacity: Math.max(0, 1 - scrollY / 300)
      }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}