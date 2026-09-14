// Product Type Definitions — Buon Odore B2B Export Catalog
export type ProductCategory = "reed-diffuser" | "scented-candle" | "room-spray";

export interface FragranceNotes {
  top: string[];
  middle: string[];
  base: string[];
}

export interface ProductCategoryInfo {
  id: ProductCategory;
  label: string;
  tagline: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  volumeOrSize: string;
  fragranceNotes: FragranceNotes;
  moq: number;
  leadTime: string;
  specs: string[];
  visualGradient: string;
  visualIcon: "reed" | "candle" | "spray";
}

export const PRODUCT_CATEGORIES: ProductCategoryInfo[] = [
  {
    id: "reed-diffuser",
    label: "Reed Diffusers",
    tagline:
      "Çubuklu oda kokuları — continuous fragrance throw up to 12 months, no flame, no maintenance.",
  },
  {
    id: "scented-candle",
    label: "Scented Candles",
    tagline:
      "Soya mumları — 100% organic soy wax, hand-poured, clean-burning luxury candles.",
  },
  {
    id: "room-spray",
    label: "Room Sprays",
    tagline:
      "Oda spreyleri — fine ambient mists for instant, high-impact scenting.",
  },
];

export const PRODUCTS: Product[] = [
  // ================= REED DIFFUSERS =================
  {
    id: "santal-imperial-diffuser",
    name: "Santal Impérial Reed Diffuser",
    category: "reed-diffuser",
    categoryLabel: "Reed Diffuser",
    description:
      "A heavy, opulent blend of organic sandalwood, rare amber and golden saffron, suspended in an obsidian glass vessel with an engraved metallic badge and high-density charcoal reeds.",
    volumeOrSize: "500 ml / 17.0 fl. oz.",
    fragranceNotes: {
      top: ["Bergamot", "Pink Pepper", "Saffron"],
      middle: ["Sandalwood", "Iris", "Damask Rose"],
      base: ["Amber", "Cashmere Wood", "Vanilla", "Musk"],
    },
    moq: 100,
    leadTime: "2–3 Weeks",
    specs: [
      "IFRA Certified Premium Oils",
      "12-Month Continuous Throw",
      "High-Density Charcoal Fiber Reeds",
      "Handcrafted Gift Box Packaging",
    ],
    visualGradient: "from-[#141210] via-[#2d2116] to-[#070708]",
    visualIcon: "reed",
  },
  {
    id: "noir-oud-diffuser",
    name: "Noir Oud & Rose Reed Diffuser",
    category: "reed-diffuser",
    categoryLabel: "Reed Diffuser",
    description:
      "Smoky Cambodian oud wrapped in fresh-cut Damascus rose, bottled in a deep charcoal glass flacon with a hand-cast bronze neck ring.",
    volumeOrSize: "400 ml / 13.5 fl. oz.",
    fragranceNotes: {
      top: ["Blackcurrant", "Bergamot", "Spicy Accord"],
      middle: ["Damask Rose", "Cambodian Oud", "Geranium"],
      base: ["Patchouli", "Leather", "Dark Amber"],
    },
    moq: 120,
    leadTime: "2–3 Weeks",
    specs: [
      "Phthalate-Free Base",
      "10–12 Month Throw",
      "Replacement Reeds Available",
      "Custom Metal Emblem Option",
    ],
    visualGradient: "from-[#131418] via-[#241d21] to-[#070708]",
    visualIcon: "reed",
  },
  {
    id: "mediterranean-fig-diffuser",
    name: "Mediterranean Fig & Cypress Reed Diffuser",
    category: "reed-diffuser",
    categoryLabel: "Reed Diffuser",
    description:
      "Green fig leaf, sun-warmed citrus and coastal cypress create a fresh Mediterranean signature — perfect for boutique hotels and spa retail.",
    volumeOrSize: "300 ml / 10.1 fl. oz.",
    fragranceNotes: {
      top: ["Fig Leaf", "Citrus Zest", "Green Accord"],
      middle: ["Green Fig", "Coconut Milk", "Jasmine"],
      base: ["Cypress", "White Cedar", "Soft Musk"],
    },
    moq: 150,
    leadTime: "2 Weeks",
    specs: [
      "Anti-Spill Inner Cup",
      "Natural Rattan Reeds",
      "Spa & Hospitality Grade",
      "Retail-Ready Boxed Set",
    ],
    visualGradient: "from-[#121512] via-[#21301f] to-[#070708]",
    visualIcon: "reed",
  },
  // ================= SCENTED CANDLES =================
  {
    id: "velvet-rose-oud-candle",
    name: "Velvet Rose & Oud Soy Candle",
    category: "scented-candle",
    categoryLabel: "Scented Candle",
    description:
      "Hand-poured 100% organic soy wax carrying a lush Turkish rose heart and a warm oud base, nestled in a matte porcelain vessel with a bronze emblem lid.",
    volumeOrSize: "240 g / 8.5 oz.",
    fragranceNotes: {
      top: ["Turkish Rose", "Saffron", "Raspberry"],
      middle: ["Oud", "Peony", "Clove"],
      base: ["Amber", "Tonka Bean", "Patchouli"],
    },
    moq: 200,
    leadTime: "2–3 Weeks",
    specs: [
      "100% Organic Soy Wax",
      "45-Hour Clean Burn",
      "Reusable Porcelain Vessel",
      "Hand-Cast Bronze Emblem Lid",
    ],
    visualGradient: "from-[#1c1214] via-[#3a1a1c] to-[#070708]",
    visualIcon: "candle",
  },
  {
    id: "amber-noir-candle",
    name: "Amber Noir Soy Candle",
    category: "scented-candle",
    categoryLabel: "Scented Candle",
    description:
      "A warm, enveloping accord of golden amber and spiced labdanum, poured into a heavy smoky-black glass tumbler finished with a metallic engraved band.",
    volumeOrSize: "320 g / 11.3 oz.",
    fragranceNotes: {
      top: ["Cinnamon", "Cardamom", "Orange Peel"],
      middle: ["Amber", "Labdanum", "Jasmine"],
      base: ["Vanilla", "Benzoin", "Sandalwood"],
    },
    moq: 250,
    leadTime: "3 Weeks",
    specs: [
      "Double-Wick Even Melt",
      "80-Hour Clean Burn",
      "Smoky Glass Tumbler",
      "IFRA Compliant Fragrance",
    ],
    visualGradient: "from-[#1a1410] via-[#33251a] to-[#070708]",
    visualIcon: "candle",
  },
  {
    id: "white-jasmine-tea-candle",
    name: "White Jasmine & Tea Soy Candle",
    category: "scented-candle",
    categoryLabel: "Scented Candle",
    description:
      "Delicate white jasmine over a calm white-tea infusion — an airy, refined scent for premium bedrooms and boutique retail lines.",
    volumeOrSize: "200 g / 7.1 oz.",
    fragranceNotes: {
      top: ["Bergamot", "White Tea", "Neroli"],
      middle: ["Jasmine Sambac", "Orange Blossom", "Lily"],
      base: ["White Musk", "Soft Woods", "Ambroxan"],
    },
    moq: 300,
    leadTime: "2 Weeks",
    specs: [
      "Cotton-Wick, Lead-Free",
      "35-Hour Clean Burn",
      "Matte Ceramic Vessel",
      "Gift-Ready Box Packaging",
    ],
    visualGradient: "from-[#151517] via-[#262a30] to-[#070708]",
    visualIcon: "candle",
  },

  // ================= ROOM SPRAYS =================
  {
    id: "bergamot-ambergris-spray",
    name: "Bergamot & Ambergris Room Spray",
    category: "room-spray",
    categoryLabel: "Room Spray",
    description:
      "An ultra-fine luxury mist of Sicilian bergamot and warm ambergris, sealed in an artisan glass vial with a leather-wrapped sleeve and metal spray cap.",
    volumeOrSize: "200 ml / 6.8 fl. oz.",
    fragranceNotes: {
      top: ["Sicilian Bergamot", "Lemon Zest", "Marine Accord"],
      middle: ["Ambergris", "Sea Salt", "Orange Blossom"],
      base: ["White Musk", "Driftwood", "Cedar"],
    },
    moq: 150,
    leadTime: "2 Weeks",
    specs: [
      "Fine Mist Italian Atomizer",
      "Hand-Stitched Leather Sleeve",
      "Zero Synthetic Phthalates",
      "Immediate High-Impact Scenting",
    ],
    visualGradient: "from-[#14150f] via-[#2a2b1c] to-[#070708]",
    visualIcon: "spray",
  },
  {
    id: "clean-cotton-musk-spray",
    name: "Clean Cotton & Musk Room Spray",
    category: "room-spray",
    categoryLabel: "Room Spray",
    description:
      "Freshly laundered cotton flower and cool white musk — a crisp, hotel-grade ambient mist beloved by luxury hospitality buyers.",
    volumeOrSize: "150 ml / 5.1 fl. oz.",
    fragranceNotes: {
      top: ["Aldehydes", "Lily of the Valley", "Cucumber"],
      middle: ["Cotton Flower", "Iris", "Heliotrope"],
      base: ["White Musk", "Powdery Woods", "Vanilla"],
    },
    moq: 200,
    leadTime: "2 Weeks",
    specs: [
      "Hotel Amenity Grade",
      "Refillable Vial",
      "Fragrance-Only, No Alcohol Burn",
      "Compact Retail Sleeve",
    ],
    visualGradient: "from-[#131418] via-[#262a31] to-[#070708]",
    visualIcon: "spray",
  },
  {
    id: "petitgrain-cedar-spray",
    name: "Petitgrain & Cedar Room Spray",
    category: "room-spray",
    categoryLabel: "Room Spray",
    description:
      "Bitter orange petitgrain layered over dry cedarwood — a sophisticated, gender-neutral scent for executive spaces and premium retail.",
    volumeOrSize: "100 ml / 3.4 fl. oz.",
    fragranceNotes: {
      top: ["Petitgrain", "Lemon Peel", "Rosemary"],
      middle: ["Cedarwood", "Lavender", "Clary Sage"],
      base: ["Vetiver", "Amber Woods", "Moss"],
    },
    moq: 250,
    leadTime: "2–3 Weeks",
    specs: [
      "Cold-Pressed Citrus Oils",
      "Fine Continuous Spray",
      "Vegan & Cruelty-Free",
      "Pocket & Counter Size",
    ],
    visualGradient: "from-[#11140f] via-[#232a1a] to-[#070708]",
    visualIcon: "spray",
  },
];
