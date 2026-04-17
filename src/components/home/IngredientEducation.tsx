"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ingredients = [
  {
    name: "Vitamin C",
    icon: "🍊",
    purpose: "Brightening & Antioxidant",
    description:
      "Neutralizes free radicals, brightens skin tone, and significantly reduces dark spots and hyperpigmentation. Our stabilized 15% formula delivers maximum potency.",
    source: "Pharmaceutical grade",
    color: "bg-amber-50 border-amber-200",
    tag: "bg-amber-100 text-amber-700",
  },
  {
    name: "Aloe Vera",
    icon: "🪴",
    purpose: "Soothing & Hydration",
    description:
      "Contains 75+ active compounds. Accelerates wound healing, soothes inflammation, and provides deep hydration without clogging pores. Our 98% pure Aloe is cold-processed.",
    source: "Certified organic, Rajasthan",
    color: "bg-green-50 border-green-200",
    tag: "bg-green-100 text-green-700",
  },
  {
    name: "Saffron",
    icon: "🌸",
    purpose: "Glow & Even Skin Tone",
    description:
      "Hand-picked from Pampore, Kashmir — the world's finest saffron. Rich in crocin and crocetin which inhibit melanin synthesis and impart a golden, luminous glow.",
    source: "Hand-picked, Kashmir",
    color: "bg-yellow-50 border-yellow-200",
    tag: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Hyaluronic Acid",
    icon: "💧",
    purpose: "Deep Hydration",
    description:
      "Holds up to 1000x its weight in water. Our triple-weight formula works at all skin depths — surface, mid-layer, and deep — for all-day hydration and visible plumping.",
    source: "Plant-derived, vegan",
    color: "bg-blue-50 border-blue-200",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    name: "Neem",
    icon: "🌿",
    purpose: "Antibacterial & Acne",
    description:
      "A cornerstone of Ayurveda for millennia. Contains azadirachtin, nimbin, and nimbidin — powerful antibacterial and antifungal agents that fight acne without stripping skin.",
    source: "Wild-harvested, Kerala",
    color: "bg-emerald-50 border-emerald-200",
    tag: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Bakuchiol",
    icon: "🌻",
    purpose: "Anti-Aging (Natural Retinol)",
    description:
      "The plant-based retinol alternative. Clinically proven to reduce fine lines and wrinkles, improve firmness, and even skin tone — without the irritation of traditional retinol.",
    source: "Babchi plant, India",
    color: "bg-rose-50 border-rose-200",
    tag: "bg-rose-100 text-rose-700",
  },
];

export function IngredientEducation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ingredients[activeIndex];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="section-title">Ingredient Transparency</h2>
          <p className="section-subtitle mt-2">
            We believe you deserve to know exactly what goes on your skin and
            why
          </p>
        </div>
        <Link
          href="/ingredients"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-sage-600 hover:text-sage-800 transition-colors"
        >
          Full Glossary <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Ingredient pills */}
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ing, i) => (
            <button
              key={ing.name}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all ${
                i === activeIndex
                  ? `${ing.color} border-current`
                  : "bg-white border-gray-100 text-gray-600 hover:border-gray-200"
              }`}
            >
              <span>{ing.icon}</span>
              {ing.name}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div
          className={`rounded-2xl border-2 p-6 transition-all duration-300 ${active.color}`}
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">{active.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  {active.name}
                </h3>
                <span
                  className={`badge text-xs ${active.tag}`}
                >
                  {active.purpose}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {active.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="font-semibold">📍 Source:</span>
                <span>{active.source}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
