import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";

export const revalidate = 300;

const ROBES_PLACEHOLDER = [
  { name: "L'Innocente", matiere: "Crêpe de soie & Dentelle de Calais", handle: "l-innocente" },
  { name: "La Divine", matiere: "Satin Duchesse architectural", handle: "la-divine" },
  { name: "L'Esmée", matiere: "Tulle de soie & Broderies main", handle: "l-esmee" },
  { name: "La Moderne", matiere: "Mikado de soie & Perles d'eau douce", handle: "la-moderne" },
  { name: "La Romance", matiere: "Dentelle de Chantilly & Organza", handle: "la-romance" },
  { name: "La Céleste", matiere: "Soie sauvage & Plumes d'autruche", handle: "la-celeste" },
];

export default async function CollectionsPage() {
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  try { products = await getProducts(12); } catch {}

  const useShopify = products.length > 0 && !products[0].title.toLowerCase().includes("minu");

  return (
    <>
      <Header />
      <main>

        {/* ── Hero titre ─────────────────────────────────────── */}
        <section className="pt-36 pb-16 text-center bg-[#fef9f1]">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal text-[#1d1c17] mb-5">
            Nouvelle Collection
          </h1>
          <p className="font-serif italic text-[clamp(0.9rem,1.5vw,1.1rem)] text-[#747878] max-w-[540px] mx-auto leading-relaxed">
            Une ode à la féminité parisienne, entre structures architecturales et légèreté éthérée.
          </p>
        </section>

        {/* ── Filtres ────────────────────────────────────────── */}
        <div className="bg-[#fef9f1] border-y border-[#e7e2da]">
          <div className="max-w-[1440px] mx-auto px-10 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {["Silhouette", "Matière", "Ligne"].map((f) => (
                <button key={f} className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#1d1c17] hover:text-[#c4a882] transition-colors">
                  {f}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#747878]">
              <span>{useShopify ? products.length : ROBES_PLACEHOLDER.length} Modèles</span>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <line x1="0" y1="2" x2="16" y2="2"/><line x1="0" y1="6" x2="16" y2="6"/><line x1="0" y1="10" x2="16" y2="10"/>
                <line x1="4" y1="0" x2="4" y2="4"/><line x1="12" y1="4" x2="12" y2="8"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ── Grille produits ────────────────────────────────── */}
        <section className="bg-[#fef9f1] py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {useShopify
                ? products.map((p) => {
                    const img = p.images[0];
                    return (
                      <Link key={p.id} href={`/products/${p.handle}`} className="group block">
                        <div className="relative aspect-[3/4] overflow-hidden bg-[#ede8e0] mb-4">
                          {img && (
                            <img
                              src={img.src}
                              alt={img.alt ?? p.title}
                              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
                            />
                          )}
                        </div>
                        <h3 className="font-serif text-[16px] text-[#1d1c17] mb-1">{p.title}</h3>
                        <p className="text-[12px] text-[#747878] mb-2">Création sur mesure</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#1d1c17]">Sur mesure</p>
                      </Link>
                    );
                  })
                : ROBES_PLACEHOLDER.map((r, i) => (
                    <Link key={r.name} href={`/products/${r.handle}`} className="group block">
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#ede8e0] mb-4 flex items-center justify-center">
                        <span className="font-serif text-[4rem] text-[#cec8c0] select-none">ID</span>
                      </div>
                      <h3 className="font-serif text-[16px] text-[#1d1c17] mb-1">{r.name}</h3>
                      <p className="text-[12px] text-[#747878] mb-2">{r.matiere}</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#1d1c17]">Sur mesure</p>
                    </Link>
                  ))
              }
            </div>
          </div>
        </section>

        {/* ── L'Art de la Mesure ─────────────────────────────── */}
        <section className="bg-[#fef9f1] py-0">
          <div className="max-w-[1440px] mx-auto px-10 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">

              {/* Carte crème gauche */}
              <div className="bg-white border border-[#e7e2da] p-12 md:p-16 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#747878] mb-6">Atelier</p>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#1d1c17] mb-6 leading-[1.15]">
                  L&apos;Art de la Mesure
                </h2>
                <p className="text-[13px] text-[#747878] leading-relaxed mb-10 max-w-[380px]">
                  Chaque création est une conversation intime entre la matière et la silhouette.
                  Dans notre atelier parisien, nous sculptons le tissu pour qu&apos;il devienne
                  votre seconde peau, révélant votre essence à travers un savoir-faire séculaire.
                </p>
                <div>
                  <Link
                    href="/#contact"
                    className="inline-block border border-[#1d1c17] text-[#1d1c17] text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#1d1c17] hover:text-white transition-all duration-300"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>

              {/* Photo atelier dorée droite — placeholder */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px] bg-[#2a2015] overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 70% 60% at 50% 60%, #5a4020 0%, #1a120a 70%)" }}
                />
                <span className="relative font-serif text-[6rem] select-none" style={{ color: "rgba(255,220,150,0.1)" }}>✦</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section B&W La Coupe / La Broderie ─────────────── */}
        <section className="bg-[#fef9f1] pt-16 pb-24">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid grid-cols-2 gap-6 relative">

              {/* Photo gauche (atelier, patrons) */}
              <div className="relative aspect-[3/4] bg-[#c8c4be] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#9a9690] to-[#6a6660]" style={{ filter: "grayscale(1)" }} />
                {/* Carte La Coupe */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 border border-[#e7e2da] p-6 m-4">
                  <h3 className="font-serif text-[18px] text-[#1d1c17] mb-2">La Coupe</h3>
                  <p className="text-[12px] text-[#747878] leading-relaxed">
                    L&apos;équilibre parfait entre structure et fluidité, né d&apos;un trait de crayon précis.
                  </p>
                </div>
              </div>

              {/* Photo droite (dentelle, aiguille) */}
              <div className="relative aspect-[3/4] bg-[#4a4642] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1816] to-[#6a6460]" style={{ filter: "grayscale(1)" }} />
                {/* Carte La Broderie — décalée vers le haut */}
                <div className="absolute top-1/3 left-0 right-0 bg-white/95 border border-[#e7e2da] p-6 m-4">
                  <h3 className="font-serif text-[18px] text-[#1d1c17] mb-2">La Broderie</h3>
                  <p className="text-[12px] text-[#747878] leading-relaxed">
                    Des milliers d&apos;heures de travail pour une pièce qui semble avoir toujours existé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
