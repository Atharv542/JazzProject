import React from 'react';
import { GraduationCap, Award, Heart, Users, BookOpen, Coffee } from 'lucide-react';

const About = () => {
  const credentials = [
    { icon: Award, title: '15 Years Pro Basketball', description: 'NBA & International Leagues' },
    { icon: GraduationCap, title: 'Jay Shetty Certified Coach', description: 'International Coaching Federation' },
    { icon: BookOpen, title: '3yrs Psychology', description: 'Indiana University South East' },
    { icon: Users, title: '50,000+ Engaged Globally', description: 'Across Italy, France, and other parts of the world' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Mental Toughness',
      description: 'I help you develop the same mental resilience that champions use to overcome any obstacle.'
    },
    {
      icon: Users,
      title: 'Winning Strategies',
      description: 'Success in life, like in sports, requires proven strategies, discipline, and consistent execution.'
    },
    {
      icon: Coffee,
      title: 'Team Mindset',
      description: 'Great achievements happen when we work together. I am your teammate in creating the life you want.'
    }
  ];

  return (
    <section id="about" className="py-20  bg-gradient-to-br from-stone-50/50 via-amber-50/30 to-yellow-50/40 border-t-1 border-amber-200 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Meet
                <span className="block leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-700">
                 Jazz Ferguson
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                I spent 15 years as a professional basketball player, competing at the highest levels in the NBA and international leagues. But my greatest victory came when I discovered how to apply the champion mindset to transform lives beyond the court.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My coaching combines the mental toughness strategies that made me a professional athlete with proven life coaching techniques. Together, we'll develop your winning game plan for success in every area of your life.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={credential.title}
                  className="bg-stone-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <credential.icon className="w-8 h-8 text-amber-700 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{credential.title}</h4>
                  <p className="text-xs text-gray-600">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="AboutJazz.jpg"
                alt="Jazz Ferguson - Former Professional Basketball Player"
                className="w-full h-96 md:h-[500px] md:mt-40 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* My Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Coaching Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These champion principles guide my coaching and will help you develop the mindset needed for extraordinary success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 bg-stone-100 rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A Little More About Me</h3>
            <p className="text-gray-600 leading-relaxed md:max-w-3xl mx-auto">
              When I'm not coaching, you'll find me on the basketball court mentoring young players, 
              training at the gym, or spending time with my family. The discipline and dedication that made me a professional athlete now fuels my passion for helping others achieve their dreams. 
              I bring the same intensity, focus, and commitment to your success that I brought to every game. 
              Together, we'll develop your champion mindset and create the winning strategies you need to dominate in life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;