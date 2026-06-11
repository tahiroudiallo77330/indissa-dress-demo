import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/site/CartContext";
import { CartDrawer } from "@/components/site/CartDrawer";
import { AnimationsProvider } from "@/components/site/AnimationsProvider";

export const metadata: Metadata = {
  title: "Indissa Dress Paris — Robes de mariée sur mesure",
  description: "Maison de robes de mariée sur mesure à Paris. Créations uniques pour votre plus beau jour.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider store={process.env.NEXT_PUBLIC_SHOPIFY_STORE ?? "1r1nmp-gi.myshopify.com"}>
          <AnimationsProvider />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
