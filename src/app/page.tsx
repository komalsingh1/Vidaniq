import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ShopByConcern } from "@/components/home/ShopByConcern";
import { BestsellersSection } from "@/components/home/BestsellersSection";
import { IngredientEducation } from "@/components/home/IngredientEducation";
import { RoutineBundles } from "@/components/home/RoutineBundles";
import { SocialProof } from "@/components/home/SocialProof";
import { BrandStory } from "@/components/home/BrandStory";
import { BlogSection } from "@/components/home/BlogSection";
import { StickyCTA } from "@/components/home/StickyCTA";
import { QuizBanner } from "@/components/home/QuizBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <QuizBanner />
      <ShopByConcern />
      <BestsellersSection />
      <IngredientEducation />
      <RoutineBundles />
      <SocialProof />
      <BrandStory />
      <BlogSection />
      <StickyCTA />
    </>
  );
}
