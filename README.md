<div align="center">

<img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=for-the-badge&logo=tailwindcss" />
<img src="https://img.shields.io/badge/Zustand-4-orange?style=for-the-badge" />

# 🌿 Vidaniq — D2C Organic Skincare Website

**A full-stack, production-ready D2C skincare e-commerce platform built with Next.js 14.**  
Science-backed, Ayurvedic-inspired skincare. Personalized. Transparent. Clean.

[Live Demo](#) · [View Repo](https://github.com/komalsingh1/D2C-Skincare-Website-Vidaniq)

</div>

---

## 📸 Screenshots

| Homepage | Product Listing | Product Detail |
|----------|----------------|----------------|
| Hero + Trust Strip + Shop by Concern | Filters + Personalization | Ingredients + Reviews + FAQ |

| Skin Quiz | Cart | Checkout |
|-----------|------|----------|
| 5-Step Onboarding | Upsells + Coupon | 4-Step Flow |

---

## ✨ Features

### 🧴 Core Pages
| Page | Route | Description |
|------|-------|-------------|
| **Homepage** | `/` | 10-section landing page with personalized hero |
| **Product Listing** | `/products` | Filterable, sortable product grid |
| **Product Detail** | `/products/[slug]` | Full PDP with ingredient transparency |
| **Cart** | `/cart` | Full cart with coupon & upsells |
| **Checkout** | `/checkout` | 4-step purchase flow |

### 🎯 Personalization — Skin Quiz
- **5-step onboarding flow:** Skin Type → Concerns → Sensitivity → Routine Preference → Personalized Results
- Quiz output dynamically adapts the **Homepage hero**, **product badges** ("✨ For You"), and **PLP recommendations**
- Skin profile persists across sessions via `localStorage`

### 🛍️ E-Commerce
- **Cart sidebar** — slides in from any page, shows upsell recommendations
- **Free shipping progress bar** — tracks spend toward free shipping threshold
- **Coupon codes** — `FIRSTORDER`, `GLOW20`, `SKIN15`, `VIDANIQ10`
- **Quantity controls**, remove items, cart persistence across browser sessions
- **4-step checkout:** Address → Delivery (Standard/Express) → Payment (UPI / Card / Net Banking / COD) → Order Review → Confirmation

### 🌿 Product Experience
- **8 curated products** with full ingredient profiles, sourcing details, how-to-use steps, and FAQs
- **Ingredient Education section** — interactive cards for Vitamin C, Aloe Vera, Saffron, Hyaluronic Acid, Neem, Bakuchiol
- **4 Routine Kits** — Acne Repair, Bridal Glow, Hydration Set, Anti-Aging
- **Verified customer reviews** with star breakdown, skin type tags, and UGC images
- **Related products** — cross-sell based on shared concerns

### 📱 UX & Design
- Fully **mobile-responsive** with sticky bottom CTA on mobile
- **Animated dropdown nav** with mega-menu and mobile drawer
- **Announcement bar** with promo code
- **Trust badges** — Dermatologist Tested, Cruelty Free, Sustainable Packaging
- Smooth hover states, transitions, and micro-interactions throughout

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS with custom design tokens |
| State Management | Zustand (with `persist` middleware) |
| Icons | Lucide React |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Images | Next.js `<Image>` + Unsplash |
| Data | Mock data layer (TypeScript) |

---

## 📁 Project Structure

```
vidaniq/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage
│   │   ├── layout.tsx                  # Root layout (Navbar, Footer, Quiz Modal, Cart Sidebar)
│   │   ├── globals.css                 # Global styles + Tailwind
│   │   ├── products/
│   │   │   ├── page.tsx               # Product Listing Page (PLP)
│   │   │   └── [slug]/page.tsx        # Product Detail Page (PDP)
│   │   ├── cart/page.tsx              # Cart page
│   │   └── checkout/page.tsx          # Checkout flow
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Sticky nav with dropdown + mobile drawer
│   │   │   └── Footer.tsx             # Footer with links, newsletter, trust badges
│   │   ├── home/
│   │   │   ├── HeroSection.tsx        # Personalized / generic hero
│   │   │   ├── TrustStrip.tsx         # Scrolling trust indicators
│   │   │   ├── QuizBanner.tsx         # Quiz CTA banner
│   │   │   ├── ShopByConcern.tsx      # 4 concern cards
│   │   │   ├── BestsellersSection.tsx # Product grid
│   │   │   ├── IngredientEducation.tsx# Interactive ingredient explorer
│   │   │   ├── RoutineBundles.tsx     # Kit cards
│   │   │   ├── SocialProof.tsx        # Stats + UGC + reviews
│   │   │   ├── BrandStory.tsx         # Brand narrative section
│   │   │   ├── BlogSection.tsx        # Blog preview cards
│   │   │   └── StickyCTA.tsx          # Mobile sticky bottom bar
│   │   ├── quiz/
│   │   │   └── SkinQuizModal.tsx      # 5-step quiz modal
│   │   ├── cart/
│   │   │   └── CartSidebar.tsx        # Slide-in cart drawer
│   │   ├── pdp/
│   │   │   └── PDPClient.tsx          # Full product detail client component
│   │   └── ui/
│   │       ├── ProductCard.tsx        # Product card (quick add, wishlist, badges)
│   │       └── StarRating.tsx         # Fractional star rating
│   │
│   └── lib/
│       ├── types.ts                   # TypeScript interfaces
│       ├── store.ts                   # Zustand: cart + skin profile stores
│       ├── utils.ts                   # cn(), formatPrice(), truncate()
│       └── data/
│           ├── products.ts            # 8 products with full data
│           ├── reviews.ts             # Customer reviews
│           ├── bundles.ts             # Routine kits
│           └── blog.ts                # Blog posts
│
├── tailwind.config.ts                 # Custom colors (sage, cream, brand)
├── postcss.config.mjs
├── next.config.mjs
└── tsconfig.json
```

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `sage-600` | `#3f6540` | Primary buttons, accents |
| `sage-700` | `#345135` | Navbar, footer |
| `cream-50` | `#fdfcf8` | Page background |
| `cream-100` | `#faf5ea` | Card backgrounds |
| `amber-400` | `#f59e0b` | Star ratings |

### Typography
- **Headings / Hero:** `Playfair Display` (serif) — elegant, premium feel
- **Body / UI:** `Inter` (sans-serif) — clean and readable

### Key Utility Classes
```css
.btn-primary      /* Sage green filled CTA */
.btn-secondary    /* Sage green outlined CTA */
.card             /* White rounded card with shadow */
.section-title    /* Playfair Display h2 */
.badge            /* Small label chip */
.input            /* Form input with focus ring */
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/komalsingh1/D2C-Skincare-Website-Vidaniq.git
cd D2C-Skincare-Website-Vidaniq

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🧪 Coupon Codes (for testing)

| Code | Discount |
|------|----------|
| `FIRSTORDER` | 15% off |
| `VIDANIQ10` | 10% off |
| `SKIN15` | 15% off |
| `GLOW20` | 20% off |

---

## 🗺️ Roadmap

- [ ] Backend API with database (Prisma + PostgreSQL)
- [ ] User authentication (NextAuth.js)
- [ ] Real payment gateway (Razorpay / Stripe)
- [ ] Order tracking page
- [ ] Wishlist with account sync
- [ ] Email notifications (order confirmation, review request)
- [ ] WhatsApp review capture integration
- [ ] Instagram UGC API integration
- [ ] Admin dashboard (product/order management)
- [ ] Search with filters
- [ ] Subscription / auto-reorder feature

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ in India · Built with [Next.js](https://nextjs.org/) · Styled with [Tailwind CSS](https://tailwindcss.com/)

⭐ **Star this repo if you found it useful!**

</div>
