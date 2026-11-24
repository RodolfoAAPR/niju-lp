import { useState } from "react";
import { Minus, Plus } from "lucide-react";

/* Mapa da fábrica em 3 níveis de zoom (ladrilhos OSM servidos no site, sem chave).
   O alfinete é a logo da Niju, posicionado no ponto exato em cada nível. */

const niveis = [
  { base: "assets/mapa-niju-", pin: [40.2, 47.3] },
  { base: "assets/mapa-niju-z18-", pin: [30.4, 44.6] },
  { base: "assets/mapa-niju-z19-", pin: [10.79, 39.21] },
];

export default function Mapa() {
  const [nivel, setNivel] = useState(0);
  const n = niveis[nivel];
  return (
    <figure className="overflow-hidden rounded-xl border border-[var(--n-line)]">
      <div role="img" aria-label="Mapa da fábrica Niju na Rua Delfim Moreira, Chapecó" className="relative grid grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <img key={`${nivel}-${i}`} src={`${n.base}${i}.png`} alt="" aria-hidden loading="lazy" decoding="async" className="lp-msg block aspect-square w-full" />
        ))}
        <span aria-hidden className="lp-mapa-pin absolute -translate-x-1/2 -translate-y-full" style={{ left: `${n.pin[0]}%`, top: `${n.pin[1]}%` }}>
          <img src="assets/logo-niju.png" alt="" className="block w-20" />
        </span>
        <div className="absolute bottom-3 right-3 flex flex-col gap-2">
          <button
            type="button"
            aria-label="Aproximar mapa"
            disabled={nivel >= niveis.length - 1}
            onClick={() => setNivel((v) => Math.min(niveis.length - 1, v + 1))}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--n-line)] bg-[rgba(16,20,24,0.9)] text-white transition-opacity disabled:cursor-default disabled:opacity-30"
          >
            <Plus size={18} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Afastar mapa"
            disabled={nivel <= 0}
            onClick={() => setNivel((v) => Math.max(0, v - 1))}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--n-line)] bg-[rgba(16,20,24,0.9)] text-white transition-opacity disabled:cursor-default disabled:opacity-30"
          >
            <Minus size={18} aria-hidden />
          </button>
        </div>
      </div>
      <figcaption className="bg-[var(--n-canvas)] px-4 py-2 font-mono text-[10px] tracking-[0.08em] text-[var(--n-text-2)]">
        Mapa © OpenStreetMap
      </figcaption>
    </figure>
  );
}
