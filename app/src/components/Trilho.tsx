import { useEffect, useRef } from "react";
import { useSecaoAtiva } from "@/lib/useSecaoAtiva";
import { cn } from "@/lib/utils";

/* Trilho de capítulos na margem esquerda (só telas grandes): números, nomes e progresso de leitura. */

const trilho = [
  { href: "#produtos", num: "01", texto: "Produtos" },
  { href: "#engenharia", num: "02", texto: "Engenharia" },
  { href: "#portfolio", num: "03", texto: "Portfólio" },
  { href: "#duvidas", num: "04", texto: "Dúvidas" },
  { href: "#orcamento", num: "05", texto: "Orçamento" },
];

export default function Trilho() {
  const ativa = useSecaoAtiva(trilho.map((t) => t.href));
  const barra = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const k = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight);
      if (barra.current) barra.current.style.transform = `scaleY(${k.toFixed(4)})`;
    };
    const pedir = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };
    addEventListener("scroll", pedir, { passive: true });
    medir();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", pedir);
    };
  }, []);
  return (
    <nav aria-label="Capítulos" className="fixed bottom-0 left-6 top-0 z-[5] hidden w-[130px] min-[1420px]:block">
      <div aria-hidden className="absolute bottom-24 left-0 top-24 w-px bg-[var(--n-line)]">
        <div ref={barra} className="h-full w-full origin-top bg-[var(--n-accent-soft)]" style={{ transform: "scaleY(0)" }} />
      </div>
      <ol className="flex h-full flex-col justify-center gap-7 pl-4">
        {trilho.map((t) => (
          <li key={t.href}>
            <a href={t.href} aria-current={ativa === t.href ? "true" : undefined} className="group flex flex-col gap-1">
              <span className={cn("font-mono text-[11px] tracking-[0.2em] transition-colors", ativa === t.href ? "text-[var(--n-accent-soft)]" : "text-[var(--n-text-2)]")}>
                {t.num}
              </span>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                  ativa === t.href ? "text-[var(--n-text-1)]" : "text-[var(--n-text-2)] group-hover:text-[var(--n-text-1)]",
                )}
              >
                {t.texto}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
