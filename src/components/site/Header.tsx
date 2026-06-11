"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";
import { useState } from "react";
import { usePathname } from "next/navigation";

type HeaderLogo = "circle" | "text";

export function Header({ logo = "circle" }: { logo?: HeaderLogo }) {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const Hamburger = () => (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-[#1d1c17] hover:text-[#c4a882] transition-colors"
      aria-label="Menu"
    >
      {menuOpen
        ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
      }
    </button>
  );

  const BagBtn = () => (
    <button
      onClick={() => setOpen(true)}
      className="relative text-[#1d1c17] hover:text-[#c4a882] transition-colors"
      aria-label="Panier"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#c4a882] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
          {count}
        </span>
      )}
    </button>
  );

  /* ── Variante TEXTE : INDISSA centré, nav à droite ── */
  if (logo === "text") {
    const textLinks = [
      { href: "/collections", label: "Créations" },
      { href: "/collections", label: "Collections" },
      { href: "/la-maison", label: "L'Atelier" },
    ];
    return (
      <header className="fixed top-0 left-0 right-0 z-30 bg-[#fef9f1] border-b border-[#e7e2da]">
        <div className="max-w-[1440px] mx-auto px-8 h-[72px] flex items-center justify-between relative">
          <Hamburger />
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
              <Image src="/logo-indissa.png" alt="Indissa Dress Paris" width={52} height={52} className="w-full h-full object-cover object-[50%_30%]" />
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {textLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`text-[13px] text-[#1d1c17] hover:text-[#c4a882] transition-colors ${
                    pathname === l.href ? "border-b border-[#1d1c17] pb-0.5" : ""
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <BagBtn />
          </div>
        </div>
        {menuOpen && (
          <div className="bg-[#fef9f1] border-t border-[#e7e2da] px-8 py-6 flex flex-col gap-5">
            {textLinks.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-[13px] text-[#1d1c17] hover:text-[#c4a882] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    );
  }

  /* ── Variante CIRCLE : logo ID centré, nav des deux côtés ── */
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#fef9f1] border-b border-[#e7e2da]">
      <div className="max-w-[1440px] mx-auto px-8 h-[72px] flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          <Hamburger />
          <nav className="hidden md:flex items-center gap-9">
            <Link href="/collections" className="text-[11px] uppercase tracking-[0.18em] text-[#1d1c17] hover:text-[#c4a882] transition-colors">Créations</Link>
            <Link href="/la-maison" className="text-[11px] uppercase tracking-[0.18em] text-[#1d1c17] hover:text-[#c4a882] transition-colors">L&apos;Atelier</Link>
          </nav>
        </div>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="w-[52px] h-[52px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
            <Image src="/logo-indissa.png" alt="Indissa Dress Paris" width={52} height={52} className="w-full h-full object-cover object-[50%_30%]" />
          </div>
        </Link>
        <div className="flex items-center gap-9">
          <nav className="hidden md:flex items-center gap-9">
            <Link href="/collections" className="text-[11px] uppercase tracking-[0.18em] text-[#1d1c17] hover:text-[#c4a882] transition-colors">Collections</Link>
            <Link href="/#contact" className="text-[11px] uppercase tracking-[0.18em] text-[#1d1c17] hover:text-[#c4a882] transition-colors">Contact</Link>
          </nav>
          <BagBtn />
        </div>
      </div>
      {menuOpen && (
        <div className="bg-[#fef9f1] border-t border-[#e7e2da] px-8 py-6 flex flex-col gap-5">
          {[
            { href: "/collections", label: "Créations" },
            { href: "/la-maison", label: "L'Atelier" },
            { href: "/collections", label: "Collections" },
            { href: "/#contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-[11px] uppercase tracking-[0.18em] text-[#1d1c17] hover:text-[#c4a882] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
