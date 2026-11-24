import { useEffect } from "react";
import "lenis/dist/lenis.css";
import { iniciarRolagemSuave } from "@/lib/rolagemSuave";
import efeitosPagina from "@/effects/pagina";
import Cabecalho from "@/sections/Cabecalho";
import StickyCta from "@/components/StickyCta";
import Topo from "@/sections/Topo";
import Manifesto from "@/sections/Manifesto";
import Ticker from "@/sections/Ticker";
import Homologacoes from "@/sections/Homologacoes";
import Produtos from "@/sections/Produtos";
import Engenharia from "@/sections/Engenharia";
import Portfolio from "@/sections/Portfolio";
import Empresa from "@/sections/Empresa";
import Duvidas from "@/sections/Duvidas";
import Orcamento from "@/sections/Orcamento";
import Rodape from "@/sections/Rodape";

/* LP Niju: menu, topo com cena, capítulos 02 a 09 e rodapé. */
export default function App() {
  useEffect(() => iniciarRolagemSuave(), []);
  useEffect(() => efeitosPagina(), []);

  return (
    <>
      <a href="#orcamento" className="lp-skip">
        Pular para o orçamento
      </a>
      <Cabecalho />
      {/* fio de frio: a assinatura da marca, só no desktop */}
      <div aria-hidden className="lp-fio pointer-events-none fixed bottom-0 left-6 top-0 z-[5] hidden w-px bg-[var(--n-line)] lg:block">
        <div id="fio-progresso" className="h-full w-full origin-top bg-gradient-to-b from-[var(--n-accent-soft)] to-[var(--n-accent)]" style={{ transform: "scaleY(0)" }} />
      </div>
      <StickyCta />
      <main>
        <Topo />
        <Manifesto />
        <Ticker />
        <Homologacoes />
        <Produtos />
        <Engenharia />
        <Portfolio />
        <Empresa />
        <Duvidas />
        <Orcamento />
      </main>
      <Rodape />
    </>
  );
}
