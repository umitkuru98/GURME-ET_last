import React, { useEffect, useRef, useState } from 'react';
import { Award, Medal, Check, } from 'lucide-react';

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    { icon: Award, title: "Excelență Halal", desc: "Carne proaspătă, atent selectată și certificată 100% Halal" },
    { icon: Medal, title: "Selecție Atentă", desc: "Garanția ta că doar cele mai bune tăieturi ajung la tine" },
    { icon: Check, title: "Gust Autentic", desc: "Adevăratele arome și specialități turcești" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#FAFAF9] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#DC2626] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#0A0A0A] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-4 sm:mb-6 tracking-tight px-4">
            Despre Gurme<span className="text-[#DC2626]">-Et</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#DC2626] mx-auto mb-6 sm:mb-8" />
        </div>

        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg sm:text-xl md:text-2xl text-[#1A1A1A] leading-relaxed font-light mb-4 sm:mb-6">
            Gurm-et este promisiunea calității absolute și a gustului autentic turcesc. Am creat un loc unde excelența este un fapt vizibil în fiecare produs.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Selectăm personal fiecare tăietură premium și fiecare delicatesă. Misiunea noastră este simplă: să aducem cele mai bune arome ale Istanbulului direct la tine, fără compromis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-light">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}