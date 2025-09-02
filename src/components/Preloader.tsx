import React, { useEffect } from "react";

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    const loadingScreen = document.getElementById("loading-screen");
    const logo = document.getElementById("logo");
    const brandName = document.getElementById("brand-name");
    const loadingDots = document.getElementById("loading-dots");

    // Logo animation
    setTimeout(() => {
      logo?.classList.remove("scale-0", "translate-y-10", "opacity-0");
      logo?.classList.add("scale-100", "translate-y-0", "opacity-100");
    }, 500);

    // Brand name animation
    setTimeout(() => {
      brandName?.classList.remove("opacity-0", "translate-y-4");
      brandName?.classList.add("opacity-100", "translate-y-0");
    }, 1500);

    // Loading dots animation
    setTimeout(() => {
      loadingDots?.classList.remove("opacity-0");
      loadingDots?.classList.add("opacity-100");
    }, 2300);

    // Fade out entire loading screen
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add("opacity-0", "pointer-events-none");
        setTimeout(() => {
          loadingScreen.remove();
        }, 800);
      }
    }, 4500);
  }, []);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-700"
    >
      <div className="text-center">
        {/* Logo */}
        <div
          id="logo"
          className="w-28 h-28 mx-auto transform scale-0 translate-y-10 opacity-0 transition-all duration-[1500ms] ease-out"
        >
          <img src="/Logo5.png" alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Brand Name */}
        <div
          id="brand-name"
          className="opacity-0 transform translate-y-4 transition-all duration-[1000ms] ease-out mt-2"
        >
          <h1 className="text-[#63806E] font-bold text-2xl">Reps Remove all Doubts</h1>
        </div>

        {/* Loading Dots */}
        <div
          id="loading-dots"
          className="flex justify-center space-x-2 mt-2 opacity-0 transition-opacity duration-[800ms]"
        >
          <div
            className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.8s" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "1.6s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
