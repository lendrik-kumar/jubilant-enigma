import React from "react";
import { Link } from "../hooks/useRouter.jsx";
import { useProducts } from "../hooks/useProducts";
import ProductGrid from "./ProductGrid";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

/**
 * FeaturedProducts Component
 * Displays a curated selection of products on the homepage
 */
const FeaturedProducts = () => {
  // Fetch bestsellers and new arrivals
  const { products: bestsellers, loading: bestsellersLoading } = useProducts({
    sort: "featured",
  });

  const displayProducts = bestsellers.slice(0, 8);

  return (
    <section className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">
                Curated for you
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Featured <span className="text-amber-500">Collection</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl">
              Discover our most popular styles loved by customers worldwide.
              Quality meets style in every pair.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-neutral-900 bg-white border-2 border-neutral-200 rounded-full hover:border-amber-500 hover:text-amber-600 transition-all group animate-fade-in"
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            title="Men's Collection"
            description="Explore performance and style"
            image="/assets/shoes/shoe-10.avif"
            href="/products?gender=men"
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <CategoryCard
            title="Women's Collection"
            description="Discover comfort and elegance"
            image="/assets/shoes/shoe-12.avif"
            href="/products?gender=women"
            icon={<Sparkles className="w-5 h-5" />}
          />
        </div>

        {/* New Arrivals Banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-transparent z-10" />
          <img
            src="/assets/shoes/shoe-11.avif"
            alt="New Arrivals"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-20 p-10 sm:p-14 lg:p-20">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                New Arrivals
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-lg leading-tight">
              Step Into the <span className="text-amber-400">Future</span> of
              Footwear
            </h3>
            <p className="text-neutral-400 mb-8 max-w-md text-lg">
              Check out our latest drops featuring cutting-edge design and
              unmatched comfort for the modern explorer.
            </p>
            <Link
              href="/products?sort=newest"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-neutral-900 font-bold rounded-full hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              Shop New Arrivals
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Category Card Component
const CategoryCard = ({ title, description, image, href, icon }) => (
  <Link
    href={href}
    className="group relative rounded-3xl overflow-hidden aspect-[2/1] bg-neutral-200 shadow-lg hover:shadow-2xl transition-all duration-500"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
      <div className="flex items-center gap-2 text-amber-400 mb-3">
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider">
          Shop Now
        </span>
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-300 mb-4">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-amber-500 group-hover:text-neutral-900 transition-all">
        Explore
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

export default FeaturedProducts;
