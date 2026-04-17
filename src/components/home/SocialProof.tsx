import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/data/reviews";

const ugcImages = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80",
  "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=300&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
  "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
];

export function SocialProof() {
  const featuredReviews = reviews.slice(0, 3);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { value: "50,000+", label: "Happy Customers" },
          { value: "4.8★", label: "Average Rating" },
          { value: "12,000+", label: "Verified Reviews" },
          { value: "95%", label: "Would Recommend" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-3xl md:text-4xl font-bold text-sage-700">
              {stat.value}
            </p>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="section-title">Real Results, Real People</h2>
          <p className="section-subtitle mt-2">
            Verified reviews from our community
          </p>
        </div>
      </div>

      {/* UGC Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-10">
        {ugcImages.map((src, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer"
          >
            <Image
              src={src}
              alt={`Customer photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-sage-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-semibold">❤️</span>
            </div>
          </div>
        ))}
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featuredReviews.map((review) => (
          <div key={review.id} className="card p-5 space-y-3">
            <div className="flex items-start gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">
                  {review.author}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i <= review.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {review.verified && (
                <span className="ml-auto badge bg-green-50 text-green-700 text-[10px]">
                  ✓ Verified
                </span>
              )}
            </div>

            <div>
              <p className="font-semibold text-sm text-gray-900 mb-1">
                {review.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {review.body}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="capitalize">
                {review.skinType.replace("-", " ")} skin
              </span>
              <span>·</span>
              <span>{review.helpful} found helpful</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
