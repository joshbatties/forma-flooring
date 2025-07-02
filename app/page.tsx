"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";
import NewTestimonials from "../components/new-testimonial";

function HeroSection() {
  return (
    <section className="mt-6 md:mt-12 flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Content */}
      <div className="md:flex-1 space-y-2 text-center md:text-left">
        <div className="flex justify-center md:justify-start mb-0">
          <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded-sm">
            Discover
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-light leading-tight tracking-tight -mt-1 md:-mt-3">
          Beautiful Timber Flooring
        </h1>
        <p className="text-sm font-extralight text-gray-500 uppercase tracking-wide">
          Free Samples | Australia Wide Delivery
        </p>
        <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          Transform your space with premium hardwood, engineered, and laminate timber flooring. 
          Expert installation and superior quality for residential and commercial spaces.
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
      <div className="md:flex-1 -mx-4 md:mx-0 md:-mr-4 bg-white md:flex md:justify-end">
        <div className="relative w-full h-[calc(100vh-16rem)] md:h-[36rem] xl:max-w-[800px] md:rounded-lg md:rounded-r-none overflow-hidden">
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
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex gap-8">
          {/* Left 1/3 - Text Content */}
          <div className="w-1/3 space-y-8">
            <h2 className="text-6xl xl:text-7xl font-light text-gray-900 leading-tight">Our products</h2>
            
            {/* Hardwood */}
            <div className="space-y-2">
              <Link 
                href="/products?category=hardwood" 
                className="block text-lg text-gray-900 underline hover:text-gray-600 transition-colors duration-300"
              >
                Hardwood
              </Link>
              <p className="text-gray-600 leading-relaxed">
                Premium solid timber flooring that showcases the natural beauty and character of Australian hardwoods. Each plank is carefully selected for its exceptional grain patterns, durability, and timeless appeal.
              </p>
            </div>

            {/* Engineered */}
            <div className="space-y-2">
              <Link 
                href="/products?category=engineered" 
                className="block text-lg text-gray-900 underline hover:text-gray-600 transition-colors duration-300"
              >
                Engineered
              </Link>
              <p className="text-gray-600 leading-relaxed">
                The perfect blend of style and stability. Our engineered timber flooring features a genuine hardwood wear layer over a multi-layer core, providing superior dimensional stability.
              </p>
            </div>

            {/* Laminate */}
            <div className="space-y-2">
              <Link 
                href="/products?category=laminate" 
                className="block text-lg text-gray-900 underline hover:text-gray-600 transition-colors duration-300"
              >
                Laminate
              </Link>
              <p className="text-gray-600 leading-relaxed">
                Innovative and practical flooring that delivers the natural appearance of timber with exceptional durability. Scratch-resistant, fade-proof, and easy to maintain.
              </p>
            </div>
          </div>

          {/* Right 2/3 - Images */}
          <div className="w-2/3 grid grid-cols-3 gap-6">
            {/* Hardwood */}
            <div className="space-y-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-sm text-gray-400">01</span>
                <h3 className="text-lg font-medium text-gray-900">Hardwood</h3>
              </div>
              <Link href="/products?category=hardwood" className="block group">
                <div className="relative h-[400px] overflow-hidden rounded-lg transition-shadow">
                  <Image 
                    src="/hardwood.jpg" 
                    alt="Premium hardwood flooring" 
                    fill 
                    className="object-cover transition-transform duration-300"
                  />
                  {/* Glass circle overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out flex items-center justify-center">
                      {/* Plus icon */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Horizontal line */}
                        <div className="absolute w-0 h-1 bg-white group-hover:w-20 transition-all duration-500 delay-300 ease-out"></div>
                        {/* Vertical line */}
                        <div className="absolute w-1 h-0 bg-white group-hover:h-20 transition-all duration-500 delay-300 ease-out"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Engineered */}
            <div className="space-y-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-sm text-gray-400">02</span>
                <h3 className="text-lg font-medium text-gray-900">Engineered</h3>
              </div>
              <Link href="/products?category=engineered" className="block group">
                <div className="relative h-[400px] overflow-hidden rounded-lg transition-shadow">
                  <Image 
                    src="/engineered.jpg" 
                    alt="Engineered timber flooring" 
                    fill 
                    className="object-cover transition-transform duration-300"
                  />
                  {/* Glass circle overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out flex items-center justify-center">
                      {/* Plus icon */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Horizontal line */}
                        <div className="absolute w-0 h-1 bg-white group-hover:w-20 transition-all duration-500 delay-300 ease-out"></div>
                        {/* Vertical line */}
                        <div className="absolute w-1 h-0 bg-white group-hover:h-20 transition-all duration-500 delay-300 ease-out"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Laminate */}
            <div className="space-y-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-sm text-gray-400">03</span>
                <h3 className="text-lg font-medium text-gray-900">Laminate</h3>
              </div>
              <Link href="/products?category=laminate" className="block group">
                <div className="relative h-[400px] overflow-hidden rounded-lg transition-shadow">
          <Image 
                    src="/laminate.jpg" 
                    alt="Laminate flooring" 
                    fill 
                    className="object-cover transition-transform duration-300"
                  />
                  {/* Glass circle overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out flex items-center justify-center">
                      {/* Plus icon */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Horizontal line */}
                        <div className="absolute w-0 h-1 bg-white group-hover:w-20 transition-all duration-500 delay-300 ease-out"></div>
                        {/* Vertical line */}
                        <div className="absolute w-1 h-0 bg-white group-hover:h-20 transition-all duration-500 delay-300 ease-out"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-12">
        {/* Text Content - Mobile version of left 1/3 */}
        <div className="space-y-8">
          <h2 className="text-6xl font-light text-gray-900">Our products</h2>
          
          {/* Hardwood */}
          <div className="space-y-2">
            <Link 
              href="/products?category=hardwood" 
              className="block text-lg text-gray-900 underline hover:text-gray-600 transition-colors duration-300"
            >
              Hardwood
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Premium solid timber flooring that showcases the natural beauty and character of Australian hardwoods. Each plank is carefully selected for its exceptional grain patterns, durability, and timeless appeal.
            </p>
        </div>
        
          {/* Engineered */}
          <div className="space-y-2">
            <Link 
              href="/products?category=engineered" 
              className="block text-lg text-gray-900 underline hover:text-gray-600 transition-colors duration-300"
            >
              Engineered
            </Link>
            <p className="text-gray-600 leading-relaxed">
              The perfect blend of style and stability. Our engineered timber flooring features a genuine hardwood wear layer over a multi-layer core, providing superior dimensional stability.
            </p>
            </div>

          {/* Laminate */}
          <div className="space-y-2">
            <Link 
              href="/products?category=laminate" 
              className="block text-lg text-gray-900 underline hover:text-gray-600 transition-colors duration-300"
            >
              Laminate
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Innovative and practical flooring that delivers the natural appearance of timber with exceptional durability. Scratch-resistant, fade-proof, and easy to maintain.
            </p>
          </div>
        </div>
        
        {/* Images - Mobile version of right 2/3 stacked vertically */}
        <div className="space-y-6">
          {/* Hardwood */}
          <div className="space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-sm text-gray-400">01</span>
              <h3 className="text-lg font-medium text-gray-900">Hardwood</h3>
            </div>
            <Link href="/products?category=hardwood" className="block group">
              <div className="relative h-[250px] overflow-hidden rounded-lg transition-shadow">
                <Image 
                  src="/hardwood.jpg" 
                  alt="Premium hardwood flooring" 
                  fill 
                  className="object-cover transition-transform duration-300"
                />
                {/* Glass circle overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out flex items-center justify-center">
                    {/* Plus icon */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      {/* Horizontal line */}
                      <div className="absolute w-0 h-1 bg-white group-hover:w-20 transition-all duration-500 delay-300 ease-out"></div>
                      {/* Vertical line */}
                      <div className="absolute w-1 h-0 bg-white group-hover:h-20 transition-all duration-500 delay-300 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Engineered */}
          <div className="space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-sm text-gray-400">02</span>
              <h3 className="text-lg font-medium text-gray-900">Engineered</h3>
            </div>
            <Link href="/products?category=engineered" className="block group">
              <div className="relative h-[250px] overflow-hidden rounded-lg transition-shadow">
                <Image 
                  src="/engineered.jpg" 
                  alt="Engineered timber flooring" 
                  fill 
                  className="object-cover transition-transform duration-300"
                />
                {/* Glass circle overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out flex items-center justify-center">
                    {/* Plus icon */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      {/* Horizontal line */}
                      <div className="absolute w-0 h-1 bg-white group-hover:w-20 transition-all duration-500 delay-300 ease-out"></div>
                      {/* Vertical line */}
                      <div className="absolute w-1 h-0 bg-white group-hover:h-20 transition-all duration-500 delay-300 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Laminate */}
          <div className="space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-sm text-gray-400">03</span>
              <h3 className="text-lg font-medium text-gray-900">Laminate</h3>
            </div>
            <Link href="/products?category=laminate" className="block group">
              <div className="relative h-[250px] overflow-hidden rounded-lg transition-shadow">
                <Image 
                  src="/laminate.jpg" 
                  alt="Laminate flooring" 
                  fill 
                  className="object-cover transition-transform duration-300"
                />
                {/* Glass circle overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out flex items-center justify-center">
                    {/* Plus icon */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      {/* Horizontal line */}
                      <div className="absolute w-0 h-1 bg-white group-hover:w-20 transition-all duration-500 delay-300 ease-out"></div>
                      {/* Vertical line */}
                      <div className="absolute w-1 h-0 bg-white group-hover:h-20 transition-all duration-500 delay-300 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupplyChainSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);

      // Calculate progress based on section visibility
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start animation when section comes into view
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate how much of the section is visible (0 to 1)
          const visibleRatio = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight * 0.5)));
          
          if (scrollDirection === 'down') {
            setScrollProgress(visibleRatio);
          } else {
            // When scrolling up, reverse the animation
            setScrollProgress(Math.max(0, visibleRatio - 0.2));
          }
        } else if (rect.top >= windowHeight) {
          // Section not yet visible
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection]);

  return (
    <section ref={sectionRef} className="mt-40 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            <h2 className="text-8xl font-bold">Why Forma?</h2>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 h-2 bg-black transition-all duration-300 ease-out"
                 style={{ width: `${scrollProgress * 100}%` }}>
            </div>
          </div>
          <p className="text-gray-600 mt-6 max-w-xl mx-auto">
            We provide premium timber flooring with superior service at competitive prices.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Image for Australia's Premier section */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image 
              src="/spiral.jpg"
              alt="Premium timber flooring showcase"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Australia's Premier section - moved to top on mobile */}
          <div className="mb-8">
            <h3 className="text-4xl font-semibold mb-4">Australia's Premier Timber Flooring Specialist</h3>
            <p className="text-gray-700">
              We're proud to be a family owned and operated Australian business providing premium timber flooring solutions for residential and commercial projects across the country.
            </p>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image 
              src="/archway.jpg"
              alt="Quality timber flooring"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Direct Supply Chain</h3>
            <p className="text-gray-700">
              By working directly with timber mills and manufacturers, we eliminate unnecessary middlemen, reduce costs, and provide unmatched quality and transparency for all our flooring products.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Expert Consultation</h3>
            <p className="text-gray-700">
              Our team of flooring experts is ready to advise you on the best timber flooring for your project, ensuring you get the perfect solution at the right price.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col md:flex-row gap-8">
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
            <h2 className="text-4xl md:text-3xl xl:text-5xl font-light mt-6">Our Commitment</h2>
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
      <section className="mt-32 px-4">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Trending</h2>
      <p className="text-gray-600 text-center mt-2">
        Our most popular timber flooring products
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
            <Image 
              src="/hardwood.jpg"
              alt="Australian Hardwood Flooring"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Australian Hardwood</h3>
          <p className="text-gray-500 mt-1 mb-2">
            Premium native timber with exceptional durability
          </p>
          <Link href="/products?category=hardwood" className="text-amber-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
        
        {/* Product 2 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
            <Image 
              src="/engineered.jpg"
              alt="Herringbone Engineered Oak"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Herringbone Oak</h3>
          <p className="text-gray-500 mt-1 mb-2">
            Classic pattern with modern engineered stability
          </p>
          <Link href="/products/herringbone-engineered-oak" className="text-amber-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
        
        {/* Product 3 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
            <Image 
              src="/spiral.jpg"
              alt="Spotted Gum Solid Flooring"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Spotted Gum</h3>
          <p className="text-gray-500 mt-1 mb-2">
            Australian native with distinctive grain patterns
          </p>
          <Link href="/products/spotted-gum-solid-flooring" className="text-amber-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
        
        {/* Product 4 */}
        <div className="p-4 border rounded-lg transition-transform hover:scale-[1.02] hover:shadow-sm">
          <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
            <Image 
              src="/laminate.jpg"
              alt="Waterproof Laminate Flooring"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Waterproof Laminate</h3>
          <p className="text-gray-500 mt-1 mb-2">
            Perfect for kitchens, bathrooms and wet areas
          </p>
          <Link href="/products/waterproof-laminate-flooring" className="text-amber-600 hover:underline text-sm">
            View Details →
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button asChild size="lg">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
      </div>
    </section>
  );
}

const homeTestimonials = [
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
      
      <div className="max-w-[2200px] mx-auto">
        <FeaturedProducts />
        <div className="px-4">
          <NewTestimonials
            title="What our clients say"
            subtitle="Dont just take our word for it"
          testimonials={homeTestimonials}
        />
        </div>
      </div>
    </>
  );
}
