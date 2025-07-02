"use client";

import Link from "next/link";
import Image from "next/image";
import { MainNav } from "./main-nav";
import { Search, ShoppingCart, X } from "lucide-react";
import { Icons } from "./icons";
import { useState, useEffect, useRef } from "react";
import { products, Product } from "@/data/products";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const MenuIcon = Icons.menu;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.length >= 2) {
      // Filter products based on search query
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(query.toLowerCase()))
      );
      
      setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle mobile search toggle
  const handleMobileSearchToggle = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'hardwood': return 'Hardwood Flooring';
      case 'engineered': return 'Engineered Flooring';
      case 'laminate': return 'Laminate Flooring';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  return (
    <header className="w-full bg-white xl:bg-white/80 xl:backdrop-blur-xl shadow-lg xl:shadow-xl border-b border-gray-200 xl:border-white/30 sticky top-0 z-50">
      <div className="max-w-[2200px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Left side */}
          <div className="w-[300px]">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image 
                src="/forma-flooring-mountain-black.png" 
                alt="Forma Flooring Logo" 
                className="h-14 w-auto object-contain" 
                width={200}
                height={200}
                priority
              />
            </Link>
          </div>
          
          {/* Center navigation */}
          <div className="flex-grow flex justify-center">
            <MainNav isMenuOpen={mobileMenuOpen} setMenuOpen={setMobileMenuOpen} />
          </div>
          
          {/* Action buttons - Right side */}
          <div className="w-[300px] flex justify-end items-center">
            {/* Desktop Search - Wider and with live results */}
            <div className="hidden xl:flex relative mr-4" ref={searchRef}>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                  placeholder="Search flooring..." 
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery.length > 0 && setShowResults(true)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                
                {/* Desktop Search Results */}
                {showResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link 
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                        className="flex items-start p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded mr-3 flex-shrink-0"
                          width={48}
                          height={48}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
                          <p className="text-xs text-amber-600 mt-1">{getCategoryDisplayName(product.category)}</p>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                        </div>
                      </Link>
                    ))}
                    {searchQuery.length > 0 && (
                      <Link
                        href={`/products?search=${encodeURIComponent(searchQuery)}`}
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                        className="block p-3 text-center text-sm text-amber-600 hover:bg-amber-50 border-t border-gray-200"
                      >
                        View all results for &quot;{searchQuery}&quot;
                      </Link>
                    )}
                  </div>
                )}
                
                {/* No results message */}
                {showResults && searchResults.length === 0 && searchQuery.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 text-center text-sm text-gray-500">
                      No results found for &quot;{searchQuery}&quot;
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Search Button - Only on mobile */}
            <button 
              onClick={handleMobileSearchToggle}
              className="xl:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 hover:bg-amber-50/50 rounded-full cursor-pointer"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Cart icon */}
            <Link 
              href="/cart" 
              className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 hover:bg-amber-50/50 rounded-full cursor-pointer"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>

            {/* Mobile Menu Toggle - Only on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 hover:bg-amber-50/50 rounded-full cursor-pointer"
              aria-label="Toggle Menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Search Overlay - Centered and full-width */}
      {searchOpen && (
        <div className="xl:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
          <div className="flex justify-center pt-20">
            <div className="w-full max-w-md mx-4" ref={mobileSearchRef}>
              <div className="bg-white rounded-lg shadow-xl">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">Search Flooring</h3>
                    <button
                      onClick={handleMobileSearchToggle}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
                      placeholder="Search for flooring products..." 
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      autoFocus
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                
                {/* Mobile Search Results */}
                {searchResults.length > 0 && (
                  <div className="max-h-80 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link 
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                        className="flex items-start p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded mr-3 flex-shrink-0"
                          width={64}
                          height={64}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                          <p className="text-xs text-amber-600 mt-1">{getCategoryDisplayName(product.category)}</p>
                          <p className="text-xs text-gray-500 mt-2 line-clamp-3">{product.description}</p>
                        </div>
                      </Link>
                    ))}
                    {searchQuery.length > 0 && (
                      <Link
                        href={`/products?search=${encodeURIComponent(searchQuery)}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                        className="block p-4 text-center text-sm text-amber-600 hover:bg-amber-50 border-t border-gray-200"
                      >
                        View all results for &quot;{searchQuery}&quot;
                      </Link>
                    )}
                  </div>
                )}
                
                {/* Mobile No results message */}
                {searchResults.length === 0 && searchQuery.length > 0 && (
                  <div className="p-6 text-center">
                    <p className="text-sm text-gray-500 mb-2">No results found for &quot;{searchQuery}&quot;</p>
                    <p className="text-xs text-gray-400">Try searching for hardwood, engineered, or laminate flooring</p>
                  </div>
                )}
                
                {/* Default suggestions when no search */}
                {searchQuery.length === 0 && (
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Hardwood', 'Oak', 'Engineered', 'Laminate', 'Spotted Gum'].map((term) => (
                        <button
                          key={term}
                          onClick={() => handleSearch(term)}
                          className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
