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

function App() {
  const [loading, setLoading] = useState(true);

  {/*useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds to show the full animation

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }*/}

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <MotivationalSpeaking/>
      <Testimonials />
      <BookingForm />
      <Footer />
      <Toaster/>
    </div>
  );
}

export default App;