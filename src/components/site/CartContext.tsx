"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  variantId: number;
  productId: number;
  title: string;
  variantTitle: string;
  price: string;
  image: string;
  quantity: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (variantId: number) => void;
  updateQty: (variantId: number, qty: number) => void;
  total: string;
  checkoutUrl: string;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ store, children }: { store: string; children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("indissa_cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("indissa_cart", JSON.stringify(items));
  }, [items]);

  function addItem(item: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === item.variantId);
      if (existing) return prev.map((i) => i.variantId === item.variantId ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
    setOpen(true);
  }

  function removeItem(variantId: number) {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  }

  function updateQty(variantId: number, qty: number) {
    if (qty <= 0) { removeItem(variantId); return; }
    setItems((prev) => prev.map((i) => i.variantId === variantId ? { ...i, quantity: qty } : i));
  }

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const totalNum = items.reduce((s, i) => s + Number(i.price) * i.quantity, 0);
  const total = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(totalNum);

  const cartPath = items.map((i) => `${i.variantId}:${i.quantity}`).join(",");
  const checkoutUrl = items.length > 0 ? `https://${store}/cart/${cartPath}` : "#";

  return (
    <Ctx.Provider value={{ items, count, open, setOpen, addItem, removeItem, updateQty, total, checkoutUrl }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
