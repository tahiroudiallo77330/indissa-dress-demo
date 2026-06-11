const items = [
  "Coupes",
  "Fades",
  "Barbes",
  "Rasage",
  "Paris",
  "Est. 2008",
  "Coupes",
  "Fades",
  "Barbes",
  "Rasage",
  "Paris",
  "Est. 2008",
];

const DOT = "·";

export function MarqueeSection() {
  return (
    <div
      className="overflow-hidden"
      style={{ background: "#C9A84C", padding: "18px 0" }}
    >
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animation: "blMarquee 22s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              style={{
                fontFamily: "var(--bl-font-heading)",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#050505",
                letterSpacing: "-0.01em",
                padding: "0 28px",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "rgba(5,5,5,0.35)",
                fontSize: "8px",
                letterSpacing: "2px",
              }}
            >
              {DOT}
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes blMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
