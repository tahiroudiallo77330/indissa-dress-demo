import { getProduct, formatPrice } from "@/lib/shopify";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductClient } from "./ProductClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 300;

export async function generateMetadata(
  { params }: { params: Promise<{ handle: string }> }
): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle).catch(() => null);
  if (!product) return { title: "Robe introuvable — Indissa Dress Paris" };
  return {
    title: `${product.title} — Indissa Dress Paris`,
    description: product.body_html.replace(/<[^>]+>/g, "").slice(0, 160),
    openGraph: { images: product.images[0] ? [product.images[0].src] : [] },
  };
}

export default async function ProductPage(
  { params }: { params: Promise<{ handle: string }> }
) {
  const { handle } = await params;
  const product = await getProduct(handle).catch(() => null);
  if (!product) notFound();

  return (
    <>
      <Header />
      <ProductClient product={product} />
      <Footer variant="dark" />
    </>
  );
}
