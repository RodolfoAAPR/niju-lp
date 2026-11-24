import { Capitulo, Titulo } from "@/components/Editorial";

/* CAPÍTULO 08 · Dúvidas: respostas às objeções, nas palavras do público. */

const duvidas = [
  {
    p: "Atende a minha região?",
    r: "A Niju roda o Brasil e está presente em todos os países do Mercosul. Confirme a sua rota no orçamento.",
  },
  {
    p: "O produto é homologado no meu frigorífico?",
    r: "Aurora, BRF, JBS, Seara e DIA já homologaram. Diga o seu no formulário que o comercial confirma.",
  },
  {
    p: "Como funciona o orçamento?",
    r: "Você preenche o formulário e o time comercial responde com proposta. Sem compromisso.",
  },
  {
    p: "E peças e pós-venda?",
    r: "A Niju vende peças e atende pelos canais oficiais: +55 49 3361-5191 e vendas@niju.com.br.",
  },
  {
    p: "Onde fica a fábrica?",
    r: "Rua Delfim Moreira da C. 698D, Bela Vista, Chapecó, SC.",
  },
];

export default function Duvidas() {
  return (
    <section id="duvidas" className="lp-pad py-12 md:py-16">
      <Capitulo>Capítulo 10 · Dúvidas</Capitulo>
      <Titulo className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
        Pergunte <em>sem medo.</em>
      </Titulo>
      <div data-reveal className="mt-8 max-w-3xl border-t border-[var(--n-line)]">
        {duvidas.map((d) => (
          <details key={d.p} className="lp-duvida" name="duvidas">
            <summary>{d.p}</summary>
            <p className="lp-resposta">{d.r}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
