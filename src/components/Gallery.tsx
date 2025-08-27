import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const features = [
    'Easy to Customize',
    'Perfectly Responsive', 
    'Semantic Code'
  ];

  const initialImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Technology circuit board',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team collaboration',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Business meeting',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Network connections',
      span: 'col-span-2 row-span-1'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Remote work',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Code development',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Digital innovation',
      span: 'col-span-2 row-span-1'
    }
  ];

  const additionalImages = [
    {
      id: 8,
      url: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Data visualization',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tech workspace',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Innovation lab',
      span: 'col-span-2 row-span-1'
    }
  ];

  const currentImages = showMore ? [...initialImages, ...additionalImages] : initialImages;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_theme(colors.blue.600/20)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.slate.400/20)_0%,_transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-600/80 backdrop-blur-sm text-slate-100 px-4 py-2 rounded-full text-sm font-medium border border-slate-500/50 shadow-lg"
            >
              • {feature}
            </div>
          ))}
        </div>

        {/* Stacked cards container */}
        <div className="relative flex justify-center items-center">
          {/* Background cards for stacking effect */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-full max-w-4xl h-96 bg-white/5 backdrop-blur-sm rounded-2xl transform rotate-2 scale-95 shadow-2xl border border-white/10"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-full max-w-5xl h-96 bg-white/8 backdrop-blur-sm rounded-2xl transform -rotate-1 scale-98 shadow-xl border border-white/10"></div>
          </div>

          {/* Main gallery card */}
          <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.02] border border-slate-200">
            {/* Gallery grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {currentImages.map((image) => (
                <div
                  key={image.id}
                  className={`${image.span} group cursor-pointer overflow-hidden rounded-xl bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Load More button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="group bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                {showMore ? 'Show Less' : 'Load More'}
                <ChevronRight 
                  className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Side decoration cards */}
        <div className="hidden lg:block">
          {/* Left side cards */}
          

          {/* Right side cards */}
          
        </div>
      </div>
    </div>
  );
};

export default Gallery;