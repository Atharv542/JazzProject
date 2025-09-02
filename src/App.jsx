import React from 'react';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";
import MotivationalSpeaking from './components/MotivationSpeaking';
import Gallery from './components/Gallery';

import WhatsAppFooterButton from './components/WhatsappButton';
import LoadingScreen from './components/Preloader';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

function App() {
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MotivationalSpeaking/>
      <Testimonials />
      {isDesktop && <Gallery />}
      <BookingForm />
      <Footer />
       <WhatsAppFooterButton />
      <Toaster/>
    </div>
  );
}

export default App;
