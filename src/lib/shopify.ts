const STORE = process.env.SHOPIFY_STORE!;
const TOKEN = process.env.SHOPIFY_ACCESS_TOKEN!;
const API = `https://${STORE}/admin/api/2026-04`;

async function shopifyFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API}${endpoint}`, {
    headers: { "X-Shopify-Access-Token": TOKEN, "Content-Type": "application/json" },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
  return res.json();
}

export type ShopifyImage = { src: string; alt: string | null };
export type ShopifyVariant = {
  id: number;
  title: string;
  price: string;
  available: boolean;
  inventory_quantity: number;
  option1: string | null;
  option2: string | null;
};
export type ShopifyProduct = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string[];
  images: ShopifyImage[];
  variants: ShopifyVariant[];
  options: { name: string; values: string[] }[];
};
export type ShopifyCollection = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  image?: ShopifyImage;
};

export async function getProducts(limit = 50): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: ShopifyProduct[] }>(`/products.json?limit=${limit}&status=active`);
  return data.products;
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ products: ShopifyProduct[] }>(`/products.json?handle=${handle}`);
  return data.products[0] ?? null;
}

export async function getCollections(): Promise<ShopifyCollection[]> {
  const data = await shopifyFetch<{ custom_collections: ShopifyCollection[] }>("/custom_collections.json");
  return data.custom_collections;
}

export function formatPrice(price: string): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(Number(price));
}

export function buildCheckoutUrl(items: { variantId: number; quantity: number }[]): string {
  const cart = items.map((i) => `${i.variantId}:${i.quantity}`).join(",");
  return `https://${STORE}/cart/${cart}`;
}
