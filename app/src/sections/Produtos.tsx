import { useState } from "react";
import { Capitulo, Corpo, Titulo } from "@/components/Editorial";
import { DicaArraste, Regua, useCarrossel } from "@/components/CarrosselRegua";
import { cn } from "@/lib/utils";

/* CAPÍTULO 04 · Produtos. Momento interativo: abas no desktop, carrossel com scroll-snap no celular. */

const produtos = [
  {
    id: "paleteiro",
    nome: "Semirreboque frigorífico paleteiro",
    linha: "Assoalho em dois modelos e a Geladeira, criação da casa.",
    foto: "assets/produto-paleteiro.png",
  },
  {
    id: "gancheiro",
    nome: "Semirreboque frigorífico gancheiro",
    linha: "O frigorífico gancheiro com o quadro inox exclusivo.",
    foto: "assets/produto-gancheiro.png",
  },
  {
    id: "metalico",
    nome: "Baú metálico",
    linha: "Assoalho trapezoidal e construção certificada ISO 9001.",
    foto: "assets/produto-bau-metalico.png",
  },
  {
    id: "plastico",
    nome: "Baú plástico",
    linha: "Com reservatório de água e caixa de ferramenta acoplados.",
    foto: "assets/produto-bau-plastico.png",
  },
];

function escolher(produto: string) {
  try {
    localStorage.setItem("niju-produto", produto);
  } catch {
    /* sem storage, o formulário abre sem pré-escolha */
  }
}

function Card({ p }: { p: (typeof produtos)[number] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)]">
      <div className="flex aspect-[4/3] items-center justify-center bg-white p-6">
        <img src={p.foto} alt={p.nome} loading="lazy" decoding="async" className="max-h-full w-auto object-contain" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-mono text-[12px] uppercase leading-relaxed tracking-[0.14em] text-[var(--n-gelo)]">{p.nome}</h3>
        <p className="text-[var(--n-text-2)]">{p.linha}</p>
        <a
          href="#orcamento"
          onClick={() => escolher(p.id)}
          className="mt-auto inline-flex items-center gap-2 pt-2 font-bold text-[var(--n-accent-soft)]"
        >
          Pedir orçamento deste <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

export default function Produtos() {
  const [aba, setAba] = useState(0);
  const { trilho, ativo, mexeu, irPara } = useCarrossel<HTMLUListElement>();
  return (
    <section id="produtos" className="lp-pad py-12 md:py-16">
      <Capitulo>Capítulo 05 · Produtos</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Um Niju para <em>cada carga.</em>
      </Titulo>
      <Corpo className="mt-6">Fotos reais, ficha técnica de verdade. Toque para ver cada um.</Corpo>

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
          <Card p={produtos[aba]} />
          <div className="flex flex-col justify-center gap-5">
            <h3 className="lp-display text-[clamp(1.8rem,3.5vw,2.8rem)]">{produtos[aba].nome}</h3>
            <p className="lp-intro max-w-[36ch]">{produtos[aba].linha}</p>
            <p>
              <a
                href="#orcamento"
                onClick={() => escolher(produtos[aba].id)}
                className="lp-btn lp-btn--claro"
              >
                <span aria-hidden className="lp-btn-dot" />
                <span className="lp-btn-txt">Pedir orçamento deste</span>
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
              <Card p={p} />
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Regua rotulos={["01", "02", "03", "04"]} ativo={ativo} irPara={irPara} nome={(i) => produtos[i].nome} />
        </div>
      </div>
    </section>
  );
}
