"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FormEvent, Suspense, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";
import { Search, X } from "lucide-react";

// Add CategoryBackground component
function CategoryBackground({ category }: { category: string }) {
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    const updateHeight = () => {
      const searchBox = document.querySelector('[data-search-box]');
      if (searchBox) {
        const searchBoxRect = searchBox.getBoundingClientRect();
        const height = searchBoxRect.top - 80; // Just account for the header and a small gap
        setHeight(height);
      }
    };

    // Initial measurement
    updateHeight();
    
    // Update on resize and scroll
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);

  // Only show on desktop screens
  return (
    <div 
      className="absolute top-0 -right-0 hidden xl:flex pointer-events-none translate-x-0"
      style={{ height: `${height}px` }}
    >
      <div className="relative w-[400px]">
        <Image
          src={`/${category}-background.svg`}
          alt={`${category} background`}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="relative w-[400px]">
        <Image
          src={`/${category}-background2.svg`}
          alt={`${category} background 2`}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="relative w-[400px]">
        <Image
          src={`/${category}-background3.svg`}
          alt={`${category} background 3`}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as 'hardwood' | 'engineered' | 'laminate' | 'hybrid' | null;
  const searchQuery = searchParams.get('search') || '';
  
  // Add state to track if category was directly accessed
  const [isDirectCategoryAccess, setIsDirectCategoryAccess] = useState(!!categoryParam);
  
  const [activeCategory, setActiveCategory] = useState<'all' | 'hardwood' | 'engineered' | 'laminate' | 'hybrid'>(
    categoryParam ? categoryParam : 'all'
  );
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    searchParams.get('subcategory')
  );
  const [isFiltering, setIsFiltering] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  // Update from URL params when they change
  useEffect(() => {
    if (categoryParam && ['hardwood', 'engineered', 'laminate', 'hybrid'].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
    
    const subcategoryParam = searchParams.get('subcategory');
    if (subcategoryParam) {
      setActiveSubcategory(subcategoryParam);
    }

    setLocalSearchQuery(searchQuery);
  }, [searchParams, categoryParam, searchQuery]);
  
  // Handle filter changes with animation
  const handleCategoryChange = (category: 'all' | 'hardwood' | 'engineered' | 'laminate' | 'hybrid') => {
    setIsFiltering(true);
    setActiveCategory(category);
    // Reset subcategory when category changes
    setActiveSubcategory(null);
    // Reset direct access flag when user changes category through filters
    setIsDirectCategoryAccess(false);
    // Reset animation state after a short delay
    setTimeout(() => setIsFiltering(false), 300);
  };
  
  const handleSubcategoryChange = (subcategory: string | null) => {
    setIsFiltering(true);
    setActiveSubcategory(subcategory);
    // Reset animation state after a short delay
    setTimeout(() => setIsFiltering(false), 300);
  };

  // Update URL with current filters without requiring form submission
  const updateURL = useCallback((newSearchQuery: string) => {
    let url = '/products';
    const params = new URLSearchParams();
    
    if (newSearchQuery) {
      params.set('search', newSearchQuery);
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
    
    router.push(url, { scroll: false });
  }, [activeCategory, activeSubcategory, router]);

  // Debounce the URL update to avoid too many history entries
  useEffect(() => {
    const timer = setTimeout(() => {
      updateURL(localSearchQuery);
    }, 300); // Wait for 300ms of no typing before updating URL

    return () => clearTimeout(timer);
  }, [localSearchQuery, updateURL]);
  
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
      case 'hardwood': return 'Hardwood';
      case 'engineered': return 'Engineered';
      case 'laminate': return 'Laminate';
      case 'hybrid': return 'Hybrid';
      default: return 'All Products';
    }
  };

  // Function to get category description
  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'hardwood': 
        return 'Premium solid hardwood flooring featuring Australian native and European species. Known for exceptional durability and timeless beauty.';
      case 'engineered': 
        return 'Engineered flooring combining real timber with enhanced stability. Available in wide boards and designer patterns like herringbone.';
      case 'laminate': 
        return 'High-performance laminate flooring offering exceptional durability and realistic wood appearance at great value.';
      case 'hybrid': 
        return 'Advanced hybrid flooring technology combining the best features of multiple materials. 100% waterproof and ideal for challenging environments.';
      default: 
        return 'Explore our complete range of premium flooring solutions. From traditional hardwoods to innovative hybrid options, find the perfect floor for your space.';
    }
  };

  return (
    <div className="min-h-screen py-8 relative">
      <CategoryBackground category={activeCategory === 'all' ? 'hardwood' : activeCategory} />
      
      <div className="max-w-[2200px] mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
            {isDirectCategoryAccess && activeCategory !== 'all'
              ? getCategoryDisplayName(activeCategory)
              : 'Explore'
            }
          </h1>
          <p className="text-gray-600 max-w-3xl">
            {searchQuery 
              ? `Found ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'} matching "${searchQuery}"`
              : activeCategory === 'all' 
                ? 'Discover our extensive collection of premium timber flooring solutions. From solid hardwood to engineered and laminate options, all our flooring products are carefully selected for beauty, durability, and performance.'
                : getCategoryDescription(activeCategory)
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

        {/* Search Box - Updated to remove form */}
        <div className="mb-8" data-search-box>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                placeholder="Search for flooring products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              {localSearchQuery && (
                <button
                  onClick={() => setLocalSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Results Summary */}
        {localSearchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              Found {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} 
              matching &quot;{localSearchQuery}&quot;
            </p>
          </div>
        )}
        
        {/* Category Filters */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Flooring
            </button>
            <button
              onClick={() => handleCategoryChange('hardwood')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'hardwood'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hardwood
            </button>
            <button
              onClick={() => handleCategoryChange('engineered')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'engineered'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Engineered
            </button>
            <button
              onClick={() => handleCategoryChange('hybrid')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'hybrid'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hybrid
            </button>
            <button
              onClick={() => handleCategoryChange('laminate')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === 'laminate'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Laminate
            </button>
          </div>
          
          {/* Subcategory Filters */}
          {subcategories.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Types</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleSubcategoryChange(null)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    !activeSubcategory
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Types
                </button>
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => handleSubcategoryChange(subcategory)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeSubcategory === subcategory
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
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
        
        {/* Product Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${
          isFiltering ? 'opacity-50' : 'opacity-100'
        } transition-opacity duration-300`}>
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-amber-600">
                      {getCategoryDisplayName(product.category)}
                    </p>
                    {product.price_range && (
                      <p className="text-sm text-gray-600">
                        Price Range: {product.price_range}
                      </p>
                    )}
                    {product.warranty && (
                      <p className="text-sm text-gray-600">
                        Warranty: {product.warranty}
                      </p>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Card>
            </Link>
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
  