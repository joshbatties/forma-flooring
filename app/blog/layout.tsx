import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | FORMA FLOORING",
  description: "Explore our collection of articles, guides, and inspiration for all things related to timber flooring.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
} 