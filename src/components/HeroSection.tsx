import React from "react";
import { Sparkles, Layers, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="heritage" className="relative pt-24 pb-32 px-6 overflow-hidden bg-[#FAF9F6]">
      {/* Subtle light warm background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,115,75,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Crown Emblem Decorative SVG */}
        <div className="mb-8 flex justify-center text-bronze-primary/80">
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L62 35H38L50 15Z" fill="currentColor" opacity="0.3" />
            <path d="M20 45L50 30L80 45L70 75H30L20 45Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="52" r="5" fill="currentColor" />
            <circle cx="35" cy="48" r="3" fill="currentColor" />
            <circle cx="65" cy="48" r="3" fill="currentColor" />
            <path d="M42 63H58" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <p className="text-[12px] tracking-[0.35em] text-bronze-primary uppercase mb-6 font-light">
          ELEGANCE UNVEILED • B2B EXPORT EXCLUSIVE
        </p>
        
        <h1 className="font-serif text-4xl md:text-7xl font-light text-stone-900 leading-tight max-w-5xl mx-auto tracking-wide mb-8 animate-fade-in">
          Handcrafted Botanical Artistry & <span className="text-gradient-gold">Couture Home Fragrances</span>
        </h1>
        
        <p className="text-stone-600 text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Curated exclusively for elite international distributors, luxury hospitality providers, and premium retail establishments. We formulate exquisite essential oils and forge hand-polished metallic crest glass vases housing ultra-realistic handcrafted botanical arrangements in Istanbul.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#collections" 
            className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-stone-50 font-semibold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-stone-850 active:scale-95 text-center cursor-pointer shadow-sm"
          >
            Explore Collections
          </a>
          <a 
            href="#trust" 
            className="w-full sm:w-auto px-8 py-4 border border-stone-300 hover:border-bronze-primary hover:bg-stone-100 text-stone-800 font-light text-[11px] uppercase tracking-[0.2em] transition-all duration-300 text-center cursor-pointer"
          >
            Our Credentials
          </a>
        </div>

        {/* THREE MAIN FEATURES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left">
          
          <div className="luxury-glass bg-white p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200">
            <div className="text-bronze-primary mb-5">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-bronze-primary transition-colors duration-300">
              Real-Touch Botanicals
            </h3>
            <p className="text-stone-600 text-xs font-light leading-relaxed">
              Premium handcrafted arrangements featuring hyper-realistic roses, Turkish tulips, and full-bodied hydrangeas. Everlasting aesthetics, requiring absolutely zero maintenance.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </div>

          <div className="luxury-glass bg-white p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200">
            <div className="text-bronze-primary mb-5">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-bronze-primary transition-colors duration-300">
              Mouth-Blown Glass & Crests
            </h3>
            <p className="text-stone-600 text-xs font-light leading-relaxed">
              Heavyweight, artisan-blown glass vases available in deep obsidian, smoky charcoal, and emerald tones, accented by hand-cast alloy crests hand-polished to perfection.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </div>

          <div className="luxury-glass bg-white p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200">
            <div className="text-bronze-primary mb-5">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-bronze-primary transition-colors duration-300">
              Artisan Home Fragrances
            </h3>
            <p className="text-stone-600 text-xs font-light leading-relaxed">
              Specially formulated reed diffusers, room sprays, and soy wax candles. Infused with organic sandalwood, Cambodian oud, and rare ambergris with an exceptional scent throw.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </div>

        </div>

      </div>
    </section>
  );
}
