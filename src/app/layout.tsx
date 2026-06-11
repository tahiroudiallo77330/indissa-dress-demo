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

const SITE_URL = "https://indissa-dress-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Indissa Dress Paris — Robes de Mariée Sur Mesure",
    template: "%s — Indissa Dress Paris",
  },
  description:
    "Indissa Dress Paris, maison de robes de mariée sur mesure. Créations haute couture nuptiale uniques, dentelle de Calais, soie italienne, confectionnées à la main par nos couturières expertes. Prenez rendez-vous dans notre atelier.",
  keywords: [
    "robe de mariée sur mesure",
    "robe de mariée Paris",
    "robe de mariée haute couture",
    "atelier robe de mariée",
    "couturière mariage Paris",
    "robe mariée dentelle",
    "robe mariée soie",
    "création robe mariée",
    "maison de couture nuptiale",
    "robe de mariée personnalisée",
    "robe nuptiale Paris",
    "sur mesure mariage",
    "haute couture mariage",
    "robe de mariée artisanale",
    "robes de mariée luxe",
    "atelier couture mariage Paris",
    "robe mariée dentelle de Calais",
    "essayage robe mariage",
    "rendez-vous atelier mariage",
    "Indissa Dress",
    "robe mariée Île-de-France",
    "créatrice robe de mariée",
    "robe mariée moderne",
    "robe mariée élégante",
    "confection robe mariage",
  ],
  authors: [{ name: "Indissa Dress Paris" }],
  creator: "Indissa Dress Paris",
  publisher: "Indissa Dress Paris",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Indissa Dress Paris — Robes de Mariée Sur Mesure",
    description:
      "Maison de robes de mariée sur mesure. Haute couture nuptiale, dentelle, soie. Chaque robe est une création unique pour votre plus beau jour.",
    url: SITE_URL,
    siteName: "Indissa Dress Paris",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-indissa.png",
        width: 800,
        height: 800,
        alt: "Indissa Dress Paris — Robes de Mariée Sur Mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indissa Dress Paris — Robes de Mariée Sur Mesure",
    description: "Maison de robes de mariée sur mesure. Haute couture nuptiale, dentelle, soie.",
    images: ["/logo-indissa.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Indissa Dress Paris",
  legalName: "INDISSA DRESS",
  description:
    "Maison de robes de mariée sur mesure. Créations haute couture nuptiales uniques, confectionnées à la main.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-indissa.png`,
  image: `${SITE_URL}/logo-indissa.png`,
  email: "indissadressparis@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "37 Allée de la Toison d'Or",
    addressLocality: "Créteil",
    postalCode: "94000",
    addressCountry: "FR",
  },
  vatID: "FR38985263573",
  foundingDate: "2024-03-04",
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  sameAs: [
    "https://www.instagram.com/indissadressparis",
    "https://www.pinterest.fr/indissadressparis",
    `https://annuaire-entreprises.data.gouv.fr/entreprise/indissa-dress-985263573`,
  ],
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Carte bancaire, Virement",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    description: "Sur rendez-vous uniquement",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
