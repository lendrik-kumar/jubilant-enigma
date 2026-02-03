import React from 'react';
import { Link } from '../hooks/useRouter.jsx';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from './ProductGrid';
import { ArrowRight } from 'lucide-react';

/**
 * FeaturedProducts Component
 * Displays a curated selection of products on the homepage
 */
const FeaturedProducts = () => {
  // Fetch bestsellers and new arrivals
  const { products: bestsellers, loading: bestsellersLoading } = useProducts({
    sort: 'featured',
  });

  const displayProducts = bestsellers.slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600">
              Discover our most popular styles loved by customers worldwide
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <ProductGrid
          products={displayProducts}
          loading={bestsellersLoading}
          columns={4}
        />

        {/* Category Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard
            title="Men's Collection"
            description="Explore performance and style"
            image="/assets/shoes/shoe-10.avif"
            href="/products?gender=men"
          />
          <CategoryCard
            title="Women's Collection"
            description="Discover comfort and elegance"
            image="/assets/shoes/shoe-12.avif"
            href="/products?gender=women"
          />
        </div>

        {/* New Arrivals Banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <img
            src="/assets/shoes/shoe-11.avif"
            alt="New Arrivals"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-20 p-8 sm:p-12 lg:p-16">
            <span className="inline-block px-3 py-1 text-xs font-bold bg-yellow-400 text-black rounded mb-4">
              NEW ARRIVALS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-lg">
              Step Into the Future of Footwear
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Check out our latest drops featuring cutting-edge design and unmatched comfort.
            </p>
            <Link
              href="/products?sort=newest"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Shop New Arrivals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Category Card Component
const CategoryCard = ({ title, description, image, href }) => (
  <Link
    href={href}
    className="group relative rounded-2xl overflow-hidden aspect-[2/1] bg-gray-200"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:underline">
        Shop Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

export default FeaturedProducts;
