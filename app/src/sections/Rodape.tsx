import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { contato } from "@/lib/contato";

/* Rodapé: mapa numerado das seções, contato e dados legais oficiais. */

const mapa = [
  { href: "#produtos", num: "01", texto: "Produtos" },
  { href: "#engenharia", num: "02", texto: "Engenharia" },
  { href: "#portfolio", num: "03", texto: "Portfólio" },
  { href: "#duvidas", num: "04", texto: "Dúvidas" },
  { href: "#orcamento", num: "05", texto: "Orçamento" },
];

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--n-line)]">
      <div className="lp-pad grid gap-12 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <a href="#topo" aria-label="Niju, voltar ao topo" className="block w-[130px]">
            <img src="assets/logo-niju.png" alt="Niju" loading="lazy" decoding="async" className="h-auto w-full [mix-blend-mode:screen]" />
          </a>
          <p className="lp-display max-w-[12ch] text-3xl">
            Com Niju <em>dura mais.</em>
          </p>
          <nav aria-label="Redes" className="flex gap-6 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
            <a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">
              Instagram
            </a>
            <a href={contato.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">
              Facebook
            </a>
          </nav>
        </div>
        <nav aria-label="Mapa da página">
          <p className="lp-eyebrow mb-5">Mapa</p>
          <ol className="flex flex-col gap-3">
            {mapa.map((m) => (
              <li key={m.href}>
                <a href={m.href} className="group flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--n-accent-soft)]">{m.num}</span>
                  <span className="font-bold text-[var(--n-text-2)] transition-colors group-hover:text-[var(--n-text-1)]">{m.texto}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div>
          <p className="lp-eyebrow mb-5">Contato</p>
          <div className="flex flex-col gap-4">
            {[
              { Icone: Phone, rotulo: "Telefone", href: contato.telefoneHref, texto: contato.telefoneExibido },
              { Icone: Mail, rotulo: "E-mail", href: `mailto:${contato.email}`, texto: contato.email },
              { Icone: MapPin, rotulo: "Fábrica", href: "#orcamento", texto: contato.endereco },
            ].map((c) => (
              <a key={c.rotulo} href={c.href} className="group flex items-center gap-3">
                <span aria-hidden className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-[var(--n-line)] text-[var(--n-accent-soft)]">
                  <c.Icone size={17} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--n-text-2)]">{c.rotulo}</span>
                  <span className="block font-bold group-hover:underline">{c.texto}</span>
                </span>
              </a>
            ))}
            <a
              href="#topo"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--n-line)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--n-text-2)] transition-colors hover:border-[var(--n-accent-soft)] hover:text-[var(--n-text-1)]"
            >
              Voltar ao topo
              <ArrowUp size={14} aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <div className="lp-pad flex flex-col gap-2 border-t border-[var(--n-line)] py-6 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-[var(--n-text-2)]">
        <p>
          {contato.razao} · CNPJ {contato.cnpj}
        </p>
        <p>
          {contato.endereco} · {contato.telefoneExibido} · {contato.email}
        </p>
      </div>
    </footer>
  );
}
