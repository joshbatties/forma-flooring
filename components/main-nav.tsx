"use client";

import Link from "next/link";
import { useState, Dispatch, SetStateAction } from "react";
import { ChevronDown, X } from "lucide-react";
import { Icons } from "./icons";

interface MainNavProps {
  isMenuOpen?: boolean;
  setMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

export function MainNav({ isMenuOpen, setMenuOpen }: MainNavProps) {
  const [productsOpen, setProductsOpen] = useState(false);
  const MenuIcon = Icons.menu;
  
  // Use provided state if available, otherwise use internal state
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isMenuOpen !== undefined ? isMenuOpen : internalOpen;
  const handleSetOpen = setMenuOpen || setInternalOpen;

  return (
    <>
      {/* Desktop navigation menu in the center */}
      <nav className="hidden md:flex items-center justify-center">
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              href="/about"
              className="px-2 py-1 text-md hover:text-amber-600 transition-colors duration-200"
            >
              ABOUT
            </Link>
          </li>
          
          <li className="relative">
            <button 
              className="flex items-center px-2 py-1 text-md hover:text-amber-600 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                setProductsOpen(!productsOpen);
              }}
            >
              PRODUCTS
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            
            <ul className={`
              absolute left-0 mt-2 p-2 w-64 backdrop-blur-md bg-white/95 rounded-xl shadow-lg border border-gray-100
              transition-all duration-200 ease-in-out origin-top-left z-50
              ${productsOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
            `}>
              <li className="py-1">
                <Link
                  href="/products"
                  className="block px-3 py-2 text-md hover:text-amber-600 transition-colors duration-200 rounded-md hover:bg-amber-50/50"
                  onClick={() => setProductsOpen(false)}
                >
                  All Flooring
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/timber/flooring"
                  className="block px-3 py-2 text-md hover:text-amber-600 transition-colors duration-200 rounded-md hover:bg-amber-50/50"
                  onClick={() => setProductsOpen(false)}
                >
                  Hardwood Flooring
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/timber/flooring?type=engineered"
                  className="block px-3 py-2 text-md hover:text-amber-600 transition-colors duration-200 rounded-md hover:bg-amber-50/50"
                  onClick={() => setProductsOpen(false)}
                >
                  Engineered Flooring
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/timber/flooring?type=laminate"
                  className="block px-3 py-2 text-md hover:text-amber-600 transition-colors duration-200 rounded-md hover:bg-amber-50/50"
                  onClick={() => setProductsOpen(false)}
                >
                  Laminate Flooring
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link
              href="/gallery"
              className="px-2 py-1 text-md hover:text-amber-600 transition-colors duration-200"
            >
              GALLERY
            </Link>
          </li>
          
          <li>
            <Link
              href="/contact"
              className="px-2 py-1 text-md hover:text-amber-600 transition-colors duration-200"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu - Slide out panel - Will be triggered from the Header component */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => handleSetOpen(false)} 
      />
      
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[80vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button 
            onClick={() => handleSetOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <ul className="p-4 space-y-4">
          <li>
            <Link
              href="/about"
              className="block py-2 hover:text-amber-600 transition-colors"
              onClick={() => handleSetOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <button 
              className="flex items-center justify-between w-full py-2 hover:text-amber-600 transition-colors"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Flooring
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Products submenu for mobile */}
            <ul className={`pl-4 mt-2 space-y-2 ${productsOpen ? "block" : "hidden"}`}>
              <li>
                <Link
                  href="/products"
                  className="block py-1.5 text-sm hover:text-amber-600 transition-colors"
                  onClick={() => handleSetOpen(false)}
                >
                  All Flooring
                </Link>
              </li>
              <li>
                <Link
                  href="/timber/flooring"
                  className="block py-1.5 text-sm hover:text-amber-600 transition-colors"
                  onClick={() => handleSetOpen(false)}
                >
                  Hardwood Flooring
                </Link>
              </li>
              <li>
                <Link
                  href="/timber/flooring?type=engineered"
                  className="block py-1.5 text-sm hover:text-amber-600 transition-colors"
                  onClick={() => handleSetOpen(false)}
                >
                  Engineered Flooring
                </Link>
              </li>
              <li>
                <Link
                  href="/timber/flooring?type=laminate"
                  className="block py-1.5 text-sm hover:text-amber-600 transition-colors"
                  onClick={() => handleSetOpen(false)}
                >
                  Laminate Flooring
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/gallery"
              className="block py-2 hover:text-amber-600 transition-colors"
              onClick={() => handleSetOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 hover:text-amber-600 transition-colors"
              onClick={() => handleSetOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
