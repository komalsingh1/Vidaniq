"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Zap } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import { useCartStore } from "@/lib/store";
import { useSkinProfileStore } from "@/lib/store";
import { Product } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const profile = useSkinProfileStore((s) => s.profile);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const isRecommended =
    profile &&
    profile.skinType &&
    product.suitableFor.includes(profile.skinType) &&
    product.concern.some((c) => profile.concerns.includes(c));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
    window.dispatchEvent(new CustomEvent("openCart"));
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group card flex flex-col hover:shadow-md transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && (
            <span className="badge bg-sage-600 text-white text-[10px]">
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="badge bg-amber-500 text-white text-[10px]">
              {product.discount}% OFF
            </span>
          )}
          {isRecommended && (
            <span className="badge bg-cream-200 text-cream-800 text-[10px]">
              ✨ For You
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setWishlisted((w) => !w);
          }}
          className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
        >
          <Heart
            className={cn(
              "w-4 h-4 transition-colors",
              wishlisted
                ? "text-red-500 fill-red-500"
                : "text-gray-600"
            )}
          />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className={cn(
              "w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors",
              added
                ? "bg-sage-700 text-white"
                : "bg-sage-600 text-white hover:bg-sage-700"
            )}
          >
            {added ? (
              <>
                <Zap className="w-4 h-4" /> Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <p className="text-xs text-sage-600 font-medium uppercase tracking-wider">
          {product.keyBenefit}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mt-0.5">
          <StarRating rating={product.rating} size="sm" />
          <span className="text-xs text-gray-400">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center gap-2 mt-auto pt-1">
          <span className="font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
