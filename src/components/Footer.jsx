import React from "react";
import { Link } from "../hooks/useRouter.jsx";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  ArrowRight,
  Heart,
} from "lucide-react";

/**
 * Footer Component
 * Site-wide footer with navigation, social links, and legal info
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "Men's Shoes", href: "/products?gender=men" },
      { label: "Women's Shoes", href: "/products?gender=women" },
      { label: "New Arrivals", href: "/products?sort=newest" },
      { label: "Best Sellers", href: "/products?sort=featured" },
      { label: "Sale", href: "/products?sale=true" },
    ],
    help: [
      { label: "Customer Service", href: "/support" },
      { label: "Track Order", href: "/track" },
      { label: "Returns & Exchange", href: "/returns" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "FAQ", href: "/faq" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Store Locator", href: "/stores" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Join the <span className="text-amber-500">Classic</span> Club
              </h3>
              <p className="text-neutral-400">
                Subscribe for exclusive offers, early access, and style tips.
              </p>
            </div>
            <form className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-5 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 text-neutral-900 font-bold rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-6 group"
            >
              <img
          src="logo.png"
          alt="Classic Shoes"
          className="h-24 w-auto object-contain"
        />
              <span className="text-xl font-bold">
                Classic<span className="text-amber-500">Shoes</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-8 max-w-xs leading-relaxed">
              Premium footwear crafted for style, comfort, and performance. Step
              into confidence with every pair.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-neutral-400 hover:text-amber-400 transition-colors">
                <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>123 Shoe Street, Fashion District, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 hover:text-amber-400 transition-colors">
                <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>1-800-CLASSIC</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 hover:text-amber-400 transition-colors">
                <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>support@classicshoes.com</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Shop
            </h3>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Help
            </h3>
            <ul className="space-y-4">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & App Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Connect
            </h3>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-neutral-900 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* App Download Buttons */}
            <p className="text-sm text-neutral-400 mb-3">Get the app</p>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-neutral-800 rounded-xl text-sm font-medium hover:bg-neutral-700 transition-colors border border-neutral-700 hover:border-neutral-600">
                📱 App Store
              </button>
              <button className="w-full py-3 px-4 bg-neutral-800 rounded-xl text-sm font-medium hover:bg-neutral-700 transition-colors border border-neutral-700 hover:border-neutral-600">
                📱 Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-neutral-500 flex items-center gap-1">
              © {currentYear} Classic Shoes. Made with{" "}
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> All
              rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-500 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3 text-neutral-500">
              <CreditCard className="w-6 h-6" />
              <span className="text-xs">Secure Checkout</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-neutral-800 rounded text-xs">
                  Visa
                </span>
                <span className="px-2 py-1 bg-neutral-800 rounded text-xs">
                  MC
                </span>
                <span className="px-2 py-1 bg-neutral-800 rounded text-xs">
                  Amex
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
