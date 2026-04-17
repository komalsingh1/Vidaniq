"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Star } from "lucide-react";
import { useSkinProfileStore } from "@/lib/store";

export function HeroSection() {
  const { profile, setQuizOpen } = useSkinProfileStore();

  const hasProfile = profile && profile.skinType;
  const concern = hasProfile ? profile.concerns[0] : null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-sage-50 to-cream-100 min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(82, 127, 84, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(208, 160, 76, 0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            <Leaf className="w-3.5 h-3.5" />
            100% Natural · Dermatologist Tested
          </div>

          {hasProfile ? (
            <>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Your{" "}
                <span className="text-sage-600">
                  {concern ? concern.replace("-", " ") : "skin"} repair
                </span>{" "}
                ritual is ready
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Based on your {profile.skinType} skin profile, we've curated
                the perfect routine with our most-loved botanicals and actives.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Skincare rooted{" "}
                <span className="italic text-sage-600">in nature,</span>
                <br />
                proven by science
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Ancient Ayurvedic botanicals meet modern dermatology. 100%
                natural actives. Zero compromise on efficacy.
              </p>
            </>
          )}

          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary text-sm px-6 py-3.5">
              Shop Bestsellers <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setQuizOpen(true)}
              className="btn-secondary text-sm px-6 py-3.5"
            >
              <Leaf className="w-4 h-4" /> Take Skin Quiz
            </button>
          </div>

          {/* Social proof mini */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&q=80",
                "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full overflow-hidden border-2 border-white relative"
                >
                  <Image src={src} alt="Customer" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">50,000+</span>{" "}
                happy customers
              </p>
            </div>
          </div>
        </div>

        {/* Hero image collage */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80"
                  alt="Vitamin C Serum"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80"
                  alt="Face care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80"
                  alt="Natural ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80"
                  alt="Moisturizer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[200px]">
            <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-lg">🌿</span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">
                0% Harmful Chemicals
              </p>
              <p className="text-xs text-gray-500">No parabens · No sulfates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
