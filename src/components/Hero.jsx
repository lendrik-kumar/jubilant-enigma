import React from "react";
import { Link } from "../hooks/useRouter.jsx";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-[700px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 text-xs font-bold bg-amber-500/20 text-amber-400 rounded-full uppercase tracking-widest mb-6">
                New Collection 2026
              </span>
              <p className="text-sm md:text-base font-light text-neutral-400 tracking-widest uppercase mb-4">
                Defying gravity
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                X LOWS
                <span className="block text-amber-500">ARMSTRONG</span>
              </h1>
            </div>

            <p
              className="text-lg text-neutral-400 max-w-md animate-slide-up stagger-1"
              style={{ animationFillMode: "backwards" }}
            >
              Step into the future with our revolutionary design. Premium
              materials meet cutting-edge technology.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 animate-slide-up stagger-2"
              style={{ animationFillMode: "backwards" }}
            >
              <Link
                href="/products?gender=men"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-neutral-900 font-bold text-sm uppercase tracking-wide rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105"
              >
                Shop Men
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products?gender=women"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-bold text-sm uppercase tracking-wide rounded-full border-2 border-white/30 hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                Shop Women
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 pt-8 border-t border-white/10 animate-fade-in stagger-3"
              style={{ animationFillMode: "backwards" }}
            >
              <div>
                <p className="text-3xl font-bold text-white">50K+</p>
                <p className="text-sm text-neutral-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4.9</p>
                <p className="text-sm text-neutral-500">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100+</p>
                <p className="text-sm text-neutral-500">Styles Available</p>
              </div>
            </div>
          </div>

          {/* Right Content - Shoe Image */}
          <div className="relative flex justify-center items-center animate-fade-in">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full scale-75 animate-pulse-glow"></div>

              {/* Shoe Image */}
              <img
                src="/assets/shoes/shoe-10.avif"
                alt="X Lows Armstrong Shoe"
                className="relative z-10 w-full max-w-xl h-auto object-contain drop-shadow-2xl animate-float"
              />

              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-full shadow-xl animate-bounce-in"
                style={{
                  animationDelay: "0.5s",
                  animationFillMode: "backwards",
                }}
              >
                <span className="text-sm font-bold text-neutral-900">
                  🔥 Trending
                </span>
              </div>
              <div
                className="absolute bottom-8 -left-4 px-4 py-2 bg-amber-500 rounded-full shadow-xl animate-bounce-in"
                style={{
                  animationDelay: "0.7s",
                  animationFillMode: "backwards",
                }}
              >
                <span className="text-sm font-bold text-neutral-900">
                  Free Shipping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
