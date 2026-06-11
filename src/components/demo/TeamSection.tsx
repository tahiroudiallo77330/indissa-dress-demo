"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Malik",
    title: "Head Barber",
    specialties: ["Skin Fade", "Design"],
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80",
    exp: "12 ans",
  },
  {
    name: "Yanis",
    title: "Fade Specialist",
    specialties: ["Low Fade", "Barbe"],
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&q=80",
    exp: "8 ans",
  },
  {
    name: "Jordan",
    title: "Style Expert",
    specialties: ["Textured", "Afro"],
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    exp: "6 ans",
  },
  {
    name: "Amine",
    title: "Beard Artist",
    specialties: ["Beard", "Rasage"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    exp: "10 ans",
  },
];

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = Array.from(gridRef.current.children);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, filter: "blur(4px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.8, ease: "expo.out", stagger: 0.12,
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === gridRef.current) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="equipe"
      ref={sectionRef}
      style={{ background: "#050505", padding: "120px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
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
            Les Artistes
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
            Notre <em style={{ color: "#C9A84C" }}>équipe</em>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                background: "#0C0C0C",
                border: "1px solid rgba(201,168,76,0.08)",
                transition: "border-color 0.4s, transform 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "280px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ filter: "brightness(0.65) saturate(0.85) grayscale(0.2)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter =
                      "brightness(0.85) saturate(1.0) grayscale(0)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter =
                      "brightness(0.65) saturate(0.85) grayscale(0.2)")
                  }
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 55%)",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "20px 20px 24px" }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--bl-font-heading)",
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "#F5F0E8",
                        lineHeight: 1.1,
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "11px",
                        color: "#C9A84C",
                        letterSpacing: "1px",
                        marginTop: "3px",
                      }}
                    >
                      {member.title}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--bl-font-body)",
                      fontSize: "10px",
                      color: "rgba(245,240,232,0.35)",
                      letterSpacing: "1px",
                      paddingTop: "4px",
                    }}
                  >
                    {member.exp}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "10px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.45)",
                        padding: "4px 10px",
                        border: "1px solid rgba(201,168,76,0.15)",
                        borderRadius: "100px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href="#reservation"
                  className="w-full flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    padding: "11px 0",
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    background: "rgba(201,168,76,0.08)",
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#C9A84C";
                    (e.currentTarget as HTMLElement).style.color = "#050505";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                  }}
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
