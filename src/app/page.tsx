import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Newsletter } from "@/components/site/Newsletter";
import { getProducts } from "@/lib/shopify";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 300;

export default async function Home() {
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  try { products = await getProducts(3); } catch {}

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* ── Section Nos Créations ──────────────────────────── */}
        <section className="py-24 md:py-32 max-w-[1440px] mx-auto px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Les robes</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal text-[var(--ink)] leading-[1.1]">
                Nos Créations
              </h2>
            </div>
            <Link
              href="/collections"
              className="reveal-up text-[11px] uppercase tracking-[0.2em] text-[var(--ink)] hover:text-[var(--gold)] transition-colors border-b border-[var(--ink)] hover:border-[var(--gold)] pb-0.5 self-start md:self-auto"
            >
              Voir toutes les robes →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 stagger-group">
            {products.length > 0
              ? products.map((p, i) => (
                  <div key={p.id} className="stagger-item group" data-delay={String(i * 0.15)}>
                    <Link href={`/products/${p.handle}`} className="block relative overflow-hidden aspect-[3/4] mb-4 bg-[#ede8e0]">
                      {p.images[0] ? (
                        <Image
                          src={p.images[0].src}
                          alt={p.images[0].alt ?? p.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-serif text-[5rem] text-[#d5cfc7] select-none">ID</span>
                        </div>
                      )}
                    </Link>
                    <h3 className="font-serif text-[15px] text-[var(--ink)] mb-1">{p.title}</h3>
                    <p className="text-[12px] text-[var(--muted)] italic">Création sur mesure</p>
                  </div>
                ))
              : [
                  { name: "Robe Céleste", matiere: "Soie duchesse & dentelle" },
                  { name: "Robe Aurore", matiere: "Crêpe de soie & broderie" },
                  { name: "Robe Lumière", matiere: "Organza & fil d'or" },
                ].map((item, i) => (
                  <div key={item.name} className="stagger-item group" data-delay={String(i * 0.15)}>
                    <Link href="/collections" className="block relative overflow-hidden aspect-[3/4] mb-4 bg-[#ede8e0] flex items-center justify-center">
                      <span className="font-serif text-[5rem] text-[#d5cfc7] select-none">ID</span>
                    </Link>
                    <h3 className="font-serif text-[15px] text-[var(--ink)] mb-1">{item.name}</h3>
                    <p className="text-[12px] text-[var(--muted)] italic">{item.matiere}</p>
                  </div>
                ))
            }
          </div>
        </section>

        {/* ── Section Le Savoir-faire ───────────────────────── */}
        <section id="savoir-faire" className="bg-[#f8f3eb] py-24 md:py-32 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

              {/* Image principale + image overlapping — placeholders */}
              <div className="relative reveal-up">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e2da] flex items-center justify-center">
                  <span className="font-serif text-[6rem] text-[#cec8c0] select-none">ID</span>
                </div>
                {/* Petite photo overlapping */}
                <div className="absolute -bottom-8 -right-6 w-[45%] aspect-square overflow-hidden border-4 border-[#f8f3eb] bg-[#d5cfc7] flex items-center justify-center">
                  <span className="font-serif text-[2rem] text-[#bbb5ae] select-none">✦</span>
                </div>
              </div>

              {/* Texte */}
              <div className="md:pl-6 reveal-up">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] mb-6">L&apos;excellence</p>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-normal text-[var(--ink)] leading-[1.15] mb-8">
                  Un savoir-faire<br />d&apos;exception
                </h2>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-8 max-w-[420px]">
                  Chaque robe naît d&apos;un dialogue entre la mariée et notre atelier. De l&apos;esquisse initiale
                  au dernier point de couture, l&apos;excellence guide chaque geste.
                </p>

                {/* Liste numérotée */}
                <ol className="space-y-5 mb-10">
                  {[
                    { n: "01", label: "La Consultation", desc: "Un rendez-vous privé pour comprendre votre vision" },
                    { n: "02", label: "La Création", desc: "Patrons sur mesure taillés pour votre silhouette" },
                    { n: "03", label: "L'Atelier", desc: "Confection à la main dans notre atelier parisien" },
                  ].map((item) => (
                    <li key={item.n} className="flex gap-5 items-start">
                      <span className="font-serif text-[11px] text-[var(--gold)] mt-0.5 flex-shrink-0">{item.n}</span>
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.15em] text-[var(--ink)] mb-1">{item.label}</p>
                        <p className="text-[12px] text-[var(--muted)]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <Link
                  href="/#contact"
                  className="inline-block border border-[var(--ink)] text-[var(--ink)] text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-[var(--ink)] hover:text-white transition-all duration-300"
                >
                  Découvrir l&apos;atelier
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section Vision Singulière ─────────────────────── */}
        <section className="py-24 md:py-32 max-w-[1440px] mx-auto px-10">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="reveal-up">
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] italic font-normal text-[var(--ink)] leading-[1.05]">
                Une vision<br />singulière,<br />née à Paris.
              </h2>
            </div>
            <div className="md:text-right reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">Notre maison</p>
            </div>
          </div>
        </section>

        {/* ── Section Notre Maison ──────────────────────────── */}
        <section className="bg-[#f2ede5] py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

              {/* Photo atelier — placeholder */}
              <div className="relative aspect-[4/5] overflow-hidden reveal-up bg-[#e0dbd4] flex items-center justify-center">
                <span className="font-serif text-[7rem] text-[#cec8c0] select-none">ID</span>
              </div>

              {/* Texte */}
              <div className="reveal-up">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] mb-6">Notre philosophie</p>
                <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-normal text-[var(--ink)] leading-[1.2] mb-7">
                  Une maison née<br />d&apos;une passion
                </h2>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-6 max-w-[420px]">
                  Indissa Dress Paris est née d&apos;une conviction : chaque mariée mérite une robe
                  qui lui ressemble, pensée dans les moindres détails, cousue avec amour et expertise.
                </p>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-10 max-w-[420px]">
                  Basée à Paris, notre maison propose des créations sur mesure alliant
                  élégance intemporelle et modernité audacieuse.
                </p>

                {/* Citation italique */}
                <blockquote className="border-l-2 border-[var(--gold)] pl-5 mb-10">
                  <p className="font-serif text-[15px] italic text-[var(--ink)] leading-relaxed">
                    &ldquo;De la première esquisse jusqu&apos;à l&apos;essayage final,<br />
                    nous vous accompagnons à chaque étape.&rdquo;
                  </p>
                </blockquote>

                <Link
                  href="/#contact"
                  className="text-[11px] uppercase tracking-[0.2em] text-[var(--ink)] hover:text-[var(--gold)] transition-colors border-b border-[var(--ink)] hover:border-[var(--gold)] pb-0.5"
                >
                  Notre philosophie →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section Paroles de Mariées ────────────────────── */}
        <section className="py-24 md:py-32 max-w-[1440px] mx-auto px-10">
          <div className="text-center mb-16 reveal-up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] mb-5">Témoignages</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] italic font-normal text-[var(--ink)]">
              Paroles de Mariées
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-group">
            {[
              {
                quote: "Un moment suspendu, plein de temps. Ma robe était exactement ce que j'avais imaginée : sobre, élégante et d'une qualité incomparable.",
                name: "Marie-Laure",
                date: "Juin 2025",
              },
              {
                quote: "L'expérience à l'atelier est unique. On sent la passion et le dévouement dans chaque étape du processus. Je suis sortie moi-même, tout simplement.",
                name: "Alexandra",
                date: "Septembre 2025",
              },
              {
                quote: "Les détails de la dentelle sont éblouissants. C'est une robe que je garderai toute ma vie comme un objet d'art.",
                name: "Clémence",
                date: "Décembre 2025",
              },
            ].map((t, i) => (
              <div key={i} className="stagger-item bg-white border border-[var(--border)] p-8 md:p-10" data-delay={String(i * 0.15)}>
                {/* Avatar rond */}
                <div className="w-10 h-10 rounded-full bg-[#e7e2da] mb-6 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-[#e0d8cf] to-[#c4b8aa]" />
                </div>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.15em] text-[var(--ink)] font-medium">{t.name}</p>
                  <p className="text-[11px] text-[var(--muted)] mt-0.5">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section Newsletter ────────────────────────────── */}
        <Newsletter />

        {/* ── Section Contact / Rendez-vous ─────────────────── */}
        <section id="contact" className="py-24 md:py-32 bg-[var(--ink)]">
          <div className="max-w-[700px] mx-auto px-10 text-center">
            <div className="reveal-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] mb-6">Rendez-vous privé</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal text-white leading-[1.15] mb-7">
                Rencontrons-nous
              </h2>
              <p className="text-[13px] text-white/60 leading-relaxed mb-10 max-w-[440px] mx-auto">
                Chaque robe commence par une conversation. Contactez-nous pour planifier
                votre rendez-vous privatif dans notre atelier parisien.
              </p>
              <a
                href="mailto:indissadressparis@gmail.com"
                className="inline-block border border-white text-white text-[11px] uppercase tracking-[0.2em] px-12 py-4 hover:bg-white hover:text-[var(--ink)] transition-all duration-300 mb-5"
              >
                Prendre rendez-vous
              </a>
              <p className="text-white/40 text-[12px]">indissadressparis@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
