import { Layers, Paintbrush, Snowflake, Wrench } from "lucide-react";
import { Capitulo, Titulo } from "@/components/Editorial";
import Holofote from "@/components/Holofote";
import { DicaArraste, Regua, useCarrossel } from "@/components/CarrosselRegua";

/* CAPÍTULO 05 · Por que Niju: 4 pilares, um fato por card. Grade no desktop, carrossel no celular. */

const pilares = [
  {
    titulo: "Quadro inox exclusivo",
    texto: "Traseiro arredondado em inox, só a Niju tem. As forças se distribuem e a fissura não abre.",
    Icone: Layers,
  },
  {
    titulo: "Isolamento sem emendas",
    texto: "Camada isolante sem emenda e sem deformação. Mais frio com menos diesel.",
    Icone: Snowflake,
  },
  {
    titulo: "Baixa manutenção",
    texto: "Suspensão com terminal molecular: absorve choque e torção, poupa pneu e oficina.",
    Icone: Wrench,
  },
  {
    titulo: "Pintura que segura",
    texto: "Antioxidante nas soldas e gel protetor por fora. Cor, brilho e resistência por mais tempo.",
    Icone: Paintbrush,
  },
];

function Card({ n, titulo, texto, Icone }: { n: string; titulo: string; texto: string; Icone: typeof Layers }) {
  return (
    <Holofote
      className="flex h-full min-h-[240px] flex-col gap-4"
      style={{ borderRadius: "1rem", ["--spotlight-card-surface" as string]: "var(--n-panel)" }}
      spotlightColor="rgba(43, 63, 242, 0.55)"
      intensity={0.5}
      spotlightSize={260}
    >
      <span className="flex items-start justify-between gap-3">
        <span aria-hidden className="lp-display text-6xl text-[var(--n-accent)] opacity-90">
          {n}
        </span>
        <span aria-hidden className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-[var(--n-line)] text-[var(--n-accent-soft)]">
          <Icone size={20} />
        </span>
      </span>
      <h3 className="text-xl font-bold">{titulo}</h3>
      <p className="text-[var(--n-text-2)]">{texto}</p>
    </Holofote>
  );
}

export default function Engenharia() {
  const { trilho, ativo, mexeu, irPara } = useCarrossel<HTMLUListElement>();
  return (
    <section id="engenharia" className="lp-pad py-12 md:py-16">
      <Capitulo>Capítulo 05 · Engenharia</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Feita para <em>durar mais.</em>
      </Titulo>
      <div data-reveal className="mt-8 hidden gap-4 min-[900px]:grid min-[900px]:grid-cols-2 xl:grid-cols-4">
        {pilares.map((p, i) => (
          <Card key={p.titulo} n={String(i + 1).padStart(2, "0")} titulo={p.titulo} texto={p.texto} Icone={p.Icone} />
        ))}
      </div>

      <div className="mt-8 min-[900px]:hidden">
        <DicaArraste mexeu={mexeu} className="mb-4" />
        <ul ref={trilho} className="lp-trilho -mx-5 px-5">
          {pilares.map((p, i) => (
            <li key={p.titulo} data-i={i} className="w-[82%]">
              <Card n={String(i + 1).padStart(2, "0")} titulo={p.titulo} texto={p.texto} Icone={p.Icone} />
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Regua rotulos={["01", "02", "03", "04"]} ativo={ativo} irPara={irPara} nome={(i) => pilares[i].titulo} />
        </div>
      </div>
    </section>
  );
}
