"use client";

import Image from "next/image";
import TestimonialsCarousel from "../../components/TestimonialsCarousel";
import { GlobeIcon, ShieldCheckIcon, UserIcon, HeartIcon, LightbulbIcon } from "lucide-react";

const aboutTestimonials = [
  {
    id: 1,
          quote: "FORMA FLOORING's commitment to ethical sourcing and sustainability is what made us choose them for our eco-friendly flooring project.",
    name: "Alex M.",
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "Working with the team at JPC has been a pleasure. Their industry knowledge and personalized recommendations made all the difference.",
    name: "Patricia L.",
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "The quality of timber we received was exceptional. You can really tell they care about the products they provide.",
    name: "Nathan K.",
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
          quote: "As an architect, I value partners who understand precision and quality. FORMA FLOORING has proven themselves time and again on our flooring projects.",
    name: "Victoria S.",
    image: "/testimonial-4.jpg"
  },
  {
    id: 5,
    quote: "Their dedication to customer satisfaction is unmatched. Every question answered, every concern addressed - truly excellent service.",
    name: "William P.",
    image: "/testimonial-5.jpg"
  },
  {
    id: 6,
    quote: "Twenty years working in construction, and JPC stands out as one of the most reliable suppliers I've partnered with.",
    name: "Karen B.",
    image: "/testimonial-6.jpg"
  }
];

const teamMembers = [
  {
    name: "Michael Johnson",
    role: "Founder & CEO",
    image: "/team-1.jpg",
          bio: "With over 25 years of experience in the timber flooring industry, Michael founded FORMA FLOORING with a vision to provide sustainable, high-quality timber flooring solutions."
  },
  {
    name: "Sarah Williams",
    role: "Chief Operations Officer",
    image: "/team-2.jpg",
    bio: "Sarah oversees our day-to-day operations, ensuring that we maintain our high standards of quality and service across all departments."
  },
  {
    name: "David Thompson",
    role: "Head of Sustainability",
    image: "/team-3.jpg",
    bio: "David leads our sustainability initiatives, working with suppliers to ensure our timber is responsibly sourced and environmentally friendly."
  },
  {
    name: "Emma Roberts",
    role: "Customer Relations Manager",
    image: "/team-4.jpg",
    bio: "Emma ensures that our customers receive exceptional service from their first inquiry through to project completion and beyond."
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/archway.jpg"
            alt="Timber workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl">
            Crafting Australia's finest timber products since 2001
          </p>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About FORMA FLOORING</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2001, FORMA FLOORING has been delivering exceptional timber flooring solutions for over
                  two decades. Our commitment to sustainability, quality, and innovation
                  has positioned us as a trusted leader in the Australian timber flooring industry.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in responsible sourcing, modern craftsmanship, and building
                  lasting relationships with our clients. From residential hardwood flooring
                  to commercial engineered timber installations, our dedicated team is here to
                  support you every step of the way.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What began as a small family business has grown into one of Australia's most respected timber flooring specialists, 
                  with a commitment to quality that remains unchanged despite our growth.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <Image 
                src="/spiral.jpg" 
                alt="FORMA FLOORING showroom" 
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <GlobeIcon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices, ensuring our timber comes from sustainably managed forests.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Each timber product we provide undergoes rigorous quality control checks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <UserIcon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We're committed to exceeding expectations on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our dedicated team of professionals brings decades of combined experience in the timber industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-amber-50">
                    <div className="h-20 w-20 bg-amber-100 rounded-full flex items-center justify-center text-2xl font-bold text-amber-600">
                      {member.name.split(' ').map(part => part[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-amber-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-[400px]">
              <Image 
                src="/archway.jpg" 
                alt="Our timber process" 
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-amber-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Responsible Sourcing</h3>
                    <p className="text-gray-600">We partner with suppliers who share our commitment to sustainable forestry practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-amber-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Selection</h3>
                    <p className="text-gray-600">Our timber specialists carefully select each piece for quality, grain, and character.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-amber-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Precision Processing</h3>
                    <p className="text-gray-600">State-of-the-art equipment ensures our timber is cut and finished to exact specifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-amber-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dedicated Support</h3>
                    <p className="text-gray-600">From selection to installation, our team provides expert guidance every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <TestimonialsCarousel
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from the customers who have trusted us with their projects."
          testimonials={aboutTestimonials}
        />
      </div>
    </div>
  );
}
  