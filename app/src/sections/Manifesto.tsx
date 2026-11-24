/* CAPÍTULO 02 · Manifesto: uma frase grande que acende palavra por palavra. Sem botão. */

const frase = "Carreta boa é carreta que roda.".split(" ");

export default function Manifesto() {
  return (
    <section aria-label="Manifesto" className="lp-pad py-16 md:py-24">
      <p className="lp-manifesto lp-display max-w-[16ch] text-[clamp(2.2rem,6vw,4.5rem)]">
        {frase.map((p, i) => (
          <span key={i}>
            <span>{p}</span>
            {i < frase.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
      <p data-reveal className="lp-intro mt-10 max-w-[40ch]">
        A Niju constrói para rodar mais e parar menos.
      </p>
    </section>
  );
}
