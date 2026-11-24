import { useEffect, useState } from "react";
import { HelpCircle, Images, MessageCircle, Truck, Wrench } from "lucide-react";
import { useSecaoAtiva } from "@/lib/useSecaoAtiva";
import { cn } from "@/lib/utils";

/* Nave flutuante: pílula central de vidro no desktop, ícones no celular. Sai de cena com o vídeo. */

const links = [
  { href: "#produtos", texto: "Produtos", Icone: Truck },
  { href: "#engenharia", texto: "Engenharia", Icone: Wrench },
  { href: "#portfolio", texto: "Portfólio", Icone: Images },
  { href: "#duvidas", texto: "Dúvidas", Icone: HelpCircle },
];

export default function Cabecalho() {
  const [emCena, setEmCena] = useState(false);
  const ativa = useSecaoAtiva(links.map((l) => l.href));
  useEffect(() => {
    const ouvir = (e: Event) => setEmCena((e as CustomEvent<{ ativa: boolean }>).detail.ativa);
    addEventListener("lp:cena", ouvir);
    return () => removeEventListener("lp:cena", ouvir);
  }, []);
  return (
    <header data-cena={emCena ? "1" : undefined} className="lp-cabecalho">
      <nav
        aria-label="Seções"
        className="lp-nave mx-auto mt-4 flex w-fit max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full border border-[var(--n-line)] bg-[rgba(16,20,24,0.88)] p-1.5 min-[900px]:gap-2"
      >
        <a href="#topo" aria-label="Niju, voltar ao topo" className="block w-[64px] flex-none px-2 min-[900px]:w-[88px]">
          <img src="assets/logo-niju.png" alt="Niju" className="h-auto w-full [mix-blend-mode:screen]" decoding="async" />
        </a>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={ativa === l.href ? "true" : undefined}
            aria-label={l.texto}
            className={cn(
              "flex min-h-[44px] items-center rounded-full px-3 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors",
              ativa === l.href ? "bg-[rgba(43,63,242,0.28)] text-white" : "text-[var(--n-text-2)] hover:text-[var(--n-text-1)]",
            )}
          >
            <l.Icone size={17} aria-hidden className="min-[900px]:hidden" />
            <span className="hidden whitespace-nowrap min-[900px]:inline">{l.texto}</span>
          </a>
        ))}
        <a
          href="#orcamento"
          aria-label="Solicitar orçamento"
          className="flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--n-accent)] px-3 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[var(--n-accent-hover)] min-[900px]:px-5"
        >
          <MessageCircle size={17} aria-hidden className="min-[900px]:hidden" />
          <span className="hidden whitespace-nowrap min-[900px]:inline">Orçamento</span>
        </a>
      </nav>
    </header>
  );
}
