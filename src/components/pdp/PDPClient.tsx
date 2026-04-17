"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Zap,
  Heart,
  Share2,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import { ProductCard } from "@/components/ui/ProductCard";
import { useCartStore } from "@/lib/store";
import { Product, Review } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";

interface PDPClientProps {
  product: Product;
  reviews: Review[];
  related: Product[];
}

export function PDPClient({ product, reviews, related }: PDPClientProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "how-to-use" | "reviews">("description");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    window.dispatchEvent(new CustomEvent("openCart"));
  };

  const avgRating = reviews.length
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : product.rating;

  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    pct:
      reviews.length
        ? (reviews.filter((r) => r.rating === star).length / reviews.length) * 100
        : 0,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-sage-600">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-sage-600">Products</Link>
        <span>/</span>
        <span className="text-gray-700 capitalize">{product.category}</span>
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Images */}
        <div className="space-y-3">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-50">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className="badge bg-sage-600 text-white">{product.badge}</span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                  activeImage === i
                    ? "border-sage-500"
                    : "border-transparent hover:border-gray-200"
                )}
              >
                <Image
                  src={img}
                  alt={`Product image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div>
            <p className="text-xs text-sage-600 font-semibold uppercase tracking-wider mb-1">
              {product.category} · {product.volume}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-gray-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-500 mt-1">{product.tagline}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <StarRating rating={avgRating} showValue size="md" />
            <span className="text-sm text-gray-500">
              ({product.reviewCount.toLocaleString()} reviews)
            </span>
            <Link
              href="#reviews"
              onClick={() => setActiveTab("reviews")}
              className="text-xs text-sage-600 underline"
            >
              Read reviews
            </Link>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-gray-400 line-through text-lg">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="badge bg-green-50 text-green-700 font-bold">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>

          {/* Key benefit */}
          <div className="bg-sage-50 rounded-xl p-4">
            <p className="text-sm font-semibold text-sage-800 flex items-center gap-2">
              <span className="text-base">✨</span> {product.keyBenefit}
            </p>
          </div>

          {/* Suitable for */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-500 font-medium">
              Good for:
            </span>
            {product.suitableFor.map((type) => (
              <span
                key={type}
                className="badge bg-cream-100 text-cream-800 capitalize text-xs"
              >
                {type.replace("-", " ")} skin
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all text-sm",
                added
                  ? "bg-sage-700 text-white"
                  : "bg-sage-600 text-white hover:bg-sage-700"
              )}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </>
              )}
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold border-2 border-sage-600 text-sage-700 hover:bg-sage-50 transition-all text-sm">
              <Zap className="w-4 h-4" /> Buy Now
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setWishlisted((w) => !w)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                wishlisted ? "text-red-500" : "text-gray-500 hover:text-red-500"
              )}
            >
              <Heart
                className={cn(
                  "w-4 h-4",
                  wishlisted ? "fill-red-500" : ""
                )}
              />
              {wishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { icon: "🌿", text: "Chemical Free" },
              { icon: "🔬", text: "Dermat Tested" },
              { icon: "🚫", text: "No Parabens" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex flex-col items-center gap-1 text-center bg-cream-50 rounded-xl p-3"
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="text-xs font-medium text-gray-700">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-100 mb-8" id="reviews">
        <div className="flex gap-6 overflow-x-auto">
          {(
            [
              { key: "description", label: "Description" },
              { key: "ingredients", label: "Ingredients" },
              { key: "how-to-use", label: "How to Use" },
              { key: "reviews", label: `Reviews (${reviews.length})` },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-all",
                activeTab === tab.key
                  ? "border-sage-600 text-sage-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="mb-16 max-w-3xl">
        {activeTab === "description" && (
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Key Benefits</h3>
              <ul className="space-y-1.5">
                {product.ingredients.slice(0, 4).map((ing) => (
                  <li key={ing.name} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-sage-500 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="font-semibold">{ing.name}:</span>{" "}
                      {ing.benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="space-y-2 pt-4">
              <h3 className="font-semibold text-gray-900">FAQs</h3>
              {product.faq.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-sm text-gray-900">
                      {item.question}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "ingredients" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-4">
              Every ingredient in this formula is purposefully chosen. Here's
              what's inside and why:
            </p>
            <div className="space-y-3">
              {product.ingredients.map((ing) => (
                <div
                  key={ing.name}
                  className="flex gap-4 p-4 bg-cream-50 rounded-xl"
                >
                  <span className="text-2xl shrink-0">{ing.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm text-gray-900">
                        {ing.name}
                      </h4>
                      <span className="badge bg-sage-100 text-sage-700 text-xs">
                        {ing.source}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{ing.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "how-to-use" && (
          <div className="space-y-3">
            {product.howToUse.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-7 h-7 bg-sage-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            {/* Rating summary */}
            <div className="flex gap-8 items-start">
              <div className="text-center">
                <p className="font-serif text-5xl font-bold text-gray-900">
                  {avgRating.toFixed(1)}
                </p>
                <StarRating rating={avgRating} size="md" className="justify-center mt-1" />
                <p className="text-xs text-gray-500 mt-1">
                  {product.reviewCount.toLocaleString()} reviews
                </p>
              </div>
              <div className="flex-1 space-y-1.5">
                {ratingBreakdown.map(({ star, count, pct }) => (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="text-gray-500 w-4">{star}</span>
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div
                        className="bg-amber-400 h-1.5 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-gray-400 w-6">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review list */}
            {reviews.length === 0 ? (
              <p className="text-gray-500 text-sm">
                No reviews yet. Be the first to review!
              </p>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-gray-900">
                            {review.author}
                          </span>
                          {review.verified && (
                            <span className="badge bg-green-50 text-green-700 text-[10px]">
                              ✓ Verified
                            </span>
                          )}
                          <span className="text-xs text-gray-400 ml-auto">
                            {new Date(review.date).toLocaleDateString("en-IN", {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <StarRating rating={review.rating} size="sm" className="mt-0.5" />
                      </div>
                    </div>
                    <p className="font-semibold text-sm text-gray-900 mb-1">
                      {review.title}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {review.body}
                    </p>
                    {review.images && review.images.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {review.images.map((img, i) => (
                          <div
                            key={i}
                            className="relative w-16 h-16 rounded-lg overflow-hidden"
                          >
                            <Image
                              src={img}
                              alt="Review image"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span>
                        {review.skinType.replace("-", " ")} skin ·{" "}
                        {review.concern.replace("-", " ")}
                      </span>
                      <button className="ml-auto hover:text-gray-600">
                        👍 {review.helpful} helpful
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-2xl text-gray-900">
              Complete Your Routine
            </h2>
            <Link
              href="/products"
              className="text-sm font-semibold text-sage-600 flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
