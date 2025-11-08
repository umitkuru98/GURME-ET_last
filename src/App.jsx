import React from 'react';
// 🛑 Helmet eliminat, deoarece Meta Tag-urile sunt în index.html
// import { Helmet } from 'react-helmet'; 
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer'; 
import { Toaster } from '@/components/ui/toaster';

function App() {
  
  // ✅ OPTIMIZARE: Array-uri de obiecte cu Alt Text descriptiv și unic
  const primeCutsImages = [
    { 
      src: "https://images.pexels.com/photos/9541976/pexels-photo-9541976.jpeg",
      alt: "Tăietură de carne de vită premium, măcelărie Gurme-et, imagine 1" 
    },
    { 
      src: "https://images.pexels.com/photos/13279401/pexels-photo-13279401.jpeg", 
      alt: "Măcelar pregătind porții de carne de vită Halal, carne proaspătă"
    },
    { 
      src: "https://www.telegraph.co.uk/content/dam/Food%20and%20drink/scotchbeef/joint-of-beef-marbling.jpg?imwidth=350", 
      alt: "Carne de vită cu marmorare, ideală pentru steak, tăieturi premium"
    },
    { 
      src: "https://www.yildizet.com.tr/idea/nt/45/myassets/products/409/yildiz-et-antrikot-pastirma-1-kg-55.jpeg?revision=1758028582", 
      alt: "Antricot și pastramă turcească, specialități din carne uscată"
    }
  ];

  const turkishSpecialtiesImages = [
    { 
      src: "https://www.dorianradu.ro/wp-content/uploads/2017/06/baclava.jpg", 
      alt: "Soguk Baklava (baclava rece), desert turcesc tradițional"
    },
    { 
      src: "https://back-lava.de/cdn/shop/files/ConvertOut-Resized-Backlava-13.05.24_55_1_3.jpg?v=1752929405&width=1620", 
      alt: "Delicatese turcești autentice, selecție de dulciuri orientale"
    },
    { 
      src: "https://png.pngtree.com/png-vector/20240512/ourlarge/pngtree-turkish-grand-spice-bazaar-in-istanbul-turkey-a-burst-of-vibrant-png-image_12400994.png", 
      alt: "Mirodenii și condimente turcești, ierburi aromatice"
    },
    { 
      src: "https://e498h76z5mp.exactdn.com/wp-content/uploads/2020/11/sesame-halva-scaled.jpg", 
      alt: "Halva cu susan și ciocolată, desert autentic turcesc"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Hero />
        <About />
        <Gallery 
          title="Tăieturi Premium" 
          subtitle="Descoperă cele mai rafinate tăieturi de carne, selectate manual." 
          images={primeCutsImages} 
          variant="primary" 
        />
        <Gallery 
          title="Specialități Turcești" 
          subtitle="Descoperă delicatese turcești autentice, de la halva la mirodenii." 
          images={turkishSpecialtiesImages} 
          variant="secondary" 
        />
        <Contact />
        <Footer /> 
        <Toaster />
      </div>
    </>
  );
}

export default App;