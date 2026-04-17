"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Tag,
  ChevronRight,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

const FREE_SHIPPING = 799;

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    getSubtotal,
    getTotal,
    discount,
    coupon,
    applyCoupon,
    removeCoupon,
  } = useCartStore();
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");

  const subtotal = getSubtotal();
  const total = getTotal();
  const discountAmt = subtotal - total;
  const shipping = subtotal >= FREE_SHIPPING ? 0 : 99;
  const finalTotal = total + shipping;

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    const ok = applyCoupon(couponInput);
    if (ok) {
      setCouponSuccess(`Coupon applied! You saved ${discount}%`);
      setCouponError("");
    } else {
      setCouponError("Invalid or expired coupon code");
      setCouponSuccess("");
    }
  };

  const upsells = products
    .filter((p) => !items.find((i) => i.product.id === p.id))
    .slice(0, 4);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-20 px-4">
        <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center">
          <ShoppingBag className="w-10 h-10 text-cream-400" />
        </div>
        <div className="text-center">
          <h2 className="font-serif text-2xl text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500">
            Looks like you haven't added anything yet.
          </p>
        </div>
        <Link href="/products" className="btn-primary">
          Explore Products <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Free shipping progress */}
          <div className="bg-sage-50 rounded-2xl p-4">
            {subtotal >= FREE_SHIPPING ? (
              <p className="text-sm font-semibold text-sage-700 flex items-center gap-2">
                <Truck className="w-4 h-4" /> 🎉 You've unlocked free shipping!
              </p>
            ) : (
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  Add{" "}
                  <span className="font-semibold text-sage-700">
                    {formatPrice(FREE_SHIPPING - subtotal)}
                  </span>{" "}
                  more for FREE shipping
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-sage-500 h-2 rounded-full transition-all"
                    style={{
                      width: `${Math.min(100, (subtotal / FREE_SHIPPING) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items */}
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="card p-4 flex gap-4 items-start"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-cream-50 shrink-0">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="flex-1 min-w-0">
                <Link href={`/products/${product.slug}`}>
                  <p className="font-semibold text-gray-900 hover:text-sage-700 transition-colors">
                    {product.name}
                  </p>
                </Link>
                <p className="text-xs text-gray-400 mt-0.5">{product.volume}</p>

                <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                  {/* Quantity */}
                  <div className="flex items-center gap-2 border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-semibold w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">
                      {formatPrice(product.price * quantity)}
                    </span>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coupon */}
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-sage-600" />
              <span className="font-semibold text-sm text-gray-900">
                Apply Coupon
              </span>
            </div>

            {coupon ? (
              <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-2.5">
                <div>
                  <span className="font-semibold text-green-700 text-sm">
                    {coupon}
                  </span>
                  <span className="text-green-600 text-xs ml-2">
                    -{discount}% applied
                  </span>
                </div>
                <button
                  onClick={removeCoupon}
                  className="text-xs text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => {
                      setCouponInput(e.target.value);
                      setCouponError("");
                      setCouponSuccess("");
                    }}
                    placeholder="Enter coupon code (try GLOW20)"
                    className="input flex-1 text-sm"
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleApplyCoupon()
                    }
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-sage-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-sage-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponError && (
                  <p className="text-red-500 text-xs mt-1">{couponError}</p>
                )}
                {couponSuccess && (
                  <p className="text-green-600 text-xs mt-1">{couponSuccess}</p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  Try: FIRSTORDER, GLOW20, SKIN15
                </p>
              </>
            )}
          </div>
        </div>

        {/* Order summary */}
        <div className="space-y-4">
          <div className="card p-5 space-y-4">
            <h3 className="font-semibold text-gray-900">Order Summary</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.length} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discountAmt > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Coupon Discount ({discount}%)</span>
                  <span>-{formatPrice(discountAmt)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
              </div>
              <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-gray-900 text-base">
                <span>Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-sage-600 text-white font-semibold py-4 rounded-xl text-center flex items-center justify-center gap-2 hover:bg-sage-700 transition-colors"
            >
              Proceed to Checkout <ChevronRight className="w-4 h-4" />
            </Link>

            <div className="space-y-2">
              {[
                { icon: Shield, text: "Secure 256-bit SSL checkout" },
                { icon: Truck, text: "Delivered in 3–5 business days" },
                { icon: RotateCcw, text: "Easy 15-day return policy" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-xs text-gray-500"
                >
                  <Icon className="w-3.5 h-3.5 text-sage-500" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upsells */}
      {upsells.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl text-gray-900 mb-6">
            Add to Complete Your Routine
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {upsells.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
