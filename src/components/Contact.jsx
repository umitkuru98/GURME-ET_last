import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
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
        if(sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
  }, []);

  // LINK-UL TĂU FINAL PENTRU ADRESĂ
  const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/Gz7nsmtNBVUzyVu49"; 
  const ADDRESS = "Calea București 79, Tunari";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresă Macelărie", 
      details: [
        // Utilizează link-ul tău furnizat
        <a 
          href={GOOGLE_MAPS_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline text-[#DC2626] transition"
        >
          {ADDRESS}
        </a>
      ]
    },
    {
      icon: Clock,
      title: "Program Magazin", 
      details: ["Luni-Sâmbătă: 9:00 - 22:00", "Duminică: 9:00 - 20:00"]
    },
    {
      icon: Phone,
      title: "Contact Telefonic", 
      details: [
        <a href="tel:+40728999988" className="hover:underline text-[#DC2626] transition"> 
          +40 728 99 99 88
        </a>
      ]
    },
    {
      icon: Mail,
      title: "Adresă Email", 
      details: [
        <a href="mailto:contact@gurme-et.ro" className="hover:underline text-[#DC2626] transition">
          cotact@gurme-et.ro
        </a>
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#FAFAF9] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#DC2626] opacity-5 rounded-full blur-3xl transform -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* FIX H2 Break: Utilizăm <span className="whitespace-nowrap"> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-4 sm:mb-6 tracking-tight px-4">
            Contact și Locație <span className="whitespace-nowrap">Gurme-et</span>
          </h2>
          
          <div className="w-20 sm:w-24 h-1 bg-[#DC2626] mx-auto mb-6 sm:mb-8" />
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto px-4">
            Vino să descoperi diferența, sau contactează-ne direct pentru comenzi și detalii.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-1 sm:mb-2">{info.title}</h3> 
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-gray-600 font-light">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Harta Google Maps */}
        <div className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22753.753999341785!2d26.151625815869135!3d44.531143139167575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b21d0b68299a3f%3A0x260bac21cb953706!2sGurme%20et!5e0!3m2!1sen!2sro!4v1762634524292!5m2!1sen!2sro" 
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gurm-et Location"
            className="sm:h-[400px] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}