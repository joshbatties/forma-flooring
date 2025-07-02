export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'hardwood' | 'engineered' | 'laminate' | 'hybrid';
  subcategory: string;
  image: string;
  specifications?: Record<string, string>;
  features?: string[];
  applications?: string[];
  relatedProducts?: string[];
  price_range?: string;
  warranty?: string;
  installation_method?: string[];
  environmental_rating?: string;
  slug: string;
}

export const products: Product[] = [
  // Australian Native Hardwood Collection
  {
    id: "h001",
    name: "Spotted Gum Premium Grade",
    description: "Premium Australian Spotted Gum flooring featuring distinctive wavy grain patterns and rich color variations. Known for its exceptional durability and natural beauty.",
    category: "hardwood",
    subcategory: "australian native",
    image: "/hardwood.jpg",
    specifications: {
      "Material": "Solid Spotted Gum",
      "Grade": "Premium",
      "Thickness": "19mm",
      "Width": "130mm",
      "Length": "1800mm-2100mm random lengths",
      "Surface Finish": "UV-cured matte or satin",
      "Installation": "Tongue and Groove, Secret Nail"
    },
    features: [
      "Superior hardness rating for exceptional durability",
      "Natural resistance to bushfire and termites",
      "Rich color variations from pale brown to chocolate",
      "Distinctive wavy grain pattern",
      "Suitable for both modern and traditional homes"
    ],
    applications: [
      "Luxury residential homes",
      "High-traffic commercial spaces",
      "Bushfire-prone areas",
      "Indoor and covered outdoor areas"
    ],
    price_range: "Premium",
    warranty: "25 years structural, 10 years finish",
    installation_method: ["Secret Nail", "Direct Stick"],
    environmental_rating: "Eco-certified",
    slug: "spotted-gum-premium-grade"
  },
  {
    id: "h002",
    name: "Blackbutt Select Grade",
    description: "Australian native Blackbutt flooring with consistent pale cream to honey tones. Renowned for its exceptional hardness and versatility in contemporary design.",
    category: "hardwood",
    subcategory: "australian native",
    image: "/hardwood.jpg",
    specifications: {
      "Material": "Solid Blackbutt",
      "Grade": "Select",
      "Thickness": "19mm",
      "Width": "130mm",
      "Length": "1800mm-2100mm random lengths",
      "Surface Finish": "UV-cured matte",
      "Installation": "Tongue and Groove"
    },
    features: [
      "High density for superior durability",
      "Consistent grain and color",
      "Natural bushfire resistance",
      "Excellent for high-traffic areas",
      "Minimal maintenance required"
    ],
    applications: [
      "Family homes",
      "Commercial spaces",
      "Educational facilities",
      "Retail environments"
    ],
    price_range: "Premium",
    warranty: "25 years structural, 10 years finish",
    installation_method: ["Secret Nail", "Direct Stick"],
    environmental_rating: "Eco-certified",
    slug: "blackbutt-select-grade"
  },
  // European Collection
  {
    id: "h003",
    name: "French Oak Rustic",
    description: "Authentic French Oak with natural character, knots, and color variations. Perfect for creating warm, lived-in spaces with European charm.",
    category: "hardwood",
    subcategory: "european",
    image: "/engineered.jpg",
    specifications: {
      "Material": "Solid French Oak",
      "Grade": "Rustic",
      "Thickness": "20mm",
      "Width": "180mm",
      "Length": "1800mm-2400mm random lengths",
      "Surface Finish": "Natural oil or UV lacquer",
      "Installation": "Tongue and Groove"
    },
    features: [
      "Rich character with natural knots",
      "Traditional French Oak appearance",
      "Hand-scraped texture option",
      "Develops beautiful patina over time",
      "Suitable for traditional and modern homes"
    ],
    applications: [
      "Period homes",
      "Country-style residences",
      "Boutique hotels",
      "Rustic commercial spaces"
    ],
    price_range: "Premium-Luxury",
    warranty: "25 years structural",
    installation_method: ["Secret Nail", "Direct Stick"],
    environmental_rating: "FSC Certified",
    slug: "french-oak-rustic"
  },
  // Premium Engineered Collection
  {
    id: "e001",
    name: "European Oak Engineered Wide Board",
    description: "Premium engineered oak flooring with extra-wide boards for contemporary spaces. Features a thick wear layer for long-term durability.",
    category: "engineered",
    subcategory: "wide board",
    image: "/engineered.jpg",
    specifications: {
      "Top Layer": "4mm European Oak",
      "Core": "Multi-layer birch plywood",
      "Total Thickness": "15mm",
      "Width": "220mm",
      "Length": "2200mm",
      "Surface Finish": "UV oil or matt lacquer",
      "Installation": "Click-lock or Glue Down"
    },
    features: [
      "Extra wide boards for spacious feel",
      "Thick wear layer for multiple sandings",
      "Suitable for underfloor heating",
      "Superior stability in varying conditions",
      "Quick installation system"
    ],
    applications: [
      "Open-plan living areas",
      "Luxury apartments",
      "Boutique commercial spaces",
      "Modern homes"
    ],
    price_range: "Premium",
    warranty: "25 years structural, 15 years finish",
    installation_method: ["Click-Lock", "Glue Down"],
    environmental_rating: "FSC Certified",
    slug: "european-oak-engineered-wide-board"
  },
  {
    id: "e002",
    name: "Herringbone Engineered Oak",
    description: "Classic herringbone pattern engineered oak flooring, perfect for creating elegant and timeless interiors with a contemporary twist.",
    category: "engineered",
    subcategory: "parquetry",
    image: "/engineered.jpg",
    specifications: {
      "Top Layer": "3mm European Oak",
      "Core": "Multi-layer birch plywood",
      "Total Thickness": "14mm",
      "Width": "120mm",
      "Length": "600mm",
      "Surface Finish": "UV oil",
      "Installation": "Glue Down"
    },
    features: [
      "Traditional herringbone pattern",
      "Precision-engineered for perfect fit",
      "Suitable for underfloor heating",
      "Pre-finished for immediate use",
      "Multiple layout options"
    ],
    applications: [
      "Heritage renovations",
      "Luxury apartments",
      "Boutique hotels",
      "High-end retail"
    ],
    price_range: "Premium-Luxury",
    warranty: "25 years structural, 15 years finish",
    installation_method: ["Glue Down"],
    environmental_rating: "FSC Certified",
    slug: "herringbone-engineered-oak"
  },
  // Hybrid Collection
  {
    id: "hy001",
    name: "SPC Hybrid Plus",
    description: "Advanced Stone Plastic Composite (SPC) hybrid flooring combining the best features of laminate and vinyl. 100% waterproof with realistic timber look.",
    category: "hybrid",
    subcategory: "spc",
    image: "/laminate.jpg",
    specifications: {
      "Core Material": "Stone Plastic Composite",
      "Wear Layer": "0.5mm commercial grade",
      "Total Thickness": "6.5mm",
      "Width": "180mm",
      "Length": "1800mm",
      "Surface Finish": "Embossed wood grain",
      "Installation": "Click-lock system"
    },
    features: [
      "100% waterproof construction",
      "Superior dent and scratch resistance",
      "Suitable for wet areas",
      "Ultra-stable in all conditions",
      "Easy DIY installation"
    ],
    applications: [
      "Bathrooms and kitchens",
      "Basement installations",
      "Rental properties",
      "Commercial spaces"
    ],
    price_range: "Mid-range",
    warranty: "Lifetime structural, 20 years residential",
    installation_method: ["Click-Lock", "Floating"],
    environmental_rating: "Low VOC Certified",
    slug: "spc-hybrid-plus"
  },
  // Premium Laminate Collection
  {
    id: "l001",
    name: "Commercial Grade Laminate",
    description: "High-performance laminate flooring with exceptional wear resistance and realistic wood grain appearance. Perfect for busy commercial and residential spaces.",
    category: "laminate",
    subcategory: "commercial grade",
    image: "/laminate.jpg",
    specifications: {
      "Core": "High-density fiberboard",
      "Wear Layer": "AC5 Commercial Grade",
      "Total Thickness": "12mm",
      "Width": "192mm",
      "Length": "1900mm",
      "Surface Finish": "EIR texture",
      "Installation": "Click-lock system"
    },
    features: [
      "AC5 commercial grade wear rating",
      "Realistic embossed texture",
      "Scratch and impact resistant",
      "Suitable for heavy traffic",
      "Easy maintenance"
    ],
    applications: [
      "Retail spaces",
      "Office environments",
      "Rental properties",
      "High-traffic residential"
    ],
    price_range: "Mid-range",
    warranty: "Lifetime structural, 15 years commercial",
    installation_method: ["Click-Lock", "Floating"],
    environmental_rating: "Low VOC Certified",
    slug: "commercial-grade-laminate"
  }
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(product => product.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter(product => product.subcategory === subcategory);
}

export function getRelatedProducts(product: Product): Product[] {
  if (!product.relatedProducts) return [];
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
} 