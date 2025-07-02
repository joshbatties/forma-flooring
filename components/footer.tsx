import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white mt-10">
      {/* Main Footer */}
      <div className="max-w-[2200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="text-lg font-semibold text-gray-700 mb-5 flex items-start">
              <Image 
                src="/forma-flooring-mountain-black.png" 
                alt="Forma Flooring Logo" 
                className="h-7 w-auto object-contain" 
                width={28}
                height={28}
              />
            </div>
            <p className="text-gray-500 mb-4">
              Crafting exceptional timber products with a commitment to quality, sustainability, and timeless design since 1998.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-gray-500">(03) 9123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-500">info@jpctimber.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                <span className="text-gray-500">123 Woodcraft Lane<br />Melbourne, VIC 3000</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-5 border-l-2 border-gray-500 pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-5 border-l-2 border-gray-500 pl-3">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/flooring" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Timber Flooring
                </Link>
              </li>
              <li>
                <Link href="/products/flooring#engineered" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Engineered Flooring
                </Link>
              </li>
              <li>
                <Link href="/products/flooring#solid" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Solid Timber Flooring
                </Link>
              </li>
              <li>
                <Link href="/products/structural" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Structural Timber
                </Link>
              </li>
              <li>
                <Link href="/products/structural#beams" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Beams & Joists
                </Link>
              </li>
              <li>
                <Link href="/products/structural#engineered" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Engineered Structural Products
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-5 border-l-2 border-gray-500 pl-3">Stay Updated</h3>
            <p className="text-gray-500 mb-4">
              Subscribe to our newsletter for product updates, industry insights, and exclusive offers.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 hover:bg-black text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-[2200px] mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} FORMA FLOORING. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/blog" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
  