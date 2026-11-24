import { contato } from "@/lib/contato";

/* Rodapé com os dados legais oficiais. */

export default function Rodape() {
  return (
    <footer className="lp-pad border-t border-[var(--n-line)] py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <a href="#topo" aria-label="Niju, voltar ao topo" className="block w-[130px]">
          <img src="assets/logo-niju.png" alt="Niju" loading="lazy" decoding="async" className="h-auto w-full [mix-blend-mode:screen]" />
        </a>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
          <a href="#produtos" className="hover:text-[var(--n-text-1)]">Produtos</a>
          <a href="#orcamento" className="hover:text-[var(--n-text-1)]">Orçamento</a>
          <a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">Instagram</a>
          <a href={contato.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">Facebook</a>
          <a href={contato.site} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--n-text-1)]">Site oficial</a>
        </nav>
      </div>
      <div className="mt-10 flex flex-col gap-2 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-[var(--n-text-2)]">
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
