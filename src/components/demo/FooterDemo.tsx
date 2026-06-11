"use client";

export function FooterDemo() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div
              style={{
                fontFamily: "var(--bl-font-heading)",
                fontSize: "40px",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginBottom: "16px",
              }}
            >
              Black <span style={{ color: "#C9A84C" }}>Lion</span>
            </div>
            <p
              style={{
                fontFamily: "var(--bl-font-body)",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.4)",
                maxWidth: "220px",
              }}
            >
              L'excellence au service de votre style. Paris, depuis 2008.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--bl-font-body)",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-3">
              {[
                "42 rue du Faubourg\nSaint-Antoine, 75011",
                "+33 6 00 00 00 00",
                "Mar – Sam · 9h30 – 19h30",
              ].map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    fontSize: "13px",
                    color: "rgba(245,240,232,0.45)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <div
              style={{
                fontFamily: "var(--bl-font-body)",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              L'Équipe
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: "Malik", title: "Head Barber" },
                { name: "Yanis", title: "Fade Specialist" },
                { name: "Jordan", title: "Style Expert" },
                { name: "Amine", title: "Beard Artist" },
              ].map(({ name, title }) => (
                <div key={name} className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: "var(--bl-font-body)",
                      fontSize: "13px",
                      color: "rgba(245,240,232,0.65)",
                      fontWeight: 500,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ color: "rgba(201,168,76,0.3)", fontSize: "10px" }}>·</span>
                  <span
                    style={{
                      fontFamily: "var(--bl-font-body)",
                      fontSize: "11px",
                      color: "rgba(245,240,232,0.3)",
                    }}
                  >
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <div
              style={{
                fontFamily: "var(--bl-font-body)",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Réserver
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#reservation"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--bl-font-body)",
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  transition: "gap 0.3s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "12px")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "8px")}
              >
                Prendre RDV →
              </a>
              <a
                href="#avis"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--bl-font-body)",
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.35)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.35)")}
              >
                ★ Laisser un avis
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: "28px" }}
        >
          <span
            style={{
              fontFamily: "var(--bl-font-body)",
              fontSize: "12px",
              color: "rgba(245,240,232,0.25)",
            }}
          >
            © {new Date().getFullYear()} Black Lion Barbershop — Est. 2008
          </span>
          <span
            style={{
              fontFamily: "var(--bl-font-body)",
              fontSize: "11px",
              color: "rgba(245,240,232,0.2)",
            }}
          >
            fait avec 💈 à Paris
          </span>
        </div>
      </div>
    </footer>
  );
}
