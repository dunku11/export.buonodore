import React from "react";
import { PackageCheck, Truck, Anchor, Info } from "lucide-react";

export default function LogisticsSection() {
  return (
    <section id="logistics" className="py-24 px-6 max-w-6xl mx-auto relative z-10 bg-[#FAF9F6]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] tracking-[0.35em] text-bronze-primary uppercase font-light">SECURE WHOLESALE DISTRIBUTION</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-900 mt-3 mb-6">Export Logistics & Secure Palletizing</h2>
        <div className="w-20 h-[1px] bg-bronze-primary/55 mx-auto mb-6"></div>
        <p className="text-stone-600 text-sm font-light leading-relaxed">
          Shipping luxury mouth-blown glassware and premium fragrances worldwide requires unparalleled logistics engineering. We ensure your order is packed securely using customized industrial methods to guarantee transit integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-stone-50 border border-stone-200 flex items-center justify-center text-bronze-primary mb-6">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-stone-900 mb-3">Moulded Foam Cushioning</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Every mouth-blown glass vase is fitted inside an exact-fit custom-moulded polyfoam cushion. This suspends the heavy glass shell in mid-box, absorbing 100% of shocks during rough sea transit or loading.
            </p>
          </div>
          <span className="text-[10px] tracking-widest text-stone-400 uppercase font-mono mt-6">STAGE 01 — ITEM SAFETY</span>
        </div>

        <div className="p-6 bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-stone-50 border border-stone-200 flex items-center justify-center text-bronze-primary mb-6">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-stone-900 mb-3">Double-Walled Cartons</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              We use BC-flute double-walled heavy corrugated board cartons. Our master cartons are wrapped in heavy moisture-barrier film and bound with industrial tension straps to resist extreme marine humidity.
            </p>
          </div>
          <span className="text-[10px] tracking-widest text-stone-400 uppercase font-mono mt-6">STAGE 02 — OUTER CARTON</span>
        </div>

        <div className="p-6 bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-stone-50 border border-stone-200 flex items-center justify-center text-bronze-primary mb-6">
              <Anchor className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-stone-900 mb-3">Flexible Export Shipping</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Operating smoothly under FOB (Ambarlı / Istanbul Port), FCA (Istanbul customs), or CIF (your destination port). We supply complete commercial invoices, packing lists, MSDS certificates, and certificates of origin.
            </p>
          </div>
          <span className="text-[10px] tracking-widest text-stone-400 uppercase font-mono mt-6">STAGE 03 — GLOBAL FREIGHT</span>
        </div>
      </div>

      <div className="mt-12 p-6 bg-white border border-stone-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-bronze-primary/5 flex items-center justify-center text-bronze-primary flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-base text-stone-900">Wholesale MOQ & Volume Policy</h4>
            <p className="text-xs text-stone-600 font-light">
              Minimum absolute order value is **$5,000 USD** per shipment to process custom customs clearing in Turkey.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-[10px] tracking-widest uppercase text-stone-500 font-mono">
          <span>• Custom Casting ODM Available</span>
          <span>• SGS Inspection Welcomed</span>
          <span>• REACH Compliant Raw Materials</span>
        </div>
      </div>
    </section>
  );
}
