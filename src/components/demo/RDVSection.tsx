"use client";
import { useState } from "react";

const barbers = [
  { name: "Malik", title: "Head Barber" },
  { name: "Yanis", title: "Fade Specialist" },
  { name: "Jordan", title: "Style Expert" },
  { name: "Amine", title: "Beard Artist" },
  { name: "Dispo", title: "Premier disponible" },
];

const services = [
  { name: "Coupe + Fade", price: "25€" },
  { name: "Barbe & Contours", price: "18€" },
  { name: "Rasage Traditionnel", price: "30€" },
  { name: "Combo Prestige", price: "55€" },
];

function getUpcomingDays(n: number) {
  const days = [];
  const fr = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (days.length < n) {
    const dow = d.getDay();
    if (dow !== 0) {
      days.push({ num: d.getDate(), day: fr[dow], date: new Date(d) });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

export function RDVSection() {
  const [step, setStep] = useState(0);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const days = getUpcomingDays(8);

  const buildWhatsAppUrl = () => {
    const msg = encodeURIComponent(
      `Bonjour Black Lion 👋\n\n` +
        `Je souhaite réserver :\n` +
        `• Coiffeur : ${selectedBarber}\n` +
        `• Prestation : ${selectedService}\n` +
        `• Date souhaitée : ${selectedDate}\n` +
        `• Prénom : ${name}\n\n` +
        `Merci de confirmer le créneau !`
    );
    return `https://wa.me/33600000000?text=${msg}`;
  };

  const steps = ["Coiffeur", "Prestation", "Jour", "Infos"];

  return (
    <section
      id="reservation"
      style={{ background: "#0C0C0C", padding: "120px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
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
            Réservation
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
            Planifiez{" "}
            <em style={{ color: "#C9A84C" }}>votre visite</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  label: "Adresse",
                  lines: ["42 rue du Faubourg Saint-Antoine", "75011 Paris"],
                },
                {
                  icon: "📞",
                  label: "Téléphone",
                  lines: ["+33 6 00 00 00 00"],
                },
                {
                  icon: "🕐",
                  label: "Horaires",
                  lines: ["Mardi – Samedi", "9h30 – 19h30"],
                },
                {
                  icon: "💬",
                  label: "WhatsApp",
                  lines: ["Confirmation sous 30 min", "Annulation 24h avant"],
                },
              ].map(({ icon, label, lines }) => (
                <div
                  key={label}
                  className="flex items-start gap-4"
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    background: "#141414",
                    border: "1px solid rgba(201,168,76,0.08)",
                  }}
                >
                  <span style={{ fontSize: "18px", marginTop: "2px" }}>{icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        marginBottom: "4px",
                      }}
                    >
                      {label}
                    </div>
                    {lines.map((l) => (
                      <div
                        key={l}
                        style={{
                          fontFamily: "var(--bl-font-body)",
                          fontSize: "14px",
                          color: "rgba(245,240,232,0.65)",
                          lineHeight: 1.6,
                        }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3"
            style={{
              background: "#141414",
              borderRadius: "20px",
              border: "1px solid rgba(201,168,76,0.12)",
              padding: "clamp(24px, 4vw, 40px)",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                  }}
                >
                  ✓
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--bl-font-heading)",
                      fontSize: "32px",
                      color: "#F5F0E8",
                      marginBottom: "8px",
                    }}
                  >
                    Demande envoyée !
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--bl-font-body)",
                      fontSize: "15px",
                      color: "rgba(245,240,232,0.5)",
                    }}
                  >
                    On confirme votre créneau sous 30 min.
                  </div>
                </div>
                <button
                  onClick={() => { setSent(false); setStep(0); setSelectedBarber(null); setSelectedService(null); setSelectedDate(null); setName(""); setPhone(""); }}
                  style={{
                    fontFamily: "var(--bl-font-body)",
                    fontSize: "12px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-8">
                  {steps.map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <button
                        onClick={() => i < step && setStep(i)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          background: "none",
                          border: "none",
                          cursor: i < step ? "pointer" : "default",
                          padding: 0,
                        }}
                      >
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            fontFamily: "var(--bl-font-body)",
                            fontWeight: 600,
                            background: step > i ? "#C9A84C" : step === i ? "rgba(201,168,76,0.15)" : "rgba(245,240,232,0.06)",
                            color: step > i ? "#050505" : step === i ? "#C9A84C" : "rgba(245,240,232,0.3)",
                            border: step === i ? "1px solid rgba(201,168,76,0.4)" : "none",
                            transition: "all 0.3s",
                          }}
                        >
                          {step > i ? "✓" : i + 1}
                        </span>
                        <span
                          className="hidden sm:block"
                          style={{
                            fontFamily: "var(--bl-font-body)",
                            fontSize: "11px",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            color: step === i ? "#C9A84C" : "rgba(245,240,232,0.3)",
                            transition: "color 0.3s",
                          }}
                        >
                          {s}
                        </span>
                      </button>
                      {i < steps.length - 1 && (
                        <div
                          style={{
                            flex: 1,
                            height: "1px",
                            background: step > i ? "#C9A84C" : "rgba(245,240,232,0.08)",
                            transition: "background 0.3s",
                            minWidth: "16px",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 0: Choose barber */}
                {step === 0 && (
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.4)",
                        marginBottom: "20px",
                      }}
                    >
                      I — Ton coiffeur
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {barbers.map((b) => (
                        <button
                          key={b.name}
                          onClick={() => { setSelectedBarber(b.name); setStep(1); }}
                          style={{
                            padding: "16px 14px",
                            borderRadius: "12px",
                            border: selectedBarber === b.name ? "1px solid #C9A84C" : "1px solid rgba(201,168,76,0.12)",
                            background: selectedBarber === b.name ? "rgba(201,168,76,0.08)" : "#1C1C1C",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.25s",
                          }}
                          onMouseEnter={(e) => {
                            if (selectedBarber !== b.name) {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedBarber !== b.name) {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.12)";
                            }
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--bl-font-heading)",
                              fontSize: "18px",
                              color: "#F5F0E8",
                              marginBottom: "3px",
                            }}
                          >
                            {b.name}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--bl-font-body)",
                              fontSize: "10px",
                              letterSpacing: "1px",
                              color: "#C9A84C",
                            }}
                          >
                            {b.title}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 1: Choose service */}
                {step === 1 && (
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.4)",
                        marginBottom: "20px",
                      }}
                    >
                      II — La prestation
                    </div>
                    <div className="flex flex-col gap-3">
                      {services.map((s) => (
                        <button
                          key={s.name}
                          onClick={() => { setSelectedService(s.name); setStep(2); }}
                          style={{
                            padding: "18px 20px",
                            borderRadius: "12px",
                            border: selectedService === s.name ? "1px solid #C9A84C" : "1px solid rgba(201,168,76,0.12)",
                            background: selectedService === s.name ? "rgba(201,168,76,0.08)" : "#1C1C1C",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            transition: "all 0.25s",
                          }}
                          onMouseEnter={(e) => {
                            if (selectedService !== s.name) {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedService !== s.name) {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.12)";
                            }
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--bl-font-heading)",
                              fontSize: "20px",
                              color: "#F5F0E8",
                            }}
                          >
                            {s.name}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--bl-font-heading)",
                              fontSize: "22px",
                              color: "#C9A84C",
                            }}
                          >
                            {s.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Choose date */}
                {step === 2 && (
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.4)",
                        marginBottom: "20px",
                      }}
                    >
                      III — Le jour
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                      {days.map(({ num, day, date }) => {
                        const label = `${day} ${num}`;
                        return (
                          <button
                            key={label}
                            onClick={() => { setSelectedDate(label); setStep(3); }}
                            style={{
                              padding: "16px 8px",
                              borderRadius: "12px",
                              border: selectedDate === label ? "1px solid #C9A84C" : "1px solid rgba(201,168,76,0.12)",
                              background: selectedDate === label ? "rgba(201,168,76,0.08)" : "#1C1C1C",
                              cursor: "pointer",
                              textAlign: "center",
                              transition: "all 0.25s",
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "var(--bl-font-heading)",
                                fontSize: "26px",
                                fontWeight: 300,
                                color: "#F5F0E8",
                                lineHeight: 1,
                              }}
                            >
                              {num}
                            </div>
                            <div
                              style={{
                                fontFamily: "var(--bl-font-body)",
                                fontSize: "10px",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                                color: "#C9A84C",
                                marginTop: "4px",
                              }}
                            >
                              {day}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Enter info */}
                {step === 3 && (
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--bl-font-body)",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.4)",
                        marginBottom: "20px",
                      }}
                    >
                      IV — Tes infos
                    </div>
                    {/* Recap */}
                    <div
                      className="flex flex-wrap gap-3 mb-6"
                      style={{ padding: "14px 16px", borderRadius: "10px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}
                    >
                      {[selectedBarber, selectedService, selectedDate].map((v) => v && (
                        <span
                          key={v}
                          style={{
                            fontFamily: "var(--bl-font-body)",
                            fontSize: "12px",
                            color: "#C9A84C",
                            padding: "3px 10px",
                            borderRadius: "100px",
                            border: "1px solid rgba(201,168,76,0.2)",
                          }}
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontFamily: "var(--bl-font-body)",
                            fontSize: "10px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "rgba(245,240,232,0.4)",
                            marginBottom: "8px",
                          }}
                        >
                          Ton prénom *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Prénom"
                          required
                          style={{
                            width: "100%",
                            padding: "14px 16px",
                            borderRadius: "10px",
                            background: "#1C1C1C",
                            border: "1px solid rgba(201,168,76,0.15)",
                            color: "#F5F0E8",
                            fontFamily: "var(--bl-font-body)",
                            fontSize: "15px",
                            outline: "none",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A84C")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontFamily: "var(--bl-font-body)",
                            fontSize: "10px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "rgba(245,240,232,0.4)",
                            marginBottom: "8px",
                          }}
                        >
                          WhatsApp *
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+33 6 00 00 00 00"
                          required
                          style={{
                            width: "100%",
                            padding: "14px 16px",
                            borderRadius: "10px",
                            background: "#1C1C1C",
                            border: "1px solid rgba(201,168,76,0.15)",
                            color: "#F5F0E8",
                            fontFamily: "var(--bl-font-body)",
                            fontSize: "15px",
                            outline: "none",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A84C")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                        />
                      </div>
                      <a
                        href={name && phone ? buildWhatsAppUrl() : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { if (name && phone) setSent(true); }}
                        className="flex items-center justify-center gap-3 rounded-full transition-all duration-300"
                        style={{
                          marginTop: "8px",
                          padding: "18px 28px",
                          background: name && phone ? "#25D366" : "rgba(37,211,102,0.2)",
                          color: "#050505",
                          fontFamily: "var(--bl-font-body)",
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          cursor: name && phone ? "pointer" : "default",
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Confirmer sur WhatsApp
                      </a>
                      <p
                        style={{
                          fontFamily: "var(--bl-font-body)",
                          fontSize: "11px",
                          color: "rgba(245,240,232,0.3)",
                          textAlign: "center",
                        }}
                      >
                        Confirmation sous 30 min · Annulation 24h avant
                      </p>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
