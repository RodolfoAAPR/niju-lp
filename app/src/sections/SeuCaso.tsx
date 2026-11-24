import { useState } from "react";
import { Capitulo, Titulo } from "@/components/Editorial";
import { contato } from "@/lib/contato";
import { cn } from "@/lib/utils";

/* CAPÍTULO 07 · Seu caso: toque no chip e a resposta troca, como o "aceitamos" da referência. */

const casos = [
  {
    chip: "Meu frigorífico exige homologação",
    resposta: (
      <>
        Aurora, BRF, JBS, Seara e DIA já rodam com Niju.{" "}
        <a href="#orcamento" className="font-bold text-[var(--n-accent-soft)] hover:underline">
          Diga o seu no orçamento
        </a>{" "}
        que o comercial confirma.
      </>
    ),
  },
  {
    chip: "Rodo para o Mercosul",
    resposta: (
      <>
        A Niju está presente em todos os países do Mercosul.{" "}
        <a href="#orcamento" className="font-bold text-[var(--n-accent-soft)] hover:underline">
          Confirme a sua rota no orçamento.
        </a>
      </>
    ),
  },
  {
    chip: "Preciso de peças",
    resposta: (
      <>
        A Niju vende peças. Fale direto:{" "}
        <a href={contato.telefoneHref} className="font-bold text-[var(--n-accent-soft)] hover:underline">
          {contato.telefoneExibido}
        </a>{" "}
        e{" "}
        <a href={`mailto:${contato.email}`} className="font-bold text-[var(--n-accent-soft)] hover:underline">
          {contato.email}
        </a>
        .
      </>
    ),
  },
  {
    chip: "Quero conhecer a fábrica",
    resposta: (
      <>
        {contato.endereco}.{" "}
        <a href="#orcamento" className="font-bold text-[var(--n-accent-soft)] hover:underline">
          Veja o mapa no orçamento.
        </a>
      </>
    ),
  },
];

export default function SeuCaso() {
  const [ativo, setAtivo] = useState(0);
  return (
    <section id="seu-caso" className="lp-pad py-12 md:py-16">
      <Capitulo>Capítulo 07 · Seu caso</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Toque no que é <em>o seu caso.</em>
      </Titulo>
      <div data-reveal className="mt-8 flex max-w-3xl flex-col gap-4">
        <div role="group" aria-label="Casos" className="flex flex-wrap gap-2">
          {casos.map((c, i) => (
            <button
              key={c.chip}
              type="button"
              aria-pressed={i === ativo}
              onClick={() => setAtivo(i)}
              className={cn(
                "flex min-h-[44px] items-center rounded-full border px-4 text-sm font-bold transition-colors",
                i === ativo
                  ? "border-[var(--n-accent)] bg-[var(--n-accent)] text-white"
                  : "border-[var(--n-line)] text-[var(--n-text-2)] hover:border-[var(--n-accent-soft)] hover:text-[var(--n-text-1)]",
              )}
            >
              {c.chip}
            </button>
          ))}
        </div>
        <div key={ativo} className="lp-msg rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)] p-6 text-lg leading-relaxed md:p-8 md:text-xl">
          <p>{casos[ativo].resposta}</p>
        </div>
      </div>
    </section>
  );
}
