import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Polina Hohonova ',
      title: 'Business Executive',
      image: 'nopp.jpg',
      rating: 5,
      text: 'Working with Jazz has been a truly transformative experience. His positive energy and genuine presence created a safe, welcoming space where I felt completely supported. Jazz has an incredible ability to listen deeply, helping me uncover blind spots I had not even realized were there. What stood out most was his flexibility in tuning into my personality and views on life. This made me feel completely like myself while also empowering me to shift perspectives and make meaningful changes to improve my life. I am so grateful for the growth I have achieved with Jazz\'s help—he\'s truly exceptional at what he does.',
      result: 'Promoted to VP and leading a team of 50+ people'
    },
    {
      name: 'Tina Allen',
      title: 'Entrepreneur',
      image: 'nopp.jpg',
      rating: 5,
      text: 'Jazz has a truly unique way of pointing you in the right direction—not by telling you what to do, but by gently guiding you toward your own clarity. His perspective is refreshing and often exactly what I need to shift how I see a situation. Through his thoughtful encouragement and intuitive insight, I\'ve discovered my niche and gained a deeper understanding of myself. Jazz does not just coach—he creates space for transformation. I\'m so grateful for his presence and the way he leads with both wisdom and heart.',
      result: 'Scaled startup to $2M revenue in 18 months'
    }
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 border-t-1 border-amber-200  bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Client
            <span className="block leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-700">
              Victory Stories
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real champions, real results. These victory stories represent the mental toughness, dedication, 
            and champion mindset that my clients developed to achieve extraordinary success.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 md:p-12 shadow-lg border border-amber-200 min-h-[400px] flex flex-col justify-center">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-amber-300 mb-6" />
            
            {/* Testimonial Content */}
            <div className="space-y-6">
              <p className="text-md md:text-xl text-gray-700 leading-relaxed font-medium">
                {testimonials[currentIndex].text}
              </p>

              {/* Result */}
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-2 md:p-4 border-l-4 border-amber-500">
                <p className="text-[12px] font-semibold text-amber-800 mb-1">Victory Achieved:</p>
                <p className="text-[12px] text-gray-700">{testimonials[currentIndex].result}</p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-300"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentIndex].title}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="hidden md:flex md:items-center md:space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute hidden -left-15 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone-100 rounded-full shadow-lg border border-amber-300 md:flex md:items-center md:justify-center hover:bg-amber-50 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 cursor-pointer hidden md:block text-amber-700" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute hidden -right-15 top-1/2 -translate-y-1/2 w-12 h-12 bg-stone-100 rounded-full shadow-lg border border-amber-300 md:flex md:items-center md:justify-center hover:bg-amber-50 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 cursor-pointer hidden md:block text-amber-700" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-amber-600 w-8'
                  : 'bg-amber-200 hover:bg-amber-300'
              }`}
            />
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">40+</div>
            <div className="text-sm text-gray-600">Champions Created</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">15 Years</div>
            <div className="text-sm text-gray-600">Pro Basketball</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;