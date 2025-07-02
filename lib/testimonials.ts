export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  image: string;
  role?: string;
}

export const homeTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Their selection of timber flooring is outstanding. The staff provided expert advice that helped me choose the perfect option for my home renovation.",
    name: "Sarah W.",
    role: "Homeowner",
    image: "/testimonial-person1.jpg"
  },
  {
    id: 2,
    quote: "As a contractor, I rely on quality materials delivered on time. FORMA FLOORING consistently exceeds my expectations with their premium timber products and service.",
    name: "James R.",
    role: "Building Contractor",
    image: "/testimonial-person2.webp"
  },
  {
    id: 3,
    quote: "The engineered timber flooring we purchased was exactly what our commercial project needed. Beautiful appearance with excellent durability.",
    name: "Emily G.",
    role: "Project Manager",
    image: "/testimonial-person3.png"
  },
  {
    id: 4,
    quote: "We've been working with FORMA FLOORING for years on all our residential projects. Their consistent quality and reliable service keeps us coming back.",
    name: "Robert T.",
    role: "Construction Manager",
    image: "/testimonial-person1.jpg"
  },
  {
    id: 5,
    quote: "The timber flooring arrived exactly when promised, and the quality was superb. Definitely my go-to supplier for future flooring projects.",
    name: "Michelle K.",
    role: "Interior Designer",
    image: "/testimonial-person2.webp"
  },
  {
    id: 6,
    quote: "Excellent customer service! They helped me find exactly the right laminate flooring for my DIY home project, even though I was clueless when I walked in.",
    name: "Thomas H.",
    role: "DIY Enthusiast",
    image: "/testimonial-person3.png"
  }
];
