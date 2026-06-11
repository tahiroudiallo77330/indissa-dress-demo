"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { n: "5", l: "Barbiers" },
  { n: "4.9★", l: "Google" },
  { n: "15+", l: "Ans d'art" },
  { n: "2 000+", l: "Clients" },
];

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [line1Ref.current, line2Ref.current];
    gsap.set(els, { yPercent: 110, opacity: 0, filter: "blur(8px)" });
    gsap.set(labelRef.current, { opacity: 0, y: 18 });
    gsap.set(subRef.current, { opacity: 0, y: 20 });
    gsap.set(statsRef.current, { opacity: 0, y: 24 });
    gsap.set(ctasRef.current, { opacity: 0, y: 24 });
    gsap.set(scrollRef.current, { opacity: 0 });
    gsap.set(bgRef.current, { scale: 1.08 });

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.to(bgRef.current, { scale: 1, duration: 3.0 }, 0)
      .to(labelRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
      .to(line1Ref.current, { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1.1 }, 0.6)
      .to(line2Ref.current, { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1.1 }, 0.78)
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.9 }, 1.0)
      .to(statsRef.current, { opacity: 1, y: 0, duration: 0.9 }, 1.15)
      .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.9 }, 1.28)
      .to(scrollRef.current, { opacity: 1, duration: 0.7 }, 1.6);

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0" style={{ willChange: "transform" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.22) saturate(0.7)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.5) 0%, transparent 40%, rgba(5,5,5,0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
        <div ref={labelRef} className="mb-8" style={{ willChange: "transform, opacity" }}>
          <span
            className="text-[10px] uppercase font-semibold"
            style={{
              letterSpacing: "5px",
              color: "#C9A84C",
              fontFamily: "var(--bl-font-body)",
            }}
          >
            Est. 2008 — Paris, France
          </span>
        </div>

        <div style={{ overflow: "hidden", marginBottom: "2px" }}>
          <div ref={line1Ref} style={{ willChange: "transform, opacity, filter" }}>
            <h1
              style={{
                fontFamily: "var(--bl-font-heading)",
                fontSize: "clamp(72px, 13vw, 190px)",
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: "#F5F0E8",
                margin: 0,
              }}
            >
              BLACK
            </h1>
          </div>
        </div>
        <div style={{ overflow: "hidden", marginBottom: "2.5rem" }}>
          <div ref={line2Ref} style={{ willChange: "transform, opacity, filter" }}>
            <h1
              style={{
                fontFamily: "var(--bl-font-heading)",
                fontSize: "clamp(72px, 13vw, 190px)",
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                fontStyle: "italic",
                color: "#C9A84C",
                margin: 0,
              }}
            >
              Lion
            </h1>
          </div>
        </div>

        <div ref={subRef} className="mb-14" style={{ willChange: "transform, opacity" }}>
          <p
            style={{
              fontFamily: "var(--bl-font-body)",
              color: "rgba(245,240,232,0.55)",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              fontWeight: 300,
              letterSpacing: "0.04em",
            }}
          >
            L'excellence au service de votre style
          </p>
        </div>

        <div
          ref={statsRef}
          className="flex flex-wrap gap-10 md:gap-16 mb-14"
          style={{ willChange: "transform, opacity" }}
        >
          {stats.map(({ n, l }) => (
            <div key={l} className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "var(--bl-font-heading)",
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 300,
                  color: "#F5F0E8",
                  lineHeight: 1,
                }}
              >
                {n}
              </span>
              <span
                style={{
                  fontFamily: "var(--bl-font-body)",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.4)",
                }}
              >
                {l}
              </span>
            </div>
          ))}
        </div>

        <div
          ref={ctasRef}
          className="flex flex-wrap gap-4"
          style={{ willChange: "transform, opacity" }}
        >
          <a
            href="#reservation"
            className="rounded-full font-semibold transition-all duration-300"
            style={{
              fontFamily: "var(--bl-font-body)",
              padding: "16px 36px",
              background: "#C9A84C",
              color: "#050505",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#D4B86A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
          >
            Prendre Rendez-Vous
          </a>
          <a
            href="#services"
            className="rounded-full transition-all duration-300"
            style={{
              fontFamily: "var(--bl-font-body)",
              padding: "16px 36px",
              border: "1px solid rgba(245,240,232,0.22)",
              color: "rgba(245,240,232,0.75)",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C9A84C";
              e.currentTarget.style.color = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,240,232,0.22)";
              e.currentTarget.style.color = "rgba(245,240,232,0.75)";
            }}
          >
            Voir les Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ willChange: "opacity" }}
      >
        <span
          style={{
            fontFamily: "var(--bl-font-body)",
            fontSize: "9px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.3)",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, rgba(201,168,76,0.7), transparent)",
            animation: "blPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes blPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.4; transform: scaleY(0.7); }
        }
      `}</style>
    </section>
  );
}
