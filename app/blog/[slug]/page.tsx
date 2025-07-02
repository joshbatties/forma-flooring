import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params since they're now async in Next.js 15
  const { slug } = await params;
  
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug);
  
  // If no matching post is found, you could render a 404 page or redirect
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="text-amber-600 hover:text-amber-800">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-8">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 mb-8">
        <div className="max-w-[2200px] mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-amber-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </div>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-4">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        
        {/* Post Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
        
        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Author Bio */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              {post.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <h3 className="font-bold text-lg">{post.author}</h3>
              <p className="text-gray-600">
                Content specialist with over 10 years of experience in the flooring industry.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image 
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link 
                      href={`/blog/${relatedPost.slug}`} 
                      className="inline-flex items-center text-amber-600 font-medium hover:text-amber-800"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Share */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Facebook</button>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600">Twitter</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">WhatsApp</button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900">LinkedIn</button>
          </div>
        </div>
      </article>
    </div>
  );
} 