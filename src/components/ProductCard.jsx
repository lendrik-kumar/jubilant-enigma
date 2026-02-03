import React from "react";
import { Link } from "../hooks/useRouter.jsx";
import { Star, Heart } from "lucide-react";

/**
 * ProductCard Component
 * Displays a single product in a grid/list view
 * Props are structured for easy backend integration
 */
const ProductCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  rating,
  reviewCount,
  thumbnail,
  images = [],
  isNew,
  isBestseller,
  inStock,
  colors = [],
  className = "",
}) => {
  const discount = originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : null;
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // TODO: Integrate with backend favorites API
  };

  return (
    <Link href={`/product/${id}`} className="block group">
      <article
        className={`relative rounded-xl bg-white ring-1 ring-gray-200 transition-all duration-300 hover:ring-gray-400 hover:shadow-lg ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100">
          {/* Main Image */}
          <img
            src={thumbnail}
            alt={name}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
              isHovered && images.length > 1
                ? "opacity-0 scale-105"
                : "opacity-100"
            }`}
          />

          {/* Hover Image */}
          {images.length > 1 && (
            <img
              src={images[1]}
              alt={`${name} alternate view`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="px-2 py-1 text-xs font-bold bg-yellow-400 text-black rounded">
                NEW
              </span>
            )}
            {isBestseller && (
              <span className="px-2 py-1 text-xs font-bold bg-black text-white rounded">
                BESTSELLER
              </span>
            )}
            {discount && (
              <span className="px-2 py-1 text-xs font-bold bg-red-500 text-white rounded">
                -{discount}%
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 ${
              isHovered || isFavorite ? "opacity-100" : "opacity-0"
            }`}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
              }`}
            />
          </button>

          {/* Out of Stock Overlay */}
          {!inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="px-4 py-2 bg-white text-black font-semibold text-sm">
                OUT OF STOCK
              </span>
            </div>
          )}

          {/* Quick View - Shows on Hover */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-white text-sm font-medium">Quick View</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            {brand}
          </p>

          {/* Name & Price Row */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
              {name}
            </h3>
            <div className="flex flex-col items-end shrink-0">
              <span className="text-base font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {rating} ({reviewCount})
              </span>
            </div>
          )}

          {/* Color Options */}
          {colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              {colors.slice(0, 4).map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: getColorHex(color) }}
                  title={color}
                />
              ))}
              {colors.length > 4 && (
                <span className="text-xs text-gray-500">
                  +{colors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

// Helper function to convert color names to hex
function getColorHex(colorName) {
  const colorMap = {
    black: "#000000",
    white: "#FFFFFF",
    navy: "#1a365d",
    red: "#dc2626",
    blue: "#2563eb",
    green: "#16a34a",
    brown: "#78350f",
    pink: "#ec4899",
    beige: "#d4b896",
    coral: "#ff7f50",
    mint: "#98ff98",
    "neon-yellow": "#ccff00",
    lavender: "#e6e6fa",
    cream: "#fffdd0",
    grey: "#6b7280",
    gray: "#6b7280",
    sage: "#9dc183",
    blush: "#de5d83",
    charcoal: "#36454f",
    burgundy: "#800020",
    "black-gold": "#000000",
    "white-red": "#FFFFFF",
    canvas: "#f5f5dc",
  };
  return colorMap[colorName.toLowerCase()] || "#cccccc";
}

export default ProductCard;
