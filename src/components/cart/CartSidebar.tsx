"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, Trash2, ChevronRight, Gift } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { products } from "@/lib/data/products";

const FREE_SHIPPING_THRESHOLD = 799;

export function CartSidebar() {
  const [open, setOpen] = useState(false);
  const { items, removeItem, updateQuantity, getSubtotal, getTotal, discount, coupon } =
    useCartStore();
  const subtotal = getSubtotal();
  const total = getTotal();
  const discountAmt = subtotal - total;

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openCart", handler);
    return () => window.removeEventListener("openCart", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Upsell: products not in cart
  const cartIds = items.map((i) => i.product.id);
  const upsells = products
    .filter((p) => !cartIds.includes(p.id))
    .slice(0, 2);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-sage-700" />
            <h2 className="font-semibold text-gray-900">
              Your Cart ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Shipping progress */}
        <div className="px-4 py-3 bg-cream-50 border-b border-cream-100">
          {remaining > 0 ? (
            <p className="text-xs text-gray-600 mb-1.5">
              Add <span className="font-semibold text-sage-700">{formatPrice(remaining)}</span> more
              for <span className="font-semibold text-sage-700">FREE shipping!</span>
            </p>
          ) : (
            <p className="text-xs text-sage-700 font-semibold mb-1.5">
              🎉 You've unlocked free shipping!
            </p>
          )}
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-sage-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-cream-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Your cart is empty</p>
                <p className="text-sm text-gray-500">
                  Discover products tailored for your skin
                </p>
              </div>
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="btn-primary text-sm"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <div className="relative w-18 h-18 w-20 h-20 rounded-xl overflow-hidden bg-cream-50 shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{product.volume}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">
                          {formatPrice(product.price * quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell */}
              {upsells.length > 0 && (
                <div className="border border-dashed border-sage-200 rounded-xl p-3 bg-sage-50">
                  <p className="text-xs font-semibold text-sage-700 mb-2 flex items-center gap-1">
                    <Gift className="w-3.5 h-3.5" /> Complete your routine
                  </p>
                  <div className="space-y-2">
                    {upsells.map((p) => (
                      <div key={p.id} className="flex items-center gap-2">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shrink-0">
                          <Image
                            src={p.images[0]}
                            alt={p.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-700 line-clamp-1">
                            {p.name}
                          </p>
                          <p className="text-xs text-gray-500">{formatPrice(p.price)}</p>
                        </div>
                        <button
                          onClick={() => useCartStore.getState().addItem(p)}
                          className="text-xs bg-sage-600 text-white px-2.5 py-1 rounded-lg hover:bg-sage-700 transition-colors shrink-0"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-4 space-y-3">
            {coupon && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Coupon: <span className="font-semibold text-sage-600">{coupon}</span>
                </span>
                <span className="text-green-600 font-semibold">
                  -{formatPrice(discountAmt)}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900">Total</span>
              <div className="text-right">
                <span className="font-bold text-lg text-gray-900">
                  {formatPrice(total)}
                </span>
                {remaining <= 0 && (
                  <p className="text-xs text-sage-600 font-medium">+ Free Shipping</p>
                )}
              </div>
            </div>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="w-full bg-sage-600 text-white font-semibold py-3.5 rounded-xl text-center flex items-center justify-center gap-2 hover:bg-sage-700 transition-colors"
            >
              Checkout <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
