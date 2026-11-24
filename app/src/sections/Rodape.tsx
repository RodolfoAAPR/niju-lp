import { contato } from "@/lib/contato";

/* Rodapé simples: marca, navegação, contato e dados legais, sem botões. */

const mapa = [
  { href: "#produtos", texto: "Produtos" },
  { href: "#engenharia", texto: "Engenharia" },
  { href: "#portfolio", texto: "Portfólio" },
  { href: "#duvidas", texto: "Dúvidas" },
  { href: "#orcamento", texto: "Orçamento" },
];

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--n-line)]">
      <div className="lp-pad flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <a href="#topo" aria-label="Niju, voltar ao topo" className="block w-[130px]">
            <img src="assets/logo-niju.png" alt="Niju" loading="lazy" decoding="async" className="h-auto w-full [mix-blend-mode:screen]" />
          </a>
          <nav aria-label="Redes" className="flex gap-6 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
            <a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">
              Instagram
            </a>
            <a href={contato.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">
              Facebook
            </a>
          </nav>
        </div>
        <nav aria-label="Mapa da página" className="flex flex-wrap gap-x-7 gap-y-2">
          {mapa.map((m) => (
            <a key={m.href} href={m.href} className="font-bold text-[var(--n-text-2)] hover:text-[var(--n-text-1)]">
              {m.texto}
            </a>
          ))}
        </nav>
        <p className="max-w-[70ch] leading-relaxed text-[var(--n-text-2)]">
          <a href={contato.telefoneHref} className="font-bold text-[var(--n-text-1)] hover:underline">
            {contato.telefoneExibido}
          </a>
          {" · "}
          <a href={`mailto:${contato.email}`} className="hover:underline">
            {contato.email}
          </a>
          {" · "}
          {contato.endereco}
        </p>
        <div className="flex flex-col gap-2 border-t border-[var(--n-line)] pt-6 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-[var(--n-text-2)]">
          <p>
            {contato.razao} · CNPJ {contato.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
