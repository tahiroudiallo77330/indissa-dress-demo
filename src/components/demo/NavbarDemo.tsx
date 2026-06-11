"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Équipe", href: "#equipe" },
  { label: "Réservation", href: "#reservation" },
  { label: "Avis", href: "#avis" },
];

export function NavbarDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ fontFamily: "var(--bl-font-body)" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4"
    >
      <div
        className="flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500"
        style={{
          background: scrolled ? "rgba(5,5,5,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(160%)" : "none",
          border: scrolled ? "1px solid rgba(201,168,76,0.18)" : "1px solid transparent",
          boxShadow: scrolled ? "0 24px 60px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <a
          href="#hero"
          style={{ fontFamily: "var(--bl-font-heading)" }}
          className="text-xl font-light italic text-[#F5F0E8] tracking-wide"
        >
          Black <span style={{ color: "#C9A84C" }}>Lion</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] uppercase tracking-[1.5px] transition-colors duration-300"
              style={{ color: "rgba(245,240,232,0.6)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#reservation"
          className="hidden md:flex items-center px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[1.5px] font-semibold transition-all duration-300"
          style={{ background: "#C9A84C", color: "#050505" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#D4B86A")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
        >
          Prendre RDV
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 flex flex-col gap-[5px]"
          aria-label="Menu"
        >
          <span
            className="block w-6 h-[1.5px] transition-all duration-300"
            style={{
              background: "#F5F0E8",
              transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-[1.5px] transition-all duration-300"
            style={{ background: "#F5F0E8", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[1.5px] transition-all duration-300"
            style={{
              background: "#F5F0E8",
              transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none",
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl p-6 flex flex-col gap-5"
          style={{
            background: "rgba(5,5,5,0.96)",
            backdropFilter: "blur(28px)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[13px] uppercase tracking-[2px] transition-colors duration-300"
              style={{ color: "rgba(245,240,232,0.75)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setMenuOpen(false)}
            className="mt-1 text-center py-3 rounded-full text-[11px] uppercase tracking-[1.5px] font-semibold"
            style={{ background: "#C9A84C", color: "#050505" }}
          >
            Prendre RDV
          </a>
        </div>
      )}
    </nav>
  );
}
