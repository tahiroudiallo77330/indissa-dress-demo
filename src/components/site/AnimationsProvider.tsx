"use client";
import { useEffect } from "react";

export function AnimationsProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          if (el.classList.contains("stagger-group")) {
            const items = el.querySelectorAll<HTMLElement>(".stagger-item");
            items.forEach((item, index) => {
              const delay = parseFloat(item.getAttribute("data-delay") ?? "") || index * 0.1;
              setTimeout(() => item.classList.add("active"), delay * 1000);
            });
          } else {
            el.classList.add("active");
            el.querySelectorAll<HTMLElement>(".line-reveal").forEach((line) => line.classList.add("active"));
            el.querySelectorAll<HTMLElement>(".image-slow-zoom, .image-fade-in").forEach((img) => img.classList.add("active"));
          }

          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    const targets = document.querySelectorAll(".reveal-up, .stagger-group, .line-reveal, .image-fade-in");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
