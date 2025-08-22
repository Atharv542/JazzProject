import React from 'react';
import { ArrowDown, Star, Users, Award, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-emerald-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange-300"></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-rose-300"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-emerald-300"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-orange-200"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-orange-600 border border-orange-200">
                <Star className="w-4 h-4 fill-current" />
                <span>Former Pro Basketball Player • Certified Life Coach</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                From Court to Life:
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
                  Champion Mindset
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                After 15 years as a professional basketball player, I discovered that the same mindset that creates champions on the court can transform your entire life. I help ambitious individuals develop mental toughness, resilience, and the winning strategies needed for life success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="group bg-gradient-to-r from-orange-500 to-rose-500 cursor-pointer text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToServices}
                className="border-2 cursor-pointer border-orange-300 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300"
              >
                Explore Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600">Lives Transformed</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-rose-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-sm text-gray-600">Years Pro Basketball</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-emerald-600 fill-current" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-200 via-rose-200 to-emerald-200 hover:scale-105 duration-300 transition-all rounded-3xl p-8 shadow-2xl">
              <img
                src="https://www.basketinside.com/wp-content/uploads/2021/10/51552417405_0d32aa9bde_k.jpg"
                alt="Marcus Johnson - Life Coach and Former Basketball Player"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
                <Calendar className="w-6 h-6 text-orange-600" />
                <div className="text-xs font-semibold text-gray-800 mt-1">Book Today</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float-delayed">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-gray-800 mt-1">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;