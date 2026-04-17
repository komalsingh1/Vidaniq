"use client";
import { useState } from "react";
import { X, Leaf, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useSkinProfileStore } from "@/lib/store";
import { SkinType, SkinConcern, SkinProfile } from "@/lib/types";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data/products";

const SKIN_TYPES: { value: SkinType; label: string; desc: string; icon: string }[] = [
  { value: "oily", label: "Oily", desc: "Shiny skin, visible pores, prone to breakouts", icon: "💧" },
  { value: "dry", label: "Dry", desc: "Tight, flaky, rough texture", icon: "🏜️" },
  { value: "combination", label: "Combination", desc: "Oily T-zone, dry cheeks", icon: "☯️" },
  { value: "sensitive", label: "Sensitive", desc: "Easily irritated, redness, reactive", icon: "🌸" },
  { value: "not-sure", label: "Not Sure", desc: "I'll let you help me find out", icon: "🤔" },
];

const CONCERNS: { value: SkinConcern; label: string; icon: string }[] = [
  { value: "acne", label: "Acne & Breakouts", icon: "🔴" },
  { value: "pigmentation", label: "Pigmentation", icon: "🟤" },
  { value: "dullness", label: "Dullness", icon: "✨" },
  { value: "dryness", label: "Dryness", icon: "💧" },
  { value: "fine-lines", label: "Fine Lines", icon: "〰️" },
  { value: "uneven-texture", label: "Uneven Texture", icon: "🌊" },
];

