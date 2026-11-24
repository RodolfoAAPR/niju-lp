import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Check, ShieldCheck, X } from "lucide-react";
import { Botao } from "@/components/Editorial";

/* Ficha do produto em modal: galeria, especificações da ficha oficial, selos e CTA.
   Abre na foto ou no botão "Ver ficha completa", como a página do produto no site oficial. */

export type FichaProduto = {
  id: string;
  nome: string;
  linha: string;
  fotos: { img: string; alt: string }[];
  specs: string[];
};

export const fichas: Record<string, FichaProduto> = {
  paleteiro: {
    id: "paleteiro",
    nome: "Semirreboque frigorífico paleteiro",
    linha: "Assoalho em dois modelos e a Geladeira, criação da casa.",
    fotos: [
      { img: "assets/ficha-paleteiro.jpg", alt: "Semirreboque paleteiro com portas abertas" },
      { img: "assets/detalhe-img2686.jpg", alt: "Detalhe da caixa de ferramentas do implemento" },
    ],
    specs: [
      "Suspensão de baixa manutenção com terminal molecular",
      "Quadro traseiro arredondado em inox, exclusivo Niju",
      "Assoalho em dois modelos: trapezoidal e em T",
      "Isolamento térmico sem emendas",
      "Pintura antioxidante com gel protetor",
      "Elétrica com LED e iluminação interna",
      "Drenagem com caixa de resíduos",
      "Geladeira, criação da casa",
    ],
  },
  gancheiro: {
    id: "gancheiro",
    nome: "Semirreboque frigorífico gancheiro",
    linha: "O frigorífico gancheiro com o quadro inox exclusivo.",
    fotos: [
      { img: "assets/ficha-gancheiro.jpg", alt: "Semirreboque gancheiro" },
      { img: "assets/detalhe-costelas.jpg", alt: "Detalhe das costelas da estrutura gancheira" },
    ],
    specs: [
      "Suspensão de baixa manutenção com terminal molecular",
      "Quadro traseiro arredondado em inox, exclusivo Niju",
      "Assoalho em dois modelos: trapezoidal e em T",
      "Isolamento térmico sem emendas",
      "Pintura antioxidante com gel protetor",
      "Elétrica com LED e iluminação interna",
      "Drenagem com caixa de resíduos",
    ],
  },
  metalico: {
    id: "metalico",
    nome: "Baú metálico",
    linha: "Assoalho trapezoidal e construção certificada ISO 9001.",
    fotos: [
      { img: "assets/ficha-bau-metalico.jpg", alt: "Baú metálico" },
      { img: "assets/detalhe-bau-portas.jpg", alt: "Detalhe das portas do baú" },
      { img: "assets/detalhe-bau-escada.jpg", alt: "Detalhe da escada de acesso do baú" },
    ],
    specs: [
      "Quadro traseiro arredondado em inox, exclusivo Niju",
      "Assoalho trapezoidal",
      "Isolamento térmico sem emendas",
      "Pintura antioxidante com gel protetor",
      "Elétrica com LED e iluminação interna",
    ],
  },
  plastico: {
    id: "plastico",
    nome: "Baú plástico",
    linha: "Com reservatório de água e caixa de ferramenta acoplados.",
    fotos: [
      { img: "assets/ficha-bau-plastico.jpg", alt: "Baú plástico" },
      { img: "assets/detalhe-bau-portas.jpg", alt: "Detalhe das portas do baú" },
    ],
    specs: [
      "Quadro traseiro arredondado em inox, exclusivo Niju",
      "Assoalho trapezoidal",
      "Isolamento térmico sem emendas",
      "Pintura antioxidante com gel protetor",
      "Elétrica com LED e iluminação interna",
      "Reservatório de água e caixa de ferramenta acoplados",
    ],
  },
};

export function escolherProduto(id: string) {
  try {
    localStorage.setItem("niju-produto", id);
  } catch {
    /* sem storage, o formulário abre sem pré-escolha */
  }
}

export default function FichaModal({ id, onFechar }: { id: string | null; onFechar: () => void }) {
  const [foto, setFoto] = useState(0);
  const painel = useRef<HTMLDivElement>(null);
  const produto = id ? fichas[id] : null;

  useEffect(() => {
    setFoto(0);
    if (!id) return;
    const quemAbriu = document.activeElement as HTMLElement | null;
    const noTeclado = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
    };
    document.addEventListener("keydown", noTeclado);
    document.documentElement.style.overflow = "hidden";
    painel.current?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener("keydown", noTeclado);
      document.documentElement.style.overflow = "";
      quemAbriu?.focus?.({ preventScroll: true } as FocusOptions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!produto) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={`Ficha do ${produto.nome}`} className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button type="button" aria-label="Fechar ficha" onClick={onFechar} className="lp-modal-fundo absolute inset-0 cursor-pointer bg-black/80" />
      <div
        ref={painel}
        tabIndex={-1}
        className="lp-modal relative max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-[var(--n-line)] bg-[var(--n-panel)] p-6 outline-none sm:rounded-3xl md:p-8"
      >
        <button
          type="button"
          onClick={onFechar}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--n-line)] bg-[var(--n-canvas)] transition-colors hover:border-[var(--n-accent-soft)]"
        >
          <X size={18} aria-hidden />
        </button>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-2xl">
              <img key={foto} src={produto.fotos[foto].img} alt={produto.fotos[foto].alt} className="lp-msg aspect-[4/3] w-full object-cover" />
            </div>
            {produto.fotos.length > 1 && (
              <div className="mt-3 flex gap-2" role="group" aria-label="Fotos">
                {produto.fotos.map((f, i) => (
                  <button
                    key={f.img}
                    type="button"
                    onClick={() => setFoto(i)}
                    aria-label={`Ver foto ${i + 1}`}
                    aria-pressed={i === foto}
                    className={`overflow-hidden rounded-xl border-2 transition-colors ${i === foto ? "border-[var(--n-accent-soft)]" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img src={f.img} alt="" aria-hidden className="h-16 w-20 object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <p className="lp-eyebrow">Ficha técnica</p>
            <h3 className="lp-display text-3xl md:text-4xl">{produto.nome}</h3>
            <p className="text-[var(--n-text-2)]">{produto.linha}</p>
            <ul className="flex flex-col gap-2.5">
              {produto.specs.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <Check size={16} aria-hidden className="mt-1 flex-none text-[var(--n-accent-soft)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--n-line)] bg-[var(--n-canvas)] p-4">
                <ShieldCheck size={26} aria-hidden className="flex-none text-[var(--n-accent-soft)]" />
                <div>
                  <p className="font-bold leading-tight">ISO 9001</p>
                  <p className="text-sm leading-snug text-[var(--n-text-2)]">Empresa certificada</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--n-line)] bg-[var(--n-canvas)] p-4">
                <BadgeCheck size={26} aria-hidden className="flex-none text-[var(--n-accent-soft)]" />
                <div>
                  <p className="font-bold leading-tight">ANFIR</p>
                  <p className="text-sm leading-snug text-[var(--n-text-2)]">Normas da ANFIR</p>
                </div>
              </div>
            </div>
            <p>
              <Botao
                href="#orcamento"
                onClick={() => {
                  escolherProduto(produto.id);
                  onFechar();
                }}
              >
                Pedir orçamento deste
              </Botao>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
