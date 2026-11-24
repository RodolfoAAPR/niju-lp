import { useEffect, useState } from "react";
import { Capitulo, Titulo } from "@/components/Editorial";
import { contato, mailtoOrcamento } from "@/lib/contato";

/* CAPÍTULO 09 · Orçamento: a ação única.
   Envio atual: abre o e-mail para o comercial Niju com o texto montado (a página diz isso com clareza).
   Quando o cliente entregar o endpoint do Formspree, basta preencher FORMSPREE_ENDPOINT abaixo. */

const FORMSPREE_ENDPOINT = "";

const opcoes = ["Paleteiro", "Gancheiro", "Baú metálico", "Baú plástico", "Ainda não sei"] as const;
const ids: Record<string, string> = { paleteiro: "Paleteiro", gancheiro: "Gancheiro", metalico: "Baú metálico", plastico: "Baú plástico" };

export default function Orcamento() {
  const [produto, setProduto] = useState<string>("Ainda não sei");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    try {
      const salvo = localStorage.getItem("niju-produto");
      if (salvo && ids[salvo]) setProduto(ids[salvo]);
    } catch {
      /* sem storage */
    }
  }, []);

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");
    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get("nome") || "").trim();
    const empresa = String(dados.get("empresa") || "").trim();
    const whatsapp = String(dados.get("whatsapp") || "").trim();
    const mensagem = String(dados.get("mensagem") || "").trim();
    if (!nome || !whatsapp) {
      setErro("Faltam nome e WhatsApp para o comercial responder.");
      return;
    }
    if (FORMSPREE_ENDPOINT) {
      try {
        const r = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ nome, empresa, whatsapp, produto, mensagem }),
        });
        if (!r.ok) throw new Error();
      } catch {
        setErro("Não foi desta vez. Tente de novo ou escreva para vendas@niju.com.br.");
        return;
      }
    } else {
      window.location.href = mailtoOrcamento(produto, nome, empresa, whatsapp, mensagem);
    }
    setEnviado(true);
  };

  return (
    <section id="orcamento" className="lp-pad py-16 md:py-24">
      <Capitulo>Capítulo 09 · Orçamento</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Solicite um <em>orçamento.</em>
      </Titulo>
      <p data-reveal className="lp-intro mt-6 max-w-[40ch]">
        Preencha e receba proposta do time Niju.
      </p>

      <div data-reveal className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {enviado ? (
          <div role="status" className="flex min-h-[320px] flex-col items-start justify-center gap-4 rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)] p-8">
            <span aria-hidden className="lp-display text-6xl text-[var(--n-accent-soft)]">
              OK
            </span>
            <p className="text-2xl font-bold">Pedido enviado.</p>
            <p className="text-[var(--n-text-2)]">O time Niju responde em breve.</p>
          </div>
        ) : (
          <form onSubmit={enviar} className="flex flex-col gap-4 rounded-2xl border border-[var(--n-line)] bg-[var(--n-panel)] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
                Nome
                <input name="nome" required autoComplete="name" placeholder="Seu nome" className="lp-field normal-case tracking-normal" />
              </label>
              <label className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
                Empresa
                <input name="empresa" autoComplete="organization" placeholder="Sua transportadora" className="lp-field normal-case tracking-normal" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
                WhatsApp
                <input name="whatsapp" required inputMode="tel" autoComplete="tel" placeholder="(49) 90000-0000" className="lp-field normal-case tracking-normal" />
              </label>
              <label className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
                Produto de interesse
                <select name="produto" value={produto} onChange={(e) => setProduto(e.target.value)} className="lp-field normal-case tracking-normal">
                  {opcoes.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--n-text-2)]">
              Mensagem
              <textarea name="mensagem" rows={4} placeholder="Conte a sua operação" className="lp-field normal-case tracking-normal" />
            </label>
            {erro && (
              <p role="alert" className="rounded-xl border border-[#e5484d] p-4 text-[#ff9a9e]">
                {erro}
              </p>
            )}
            <button type="submit" className="lp-btn lp-btn--claro justify-center">
              <span aria-hidden className="lp-btn-dot" />
              <span className="lp-btn-txt">Enviar pedido de orçamento</span>
            </button>
            <p className="font-mono text-[11px] leading-relaxed tracking-[0.06em] text-[var(--n-text-2)]">
              {FORMSPREE_ENDPOINT
                ? "Seus dados vão direto para o comercial Niju."
                : `Seus dados abrem um e-mail para ${contato.email}. Nada fica salvo nesta página.`}
            </p>
          </form>
        )}

        <aside className="flex flex-col justify-center gap-6 rounded-2xl border border-[var(--n-line)] p-8">
          <p className="lp-eyebrow">Prefere falar direto</p>
          <a href={contato.telefoneHref} className="lp-display text-3xl md:text-4xl">
            {contato.telefoneExibido}
          </a>
          <a href={`mailto:${contato.email}`} className="text-lg text-[var(--n-gelo)] underline-offset-4 hover:underline">
            {contato.email}
          </a>
          <p className="text-[var(--n-text-2)]">{contato.endereco}</p>
        </aside>
      </div>
    </section>
  );
}
