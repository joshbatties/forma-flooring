"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  image: string;
};

interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  title = "Client Stories",
  subtitle = "We take pride in delivering exceptional experiences. Hear from a few of our delighted customers.",
  testimonials
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate how many testimonials to show based on screen size
  const displayCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400); // Matches animation duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
      setIsAnimating(false);
    }, 400); // Matches animation duration
  };

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    
    // Determine direction based on index difference
    const newDirection = index > activeIndex ? "right" : "left";
    setDirection(newDirection);
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 400); // Matches animation duration
  };

  // Calculate visible testimonials
  const visibleTestimonials = [];
  for (let i = 0; i < displayCount; i++) {
    const index = (activeIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="mt-16 relative overflow-hidden py-8">
      {title && <h2 className="text-3xl font-bold text-center">{title}</h2>}
      {subtitle && (
        <p className="text-gray-600 text-center mt-2 max-w-xl mx-auto mb-8">
          {subtitle}
        </p>
      )}

      {/* Carousel Container */}
      <div className="relative max-w-[2200px] mx-auto px-4">
        {/* Previous Button */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all md:-left-4 cursor-pointer"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        
        {/* Carousel Items */}
        <div 
          ref={carouselRef}
          className="relative overflow-hidden px-8 md:px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${activeIndex}-${idx}`}
                className={`p-8 border rounded-lg hover:shadow-md transition-shadow relative bg-white`}
                style={{
                  animation: `${isAnimating ? (direction === "right" ? "slideOutLeft" : "slideOutRight") : (direction === "right" ? "slideInRight" : "slideInLeft")} 0.5s ease-in-out`
                }}
              >
                {/* Opening quotation mark - top left corner */}
                <div className="absolute -top-3 -left-3">
                  <Image 
                    src="/open.png" 
                    alt="Opening quote" 
                    width={40} 
                    height={30}
                    className="opacity-70"
                  />
                </div>
                
                <blockquote className="text-gray-600 italic mb-6 relative z-10 pt-4">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                {/* Closing quotation mark - bottom right corner */}
                <div className="absolute -bottom-1 -right-3">
                  <Image 
                    src="/close.png" 
                    alt="Closing quote" 
                    width={40} 
                    height={30}
                    className="opacity-70"
                  />
                </div>
                
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-200">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Button */}
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all md:-right-4 cursor-pointer"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => {
            // Calculate if this dot represents any currently visible testimonial
            const isActive = Array.from(Array(displayCount).keys())
              .map(i => (activeIndex + i) % testimonials.length)
              .includes(index);
              
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-amber-500 w-4" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(40px); }
        }
      `}</style>
    </section>
  );
} 