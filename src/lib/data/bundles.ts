import { Bundle } from "@/lib/types";

export const bundles: Bundle[] = [
  {
    id: "b001",
    name: "Acne Repair Kit",
    description:
      "Complete routine to clear breakouts, unclog pores, and prevent future acne — in one curated set.",
    products: ["p001", "p004", "p003"],
    price: 1299,
    originalPrice: 1797,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    concern: "acne",
  },
  {
    id: "b002",
    name: "Bridal Glow Ritual",
    description:
      "Achieve radiant, camera-ready skin with our most-loved brightening and hydration heroes.",
    products: ["p002", "p006", "p003"],
    price: 1699,
    originalPrice: 2247,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    concern: "dullness",
  },
  {
    id: "b003",
    name: "Hydration Essentials Set",
    description:
      "For chronically dry or dehydrated skin — restore softness and suppleness from the inside out.",
    products: ["p008", "p003", "p005"],
    price: 1399,
    originalPrice: 1897,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
    concern: "dryness",
  },
  {
    id: "b004",
    name: "Anti-Aging Essentials",
    description:
      "Turn back time with our most powerful botanical actives for firmness, radiance, and reduced fine lines.",
    products: ["p005", "p002", "p003"],
    price: 1999,
    originalPrice: 2647,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    concern: "fine-lines",
  },
];
