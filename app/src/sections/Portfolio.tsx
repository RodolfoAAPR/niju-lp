import { Capitulo, Corpo, Titulo } from "@/components/Editorial";
import { DicaArraste, Regua, useCarrossel } from "@/components/CarrosselRegua";

/* CAPÍTULO 06 · Portfólio: 5 fotos lado a lado no desktop, carrossel com régua no celular. */

const fotos = [
  { img: "assets/portfolio-sebominas.jpg", nome: "Sebominas" },
  { img: "assets/portfolio-nobre.jpg", nome: "Nobre" },
  { img: "assets/portfolio-gral.jpg", nome: "Gral" },
  { img: "assets/portfolio-friboi.jpg", nome: "Friboi" },
  { img: "assets/portfolio-brasnica.jpg", nome: "Brasnica" },
];

function Card({ img, nome, i }: { img: string; nome: string; i: number }) {
  return (
    <figure className="h-full overflow-hidden rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)]">
      <img src={img} alt={`Carreta Niju do cliente ${nome}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
      <figcaption className="flex items-center justify-between gap-3 p-4">
        <span className="text-sm font-bold">{nome}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--n-text-2)]">
          {String(i + 1).padStart(2, "0")} / {String(fotos.length).padStart(2, "0")}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Portfolio() {
  const { trilho, ativo, mexeu, irPara } = useCarrossel<HTMLUListElement>();
  return (
    <section id="portfolio" className="lp-pad py-12 md:py-16">
      <Capitulo>Clientes</Capitulo>
      <Titulo className="mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Na estrada com quem <em>carrega o país.</em>
      </Titulo>
      <Corpo className="mt-6">Investimentos que já rodam por todo o Brasil.</Corpo>

      {/* desktop: os 5 lado a lado, centralizados */}
      <ul data-reveal className="mt-8 hidden grid-cols-5 justify-center gap-4 min-[900px]:grid">
        {fotos.map((f, i) => (
          <li key={f.nome}>
            <Card img={f.img} nome={f.nome} i={i} />
          </li>
        ))}
      </ul>

      {/* celular: carrossel com régua centralizada */}
      <div className="mt-8 min-[900px]:hidden">
        <DicaArraste mexeu={mexeu} className="mb-4" />
        <ul ref={trilho} className="lp-trilho -mx-5 px-5">
          {fotos.map((f, i) => (
            <li key={f.nome} data-i={i} className="w-[82%] sm:w-[60%]">
              <Card img={f.img} nome={f.nome} i={i} />
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-6 max-w-md">
          <Regua rotulos={fotos.map((_, i) => String(i + 1).padStart(2, "0"))} ativo={ativo} irPara={irPara} nome={(i) => fotos[i].nome} />
        </div>
      </div>
    </section>
  );
}
