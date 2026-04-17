"use client";
import { Leaf, ArrowRight } from "lucide-react";
import { useSkinProfileStore } from "@/lib/store";

export function QuizBanner() {
  const { profile, setQuizOpen } = useSkinProfileStore();

  if (profile) return null;

  return (
    <section className="bg-gradient-to-r from-sage-700 to-sage-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 bg-sage-500 rounded-2xl flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Not sure where to start?
              </h3>
              <p className="text-sage-200 text-sm">
                Take our 2-minute quiz and get a routine tailored for your skin
              </p>
            </div>
          </div>
          <button
            onClick={() => setQuizOpen(true)}
            className="shrink-0 bg-white text-sage-700 font-semibold px-6 py-3 rounded-full hover:bg-cream-50 transition-colors flex items-center gap-2 text-sm"
          >
            Take Skin Quiz <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
