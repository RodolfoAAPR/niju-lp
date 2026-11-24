import { useState } from "react";
import { Check } from "lucide-react";
import { Capitulo, Titulo } from "@/components/Editorial";
import { contato } from "@/lib/contato";
import { cn } from "@/lib/utils";

/* CAPÍTULO · Seu caso: cartões grandes que abrem a resposta, como o "aceitamos" da referência. */

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
      <Capitulo>Seu caso</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Toque no que é <em>o seu caso.</em>
      </Titulo>
      <div data-reveal className="mt-8 grid gap-4 md:grid-cols-2">
        {casos.map((c, i) => {
          const aberto = i === ativo;
          return (
            <article
              key={c.chip}
              className={cn(
                "rounded-3xl border p-6 transition-colors duration-500 md:p-7",
                aberto ? "border-[var(--n-accent-soft)] bg-[var(--n-panel)]" : "border-[var(--n-line)] hover:border-[var(--n-accent-soft)]",
              )}
            >
              <button
                type="button"
                aria-expanded={aberto}
                onClick={() => setAtivo(i)}
                className="flex min-h-[44px] w-full items-center gap-4 text-left"
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-colors duration-500",
                    aberto ? "border-[var(--n-accent)] bg-[var(--n-accent)] text-white" : "border-[var(--n-line)] text-transparent",
                  )}
                >
                  <Check size={17} />
                </span>
                <span className="text-lg font-bold">{c.chip}</span>
              </button>
              {aberto && (
                <p key={`r${i}`} className="lp-msg pl-13 pt-4 leading-relaxed text-[var(--n-text-2)]">
                  {c.resposta}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
