import React from "react";
import { Heart } from "lucide-react";
import "./Preloader.css"; // import your CSS file

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-emerald-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Basketball Animation Container */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="basketball-container">
            <div className="basketball">
              <div className="basketball-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </div>

          {/* Heart */}
          <div className="heart-container">
            <Heart className="w-16 h-16 text-rose-500 fill-current" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="loading-text">Developing Your Champion Mindset</span>
          </h2>
          <div className="flex justify-center space-x-1">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
