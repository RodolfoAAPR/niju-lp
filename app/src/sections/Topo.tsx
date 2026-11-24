import ScrollVideo from "@/components/ScrollVideo";
import { Botao, Palavras, Rolo } from "@/components/Editorial";
import { cn } from "@/lib/utils";

/* Topo com a cena Descida da madrugada (Tier 2).
   PROVISÓRIO: os vídeos /assets/topo.mp4 e /assets/topo-rev.mp4 ainda não existem (Fase 6 travada no login
   do Higgsfield). Sem eles a cena nasce no modo estático, completa e bonita. Quando o vídeo for aprovado,
   basta gerar os dois arquivos com o ffmpeg da Fase 7 e reconstruir: nada aqui muda. */

function Faixa({ band, rotulo, titulo, apoio }: { band: string; rotulo: string; titulo: React.ReactNode; apoio?: string }) {
  return (
    <div data-band={band} className="lp-pad absolute inset-y-0 left-0 right-0 flex flex-col items-center justify-center text-center opacity-0 [&>*]:max-w-[900px]" style={{ visibility: "hidden" }}>
      <p className="lp-eyebrow lp-over-video">{rotulo}</p>
      <h2 className="lp-display lp-over-video mt-8 text-[clamp(2.6rem,7vw,5.5rem)] text-white">
        <Palavras>{titulo}</Palavras>
      </h2>
      {apoio && <p className="lp-intro lp-over-video mt-8 max-w-[34ch]">{apoio}</p>}
    </div>
  );
}

/* Abertura de marca V1: só o logo, a máscara abre e o logo acende. Roda quando o pai ganha .is-in. */
function MarcaHero({ className }: { className?: string }) {
  return (
    <div className={cn("lp-marca-hero flex flex-col items-center gap-7", className)}>
      <div className="lp-marca-mascara w-[min(62vw,520px)]">
        <img src="assets/logo-niju.png" alt="Niju Implementos Rodoviários" className="h-auto w-full" decoding="async" />
      </div>
      <p className="lp-eyebrow lp-marca-linha lp-over-video text-center">Desde 1994</p>
    </div>
  );
}

export default function Topo() {
  return (
    <ScrollVideo
      id="topo"
      prioridade
      src="assets/topo.mp4"
      srcReverso="assets/topo-rev.mp4"
      poster="assets/aerea-fabrica.jpg"
      still="assets/aerea-fabrica.jpg"
      stillAlt="Vista aérea da fábrica da Niju em Chapecó"
      velocidade={1}
      stillCelular="assets/portfolio-sebominas.jpg"
      blocoCelular="50% 40%"
      aspectoBloco="4 / 5"
      portalEstatico={false}
      staticContent={
        <div className="lp-pad relative flex min-h-[100svh] flex-col items-center justify-center gap-6 py-24 text-center max-[899px]:min-h-0 max-[899px]:justify-start max-[899px]:pb-16 max-[899px]:pt-10">
          <h1 data-words className="lp-display lp-over-video max-w-[12ch] text-[clamp(2.8rem,7.5vw,6rem)] text-white">
            <Palavras>
              Com Niju <em>dura mais.</em>
            </Palavras>
          </h1>
          <p data-reveal className="lp-intro lp-over-video max-w-[34ch]">
            Semirreboques frigoríficos e baús homologados nos maiores frigoríficos do país.
          </p>
          <p data-reveal>
            <Botao href="#orcamento">Solicitar orçamento</Botao>
          </p>
          <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--n-text-2)]">
            Orçamento em 5 perguntas · Sem compromisso
          </p>
          <dl data-reveal className="flex w-full flex-wrap justify-center gap-3">
            {[
              ["30+", "anos de estrada"],
              ["4", "produtos na linha"],
              ["5", "homologações"],
              ["1994", "fundada em Chapecó"],
            ].map(([n, rotulo]) => (
              <div key={rotulo} className="flex min-w-[130px] flex-1 flex-col gap-1 rounded-xl border border-[var(--n-line)] bg-black/40 px-4 py-3 sm:flex-none sm:basis-[calc(25%-0.75rem)]">
                <dd className="lp-display text-3xl text-white">
                  <Rolo texto={n} />
                </dd>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--n-text-2)]">{rotulo}</dt>
              </div>
            ))}
          </dl>
        </div>
      }
    >
      <div data-band="0 0.08" className="absolute inset-0 flex items-center justify-center opacity-0" style={{ visibility: "hidden" }}>
        <MarcaHero />
      </div>
      <Faixa
        band="0.10 0.32"
        rotulo="Capítulo 01 · A marca"
        titulo={
          <>
            Com Niju <em>dura mais.</em>
          </>
        }
        apoio="Semirreboques frigoríficos e baús que rodam o Brasil e o Mercosul."
      />
      <Faixa
        band="0.34 0.58"
        rotulo="Capítulo 02 · A prova"
        titulo="Homologada onde a carga é exigente."
        apoio="Aurora, BRF, JBS, Seara e DIA."
      />
      <Faixa band="0.60 0.82" rotulo="Capítulo 03 · A linha" titulo="Do paleteiro ao baú, um Niju para cada carga." />
      <div data-band="0.84 1" className="lp-pad absolute inset-y-0 left-0 right-0 flex flex-col items-center justify-center text-center opacity-0" style={{ visibility: "hidden" }}>
        <p className="lp-eyebrow lp-over-video">Capítulo 04 · O passo</p>
        <h2 className="lp-display lp-over-video mt-8 text-[clamp(2.6rem,7vw,5.5rem)] text-white">
          <Palavras>Peça seu orçamento.</Palavras>
        </h2>
        <p className="mt-8">
          <Botao href="#orcamento">Solicitar orçamento</Botao>
        </p>
      </div>
    </ScrollVideo>
  );
}
