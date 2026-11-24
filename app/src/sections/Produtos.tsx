import { useState } from "react";
import { Capitulo, Corpo, Titulo } from "@/components/Editorial";
import { DicaArraste, Regua, useCarrossel } from "@/components/CarrosselRegua";
import FichaModal, { escolherProduto, fichas } from "@/components/FichaModal";
import { cn } from "@/lib/utils";

/* Produtos: abas no desktop, carrossel no celular. A foto abre a ficha completa em modal. */

const produtos = [
  {
    id: "paleteiro",
    nome: "Semirreboque frigorífico paleteiro",
    linha: "Assoalho em dois modelos e a Geladeira, criação da casa.",
    foto: "assets/ficha-paleteiro.jpg",
  },
  {
    id: "gancheiro",
    nome: "Semirreboque frigorífico gancheiro",
    linha: "O frigorífico gancheiro com o quadro inox exclusivo.",
    foto: "assets/ficha-gancheiro.jpg",
  },
  {
    id: "metalico",
    nome: "Baú metálico",
    linha: "Assoalho trapezoidal e construção certificada ISO 9001.",
    foto: "assets/ficha-bau-metalico.jpg",
  },
  {
    id: "plastico",
    nome: "Baú plástico",
    linha: "Com reservatório de água e caixa de ferramenta acoplados.",
    foto: "assets/ficha-bau-plastico.jpg",
  },
];

function Card({ p, onFicha }: { p: (typeof produtos)[number]; onFicha: (id: string) => void }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)]">
      <button type="button" onClick={() => onFicha(p.id)} aria-label={`Ver ficha completa do ${p.nome}`} className="block w-full cursor-pointer">
        <img src={p.foto} alt={p.nome} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
      </button>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-mono text-[12px] uppercase leading-relaxed tracking-[0.14em] text-[var(--n-gelo)]">{p.nome}</h3>
        <p className="text-[var(--n-text-2)]">{p.linha}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
          <button type="button" onClick={() => onFicha(p.id)} className="font-bold text-[var(--n-text-1)] hover:underline">
            Ver ficha completa
          </button>
          <a href="#orcamento" onClick={() => escolherProduto(p.id)} className="inline-flex items-center gap-2 font-bold text-[var(--n-accent-soft)]">
            Pedir orçamento deste <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Produtos() {
  const [aba, setAba] = useState(0);
  const [ficha, setFicha] = useState<string | null>(null);
  const { trilho, ativo, mexeu, irPara } = useCarrossel<HTMLUListElement>();
  return (
    <section id="produtos" className="lp-pad py-12 md:py-16">
      <Capitulo>Produtos</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Um Niju para <em>cada carga.</em>
      </Titulo>
      <Corpo className="mt-6">Ficha técnica de verdade. Toque para ver cada um.</Corpo>

      {/* desktop: abas */}
      <div data-reveal className="mt-8 hidden min-[900px]:block">
        <div role="tablist" aria-label="Produtos" className="flex flex-wrap gap-3">
          {produtos.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={i === aba}
              onClick={() => setAba(i)}
              className={cn(
                "rounded-full border px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors",
                i === aba
                  ? "border-[var(--n-accent)] bg-[var(--n-accent)] text-white"
                  : "border-[var(--n-line)] text-[var(--n-text-2)] hover:border-[var(--n-accent-soft)] hover:text-[var(--n-text-1)]",
              )}
            >
              {p.nome}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="mt-8 grid grid-cols-[1.1fr_1fr] gap-8">
          <button
            type="button"
            onClick={() => setFicha(produtos[aba].id)}
            aria-label={`Ver ficha completa do ${produtos[aba].nome}`}
            className="block w-full cursor-pointer overflow-hidden rounded-2xl"
          >
            <img
              src={produtos[aba].foto}
              alt={produtos[aba].nome}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </button>
          <div className="flex flex-col justify-center gap-5">
            <h3 className="lp-display text-[clamp(1.8rem,3.5vw,2.8rem)]">{produtos[aba].nome}</h3>
            <p className="lp-intro max-w-[36ch]">{produtos[aba].linha}</p>
            <ul className="flex max-w-[36ch] flex-col gap-2">
              {fichas[produtos[aba].id].specs.slice(0, 3).map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-[var(--n-text-2)]">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[var(--n-accent-soft)]" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <button type="button" onClick={() => setFicha(produtos[aba].id)} className="font-bold text-[var(--n-text-1)] hover:underline">
                Ver ficha completa
              </button>
              <a
                href="#orcamento"
                onClick={() => escolherProduto(produtos[aba].id)}
                className="lp-btn lp-btn--claro"
              >
                <span className="lp-btn-txt">Pedir orçamento deste</span>
                <span aria-hidden className="lp-btn-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* celular: carrossel */}
      <div className="mt-8 min-[900px]:hidden">
        <DicaArraste mexeu={mexeu} className="mb-4" />
        <ul ref={trilho} className="lp-trilho -mx-5 px-5">
          {produtos.map((p, i) => (
            <li key={p.id} data-i={i} className="w-[82%]">
              <Card p={p} onFicha={setFicha} />
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Regua rotulos={["01", "02", "03", "04"]} ativo={ativo} irPara={irPara} nome={(i) => produtos[i].nome} />
        </div>
      </div>

      <FichaModal id={ficha} onFechar={() => setFicha(null)} />
    </section>
  );
}
