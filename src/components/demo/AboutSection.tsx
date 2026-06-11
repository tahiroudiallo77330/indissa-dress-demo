"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { yPercent: 14 },
        {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (textRef.current) {
      const children = Array.from(textRef.current.children);
      gsap.fromTo(
        children,
        { opacity: 0, y: 40, filter: "blur(4px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.9, ease: "expo.out", stagger: 0.12,
          scrollTrigger: { trigger: textRef.current, start: "top 80%" },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current || st.trigger === textRef.current) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="apropos"
      ref={sectionRef}
      style={{ background: "#0C0C0C", padding: "120px 0", overflow: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className="relative overflow-hidden rounded-2xl order-2 lg:order-1"
            style={{ height: "clamp(400px, 60vh, 700px)" }}
          >
            <div ref={imgRef} className="absolute inset-[-15%] will-change-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1589394815049-964e7177f9c0?w=1200&q=80"
                alt="Black Lion Barbershop intérieur"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.75) saturate(0.85) contrast(1.08)" }}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(5,5,5,0.3) 0%, transparent 60%)",
              }}
            />
            {/* Badge */}
            <div
              className="absolute top-6 right-6 rounded-full flex items-center justify-center"
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid rgba(201,168,76,0.4)",
                background: "rgba(5,5,5,0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="text-center">
                <div
                  style={{
                    fontFamily: "var(--bl-font-heading)",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "#C9A84C",
                    lineHeight: 1,
                  }}
                >
                  15
                </div>
                <div
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.5)",
                    marginTop: "3px",
                  }}
                >
                  Ans
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="order-1 lg:order-2">
            <span
              style={{
                display: "block",
                fontFamily: "var(--bl-font-body)",
                fontSize: "10px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              À Propos de Nous
            </span>
            <h2
              style={{
                fontFamily: "var(--bl-font-heading)",
                fontSize: "clamp(44px, 6vw, 80px)",
                fontWeight: 300,
                lineHeight: 0.97,
                letterSpacing: "-0.025em",
                color: "#F5F0E8",
                marginBottom: "32px",
              }}
            >
              L'art du{" "}
              <em style={{ color: "#C9A84C" }}>barbier</em>
              <br />
              perpétué
            </h2>
            <p
              style={{
                fontFamily: "var(--bl-font-body)",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.55)",
                marginBottom: "20px",
              }}
            >
              Fondé en 2008 au cœur de Paris, Black Lion incarne une philosophie
              simple : chaque client mérite un service d'exception. Nos maîtres
              barbiers perpétuent un savoir-faire artisanal allié aux techniques
              contemporaines les plus exigeantes.
            </p>
            <p
              style={{
                fontFamily: "var(--bl-font-body)",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.55)",
                marginBottom: "48px",
              }}
            >
              Ici, on ne coupe pas des cheveux. On sculpte une identité.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { n: "2 000+", l: "Clients satisfaits" },
                { n: "5", l: "Barbiers experts" },
                { n: "15+", l: "Ans d'expérience" },
                { n: "6j/7", l: "Ouvert chaque semaine" },
              ].map(({ n, l }) => (
                <div
                  key={l}
                  style={{ borderTop: "1px solid rgba(201,168,76,0.12)", paddingTop: "20px" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--bl-font-heading)",
                      fontSize: "38px",
                      fontWeight: 300,
                      color: "#F5F0E8",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--bl-font-body)",
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      color: "rgba(245,240,232,0.4)",
                      marginTop: "6px",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
