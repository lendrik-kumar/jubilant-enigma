import React from 'react';
import { Link } from '../hooks/useRouter.jsx';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  CreditCard
} from 'lucide-react';

/**
 * Footer Component
 * Site-wide footer with navigation, social links, and legal info
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "Men's Shoes", href: '/products?gender=men' },
      { label: "Women's Shoes", href: '/products?gender=women' },
      { label: 'New Arrivals', href: '/products?sort=newest' },
      { label: 'Best Sellers', href: '/products?sort=featured' },
      { label: 'Sale', href: '/products?sale=true' },
    ],
    help: [
      { label: 'Customer Service', href: '/support' },
      { label: 'Track Order', href: '/track' },
      { label: 'Returns & Exchange', href: '/returns' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'FAQ', href: '/faq' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Store Locator', href: '/stores' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.svg" alt="Classic Shoes" className="h-10 invert" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Premium footwear crafted for style, comfort, and performance. 
              Step into confidence with every pair.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>123 Shoe Street, Fashion District, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span>1-800-CLASSIC</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>support@classicshoes.com</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & App Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* App Download Buttons (placeholder) */}
            <p className="text-sm text-gray-400 mb-3">Get the app</p>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                App Store
              </button>
              <button className="w-full py-2 px-4 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {currentYear} Classic Shoes. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <CreditCard className="w-8 h-5 text-gray-500" />
              <span className="text-xs text-gray-500">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
