import { Capitulo, Rolo, Titulo } from "@/components/Editorial";

/* CAPÍTULO 07 · Empresa: linha do tempo com nós que acendem com a rolagem. */

const marcos = [
  { ano: "1994", texto: "A Niju começa em Chapecó, SC.", rolo: true },
  { ano: "Hoje", texto: "Entre as maiores do segmento, presente em todos os países do Mercosul.", rolo: false },
  { ano: "A caminho", texto: "Nova unidade fabril só para baús frigoríficos.", rolo: false },
];

export default function Empresa() {
  return (
    <section id="empresa" className="lp-pad py-16 md:py-24">
      <Capitulo>Capítulo 07 · A casa</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Desde 1994 <em>em Chapecó.</em>
      </Titulo>
      <div data-draw-host data-reveal className="relative mt-14 max-w-2xl pl-12">
        <svg aria-hidden className="absolute bottom-4 left-[13px] top-4 w-[2px]" preserveAspectRatio="none" viewBox="0 0 2 100">
          <line x1="1" y1="0" x2="1" y2="100" stroke="var(--n-line)" strokeWidth="2" vectorEffect="non-scaling-stroke" opacity="0.5" />
          <line x1="1" y1="0" x2="1" y2="100" stroke="var(--n-accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="lp-draw" />
        </svg>
        <ol className="flex flex-col gap-12">
          {marcos.map((m, i) => (
            <li key={m.ano} className="lp-no-timeline relative" style={{ ["--pos" as string]: i / (marcos.length - 1) }}>
              <span
                aria-hidden
                className="absolute -left-12 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--n-accent-soft)] bg-[var(--n-canvas)]"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--n-accent-soft)]" />
              </span>
              <p className="lp-display text-4xl md:text-5xl">
                {m.rolo ? <Rolo texto={m.ano} /> : m.ano}
              </p>
              <p className="mt-2 max-w-[40ch] text-lg text-[var(--n-text-2)]">{m.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
