"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown,
  CheckCircle2,
  FileDown,
  Loader2,
  Send,
  X,
} from "lucide-react";

import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import TrustSection from "../components/TrustSection";
import LogisticsSection from "../components/LogisticsSection";
import Footer from "../components/Footer";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/products";

export default function Home() {
  const [inquiryList, setInquiryList] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleInquiry = (id: string) => {
    setInquiryList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setShowSuccess(false);
    // Simulated async export-request submission — wire to your API/CRM endpoint.
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setInquiryList([]);
      e.currentTarget.reset();
      window.setTimeout(() => setShowSuccess(false), 6000);
    }, 1800);
  };

  return (
    <>
      <main className="flex-1 relative">
        <HeroSection />

        {/* ================= COLLECTIONS / SHOWCASE ================= */}
        <section
          id="collections"
          className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 scroll-mt-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.35em] text-bronze-primary uppercase font-light">
              THE 2026 WHOLESALE COLLECTIONS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-zinc-100 mt-3 mb-6">
              Couture Home Fragrances, Crafted for Distribution
            </h2>
            <div className="w-20 h-[1px] bg-bronze-primary/55 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Three signature categories engineered for global wholesale — every
              SKU IFRA-compliant, batch-consistent and export-pack ready.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-mono border transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "border-bronze-primary bg-bronze-primary/10 text-bronze-primary"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              All Collections
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-mono border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "border-bronze-primary bg-bronze-primary/10 text-bronze-primary"
                    : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isInBasket={inquiryList.includes(product.id)}
                onAddToInquiry={(p) => toggleInquiry(p.id)}
              />
            ))}
          </div>

          {/* Catalog download CTA */}
          <div className="mt-16 text-center">
            <p className="text-[11px] tracking-[0.35em] text-bronze-primary uppercase font-light mb-4">
              2026 Export Season
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-zinc-100 mb-6">
              Complete Wholesale Catalog
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-bronze-primary/40 hover:border-bronze-primary hover:bg-bronze-primary/5 text-bronze-primary transition-all duration-300 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-[0.2em]">
                Download 2026 Wholesale Export Catalog (PDF)
              </span>
            </a>
            <p className="text-[10px] text-zinc-600 font-light mt-4 max-w-md mx-auto">
              The full PDF preview with pricing tiers is delivered personally by
              our export team — request it through the RFQ form below.
            </p>
          </div>
        </section>

        <TrustSection />
        <LogisticsSection />

        {/* ================= CONTACT / RFQ ================= */}
        <section
          id="contact"
          className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10 scroll-mt-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.35em] text-bronze-primary uppercase font-light">
              B2B WHOLESALE & DISTRIBUTION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-zinc-100 mt-3 mb-6">
              Request a Wholesale Quote
            </h2>
            <div className="w-20 h-[1px] bg-bronze-primary/55 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Share your target markets and volume needs — our export division
              responds within 12 business hours with detailed MOQ, lead-time and
              freight proposals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <input
              type="hidden"
              name="selected_products"
              value={inquiryList.join(",")}
            />

            {/* Selected Collections / SKUs summary */}
            {inquiryList.length > 0 && (
              <div className="mb-6 p-5 bg-[#0e0e11] border border-bronze-primary/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-primary font-mono">
                    Selected Collections / SKUs
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {inquiryList.length} selected
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {inquiryList.map((id) => {
                    const p = PRODUCTS.find((x) => x.id === id);
                    if (!p) return null;
                    return (
                      <span
                        key={id}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#15151a] border border-zinc-800 text-[10px] text-zinc-300 font-mono"
                      >
                        {p.name}
                        <button
                          type="button"
                          onClick={() => toggleInquiry(id)}
                          aria-label={`Remove ${p.name}`}
                          className="text-bronze-primary hover:text-zinc-100 transition-colors cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    );
                  })}
                </div>
                <p className="mt-3 text-[10px] text-zinc-600 font-light">
                  Selected SKUs are attached to this inquiry automatically.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-[#0c0c0e] border border-zinc-800 focus:border-bronze-primary/60 outline-none px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-2"
                >
                  Company / Brand
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className="w-full bg-[#0c0c0e] border border-zinc-800 focus:border-bronze-primary/60 outline-none px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-2"
                >
                  Business Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full bg-[#0c0c0e] border border-zinc-800 focus:border-bronze-primary/60 outline-none px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-2"
                >
                  Country / Market
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="e.g. UAE, Germany, USA"
                  className="w-full bg-[#0c0c0e] border border-zinc-800 focus:border-bronze-primary/60 outline-none px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="volume"
                  className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-2"
                >
                  Estimated Order Volume
                </label>
                <select
                  id="volume"
                  name="volume"
                  defaultValue=""
                  className="w-full bg-[#0c0c0e] border border-zinc-800 focus:border-bronze-primary/60 outline-none px-4 py-3 text-sm text-zinc-200 transition-colors"
                >
                  <option value="" disabled>
                    Select estimated volume
                  </option>
                  <option value="under-500">0 – 500 Units</option>
                  <option value="500-2000">500 – 2,000 Units</option>
                  <option value="2000-10000">2,000 – 10,000 Units</option>
                  <option value="10000+">10,000+ Units</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Target markets, custom branding (ODM), packaging requirements..."
                  className="w-full bg-[#0c0c0e] border border-zinc-800 focus:border-bronze-primary/60 outline-none px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors resize-y"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-[10px] text-zinc-600 font-light max-w-xs">
                IFRA-compliant formulations • REACH compliant materials • NDA
                available for custom projects.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-[#070708] font-semibold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    Send Inquiry <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {showSuccess && (
              <div
                className="mt-6 p-5 border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-4"
                role="status"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-base text-emerald-300">
                    Application Received
                  </h4>
                  <p className="text-xs text-emerald-200/70 font-light">
                    Our export department will contact you within 24 hours.
                  </p>
                </div>
              </div>
            )}
          </form>
        </section>
      </main>

      <Footer />

      {/* ============ FLOATING INQUIRY BADGE ============ */}
      {inquiryList.length > 0 && (
        <button
          type="button"
          onClick={scrollToContact}
          className="fixed bottom-4 right-4 z-[110] max-w-[calc(100vw-2rem)] sm:bottom-6 sm:right-6 inline-flex items-center gap-3 bg-gradient-gold text-[#070708] pl-4 pr-5 py-3 shadow-[0_10px_40px_-10px_rgba(197,168,128,0.6)] hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#070708]/15 font-mono text-[10px] font-semibold">
            {inquiryList.length}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap">
            {inquiryList.length === 1
              ? "Item Selected for RFQ"
              : "Items Selected for RFQ"}
          </span>
          <ArrowDown className="w-4 h-4 shrink-0" />
        </button>
      )}
    </>
  );
}
