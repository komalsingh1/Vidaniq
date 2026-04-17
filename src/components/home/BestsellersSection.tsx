import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { getBestsellers } from "@/lib/data/products";

export function BestsellersSection() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Bestsellers</h2>
            <p className="section-subtitle mt-2">
              Most loved by 50,000+ customers
            </p>
          </div>
          <Link
            href="/products?sort=bestselling"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-sage-600 hover:text-sage-800 transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/products?sort=bestselling" className="btn-secondary">
            View All Bestsellers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
