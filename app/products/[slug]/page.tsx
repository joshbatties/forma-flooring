import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductBySlug, getRelatedProducts, Product } from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  // No need to await params.slug in server components in this syntax
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = getRelatedProducts(product);
  
  // Helper function to get category display name
  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'hardwood': return 'Hardwood Flooring';
      case 'engineered': return 'Engineered Flooring';
      case 'laminate': return 'Laminate Flooring';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };
  
  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-[2200px] mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-amber-600">Products</Link>
            <span className="mx-2">/</span>
            <Link href={`/products?category=${product.category}`} className="hover:text-amber-600 capitalize">
              {getCategoryDisplayName(product.category)}
            </Link>
            {product.subcategory && (
              <>
                <span className="mx-2">/</span>
                <Link 
                  href={`/products?category=${product.category}&subcategory=${product.subcategory}`} 
                  className="hover:text-amber-600 capitalize"
                >
                  {product.subcategory}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Header */}
      <div className="bg-white">
        <div className="max-w-[2200px] mx-auto px-4 py-8">
          <Link 
            href={`/products?category=${product.category}`}
            className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to {getCategoryDisplayName(product.category)}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
        </div>
      </div>
      
      {/* Product Overview */}
      <section className="py-8">
        <div className="max-w-[2200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Product Information */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2Icon className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Call to Action */}
              <div className="mt-8">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Link href={`/contact?inquiry=product&product=${product.id}`}>Request Quote</Link>
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  Contact us for pricing, availability, and custom specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Specifications */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-[2200px] mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Specifications</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 font-medium">{key}</td>
                      <td className="py-3 px-4 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
      
      {/* Applications */}
      {product.applications && product.applications.length > 0 && (
        <section className="py-8">
          <div className="max-w-[2200px] mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.applications.map((application, index) => (
                <div key={index} className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle2Icon className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="font-medium">{application}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-8">
          <div className="max-w-[2200px] mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Link 
                      href={`/products/${relatedProduct.slug}`}
                      className="text-amber-600 hover:text-amber-800 text-sm font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Contact Section */}
      <section className="py-8 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-6">
            Our team of product specialists is ready to help you with any questions about {product.name}.
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 