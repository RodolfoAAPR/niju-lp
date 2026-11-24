import { Capitulo, Titulo } from "@/components/Editorial";

/* CAPÍTULO 03 · Dor: o que acontece com carreta fraca, antes de mostrar a prova. */

const dores = [
  "Isolamento que vaza frio e bebe diesel.",
  "Fissura que começa fina e para a carreta.",
  "Corrosão que come a carroceria por dentro.",
];

export default function Dor() {
  return (
    <section id="dor" className="lp-pad py-12 md:py-16">
      <Capitulo>Capítulo 03 · Estrada</Capitulo>
      <Titulo className="mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        O barato sai caro <em>na estrada.</em>
      </Titulo>
      <ol data-reveal className="mt-8 flex max-w-3xl flex-col">
        {dores.map((d, i) => (
          <li key={d} className="flex items-baseline gap-5 border-b border-[var(--n-line)] py-5 first:border-t">
            <span aria-hidden className="lp-display text-2xl text-[var(--n-accent)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xl font-bold">{d}</span>
          </li>
        ))}
      </ol>
      <p data-reveal className="lp-display mt-8 max-w-[20ch] text-[clamp(1.6rem,3.5vw,2.6rem)]">
        Quem roda com Niju <em>roda mais</em> e para menos.
      </p>
    </section>
  );
}
