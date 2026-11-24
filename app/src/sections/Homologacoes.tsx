import { Capitulo, Corpo, Titulo } from "@/components/Editorial";

/* CAPÍTULO 03 · Homologações: a prova social mais valiosa. BRF segue como placa de texto
   até o cliente mandar o logo oficial (fontes públicas bloqueadas). */

const logos = [
  { img: "assets/logo-aurora.png", nome: "Aurora" },
  { img: "assets/logo-jbs.png", nome: "JBS" },
  { img: "assets/logo-dia.png", nome: "DIA" },
  { img: "assets/logo-seara.svg", nome: "Seara" },
];
const placas = ["BRF"];

export default function Homologacoes() {
  return (
    <section id="homologacoes" className="lp-pad py-12 md:py-16">
      <Capitulo>Prova</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Homologada nos maiores frigoríficos <em>do país.</em>
      </Titulo>
      <Corpo className="mt-6">Se o seu frigorífico não está na lista, pergunte no orçamento.</Corpo>
      <div data-reveal className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {logos.map((l) => (
          <figure key={l.nome} className="flex min-h-[104px] items-center justify-center rounded-2xl bg-white p-5">
            <img src={l.img} alt={l.nome} loading="lazy" decoding="async" className="max-h-[56px] w-auto object-contain" />
          </figure>
        ))}
        {placas.map((p) => (
          <figure key={p} className="flex min-h-[104px] items-center justify-center rounded-2xl border border-dashed border-[var(--n-line)] bg-transparent p-5">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--n-text-2)]">{p}</span>
          </figure>
        ))}
      </div>
    </section>
  );
}
