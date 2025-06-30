export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'hardwood' | 'engineered' | 'laminate';
  subcategory?: string;
  image: string;
  specifications?: Record<string, string>;
  features?: string[];
  applications?: string[];
  relatedProducts?: string[];
  slug: string;
}

export const products: Product[] = [
  // Hardwood Flooring Products
  {
    id: "h001",
    name: "Australian Hardwood Flooring",
    description: "Premium Australian hardwood flooring known for its durability, beauty, and distinctive grain patterns. Our hardwood flooring is sourced from sustainably managed forests and is available in a variety of species including Spotted Gum, Blackbutt, and Jarrah.",
    category: "hardwood",
    subcategory: "solid timber",
    image: "/archway.jpg",
    specifications: {
      "Material": "Solid Hardwood",
      "Thickness": "19mm",
      "Width": "130mm",
      "Length": "1800mm average",
      "Surface Finish": "Matte or Gloss options",
      "Installation": "Tongue and Groove"
    },
    features: [
      "Exceptional durability for high-traffic areas",
      "Natural beauty with unique grain patterns",
      "Excellent thermal insulation properties",
      "Can be sanded and refinished multiple times",
      "Adds value to your property"
    ],
    applications: [
      "Residential flooring",
      "Commercial spaces",
      "Hospitality venues",
      "Retail environments"
    ],
    relatedProducts: ["h002", "h003", "e001"],
    slug: "australian-hardwood-flooring"
  },
  {
    id: "h002",
    name: "European Oak Flooring",
    description: "Timeless European white oak flooring with refined grain patterns and superior stability. Available in various finishes from natural to deep stained options, perfect for creating elegant interiors.",
    category: "hardwood",
    subcategory: "solid timber",
    image: "/spiral.jpg",
    specifications: {
      "Material": "European White Oak",
      "Thickness": "20mm",
      "Width": "180mm",
      "Length": "1900mm average",
      "Surface Finish": "Natural oil or UV lacquer",
      "Installation": "Tongue and Groove"
    },
    features: [
      "Premium European white oak",
      "Excellent dimensional stability",
      "Wide range of finish options",
      "Classic and timeless appearance",
      "Suitable for high-end residential and commercial applications"
    ],
    applications: [
      "Luxury homes",
      "High-end commercial spaces",
      "Restaurants and hotels",
      "Executive offices"
    ],
    relatedProducts: ["h001", "h003", "e002"],
    slug: "european-oak-flooring"
  },
  {
    id: "h003",
    name: "American Walnut Flooring",
    description: "Rich, dark American walnut flooring with distinctive chocolate brown tones and flowing grain patterns. This premium hardwood creates stunning feature floors with unmatched character.",
    category: "hardwood",
    subcategory: "solid timber",
    image: "/archway.jpg",
    specifications: {
      "Material": "American Black Walnut",
      "Thickness": "19mm",
      "Width": "135mm",
      "Length": "1800mm average",
      "Surface Finish": "Natural oil finish",
      "Installation": "Tongue and Groove"
    },
    features: [
      "Rich chocolate brown coloring",
      "Distinctive flowing grain patterns",
      "Premium hardwood species",
      "Naturally durable and stable",
      "Ages beautifully over time"
    ],
    applications: [
      "Feature areas and statement floors",
      "Luxury residential spaces",
      "Boutique commercial environments",
      "Designer homes and apartments"
    ],
    relatedProducts: ["h001", "h002", "e003"],
    slug: "american-walnut-flooring"
  },

  // Engineered Flooring Products
  {
    id: "e001",
    name: "Engineered Timber Flooring",
    description: "High-quality engineered timber flooring combining the beauty of real timber with enhanced stability. Our engineered flooring features a hardwood wear layer over a plywood core, making it perfect for areas where solid timber isn't ideal.",
    category: "engineered",
    subcategory: "multi-layer",
    image: "/spiral.jpg",
    specifications: {
      "Material": "Engineered Timber",
      "Thickness": "14mm",
      "Width": "180mm",
      "Length": "2200mm",
      "Surface Finish": "UV Oil or Lacquer",
      "Installation": "Click-lock or Glue Down"
    },
    features: [
      "Greater dimensional stability than solid timber",
      "Suitable for installation over underfloor heating",
      "Can be installed on concrete slabs",
      "Pre-finished for immediate use after installation",
      "Wide range of timber species available"
    ],
    applications: [
      "Apartments and units",
      "Areas with humidity fluctuations",
      "Bathrooms and kitchens (with appropriate sealing)",
      "Below-grade installations"
    ],
    relatedProducts: ["e002", "e003", "h001"],
    slug: "engineered-timber-flooring"
  },
  {
    id: "e002",
    name: "Wide Board Engineered Oak",
    description: "Extra wide engineered oak boards for contemporary and spacious interiors. These wide boards create a sense of luxury and space while maintaining the stability benefits of engineered construction.",
    category: "engineered",
    subcategory: "wide board",
    image: "/archway.jpg",
    specifications: {
      "Material": "Engineered Oak",
      "Thickness": "15mm",
      "Width": "220mm",
      "Length": "2200mm",
      "Surface Finish": "Brushed natural oil",
      "Installation": "Click-lock system"
    },
    features: [
      "Extra wide boards for modern aesthetics",
      "Enhanced stability of engineered construction",
      "Brushed surface texture for added character",
      "Easy click-lock installation",
      "Suitable for large open spaces"
    ],
    applications: [
      "Modern homes and apartments",
      "Open plan living areas",
      "Commercial spaces",
      "Contemporary office environments"
    ],
    relatedProducts: ["e001", "e003", "h002"],
    slug: "wide-board-engineered-oak"
  },
  {
    id: "e003",
    name: "Engineered Spotted Gum",
    description: "Australian engineered spotted gum flooring featuring the distinctive wavy grain and natural color variation that spotted gum is famous for. Engineered construction provides excellent stability.",
    category: "engineered",
    subcategory: "australian species",
    image: "/spiral.jpg",
    specifications: {
      "Material": "Engineered Spotted Gum",
      "Thickness": "14mm",
      "Width": "180mm",
      "Length": "1900mm",
      "Surface Finish": "Natural matte finish",
      "Installation": "Tongue and groove or click-lock"
    },
    features: [
      "Distinctive Australian spotted gum appearance",
      "Natural wavy grain patterns",
      "Excellent stability in varying climates",
      "Pre-finished with protective coating",
      "Sustainable Australian timber"
    ],
    applications: [
      "Australian homes wanting native timber look",
      "Coastal properties",
      "Commercial spaces",
      "Areas with climate variations"
    ],
    relatedProducts: ["e001", "e002", "h001"],
    slug: "engineered-spotted-gum"
  },

  // Laminate Flooring Products
  {
    id: "l001",
    name: "Premium Laminate Flooring",
    description: "High-quality laminate flooring that mimics the look of natural timber with exceptional scratch resistance. Our premium laminate provides excellent value and durability for busy households and commercial spaces.",
    category: "laminate",
    subcategory: "wood look",
    image: "/archway.jpg",
    specifications: {
      "Material": "High-Density Fiberboard with Melamine Layer",
      "Thickness": "12mm",
      "Width": "192mm",
      "Length": "1285mm",
      "Surface Finish": "Embossed in Register (EIR)",
      "Installation": "Floating Floor System"
    },
    features: [
      "Highly resistant to scratches, dents, and fading",
      "Easy to clean and maintain",
      "Affordable alternative to solid timber",
      "Wide variety of designs and finishes",
      "UV resistant and fade-proof"
    ],
    applications: [
      "Family homes with children and pets",
      "Rental properties",
      "Commercial offices",
      "Retail spaces"
    ],
    relatedProducts: ["l002", "l003", "e001"],
    slug: "premium-laminate-flooring"
  },
  {
    id: "l002",
    name: "Waterproof Laminate Flooring",
    description: "Advanced waterproof laminate flooring with sealed edges and moisture-resistant core. Perfect for kitchens, bathrooms, and areas prone to spills while maintaining the beautiful appearance of natural timber.",
    category: "laminate",
    subcategory: "waterproof",
    image: "/spiral.jpg",
    specifications: {
      "Material": "Waterproof HDF Core",
      "Thickness": "8mm",
      "Width": "192mm",
      "Length": "1285mm",
      "Surface Finish": "Textured wood grain",
      "Installation": "Click-lock floating system"
    },
    features: [
      "100% waterproof core and surface",
      "Sealed edges prevent moisture penetration",
      "Suitable for wet areas",
      "Easy click-lock installation",
      "Realistic wood grain texture"
    ],
    applications: [
      "Kitchens and bathrooms",
      "Laundries and utility rooms",
      "Basements and below-grade areas",
      "Commercial washrooms"
    ],
    relatedProducts: ["l001", "l003", "e001"],
    slug: "waterproof-laminate-flooring"
  },
  {
    id: "l003",
    name: "AC5 Commercial Laminate",
    description: "Heavy-duty AC5 commercial grade laminate flooring designed for high-traffic areas. Exceptional durability and wear resistance make this perfect for commercial applications while maintaining residential aesthetics.",
    category: "laminate",
    subcategory: "commercial grade",
    image: "/archway.jpg",
    specifications: {
      "Material": "Extra Dense HDF Core",
      "Thickness": "10mm",
      "Width": "196mm",
      "Length": "1285mm",
      "Wear Rating": "AC5 Commercial",
      "Installation": "Click-lock system"
    },
    features: [
      "AC5 commercial durability rating",
      "Exceptional wear and impact resistance",
      "Suitable for heavy commercial traffic",
      "Stain and moisture resistant surface",
      "Long-term warranty coverage"
    ],
    applications: [
      "Commercial offices and retail",
      "Schools and educational facilities",
      "Healthcare facilities",
      "High-traffic residential areas"
    ],
    relatedProducts: ["l001", "l002", "e002"],
    slug: "ac5-commercial-laminate"
  }
];

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