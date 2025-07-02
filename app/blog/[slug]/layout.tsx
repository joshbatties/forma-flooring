import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";

// This is a dynamic route, so we need to generate metadata dynamically
// In a real app, you would fetch this data from a CMS or API
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | FORMA FLOORING",
      description: "The blog post you're looking for doesn't exist.",
    };
  }
  
  return {
    title: `${post.title} | FORMA FLOORING Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostLayout({
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