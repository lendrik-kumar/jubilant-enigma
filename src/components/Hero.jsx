import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-[600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm md:text-base font-light text-gray-300 tracking-widest uppercase mb-4">
                Defying gravity
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                X LOWS ARMSTRONG
              </h1>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-yellow-400 text-black font-semibold text-sm md:text-base uppercase tracking-wide hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
                SHOP MEN
              </button>
              <button className="px-8 py-3 bg-yellow-400 text-black font-semibold text-sm md:text-base uppercase tracking-wide hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
                SHOP WOMEN
              </button>
            </div>
          </div>
          
          {/* Right Content - Shoe Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent blur-3xl"></div>
              
              {/* Shoe Image */}
              <img 
                src="/public/shoes/shoe-10.avif" 
                alt="X Lows Armstrong Shoe" 
                className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Smoke/Fog Effect (decorative) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
};

export default Hero;
