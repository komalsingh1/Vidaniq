"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf, ShoppingBag, X } from "lucide-react";
import { useSkinProfileStore } from "@/lib/store";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { setQuizOpen } = useSkinProfileStore();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
      <div className="bg-white border-t border-gray-100 shadow-2xl p-4">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-gray-400"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => setQuizOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-sage-600 text-sage-700 font-semibold py-3 rounded-xl text-sm"
          >
            <Leaf className="w-4 h-4" /> Skin Quiz
          </button>
          <Link
            href="/products?sort=bestselling"
            className="flex-1 flex items-center justify-center gap-2 bg-sage-600 text-white font-semibold py-3 rounded-xl text-sm"
          >
            <ShoppingBag className="w-4 h-4" /> Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
