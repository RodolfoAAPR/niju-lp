import { Capitulo, Corpo, Titulo } from "@/components/Editorial";
import { DicaArraste, Regua, useCarrossel } from "@/components/CarrosselRegua";

/* CAPÍTULO 06 · Portfólio: fotos reais de clientes na estrada, com régua. */

const fotos = [
  { img: "assets/portfolio-sebominas.jpg", nome: "Sebominas" },
  { img: "assets/portfolio-nobre.jpg", nome: "Nobre" },
  { img: "assets/portfolio-gral.jpg", nome: "Gral" },
  { img: "assets/portfolio-friboi.jpg", nome: "Friboi" },
  { img: "assets/portfolio-wide.jpg", nome: "Estrada" },
];

export default function Portfolio() {
  const { trilho, ativo, mexeu, irPara } = useCarrossel<HTMLUListElement>();
  return (
    <section id="portfolio" className="lp-pad py-24 md:py-32">
      <Capitulo>Capítulo 06 · Estrada</Capitulo>
      <Titulo className="mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Na estrada com quem <em>carrega o país.</em>
      </Titulo>
      <Corpo className="mt-6">Investimentos que já rodam por todo o Brasil.</Corpo>
      <div data-reveal className="mt-12">
        <DicaArraste mexeu={mexeu} className="mb-4" />
        <ul ref={trilho} className="lp-trilho -mx-5 px-5">
          {fotos.map((f, i) => (
            <li key={f.nome} data-i={i} className="w-[82%] sm:w-[60%] lg:w-[38%]">
              <figure className="overflow-hidden rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)]">
                <img src={f.img} alt={`Carreta Niju do cliente ${f.nome}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="flex items-center justify-between gap-3 p-5">
                  <span className="font-bold">{f.nome}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--n-text-2)]">
                    {String(i + 1).padStart(2, "0")} / {String(fotos.length).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="mt-6 max-w-xl">
          <Regua rotulos={fotos.map((_, i) => String(i + 1).padStart(2, "0"))} ativo={ativo} irPara={irPara} nome={(i) => fotos[i].nome} />
        </div>
      </div>
    </section>
  );
}
