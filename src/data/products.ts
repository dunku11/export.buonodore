// Product Type Definition
export interface Product {
  id: string;
  name: string;
  category: "botanical" | "fragrance";
  categoryLabel: string;
  description: string;
  moq: number;
  leadTime: string;
  specs: string[];
  volumeOrSize: string;
  visualGradient: string;
  visualIcon: "botanical" | "fragrance";
}

// Global Products Data
export const PRODUCTS: Product[] = [
  {
    id: "majestic-rose",
    name: "The Majestic Rose & Gold Crest Vase",
    category: "botanical",
    categoryLabel: "Botanical Arrangement",
    description: "Premium real-touch crimson roses flawlessly arranged in a custom mouth-blown heavy glass vase, adorned with an antique hand-polished brass crest seal.",
    moq: 20,
    leadTime: "3-4 Weeks",
    specs: ["Real-Touch Premium Petals", "Mouth-Blown Heavy Glass", "Antique Brass Crest Shield", "Zero Maintenance Required"],
    volumeOrSize: "H: 45cm • W: 35cm",
    visualGradient: "from-[#1d1112] via-[#3a1a1c] to-[#070708]",
    visualIcon: "botanical"
  },
  {
    id: "emperor-tulip",
    name: "The Emperor Tulip & Bronze Crest Vase",
    category: "botanical",
    categoryLabel: "Botanical Arrangement",
    description: "Botanical-grade real-touch Istanbul tulips in subtle cream and gold-hue whites, curated in a deep smoky charcoal glass vase with a hand-cast bronze medallion.",
    moq: 25,
    leadTime: "3-4 Weeks",
    specs: ["Moulded Silk-Alloy Petals", "Smoky Charcoal Glass", "Hand-Cast Bronze Seal", "Water-Mimicking Solid Resin Base"],
    volumeOrSize: "H: 50cm • W: 30cm",
    visualGradient: "from-[#131518] via-[#21252d] to-[#070708]",
    visualIcon: "botanical"
  },
  {
    id: "royal-hydrangea",
    name: "Royal Hydrangea & Gold Crest Centerpiece",
    category: "botanical",
    categoryLabel: "Botanical Arrangement",
    description: "A lush, voluminous masterwork of real-touch hydrangeas in antique dusty rose and forest sage, set in an emerald-green mouth-blown vase with a 24k gold-plated crest.",
    moq: 15,
    leadTime: "4 Weeks",
    specs: ["360-Degree Premium Cluster", "Mouth-Blown Emerald Glass", "24k Gold-Plated Embossed Crest", "Slight Fresh-Cut Scent Infused"],
    volumeOrSize: "H: 40cm • W: 45cm",
    visualGradient: "from-[#0f1814] via-[#1a2d24] to-[#070708]",
    visualIcon: "botanical"
  },
  {
    id: "santal-imperial",
    name: "Santal Imperial Reed Diffuser Set",
    category: "fragrance",
    categoryLabel: "Home Fragrance",
    description: "A heavy, rich blend of organic sandalwood, rare amber, and gold-dust infusion. Encased in a massive obsidian glass vessel featuring an engraved metallic badge.",
    moq: 100,
    leadTime: "2-3 Weeks",
    specs: ["IFRA Certified Premium Oils", "12-Month Continuous Throw", "High-Density Charcoal Fiber Reeds", "Handcrafted Gift Box Packaging"],
    volumeOrSize: "500 ml / 17.0 fl. oz.",
    visualGradient: "from-[#141210] via-[#2d2116] to-[#070708]",
    visualIcon: "fragrance"
  },
  {
    id: "oud-rose-candle",
    name: "Oud & Rose Metallic Crest Candle Duo",
    category: "fragrance",
    categoryLabel: "Home Fragrance",
    description: "High-concentration organic soy wax candles scented with deep Cambodian oud wood and fresh-cut Damascus rose. Housed in matte porcelain vessels with custom metal emblems.",
    moq: 150,
    leadTime: "2-3 Weeks",
    specs: ["100% Organic Soy & Beeswax", "80-Hour Clean Burn (Double Wick)", "Hand-Poured Porcelain Vessels", "Bespoke Antique Bronze Emblem"],
    volumeOrSize: "320g x 2 / 11.3 oz. each",
    visualGradient: "from-[#1c1815] via-[#32231b] to-[#070708]",
    visualIcon: "fragrance"
  },
  {
    id: "ambergris-spray",
    name: "Ambergris & Bergamot Premium Room Mist",
    category: "fragrance",
    categoryLabel: "Home Fragrance",
    description: "An ultra-fine luxury room mist formulated with premium essential oils of Sicilian bergamot and warm ambergris. Encased in an artisan leather-wrapped vial with a metal spray cap.",
    moq: 120,
    leadTime: "2 Weeks",
    specs: ["Fine Mist Italian Atomizer", "Hand-stitched Leather Sleeve", "Zero Synthetic Phthalates", "Immediate High-Impact Scenting"],
    volumeOrSize: "250 ml / 8.5 fl. oz.",
    visualGradient: "from-[#151711] via-[#282d1e] to-[#070708]",
    visualIcon: "fragrance"
  }
];
