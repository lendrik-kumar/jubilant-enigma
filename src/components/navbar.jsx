"use client";

import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, X, Menu } from "lucide-react";
import { Link, useRouter } from "../hooks/useRouter.jsx";

const NAV_LINKS = [
  { label: "New Launch", href: "/products?sort=newest" },
  { label: "Men", href: "/products?gender=men" },
  { label: "Women", href: "/products?gender=women" },
  { label: "All Products", href: "/products" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { navigate, currentPath } = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/products", { search: searchQuery.trim() });
      setSearchQuery("");
    }
  };

  const isActive = (href) => {
    const hrefPath = href.split("?")[0];
    return (
      currentPath === hrefPath ||
      (hrefPath !== "/" && currentPath.startsWith(hrefPath))
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-neutral-900 text-white text-center py-2 text-xs font-medium tracking-wide">
        <span className="text-amber-400">✨ FREE SHIPPING</span> on orders over
        $100 | Use code:{" "}
        <span className="text-amber-400 font-bold">CLASSIC20</span>
      </div>

      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4"
        aria-label="Primary"
      >
      <Link
        href="/"
        aria-label="Classic Shoes Home"
        className="flex items-center gap-3 group"
      >
        <img
          src="logo.png"
          alt="Classic Shoes"
          className="h-24 w-auto object-contain"
        />
        <span className="hidden sm:block text-xl font-bold text-neutral-900 tracking-tight">
          Classic<span className="text-amber-500">Shoes</span>
        </span>
      </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors py-2 ${
                  isActive(l.href)
                    ? "text-amber-600"
                    : "text-neutral-700 hover:text-amber-600"
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                    isActive(l.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <form onSubmit={handleSearch} className="relative group">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 group-focus-within:text-amber-500 transition-colors" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 lg:w-52 rounded-full bg-neutral-100 py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white transition-all"
            />
          </form>

          <div
            className="relative"
            onMouseEnter={() => setUserDropdown(true)}
            onMouseLeave={() => setUserDropdown(false)}
          >
            <button
              aria-label="Account"
              className="p-2.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <User className="h-5 w-5 text-neutral-700" />
            </button>

            {userDropdown && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-neutral-200 shadow-xl rounded-xl overflow-hidden animate-slide-down">
                <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
                  <h3 className="text-xl font-bold mb-1">Welcome! 👋</h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    Sign in to access your account
                  </p>
                  <button className="w-full bg-amber-500 py-3 font-bold text-neutral-900 text-sm rounded-lg hover:bg-amber-400 transition-colors">
                    LOGIN / SIGNUP
                  </button>
                </div>
                <div className="p-4 space-y-1">
                  {[
                    { href: "/track", label: "Track your Order" },
                    { href: "/store", label: "Store Locator" },
                    { href: "/returns", label: "Returns & Exchange" },
                    { href: "/faq", label: "FAQ" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-amber-600 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            aria-label="Shopping Cart"
            className="relative p-2.5 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ShoppingBag className="h-5 w-5 text-neutral-700" />
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-amber-500 text-neutral-900 text-xs font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-neutral-100 md:hidden transition-colors"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? (
            <X className="h-6 w-6 text-neutral-700" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-700" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-t border-neutral-200 md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4 bg-neutral-50">
          {NAV_LINKS.map((l, index) => (
            <li key={l.href} style={{ animationDelay: `${index * 50}ms` }}>
              <Link
                href={l.href}
                className={`block py-3 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(l.href)
                    ? "bg-amber-500 text-neutral-900"
                    : "text-neutral-700 hover:bg-neutral-200"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <form onSubmit={handleSearch} className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-lg bg-white border border-neutral-200 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                aria-label="Search"
                className="p-3 bg-amber-500 rounded-lg hover:bg-amber-400 transition-colors"
              >
                <Search className="h-5 w-5 text-neutral-900" />
              </button>
            </form>
          </li>
          <li className="flex items-center gap-3 pt-4 border-t border-neutral-200 mt-4">
            <button
              aria-label="Account"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-neutral-900 text-white rounded-lg font-medium"
            >
              <User className="h-5 w-5" />
              Account
            </button>
            <button
              aria-label="Shopping Cart"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500 text-neutral-900 rounded-lg font-medium"
            >
              <ShoppingBag className="h-5 w-5" />
              Cart (0)
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
