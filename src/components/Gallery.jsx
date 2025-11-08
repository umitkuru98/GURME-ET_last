import React, { useEffect, useRef, useState } from 'react';

export default function Gallery({ title, subtitle, images, variant = "primary" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State pentru lățimea ferestrei

  useEffect(() => {
    const handleScroll = () => {
      const entry = sectionRef.current?.getBoundingClientRect();
      if (entry) {
        setIsVisible(entry.top < window.innerHeight && entry.bottom >= 0);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Actualizează lățimea ferestrei la redimensionare
    };

    // Inițial verificăm vizibilitatea și lățimea
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize); // Ascultă evenimentul de redimensionare

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Dependențe goale, funcțiile se bazează pe ref și state

  const bgColor = variant === "primary" ? "bg-white" : "bg-[#0A0A0A]";
  const textColor = variant === "primary" ? "text-[#0A0A0A]" : "text-white";

  return (
    <section ref={sectionRef} id={title.toLowerCase().replace(/\s/g, '-')} className={`py-16 sm:py-20 md:py-24 lg:py-32 ${bgColor} relative overflow-hidden`}>
      {variant === "primary" && (
        <div className="absolute top-1/2 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#DC2626] opacity-5 rounded-full blur-3xl" />
      )}
      {variant === "secondary" && (
        <div className="absolute bottom-1/2 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white opacity-5 rounded-full blur-3xl" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${textColor} mb-3 sm:mb-4 tracking-tight px-4`}>
            {title}
          </h2>
          <p className={`text-base sm:text-lg md:text-xl ${variant === "primary" ? "text-gray-600" : "text-gray-400"} font-light px-4`}>
            {subtitle}
          </p>
          <div className={`w-20 sm:w-24 h-1 ${variant === "primary" ? "bg-[#DC2626]" : "bg-white"} mx-auto mt-4 sm:mt-6`} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {images.map((image, index) => {
            const isLarge = index === 0 || index === 3;
            // Calculează aspect-ratio dinamic bazat pe windowWidth
            const currentAspectRatio = isLarge && windowWidth >= 768 ? '16/10' : '1/1';
            const htmlRatio = isLarge ? {width: 600, height: 375} : {width: 400, height: 400}; // Exemplu de dimensiuni pentru SEO

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-700 ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  // ⬅️ FIX: Aspect ratio calculat dinamic
                  aspectRatio: currentAspectRatio,
                }}
              >
                <img
                  src={image.src || image} 
                  alt={image.alt || `Tăietură premium de carne halal, specialitate turcească Gurme-et, imagine ${index + 1}`}
                  loading="lazy" 
                  width={htmlRatio.width}
                  height={htmlRatio.height}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}