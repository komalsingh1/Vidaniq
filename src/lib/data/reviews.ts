import { Review } from "@/lib/types";

export const reviews: Review[] = [
  {
    id: "r001",
    productId: "p002",
    author: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    rating: 5,
    title: "Finally found my holy grail brightening serum!",
    body: "I've been struggling with dark spots from old acne scars for years. After using this Vitamin C serum for 6 weeks, the difference is unbelievable. My colleagues have started asking what I've changed in my routine. The texture is lightweight and absorbs fast — no sticky residue. Highly recommend!",
    concern: "pigmentation",
    skinType: "oily",
    date: "2024-01-15",
    helpful: 234,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    ],
  },
  {
    id: "r002",
    productId: "p002",
    author: "Ananya Reddy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    rating: 5,
    title: "Genuine glow in 4 weeks",
    body: "I was skeptical at first but the saffron and Vitamin C combo is magical. My skin looks brighter and the dullness I had from stress is gone. The packaging is also eco-friendly which I love.",
    concern: "dullness",
    skinType: "combination",
    date: "2024-02-03",
    helpful: 187,
    verified: true,
  },
  {
    id: "r003",
    productId: "p001",
    author: "Rohit Verma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    rating: 4,
    title: "Great for oily skin, slight tightness initially",
    body: "The neem smell takes some getting used to but the results are fantastic. My T-zone stays matte much longer now. I had some initial tightness but that went away after a week. Much better than chemical-heavy cleansers I've tried.",
    concern: "acne",
    skinType: "oily",
    date: "2024-01-28",
    helpful: 156,
    verified: true,
  },
  {
    id: "r004",
    productId: "p003",
    author: "Meera Joshi",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
    rating: 5,
    title: "My dry skin finally feels normal!",
    body: "Living in Delhi, my skin was extremely dry in winters. This moisturizer changed everything. It's not heavy or greasy but keeps my skin hydrated all day. No more tight, flaky feeling by midday!",
    concern: "dryness",
    skinType: "dry",
    date: "2024-02-10",
    helpful: 201,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
    ],
  },
  {
    id: "r005",
    productId: "p005",
    author: "Kavitha Nair",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&q=80",
    rating: 5,
    title: "Best anti-aging product I've used",
    body: "I'm 42 and started using this rosehip elixir 3 months ago. The fine lines around my eyes and mouth are visibly reduced. My skin feels firmer and has a natural glow. The best part is it doesn't irritate my sensitive skin like retinol used to.",
    concern: "fine-lines",
    skinType: "sensitive",
    date: "2024-02-18",
    helpful: 312,
    verified: true,
  },
  {
    id: "r006",
    productId: "p006",
    author: "Sunita Patel",
    avatar: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=80&q=80",
    rating: 4,
    title: "Instant glow mask — smells divine",
    body: "This mask has become my Sunday ritual. The saffron fragrance is luxurious and after washing off, my skin literally glows. I've been gifting this to all my friends. The only thing — it stains the towel a little from the turmeric.",
    concern: "dullness",
    skinType: "combination",
    date: "2024-01-20",
    helpful: 143,
    verified: true,
  },
];

export const getReviewsByProduct = (productId: string) =>
  reviews.filter((r) => r.productId === productId);

export const getAverageRating = (productId: string) => {
  const productReviews = getReviewsByProduct(productId);
  if (productReviews.length === 0) return 0;
  return (
    productReviews.reduce((sum, r) => sum + r.rating, 0) /
    productReviews.length
  );
};
