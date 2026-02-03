import React, { useEffect } from 'react';
import { useRouter } from '../hooks/useRouter.jsx';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import ProductFilters, { SortDropdown } from '../components/ProductFilters';
import { ChevronRight } from 'lucide-react';
import { Link } from '../hooks/useRouter.jsx';

/**
 * ProductsPage Component
 * Main products listing page with filters and sorting
 */
const ProductsPage = () => {
  const { getParam, getAllParams, navigate } = useRouter();
  
  // Get initial filters from URL
  const initialFilters = {
    category: getParam('category') || 'all',
    gender: getParam('gender') || null,
    sort: getParam('sort') || 'featured',
    minPrice: getParam('minPrice') ? Number(getParam('minPrice')) : undefined,
    maxPrice: getParam('maxPrice') ? Number(getParam('maxPrice')) : undefined,
    inStock: getParam('inStock') === 'true' || undefined,
    search: getParam('search') || ''
  };

  const {
    products,
    loading,
    error,
    total,
    filters,
    updateFilters,
    resetFilters
  } = useProducts(initialFilters);

  // Sync filters to URL
  useEffect(() => {
    const params = {};
    if (filters.category && filters.category !== 'all') params.category = filters.category;
    if (filters.gender) params.gender = filters.gender;
    if (filters.sort && filters.sort !== 'featured') params.sort = filters.sort;
    if (filters.minPrice !== undefined) params.minPrice = filters.minPrice;
    if (filters.maxPrice !== undefined) params.maxPrice = filters.maxPrice;
    if (filters.inStock) params.inStock = 'true';
    if (filters.search) params.search = filters.search;

    // Update URL without navigation
    const url = new URL('/products', window.location.origin);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    window.history.replaceState({}, '', url.toString());
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    updateFilters(newFilters);
  };

  const handleReset = () => {
    resetFilters();
  };

  // Get page title based on filters
  const getPageTitle = () => {
    if (filters.search) return `Search: "${filters.search}"`;
    if (filters.gender && filters.category !== 'all') {
      return `${filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1)}'s ${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Shoes`;
    }
    if (filters.gender) {
      return `${filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1)}'s Shoes`;
    }
    if (filters.category && filters.category !== 'all') {
      return `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Shoes`;
    }
    return 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Products</span>
            {filters.category && filters.category !== 'all' && (
              <>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 font-medium capitalize">{filters.category}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {getPageTitle()}
            </h1>
            
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center gap-4">
              <span className="text-sm text-gray-500">{total} products</span>
              <SortDropdown
                value={filters.sort || 'featured'}
                onChange={(sortId) => handleFilterChange({ sort: sortId })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <ProductFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
                totalProducts={total}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1 min-w-0">
            {/* Mobile Filters */}
            <ProductFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
              totalProducts={total}
              className="lg:hidden"
            />

            <ProductGrid
              products={products}
              loading={loading}
              error={error}
              columns={3}
              emptyMessage={filters.search ? `No products found for "${filters.search}"` : "No products found"}
            />

            {/* Load More - For pagination integration */}
            {products.length > 0 && products.length < total && (
              <div className="mt-12 text-center">
                <button className="px-8 py-3 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Load More Products
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
