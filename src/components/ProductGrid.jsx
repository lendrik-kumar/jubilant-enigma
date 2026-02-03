import React from "react";
import ProductCard from "./ProductCard";

/**
 * ProductGrid Component
 * Renders a grid of products with loading and empty states
 */
const ProductGrid = ({
  products = [],
  loading = false,
  error = null,
  columns = 4,
  emptyMessage = "No products found",
  className = "",
}) => {
  // Loading skeleton
  if (loading) {
    return (
      <div className={`grid gap-6 ${getGridCols(columns)} ${className}`}>
        {[...Array(8)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="text-red-500 mb-4">
          <svg
            className="w-16 h-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Something went wrong
        </h3>
        <p className="text-gray-600 text-center">{error}</p>
      </div>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="text-gray-400 mb-4">
          <svg
            className="w-16 h-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-600 text-center">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${getGridCols(columns)} ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

// Get Tailwind grid columns class
function getGridCols(columns) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  };
  return colsMap[columns] || colsMap[4];
}

// Loading skeleton component
const ProductCardSkeleton = () => (
  <div className="rounded-xl bg-white ring-1 ring-gray-200 animate-pulse">
    <div className="aspect-square bg-gray-200 rounded-t-xl" />
    <div className="p-4 space-y-3">
      <div className="h-3 bg-gray-200 rounded w-1/4" />
      <div className="flex justify-between gap-2">
        <div className="h-5 bg-gray-200 rounded flex-1" />
        <div className="h-5 bg-gray-200 rounded w-16" />
      </div>
      <div className="h-3 bg-gray-200 rounded w-2/3" />
      <div className="flex gap-1.5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
        ))}
      </div>
    </div>
  </div>
);

export default ProductGrid;
