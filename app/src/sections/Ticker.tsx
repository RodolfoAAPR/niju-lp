/* Letreiros rolantes, como os da LP de referência: duas faixas em sentidos opostos.
   Animação só de transform (barata), parada com movimento reduzido. */

const faixa1 = ["Homologada Aurora", "BRF", "JBS", "Seara", "DIA"];
const faixa2 = ["Desde 1994", "Chapecó SC", "Brasil e Mercosul", "ISO 9001", "Padrão Niju"];

function Faixa({ itens, reverso = false, rotulo }: { itens: string[]; reverso?: boolean; rotulo: string }) {
  const fila = (oculta: boolean) => (
    <div aria-hidden={oculta} className="flex shrink-0 items-center">
      {itens.concat(itens).map((t, i) => (
        <span key={i} className="flex items-center gap-6 pr-6 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--n-text-2)]">
          {t}
          <i aria-hidden className="lp-dot" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="lp-ticker border-y border-[var(--n-line)] py-4" role="marquee" aria-label={rotulo}>
      <div className={reverso ? "lp-ticker-pista lp-ticker-reverso" : "lp-ticker-pista"}>
        {fila(false)}
        {fila(true)}
      </div>
    </div>
  );
}

export default function Ticker() {
  return (
    <section aria-label="Destaques" className="flex flex-col gap-3 py-4">
      <Faixa itens={faixa1} rotulo="Frigoríficos homologados" />
      <Faixa itens={faixa2} reverso rotulo="A casa" />
    </section>
  );
}
