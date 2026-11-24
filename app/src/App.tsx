import { useEffect } from "react";
import "lenis/dist/lenis.css";
import { iniciarRolagemSuave } from "@/lib/rolagemSuave";
import efeitosPagina from "@/effects/pagina";
import Cabecalho from "@/sections/Cabecalho";
import EfeitoClique from "@/components/EfeitoClique";
import StickyCta from "@/components/StickyCta";
import Trilho from "@/components/Trilho";
import Topo from "@/sections/Topo";
import Manifesto from "@/sections/Manifesto";
import Ticker from "@/sections/Ticker";
import Dor from "@/sections/Dor";
import Homologacoes from "@/sections/Homologacoes";
import Produtos from "@/sections/Produtos";
import Engenharia from "@/sections/Engenharia";
import SeuCaso from "@/sections/SeuCaso";
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
      <Trilho />
      <StickyCta />
      <EfeitoClique />
      <main>
        <Topo />
        <Manifesto />
        <Ticker />
        <Dor />
        <Homologacoes />
        <Produtos />
        <Engenharia />
        <SeuCaso />
        <Portfolio />
        <Empresa />
        <Duvidas />
        <Orcamento />
      </main>
      <Rodape />
    </>
  );
}
