import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Home, Settings, User, MessageSquare,Headphones } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'podcast', label: 'Podcast', icon: Headphones },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'booking', label: 'Book Session', icon: Calendar },
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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200/50 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Animated Logo */}
          
          <div className="flex items-center space-x-2">
           <img className='w-16 scale-150 -mt-1 ml-2'  src='Jazz_Logo_5.png'/>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm cursor-pointer font-semibold transition-all duration-300 hover:text-amber-600 hover:scale-105 flex items-center space-x-2 px-3 py-2 rounded-xl ${
                    activeSection === item.id 
                      ? 'text-amber-600 bg-amber-50 shadow-md' 
                      : 'text-gray-700 hover:bg-amber-50/50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
           <button
                onClick={() => scrollToSection('booking')}
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 cursor-pointer text-white px-6 py-3 rounded-xl text-sm font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 border-2 border-amber-300/50"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200 py-4 rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 mx-2 text-sm font-semibold transition-all duration-300 hover:text-amber-600 hover:bg-amber-50 rounded-xl flex items-center space-x-3 ${
                      activeSection === item.id 
                        ? 'text-amber-600 bg-amber-50 shadow-md' 
                        : 'text-gray-700'
                    }`}
                  >
                    <div className={`p-1 rounded-lg ${activeSection === item.id ? 'bg-amber-100' : 'bg-gray-100'}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="px-4 pt-4 border-t border-amber-200 mt-2">
               <button
                onClick={() => scrollToSection('booking')}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-4 py-3 rounded-xl text-sm font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
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