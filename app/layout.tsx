import "./globals.css";
import { ReactNode } from "react";
import  Header  from "../components/header";
import  Footer  from "../components/footer";
import FloatingSamplesBadge from "../components/floating-samples-badge";
import { Gabarito } from 'next/font/google';

const gabarito = Gabarito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-gabarito'
});

export const metadata = {
  title: "FORMA FLOORING - Premium Timber Flooring Solutions",
  description: "Beautiful hardwood, engineered, and laminate timber flooring. Expert installation and superior quality flooring solutions for your home or business.",
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: {
      url: '/favicons/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png'
    },
    other: [
      {
        rel: 'manifest',
        url: '/favicons/site.webmanifest'
      }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="mask-icon" href="/favicons/favicon.ico" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body className={`min-h-screen flex flex-col ${gabarito.variable} font-sans`}>
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <FloatingSamplesBadge />
      </body>
    </html>
  );
}
