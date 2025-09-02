import React from 'react';
import { Compass, ArrowUp, Users, Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      {/* Animated Icon Container */}
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full animate-pulse"></div>
        
        {/* Main Icon Container - Compass for Life Direction */}
        <div className="relative w-12 h-12 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          {/* Compass Icon - represents finding direction in life */}
          <Compass className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" />
          
          {/* Growth Arrow - represents personal development */}
          <ArrowUp className="w-3 h-3 text-amber-200 absolute -top-1 -right-1 animate-bounce opacity-80" style={{
            animationDuration: '2s',
            animationDelay: '0.5s'
          }} />
        </div>
        
        {/* Heart for emotional wellness */}
        <Heart className="absolute -bottom-1 -left-1 w-3 h-3 text-rose-400 animate-pulse opacity-70" style={{ 
          animationDuration: '1.5s',
          animationDelay: '1s' 
        }} />
        
        {/* Connection dots representing community/support */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Logo Text - Horizontal Layout */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:via-orange-600 group-hover:to-amber-800 transition-all duration-300 leading-tight">
          Reps with Jazz
        </h1>
        <p className="text-xs text-amber-700/80 font-medium tracking-wider uppercase group-hover:text-amber-800 transition-colors duration-300 mt-0.5">
          Reps Remove All Doubts
        </p>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default Logo;