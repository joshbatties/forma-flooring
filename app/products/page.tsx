"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FormEvent, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";
import { Search } from "lucide-react";

function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as 'hardwood' | 'engineered' | 'laminate' | null;
  const searchQuery = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState<'all' | 'hardwood' | 'engineered' | 'laminate'>(
    categoryParam ? categoryParam : 'all'
  );
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    searchParams.get('subcategory')
  );
  const [isFiltering, setIsFiltering] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  // Update from URL params when they change
  useEffect(() => {
    if (categoryParam && ['hardwood', 'engineered', 'laminate'].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
    
    const subcategoryParam = searchParams.get('subcategory');
    if (subcategoryParam) {
      setActiveSubcategory(subcategoryParam);
    }

    setLocalSearchQuery(searchQuery);
  }, [searchParams, categoryParam, searchQuery]);
  
  // Handle filter changes with animation
  const handleCategoryChange = (category: 'all' | 'hardwood' | 'engineered' | 'laminate') => {
    setIsFiltering(true);
    setActiveCategory(category);
    // Reset subcategory when category changes
    setActiveSubcategory(null);
    // Reset animation state after a short delay
    setTimeout(() => setIsFiltering(false), 300);
  };
  
  const handleSubcategoryChange = (subcategory: string | null) => {
    setIsFiltering(true);
    setActiveSubcategory(subcategory);
    // Reset animation state after a short delay
    setTimeout(() => setIsFiltering(false), 300);
  };

  // Handle search form submission
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    
    // Build the new URL with search parameters
    let url = '/products';
    const params = new URLSearchParams();
    
    if (localSearchQuery) {
      params.set('search', localSearchQuery);
    }
    
    if (activeCategory !== 'all') {
      params.set('category', activeCategory);
    }
    
    if (activeSubcategory) {
      params.set('subcategory', activeSubcategory);
    }
    
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    
    router.push(url);
  };
  
  // Get available subcategories for the selected category
  const subcategories = activeCategory !== 'all'
    ? [...new Set(products
        .filter(product => product.category === activeCategory)
        .map(product => product.subcategory)
        .filter(Boolean) as string[])]
    : [];
  
  // Filter products based on active category, subcategory, and search query
  const filteredProducts = products.filter(product => {
    // First filter by search query if present
    if (searchQuery) {
      const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (!searchMatch) {
        return false;
      }
    }
    
    // Then filter by main category
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    // Then filter by subcategory if one is selected
    if (activeSubcategory && product.subcategory !== activeSubcategory) {
      return false;
    }
    
    return true;
  });

  // Show count of filtered products
  const productsCount = filteredProducts.length;
  const totalCount = products.length;

  // Function to get category display name
  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'hardwood': return 'Hardwood Flooring';
      case 'engineered': return 'Engineered Flooring';
      case 'laminate': return 'Laminate Flooring';
      default: return 'All Flooring';
    }
  };

  return (
    <div className="min-h-screen py-8">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 mb-8">
        <div className="max-w-[2200px] mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">
              {activeCategory === 'all' ? 'All Flooring' : getCategoryDisplayName(activeCategory)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="max-w-[2200px] mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {searchQuery 
              ? `Search Results for "${searchQuery}"`
              : activeCategory === 'all' ? 'Our Complete Flooring Range' : getCategoryDisplayName(activeCategory)
            }
          </h1>
          <p className="text-gray-600 max-w-3xl">
            {searchQuery 
              ? `Found ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'} matching "${searchQuery}"`
              : activeCategory === 'all' 
                ? 'Discover our extensive collection of premium timber flooring solutions. From solid hardwood to engineered and laminate options, all our flooring products are carefully selected for beauty, durability, and performance.'
                : `Explore our ${
                    activeCategory === 'hardwood' ? 'premium solid hardwood flooring with natural beauty and exceptional durability' : 
                    activeCategory === 'engineered' ? 'engineered timber flooring offering superior stability and versatile installation options' : 
                    'high-quality laminate flooring providing excellent value and performance for busy spaces'
                  }.`
            }
          </p>
          {searchQuery && (
            <div className="mt-4">
              <Link 
                href="/products" 
                className="inline-flex items-center text-sm text-amber-600 hover:text-amber-800"
              >
                ← Clear search and view all products
              </Link>
            </div>
          )}
        </div>

        {/* Search Box */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                placeholder="Search for flooring products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <button 
              type="submit"
              className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors sm:whitespace-nowrap"
            >
              Search
            </button>
          </form>
        </div>
        
        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <button 
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200
                ${activeCategory === 'all' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            >
              All Flooring
            </button>
            <button 
              onClick={() => handleCategoryChange('hardwood')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200
                ${activeCategory === 'hardwood' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            >
              Hardwood Flooring
            </button>
            <button 
              onClick={() => handleCategoryChange('engineered')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200
                ${activeCategory === 'engineered' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            >
              Engineered Flooring
            </button>
            <button 
              onClick={() => handleCategoryChange('laminate')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200
                ${activeCategory === 'laminate' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            >
              Laminate Flooring
            </button>
          </div>
          
          {/* Subcategory filters (only shown when a main category is selected) */}
          {activeCategory !== 'all' && subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 pl-1">
              <button
                onClick={() => handleSubcategoryChange(null)}
                className={`px-3 py-1 text-sm rounded-full font-medium transition-colors duration-200
                  ${activeSubcategory === null
                    ? 'bg-amber-200 text-amber-800'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-600'}`}
              >
                All {getCategoryDisplayName(activeCategory)}
              </button>
              
              {subcategories.map(subcategory => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategoryChange(subcategory)}
                  className={`px-3 py-1 text-sm rounded-full font-medium transition-colors duration-200
                    ${activeSubcategory === subcategory
                      ? 'bg-amber-200 text-amber-800'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600'}`}
                >
                  {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                </button>
              ))}
            </div>
          )}
          
          <p className="text-sm text-gray-500">
            Showing {productsCount} {productsCount === 1 ? 'product' : 'products'}
            {searchQuery && ` for "${searchQuery}"`}
            {activeCategory !== 'all' && ` in ${getCategoryDisplayName(activeCategory)}`}
            {activeSubcategory && ` › ${activeSubcategory.charAt(0).toUpperCase() + activeSubcategory.slice(1)}`}
            {(activeCategory !== 'all' || activeSubcategory || searchQuery) && ` (of ${totalCount} total)`}
          </p>
        </div>
        
        {/* Products Grid - with animation */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}>
          {filteredProducts.map((product) => (
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
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-amber-100 text-xs font-medium text-amber-800 rounded capitalize">
                    {getCategoryDisplayName(product.category)}
                  </span>
                  {product.subcategory && (
                    <span className="inline-block ml-2 px-2 py-1 bg-gray-50 text-xs font-medium text-gray-600 rounded capitalize">
                      {product.subcategory}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {product.description}
                </p>
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
        
        {/* No Products Message (if needed) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              {searchQuery ? `No results found for "${searchQuery}"` : 'No flooring products found'}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery 
                ? 'Try adjusting your search terms or browse our product categories below.'
                : 'Please check back soon as we update our flooring catalog.'
              }
            </p>
            {searchQuery && (
              <div className="flex justify-center gap-3">
                <Link 
                  href="/products" 
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  View All Products
                </Link>
                <Link 
                  href="/contact" 
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function ProductsPageLoading() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[2200px] mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-80 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageLoading />}>
      <ProductsPageContent />
    </Suspense>
  );
}
  