export function SkinQuizModal() {
  const { quizOpen, setQuizOpen, setProfile } = useSkinProfileStore();
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState<SkinType | null>(null);
  const [concerns, setConcerns] = useState<SkinConcern[]>([]);
  const [isSensitive, setIsSensitive] = useState<boolean | null>(null);
  const [routinePreference, setRoutinePreference] = useState<"minimal" | "detailed" | null>(null);

  if (!quizOpen) return null;

  const toggleConcern = (c: SkinConcern) => {
    setConcerns((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const handleFinish = () => {
    const profile: SkinProfile = {
      skinType: skinType,
      concerns,
      isSensitive: isSensitive ?? false,
      routinePreference: routinePreference ?? "minimal",
      completedAt: new Date().toISOString(),
    };
    setProfile(profile);
    setStep(5);
  };

  const recommendedProducts = products.filter((p) => {
    if (!skinType) return p.isBestseller;
    return (
      (skinType === "not-sure" || p.suitableFor.includes(skinType)) &&
      (concerns.length === 0 || p.concern.some((c) => concerns.includes(c)))
    );
  }).slice(0, 3);

  const close = () => {
    setQuizOpen(false);
    setStep(1);
    setSkinType(null);
    setConcerns([]);
    setIsSensitive(null);
    setRoutinePreference(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 z-10"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>

        {/* Progress bar */}
        {step < 5 && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 rounded-t-3xl overflow-hidden">
            <div
              className="h-full bg-sage-500 transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        )}

        <div className="p-8 pt-10">
          {/* Step 1: Welcome */}
          {step === 1 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-sage-600" />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-gray-900 mb-2">
                  Build your personalized<br />skincare ritual
                </h2>
                <p className="text-gray-500 text-sm">
                  Answer 4 quick questions and we'll recommend the perfect
                  routine for your unique skin — in 2 minutes.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-sage-600 text-white font-semibold py-3.5 rounded-xl hover:bg-sage-700 transition-colors flex items-center justify-center gap-2"
                >
                  Start My Skin Quiz <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={close}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Skip for now
                </button>
              </div>
              <div className="flex items-center justify-center gap-6 pt-2">
                {["🔬 Science-backed", "🌿 100% Natural", "⚡ 2 min quiz"].map((t) => (
                  <span key={t} className="text-xs text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Skin Type */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <p className="text-xs text-sage-600 font-semibold uppercase tracking-wider mb-1">
                  Step 1 of 4
                </p>
                <h2 className="font-serif text-2xl text-gray-900">
                  What is your skin type?
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {SKIN_TYPES.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSkinType(type.value)}
                    className={cn(
                      "flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all",
                      skinType === type.value
                        ? "border-sage-500 bg-sage-50"
                        : "border-gray-100 hover:border-sage-200 hover:bg-gray-50"
                    )}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {type.label}
                      </p>
                      <p className="text-xs text-gray-500">{type.desc}</p>
                    </div>
                    {skinType === type.value && (
                      <div className="ml-auto w-5 h-5 bg-sage-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <NavButtons
                step={step}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
                canNext={skinType !== null}
              />
            </div>
          )}

          {/* Step 3: Concerns */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <p className="text-xs text-sage-600 font-semibold uppercase tracking-wider mb-1">
                  Step 2 of 4
                </p>
                <h2 className="font-serif text-2xl text-gray-900">
                  What are your main concerns?
                </h2>
                <p className="text-sm text-gray-500 mt-1">Select all that apply</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {CONCERNS.map((concern) => (
                  <button
                    key={concern.value}
                    onClick={() => toggleConcern(concern.value)}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all",
                      concerns.includes(concern.value)
                        ? "border-sage-500 bg-sage-50"
                        : "border-gray-100 hover:border-sage-200 hover:bg-gray-50"
                    )}
                  >
                    <span className="text-lg">{concern.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {concern.label}
                    </span>
                  </button>
                ))}
              </div>
              <NavButtons
                step={step}
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
                canNext={concerns.length > 0}
              />
            </div>
          )}

          {/* Step 4: Sensitivity + Routine */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <p className="text-xs text-sage-600 font-semibold uppercase tracking-wider mb-1">
                  Step 3 of 4
                </p>
                <h2 className="font-serif text-2xl text-gray-900">
                  A couple more things
                </h2>
              </div>

              <div>
                <p className="font-semibold text-sm text-gray-800 mb-2">
                  Is your skin sensitive?
                </p>
                <div className="flex gap-2">
                  {[
                    { val: true, label: "Yes, very" },
                    { val: false, label: "Not really" },
                  ].map(({ val, label }) => (
                    <button
                      key={label}
                      onClick={() => setIsSensitive(val)}
                      className={cn(
                        "flex-1 py-2.5 rounded-xl border-2 text-sm font-medium transition-all",
                        isSensitive === val
                          ? "border-sage-500 bg-sage-50 text-sage-700"
                          : "border-gray-100 text-gray-600 hover:border-sage-200"
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm text-gray-800 mb-2">
                  Preferred routine style
                </p>
                <div className="flex gap-2">
                  {[
                    { val: "minimal" as const, label: "Minimal", desc: "2–3 steps" },
                    { val: "detailed" as const, label: "Detailed", desc: "4–6 steps" },
                  ].map(({ val, label, desc }) => (
                    <button
                      key={val}
                      onClick={() => setRoutinePreference(val)}
                      className={cn(
                        "flex-1 py-2.5 px-3 rounded-xl border-2 text-sm font-medium transition-all text-left",
                        routinePreference === val
                          ? "border-sage-500 bg-sage-50 text-sage-700"
                          : "border-gray-100 text-gray-600 hover:border-sage-200"
                      )}
                    >
                      <div className="font-semibold">{label}</div>
                      <div className="text-xs text-gray-400">{desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <NavButtons
                step={step}
                onBack={() => setStep(3)}
                onNext={handleFinish}
                canNext={isSensitive !== null && routinePreference !== null}
                nextLabel="See My Results"
              />
            </div>
          )}

          {/* Step 5: Results */}
          {step === 5 && (
            <div className="space-y-5">
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-sage-600" />
                </div>
                <h2 className="font-serif text-2xl text-gray-900 mb-1">
                  Your Skin Profile is Ready!
                </h2>
                <p className="text-sm text-gray-500">
                  Based on your answers, here's what we recommend
                </p>
              </div>

              {/* Profile summary */}
              <div className="bg-sage-50 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-sage-700">Skin Type:</span>
                  <span className="text-gray-700 capitalize">
                    {skinType?.replace("-", " ") || "General"}
                  </span>
                </div>
                {concerns.length > 0 && (
                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-semibold text-sage-700 shrink-0">Concerns:</span>
                    <span className="text-gray-700">
                      {concerns.map((c) => c.replace("-", " ")).join(", ")}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-sage-700">Routine:</span>
                  <span className="text-gray-700 capitalize">{routinePreference}</span>
                </div>
              </div>

              {/* Recommended products */}
              <div>
                <p className="font-semibold text-sm text-gray-800 mb-3">
                  Recommended for you:
                </p>
                <div className="space-y-2">
                  {recommendedProducts.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 p-2.5 bg-white border border-gray-100 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-cream-50 shrink-0 relative">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                          {p.name}
                        </p>
                        <p className="text-xs text-gray-500">₹{p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href="/products"
                  onClick={close}
                  className="w-full bg-sage-600 text-white font-semibold py-3.5 rounded-xl hover:bg-sage-700 transition-colors text-center text-sm"
                >
                  Shop My Routine
                </Link>
                <Link
                  href="/products"
                  onClick={close}
                  className="w-full border-2 border-sage-200 text-sage-700 font-semibold py-3 rounded-xl hover:bg-sage-50 transition-colors text-center text-sm"
                >
                  Explore All Products
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NavButtons({
  step,
  onBack,
  onNext,
  canNext,
  nextLabel = "Continue",
}: {
  step: number;
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="flex gap-3 pt-2">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Back
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className={cn(
          "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all",
          canNext
            ? "bg-sage-600 text-white hover:bg-sage-700"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        )}
      >
        {nextLabel} <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
