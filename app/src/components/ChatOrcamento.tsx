import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { contato, mailtoOrcamento } from "@/lib/contato";

/* Chat de orçamento em 5 passos, como o da LP de referência: bolhas com "digitando",
   uma pergunta por vez, validação com mensagem de erro e contador. Envio igual ao do
   formulário antigo: Formspree quando o cliente entregar o endpoint, mailto até lá. */

const FORMSPREE_ENDPOINT = "";
const TOTAL = 5;

const produtos = ["Paleteiro", "Gancheiro", "Baú metálico", "Baú plástico", "Ainda não sei"] as const;
const ids: Record<string, string> = { paleteiro: "Paleteiro", gancheiro: "Gancheiro", metalico: "Baú metálico", plastico: "Baú plástico" };

type Msg = { de: "bot" | "eu"; texto: string };
type Valores = { nome: string; empresa: string; whatsapp: string; produto: string; mensagem: string };

const esperar = (ms: number) => new Promise((ok) => setTimeout(ok, ms));
const soDigitos = (s: string) => s.replace(/\D/g, "");
const titulo = (s: string) => s.toLowerCase().replace(/(^|\s)(\S)/g, (_, a: string, b: string) => a + b.toUpperCase());

export default function ChatOrcamento() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [digitando, setDigitando] = useState(false);
  const [etapa, setEtapa] = useState(0);
  const [entrada, setEntrada] = useState("");
  const [chips, setChips] = useState(false);
  const [pular, setPular] = useState(false);
  const [pronto, setPronto] = useState(false);
  const espera = useRef<((v: string) => void) | null>(null);
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (caixa.current) caixa.current.scrollTop = caixa.current.scrollHeight;
  }, [msgs, digitando, chips]);

  useEffect(() => {
    let vivo = true;
    const v: Valores = { nome: "", empresa: "", whatsapp: "", produto: "Ainda não sei", mensagem: "" };
    try {
      const salvo = localStorage.getItem("niju-produto");
      if (salvo && ids[salvo]) v.produto = ids[salvo];
    } catch {
      /* sem storage */
    }
    const bot = async (texto: string, pausa = 750) => {
      if (!vivo) return;
      setDigitando(true);
      await esperar(pausa);
      if (!vivo) return;
      setDigitando(false);
      setMsgs((m) => [...m, { de: "bot", texto }]);
    };
    const perguntar = () =>
      new Promise<string>((ok) => {
        espera.current = ok;
      });
    const ouvir = async (): Promise<string> => {
      for (;;) {
        const r = await perguntar();
        if (!vivo) return "";
        if (r.trim()) return r.trim();
      }
    };

    (async () => {
      await bot("Olá! Aqui é da Niju.", 550);
      await bot("Vou te fazer 5 perguntas rápidas para montar o seu orçamento.", 900);
      // 1. nome
      setEtapa(0);
      await bot("Como podemos te chamar?", 750);
      for (;;) {
        const r = await ouvir();
        if (!vivo) return;
        if (r.length >= 2) {
          v.nome = titulo(r);
          setMsgs((m) => [...m, { de: "eu", texto: v.nome }]);
          break;
        }
        await bot("Me diz o seu nome para eu continuar.", 700);
      }
      await bot(`Prazer, ${v.nome.split(" ")[0]}!`, 700);
      // 2. empresa (opcional)
      setEtapa(1);
      setPular(true);
      await bot("Qual é a sua empresa?", 750);
      v.empresa = (await perguntar()).trim();
      if (!vivo) return;
      setPular(false);
      if (v.empresa) setMsgs((m) => [...m, { de: "eu", texto: v.empresa }]);
      // 3. whatsapp
      setEtapa(2);
      await bot("Qual é o seu WhatsApp?", 750);
      for (;;) {
        const r = await ouvir();
        if (!vivo) return;
        if (soDigitos(r).length >= 10) {
          v.whatsapp = r;
          setMsgs((m) => [...m, { de: "eu", texto: v.whatsapp }]);
          break;
        }
        await bot("Confere o número para o comercial te responder.", 700);
      }
      // 4. produto (chips)
      setEtapa(3);
      await bot(v.produto === "Ainda não sei" ? "Qual produto te interessa?" : `Vi que você olhou o ${v.produto}. Quer trocar?`, 750);
      setChips(true);
      const r = await ouvir();
      if (!vivo) return;
      setChips(false);
      if (produtos.includes(r as (typeof produtos)[number])) v.produto = r;
      setMsgs((m) => [...m, { de: "eu", texto: v.produto }]);
      // 5. mensagem (opcional)
      setEtapa(4);
      setPular(true);
      await bot("Quer contar sobre a sua operação?", 750);
      v.mensagem = (await perguntar()).trim();
      if (!vivo) return;
      setPular(false);
      if (v.mensagem) setMsgs((m) => [...m, { de: "eu", texto: v.mensagem }]);
      // envia
      await bot("Enviando seu pedido…", 700);
      let ok = true;
      if (FORMSPREE_ENDPOINT) {
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(v),
          });
          if (!res.ok) ok = false;
        } catch {
          ok = false;
        }
      } else {
        await esperar(800);
        window.location.href = mailtoOrcamento(v.produto, v.nome, v.empresa, v.whatsapp, v.mensagem);
      }
      if (!vivo) return;
      await bot(ok ? "Pedido enviado. O time Niju responde em breve." : "Não foi desta vez. Tente de novo ou escreva para vendas@niju.com.br.", 900);
      setPronto(true);
    })();
    return () => {
      vivo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enviarTexto = (e: React.FormEvent) => {
    e.preventDefault();
    const fn = espera.current;
    espera.current = null;
    if (fn) fn(entrada);
    setEntrada("");
  };
  const responder = (texto: string) => {
    const fn = espera.current;
    espera.current = null;
    if (fn) fn(texto);
  };

  return (
    <div className="flex min-h-[560px] flex-col overflow-hidden rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)]">
      <div className="flex items-center gap-3 border-b border-[var(--n-line)] p-5">
        <img src="assets/logo-niju.png" alt="" aria-hidden className="h-10 w-10 rounded-full object-cover [mix-blend-mode:screen]" />
        <div className="flex-1">
          <p className="font-bold leading-tight">Niju</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--n-text-2)]">Orçamento de implementos</p>
        </div>
        {!pronto && <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--n-text-2)]">{etapa + 1} DE {TOTAL}</p>}
      </div>

      <div ref={caixa} aria-live="polite" className="flex min-h-[300px] flex-1 flex-col gap-3 overflow-y-auto p-5">
        {msgs.map((m, i) =>
          m.de === "bot" ? (
            <p key={i} className="lp-msg max-w-[85%] self-start rounded-2xl rounded-tl-md bg-[var(--n-canvas)] px-4 py-3">
              {m.texto}
            </p>
          ) : (
            <p key={i} className="lp-msg max-w-[85%] self-end rounded-2xl rounded-tr-md bg-[var(--n-accent)] px-4 py-3 text-white">
              {m.texto}
            </p>
          ),
        )}
        {digitando && (
          <p aria-hidden className="lp-digitando flex max-w-[85%] items-center gap-1.5 self-start rounded-2xl rounded-tl-md bg-[var(--n-canvas)] px-4 py-3.5">
            <i />
            <i />
            <i />
          </p>
        )}
      </div>

      {!pronto && !chips && (
        <form onSubmit={enviarTexto} className="flex items-center gap-2 border-t border-[var(--n-line)] p-4">
          {pular && (
            <button type="button" onClick={() => responder("")} className="flex-none font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--n-text-2)] hover:text-[var(--n-text-1)]">
              Pular
            </button>
          )}
          <label htmlFor="chat-entrada" className="sr-only">
            Sua resposta
          </label>
          <input
            id="chat-entrada"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            placeholder="Escreva aqui…"
            autoComplete="off"
            className="lp-field flex-1 !rounded-full"
          />
          <button type="submit" aria-label="Enviar" className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[var(--n-accent)] text-white transition-colors hover:bg-[var(--n-accent-hover)]">
            <ArrowRight size={18} aria-hidden />
          </button>
        </form>
      )}
      {!pronto && chips && (
        <div className="flex flex-wrap gap-2 border-t border-[var(--n-line)] p-4">
          {produtos.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => responder(p)}
              className="rounded-full border border-[var(--n-line)] px-4 py-2 text-sm font-bold transition-colors hover:border-[var(--n-accent-soft)]"
            >
              {p}
            </button>
          ))}
        </div>
      )}
      {pronto && (
        <div className="flex items-center justify-between gap-3 border-t border-[var(--n-line)] p-4">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--n-text-2)]">ORÇAMENTO ENVIADO</p>
          <button type="button" onClick={() => window.location.reload()} className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--n-accent-soft)] hover:underline">
            Começar de novo
          </button>
        </div>
      )}
      <p className="flex items-center justify-center gap-2 px-4 pb-4 text-center font-mono text-[11px] leading-relaxed text-[var(--n-text-2)]">
        <Mail size={13} aria-hidden className="flex-none" />
        {FORMSPREE_ENDPOINT ? "Sem compromisso. Seus dados vão direto para o comercial Niju." : `Sem compromisso. Seus dados abrem um e-mail para ${contato.email}.`}
      </p>
    </div>
  );
}
