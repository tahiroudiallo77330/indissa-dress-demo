"use client";
import { useCart } from "./CartContext";
import Image from "next/image";

export function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, total, checkoutUrl } = useCart();

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-[var(--cream)] z-50 flex flex-col shadow-2xl cart-panel ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
          <h2 className="font-serif text-xl tracking-wide">Mon panier</h2>
          <button onClick={() => setOpen(false)} className="text-[var(--muted)] hover:text-[var(--ink)] text-2xl leading-none">×</button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <p className="text-[var(--muted)] text-sm text-center mt-16">Votre panier est vide.</p>
          ) : (
            items.map((item) => (
              <div key={item.variantId} className="flex gap-4">
                <div className="w-20 h-24 bg-[var(--cream-2)] rounded overflow-hidden shrink-0">
                  {item.image && (
                    <Image src={item.image} alt={item.title} width={80} height={96}
                      className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm leading-tight mb-0.5">{item.title}</p>
                  {item.variantTitle !== "Default Title" && (
                    <p className="text-[var(--muted)] text-xs mb-2">{item.variantTitle}</p>
                  )}
                  <p className="text-[var(--gold-dk)] text-sm font-medium mb-3">
                    {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(Number(item.price))}
                  </p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQty(item.variantId, item.quantity - 1)}
                      className="w-6 h-6 border border-[var(--border)] text-xs hover:border-[var(--gold)] transition">−</button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQty(item.variantId, item.quantity + 1)}
                      className="w-6 h-6 border border-[var(--border)] text-xs hover:border-[var(--gold)] transition">+</button>
                    <button onClick={() => removeItem(item.variantId)}
                      className="ml-auto text-[var(--muted)] hover:text-[var(--ink)] text-xs underline">Retirer</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-[var(--border)]">
            <div className="flex justify-between mb-5">
              <span className="text-sm text-[var(--muted)]">Total</span>
              <span className="font-serif text-lg">{total}</span>
            </div>
            <a href={checkoutUrl}
              className="block w-full text-center bg-[var(--ink)] text-white text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-[var(--gold-dk)] transition">
              Commander
            </a>
            <p className="text-center text-[10px] text-[var(--muted)] mt-3">
              Paiement sécurisé via Shopify
            </p>
          </div>
        )}
      </div>
    </>
  );
}
