"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SlidersHorizontal, X, ChevronDown, Leaf } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data/products";
import { useSkinProfileStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { bundles } from "@/lib/data/bundles";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

const SKIN_TYPES = ["oily", "dry", "combination", "sensitive"];
const CONCERNS = [
  "acne",
  "pigmentation",
  "dullness",
  "dryness",
  "fine-lines",
  "uneven-texture",
];
const CATEGORIES = ["cleanser", "serum", "moisturizer", "mask", "sunscreen", "toner"];
const SORT_OPTIONS = [
  { value: "bestselling", label: "Bestselling" },
  { value: "top-rated", label: "Top Rated" },
  { value: "new-arrivals", label: "New Arrivals" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

function PLPContent() {
  const searchParams = useSearchParams();
  const initialConcern = searchParams.get("concern") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialSort = searchParams.get("sort") || "bestselling";
  const viewBundles = searchParams.get("view") === "bundles";

  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(
    initialConcern ? [initialConcern] : []
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sort, setSort] = useState(initialSort);

  const profile = useSkinProfileStore((s) => s.profile);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedConcerns.length > 0) {
      result = result.filter((p) =>
        p.concern.some((c) => selectedConcerns.includes(c))
      );
    }
    if (selectedTypes.length > 0) {
      result = result.filter((p) =>
        p.suitableFor.some((t) => selectedTypes.includes(t))
      );
    }
    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sort) {
      case "bestselling":
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case "top-rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "new-arrivals":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [selectedConcerns, selectedTypes, selectedCategories, priceRange, sort]);

  const toggleFilter = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const activeFilterCount =
    selectedConcerns.length + selectedTypes.length + selectedCategories.length;

  const categoryTitle = initialConcern
    ? initialConcern.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : initialCategory
    ? initialCategory.replace(/\b\w/g, (l) => l.toUpperCase()) + "s"
    : "All Products";

  if (viewBundles) {
    return <BundlesView />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="section-title">{categoryTitle}</h1>
        {profile && (
          <div className="mt-3 inline-flex items-center gap-2 bg-sage-50 border border-sage-200 text-sage-700 text-sm px-4 py-2 rounded-full">
            <Leaf className="w-4 h-4" />
            Showing recommendations for your{" "}
            <span className="font-semibold">{profile.skinType} skin</span>
            <button
              onClick={() => useSkinProfileStore.getState().clearProfile()}
              className="ml-1 text-sage-400 hover:text-sage-700"
            >
              · Switch to General View
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-56 shrink-0">
          <FilterPanel
            selectedConcerns={selectedConcerns}
            selectedTypes={selectedTypes}
            selectedCategories={selectedCategories}
            priceRange={priceRange}
            onConcernToggle={(c) => toggleFilter(selectedConcerns, setSelectedConcerns, c)}
            onTypeToggle={(t) => toggleFilter(selectedTypes, setSelectedTypes, t)}
            onCategoryToggle={(c) => toggleFilter(selectedCategories, setSelectedCategories, c)}
            onPriceChange={setPriceRange}
            onReset={() => {
              setSelectedConcerns([]);
              setSelectedTypes([]);
              setSelectedCategories([]);
              setPriceRange([0, 2000]);
            }}
          />
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Sort + Filter row */}
          <div className="flex items-center justify-between mb-6 gap-3">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            <div className="flex items-center gap-3">
              {/* Mobile filter button */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 text-sm font-medium hover:bg-gray-50"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-sage-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-gray-200 rounded-xl px-3 py-2 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Products grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-3">🌿</p>
              <p className="font-semibold text-gray-800 mb-1">
                No products match your filters
              </p>
              <p className="text-gray-500 text-sm">
                Try removing some filters to see more results
              </p>
              <button
                onClick={() => {
                  setSelectedConcerns([]);
                  setSelectedTypes([]);
                  setSelectedCategories([]);
                  setPriceRange([0, 2000]);
                }}
                className="mt-4 btn-primary text-sm"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setFilterOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterPanel
              selectedConcerns={selectedConcerns}
              selectedTypes={selectedTypes}
              selectedCategories={selectedCategories}
              priceRange={priceRange}
              onConcernToggle={(c) => toggleFilter(selectedConcerns, setSelectedConcerns, c)}
              onTypeToggle={(t) => toggleFilter(selectedTypes, setSelectedTypes, t)}
              onCategoryToggle={(c) => toggleFilter(selectedCategories, setSelectedCategories, c)}
              onPriceChange={setPriceRange}
              onReset={() => {
                setSelectedConcerns([]);
                setSelectedTypes([]);
                setSelectedCategories([]);
                setPriceRange([0, 2000]);
              }}
            />
            <button
              onClick={() => setFilterOpen(false)}
              className="w-full mt-4 bg-sage-600 text-white font-semibold py-3 rounded-xl"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterPanel({
  selectedConcerns,
  selectedTypes,
  selectedCategories,
  priceRange,
  onConcernToggle,
  onTypeToggle,
  onCategoryToggle,
  onPriceChange,
  onReset,
}: {
  selectedConcerns: string[];
  selectedTypes: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  onConcernToggle: (c: string) => void;
  onTypeToggle: (t: string) => void;
  onCategoryToggle: (c: string) => void;
  onPriceChange: (r: [number, number]) => void;
  onReset: () => void;
}) {
  const hasFilters =
    selectedConcerns.length + selectedTypes.length + selectedCategories.length > 0;

  return (
    <div className="space-y-6">
      {hasFilters && (
        <button
          onClick={onReset}
          className="text-xs text-sage-600 font-semibold hover:text-sage-800 flex items-center gap-1"
        >
          <X className="w-3 h-3" /> Clear All Filters
        </button>
      )}

      <FilterGroup title="Skin Concern">
        {CONCERNS.map((c) => (
          <FilterChip
            key={c}
            label={c.replace("-", " ")}
            active={selectedConcerns.includes(c)}
            onClick={() => onConcernToggle(c)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Skin Type">
        {SKIN_TYPES.map((t) => (
          <FilterChip
            key={t}
            label={t}
            active={selectedTypes.includes(t)}
            onClick={() => onTypeToggle(t)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Product Type">
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c}
            label={c}
            active={selectedCategories.includes(c)}
            onClick={() => onCategoryToggle(c)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={`Price: up to ₹${priceRange[1]}`}>
        <input
          type="range"
          min={0}
          max={2000}
          step={100}
          value={priceRange[1]}
          onChange={(e) => onPriceChange([0, Number(e.target.value)])}
          className="w-full accent-sage-600"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>₹0</span>
          <span>₹2000</span>
        </div>
      </FilterGroup>
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        {title}
      </h4>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-xs px-3 py-1.5 rounded-full border font-medium capitalize transition-all",
        active
          ? "bg-sage-600 text-white border-sage-600"
          : "bg-white text-gray-600 border-gray-200 hover:border-sage-300"
      )}
    >
      {label}
    </button>
  );
}

function BundlesView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="section-title mb-2">Routine Kits</h1>
      <p className="section-subtitle mb-8">
        Complete, curated routines — save up to 30%
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {bundles.map((bundle) => {
          const savings = bundle.originalPrice - bundle.price;
          const savingsPct = Math.round((savings / bundle.originalPrice) * 100);
          return (
            <div key={bundle.id} className="card hover:shadow-md transition-all">
              <div className="relative aspect-video overflow-hidden bg-cream-100">
                <Image
                  src={bundle.image}
                  alt={bundle.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-sage-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Save {savingsPct}%
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900">{bundle.name}</h3>
                <p className="text-xs text-gray-500">{bundle.description}</p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-bold">{formatPrice(bundle.price)}</span>
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(bundle.originalPrice)}
                  </span>
                </div>
                <button className="w-full bg-sage-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-sage-700 transition-colors">
                  Add Bundle to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
      <PLPContent />
    </Suspense>
  );
}
