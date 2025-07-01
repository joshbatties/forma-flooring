"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

function HeroSection() {
  return (
    <section className="mt-6 md:mt-12 flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Content */}
      <div className="md:flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-5xl md:text-8xl font-light leading-tight tracking-tight">
          Beautiful Timber Flooring
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          Transform your space with premium hardwood, engineered, and laminate timber flooring. 
          Expert installation and superior quality for homes and businesses.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Button asChild size="lg" className="mt-4">
            <a href="/products">Explore Flooring</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="mt-4">
            <a href="/contact">Request Quote</a>
          </Button>
        </div>
      </div>

      {/* Hero Video */}
      <div className="md:flex-1 -mx-4 md:mx-0 bg-white">
        <div className="relative w-full h-[calc(100vh-16rem)] md:h-[36rem] xl:max-w-[800px] xl:mx-auto md:rounded-lg overflow-hidden">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center">Our Flooring Range</h2>
      <p className="text-gray-600 text-center mt-2 max-w-xl mx-auto">
        Discover our comprehensive selection of premium timber flooring solutions.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hardwood Flooring */}
        <div className="group relative h-80 overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
          <Image 
            src="/archway.jpg" 
            alt="Hardwood Flooring" 
            fill 
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Hardwood Flooring</h3>
              <p className="mb-4">Premium solid timber flooring with natural beauty and durability</p>
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/timber/flooring">Explore</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Engineered Flooring */}
        <div className="group relative h-80 overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
          <Image 
            src="/spiral.jpg" 
            alt="Engineered Flooring" 
            fill 
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Engineered Flooring</h3>
              <p className="mb-4">Stable multi-layer timber flooring perfect for any environment</p>
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/timber/flooring?type=engineered">Explore</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Laminate Flooring */}
        <div className="group relative h-80 overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
          <Image 
            src="/archway.jpg" 
            alt="Laminate Flooring" 
            fill 
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Laminate Flooring</h3>
              <p className="mb-4">Affordable, durable flooring with authentic timber appearance</p>
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/timber/flooring?type=laminate">Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupplyChainSection() {
  return (
    <section className="mt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Why Choose FORMA FLOORING</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            We provide premium timber flooring with superior service at competitive prices.
          </p>
        </div>

        {/* Overlapping Images and Text Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Image + Text */}
          <div className="md:w-1/2 flex flex-col">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image 
                src="/archway.jpg"
                alt="Quality timber flooring"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8 pr-4">
              <h3 className="text-2xl font-semibold mb-4">Direct Supply Chain</h3>
              <p className="text-gray-700">
                By working directly with timber mills and manufacturers, we eliminate unnecessary middlemen, reduce costs, and provide unmatched quality and transparency for all our flooring products.
              </p>
              <h3 className="text-2xl font-semibold mt-4 mb-4">Expert Consultation</h3>
              <p className="text-gray-700">
                Our team of flooring experts is ready to advise you on the best timber flooring for your project, ensuring you get the perfect solution at the right price.
              </p>
            </div>
          </div>

          {/* Right Text + Image */}
          <div className="md:w-1/2 flex flex-col md:mt-32">
            <div className="mb-8 pl-4">
              <h3 className="text-4xl font-semibold mb-4">Australia's Premier Timber Flooring Specialist</h3>
              <p className="text-gray-700">
                We're proud to be a family owned and operated Australian business providing premium timber flooring solutions for residential and commercial projects across the country.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image 
                src="/spiral.jpg"
                alt="Premium timber flooring showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurValues() {
  return (
    <section className="bg-black text-white py-14 w-full">
      <div className="max-w-[2200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl md:text-3xl font-light mt-6">Our Commitment</h2>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Premium Flooring</h3>
            <div className="w-full h-px bg-white/30"></div>
            <p className="text-gray-300">
              We carefully select timber flooring that meets the highest industry standards for beauty, performance and durability.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Expert Installation</h3>
            <div className="w-full h-px bg-white/30"></div>
            <p className="text-gray-300">
              Our skilled installation teams ensure your flooring is fitted perfectly, providing lasting beauty and performance.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Lifetime Support</h3>
            <div className="w-full h-px bg-white/30"></div>
            <p className="text-gray-300">
              From selection to aftercare, our flooring experts are always available to help with maintenance and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center">Featured Products</h2>
      <p className="text-gray-600 text-center mt-2">
        Our most popular building materials for your projects.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="w-full h-48 bg-gray-200 rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Premium Oak Flooring</h3>
          <p className="text-gray-500 mt-1 mb-2">
            European white oak with a timeless look
          </p>
          <Link href="/timber/flooring" className="text-blue-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
        
        {/* Product 2 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="w-full h-48 bg-gray-200 rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Structural Steel Beams</h3>
          <p className="text-gray-500 mt-1 mb-2">
            High-grade steel for maximum stability
          </p>
          <Link href="/steel/structural" className="text-blue-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
        
        {/* Product 3 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="w-full h-48 bg-gray-200 rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Engineered Timber Beams</h3>
          <p className="text-gray-500 mt-1 mb-2">
            Reliable strength for structural applications
          </p>
          <Link href="/timber/structural" className="text-blue-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
        
        {/* Product 4 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="w-full h-48 bg-gray-200 rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Premium Concrete Mix</h3>
          <p className="text-gray-500 mt-1 mb-2">
            Professional-grade concrete for all projects
          </p>
          <Link href="/supplies/concrete" className="text-blue-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button asChild size="lg">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  );
}

const homeTestimonials = [
  {
    id: 1,
    quote: "Their selection of timber flooring is outstanding. The staff provided expert advice that helped me choose the perfect option for my home renovation.",
    name: "Sarah W.",
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "As a contractor, I rely on quality materials delivered on time. This company consistently exceeds my expectations with their products and service.",
    name: "James R.",
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "The structural steel we purchased was exactly what our commercial project needed. Great quality at competitive prices.",
    name: "Emily G.",
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
    quote: "We've been working with JPC for years on all our construction projects. Their consistent quality and reliable service keeps us coming back.",
    name: "Robert T.",
    image: "/testimonial-4.jpg"
  },
  {
    id: 5,
    quote: "The concrete supplies arrived exactly when promised, and the quality was superb. Definitely my go-to supplier for future projects.",
    name: "Michelle K.",
    image: "/testimonial-5.jpg"
  },
  {
    id: 6,
    quote: "Excellent customer service! They helped me find exactly what I needed for my DIY home project, even though I was clueless when I walked in.",
    name: "Thomas H.",
    image: "/testimonial-6.jpg"
  }
];

export default function HomePage() {
  return (
    <>
              <div className="max-w-[2200px] mx-auto px-4 py-6 md:py-8">
        <HeroSection />
      </div>
      
      <div className="max-w-[2200px] mx-auto px-4">
        <ProductCategories />
      </div>
      
      <div className="max-w-[2200px] mx-auto px-4 mb-16">
        <SupplyChainSection />
      </div>
      
      {/* Full-width black section */}
      <OurValues />
      
      <div className="max-w-[2200px] mx-auto px-4">
        <FeaturedProducts />
        <TestimonialsCarousel
          title="Customer Testimonials"
          subtitle="See what our customers have to say about our products and service."
          testimonials={homeTestimonials}
        />
      </div>
    </>
  );
}
