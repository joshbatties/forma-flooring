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
  {
    id: "h004",
    name: "Blackbutt Solid Timber Flooring",
    description: "Australian native Blackbutt timber flooring with its distinctive pale cream to light brown coloring and straight grain. Known for exceptional hardness and natural resistance to bushfire, making it a popular choice for Australian homes.",
    category: "hardwood",
    subcategory: "australian species",
    image: "/hardwood.jpg",
    specifications: {
      "Material": "Solid Blackbutt Timber",
      "Thickness": "19mm",
      "Width": "130mm",
      "Length": "1800mm average",
      "Surface Finish": "Satin or Matte options",
      "Installation": "Secret Nail with Tongue and Groove"
    },
    features: [
      "High Janka hardness rating for excellent durability",
      "Natural bushfire resistance",
      "Consistent grain pattern",
      "Excellent for high-traffic areas",
      "Australian native species"
    ],
    applications: [
      "Family homes",
      "Bushfire-prone areas",
      "Commercial spaces",
      "High-traffic residential areas"
    ],
    relatedProducts: ["h001", "h005", "e003"],
    slug: "blackbutt-solid-timber-flooring"
  },
  {
    id: "h005",
    name: "Spotted Gum Solid Flooring",
    description: "Premium Australian Spotted Gum flooring with its distinctive wavy grain pattern and rich color variations from pale brown to deep chocolate. One of Australia's most sought-after timber species for flooring.",
    category: "hardwood",
    subcategory: "australian species",
    image: "/archway.jpg",
    specifications: {
      "Material": "Solid Spotted Gum",
      "Thickness": "19mm",
      "Width": "130mm",
      "Length": "1800mm average",
      "Surface Finish": "Matte or Gloss options",
      "Installation": "Tongue and Groove"
    },
    features: [
      "Distinctive wavy grain pattern",
      "Rich color variations",
      "Extremely hard-wearing",
      "Natural resistance to termites",
      "Sustainable Australian timber"
    ],
    applications: [
      "Luxury residential flooring",
      "High-end commercial spaces",
      "Feature floors",
      "Indoor and covered outdoor areas"
    ],
    relatedProducts: ["h001", "h004", "e003"],
    slug: "spotted-gum-solid-flooring"
  },
  {
    id: "h006",
    name: "Jarrah Timber Flooring",
    description: "Western Australian Jarrah timber flooring with its rich deep red to burgundy tones. This iconic Australian hardwood is prized for its striking appearance, exceptional durability, and resistance to rot and insects.",
    category: "hardwood",
    subcategory: "australian species",
    image: "/hardwood.jpg",
    specifications: {
      "Material": "Solid Jarrah Timber",
      "Thickness": "19mm",
      "Width": "130mm",
      "Length": "1800mm average",
      "Surface Finish": "Satin or Semi-gloss",
      "Installation": "Tongue and Groove"
    },
    features: [
      "Rich deep red to burgundy coloration",
      "Extremely hard-wearing and durable",
      "Natural resistance to rot and insects",
      "Develops rich patina over time",
      "Iconic Australian hardwood"
    ],
    applications: [
      "Heritage homes",
      "Luxury residences",
      "Feature floors",
      "High-end commercial spaces"
    ],
    relatedProducts: ["h001", "h004", "h005"],
    slug: "jarrah-timber-flooring"
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
  {
    id: "e004",
    name: "Engineered Blackbutt Flooring",
    description: "Australian Blackbutt engineered timber flooring offering the beauty of this iconic Australian species with the stability of engineered construction. Perfect for Australian conditions and modern homes.",
    category: "engineered",
    subcategory: "australian species",
    image: "/engineered.jpg",
    specifications: {
      "Material": "Engineered Blackbutt",
      "Thickness": "14mm",
      "Width": "180mm",
      "Length": "2200mm",
      "Surface Finish": "UV Oil",
      "Installation": "Click-lock system"
    },
    features: [
      "Australian Blackbutt timber top layer",
      "Stable multi-layer construction",
      "Suitable for underfloor heating",
      "Pre-finished for immediate use",
      "Australian native species"
    ],
    applications: [
      "Modern Australian homes",
      "Apartments and units",
      "Areas with climate variations",
      "Concrete slab installations"
    ],
    relatedProducts: ["e003", "e001", "h004"],
    slug: "engineered-blackbutt-flooring"
  },
  {
    id: "e005",
    name: "Herringbone Engineered Oak",
    description: "Classic herringbone pattern engineered oak flooring for timeless elegance. This traditional parquet style adds sophistication and character to any space while offering the stability of engineered construction.",
    category: "engineered",
    subcategory: "parquet",
    image: "/spiral.jpg",
    specifications: {
      "Material": "Engineered European Oak",
      "Thickness": "15mm",
      "Width": "120mm",
      "Length": "600mm",
      "Surface Finish": "Natural oil or UV lacquer",
      "Installation": "Tongue and groove for herringbone pattern"
    },
    features: [
      "Classic herringbone pattern",
      "Timeless elegance and character",
      "Stable engineered construction",
      "Available in multiple color options",
      "Suitable for underfloor heating"
    ],
    applications: [
      "Heritage homes",
      "Luxury apartments",
      "Boutique commercial spaces",
      "Feature floors in modern homes"
    ],
    relatedProducts: ["e002", "e006", "h002"],
    slug: "herringbone-engineered-oak"
  },
  {
    id: "e006",
    name: "Chevron Engineered Oak Flooring",
    description: "Sophisticated chevron pattern engineered oak flooring for distinctive interiors. The angled ends create a perfect V-pattern for a refined European aesthetic with the benefits of modern engineered construction.",
    category: "engineered",
    subcategory: "parquet",
    image: "/engineered.jpg",
    specifications: {
      "Material": "Engineered European Oak",
      "Thickness": "15mm",
      "Width": "120mm",
      "Length": "600mm",
      "Surface Finish": "Brushed and oiled",
      "Installation": "Angled ends for chevron pattern"
    },
    features: [
      "Distinctive chevron V-pattern",
      "European design heritage",
      "Precision-cut angled ends",
      "Stable engineered construction",
      "Suitable for underfloor heating"
    ],
    applications: [
      "Luxury homes",
      "Boutique hotels",
      "High-end retail spaces",
      "Designer apartments"
    ],
    relatedProducts: ["e005", "e002", "h002"],
    slug: "chevron-engineered-oak-flooring"
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
      "Installation": "Click-lock system with waterproof seal"
    },
    features: [
      "100% waterproof construction",
      "Suitable for wet areas",
      "Realistic timber appearance",
      "Easy click-lock installation",
      "Low maintenance"
    ],
    applications: [
      "Bathrooms",
      "Kitchens",
      "Laundry rooms",
      "Basements"
    ],
    relatedProducts: ["l001", "l003", "e001"],
    slug: "waterproof-laminate-flooring"
  },
  {
    id: "l003",
    name: "Commercial Grade Laminate",
    description: "Heavy-duty commercial grade laminate flooring designed for high-traffic areas. With an AC5 wear rating and enhanced scratch resistance, this flooring stands up to the demands of busy commercial environments.",
    category: "laminate",
    subcategory: "commercial",
    image: "/laminate.jpg",
    specifications: {
      "Material": "High-Density Fiberboard with Enhanced Wear Layer",
      "Thickness": "12mm",
      "Width": "195mm",
      "Length": "1380mm",
      "Surface Finish": "Commercial grade AC5 rating",
      "Installation": "Heavy-duty click-lock system"
    },
    features: [
      "AC5 commercial wear rating",
      "Enhanced scratch and impact resistance",
      "Suitable for very high traffic areas",
      "Easy to maintain in commercial settings",
      "Realistic timber appearance"
    ],
    applications: [
      "Retail stores",
      "Offices",
      "Restaurants",
      "Public spaces"
    ],
    relatedProducts: ["l001", "l002", "e001"],
    slug: "commercial-grade-laminate"
  },
  {
    id: "l004",
    name: "Rustic Oak Laminate Flooring",
    description: "Laminate flooring with authentic rustic oak appearance featuring knots, grain variations, and a hand-scraped texture. Offers the character of reclaimed timber with the durability and easy maintenance of laminate.",
    category: "laminate",
    subcategory: "wood look",
    image: "/laminate.jpg",
    specifications: {
      "Material": "High-Density Fiberboard with Textured Surface",
      "Thickness": "12mm",
      "Width": "195mm",
      "Length": "1380mm",
      "Surface Finish": "Hand-scraped texture",
      "Installation": "Click-lock system"
    },
    features: [
      "Authentic rustic oak appearance",
      "Hand-scraped texture for realistic feel",
      "Knots and grain variations for character",
      "Highly durable AC4 wear rating",
      "Easy to install and maintain"
    ],
    applications: [
      "Country-style homes",
      "Rustic interiors",
      "Holiday homes",
      "Farmhouse renovations"
    ],
    relatedProducts: ["l001", "l005", "e002"],
    slug: "rustic-oak-laminate-flooring"
  },
  {
    id: "l005",
    name: "Stone Look Laminate Flooring",
    description: "Innovative laminate flooring with the appearance of natural stone but the warmth and comfort of a timber floor. Perfect for creating statement areas with the practicality of laminate construction.",
    category: "laminate",
    subcategory: "stone look",
    image: "/archway.jpg",
    specifications: {
      "Material": "High-Density Fiberboard with Stone Effect Layer",
      "Thickness": "10mm",
      "Width": "300mm",
      "Length": "600mm",
      "Surface Finish": "Textured stone effect",
      "Installation": "Click-lock system"
    },
    features: [
      "Realistic stone appearance",
      "Warmer underfoot than real stone",
      "Water-resistant properties",
      "Easy installation",
      "Durable and low maintenance"
    ],
    applications: [
      "Kitchen areas",
      "Entryways",
      "Bathrooms",
      "Open plan living spaces"
    ],
    relatedProducts: ["l002", "l004", "l001"],
    slug: "stone-look-laminate-flooring"
  },
  {
    id: "l006",
    name: "High Gloss Laminate Flooring",
    description: "Contemporary high gloss laminate flooring that creates a sleek, modern aesthetic. The reflective surface brightens spaces and creates a sense of luxury with the practicality of durable laminate construction.",
    category: "laminate",
    subcategory: "high gloss",
    image: "/laminate.jpg",
    specifications: {
      "Material": "High-Density Fiberboard with Glossy Finish Layer",
      "Thickness": "8mm",
      "Width": "192mm",
      "Length": "1285mm",
      "Surface Finish": "High gloss",
      "Installation": "Click-lock system"
    },
    features: [
      "Contemporary high gloss finish",
      "Light-reflecting properties",
      "Creates a sense of space",
      "Modern aesthetic",
      "Durable and scratch-resistant"
    ],
    applications: [
      "Modern apartments",
      "Contemporary homes",
      "Boutique retail spaces",
      "Urban living environments"
    ],
    relatedProducts: ["l001", "l002", "l003"],
    slug: "high-gloss-laminate-flooring"
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
  return (product.relatedProducts || [])
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
} 