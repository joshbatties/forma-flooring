"use client";

import { ContactForm } from "../../components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import NewTestimonials from "../../components/new-testimonial";
import { homeTestimonials } from "@/lib/testimonials";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const contactTestimonials = [
  {
    id: 1,
    quote: "From the moment I reached out, the JPC team was responsive and helpful. They made the whole process so easy.",
    name: "Rachel S.",
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "I had some specific requirements for my commercial project, and they took the time to understand exactly what I needed.",
    name: "Daniel F.",
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "The customer service team went above and beyond to help me find the right materials within my budget.",
    name: "Lisa M.",
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
    quote: "Quick responses to all my inquiries and excellent follow-up. A company that truly values customer communication.",
    name: "John P.",
    image: "/testimonial-4.jpg"
  },
  {
    id: 5,
    quote: "I appreciate how they coordinated delivery around my schedule. Made the whole experience stress-free.",
    name: "Sophia R.",
    image: "/testimonial-5.jpg"
  },
  {
    id: 6,
    quote: "The sales team is knowledgeable and patient. They answered all my questions without making me feel rushed.",
    name: "Mark T.",
    image: "/testimonial-6.jpg"
  }
];

export default function ContactPage() {
  return (
    <div>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions about our flooring products or need a quote for your next project?
              We&apos;re here to help bring your vision to life.
            </p>
          </div>
          
          {/* Contact Info + Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-gray-600">123 Flooring Way, Melbourne VIC 3000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">(03) 9123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">info@formaflooring.com.au</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map or Image Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 w-full overflow-hidden shadow-sm">
                {/* Replace this with an actual map component or image */}
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-gray-500">Map View</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below, and our team will get back to you promptly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Testimonials */}
      <div className="bg-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <NewTestimonials
            title="What our clients say"
            subtitle="Dont just take our word for it"
            testimonials={homeTestimonials} showCta={false}
          />
        </div>
      </div>
    </div>
  );
}
