import { useEffect, useState } from "react";
import { LinkRolo } from "@/components/Editorial";

/* Menu fixo. Sai da tela durante as cenas em vídeo (evento lp:cena) e enquanto o topo decide entre vídeo e foto. */

const links = [
  { href: "#produtos", texto: "Produtos" },
  { href: "#engenharia", texto: "Engenharia" },
  { href: "#portfolio", texto: "Portfólio" },
  { href: "#duvidas", texto: "Dúvidas" },
];

export default function Cabecalho() {
  const [emCena, setEmCena] = useState(false);
  const [ativa, setAtiva] = useState("");
  useEffect(() => {
    const ouvir = (e: Event) => setEmCena((e as CustomEvent<{ ativa: boolean }>).detail.ativa);
    addEventListener("lp:cena", ouvir);
    return () => removeEventListener("lp:cena", ouvir);
  }, []);
  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const linha = innerHeight * 0.4;
      let atual = "";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= linha) atual = l.href;
      }
      setAtiva(atual);
    };
    const pedir = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };
    addEventListener("scroll", pedir, { passive: true });
    medir();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", pedir);
    };
  }, []);
  return (
    <header data-cena={emCena ? "1" : undefined} className="lp-cabecalho">
      <div className="lp-pad flex items-center justify-between gap-6 py-4">
        <a href="#topo" aria-label="Niju, voltar ao topo" className="block w-[104px]">
          <img src="assets/logo-niju.png" alt="Niju" className="h-auto w-full [mix-blend-mode:screen]" decoding="async" />
        </a>
        <nav aria-label="Seções" className="hidden items-center gap-7 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--n-text-2)] min-[900px]:flex">
          {links.map((l) => (
            <LinkRolo key={l.href} href={l.href} atual={ativa === l.href} className={ativa === l.href ? "!text-[var(--n-text-1)]" : "hover:text-[var(--n-text-1)]"}>
              {l.texto}
            </LinkRolo>
          ))}
        </nav>
        <a
          href="#orcamento"
          className="inline-flex min-h-[44px] items-center rounded-full bg-[var(--n-accent)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--n-accent-hover)]"
        >
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
