"use client";

import { useState } from "react";
import { Search, User, ShoppingBag } from "lucide-react";
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
  const { navigate } = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/products", { search: searchQuery.trim() });
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          aria-label="Classic Shoes Home"
          className="flex items-center"
        >
          <img
            src="/logo.svg"
            alt="Classic Shoes"
            width={60}
            height={60}
            className="invert"
          />
        </Link>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[15px] font-semibold text-black transition-colors hover:text-gray-600 tracking-tight"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-36 rounded-full bg-gray-100 py-2 pl-10 pr-4 text-[13px] font-medium text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-gray-200 lg:w-46"
            />
          </form>
          <div
            className="relative"
            onMouseEnter={() => setUserDropdown(true)}
            onMouseLeave={() => setUserDropdown(false)}
          >
            <button
              aria-label="Account"
              className="p-2 transition-colors hover:text-gray-600"
            >
              <User className="h-6 w-6 stroke-[1.5]" />
            </button>

            {userDropdown && (
              <div className="absolute right-0 mt-0 w-72 bg-white border border-gray-200 shadow-lg rounded-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-2">Welcome</h3>
                  <p className="text-[13px] text-gray-700 mb-4">
                    To access account and manage orders
                  </p>
                  <button className="w-full bg-yellow-400 py-3 font-bold text-black text-[13px] hover:bg-yellow-500 transition">
                    LOGIN / SIGNUP
                  </button>
                </div>
                <div className="p-4 space-y-3">
                  <a
                    href="/track"
                    className="block text-[14px] font-semibold text-black hover:text-gray-600"
                  >
                    Track your Order
                  </a>
                  <a
                    href="/store"
                    className="block text-[14px] font-semibold text-black hover:text-gray-600"
                  >
                    Store Locator
                  </a>
                  <a
                    href="/returns"
                    className="block text-[14px] font-semibold text-black hover:text-gray-600"
                  >
                    Returns and Exchange
                  </a>
                  <a
                    href="/garage"
                    className="block text-[14px] font-semibold text-black hover:text-gray-600"
                  >
                    The Garage
                  </a>
                  <a
                    href="/care"
                    className="block text-[14px] font-semibold text-black hover:text-gray-600"
                  >
                    Care
                  </a>
                  <a
                    href="/faq"
                    className="block text-[14px] font-semibold text-black hover:text-gray-600"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            )}
          </div>
          <button
            aria-label="Shopping Cart"
            className="p-2 transition-colors hover:text-gray-600"
          >
            <ShoppingBag className="h-6 w-6 stroke-[1.5]" />
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="mb-1 block h-0.5 w-6 bg-gray-900"></span>
          <span className="mb-1 block h-0.5 w-6 bg-gray-900"></span>
          <span className="block h-0.5 w-6 bg-gray-900"></span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-gray-200 md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="space-y-2 px-4 py-3">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-2 text-[15px] font-semibold text-black hover:text-gray-600"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <form onSubmit={handleSearch} className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-[13px] font-medium placeholder:text-gray-500 focus:outline-none focus:bg-gray-200"
              />
              <button type="submit" aria-label="Search">
                <Search className="h-6 w-6" />
              </button>
            </form>
          </li>
          <li className="flex items-center gap-3 pt-2">
            <button aria-label="Account">
              <User className="h-6 w-6" />
            </button>
            <button aria-label="Shopping Cart">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
