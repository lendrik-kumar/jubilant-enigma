import React, { useState } from "react";
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";
import { categories, sortOptions } from "../constants/products";

/**
 * ProductFilters Component
 * Handles filtering and sorting of products
 * Props structured for backend integration
 */
const ProductFilters = ({
  filters = {},
  onFilterChange,
  onReset,
  totalProducts = 0,
  className = "",
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    gender: true,
    price: true,
    availability: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (categoryId) => {
    onFilterChange({
      category: categoryId === filters.category ? "all" : categoryId,
    });
  };

  const handleGenderChange = (gender) => {
    onFilterChange({ gender: gender === filters.gender ? null : gender });
  };

  const handleSortChange = (sortId) => {
    onFilterChange({ sort: sortId });
  };

  const handlePriceChange = (min, max) => {
    onFilterChange({ minPrice: min, maxPrice: max });
  };

  const activeFiltersCount = [
    filters.category && filters.category !== "all",
    filters.gender,
    filters.minPrice !== undefined,
    filters.inStock,
  ].filter(Boolean).length;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <FilterSection
        title="Category"
        isExpanded={expandedSections.category}
        onToggle={() => toggleSection("category")}
      >
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={
                    filters.category === category.id ||
                    (!filters.category && category.id === "all")
                  }
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-offset-0"
                />
                <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                  {category.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">({category.count})</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Gender Filter */}
      <FilterSection
        title="Gender"
        isExpanded={expandedSections.gender}
        onToggle={() => toggleSection("gender")}
      >
        <div className="flex gap-2">
          {["men", "women"].map((gender) => (
            <button
              key={gender}
              onClick={() => handleGenderChange(gender)}
              className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-lg border transition-all ${
                filters.gender === gender
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection
        title="Price"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection("price")}
      >
        <div className="space-y-3">
          {[
            { label: "Under $100", min: 0, max: 100 },
            { label: "$100 - $150", min: 100, max: 150 },
            { label: "$150 - $200", min: 150, max: 200 },
            { label: "Over $200", min: 200, max: undefined },
          ].map((range, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={
                  filters.minPrice === range.min &&
                  filters.maxPrice === range.max
                }
                onChange={() => handlePriceChange(range.min, range.max)}
                className="w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-offset-0"
              />
              <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Availability Filter */}
      <FilterSection
        title="Availability"
        isExpanded={expandedSections.availability}
        onToggle={() => toggleSection("availability")}
      >
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) =>
              onFilterChange({ inStock: e.target.checked || undefined })
            }
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-offset-0"
          />
          <span className="text-sm text-gray-700">In Stock Only</span>
        </label>
      </FilterSection>

      {/* Reset Filters */}
      {activeFiltersCount > 0 && (
        <button
          onClick={onReset}
          className="w-full py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Clear All Filters ({activeFiltersCount})
        </button>
      )}
    </div>
  );

  return (
    <div className={className}>
      {/* Mobile Filter Button */}
      <div className="lg:hidden flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <p className="text-sm text-gray-600">{totalProducts} products</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 text-xs bg-black text-white rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <SortDropdown
            value={filters.sort || "featured"}
            onChange={handleSortChange}
          />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <span className="text-sm text-gray-500">
            {totalProducts} products
          </span>
        </div>
        <FilterContent />
      </div>

      {/* Mobile Filter Panel */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-65px)]">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Filter Section Component
const FilterSection = ({ title, isExpanded, onToggle, children }) => (
  <div className="border-b border-gray-200 pb-6">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-2 text-left"
    >
      <span className="text-sm font-semibold text-gray-900">{title}</span>
      <ChevronDown
        className={`w-4 h-4 text-gray-500 transition-transform ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    </button>
    {isExpanded && <div className="mt-4">{children}</div>}
  </div>
);

// Sort Dropdown Component
const SortDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentSort =
    sortOptions.find((opt) => opt.id === value) || sortOptions[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <span className="hidden sm:inline">Sort:</span> {currentSort.name}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onChange(option.id);
                  setIsOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                  value === option.id
                    ? "font-semibold text-black"
                    : "text-gray-700"
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductFilters;

// Export SortDropdown for use elsewhere
export { SortDropdown };
