"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function FloatingSamplesBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the badge
    const dismissed = localStorage.getItem('samplesBadgeDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show badge when user starts scrolling
    const handleScroll = () => {
      if (window.scrollY > 50) { // Show after scrolling 50px
        setIsVisible(true);
        // Remove listener once badge is shown
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('samplesBadgeDismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-1 transition-colors z-10 cursor-pointer"
          aria-label="Dismiss"
        >
          <X className="h-3 w-3" />
        </button>
        
        {/* Badge */}
        <Link
          href="/request-sample"
          className="block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="text-center">
            <div className="font-bold text-sm whitespace-nowrap">REQUEST FREE SAMPLES</div>
          </div>
          
          {/* Pulse animation dot */}
          <div className="absolute -top-1 -right-1">
            <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </Link>
      </div>
    </div>
  );
} 