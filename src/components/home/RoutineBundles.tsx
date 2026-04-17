import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";
import { bundles } from "@/lib/data/bundles";
import { formatPrice } from "@/lib/utils";

export function RoutineBundles() {
  return (
    <section className="py-16 bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Routine Kits</h2>
            <p className="section-subtitle mt-2">
              Complete routines curated by our dermatologists — save up to 30%
            </p>
          </div>
          <Link
            href="/products?view=bundles"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-sage-600 hover:text-sage-800 transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bundles.map((bundle) => {
            const savings = bundle.originalPrice - bundle.price;
            const savingsPct = Math.round(
              (savings / bundle.originalPrice) * 100
            );
            return (
              <Link
                key={bundle.id}
                href={`/products?view=bundles&id=${bundle.id}`}
                className="group card hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-cream-100">
                  <Image
                    src={bundle.image}
                    alt={bundle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-sage-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    Save {savingsPct}%
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-sage-600 font-semibold">
                    <Package className="w-3.5 h-3.5" />
                    {bundle.products.length} Products
                  </div>
                  <h3 className="font-semibold text-gray-900">{bundle.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {bundle.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="font-bold text-gray-900">
                        {formatPrice(bundle.price)}
                      </span>
                      <span className="text-xs text-gray-400 line-through ml-1.5">
                        {formatPrice(bundle.originalPrice)}
                      </span>
                    </div>
                    <span className="text-xs text-green-600 font-semibold">
                      Save {formatPrice(savings)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
