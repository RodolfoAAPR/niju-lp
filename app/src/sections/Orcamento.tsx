import { Compass, MapPin, Navigation } from "lucide-react";
import { Capitulo, Titulo } from "@/components/Editorial";
import ChatOrcamento from "@/components/ChatOrcamento";
import Mapa from "@/components/Mapa";
import { contato, mapas, whatsappUrl } from "@/lib/contato";

/* CAPÍTULO 09 · Orçamento: a ação única virou um chat em 5 passos, como o da LP de referência.
   Ao lado, contato direto e o mapa da fábrica com o alfinete da Niju (ladrilhos OSM servidos no site). */

export default function Orcamento() {
  return (
    <section id="orcamento" className="lp-pad py-12 md:py-16">
      <Capitulo>Orçamento</Capitulo>
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

      <div data-reveal className="lp-painel mt-8 rounded-[28px] border border-[var(--n-line)] bg-white/[0.02] p-4 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <ChatOrcamento />

        <aside className="flex flex-col justify-center gap-6 rounded-2xl border border-[var(--n-line)] p-8">
          <p className="lp-eyebrow">Prefere falar direto</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="lp-display text-3xl md:text-4xl">
            {contato.telefoneExibido}
          </a>
          <a href={`mailto:${contato.email}`} className="text-lg text-[var(--n-gelo)] underline-offset-4 hover:underline">
            {contato.email}
          </a>
          <p className="text-[var(--n-text-2)]">{contato.endereco}</p>
          <Mapa />
          <div className="flex flex-col gap-3">
            <p className="lp-eyebrow">Como chegar</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { href: mapas.google, Icone: MapPin, texto: "Google Maps" },
                { href: mapas.waze, Icone: Navigation, texto: "Waze" },
                { href: mapas.apple, Icone: Compass, texto: "Apple Maps" },
              ].map((m) => (
                <a
                  key={m.texto}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-2xl border border-[var(--n-line)] px-1 text-center transition-colors hover:border-[var(--n-accent-soft)]"
                >
                  <m.Icone size={17} aria-hidden className="text-[var(--n-accent-soft)]" />
                  <span className="text-xs font-bold leading-tight">{m.texto}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
        </div>
      </div>
    </section>
  );
}
