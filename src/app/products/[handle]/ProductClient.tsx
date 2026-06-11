"use client";
import { useState } from "react";
import Link from "next/link";
import { ShopifyProduct, formatPrice } from "@/lib/shopify";
import { useCart } from "@/components/site/CartContext";

const TAILLES = ["34", "36", "38", "40"];

export function ProductClient({ product }: { product: ShopifyProduct }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { addItem } = useCart();

  const variant = product.variants[selectedSize] ?? product.variants[0];
  const image = product.images[activeImage];

  function handleAdd() {
    for (let i = 0; i < qty; i++) {
      addItem({
        variantId: variant.id,
        productId: product.id,
        title: product.title,
        variantTitle: variant.title,
        price: variant.price,
        image: product.images[0]?.src ?? "",
      });
    }
  }

  const details = product.body_html
    ? product.body_html.replace(/<[^>]+>/g, "").split("\n").filter(Boolean)
    : [
        "100% Soie de Côme",
        "Dentelle de Calais-Caudry brodée main",
        "Doublure en crêpe de chine",
        "Fermeture par boutons recouverts",
        "Nettoyage à sec spécialisé",
      ];

  const hasImages = product.images.length > 0;
  const thumbImages = hasImages ? product.images.slice(0, 4) : [null, null, null];

  return (
    <main className="bg-[#fef9f1] pt-[72px]">

      {/* ── Layout 3 colonnes ──────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-start">

          {/* Col 1 : Thumbnails sticky */}
          <div className="hidden md:block w-[110px] shrink-0">
            <div className="sticky top-[72px] pt-6 px-3 flex flex-col gap-2">
              {thumbImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => img && setActiveImage(i)}
                  className={`w-full aspect-[3/4] overflow-hidden border transition-all ${
                    activeImage === i ? "border-[#1d1c17]" : "border-transparent opacity-50 hover:opacity-100"
                  } ${!img ? "bg-[#e8e3db] flex items-center justify-center cursor-default" : ""}`}
                >
                  {img
                    ? <img src={img.src} alt="" className="w-full h-full object-cover" />
                    : <span className="font-serif text-[1rem] text-[#b8b0a4] select-none">ID</span>
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 : Photo principale sticky */}
          <div className="flex-1 min-w-0">
            <div className="sticky top-[72px]">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e3db]">
                {image ? (
                  <img src={image.src} alt={image.alt ?? product.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-[8rem] text-[#ccc6be] select-none">ID</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Col 3 : Informations produit */}
          <div className="w-[440px] shrink-0 px-10 pt-10 pb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4a882] mb-4">Collection Éphémère</p>
            <h1 className="font-serif text-[clamp(1.8rem,2.8vw,2.6rem)] font-normal text-[#1d1c17] mb-5 leading-[1.1]">
              {product.title}
            </h1>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-[1.3rem] text-[#1d1c17]">{formatPrice(variant.price)}</span>
              <span className="font-serif italic text-[13px] text-[#747878]">Sur devis pour personnalisation</span>
            </div>
            <hr className="border-[#e7e2da] mb-6" />
            <p className="text-[13px] text-[#747878] leading-relaxed mb-5 max-w-[380px]">
              {product.body_html
                ? product.body_html.replace(/<[^>]+>/g, "").slice(0, 200)
                : "Une pièce d'exception issue de notre dernier atelier. Incarne le savoir-faire parisien par excellence, alliant une silhouette architecturale à la légèreté d'un voile de soie de mûrier."}
            </p>

            {/* Badge fait main */}
            <div className="flex items-center gap-2 mb-7">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#747878]">Fait main à Paris</span>
            </div>

            {/* Sélecteur taille */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#1d1c17]">Taille (FR)</p>
                <button className="text-[10px] uppercase tracking-[0.15em] text-[#747878] border-b border-[#747878] pb-0.5 hover:text-[#1d1c17] hover:border-[#1d1c17] transition-colors">
                  Guide des tailles
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.variants.length > 1
                  ? product.variants.map((v, i) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedSize(i)}
                        className={`w-16 h-12 text-[12px] border transition-all ${
                          selectedSize === i ? "border-[#1d1c17] bg-[#1d1c17] text-white" : "border-[#e7e2da] text-[#1d1c17] hover:border-[#1d1c17]"
                        }`}
                      >
                        {v.option1 ?? v.title}
                      </button>
                    ))
                  : TAILLES.map((t, i) => (
                      <button
                        key={t}
                        onClick={() => setSelectedSize(i)}
                        className={`w-16 h-12 text-[12px] border transition-all ${
                          selectedSize === i ? "border-[#1d1c17] bg-[#1d1c17] text-white" : "border-[#e7e2da] text-[#1d1c17] hover:border-[#1d1c17]"
                        }`}
                      >
                        {t}
                      </button>
                    ))
                }
              </div>
            </div>

            {/* Qty + Ajouter au panier */}
            <div className="flex gap-2 mb-3">
              <div className="flex items-center border border-[#e7e2da] h-12 shrink-0">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-full flex items-center justify-center text-[#1d1c17] hover:text-[#c4a882] transition-colors text-[18px] leading-none">−</button>
                <span className="w-8 text-center text-[13px] text-[#1d1c17]">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-full flex items-center justify-center text-[#1d1c17] hover:text-[#c4a882] transition-colors text-[18px] leading-none">+</button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#1d1c17] text-white text-[11px] uppercase tracking-[0.2em] h-12 hover:bg-[#715b3a] transition-all duration-300"
              >
                Ajouter au panier
              </button>
            </div>

            <Link
              href="/#contact"
              className="w-full block text-center border border-[#c4a882] text-[#1d1c17] text-[11px] uppercase tracking-[0.2em] py-3.5 mb-6 hover:bg-[#f5f0e8] transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>

            {/* Info box */}
            <div className="bg-[#f5f0e8] p-4 space-y-3 mb-7">
              <div className="flex items-start gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8 18 6 20 8"/><path d="M20 6v10a2 2 0 01-2 2H8"/><path d="m1 13 4 4 4-4"/>
                </svg>
                <p className="text-[12px] text-[#747878] leading-relaxed">Livraison gratuite en France métropolitaine.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
                <p className="text-[12px] text-[#747878] leading-relaxed">Création sur mesure disponible sur demande après essayage en salon.</p>
              </div>
            </div>

            {/* Accordéons */}
            {[
              {
                id: "details",
                label: "Détails et Composition",
                content: (
                  <ul className="space-y-2 pt-3 pb-1">
                    {details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-[#747878]">
                        <span className="text-[#c4a882] mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "livraison",
                label: "Livraison & Retours",
                content: (
                  <div className="pt-3 pb-1 space-y-2 text-[13px] text-[#747878]">
                    <p>Livraison offerte en France métropolitaine.</p>
                    <p>Délai de confection : 4 à 8 semaines selon la création.</p>
                    <p>Les robes sur mesure ne sont pas éligibles au retour.</p>
                  </div>
                ),
              },
            ].map(({ id, label, content }) => (
              <div key={id} className="border-t border-[#e7e2da] py-4">
                <button
                  onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1d1c17]">{label}</span>
                  <svg
                    width="14" height="8" viewBox="0 0 14 8" fill="none"
                    className={`transition-transform duration-200 shrink-0 ${openAccordion === id ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1l6 6 6-6" stroke="#747878" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </button>
                {openAccordion === id && content}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Galerie secondaire ─────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-10 pt-10 pb-0">
        <div className="grid grid-cols-2 gap-3">
          {product.images.length > 1
            ? product.images.slice(1, 3).map((img, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-[#e8e3db]">
                  <img src={img.src} alt={img.alt ?? ""} className="w-full h-full object-cover" />
                </div>
              ))
            : [0, 1].map((i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-[#e8e3db] flex items-center justify-center">
                  <span className="font-serif text-[4rem] text-[#ccc6be] select-none">ID</span>
                </div>
              ))
          }
        </div>
      </div>

      {/* ── L'Art de la Couture ─────────────────────────────── */}
      <section className="py-20 bg-[#fef9f1]">
        <div className="max-w-[1440px] mx-auto px-10">
          <h2 className="font-serif italic text-[clamp(1.8rem,3vw,2.6rem)] font-normal text-[#1d1c17] text-center mb-12">
            L&apos;Art de la Couture
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {[
              { bg: "linear-gradient(160deg, #2a2018 0%, #1a1208 100%)" },
              { bg: "linear-gradient(160deg, #3a3228 0%, #282018 100%)" },
              { bg: "linear-gradient(160deg, #181c22 0%, #282e38 100%)" },
              { bg: "linear-gradient(160deg, #a8a09a 0%, #c8c4be 100%)" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden"
                style={{ background: item.bg }}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
