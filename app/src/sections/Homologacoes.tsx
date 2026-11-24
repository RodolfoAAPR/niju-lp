import { Capitulo, Corpo, Rolo, Titulo } from "@/components/Editorial";

/* CAPÍTULO 03 · Homologações: a prova social mais valiosa. BRF e Seara entram como placa de texto
   até o cliente mandar os logos oficiais (os originais do site retornam 403). */

const logos = [
  { img: "assets/logo-aurora.png", nome: "Aurora" },
  { img: "assets/logo-jbs.png", nome: "JBS" },
  { img: "assets/logo-dia.png", nome: "DIA" },
];
const placas = ["BRF", "Seara"];

export default function Homologacoes() {
  return (
    <section id="homologacoes" className="lp-pad py-24 md:py-32">
      <Capitulo>Capítulo 03 · Prova</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Homologada nos maiores frigoríficos <em>do país.</em>
      </Titulo>
      <Corpo className="mt-6">Se o seu frigorífico não está na lista, pergunte no orçamento.</Corpo>
      <div data-reveal className="mt-12 flex flex-wrap items-stretch gap-4">
        {logos.map((l) => (
          <figure
            key={l.nome}
            className="flex min-h-[120px] w-[calc(50%-0.5rem)] items-center justify-center rounded-2xl bg-white p-6 sm:w-[calc(33%-0.75rem)] lg:w-[220px]"
          >
            <img src={l.img} alt={l.nome} loading="lazy" decoding="async" className="max-h-[64px] w-auto object-contain" />
          </figure>
        ))}
        {placas.map((p) => (
          <figure
            key={p}
            className="flex min-h-[120px] w-[calc(50%-0.5rem)] items-center justify-center rounded-2xl border border-dashed border-[var(--n-line)] bg-transparent p-6 sm:w-[calc(33%-0.75rem)] lg:w-[220px]"
          >
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--n-text-2)]">{p}</span>
          </figure>
        ))}
        <div className="flex min-h-[120px] w-[calc(50%-0.5rem)] flex-col items-center justify-center gap-1 rounded-2xl bg-[var(--n-accent)] p-6 sm:w-[calc(33%-0.75rem)] lg:w-[220px]">
          <Rolo texto="05" className="lp-display text-5xl text-white" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/85">homologações</span>
        </div>
      </div>
    </section>
  );
}
