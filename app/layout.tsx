import "./globals.css";
import { ReactNode } from "react";
import  Header  from "../components/header";
import  Footer  from "../components/footer";
import { Gabarito } from 'next/font/google';

const gabarito = Gabarito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-gabarito'
});

export const metadata = {
  title: "FORMA FLOORING - Premium Timber Flooring Solutions",
  description: "Beautiful hardwood, engineered, and laminate timber flooring. Expert installation and superior quality flooring solutions for your home or business.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${gabarito.variable} font-sans`}>
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
