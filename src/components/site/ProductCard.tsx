"use client";
import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct, formatPrice } from "@/lib/shopify";
import { useCart } from "./CartContext";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const { addItem } = useCart();
  const image = product.images[0];
  const image2 = product.images[1];
  const variant = product.variants[0];
  const price = formatPrice(variant.price);

  function handleAdd() {
    addItem({
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      variantTitle: variant.title,
      price: variant.price,
      image: image?.src ?? "",
    });
  }

  return (
    <div className="group">
      <Link href={`/products/${product.handle}`} className="block relative overflow-hidden aspect-[3/4] mb-4 bg-[#f2ede5]">
        {image ? (
          <>
            <Image
              src={image.src}
              alt={image.alt ?? product.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {image2 && (
              <Image
                src={image2.src}
                alt={image2.alt ?? product.title}
                fill
                className="object-cover transition duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-serif text-5xl text-[var(--border)]">ID</span>
          </div>
        )}
        <button
          onClick={(e) => { e.preventDefault(); handleAdd(); }}
          className="absolute bottom-0 left-0 right-0 bg-[var(--ink)] text-white text-[10px] uppercase tracking-[0.25em] py-3.5 translate-y-full group-hover:translate-y-0 transition duration-300 hover:bg-[var(--gold)]"
        >
          Ajouter au panier
        </button>
      </Link>
      <div>
        <Link href={`/products/${product.handle}`}>
          <h3 className="font-serif text-[15px] text-[var(--ink)] hover:text-[var(--gold)] transition-colors mb-1">{product.title}</h3>
        </Link>
        <p className="text-[12px] text-[var(--muted)] italic mb-1">Soie &amp; dentelle française</p>
        <p className="text-[13px] text-[var(--ink)]">{price}</p>
      </div>
    </div>
  );
}
