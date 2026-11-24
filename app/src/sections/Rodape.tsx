import { ArrowUp } from "lucide-react";
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
            <a href={contato.site} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">
              Site oficial
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
          <div className="flex flex-col gap-3">
            <a href={contato.telefoneHref} className="font-bold hover:underline">
              {contato.telefoneExibido}
            </a>
            <a href={`mailto:${contato.email}`} className="text-[var(--n-text-2)] hover:underline">
              {contato.email}
            </a>
            <p className="max-w-[26ch] text-[var(--n-text-2)]">{contato.endereco}</p>
            <a
              href="#topo"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--n-line)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--n-text-2)] transition-colors hover:border-[var(--n-accent-soft)] hover:text-[var(--n-text-1)]"
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
