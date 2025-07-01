import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="mt-6 md:mt-12 flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Content */}
      <div className="md:flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Structural Timber Solutions
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          Engineered for strength and reliability, our structural timber products provide 
          sustainable building solutions for projects of any scale.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button asChild size="lg" className="mt-4">
            <a href="/contact">Get a Quote</a>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="md:flex-1">
        <div className="relative w-full h-[calc(100vh-16rem)] md:h-[28rem] bg-white rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-4">Our Structural Timber Products</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Discover our range of high-quality structural timber products engineered to meet the 
        demands of modern construction and building projects.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Engineered Beams */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Engineered Beams</h3>
            <p className="text-gray-700 mb-4">
              Our engineered timber beams provide superior strength and stability for 
              structural applications, with consistent quality and performance.
            </p>
            <Link href="/timber/structural/beams" className="text-blue-600 hover:underline">
              View Products →
            </Link>
          </div>
        </div>
        
        {/* Structural Posts */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Structural Posts</h3>
            <p className="text-gray-700 mb-4">
              High-strength timber posts designed for load-bearing applications in residential 
              and commercial construction projects.
            </p>
            <Link href="/timber/structural/posts" className="text-blue-600 hover:underline">
              View Products →
            </Link>
          </div>
        </div>
        
        {/* Timber Framing */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Timber Framing</h3>
            <p className="text-gray-700 mb-4">
              Premium timber framing solutions that combine traditional craftsmanship 
              with modern engineering for lasting structural integrity.
            </p>
            <Link href="/timber/structural/framing" className="text-blue-600 hover:underline">
              View Products →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="mt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">The Advantages of Structural Timber</h2>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Sustainable Building Material</h3>
              <p className="text-gray-700">
                Timber is a renewable resource with a lower carbon footprint than steel or concrete. 
                Our structural timber is sourced from responsibly managed forests, making it an 
                environmentally friendly choice for your construction projects.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Excellent Strength-to-Weight Ratio</h3>
              <p className="text-gray-700">
                Structural timber provides remarkable strength while being significantly lighter 
                than alternative materials. This makes it easier to handle on-site and reduces 
                the load on foundations.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Natural Aesthetic Appeal</h3>
              <p className="text-gray-700">
                Beyond its structural benefits, timber brings natural warmth and character 
                to buildings. Our structural timber can be left exposed to create striking 
                architectural features that enhance any space.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Excellent Fire Performance</h3>
              <p className="text-gray-700">
                Contrary to common misconception, large structural timber performs predictably in fire 
                conditions. Unlike steel, it doesn't weaken suddenly at high temperatures, allowing 
                more time for evacuation during emergencies.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Superior Thermal Performance</h3>
              <p className="text-gray-700">
                Timber has naturally low thermal conductivity, making it an excellent insulator. 
                This property helps buildings maintain comfortable temperatures and reduces energy 
                consumption for heating and cooling.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Cost-Effective Construction</h3>
              <p className="text-gray-700">
                Our structural timber products offer competitive pricing compared to alternative 
                materials. Combined with faster installation times and reduced need for heavy 
                machinery, timber construction can significantly lower overall project costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationsSection() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-4">Applications</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Our structural timber products are versatile and can be used in various construction applications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 border rounded-lg text-center">
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="font-semibold">Residential Construction</h3>
        </div>
        
        <div className="p-4 border rounded-lg text-center">
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="font-semibold">Commercial Buildings</h3>
        </div>
        
        <div className="p-4 border rounded-lg text-center">
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="font-semibold">Roof Trusses</h3>
        </div>
        
        <div className="p-4 border rounded-lg text-center">
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="font-semibold">Exposed Beam Features</h3>
        </div>
      </div>
    </section>
  );
}

function ProjectSupport() {
  return (
    <section className="mt-24 bg-gray-100 p-8 rounded-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Project Support</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Expert Guidance from Start to Finish</h3>
            <p className="text-gray-700 mb-4">
              Our team of timber specialists and structural engineers provides comprehensive support 
              throughout your project. From initial concept discussions to final installation, 
              we'll ensure you have the right structural timber solution for your specific needs.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Technical specifications and product selection</li>
              <li>• Custom sizing and cutting services</li>
              <li>• Delivery coordination and logistics</li>
              <li>• Installation guidance and best practices</li>
              <li>• Compliance with building codes and regulations</li>
            </ul>
            <Button asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <div className="h-80 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <blockquote className="text-gray-700 italic mb-4">
            "The structural timber beams we purchased exceeded our expectations in both 
            quality and performance. Our project was completed on time and the exposed 
            beams have become a standout feature of the building."
          </blockquote>
          <p className="font-semibold">— Robert T., Construction Manager</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <blockquote className="text-gray-700 italic mb-4">
            "As an architect, I appreciate both the structural integrity and aesthetic 
            quality of their timber products. Their technical support team was incredibly 
            helpful throughout the design process."
          </blockquote>
          <p className="font-semibold">— Jennifer K., Architect</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <blockquote className="text-gray-700 italic mb-4">
            "We've used their structural timber for multiple projects, and the consistency 
            in quality is impressive. Their engineered beams have allowed us to create open, 
            column-free spaces that wouldn't be possible otherwise."
          </blockquote>
          <p className="font-semibold">— Michael D., Building Contractor</p>
        </div>
      </div>
    </section>
  );
}

export default function StructuralTimberPage() {
  return (
    <>
              <div className="max-w-[2200px] mx-auto px-4 py-6 md:py-8">
        <HeroSection />
      </div>
      
      <div className="max-w-[2200px] mx-auto px-4">
        <ProductCategories />
        <AdvantagesSection />
        <ApplicationsSection />
        <ProjectSupport />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="my-16 bg-gray-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Structural Timber Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Contact our team to discuss your requirements, get technical advice, or request a quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
} 