import { useEffect } from "react";

/* Raios azuis no clique, como os da LP de referência: cada toque solta um leque de
   raios que voam para fora e somem. Barato (transform e opacidade) e desligado
   com movimento reduzido. */

export default function EfeitoClique() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const soltar = (e: PointerEvent) => {
      for (let i = 0; i < 10; i++) {
        const s = document.createElement("span");
        s.className = "lp-raio";
        const ang = (i / 10) * Math.PI * 2 + Math.random() * 0.5;
        s.style.left = `${e.clientX}px`;
        s.style.top = `${e.clientY}px`;
        s.style.setProperty("--rot", `${((ang * 180) / Math.PI + 90).toFixed(1)}deg`);
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 850);
      }
    };
    addEventListener("pointerdown", soltar, { passive: true });
    return () => removeEventListener("pointerdown", soltar);
  }, []);
  return null;
}
