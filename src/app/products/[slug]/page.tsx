import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data/products";
import { getReviewsByProduct } from "@/lib/data/reviews";
import { PDPClient } from "@/components/pdp/PDPClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Vidaniq`,
    description: product.tagline,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const reviews = getReviewsByProduct(product.id);
  const related = getRelatedProducts(product.id);

  return <PDPClient product={product} reviews={reviews} related={related} />;
}
