import React from 'react';
import { Heart, Facebook, Instagram, X } from 'lucide-react'; // ⬅️ Acum importăm 'X' (în loc de 'Twitter')

export default function Footer() {
  // Definim link-urile social media (Acestea sunt PLACEHOLDERS - Te rog să le înlocuiești cu adresele tale reale)
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
    // ⬅️ FOLOSIM ICONIȚA 'X'
    { icon: X, href: "https://x.com/GurmeetRo", label: "X (formerly Twitter)" } 
  ];
  
  // Link-uri de navigare internă (ancore pentru SPA, trimit la secțiunile principale)
  const navLinks = [
    { name: "Despre Noi", href: "#about" },
    { name: "Tăieturi Premium", href: "#tăieturi-premium" },
    { name: "Specialități Turcești", href: "#specialități-turcești" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* SECȚIUNEA PRINCIPALĂ A FOOTERULUI */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 border-b border-gray-800 pb-6 sm:pb-8 mb-6 sm:mb-8">
          
          {/* Blocul 1: Logo și Slogan */}
          <div className="flex flex-col sm:flex-row items-start md:items-center gap-3 sm:gap-4">
            <img 
              src="https://maps.app.goo.gl/YourGoogleMapsLink9" 
              alt="Gurm-et Logo"
              className="h-10 sm:h-12"
            />
            <div className="hidden sm:block h-8 w-px bg-gray-700" />
            <p className="text-gray-400 font-light text-sm sm:text-base text-left">
              Turkish Butcher & More
            </p>
          </div>

          {/* Blocul 2: Navigare Internă (Link-uri rapide) */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 hover:text-[#DC2626] transition duration-300 text-sm sm:text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Blocul 3: Social Media (Link-uri Externe) */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.label}
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              );
            })}
          </div>

        </div> 

        {/* SECȚIUNEA COPYRIGHT */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center">
             
             {/* Textul original "Made with Love" */}
             <div className="flex items-center gap-2 text-gray-400 font-light text-sm sm:text-base order-2 sm:order-1 mt-4 sm:mt-0">
               <span>Made with</span>
               <Heart className="w-4 h-4 text-[#DC2626] fill-current" />
               <span>for our community</span>
             </div>

             {/* Copyright */}
             <div className="text-gray-500 text-xs sm:text-sm font-light order-1 sm:order-2">
               © {new Date().getFullYear()} Gurm-et. Toate drepturile rezervate.
             </div>
        </div>

      </div>
    </footer>
  );
}