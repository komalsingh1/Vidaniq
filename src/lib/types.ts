export type SkinType = "oily" | "dry" | "combination" | "sensitive" | "not-sure";
export type SkinConcern =
  | "acne"
  | "pigmentation"
  | "dullness"
  | "dryness"
  | "fine-lines"
  | "uneven-texture";

export interface SkinProfile {
  skinType: SkinType | null;
  concerns: SkinConcern[];
  isSensitive: boolean;
  routinePreference: "minimal" | "detailed";
  completedAt: string | null;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  concern: SkinConcern[];
  suitableFor: SkinType[];
  keyBenefit: string;
  ingredients: Ingredient[];
  howToUse: string[];
  faq: FAQ[];
  isBestseller?: boolean;
  isNew?: boolean;
  badge?: string;
  volume: string;
  inStock: boolean;
}

export interface Ingredient {
  name: string;
  benefit: string;
  source: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  avatar: string;
  rating: number;
  title: string;
  body: string;
  concern: SkinConcern;
  skinType: SkinType;
  date: string;
  helpful: number;
  verified: boolean;
  images?: string[];
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  products: string[];
  price: number;
  originalPrice: number;
  image: string;
  concern: SkinConcern;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  image: string;
  author: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
