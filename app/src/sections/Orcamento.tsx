import { Compass, MapPin, Navigation } from "lucide-react";
import { Capitulo, Titulo } from "@/components/Editorial";
import ChatOrcamento from "@/components/ChatOrcamento";
import { contato, mapas } from "@/lib/contato";

/* CAPÍTULO 09 · Orçamento: a ação única virou um chat em 5 passos, como o da LP de referência.
   Ao lado, contato direto e o mapa da fábrica com o alfinete da Niju (ladrilhos OSM servidos no site). */

export default function Orcamento() {
  return (
    <section id="orcamento" className="lp-pad py-12 md:py-16">
      <Capitulo>Capítulo 11 · Orçamento</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Solicite um <em>orçamento.</em>
      </Titulo>
      <p data-reveal className="lp-intro mt-6 max-w-[40ch]">
        Preencha e receba proposta do time Niju.
      </p>

      <ol data-reveal className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["01", "Responda no chat", "5 perguntas rápidas."],
          ["02", "Receba a proposta", "O comercial responde."],
          ["03", "Feche com o comercial", "Sem compromisso."],
        ].map(([n, t, d]) => (
          <li key={n} className="flex gap-4 rounded-2xl border border-[var(--n-line)] p-5">
            <span aria-hidden className="lp-display text-4xl text-[var(--n-accent)]">
              {n}
            </span>
            <span>
              <span className="block font-bold">{t}</span>
              <span className="block text-[var(--n-text-2)]">{d}</span>
            </span>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <ChatOrcamento />

        <aside className="flex flex-col justify-center gap-6 rounded-2xl border border-[var(--n-line)] p-8">
          <p className="lp-eyebrow">Prefere falar direto</p>
          <a href={contato.telefoneHref} className="lp-display text-3xl md:text-4xl">
            {contato.telefoneExibido}
          </a>
          <a href={`mailto:${contato.email}`} className="text-lg text-[var(--n-gelo)] underline-offset-4 hover:underline">
            {contato.email}
          </a>
          <p className="text-[var(--n-text-2)]">{contato.endereco}</p>
          <figure className="overflow-hidden rounded-xl border border-[var(--n-line)]">
            <div role="img" aria-label="Mapa da fábrica Niju na Rua Delfim Moreira, Chapecó" className="relative grid grid-cols-2">
              <img src="assets/mapa-niju-0.png" alt="" aria-hidden loading="lazy" decoding="async" className="block aspect-square w-full" />
              <img src="assets/mapa-niju-1.png" alt="" aria-hidden loading="lazy" decoding="async" className="block aspect-square w-full" />
              <img src="assets/mapa-niju-2.png" alt="" aria-hidden loading="lazy" decoding="async" className="block aspect-square w-full" />
              <img src="assets/mapa-niju-3.png" alt="" aria-hidden loading="lazy" decoding="async" className="block aspect-square w-full" />
              <span aria-hidden className="lp-mapa-pin absolute -translate-x-1/2 -translate-y-full" style={{ left: "40.2%", top: "47.3%" }}>
                <img src="assets/logo-niju.png" alt="" className="block w-20" />
              </span>
            </div>
            <figcaption className="bg-[var(--n-canvas)] px-4 py-2 font-mono text-[10px] tracking-[0.08em] text-[var(--n-text-2)]">
              Mapa © OpenStreetMap
            </figcaption>
          </figure>
          <div className="flex flex-col gap-2">
            <p className="lp-eyebrow">Como chegar</p>
            <div className="flex flex-wrap gap-2">
              <a href={mapas.google} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn--contorno lp-btn--sm">
                <MapPin size={15} aria-hidden />
                <span className="lp-btn-txt">Google Maps</span>
              </a>
              <a href={mapas.waze} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn--contorno lp-btn--sm">
                <Navigation size={15} aria-hidden />
                <span className="lp-btn-txt">Waze</span>
              </a>
              <a href={mapas.apple} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn--contorno lp-btn--sm">
                <Compass size={15} aria-hidden />
                <span className="lp-btn-txt">Apple Maps</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
