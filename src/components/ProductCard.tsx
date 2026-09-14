import React from "react";
import { Clock, Check } from "lucide-react";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  isInBasket: boolean;
  onAddToInquiry: (product: Product) => void;
}

export default function ProductCard({ product, isInBasket, onAddToInquiry }: ProductCardProps) {
  return (
    <div className="luxury-glass luxury-glass-hover flex flex-col justify-between p-6 relative overflow-hidden group">
      {/* Visual Placeholder */}
      <div className={`w-full aspect-[4/3] bg-gradient-to-br ${product.visualGradient} border border-zinc-900 mb-6 flex flex-col items-center justify-center p-6 relative overflow-hidden`}>
        <div className="absolute inset-2 border border-bronze-primary/5 pointer-events-none" />
        
        {product.visualIcon === "botanical" ? (
          <div className="text-zinc-700/25 group-hover:text-bronze-primary/20 transition-colors duration-500">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M50 85V25" />
              <path d="M50 45C50 45 35 35 35 20C35 5 50 15 50 15C50 15 65 5 65 20C65 35 50 45 50 45Z" />
              <path d="M50 55C50 55 68 50 72 38" />
              <path d="M50 65C50 65 32 60 28 48" />
            </svg>
          </div>
        ) : (
          <div className="text-zinc-700/25 group-hover:text-bronze-primary/20 transition-colors duration-500">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="35" y="40" width="30" height="45" rx="3" />
              <path d="M45 40V25" />
              <path d="M55 40V22" />
              <path d="M50 25C47 22 47 18 50 15" strokeLinecap="round" />
            </svg>
          </div>
        )}

        <span className="absolute top-4 left-4 bg-zinc-950/90 border border-zinc-800 text-[8px] font-sans tracking-[0.15em] uppercase text-zinc-400 px-2 py-1">
          {product.categoryLabel}
        </span>

        <span className="absolute top-4 right-4 bg-zinc-950/90 border border-bronze-primary/30 text-[8px] font-sans tracking-[0.15em] uppercase text-bronze-primary px-2 py-1">
          MOQ: {product.moq} Pcs
        </span>

        <span className="absolute bottom-4 left-4 text-[9px] tracking-widest text-zinc-500 font-light font-mono">
          {product.volumeOrSize}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl text-zinc-100 group-hover:text-bronze-primary transition-colors duration-300 mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
            {product.description}
          </p>
          <ul className="space-y-1.5 mb-6 text-[10px] text-zinc-500 font-light font-sans">
            {product.specs.map((spec, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-bronze-primary/60 rounded-full" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-zinc-900">
          <div className="flex items-center justify-between gap-4">
            <div className="text-[10px] text-zinc-500 flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-zinc-600" />
              <span>{product.leadTime}</span>
            </div>
            {isInBasket ? (
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-bronze-primary font-semibold font-mono">
                <Check className="w-3.5 h-3.5" />
                <span>Selected</span>
              </div>
            ) : (
              <button 
                onClick={() => onAddToInquiry(product)}
                className="px-4 py-2 border border-bronze-primary/30 hover:border-bronze-primary hover:bg-bronze-primary/5 text-bronze-primary hover:text-zinc-100 bg-transparent font-medium text-[10px] uppercase tracking-wider transition-all cursor-pointer font-sans"
              >
                Add to RFQ
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
