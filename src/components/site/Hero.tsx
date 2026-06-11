import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden" style={{ background: "#1a1410" }}>
      {/* Fond éditorial — dégradé chaleureux ivoire/noir */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 65% 40%, #3a2e24 0%, #1a1410 60%)",
        }}
      />
      {/* Grain texture subtil */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />
      {/* Watermark éditorial */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none select-none">
        <span
          className="font-serif leading-none"
          style={{
            fontSize: "clamp(8rem, 22vw, 20rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            letterSpacing: "-0.02em",
          }}
        >
          ID
        </span>
      </div>

      {/* Contenu — calé à gauche, style éditorial */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-10 md:px-20 max-w-[1440px] mx-auto w-full">
        <div className="max-w-[620px]">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-6">
            Nouvelle Collection
          </p>
          <h1
            className="font-serif italic font-normal text-white mb-10"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: "1.05",
            }}
          >
            L&apos;Éclat de<br />l&apos;Éphémère
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/collections"
              className="inline-block border border-white text-white text-[11px] uppercase tracking-[0.2em] px-9 py-4 hover:bg-white hover:text-[var(--ink)] transition-all duration-300"
            >
              Découvrir les créations
            </Link>
            <Link
              href="/#contact"
              className="inline-block border border-white/50 text-white text-[11px] uppercase tracking-[0.2em] px-9 py-4 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
