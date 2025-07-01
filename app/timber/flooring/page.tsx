"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { useEffect, useRef, useState } from "react";
import TestimonialsCarousel from "../../../components/TestimonialsCarousel";

function HeroSection() {
  return (
    <section className="mt-6 md:mt-12 flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Content */}
      <div className="md:flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
          Beautiful timber floors, direct to your door.
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          Experience the warmth and durability of premium timber flooring,
          and discover structural solutions that bring enduring beauty and
          strength to every project.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button asChild size="lg" className="mt-4">
            <a href="/products">Explore Our Products</a>
          </Button>
        </div>
      </div>

      {/* Hero Video */}
      <div className="md:flex-1 -mx-4 md:mx-0">
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

function SupplyChainSection() {
  return (
    <section className="mt-48 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
        </div>

        {/* Overlapping Images and Text Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Image + Text */}
          <div className="md:w-1/2 flex flex-col">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <Image 
                src="/archway.jpg"
                alt="Architectural timber flooring in an archway"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8 pr-4">
            <h3 className="text-2xl font-semibold mb-4">Our Supply Chain Advantage</h3>
              <p className="text-gray-700">
              By managing every aspect of our timber flooring—from the mill through shipping to final installation—we eliminate unnecessary middlemen, significantly reduce costs, and provide unmatched quality and transparency throughout your flooring&apos;s journey.
              </p>
              <h3 className="text-2xl font-semibold mt-4 mb-4">End-to-End Excellence</h3>
              <p className="text-gray-700">
              From sustainably harvested timber to precise installation, our comprehensive oversight guarantees reliability, craftsmanship, and consistent excellence. Trust our integrated approach for flooring solutions that consistently exceed your expectations.
              </p>
            </div>
          </div>

          {/* Right Text + Image */}
          <div className="md:w-1/2 flex flex-col md:mt-32">
            <div className="mb-8 pl-4">
              <h3 className="text-4xl font-semibold mb-4">Supplying Premium Timber Flooring Australia Wide</h3>
              <p className="text-gray-700">
              FORMA FLOORING is proud to be a family owned and operated Australian
            business creating beautiful timber flooring for residential and
            commercial spaces.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <Image 
                src="/spiral.jpg"
                alt="Spiral staircase with premium timber flooring"
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
            <h2 className="text-3xl md:text-3xl font-light mt-6">Why Choose FORMA?</h2>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Sustainably Sourced</h3>
            <div className="w-full h-px bg-white/30"></div>
            <p className="text-gray-300">
              We carefully select and source our timber to protect the environment
              and future generations.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Unmatched Quality</h3>
            <div className="w-full h-px bg-white/30"></div>
            <p className="text-gray-300">
              Our products meet the highest standards for aesthetic beauty and longevity.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Customer-Focused</h3>
            <div className="w-full h-px bg-white/30"></div>
            <p className="text-gray-300">
              From first contact to final installation, we guide you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center">Our Collections</h2>
      <p className="text-gray-600 text-center mt-2">
        Hand-selected premium timbers to suit every style.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="w-full h-48 bg-gray-200 rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Premium Oak Flooring</h3>
          <p className="text-gray-500 mt-2">
            European white oak with a timeless, refined look.
          </p>
        </div>
        {/* Card 2 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="w-full h-48 bg-gray-200 rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Rustic Pine Boards</h3>
          <p className="text-gray-500 mt-2">
            Bring a touch of warmth with these versatile, durable boards.
          </p>
        </div>
        {/* Card 3 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="w-full h-48 bg-gray-200 rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Engineered Walnut Planks</h3>
          <p className="text-gray-500 mt-2">
            A stunning dark finish and robust core for maximum stability.
          </p>
        </div>
      </div>
    </section>
  );
}

function OurPromise() {
  return (
    <section className="mt-16 bg-gray-50 py-10 px-6 rounded-lg">
      <h2 className="text-3xl font-bold text-center">Our Promise</h2>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
        We believe in integrity, sustainability, and lasting beauty—principles that
        define every aspect of our work.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Sustainability</h3>
          <p className="text-gray-500 leading-relaxed">
            From responsible sourcing to waste reduction, we prioritize practices
            that protect the environment.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Craftsmanship</h3>
          <p className="text-gray-500 leading-relaxed">
            We combine modern technology with time-honored techniques to ensure
            every piece meets the highest standards.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Community</h3>
          <p className="text-gray-500 leading-relaxed">
            We partner with local communities and contractors, fostering meaningful
            relationships that enhance every project.
          </p>
        </div>
      </div>
    </section>
  );
}

function OurProcess() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center">Our Process</h2>
      <p className="text-gray-600 text-center mt-2 max-w-xl mx-auto">
        From consultation to installation, we take a step-by-step approach to ensure
        your experience is seamless and rewarding.
      </p>
      
      <div className="mt-12 max-w-5xl mx-auto relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2 hidden md:block" />
        
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center mb-16 relative">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
            <h3 className="font-semibold text-xl">Consultation</h3>
            <p className="text-gray-600 mt-2">
              Schedule a call or visit our showroom to discuss your vision, budget, and timeline.
              We&apos;ll help you choose from our various timber collections.
            </p>
          </div>
          <div className="w-12 h-12 bg-amber-100 border-4 border-amber-600 rounded-full z-10 absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span className="text-amber-600 font-bold">1</span>
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-left hidden md:block">
            <div className="w-28 h-28 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200" />
            </div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16 relative">
          <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
            <h3 className="font-semibold text-xl">Selection & Planning</h3>
            <p className="text-gray-600 mt-2">
              Our experts guide you through selecting the ideal wood species, finish, and structural
              requirements. We then plan the exact scope of your project.
            </p>
          </div>
          <div className="w-12 h-12 bg-amber-100 border-4 border-amber-600 rounded-full z-10 absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span className="text-amber-600 font-bold">2</span>
          </div>
          <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
            <div className="w-28 h-28 rounded-lg overflow-hidden ml-auto">
              <div className="w-full h-full bg-gray-200" />
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center mb-16 relative">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
            <h3 className="font-semibold text-xl">Craftsmanship</h3>
            <p className="text-gray-600 mt-2">
              Using modern technology and meticulous woodworking techniques, we
              prepare, cut, and treat your timber for optimal performance and aesthetics.
            </p>
          </div>
          <div className="w-12 h-12 bg-amber-100 border-4 border-amber-600 rounded-full z-10 absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span className="text-amber-600 font-bold">3</span>
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-left hidden md:block">
            <div className="w-28 h-28 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200" />
            </div>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center relative">
          <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
            <h3 className="font-semibold text-xl">Delivery & Installation</h3>
            <p className="text-gray-600 mt-2">
              We carefully deliver your timber materials and can provide skilled
              installation services. Our aim is a smooth, stress-free experience from
              start to finish.
            </p>
          </div>
          <div className="w-12 h-12 bg-amber-100 border-4 border-amber-600 rounded-full z-10 absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <span className="text-amber-600 font-bold">4</span>
          </div>
          <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
            <div className="w-28 h-28 rounded-lg overflow-hidden ml-auto">
              <div className="w-full h-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const flooringTestimonials = [
  {
    id: 1,
          quote: "FORMA FLOORING provided outstanding support from start to finish. Our new oak floors are gorgeous and the craftsmanship is top-notch.",
    name: "Sarah W.",
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
          quote: "We used FORMA FLOORING's engineered timber for our studio renovation. The quality and stability have exceeded our expectations.",
    name: "James R.",
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "Couldn't be happier with our walnut planks. The installation was smooth and the end result is simply stunning.",
    name: "Emily G.",
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
          quote: "The team at FORMA FLOORING were professional and knowledgeable. They helped us select the perfect flooring for our unique space.",
    name: "Michael T.",
    image: "/testimonial-4.jpg"
  },
  {
    id: 5,
    quote: "The quality of timber we received was exceptional. It's rare to find suppliers who care so much about their products.",
    name: "Jessica L.",
    image: "/testimonial-5.jpg"
  },
  {
    id: 6,
          quote: "From selection to installation, working with FORMA FLOORING was seamless. I'll definitely be recommending them to friends and family.",
    name: "David K.",
    image: "/testimonial-6.jpg"
  }
];

export default function TimberFlooringPage() {
  return (
    <>
      <div className="max-w-[2200px] mx-auto px-4 py-6 md:py-8">
        <HeroSection />
      </div>
      
      <div className="max-w-[2200px] mx-auto px-4 mb-16">
        <SupplyChainSection />
      </div>
      
      {/* Full-width black section */}
      <OurValues />
      
      <div className="max-w-[2200px] mx-auto px-4">
        <Collections />
        <OurPromise />
        <OurProcess />
        <TestimonialsCarousel 
          title="Client Stories" 
          subtitle="We take pride in delivering exceptional timber flooring. Hear from a few of our delighted customers."
          testimonials={flooringTestimonials} 
        />
      </div>
    </>
  );
} 