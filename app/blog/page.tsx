import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
    return (
    <div className="min-h-screen py-8">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 mb-8">
        <div className="max-w-[2200px] mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-[2200px] mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Flooring Insights & Inspiration</h1>
          <p className="text-gray-600">
            Explore our collection of articles, guides, and inspiration for all things related to timber flooring. 
            From practical tips to design trends, our blog is your resource for making informed flooring decisions.
        </p>
        </div>
        
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-64 lg:h-auto">
                <Image 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 lg:p-10">
                <div className="text-sm text-gray-500 mb-2">{blogPosts[0].date} • By {blogPosts[0].author}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <Link 
                  href={`/blog/${blogPosts[0].slug}`} 
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-800"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date} • By {post.author}</div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-800"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="bg-amber-50 rounded-xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest flooring trends, tips, and exclusive offers by subscribing to our newsletter.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }