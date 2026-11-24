import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/* Barra de CTA grudada no celular: aparece depois do topo e some no formulário.
   Só observadores, nenhum cálculo por rolagem. */

export default function StickyCta() {
  const [ver, setVer] = useState(false);
  useEffect(() => {
    if (!matchMedia("(max-width: 899px)").matches) return;
    const topo = document.getElementById("topo");
    const orc = document.getElementById("orcamento");
    let passado = false;
    let noForm = false;
    const upd = () => setVer(passado && !noForm);
    const ioTopo = new IntersectionObserver(([e]) => {
      passado = !e.isIntersecting;
      upd();
    });
    const ioOrc = new IntersectionObserver(
      ([e]) => {
        noForm = e.isIntersecting;
        upd();
      },
      { rootMargin: "-20% 0px" },
    );
    if (topo) ioTopo.observe(topo);
    if (orc) ioOrc.observe(orc);
    return () => {
      ioTopo.disconnect();
      ioOrc.disconnect();
    };
  }, []);
  return (
    <div data-ver={ver ? "" : undefined} className="lp-sticky-cta min-[900px]:hidden" aria-hidden={ver ? undefined : true}>
      <a href="#orcamento" tabIndex={ver ? undefined : -1} className="lp-btn lp-btn--claro w-full justify-center">
        <span className="lp-btn-txt">Solicitar orçamento</span>
        <span aria-hidden className="lp-btn-arrow">
          <ArrowRight size={15} />
        </span>
      </a>
    </div>
  );
}
