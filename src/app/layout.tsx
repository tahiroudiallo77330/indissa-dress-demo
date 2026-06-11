import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/site/CartContext";
import { CartDrawer } from "@/components/site/CartDrawer";
import { AnimationsProvider } from "@/components/site/AnimationsProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indissa Dress Paris — Robes de mariée sur mesure",
  description: "Maison de robes de mariée sur mesure à Paris. Créations uniques, élégance parisienne et savoir-faire d'exception pour votre plus beau jour.",
  keywords: ["robe de mariée", "sur mesure", "Paris", "haute couture", "atelier", "mariage"],
  openGraph: {
    title: "Indissa Dress Paris — Robes de mariée sur mesure",
    description: "Maison de robes de mariée sur mesure à Paris.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
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
