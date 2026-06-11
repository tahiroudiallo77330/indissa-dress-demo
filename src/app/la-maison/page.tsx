import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import Link from "next/link";

export const metadata = {
  title: "Notre Histoire — Indissa Dress Paris",
  description: "Découvrez l'âme d'Indissa Dress Paris, maison de haute couture nuptiale née au cœur du 8ème arrondissement parisien.",
};

export default function LaMaisonPage() {
  return (
    <>
      <Header logo="text" />
      <main className="bg-[#fef9f1]">

        {/* ── Hero plein écran ────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-[72px] overflow-hidden">
          {/* Fond atelier placeholder */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, #f0ebe3 0%, #e4ddd4 60%, #ddd5cb 100%)",
            }}
          />
          {/* Texture lumière */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.8) 0%, transparent 70%)",
            }}
          />
          {/* Centre */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Badge ID */}
            <div className="w-[80px] h-[80px] rounded-full border border-[#1d1c17]/30 flex items-center justify-center mb-8">
              <div className="w-[70px] h-[70px] rounded-full border border-[#1d1c17]/20 flex items-center justify-center">
                <span className="font-serif text-[15px] tracking-[0.06em] text-[#1d1c17]/50">ID</span>
              </div>
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,6vw,4.2rem)] font-normal text-[#1d1c17] leading-[1.1] mb-6">
              L&apos;Âme de la Maison
            </h1>
            <div className="w-[480px] max-w-[90vw] h-px bg-[#1d1c17]/20 mb-6" />
            <p className="font-serif italic text-[16px] text-[#747878] max-w-[540px] text-center leading-relaxed">
              &ldquo;Là où chaque point raconte une histoire, là où la soie devient poésie.&rdquo;
            </p>
          </div>
        </section>

        {/* ── Notre Histoire ──────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

              {/* Texte gauche */}
              <div className="px-10 md:px-16 flex flex-col justify-center py-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4a882] mb-5">Notre Histoire</p>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#1d1c17] leading-[1.15] mb-8">
                  Un Savoir-Faire Éternel<br />né au cœur de Paris
                </h2>
                <p className="text-[14px] text-[#747878] leading-relaxed mb-6 max-w-[440px]">
                  Fondée dans l&apos;intimité d&apos;un atelier du 8ème arrondissement, Indissa Dress Paris incarne l&apos;alliance parfaite entre la rigueur architecturale et la fluidité éthérée. Notre maison ne crée pas seulement des robes ; elle sculpte des souvenirs en satin et en dentelle de Calais.
                </p>
                <p className="text-[14px] text-[#747878] leading-relaxed mb-10 max-w-[440px]">
                  Chaque création est le fruit d&apos;une quête obsessionnelle de l&apos;excellence. Nos couturières, gardiennes de gestes séculaires, travaillent avec une patience infinie pour donner vie à des pièces qui transcendent les tendances éphémères.
                </p>
                <hr className="border-[#e7e2da] mb-8 max-w-[440px]" />
                <div className="flex items-start gap-12">
                  <div>
                    <p className="font-serif text-[2rem] text-[#1d1c17] mb-1">120<span className="text-[1.2rem]">+</span></p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#747878]">Heures de travail</p>
                  </div>
                  <div>
                    <p className="font-serif text-[2rem] text-[#1d1c17] mb-1">30<span className="text-[1.2rem]">+</span></p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#747878]">Années de passion</p>
                  </div>
                </div>
              </div>

              {/* Photo droite — grande, bord à bord */}
              <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden"
                style={{ background: "linear-gradient(160deg, #c8b8a0 0%, #a89070 40%, #806040 100%)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="font-serif text-[10rem] text-white select-none">ID</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mosaïque photos Le Geste / La Matière ──────────── */}
        <section className="bg-[#fef9f1] pb-8">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid grid-cols-3 gap-4">

              {/* Col gauche : photo plein-hauteur + carte */}
              <div className="flex flex-col gap-4">
                <div
                  className="flex-1 min-h-[400px] overflow-hidden flex items-center justify-center"
                  style={{ background: "linear-gradient(to bottom, #d8d4ce 0%, #b8b4ae 100%)", filter: "grayscale(1)" }}
                >
                  <span className="font-serif text-[3rem] text-white/20 select-none">ID</span>
                </div>
                <div className="bg-white border border-[#e7e2da] p-6">
                  <h3 className="font-serif text-[18px] text-[#1d1c17] mb-3">Le Geste</h3>
                  <p className="font-serif italic text-[13px] text-[#747878]">
                    &ldquo;La précision n&apos;est pas une contrainte, c&apos;est une liberté.&rdquo;
                  </p>
                </div>
              </div>

              {/* Col centrale : 2 photos empilées avec cadre */}
              <div className="flex flex-col gap-3">
                <div className="bg-white border border-[#e7e2da] p-2 shadow-sm">
                  <div
                    className="aspect-[4/3] overflow-hidden"
                    style={{ background: "linear-gradient(160deg, #5a3a18 0%, #3a2010 100%)" }}
                  >
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                      <span className="font-serif text-[3rem] text-white select-none">ID</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e7e2da] p-2 shadow-sm">
                  <div
                    className="aspect-[4/3] overflow-hidden"
                    style={{ background: "linear-gradient(160deg, #2a2826 0%, #1a1816 100%)", filter: "grayscale(1)" }}
                  >
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                      <span className="font-serif text-[3rem] text-white select-none">ID</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Col droite : photo plein-hauteur + carte */}
              <div className="flex flex-col gap-4">
                <div
                  className="flex-1 min-h-[400px] overflow-hidden flex items-center justify-center"
                  style={{ background: "linear-gradient(to bottom, #f0ece4 0%, #ddd5c8 100%)" }}
                >
                  <span className="font-serif text-[3rem] text-[#ccc0b0]/40 select-none">ID</span>
                </div>
                <div className="bg-white border border-[#e7e2da] p-6">
                  <h3 className="font-serif text-[18px] text-[#1d1c17] mb-3">La Matière</h3>
                  <p className="text-[13px] text-[#747878] leading-relaxed">
                    Nous sélectionnons exclusivement des soies italiennes et des dentelles françaises de renommée mondiale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Le Processus Sur Mesure ─────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#fef9f1]">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#c4a882] mb-5">Notre Méthode</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1d1c17]">
                Le Processus Sur Mesure
              </h2>
            </div>

            {/* 3 étapes avec ligne */}
            <div className="relative">
              {/* Ligne horizontale */}
              <div className="absolute top-[40px] left-[calc(16.66%-20px)] right-[calc(16.66%-20px)] h-px bg-[#e7e2da]" />
              <div className="grid grid-cols-3 gap-8">
                {[
                  {
                    num: "01",
                    label: "Le Premier RDV",
                    desc: "Une rencontre privilégiée à l'atelier pour définir vos envies, votre morphologie et choisir vos matières premières.",
                  },
                  {
                    num: "02",
                    label: "Devis & Toile",
                    desc: "Élaboration d'un devis précis suivi de la réalisation d'une première toile en coton pour ajuster parfaitement le tombé.",
                  },
                  {
                    num: "03",
                    label: "Fabrication",
                    desc: "Fabrication artisanale dans notre atelier (4 à 8 semaines) incluant deux essayages finaux avant la livraison.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex flex-col items-center text-center">
                    <div className="w-[80px] h-[80px] rounded-full border border-[#1d1c17] flex items-center justify-center bg-[#fef9f1] z-10 mb-8">
                      <span className="font-serif text-[1.1rem] text-[#1d1c17]">{step.num}</span>
                    </div>
                    <h3 className="font-serif text-[17px] text-[#1d1c17] mb-4">{step.label}</h3>
                    <p className="text-[13px] text-[#747878] leading-relaxed max-w-[280px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA noir ────────────────────────────────────────── */}
        <section className="relative bg-[#0a0a0a] py-28 text-center overflow-hidden">
          <div className="relative z-10 max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.4rem)] font-normal text-white leading-[1.15] mb-6">
              Commencez Votre Histoire
            </h2>
            <p className="text-[14px] text-[#888] leading-relaxed mb-10 max-w-[520px] mx-auto">
              Chaque création commence par un échange. Réservez votre séance de consultation privée dans notre atelier parisien.
            </p>
            <Link
              href="/#contact"
              className="inline-block border border-white text-white text-[11px] uppercase tracking-[0.2em] px-12 py-4 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              Prendre rendez-vous à l&apos;atelier
            </Link>
          </div>
          {/* Watermark Indissa */}
          <span
            className="absolute bottom-4 right-8 font-serif text-[5rem] md:text-[7rem] select-none pointer-events-none"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            Indissa
          </span>
        </section>

      </main>
      <Footer variant="dark" />
    </>
  );
}
