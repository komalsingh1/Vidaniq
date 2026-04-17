import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p001",
    slug: "neem-tulsi-face-wash",
    name: "Neem & Tulsi Purifying Face Wash",
    tagline: "Deep cleanse with ancient botanicals",
    description:
      "Formulated with wild-harvested Neem and Tulsi sourced from organic farms in Kerala, this gentle yet powerful face wash removes excess oil, unclogs pores, and fights acne-causing bacteria without stripping your skin's natural moisture barrier.",
    price: 449,
    originalPrice: 599,
    discount: 25,
    rating: 4.7,
    reviewCount: 1284,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
      "https://images.unsplash.com/photo-1631390919499-f6a929cbfc43?w=600&q=80",
    ],
    category: "cleanser",
    concern: ["acne", "uneven-texture"],
    suitableFor: ["oily", "combination"],
    keyBenefit: "Controls excess oil & fights acne",
    volume: "150ml",
    isBestseller: true,
    inStock: true,
    badge: "Bestseller",
    ingredients: [
      {
        name: "Neem Extract",
        benefit: "Antibacterial & antifungal — fights acne-causing bacteria",
        source: "Wild-harvested, Kerala forests",
        icon: "🌿",
      },
      {
        name: "Holy Basil (Tulsi)",
        benefit: "Anti-inflammatory — reduces redness and swelling",
        source: "Organic farms, Tamil Nadu",
        icon: "🌱",
      },
      {
        name: "Aloe Vera",
        benefit: "Hydrating & soothing — prevents over-drying",
        source: "Certified organic, Rajasthan",
        icon: "🪴",
      },
      {
        name: "Tea Tree Oil",
        benefit: "Antimicrobial — deep-pore cleansing",
        source: "Cold-pressed, Australia",
        icon: "🌲",
      },
    ],
    howToUse: [
      "Wet your face with lukewarm water",
      "Take a pea-sized amount and lather between palms",
      "Massage gently onto face in circular motions for 60 seconds",
      "Rinse thoroughly and pat dry",
      "Use twice daily — morning and evening",
    ],
    faq: [
      {
        question: "Is this suitable for sensitive skin?",
        answer:
          "While formulated for oily/combination skin, some sensitive skin types tolerate it well. We recommend patch testing first.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Most users notice reduced oiliness within 1 week and improved acne within 4–6 weeks of consistent use.",
      },
      {
        question: "Does it contain sulfates or parabens?",
        answer:
          "No. Vidaniq is 100% free from sulfates, parabens, mineral oils, and artificial fragrances.",
      },
    ],
  },
  {
    id: "p002",
    slug: "vitamin-c-brightening-serum",
    name: "Vitamin C Brightening Serum",
    tagline: "Illuminate your skin from within",
    description:
      "A potent 15% stabilized Vitamin C serum enriched with Saffron extract and Licorice root for visible brightening, pigmentation reduction, and a lit-from-within glow. Lightweight, fast-absorbing, and suitable for daily use.",
    price: 799,
    originalPrice: 1099,
    discount: 27,
    rating: 4.8,
    reviewCount: 2156,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    ],
    category: "serum",
    concern: ["pigmentation", "dullness"],
    suitableFor: ["oily", "combination", "dry", "sensitive"],
    keyBenefit: "Fades dark spots & boosts radiance",
    volume: "30ml",
    isBestseller: true,
    inStock: true,
    badge: "#1 Rated",
    ingredients: [
      {
        name: "15% Vitamin C (Ascorbic Acid)",
        benefit: "Brightens skin tone & fades hyperpigmentation",
        source: "Pharmaceutical grade, stabilized",
        icon: "🍊",
      },
      {
        name: "Saffron Extract",
        benefit: "Enhances glow & evens skin tone",
        source: "Hand-picked, Kashmir",
        icon: "🌸",
      },
      {
        name: "Licorice Root",
        benefit: "Reduces dark spots & inhibits melanin production",
        source: "Organic, Himachal Pradesh",
        icon: "🌾",
      },
      {
        name: "Hyaluronic Acid",
        benefit: "Deep hydration — plumps and firms",
        source: "Plant-derived, vegan",
        icon: "💧",
      },
    ],
    howToUse: [
      "Apply on cleansed, dry skin (AM routine recommended)",
      "Dispense 3–4 drops onto fingertips",
      "Gently press into face, neck, and décolletage",
      "Follow with moisturizer and SPF (daytime)",
      "Store in a cool, dark place to preserve potency",
    ],
    faq: [
      {
        question: "Can I use this with retinol?",
        answer:
          "We recommend using Vitamin C in the morning and retinol at night to avoid irritation.",
      },
      {
        question: "Will it irritate sensitive skin?",
        answer:
          "Start with every other day application. The stabilized form minimizes irritation risk.",
      },
      {
        question: "How long until pigmentation fades?",
        answer:
          "Visible improvement in 4–8 weeks. For deeper pigmentation, allow 12 weeks with consistent use.",
      },
    ],
  },
  {
    id: "p003",
    slug: "hyaluronic-moisture-cream",
    name: "Deep Hydration Moisture Cream",
    tagline: "48-hour moisture surge for plump, dewy skin",
    description:
      "Triple-weight Hyaluronic Acid combined with Shea Butter and Ceramides creates a moisture barrier that lasts all day. Lightweight, non-greasy texture that absorbs instantly and keeps skin plump and supple.",
    price: 649,
    originalPrice: 849,
    discount: 24,
    rating: 4.6,
    reviewCount: 987,
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80",
    ],
    category: "moisturizer",
    concern: ["dryness", "fine-lines"],
    suitableFor: ["dry", "sensitive", "combination"],
    keyBenefit: "48-hour hydration & plumping",
    volume: "50g",
    isBestseller: true,
    inStock: true,
    badge: "Dermat Tested",
    ingredients: [
      {
        name: "Triple Hyaluronic Acid",
        benefit: "Hydrates at 3 skin depths for lasting moisture",
        source: "Plant-derived, vegan",
        icon: "💧",
      },
      {
        name: "Shea Butter",
        benefit: "Nourishes and seals moisture in",
        source: "Fair-trade, Ghana",
        icon: "🧈",
      },
      {
        name: "Ceramides",
        benefit: "Rebuilds skin barrier and prevents moisture loss",
        source: "Plant-derived",
        icon: "🛡️",
      },
      {
        name: "Aloe Vera Gel",
        benefit: "Soothes and refreshes",
        source: "Organic, Rajasthan",
        icon: "🪴",
      },
    ],
    howToUse: [
      "Apply as the last step in your skincare routine",
      "Take a pea-sized amount and warm between fingers",
      "Press and smooth onto face and neck",
      "Use morning and night",
      "For extra hydration, layer over your serum while still damp",
    ],
    faq: [
      {
        question: "Will this clog my pores?",
        answer:
          "Non-comedogenic formula. Safe for acne-prone and oily skin types.",
      },
      {
        question: "Is it suitable for use under makeup?",
        answer:
          "Yes, the lightweight texture makes a perfect makeup primer base. Wait 2 minutes before applying makeup.",
      },
      {
        question: "Can I use it around my eyes?",
        answer:
          "Yes, the formula is gentle enough for the eye area. Avoid direct contact with eyes.",
      },
    ],
  },
  {
    id: "p004",
    slug: "salicylic-acid-acne-serum",
    name: "2% Salicylic Acid Acne Serum",
    tagline: "Target and eliminate acne at the source",
    description:
      "Clinically formulated with 2% Salicylic Acid and Willow Bark extract, this serum penetrates deep into pores to dissolve excess sebum, unclog pores, and prevent future breakouts. With continued use, skin texture becomes visibly smoother.",
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.5,
    reviewCount: 1432,
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
      "https://images.unsplash.com/photo-1631390919499-f6a929cbfc43?w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    ],
    category: "serum",
    concern: ["acne", "uneven-texture"],
    suitableFor: ["oily", "combination"],
    keyBenefit: "Clears pores & prevents breakouts",
    volume: "30ml",
    isNew: false,
    inStock: true,
    ingredients: [
      {
        name: "2% Salicylic Acid",
        benefit: "Exfoliates inside pores and dissolves sebum plugs",
        source: "Pharmaceutical grade",
        icon: "⚗️",
      },
      {
        name: "Willow Bark Extract",
        benefit: "Natural BHA — anti-inflammatory acne fighter",
        source: "Wild-sourced, Europe",
        icon: "🌿",
      },
      {
        name: "Green Tea Extract",
        benefit: "Antioxidant — reduces redness and soothes skin",
        source: "Organic, Darjeeling",
        icon: "🍵",
      },
      {
        name: "Zinc PCA",
        benefit: "Regulates sebum production",
        source: "Pharmaceutical grade",
        icon: "🔬",
      },
    ],
    howToUse: [
      "Use on cleansed, dry skin in the PM routine",
      "Apply 3–4 drops to problem areas or all over face",
      "Allow to fully absorb before moisturizer",
      "Start with 3x per week, increase to daily as skin adjusts",
      "Always follow with SPF in the morning",
    ],
    faq: [
      {
        question: "Can I use this every day?",
        answer:
          "Start with alternate days. Once skin adjusts (2–3 weeks), daily use is fine for most skin types.",
      },
      {
        question: "Safe to use while pregnant?",
        answer:
          "Consult your dermatologist before using any AHA/BHA product during pregnancy.",
      },
    ],
  },
  {
    id: "p005",
    slug: "rose-hip-anti-aging-serum",
    name: "Rosehip Anti-Aging Elixir",
    tagline: "Turn back time with nature's retinol",
    description:
      "Pure Rosehip Seed Oil combined with Bakuchiol (natural retinol alternative) and Peptides work synergistically to reduce fine lines, improve elasticity, and restore a youthful glow. 100% natural, suitable for sensitive skin.",
    price: 999,
    originalPrice: 1399,
    discount: 29,
    rating: 4.9,
    reviewCount: 876,
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    ],
    category: "serum",
    concern: ["fine-lines", "dullness"],
    suitableFor: ["dry", "sensitive", "combination"],
    keyBenefit: "Reduces fine lines & restores elasticity",
    volume: "30ml",
    isNew: true,
    inStock: true,
    badge: "New Launch",
    ingredients: [
      {
        name: "Rosehip Seed Oil",
        benefit: "Rich in Vitamin A & C — regenerates skin cells",
        source: "Cold-pressed, Chile",
        icon: "🌹",
      },
      {
        name: "Bakuchiol",
        benefit: "Natural retinol alternative — firming without irritation",
        source: "Babchi plant, India",
        icon: "🌿",
      },
      {
        name: "Peptide Complex",
        benefit: "Stimulates collagen production",
        source: "Vegan, lab synthesized",
        icon: "🧬",
      },
      {
        name: "Vitamin E",
        benefit: "Antioxidant protection — prevents premature aging",
        source: "Sunflower seed derived",
        icon: "☀️",
      },
    ],
    howToUse: [
      "Apply at night on cleansed skin",
      "Warm 3–4 drops between palms",
      "Press gently into face, focusing on fine line areas",
      "No need for a separate moisturizer — this acts as your night treatment",
      "Use 5–7 nights per week for best results",
    ],
    faq: [
      {
        question: "Is Bakuchiol safe for sensitive skin?",
        answer:
          "Yes! Bakuchiol provides retinol-like benefits without the irritation, making it ideal for sensitive skin.",
      },
      {
        question: "How quickly will I see anti-aging results?",
        answer: "Most users report visible lifting and plumping within 6 weeks.",
      },
    ],
  },
  {
    id: "p006",
    slug: "saffron-glow-face-mask",
    name: "Saffron & Turmeric Glow Mask",
    tagline: "Ayurvedic ritual for luminous skin",
    description:
      "An Ayurvedic-inspired clay mask infused with hand-picked Kashmir Saffron, organic Turmeric, and Multani Mitti. Deep cleanses, brightens, and leaves skin with an instant visible glow after just one use.",
    price: 549,
    originalPrice: 699,
    discount: 21,
    rating: 4.7,
    reviewCount: 654,
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    ],
    category: "mask",
    concern: ["dullness", "pigmentation"],
    suitableFor: ["oily", "combination", "dry"],
    keyBenefit: "Instant glow & deep cleansing",
    volume: "100g",
    inStock: true,
    ingredients: [
      {
        name: "Kashmir Saffron",
        benefit: "Brightens and evens skin tone",
        source: "Hand-picked, Pampore, Kashmir",
        icon: "🌸",
      },
      {
        name: "Organic Turmeric",
        benefit: "Anti-inflammatory — reduces dark spots",
        source: "Certified organic, Erode, Tamil Nadu",
        icon: "🌿",
      },
      {
        name: "Multani Mitti",
        benefit: "Deep cleanses and tightens pores",
        source: "Naturally mined, Pakistan",
        icon: "🏔️",
      },
      {
        name: "Rose Water",
        benefit: "Hydrates and tones",
        source: "Steam distilled, Kannauj, UP",
        icon: "🌹",
      },
    ],
    howToUse: [
      "Mix 1–2 teaspoons with rose water to a smooth paste",
      "Apply evenly to cleansed face avoiding eye area",
      "Leave on for 15–20 minutes",
      "Rinse with lukewarm water using gentle circular motions",
      "Use 2–3 times per week",
    ],
    faq: [
      {
        question: "Will turmeric stain my skin?",
        answer:
          "The formula is carefully balanced to prevent staining. Rinse thoroughly and any tint will fade.",
      },
    ],
  },
  {
    id: "p007",
    slug: "spf50-sunscreen",
    name: "Invisible Shield SPF 50+ Sunscreen",
    tagline: "Broad-spectrum protection, zero white cast",
    description:
      "A lightweight, non-greasy SPF 50+ sunscreen with mineral filters and Cucumber extract. Provides PA++++ UVA protection, leaves zero white cast on all skin tones, and doubles as a primer.",
    price: 499,
    originalPrice: 649,
    discount: 23,
    rating: 4.6,
    reviewCount: 1876,
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80",
      "https://images.unsplash.com/photo-1631390919499-f6a929cbfc43?w=600&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    ],
    category: "sunscreen",
    concern: ["pigmentation", "dullness"],
    suitableFor: ["oily", "combination", "dry", "sensitive"],
    keyBenefit: "SPF 50+ with zero white cast",
    volume: "50g",
    isBestseller: true,
    inStock: true,
    badge: "Must Have",
    ingredients: [
      {
        name: "Zinc Oxide & Titanium Dioxide",
        benefit: "Broad-spectrum mineral UV protection",
        source: "Non-nano grade",
        icon: "☀️",
      },
      {
        name: "Cucumber Extract",
        benefit: "Soothes and cools sun-exposed skin",
        source: "Organic, cold-pressed",
        icon: "🥒",
      },
      {
        name: "Niacinamide",
        benefit: "Brightens and reduces inflammation",
        source: "Pharmaceutical grade",
        icon: "✨",
      },
    ],
    howToUse: [
      "Apply generously as the final step in your morning routine",
      "Use 1/4 teaspoon for face, more for neck",
      "Apply 15 minutes before sun exposure",
      "Reapply every 2 hours outdoors",
    ],
    faq: [
      {
        question: "Can I use this under makeup?",
        answer:
          "Yes, it works as a perfect primer base. Allow 2 minutes to absorb before makeup application.",
      },
    ],
  },
  {
    id: "p008",
    slug: "aloe-vera-toner",
    name: "Aloe Vera Pore-Refining Toner",
    tagline: "Balance, refine and prep your skin",
    description:
      "An alcohol-free toner with 98% pure Aloe Vera, Witch Hazel, and Green Tea. Balances skin pH, minimizes pores, and preps skin to absorb subsequent products better.",
    price: 349,
    originalPrice: 449,
    discount: 22,
    rating: 4.5,
    reviewCount: 743,
    images: [
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    ],
    category: "toner",
    concern: ["acne", "uneven-texture"],
    suitableFor: ["oily", "combination", "sensitive"],
    keyBenefit: "Minimizes pores & balances pH",
    volume: "200ml",
    inStock: true,
    ingredients: [
      {
        name: "98% Aloe Vera",
        benefit: "Soothes, hydrates and heals",
        source: "Organic, Rajasthan",
        icon: "🪴",
      },
      {
        name: "Witch Hazel",
        benefit: "Astringent — tightens pores naturally",
        source: "Alcohol-free extract",
        icon: "🌿",
      },
      {
        name: "Green Tea Extract",
        benefit: "Antioxidant — fights free radical damage",
        source: "Organic, Darjeeling",
        icon: "🍵",
      },
    ],
    howToUse: [
      "After cleansing, pour a small amount onto a cotton pad",
      "Gently swipe across face and neck",
      "Allow to dry naturally or pat lightly",
      "Follow with serum and moisturizer",
      "Use morning and evening",
    ],
    faq: [
      {
        question: "Is it alcohol-free?",
        answer:
          "Yes. No drying alcohols. Safe for daily use including sensitive skin.",
      },
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getBestsellers = () => products.filter((p) => p.isBestseller);

export const getProductsByConcern = (concern: string) =>
  products.filter((p) => p.concern.includes(concern as never));

export const getRelatedProducts = (productId: string, limit = 4) => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products
    .filter(
      (p) =>
        p.id !== productId &&
        p.concern.some((c) => product.concern.includes(c))
    )
    .slice(0, limit);
};
