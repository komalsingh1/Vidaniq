import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const concerns = [
  {
    label: "Acne Control",
    slug: "acne",
    description: "Neem, Salicylic Acid & more",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    color: "from-emerald-50 to-sage-100",
    textColor: "text-sage-800",
    count: 4,
  },
  {
    label: "Dry Skin",
    slug: "dryness",
    description: "Hyaluronic Acid, Shea Butter",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
    color: "from-blue-50 to-sky-100",
    textColor: "text-sky-800",
    count: 3,
  },
  {
    label: "Pigmentation",
    slug: "pigmentation",
    description: "Vitamin C, Saffron, Licorice",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    color: "from-amber-50 to-yellow-100",
    textColor: "text-amber-800",
    count: 3,
  },
  {
    label: "Anti-Aging",
    slug: "fine-lines",
    description: "Bakuchiol, Peptides, Rosehip",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80",
    color: "from-rose-50 to-pink-100",
    textColor: "text-rose-800",
    count: 2,
  },
];

export function ShopByConcern() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="section-title">Shop by Concern</h2>
          <p className="section-subtitle mt-2">
            Targeted solutions for every skin challenge
          </p>
        </div>
        <Link
          href="/products"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-sage-600 hover:text-sage-800 transition-colors"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {concerns.map((concern) => (
          <Link
            key={concern.slug}
            href={`/products?concern=${concern.slug}`}
            className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${concern.color} p-5 hover:shadow-lg transition-all duration-300`}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <Image
                src={concern.image}
                alt={concern.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className={`font-bold text-base ${concern.textColor}`}>
                {concern.label}
              </p>
              <p className="text-gray-500 text-xs mt-0.5">{concern.description}</p>
              <div
                className={`mt-3 flex items-center gap-1 text-xs font-semibold ${concern.textColor}`}
              >
                Shop now <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
