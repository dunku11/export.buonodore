import React from "react";
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050506] border-t border-zinc-900 py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div className="space-y-4 md:col-span-2">
          <span className="font-serif text-2xl tracking-[0.2em] font-light text-gradient-gold select-none">
            BUONO ODRE
          </span>
          <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-sm">
            Timeless symbols of status, prestige, and olfactory perfection. Premium Turkish glassworks manufacturing coupled with sophisticated Milanese design aesthetics. Registered global trademark.
          </p>
          <div className="text-[10px] text-zinc-500 font-light flex flex-col gap-1.5 pt-2 font-mono">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-bronze-primary flex-shrink-0" />
              <span>Maslak Grand Tower Office, Floor 18, Istanbul, Turkey</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-bronze-primary flex-shrink-0" />
              <span>export@buonoodre.com</span>
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-bronze-primary flex-shrink-0" />
              <span>+90 212 998 48 58 (Export Division)</span>
            </span>
          </div>
        </div>

        <div>
          <h5 className="font-serif text-sm text-zinc-200 tracking-wider mb-4 uppercase">Direct Navigation</h5>
          <ul className="space-y-2 text-[11px] font-light text-zinc-500 font-sans">
            <li><a href="#heritage" className="hover:text-bronze-primary transition-colors">Our Heritage</a></li>
            <li><a href="#trust" className="hover:text-bronze-primary transition-colors">Trust & Certification</a></li>
            <li><a href="#collections" className="hover:text-bronze-primary transition-colors">Collections Catalog</a></li>
            <li><a href="#logistics" className="hover:text-bronze-primary transition-colors">Freight & Packaging</a></li>
            <li><a href="#rfq" className="hover:text-bronze-primary transition-colors">B2B RFQ Form</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-serif text-sm text-zinc-200 tracking-wider mb-4 uppercase">Quality Compliance</h5>
          <ul className="space-y-2 text-[11px] font-light text-zinc-500 font-sans font-light">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-bronze-primary flex-shrink-0" />
              <span>IFRA Certified Formulations</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-bronze-primary flex-shrink-0" />
              <span>REACH Compliant Materials</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-bronze-primary flex-shrink-0" />
              <span>ISO 9001 Quality Control</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-bronze-primary flex-shrink-0" />
              <span>A.TR Customs Clearance Ready</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-zinc-900/60 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-zinc-600 font-light font-mono gap-4">
        <div>
          © {new Date().getFullYear()} BUONO ODRE LTD. All Rights Reserved. Patented Designs.
        </div>
        <div className="flex gap-4">
          <span className="hover:text-zinc-450 cursor-pointer">Export Terms</span>
          <span>•</span>
          <span className="hover:text-zinc-450 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-zinc-450 cursor-pointer">EU Customs Alliance</span>
        </div>
      </div>
    </footer>
  );
}
