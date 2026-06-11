"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    name: "Coupe + Fade",
    desc: "Dégradé complet travaillé au millimètre. Contours rasés au coupe-chou. Notre signature depuis 2008.",
    price: "25€",
    duration: "45 min",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80",
  },
  {
    num: "02",
    name: "Barbe & Contours",
    desc: "Taille précise, rasage au rasoir droit, baume chauffant. La barbe sculptée comme un art.",
    price: "18€",
    duration: "30 min",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=80",
  },
  {
    num: "03",
    name: "Rasage Traditionnel",
    desc: "Coupe-chou, serviette chaude, mousse fouettée à la main. Le rituel ultime du gentleman.",
    price: "30€",
    duration: "50 min",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80",
  },
  {
    num: "04",
    name: "Combo Prestige",
    desc: "Coupe + Fade + Barbe + Rasage. La séance complète. Deux heures de pure excellence.",
    price: "55€",
    duration: "2h",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 3D fold on section entry
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { rotationX: -14, yPercent: 3, opacity: 0.6, transformPerspective: 1600, transformOrigin: "50% 0%" },
        {
          rotationX: 0, yPercent: 0, opacity: 1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", end: "top 55%", scrub: 0.7 },
        }
      );
    }

    // Heading reveal
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { yPercent: 60, opacity: 0, filter: "blur(6px)" },
        {
          yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1.0, ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );
    }

    // IntersectionObserver for active service
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current || st.trigger === headingRef.current) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: "#050505", willChange: "transform, opacity" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-16">
        <div style={{ overflow: "hidden" }}>
          <div ref={headingRef} style={{ willChange: "transform, opacity, filter" }}>
            <span
              className="block mb-3"
              style={{
                fontFamily: "var(--bl-font-body)",
                fontSize: "10px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
              }}
            >
              Nos Prestations
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
              Des prestations{" "}
              <em style={{ color: "#C9A84C" }}>d'exception</em>
            </h2>
          </div>
        </div>
      </div>

      {/* Sticky layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16">
          {/* Left: sticky image */}
          <div className="hidden lg:block">
            <div className="sticky top-0 h-screen flex items-center">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ height: "70vh", maxHeight: "680px" }}
              >
                {services.map((s, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={s.img}
                    alt={s.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                    style={{
                      opacity: active === i ? 1 : 0,
                      filter: "brightness(0.7) saturate(0.9) contrast(1.05)",
                      transform: active === i ? "scale(1)" : "scale(1.04)",
                    }}
                  />
                ))}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)",
                  }}
                />
                <div
                  className="absolute bottom-6 left-6"
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.55)",
                  }}
                >
                  {services[active].num} — {services[active].name}
                </div>
              </div>
            </div>
          </div>

          {/* Right: service list */}
          <div className="flex flex-col">
            {services.map((s, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="group cursor-pointer"
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.12)",
                  padding: "48px 0",
                }}
                onClick={() => {
                  setActive(i);
                  document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    style={{
                      fontFamily: "var(--bl-font-body)",
                      fontSize: "11px",
                      letterSpacing: "3px",
                      color: "#C9A84C",
                      fontWeight: 600,
                    }}
                  >
                    {s.num}
                  </span>
                  <div className="flex gap-4 text-right">
                    <span
                      style={{
                        fontFamily: "var(--bl-font-heading)",
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "#F5F0E8",
                      }}
                    >
                      {s.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "12px",
                        color: "rgba(245,240,232,0.35)",
                        alignSelf: "center",
                      }}
                    >
                      {s.duration}
                    </span>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--bl-font-heading)",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 300,
                    lineHeight: 1.0,
                    letterSpacing: "-0.02em",
                    color: "#F5F0E8",
                    marginBottom: "16px",
                    transition: "color 0.3s",
                  }}
                  className="group-hover:text-[#C9A84C]"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(245,240,232,0.5)",
                    maxWidth: "420px",
                    marginBottom: "24px",
                  }}
                >
                  {s.desc}
                </p>
                {/* Mobile image */}
                <div
                  className="lg:hidden relative overflow-hidden rounded-xl mb-2"
                  style={{ height: "240px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.7) saturate(0.9)" }}
                  />
                </div>
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-2 transition-all duration-300"
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                >
                  Réserver
                  <span style={{ fontSize: "14px" }}>→</span>
                </a>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)", paddingBottom: "80px" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
