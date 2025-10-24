import React from 'react';
import { Play, Clock, Calendar, ExternalLink } from 'lucide-react';

interface Podcast {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  publishDate: string;
  podcastUrl: string;
  category: string;
}

const PodcastPage = () => {
  // Sample podcast data - replace with your actual podcast data
  const podcasts: Podcast[] = [
    {
      id: '1',
      title: 'The Matrix Green Pill',
description: 'Host Hilmarie Hutchison talks with Jazzmarr about how discipline and purpose shaped his journey from Louisville to international basketball, and how that same mindset fuels Reps with Jazz. He shares defining career moments, why "reps remove all doubt," the difference between coaching teens and adults, and practical ways to beat comparison, improve focus, and turn habits into confidence. He also outlines his plans to expand workshops and keynotes across the Middle East and beyond.',
      thumbnail: 'PodcastImage1.png',
      duration: '27:14',
      publishDate: 'October 22, 2025',
      podcastUrl: 'https://thematrixgreenpill.com/episodes/episode-267/',
      category:''
    },
    {
      id: '2',
      title: 'Around The Emirates With Sara Mousa',
      description: 'Jazz Ferguson is a professional basketball player turned mental performance coach who empowers ambitious teens and adult leaders to unlock their potential! Founder of Reps With Jazz, he delivers mentorship programs that build resilience, confidence, and the winning mindset needed to succeed in sports and life. Raised in one of Louisville\'s toughest neighbourhoods, Jazz overcame early challenges through relentless discipline and focus—qualities that carried him to a 15-year pro career.',
      thumbnail: 'https://athletesuntapped.com/browse/wp-content/uploads/2024/08/MPC-City-2.jpg',
      duration: '9:48',
      publishDate: 'October 18, 2025',
      podcastUrl: 'https://www.buzzsprout.com/1689514/episodes/18031434?brid=fOUaQuzyyy2BEJqwweAHzw',
      category: ''
    }
  ];

  const handleWatchNow = (podcastUrl: string) => {
    window.open(podcastUrl, '_blank');
  };

  return (
    <div id="podcast" className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            Featured Podcasts
          </h1>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
            I've had the privilege of being featured on these meaningful conversations about healing, 
            wellness, and personal transformation. Each appearance shares insights from my journey 
            and offers guidance for those seeking their own path to wholeness.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Podcasts Grid - Optimized for 2 podcasts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={podcast.thumbnail}
                  alt={podcast.title}
                  className="w-full h-64 lg:h-72 object-cover  transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{podcast.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-2 text-amber-600 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{podcast.publishDate}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-amber-900 mb-4 leading-tight">
                  {podcast.title}
                </h3>
                
                <p className="text-amber-700 leading-relaxed mb-8 text-base">
                  {podcast.description}
                </p>

                {/* Watch Now Button */}
                <button
                  onClick={() => handleWatchNow(podcast.podcastUrl)}
                  className="w-full cursor-pointer bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-3 group/btn shadow-lg hover:shadow-xl"
                >
                  <Play className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-200 " />
                  <span className="text-lg">Listen Now</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              More Coming Soon
            </h3>
            <p className="text-amber-700 mb-6">
              I'm always excited to share insights and connect with new audiences. 
              Stay tuned for more podcast appearances and conversations about healing and transformation.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-8 rounded-xl font-medium hover:from-amber-700 hover:to-orange-700 transition-all duration-300 hover:scale-105"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;