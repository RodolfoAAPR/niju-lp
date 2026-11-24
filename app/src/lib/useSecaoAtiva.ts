import { useEffect, useState } from "react";

/* Seção atual na tela: a última cujo topo passou de 40% da altura. Reveza entre menu e trilho. */

export function useSecaoAtiva(hrefs: string[]) {
  const [ativa, setAtiva] = useState("");
  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const linha = innerHeight * 0.4;
      let atual = "";
      for (const href of hrefs) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= linha) atual = href;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hrefs.join("|")]);
  return ativa;
}
