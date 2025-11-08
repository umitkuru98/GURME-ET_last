import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer'; // Import the new Footer component
import { Toaster } from '@/components/ui/toaster';

function App() {
  const primeCutsImages = [
    "https://images.pexels.com/photos/9541976/pexels-photo-9541976.jpeg",
    "https://images.pexels.com/photos/13279401/pexels-photo-13279401.jpeg",
    "https://www.telegraph.co.uk/content/dam/Food%20and%20drink/scotchbeef/joint-of-beef-marbling.jpg?imwidth=350",
    "https://www.yildizet.com.tr/idea/nt/45/myassets/products/409/yildiz-et-antrikot-pastirma-1-kg-55.jpeg?revision=1758028582"
  ];

  const turkishSpecialtiesImages = [
    "https://www.celebiogullari.com.tr/UserFiles/Image/images/soguk-baklava-hakkinda-bilmeniz-gerekenler.jpg",
    "https://back-lava.de/cdn/shop/files/ConvertOut-Resized-Backlava-13.05.24_55_1_3.jpg?v=1752929405&width=1620",
    "https://png.pngtree.com/png-vector/20240512/ourlarge/pngtree-turkish-grand-spice-bazaar-in-istanbul-turkey-a-burst-of-vibrant-png-image_12400994.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IaoQuYz2T99qnRJazNhbNmsuKgUQxdEwhw&s"
  ];

  return (
    <>
      <Helmet>
        <title>Gurm-et | Premium Butcher Shop & Turkish Market</title>
        <meta name="description" content="Gurm-et offers premium quality meats and authentic Turkish specialties. Visit our butcher shop for the finest cuts and traditional Turkish products." />
      </Helmet>
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
        <Footer /> {/* Render the Footer component here */}
        <Toaster />
      </div>
    </>
  );
}

export default App;