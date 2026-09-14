import React from "react";
import { Globe, ShieldCheck, Award } from "lucide-react";

export default function TrustSection() {
  return (
    <section id="trust" className="bg-white border-y border-stone-200 py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.35em] text-bronze-primary uppercase font-light">MANUFACTURER PROFILE & QUALITY ASSURANCE</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-900 mt-3 mb-6">The Benchmark of High-End Production in Istanbul</h2>
          <div className="w-20 h-[1px] bg-bronze-primary/55 mx-auto mb-6"></div>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            BUONO ODRE is a dedicated brand owner and high-capacity luxury manufacturer based in Turkey. We ensure absolute consistency for foreign buyers, luxury hotels, and premium retail networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4 p-5 bg-[#FAF9F6] border border-stone-200 hover:border-bronze-primary/30 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center border border-stone-200 text-bronze-primary">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-stone-900 mb-1">Eurasian Market Leadership</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">Turkey’s premier specialized factory in handcrafted premium botanical assemblies and high-tier glasswares, exporting to 14+ countries across EU and GCC.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-5 bg-[#FAF9F6] border border-stone-200 hover:border-bronze-primary/30 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center border border-stone-200 text-bronze-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-stone-900 mb-1">IFRA & REACH-EU Certified</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">Home fragrance formulas comply with IFRA standards. Botanical polymers are certified eco-friendly, non-toxic, and flame-retardant (REACH certified).</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-[#FAF9F6] border border-stone-200 hover:border-bronze-primary/30 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center border border-stone-200 text-bronze-primary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-stone-900 mb-1">Patented Designs & Trademarks</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">Registered trademark. Hand-carved crest designs, glass molds, and custom fragrance formulations are protected globally, offering exclusive brand prestige.</p>
              </div>
            </div>
          </div>

          <div className="luxury-glass bg-white p-8 md:p-10 flex flex-col justify-between border-l-2 border-l-bronze-primary h-full shadow-sm">
            <div>
              <span className="text-[10px] tracking-[0.2em] text-bronze-primary font-bold uppercase block mb-2 font-mono">BUONO ODRE AT A GLANCE</span>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-900 leading-tight mb-6">Uncompromising Quality & Manufacturing Power</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
                We manage 100% of the production and packing process in-house. Sourcing directly from our state-of-the-art facility guarantees that your bulk orders remain uniform, batch after batch.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-200">
              <div>
                <div className="font-serif text-3xl text-stone-800 font-light">15k sqm</div>
                <div className="text-[10px] tracking-[0.1em] text-stone-500 uppercase mt-1 font-sans">Facility Area</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-stone-800 font-light">100%</div>
                <div className="text-[10px] tracking-[0.1em] text-stone-500 uppercase mt-1 font-sans">Export Safe Packing</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-stone-800 font-light">0%</div>
                <div className="text-[10px] tracking-[0.1em] text-stone-500 uppercase mt-1 font-sans">Breakage rate</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-stone-800 font-light">12 Hours</div>
                <div className="text-[10px] tracking-[0.1em] text-stone-500 uppercase mt-1 font-sans">RFQ SLA Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
