"use client";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section className="bg-[#f8f3eb] py-20 md:py-28 border-y border-[var(--border)]">
      <div className="max-w-[560px] mx-auto px-10 text-center">
        <div className="reveal-up">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-normal text-[var(--ink)] mb-4">
            Restez informée
          </h2>
          <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-10">
            Inscrivez-vous pour recevoir nos actualités, nos nouvelles collections et les
            dates de nos prochains essayages privés.
          </p>

          {sent ? (
            <p className="font-serif italic text-[var(--gold)] text-[15px]">
              Merci — nous vous recontacterons bientôt.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-0">
              {/* Input line-style */}
              <div className="relative flex-1">
                <label className="absolute -top-5 left-0 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                  Votre email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className="w-full bg-transparent border-b border-[var(--border)] focus:border-[var(--ink)] outline-none text-[13px] text-[var(--ink)] py-3 pr-4 placeholder-transparent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--ink)] text-white text-[11px] uppercase tracking-[0.2em] px-8 py-3 hover:bg-[var(--gold)] transition-colors duration-300 flex-shrink-0 sm:ml-4"
              >
                S&apos;inscrire
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
