"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";

export default function AllTimberProductsPage() {
  const timberProducts = products; // Show all flooring products since we're now flooring-focused
  
  return (
    <div className="min-h-screen py-8">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 mb-8">
        <div className="max-w-[2200px] mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-amber-600">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/timber" className="hover:text-amber-600">Timber</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">All Products</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-[2200px] mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <Link 
            href="/timber"
            className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Timber
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All Timber Products</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our complete range of premium timber products. Each product is carefully selected for quality, grain, durability, and sustainability.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {timberProducts.map((product) => (
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
                  href={`/product/${product.slug}`} 
                  className="text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  View Details →
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        {/* No Products Message (if needed) */}
        {timberProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No timber products found</h3>
            <p className="text-gray-600">Please check back soon as we update our product catalog.</p>
          </div>
        )}
      </div>
    </div>
  );
} 