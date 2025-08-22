import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, Mail,Calendar } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'booking', label: 'Book Session' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-200 to-rose-300 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-xl font-bold text-gray-800">Reps With Jazz</span>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm  cursor-pointer font-medium transition-colors duration-200 hover:text-orange-600 ${
                  activeSection === item.id ? 'text-orange-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
           <button
                onClick={() => scrollToSection('#booking')}
                className="bg-gradient-to-r from-orange-500 to-rose-500 cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-1"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                    activeSection === item.id ? 'text-orange-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2 border-t border-gray-100">
               <button
                onClick={() => scrollToSection('#booking')}
                className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-1"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;