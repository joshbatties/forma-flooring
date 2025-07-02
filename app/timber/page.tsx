"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeafIcon, ShieldCheckIcon, TreesIcon, RecycleIcon } from "lucide-react";
import { products } from "@/data/products";

export default function TimberPage() {
  const timberProducts = products; // Show all flooring products since we're now flooring-focused
  
  // Get a few featured products to highlight (top 4)
  const highlightedProducts = timberProducts.slice(0, 4);
  // Get rest of featured products for lower section
  const featuredProducts = timberProducts.slice(0, 6);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/archway.jpg" // Using an existing image as placeholder
            alt="Timber products"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timber Products</h1>
          <p className="text-xl md:text-2xl">
            Sustainably sourced, superior quality timber for every project
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-[2200px] mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-amber-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Timber</span>
          </div>
        </div>
      </div>

      {/* Highlighted Products Section - NEW */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-[2200px] mx-auto">
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Timber Products</h2>
            <Link
              href="/products?category=timber"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              View all Timber products →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightedProducts.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <Link 
                    href={`/products/${product.slug}`} 
                    className="text-amber-600 hover:text-amber-800 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link href="/products?category=timber">See All Timber Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[2200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Premium Timber Solutions</h2>
              <p className="text-gray-600 mb-4">
                At FORMA FLOORING, we pride ourselves on offering the finest selection of timber flooring products in Australia. Our range includes hardwood, engineered, and laminate flooring for various applications.
              </p>
              <p className="text-gray-600 mb-4">
                Each timber product is carefully selected for its quality, grain, durability, and sustainability. We work with responsible suppliers to ensure our timber comes from well-managed forests.
              </p>
              <p className="text-gray-600">
                Whether you're a builder, architect, or homeowner, our expert team can help you choose the perfect timber for your specific project requirements.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <Image 
                src="/spiral.jpg" // Using existing image as placeholder
                alt="Timber products" 
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[2200px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Timber Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image 
                  src="/archway.jpg" // Placeholder
                  alt="Timber Flooring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Timber Flooring</h3>
                <p className="text-gray-600 mb-4">
                  Stunning solid timber, engineered, and laminate flooring options to add warmth and character to any space. Available in various species, finishes, and grades.
                </p>
                <Link href="/timber/flooring" className="text-amber-600 font-medium hover:underline">Learn more →</Link>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image 
                  src="/spiral.jpg" // Placeholder
                  alt="Structural Timber"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Structural Timber</h3>
                <p className="text-gray-600 mb-4">
                  High-quality structural timber including framing, beams, posts, and engineered wood products for construction projects of all sizes.
                </p>
                <Link href="/timber/structural" className="text-amber-600 font-medium hover:underline">Learn more →</Link>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image 
                  src="/archway.jpg" // Placeholder
                  alt="Decorative Timber"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Decorative Timber</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful timber products for interior and exterior decoration, including mouldings, cladding, paneling, and feature timber elements.
                </p>
                <Link href="/contact" className="text-amber-600 font-medium hover:underline">Learn more →</Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-[2200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-[400px]">
              <Image 
                src="/archway.jpg" // Using existing image as placeholder
                alt="Sustainable timber" 
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-4">
                At FORMA FLOORING, environmental responsibility is at the heart of everything we do. We are committed to sourcing timber flooring from sustainably managed forests and suppliers who share our values.
              </p>
              <p className="text-gray-600 mb-4">
                Our timber products are selected not only for their quality but also for their environmental credentials. We prioritize timber that is certified by recognized sustainability programs.
              </p>
              <p className="text-gray-600">
                By choosing FORMA FLOORING, you're supporting responsible forest management practices and contributing to the long-term health of our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[2200px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Timber Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-4">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Superior Quality</h3>
              <p className="text-gray-600">
                Handpicked timber with consistent grading, beautiful grain patterns, and exceptional durability.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-4">
                <TreesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Variety of Species</h3>
              <p className="text-gray-600">
                Extensive range of domestic and imported timber species to suit every application and aesthetic preference.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-4">
                <RecycleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Responsibly sourced timber that meets strict environmental standards and supports sustainable forestry.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-4">
                <LeafIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Beauty</h3>
              <p className="text-gray-600">
                The warmth, character, and timeless appeal that only genuine timber can provide for your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[2200px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Timber Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  <Link 
                    href={`/products/${product.slug}`} 
                    className="text-sm text-amber-600 font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          {timberProducts.length > 6 && (
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <Link href="/timber/all">View All Timber Products</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Find the Perfect Timber for Your Project</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our timber specialists are ready to help you select the ideal timber products for your specific needs. Contact us today for expert advice, quotes, or to discuss custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link href="/timber/all">Explore All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 