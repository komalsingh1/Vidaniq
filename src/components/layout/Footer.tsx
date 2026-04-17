import Link from "next/link";
import { Leaf, Instagram, Youtube, Twitter, Heart } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Products", href: "/products" },
    { label: "Bestsellers", href: "/products?sort=bestselling" },
    { label: "New Arrivals", href: "/products?sort=new-arrivals" },
    { label: "Routine Kits", href: "/products?view=bundles" },
    { label: "Gift Sets", href: "/products?view=bundles" },
  ],
  "Skin Concerns": [
    { label: "Acne & Breakouts", href: "/products?concern=acne" },
    { label: "Pigmentation", href: "/products?concern=pigmentation" },
    { label: "Dullness", href: "/products?concern=dullness" },
    { label: "Dryness", href: "/products?concern=dryness" },
    { label: "Anti-Aging", href: "/products?concern=fine-lines" },
  ],
  Company: [
    { label: "About Vidaniq", href: "/about" },
    { label: "Our Ingredients", href: "/ingredients" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Support: [
    { label: "Track Order", href: "/orders" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-sage-900 text-white">
      {/* Trust bar */}
      <div className="border-b border-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: "🌿",
              title: "100% Natural",
              desc: "No harmful chemicals",
            },
            { icon: "🔬", title: "Dermat Tested", desc: "Clinically verified" },
            { icon: "🐰", title: "Cruelty Free", desc: "PETA certified" },
            {
              icon: "♻️",
              title: "Sustainable",
              desc: "Eco-friendly packaging",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-semibold text-sm text-white">
                  {item.title}
                </div>
                <div className="text-xs text-sage-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sage-400 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-sage-900" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                vidaniq
              </span>
            </Link>
            <p className="text-sage-300 text-sm leading-relaxed mb-4">
              Science-backed skincare rooted in Ayurvedic wisdom. Pure, potent,
              and honest.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-sage-700 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-sage-700 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-sage-800 rounded-full flex items-center justify-center hover:bg-sage-700 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sage-300 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-8 border-t border-sage-800">
          <div className="max-w-md">
            <h4 className="font-semibold text-white mb-1">
              Join the Vidaniq community
            </h4>
            <p className="text-sage-300 text-sm mb-3">
              Get skincare tips, new launches, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-sage-800 text-white placeholder-sage-400 text-sm px-4 py-2.5 rounded-xl border border-sage-700 focus:outline-none focus:border-sage-400"
              />
              <button className="bg-sage-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-sage-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-sage-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sage-400">
          <p>© 2024 Vidaniq. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in
            India
          </p>
        </div>
      </div>
    </footer>
  );
}
