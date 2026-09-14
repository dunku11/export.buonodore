"use client";

import React, { useEffect, useState } from "react";
import {
  Check,
  Clock,
  Droplets,
  Flame,
  Plus,
  ShieldCheck,
  Wind,
  X,
} from "lucide-react";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  isInBasket: boolean;
  onAddToInquiry: (product: Product) => void;
}

const CATEGORY_ICON: Record<Product["visualIcon"], React.ReactNode> = {
  reed: <Droplets className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1} />,
  candle: <Flame className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1} />,
  spray: <Wind className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1} />,
};

function NotesPyramid({ product }: { product: Product }) {
  const levels = [
    {
      label: "Top Notes",
      notes: product.fragranceNotes.top,
      accent: "text-bronze-light",
      badge: "bg-bronze-light/10 border-bronze-light/20",
    },
    {
      label: "Heart Notes",
      notes: product.fragranceNotes.middle,
      accent: "text-bronze-primary",
      badge: "bg-bronze-primary/10 border-bronze-primary/25",
    },
    {
      label: "Base Notes",
      notes: product.fragranceNotes.base,
      accent: "text-bronze-dark",
      badge: "bg-bronze-dark/10 border-bronze-dark/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {levels.map((level) => (
        <div key={level.label} className={`p-4 border ${level.badge} text-center`}>
          <div
            className={`text-[9px] tracking-[0.25em] uppercase font-mono mb-3 ${level.accent}`}
          >
            {level.label}
          </div>
          <div className="text-[11px] text-zinc-300 font-light leading-relaxed space-y-1">
            {level.notes.map((note) => (
              <div key={note}>{note}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductCard({
  product,
  isInBasket,
  onAddToInquiry,
}: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!showDetails) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDetails(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [showDetails]);

  return (
    <>
      <article className="luxury-glass luxury-glass-hover flex flex-col justify-between p-6 relative overflow-hidden group">
        {/* Visual / gradient hero */}
        <button
          type="button"
          onClick={() => setShowDetails(true)}
          aria-label={`View details of ${product.name}`}
          className={`w-full aspect-[4/3] bg-gradient-to-br ${product.visualGradient} border border-zinc-900 mb-6 flex flex-col items-center justify-center p-6 relative overflow-hidden cursor-pointer text-left group/visual`}
        >
          <div className="absolute inset-2 border border-bronze-primary/5 pointer-events-none" />
          <div className="text-zinc-700/25 group-hover/visual:text-bronze-primary/20 transition-colors duration-500">
            {CATEGORY_ICON[product.visualIcon]}
          </div>

          <span className="absolute top-4 left-4 bg-zinc-950/90 border border-zinc-800 text-[8px] font-sans tracking-[0.15em] uppercase text-zinc-400 px-2 py-1">
            {product.categoryLabel}
          </span>

          <span className="absolute top-4 right-4 bg-zinc-950/90 border border-bronze-primary/30 text-[8px] font-sans tracking-[0.15em] uppercase text-bronze-primary px-2 py-1">
            MOQ: {product.moq} Pcs
          </span>

          <span className="absolute bottom-4 left-4 text-[9px] tracking-widest text-zinc-500 font-light font-mono">
            {product.volumeOrSize}
          </span>

          <span className="absolute bottom-4 right-4 text-[9px] tracking-[0.2em] uppercase text-bronze-primary/0 group-hover/visual:text-bronze-primary/70 font-mono transition-colors duration-300">
            View
          </span>
        </button>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl text-zinc-100 group-hover:text-bronze-primary transition-colors duration-300 mb-2">
              {product.name}
            </h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4 line-clamp-3">
              {product.description}
            </p>
            <ul className="space-y-1.5 mb-6 text-[10px] text-zinc-500 font-light font-sans">
              {product.specs.slice(0, 3).map((spec, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-bronze-primary/60 rounded-full" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[10px] text-zinc-500 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-zinc-600" />
                <span>{product.leadTime}</span>
              </div>
              <button
                type="button"
                onClick={() => onAddToInquiry(product)}
                className={`px-4 py-2 border font-medium text-[10px] uppercase tracking-wider transition-all cursor-pointer font-sans ${
                  isInBasket
                    ? "border-bronze-primary/40 bg-bronze-primary/10 text-bronze-primary"
                    : "border-bronze-primary/30 hover:border-bronze-primary hover:bg-bronze-primary/5 text-bronze-primary hover:text-zinc-100 bg-transparent"
                }`}
              >
                {isInBasket ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Selected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    Add to RFQ
                  </span>
                )}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-bronze-primary transition-colors cursor-pointer font-mono text-left"
            >
              Full Details & Fragrance Profile →
            </button>
          </div>
        </div>
      </article>

      {/* Detail Modal */}
      {showDetails && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} details`}
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setShowDetails(false)}
          />

          <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#0b0b0d] border border-bronze-primary/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)]">
            {/* Modal header */}
            <div
              className={`relative h-40 sm:h-48 bg-gradient-to-br ${product.visualGradient} border-b border-zinc-900 flex items-center justify-center overflow-hidden`}
            >
              <div className="absolute inset-3 border border-bronze-primary/10 pointer-events-none" />
              <div className="text-bronze-primary/50">
                {CATEGORY_ICON[product.visualIcon]}
              </div>
              <span className="absolute top-4 left-4 bg-zinc-950/90 border border-zinc-800 text-[9px] tracking-[0.2em] uppercase text-zinc-300 px-2.5 py-1">
                {product.categoryLabel}
              </span>
              <span className="absolute top-4 right-4 bg-zinc-950/90 border border-bronze-primary/30 text-[9px] tracking-[0.2em] uppercase text-bronze-primary px-2.5 py-1">
                MOQ {product.moq} Pcs
              </span>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                aria-label="Close details"
                className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center bg-zinc-950/90 border border-zinc-800 text-zinc-400 hover:text-bronze-primary hover:border-bronze-primary/40 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-zinc-100 mb-2">
                {product.name}
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8 text-[10px] font-mono">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121214] border border-zinc-800 text-zinc-300">
                  <Droplets className="w-3.5 h-3.5 text-bronze-primary" />
                  {product.volumeOrSize}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121214] border border-zinc-800 text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-bronze-primary" />
                  {product.leadTime}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121214] border border-zinc-800 text-zinc-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-bronze-primary" />
                  IFRA Compliant
                </span>
              </div>

              <h4 className="text-[10px] tracking-[0.25em] uppercase text-bronze-primary font-mono mb-4">
                Olfactory Profile
              </h4>
              <NotesPyramid product={product} />

              <h4 className="text-[10px] tracking-[0.25em] uppercase text-bronze-primary font-mono mt-8 mb-4">
                Product Specifications
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.specs.map((spec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[11px] text-zinc-400 font-light"
                  >
                    <Check
                      className="w-3.5 h-3.5 text-bronze-primary mt-0.5 flex-shrink-0"
                    />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-[10px] text-zinc-500 font-light font-mono">
                  MOQ:{" "}
                  <span className="text-bronze-primary">
                    {product.moq} pcs
                  </span>{" "}
                  • Lead Time: {product.leadTime}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onAddToInquiry(product);
                    setShowDetails(false);
                  }}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold border transition-all duration-300 cursor-pointer ${
                    isInBasket
                      ? "border-bronze-primary/40 bg-bronze-primary/10 text-bronze-primary"
                      : "border-bronze-primary/40 hover:bg-bronze-primary/5 text-bronze-primary"
                  }`}
                >
                  {isInBasket ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Inquiry
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Add to Inquiry
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
