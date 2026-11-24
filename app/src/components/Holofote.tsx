import { useEffect, useState, type ComponentProps } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";

/* Holofote (SpotlightCard original) só onde há mouse: no toque, o dedo que rola redesenharia
   o brilho a cada quadro e derrubava a rolagem. A troca acontece depois de hidratar (mesma
   árvore no servidor e na primeira pintura), então não há erro de hidratação. */

export default function Holofote({
  className = "",
  style,
  children,
  spotlightColor: cor,
  ...resto
}: ComponentProps<typeof SpotlightCard>) {
  const [toque, setToque] = useState(false);
  useEffect(() => {
    const mq = matchMedia("(hover: hover) and (pointer: fine)");
    const upd = () => setToque(!mq.matches);
    upd();
    mq.addEventListener("change", upd);
    return () => mq.removeEventListener("change", upd);
  }, []);
  if (!toque)
    return (
      <SpotlightCard spotlightColor={cor} className={className} style={style} {...resto}>
        {children}
      </SpotlightCard>
    );
  return (
    <div
      className={`relative isolate overflow-hidden rounded-3xl p-8 [background-color:var(--spotlight-card-surface)] [box-shadow:var(--spotlight-card-shadow)] ${className}`}
      style={{ ["--spotlight-card-surface" as string]: "#181e26", ["--spotlight-card-shadow" as string]: "none", ...style }}
    >
      {children}
      <span aria-hidden className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] border border-white/[0.08]" />
    </div>
  );
}
