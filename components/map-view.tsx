"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

function MapLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const address = "1 Collins Street, Melbourne VIC 3000";
  const coordinates = "-37.8136,144.9631";
  
  // URLs for web browsers
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(address)}&ll=${coordinates}`;
  
  // Handle Google Maps click
  const handleGoogleMapsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if Android device
    if (/Android/.test(navigator.userAgent)) {
      e.preventDefault();
      // Use geo: protocol for Android
      window.location.href = `geo:${coordinates}?q=${encodeURIComponent(address)}`;
    }
    // For non-Android devices, use the web URL (default behavior)
  };

  // Handle Apple Maps click
  const handleAppleMapsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if iOS device
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      e.preventDefault();
      window.location.href = `maps://maps.apple.com/?q=${encodeURIComponent(address)}&ll=${coordinates}`;
    }
    // For non-iOS devices, use the web URL (default behavior)
  };

  return (
    <div className="absolute top-3 right-3 z-[400]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 underline text-sm font-medium bg-white/90 px-2 py-1 rounded cursor-pointer"
      >
        Get directions
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 right-0 bg-white rounded-lg shadow-lg p-2 space-y-1 w-48">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGoogleMapsClick}
            className="block w-full text-sm text-center py-1.5 px-3 rounded hover:bg-gray-50 transition-colors"
          >
            Open in Google Maps
          </a>
          <a
            href={appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleAppleMapsClick}
            className="block w-full text-sm text-center py-1.5 px-3 rounded hover:bg-gray-50 transition-colors"
          >
            Open in Apple Maps
          </a>
        </div>
      )}
    </div>
  );
}

export default function MapView() {
  const [isMounted, setIsMounted] = useState(false);
  const position: [number, number] = [-37.8136, 144.9631];

  useEffect(() => {
    setIsMounted(true);

    // Fix for default marker icons in react-leaflet
    import("leaflet").then((L) => {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
      });
    });

    // Fix for map container not rendering properly
    const mapContainer = document.querySelector(".leaflet-container");
    if (mapContainer) {
      window.dispatchEvent(new Event("resize"));
    }
  }, []);

  if (!isMounted) {
    return (
      <div className="h-full w-full bg-white rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative h-64">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            1 Collins Street <br /> Melbourne VIC 3000
          </Popup>
        </Marker>
      </MapContainer>
      <MapLinks />
    </div>
  );
} 