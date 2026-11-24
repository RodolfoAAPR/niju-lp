import { useEffect, useRef, useState } from "react";

/* Carrossel deslizante com régua (celular e tablet): para marcos, níveis, planos ou objetos em sequência.
   Rolagem horizontal nativa com encaixe (scroll-snap). O JavaScript só descobre qual card está à vista, e só quando ele muda;
   a régua acende até esse card (--k / --pos, como a régua do desktop). */

export function useCarrossel<T extends HTMLElement>() {
  const trilho = useRef<T>(null);
  const [ativo, setAtivo] = useState(0);
  const [mexeu, setMexeu] = useState(false);
  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    // o card ativo é o mais perto do centro visível do trilho (com vários cards à vista,
    // o observador antigo marcava o último visível e as bolinhas andavam errado)
    let raf = 0;
    const medir = () => {
      raf = 0;
      const cards = Array.from(el.querySelectorAll(":scope > li")); // só os cards: listas dentro deles também são li
      if (!cards.length) return;
      const meio = el.scrollLeft + el.clientWidth / 2;
      let melhor = 0;
      let dist = Infinity;
      cards.forEach((li, i) => {
        const c = (li as HTMLElement).offsetLeft + (li as HTMLElement).offsetWidth / 2;
        const d = Math.abs(c - meio);
        if (d < dist) {
          dist = d;
          melhor = i;
        }
      });
      setAtivo((a) => (a === melhor ? a : melhor));
    };
    const pedir = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };
    el.addEventListener("scroll", pedir, { passive: true });
    addEventListener("resize", pedir);
    medir();
    const primeiraVez = () => setMexeu(true);
    el.addEventListener("scroll", primeiraVez, { passive: true, once: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", pedir);
      removeEventListener("resize", pedir);
      el.removeEventListener("scroll", primeiraVez);
    };
  }, []);
  const irPara = (i: number) => {
    const el = trilho.current;
    const li = el?.children[i] as HTMLElement | undefined;
    if (el && li) el.scrollTo({ left: li.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft), behavior: "smooth" });
  };
  return { trilho, ativo, mexeu, irPara };
}

/* régua: um nó por card numa linha que acende até o card à vista */
export function Regua({ rotulos, ativo, irPara, nome }: { rotulos: string[]; ativo: number; irPara: (i: number) => void; nome: (i: number) => string }) {
  const total = rotulos.length;
  return (
    <div className="relative" style={{ ["--k" as string]: ativo / (total - 1) }}>
      <div aria-hidden className="absolute left-[18px] right-[18px] top-[17px] h-px bg-[var(--lp-line)]">
        <div className="h-full origin-left bg-[var(--lp-city)] transition-transform duration-500 ease-[var(--lp-ease-out)]" style={{ transform: `scaleX(${ativo / (total - 1)})` }} />
      </div>
      <ol className="relative flex justify-between">
        {rotulos.map((r, i) => (
          <li key={r} className="flex w-9 flex-col items-center" style={{ ["--pos" as string]: i / (total - 1) }}>
            <button type="button" aria-label={nome(i)} aria-current={i === ativo} onClick={() => irPara(i)} className="lp-etapa-no lp-etapa-no--ouro">
              <span className="lp-etapa-num">{String(i + 1).padStart(2, "0")}</span>
            </button>
            <span className={`mt-2.5 whitespace-nowrap font-mono text-[10px] tracking-[0.08em] tabular-nums transition-colors duration-500 ${i <= ativo ? "text-[var(--lp-city)]" : "text-[var(--lp-text-2)]"}`}>
              {r}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function DicaArraste({ mexeu, className = "" }: { mexeu: boolean; className?: string }) {
  return (
    <p aria-hidden className={`lp-eyebrow transition-opacity duration-500 ${mexeu ? "opacity-0" : "opacity-100"} ${className}`}>
      Arraste para o lado →
    </p>
  );
}
