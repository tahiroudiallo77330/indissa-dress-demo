import Link from "next/link";

type FooterVariant = "default" | "maison" | "product" | "dark";

const LIGHT_CONFIGS: Record<"default" | "maison" | "product", {
  cols: { heading: string; links: { href: string; label: string; external?: boolean }[] }[];
  tagline?: string;
  bottom?: string;
}> = {
  default: {
    cols: [
      {
        heading: "Collection",
        links: [
          { href: "/collections", label: "Robes de Mariée" },
          { href: "/collections", label: "Robes de Soirée" },
          { href: "/collections", label: "Accessoires" },
        ],
      },
      {
        heading: "Maison",
        links: [
          { href: "/la-maison", label: "Notre Histoire" },
          { href: "/#savoir-faire", label: "Savoir-faire" },
          { href: "/la-maison", label: "Atelier" },
        ],
      },
      {
        heading: "Aide",
        links: [
          { href: "/#contact", label: "Contact" },
          { href: "/#contact", label: "Prendre RDV" },
          { href: "/mentions-legales", label: "Mentions Légales" },
          { href: "/confidentialite", label: "Confidentialité" },
        ],
      },
    ],
  },
  product: {
    tagline: "L'excellence de la haute couture parisienne au service de vos moments d'exception.",
    bottom: "PARIS • 8ÈME ARRONDISSEMENT",
    cols: [
      {
        heading: "Boutique",
        links: [
          { href: "/la-maison", label: "Atelier" },
          { href: "/#contact", label: "Rendez-vous" },
          { href: "/#contact", label: "Contact" },
        ],
      },
      {
        heading: "Légal",
        links: [
          { href: "/mentions-legales", label: "Mentions Légales" },
          { href: "/confidentialite", label: "Confidentialité" },
          { href: "/#contact", label: "Presse" },
        ],
      },
      {
        heading: "Social",
        links: [
          { href: "https://www.instagram.com/indissadressparis", label: "Instagram", external: true },
          { href: "https://www.pinterest.fr/indissadressparis", label: "Pinterest", external: true },
        ],
      },
    ],
  },
  maison: {
    cols: [
      {
        heading: "Maison",
        links: [
          { href: "/la-maison", label: "La Maison" },
          { href: "/la-maison", label: "Atelier" },
          { href: "/#contact", label: "Presse" },
        ],
      },
      {
        heading: "Services",
        links: [
          { href: "/#contact", label: "Contact" },
          { href: "/#contact", label: "Rendez-vous" },
          { href: "https://www.instagram.com/indissadressparis", label: "Instagram", external: true },
        ],
      },
      {
        heading: "Légal",
        links: [
          { href: "/mentions-legales", label: "Mentions Légales" },
          { href: "/confidentialite", label: "Confidentialité" },
        ],
      },
    ],
  },
};

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {

  /* ── Variante sombre ─────────────────────────────────── */
  if (variant === "dark") {
    return (
      <footer className="bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-10 pt-20 pb-14 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Marque */}
          <div>
            <p className="font-serif text-[1.4rem] font-bold tracking-[0.04em] text-white mb-4 uppercase">
              Indissa Paris
            </p>
            <p className="text-[13px] text-[#666] leading-relaxed max-w-[220px]">
              L&apos;élégance parisienne, redéfinie par l&apos;excellence du sur-mesure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#444] mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: "/la-maison", label: "Maison" },
                { href: "/collections", label: "Collections" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-[#888] hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aide */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#444] mb-5">Aide</p>
            <ul className="space-y-3">
              {[
                { href: "/collections", label: "Guide des Tailles" },
                { href: "/#contact", label: "FAQ" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-[#888] hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#444] mb-5">Atelier</p>
            <p className="text-[13px] text-[#888] mb-1">8ème Arrondissement</p>
            <p className="text-[13px] text-[#888] mb-4">75008 Paris, France</p>
            <p className="text-[13px] text-[#888] mb-8">
              <a href="mailto:indissadressparis@gmail.com" className="hover:text-white transition-colors">
                indissadressparis@gmail.com
              </a>
            </p>
            <div className="flex gap-4 mb-8">
              <a href="https://www.instagram.com/indissadressparis" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#555] hover:text-white transition-colors uppercase tracking-[0.15em]">Instagram</a>
              <a href="https://www.pinterest.fr/indissadressparis" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#555] hover:text-white transition-colors uppercase tracking-[0.15em]">Pinterest</a>
            </div>
            <p className="text-[11px] text-[#444] leading-relaxed">© 2026 Indissa Dress Paris.<br />Savoir-faire éternel.</p>
          </div>
        </div>
        <div className="border-t border-[#1a1a1a]">
          <div className="max-w-[1440px] mx-auto px-10 py-4 flex flex-wrap justify-between items-center gap-3">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#333]">© 2026 Indissa Dress Paris. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="text-[10px] uppercase tracking-[0.15em] text-[#333] hover:text-white transition-colors">Mentions Légales</Link>
              <Link href="/confidentialite" className="text-[10px] uppercase tracking-[0.15em] text-[#333] hover:text-white transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  /* ── Variantes claires ───────────────────────────────── */
  const config = LIGHT_CONFIGS[variant as "default" | "maison" | "product"];

  return (
    <footer className="bg-[#fef9f1] border-t border-[#e7e2da]">
      <div className="max-w-[1440px] mx-auto px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-1">
          <p className="font-serif text-[16px] font-semibold text-[#1d1c17] mb-4">Indissa Dress Paris</p>
          <p className="text-[13px] text-[#747878] leading-relaxed max-w-[240px]">
            {config.tagline ?? "L'excellence du sur-mesure au cœur de Paris."}
          </p>
        </div>
        {config.cols.map((col) => (
          <div key={col.heading}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#747878] mb-5">{col.heading}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#1d1c17] hover:text-[#c4a882] transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-[13px] text-[#1d1c17] hover:text-[#c4a882] transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#e7e2da]">
        <div className="max-w-[1440px] mx-auto px-10 py-4 flex flex-wrap justify-between items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#747878]">© 2026 Indissa Dress Paris. Tous droits réservés.</p>
          {config.bottom && (
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#747878]">{config.bottom}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
