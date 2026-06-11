"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    text: "Malik c'est un artiste. Mon fade tient une semaine entière, les contours sont chirurgicaux. Je fais 40 km pour lui. Pas de débat.",
    author: "Karim D.",
    via: "Coiffé par Malik",
    stars: 5,
  },
  {
    text: "L'ambiance du shop c'est une autre vibe — on se sent dans un vrai barbershop de NYC. Et la qualité est au niveau de la déco.",
    author: "Mehdi S.",
    via: "Coiffé par Yanis",
    stars: 5,
  },
  {
    text: "Amine pour la barbe c'est un maître. Jamais eu une barbe aussi sculptée. Depuis que je suis allé là-bas, je ne vais plus ailleurs.",
    author: "Bilal T.",
    via: "Coiffé par Amine",
    stars: 5,
  },
];

export function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, filter: "blur(4px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.9, ease: "expo.out", stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%" },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === cardsRef.current) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="avis"
      ref={sectionRef}
      style={{ background: "#050505", padding: "120px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Top bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-20"
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.1)",
            paddingBottom: "40px",
          }}
        >
          <div className="flex items-center gap-6">
            <span
              style={{
                fontFamily: "var(--bl-font-heading)",
                fontSize: "clamp(56px, 8vw, 96px)",
                fontWeight: 300,
                color: "#F5F0E8",
                lineHeight: 1,
              }}
            >
              4.9
            </span>
            <div>
              <div style={{ color: "#C9A84C", fontSize: "20px", letterSpacing: "4px" }}>
                ★★★★★
              </div>
              <div
                style={{
                  fontFamily: "var(--bl-font-body)",
                  fontSize: "12px",
                  color: "rgba(245,240,232,0.4)",
                  letterSpacing: "1px",
                  marginTop: "4px",
                }}
              >
                250+ avis Google
              </div>
            </div>
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              fontFamily: "var(--bl-font-body)",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#C9A84C",
              border: "1px solid rgba(201,168,76,0.25)",
              padding: "12px 20px",
              borderRadius: "100px",
              transition: "all 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Laisser un avis →
          </a>
        </div>

        {/* Heading */}
        <div className="mb-16">
          <span
            style={{
              display: "block",
              fontFamily: "var(--bl-font-body)",
              fontSize: "10px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Témoignages
          </span>
          <h2
            style={{
              fontFamily: "var(--bl-font-heading)",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "#F5F0E8",
              margin: 0,
            }}
          >
            Ils sont{" "}
            <em style={{ color: "#C9A84C" }}>revenus.</em>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-3 gap-6"
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                padding: "32px",
                borderRadius: "16px",
                background: "#0C0C0C",
                border: "1px solid rgba(201,168,76,0.08)",
                transition: "border-color 0.4s, transform 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ color: "#C9A84C", fontSize: "14px", letterSpacing: "3px", marginBottom: "20px" }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontFamily: "var(--bl-font-body)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "28px",
                  fontStyle: "italic",
                }}
              >
                "{r.text}"
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "var(--bl-font-heading)",
                    fontSize: "18px",
                    color: "#F5F0E8",
                    fontWeight: 500,
                  }}
                >
                  {r.author}
                </div>
                <div
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    marginTop: "3px",
                  }}
                >
                  {r.via}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
