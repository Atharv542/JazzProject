import React from 'react';
import { Target, Shield, Zap, Award, Users, CheckCircle, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Accountability Partner',
      description: 'Helping clients set and stay committed to their goals through structured guidance.',
      features: ['Goal Setting & Tracking', 'Weekly Check-ins', 'Progress Monitoring', 'Commitment Strategies'],
      duration: '60 min sessions',
      price: 'From $150'
    },
    {
      icon: Shield,
      title: 'Mental Strengthening',
      description: 'Providing strategies to stay mentally resilient while navigating high expectations in personal and professional life.',
      features: ['Resilience Building', 'Stress Management', 'Pressure Handling', 'Mental Toughness Training'],
      duration: '75 min sessions',
      price: 'From $180'
    },
    {
      icon: Zap,
      title: 'Confidence Building',
      description: 'Offering affirmations and guidance to help clients stay balanced through successes and setbacks.',
      features: ['Self-Affirmation Techniques', 'Success Mindset', 'Setback Recovery', 'Inner Balance'],
      duration: '60 min sessions',
      price: 'From $140'
    },
    {
      icon: Award,
      title: 'Performance Outlook Maintenance',
      description: 'Using self-evaluation techniques to foster habits that lead to sustained high performance.',
      features: ['Self-Evaluation Methods', 'Habit Formation', 'Performance Tracking', 'Continuous Improvement'],
      duration: '90 min sessions',
      price: 'From $200'
    },
    {
      icon: Users,
      title: 'Elite Mentorship Program',
      description: 'Designed for ambitious young athletes who want to develop the mindset and life skills of a professional.',
      features: ['Social Pressure Management', 'Anxiety & Focus Training', 'Discipline Building', 'Goal Clarity & Achievement'],
      duration: '12-week program',
      price: 'From $2,500',
      isProgram: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Elite Performance
            <span className="block leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Coaching Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From 15 years on the basketball court to developing champion mindsets. 
            Professional coaching services designed to unlock your highest potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-emerald-100"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-200 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Session Info */}
                <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-600">{service.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Elite Mentorship Program - Featured */}
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-xl border-2 border-teal-200 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-teal-600" />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                SIGNATURE PROGRAM
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Elite Mentorship Program</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Designed for ambitious young athletes who want to develop the mindset and life skills of a professional. 
                This comprehensive program addresses challenges such as social pressure, anxiety, focus, discipline, habit-building, and goal clarity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {services[4].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>12-week comprehensive program</span>
                  </div>
                  <div className="text-2xl font-bold text-teal-600">From $2,500</div>
                </div>
                <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Develop Your Champion Mindset?</h3>
          <p className="text-lg mb-6 opacity-90">
            Book a free 30-minute strategy session to discuss your goals and create your winning game plan.
          </p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white cursor-pointer text-emerald-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Schedule Free Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;