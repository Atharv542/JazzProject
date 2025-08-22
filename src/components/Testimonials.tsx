import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Alex Thompson',
      title: 'Business Executive',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Jazz taught me what it really means to have a champion mindset. His experience as a professional athlete gave him unique insights into mental toughness that completely transformed how I approach challenges. I now tackle obstacles with the same intensity he brought to the court.',
      result: 'Promoted to VP and leading a team of 50+ people'
    },
    {
      name: 'Sarah Martinez',
      title: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Jazz was like having a championship coach for my life. He helped me develop the mental discipline and strategic thinking that athletes use to win. His coaching style is direct, powerful, and incredibly effective. I now approach my business with unstoppable confidence.',
      result: 'Scaled startup to $2M revenue in 18 months'
    },
    {
      name: 'David Park',
      title: 'Sales Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Jazz understands what it takes to perform under pressure because he lived it for 15 years. He taught me how to stay calm, focused, and confident even in the most challenging situations. The mental training techniques he shared have been game-changing.',
      result: 'Exceeded sales targets by 300% and won top performer award'
    },
    {
      name: 'Jennifer Wilson',
      title: 'Team Leader',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: `Jazz's approach to leadership coaching is incredible. He doesn't just teach theory - he shares real strategies that champions use to lead winning teams. Through our sessions, I learned how to motivate my team and create a culture of excellence. The results speak for themselves.`,
      result: 'Led team to record-breaking performance and 95% retention rate'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Former College Athlete',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'As a former college athlete, I thought I understood mental toughness. Jazz showed me there were levels I had never reached. His coaching helped me transition from sports to the business world with the same competitive edge. I now dominate in my career like I did on the field.',
      result: 'Successfully transitioned to finance and became top analyst'
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Client
            <span className="block leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
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
          <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-8 md:p-12 shadow-lg border border-orange-100 min-h-[400px] flex flex-col justify-center">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-orange-300 mb-6" />
            
            {/* Testimonial Content */}
            <div className="space-y-6">
              <p className="text-md md:text-xl text-gray-700 leading-relaxed font-medium">
                {testimonials[currentIndex].text}
              </p>

              {/* Result */}
              <div className="bg-gradient-to-r from-orange-100 to-rose-100 rounded-lg p-2 md:p-4 border-l-4 border-orange-400">
                <p className="text-[12px] font-semibold text-orange-800 mb-1">Victory Achieved:</p>
                <p className="text-[12px] text-gray-700">{testimonials[currentIndex].result}</p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
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
            className="absolute hidden -left-15 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-orange-200 md:flex md:items-center md:justify-center hover:bg-orange-50 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 cursor-pointer hidden md:block text-orange-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute hidden -right-15 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-orange-200 md:flex md:items-center md:justify-center hover:bg-orange-50 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 cursor-pointer hidden md:block text-orange-600" />
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
                  ? 'bg-orange-600 w-8'
                  : 'bg-orange-200 hover:bg-orange-300'
              }`}
            />
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">300+</div>
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