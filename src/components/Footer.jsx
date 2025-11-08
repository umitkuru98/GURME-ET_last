import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690d173136aae953d00d9a46/d563377ff_gurm-et-logo.png"
              alt="Gurm-et Logo"
              className="h-10 sm:h-12"
            />
            <div className="hidden sm:block h-8 w-px bg-gray-700" />
            <p className="text-gray-400 font-light text-sm sm:text-base text-center sm:text-left">
              Turkish Butcher & More
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 font-light text-sm sm:text-base">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#DC2626] fill-current" />
            <span>for our community</span>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm font-light">
          © {new Date().getFullYear()} Gurm-et. All rights reserved.
        </div>
      </div>
    </footer>
  );
}