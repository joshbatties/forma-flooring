import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, ArrowRight, Facebook, Linkedin } from "lucide-react";
import { XIcon } from "@/components/icons";
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
          <div className="flex space-x-4">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1877F2] transition-colors p-2"
              title="Share on Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors p-2"
              title="Share on Twitter"
            >
              <XIcon size={24} />
            </a>
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#25D366] transition-colors p-2"
              title="Share on WhatsApp"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0A66C2] transition-colors p-2"
              title="Share on LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
} 