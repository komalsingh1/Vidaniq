import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, FlaskConical, Heart } from "lucide-react";

export function BrandStory() {
  return (
    <section className="py-16 bg-sage-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative grid grid-cols-2 gap-3 order-last lg:order-first">
            <div className="relative h-60 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
                alt="Organic farming"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-60 mt-8 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80"
                alt="Lab testing"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-sage-700 rounded-2xl px-5 py-3 text-center shadow-xl">
              <p className="font-bold text-lg">Est. 2021</p>
              <p className="text-sage-300 text-xs">Rooted in Nature</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-sage-700 text-sage-200 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Leaf className="w-3.5 h-3.5" />
              Our Story
            </div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Born from the belief that nature holds the answers your skin needs
            </h2>
            <p className="text-sage-200 leading-relaxed">
              Vidaniq was founded by a team of dermatologists and Ayurvedic
              scholars who saw a gap in the market: products that were truly
              natural, properly formulated, and genuinely effective. We spend
              years sourcing the finest ingredients from certified organic farms
              across India, testing every formula rigorously before it reaches
              your skin.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Leaf, title: "Ethical Sourcing", desc: "Direct from organic farms" },
                { icon: FlaskConical, title: "Science Backed", desc: "Clinically tested formulas" },
                { icon: Heart, title: "Clean Beauty", desc: "Zero harmful chemicals" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-10 h-10 bg-sage-700 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-sage-200" />
                  </div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-sage-400 text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sage-300 hover:text-white font-semibold text-sm transition-colors"
            >
              Read Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
