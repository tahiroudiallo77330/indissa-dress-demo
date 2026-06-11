import Link from "next/link";

type FooterVariant = "default" | "maison" | "product" | "dark";

const LIGHT_CONFIGS: Record<"default" | "maison" | "product", {
  cols: { heading: string; links: { href: string; label: string }[] }[];
  tagline?: string;
  bottom?: string;
}> = {
  default: {
    cols: [
      { heading: "Collection", links: [{ href: "/collections", label: "Robes de Mariée" }, { href: "/collections", label: "Robes de Soirée" }, { href: "/collections", label: "Accessoires" }] },
      { heading: "Maison", links: [{ href: "/la-maison", label: "Notre Histoire" }, { href: "/#savoir-faire", label: "Savoir-faire" }, { href: "/#savoir-faire", label: "Atelier" }] },
      { heading: "Aide", links: [{ href: "/#contact", label: "Contact" }, { href: "/#contact", label: "Prendre RDV" }, { href: "#", label: "Mentions Légales" }] },
    ],
  },
  product: {
    tagline: "L'excellence de la haute couture parisienne au service de vos moments d'exception.",
    bottom: "PARIS • 8ÈME ARRONDISSEMENT",
    cols: [
      { heading: "Boutique", links: [{ href: "/#savoir-faire", label: "Atelier" }, { href: "/#contact", label: "Rendez-vous" }, { href: "/#contact", label: "Contact" }] },
      { heading: "Légal", links: [{ href: "#", label: "Mentions Légales" }, { href: "#", label: "Confidentialité" }, { href: "/#contact", label: "Presse" }] },
      { heading: "Social", links: [{ href: "#", label: "Instagram" }, { href: "#", label: "Pinterest" }] },
    ],
  },
  maison: {
    cols: [
      { heading: "Maison", links: [{ href: "/la-maison", label: "La Maison" }, { href: "/#savoir-faire", label: "Atelier" }, { href: "/#contact", label: "Presse" }] },
      { heading: "Services", links: [{ href: "/#contact", label: "Contact" }, { href: "/#contact", label: "Rendez-vous" }, { href: "#", label: "Instagram" }] },
      { heading: "Légal", links: [{ href: "#", label: "Mentions Légales" }, { href: "#", label: "Confidentialité" }] },
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
                { href: "/la-maison", label: "Services" },
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
                { href: "#", label: "Guide des Tailles" },
                { href: "#", label: "FAQ" },
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
            <p className="text-[13px] text-[#888] mb-8">75008 Paris, France</p>
            <p className="text-[11px] text-[#444] leading-relaxed">© 2024 Indissa Dress Paris.<br />Savoir-faire éternel.</p>
          </div>
        </div>
      </footer>
    );
  }

  /* ── Variantes claires ───────────────────────────────── */
  const { cols } = LIGHT_CONFIGS[variant as "default" | "maison" | "product"];

  return (
    <footer className="bg-[#fef9f1] border-t border-[#e7e2da]">
      <div className="max-w-[1440px] mx-auto px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div className="md:col-span-1">
          <p className="font-serif text-[16px] font-semibold text-[#1d1c17] mb-4">Indissa Dress Paris</p>
          <p className="text-[13px] text-[#747878] leading-relaxed max-w-[240px]">
            {LIGHT_CONFIGS[variant as "default" | "maison" | "product"].tagline ?? "L'excellence du sur-mesure au cœur de Paris."}
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.heading}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#747878] mb-5">{col.heading}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-[#1d1c17] hover:text-[#c4a882] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#e7e2da]">
        <div className="max-w-[1440px] mx-auto px-10 py-4 flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#747878]">© 2026 Indissa Dress Paris. Tous droits réservés.</p>
          {LIGHT_CONFIGS[variant as "default" | "maison" | "product"].bottom && (
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#747878]">
              {LIGHT_CONFIGS[variant as "default" | "maison" | "product"].bottom}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
