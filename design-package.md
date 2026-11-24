# Design Package · LP Niju

Fase 5, escrito em 2026-11-23. Nada aqui foi gerado ainda. Aprovação deste documento libera a Fase 6.

## 1. Premissa da marca

DURA MAIS. A página vende uma ideia, saída da bio oficial (@niju.camaras): Com Niju dura mais. Cada capítulo prova com fato: homologação nos gigantes, engenharia própria e estrada. O que não serve à premissa não entra na página.

Decisões travadas: caminho A (vídeo), conceito Descida da madrugada, Tier 2 (15 a 25 s), abertura de marca V1 (máscara que abre e acende), Trio A Estrada, ação única em formulário de orçamento.

## 2. Paleta em tokens CSS

Direção tirada do logo e do mundo da cena (valores exatos finalizados no quadro aprovado, após o gate do vídeo):

```css
:root{
  --canvas:#101418;        /* fundo grafite, nunca preto puro */
  --panel:#181e26;         /* cards e superfícies */
  --accent:#2b3ff2;        /* CTA e ênfases raras */
  --accent-hover:#4356ff;  /* hover do CTA */
  --accent-muted:#2b3ff233;/* bordas, brilhos, fios */
  --text-secondary:#9aa4b2;
  --text-primary:#f4f6fa;
  --gelo:#cfe0ff;          /* parágrafos sobre o vídeo */
}
```

## 3. Trio de fontes

Trio A Estrada (vitrine aprovada): Anton 400 para display, Archivo 400/500/700 para corpo, IBM Plex Mono 400/500 para rótulos e capítulos, Instrument Serif Italic 400 para a palavra-chave do título. Hospedadas no próprio site (`public/fonts`, `@font-face`, `preload`).

## 4. Mapa de faixas (pontos de partida, validados no teste de flick)

Sequência de 4 trechos de 6 s emendados, cerca de 24 s. Cada texto fica o equivalente a 4,5 s ou mais.

| Faixa | Faixa (ponto de partida) | Momento do vídeo | Copy (literal) | Entrada |
|---|---|---|---|---|
| 1 | 0.00 a 0.08 | Névoa parada no escuro, antes da descida | logo + "IMPLEMENTOS RODOVIÁRIOS · DESDE 1994" | máscara que abre, logo acende |
| 2 | 0.10 a 0.32 | Descida pela névoa, a estrada surge embaixo | "Com Niju dura mais." / "Semirreboques frigoríficos e baús que rodam o Brasil e o Mercosul." | palavras sobem da máscara |
| 3 | 0.34 a 0.58 | A estrada abre, a carreta aparece ao longe | "Homologada onde a carga é exigente." / "Aurora, BRF, JBS, Seara e DIA." | palavras + linha que se desenha |
| 4 | 0.60 a 0.82 | Aproximação até a carreta de três quartos | "Do paleteiro ao baú, um Niju para cada carga." | palavras sobem da máscara |
| 5 | 0.84 a 1.00 | Quadro final em repouso, carreta composta com margem | "Peça seu orçamento." + botão "Solicitar orçamento" | subida + botão |

## 5. Copy do topo estático (celular, movimento reduzido, falha do vídeo)

Foto vertical própria em tela cheia (CSS `cover` sobre o original, sem converter arquivo): `contexto/portfolio-sebominas.jpg`.

- Rótulo: "IMPLEMENTOS RODOVIÁRIOS · CHAPECÓ SC"
- Título: "Com Niju dura mais."
- Apoio: "Semirreboques frigoríficos e baús homologados nos maiores frigoríficos do país."
- Botão: "Solicitar orçamento" para #orcamento.
- Logo V1 acima do título, já revelado, sem animação quando houver movimento reduzido.

## 6. Seções abaixo do topo (copy literal, tudo leva a #orcamento)

### CAPÍTULO 02 · MANIFESTO

"Carreta boa é carreta que roda."
"A Niju constrói para rodar mais e parar menos."
Sem botão. Palavras-chave acesas, resto apagado.

### CAPÍTULO 03 · HOMOLOGAÇÕES

Rótulo: "CAPÍTULO 03 · PROVA"
Título: "Homologada nos maiores frigoríficos do país."
Apoio: "Se o seu frigorífico não está na lista, pergunte no orçamento."
Logos em linha: Aurora, BRF, JBS, Seara, DIA. (BRF e Seara pendentes: originais com erro 403, pedir ao cliente.)

### CAPÍTULO 04 · PRODUTOS (momento interativo: abas no desktop, carrossel com scroll-snap no celular)

Rótulo: "CAPÍTULO 04 · PRODUTOS"
Título: "Um Niju para cada carga."
Apoio: "Fotos reais, ficha técnica de verdade. Toque para ver cada um."

1. "SEMIRREBOQUE FRIGORÍFICO PALETEIRO" / "Assoalho em dois modelos e a Geladeira, criação da casa." / foto `contexto/produto-paleteiro.png`
2. "SEMIRREBOQUE FRIGORÍFICO GANCHEIRO" / "O frigorífico gancheiro com o quadro inox exclusivo." / foto `contexto/produto-gancheiro.png`
3. "BAÚ METÁLICO" / "Assoalho trapezoidal e construção certificada ISO 9001." / foto `contexto/produto-bau-metalico.png`
4. "BAÚ PLÁSTICO" / "Com reservatório de água e caixa de ferramenta acoplados." / foto `contexto/produto-bau-plastico.png`

Cada card termina em "Pedir orçamento deste" para #orcamento com o produto pré-escolhido.

### CAPÍTULO 05 · POR QUE NIJU

Rótulo: "CAPÍTULO 05 · ENGENHARIA"
Título: "Feita para durar mais."
4 pilares, um fato por card:

1. "Quadro inox exclusivo" / "Traseiro arredondado em inox, só a Niju tem. As forças se distribuem e a fissura não abre."
2. "Isolamento sem emendas" / "Camada isolante sem emenda e sem deformação. Mais frio com menos diesel."
3. "Baixa manutenção" / "Suspensão com terminal molecular: absorve choque e torção, poupa pneu e oficina."
4. "Pintura que segura" / "Antioxidante nas soldas e gel protetor por fora. Cor, brilho e resistência por mais tempo."

### CAPÍTULO 06 · PORTFÓLIO

Rótulo: "CAPÍTULO 06 · ESTRADA"
Título: "Na estrada com quem carrega o país."
Apoio: "Investimentos que já rodam por todo o Brasil."
Carrossel de fotos reais com nome do cliente: Sebominas, Nobre, Gral, Brilhante, Hergert, Friboi. Desktop: card que cresce com a rolagem. Celular: carrossel com régua.

### CAPÍTULO 07 · EMPRESA

Rótulo: "CAPÍTULO 07 · A CASA"
Título: "Desde 1994 em Chapecó."
Linha do tempo com nós que acendem:

1. "1994" / "A Niju começa em Chapecó, SC."
2. "Hoje" / "Entre as maiores do segmento, presente em todos os países do Mercosul."
3. "A caminho" / "Nova unidade fabril só para baús frigoríficos."

### CAPÍTULO 08 · DÚVIDAS

Rótulo: "CAPÍTULO 08 · DÚVIDAS"
Título: "Pergunte sem medo."

1. "Atende a minha região?" / "A Niju roda o Brasil e está presente em todos os países do Mercosul. Confirme a sua rota no orçamento."
2. "O produto é homologado no meu frigorífico?" / "Aurora, BRF, JBS, Seara e DIA já homologaram. Diga o seu no formulário que o comercial confirma."
3. "Como funciona o orçamento?" / "Você preenche o formulário e o time comercial responde com proposta. Sem compromisso."
4. "E peças e pós-venda?" / "A Niju vende peças e atende pelos canais oficiais: +55 49 3361-5191 e vendas@niju.com.br."
5. "Onde fica a fábrica?" / "Rua Delfim Moreira da C. 698D, Bela Vista, Chapecó, SC."

### CAPÍTULO 09 · ORÇAMENTO

Rótulo: "CAPÍTULO 09 · ORÇAMENTO"
Título: "Solicite um orçamento."
Apoio: "Preencha e receba proposta do time Niju."
Campos: "Nome" / "Empresa" / "WhatsApp" / "Produto de interesse (Paleteiro, Gancheiro, Baú metálico, Baú plástico, Ainda não sei)" / "Mensagem (conte a sua operação)".
Botão: "Enviar pedido de orçamento".
Sucesso: "Pedido enviado. O time Niju responde em breve."
Envio: Formspree com conta do cliente (pendente: cliente criar e entregar o endpoint). Até lá, `mailto:vendas@niju.com.br` com o texto montado. Dizer a verdade na página sobre para onde vai o dado.

### RODAPÉ

"NIJU INDÚSTRIA E COMÉRCIO DE IMPLEMENTOS RODOVIARIOS LTDA · CNPJ 00.087.181/0001-35"
"Rua Delfim Moreira da C. 698D, Bela Vista, Chapecó, SC · +55 49 3361-5191 · vendas@niju.com.br"
Links: Instagram @niju.camaras, Facebook, site oficial, início da página.
Marca real: sem aviso de conteúdo fictício.

## 7. Plano da camada vetorial

- Elemento-assinatura: um fio de luz azul que serpenteia entre as seções e se desenha com a rolagem (só no desktop, desligado no celular).
- Divisores: linhas finas que se desenham após a entrada do título de cada capítulo.
- Portal circular na entrada e na saída da cena do topo.
- Números em caça-níquel: 1994, 5 homologações, 4 produtos.
- Movimento reduzido: estados finais visíveis, tudo parado.

## 8. Lista de engenharia

Padrão cheio, sem meia medida: vídeo baixado como Blob com anel de espera, interpolação normalizada por dt, buscas com trava, escritas no DOM com trava por delta, faixas com teste de flick, sistema de legibilidade em 4 camadas (véu local, sombra real, checagem no pior quadro, região calma), 5 portas do topo estático com escuta de mudança, página completa sem o vídeo e piso de qualidade. Detalhe em `scrub-pipeline.md` da skill, lido antes da Fase 8. Site todo animado no nível sussurro, curvas só do MOTION-DESIGN-SYSTEM.md.

## 9. Linha do gate de copy

Toda linha acima entra literal na construção. A página construída passa no gate da Fase 9 antes de ser vista: zero travessão, zero clichês da lista, varredura de vícios de IA. Dispositivos de marca deste package ("Com Niju dura mais.", "Feita para durar mais.") são ofício e ficam.

## 10. Prompts (geração só após aprovação deste package)

Quadro inicial (imagem 16:9, 2k): "A refrigerated semi-trailer on an empty highway at dawn seen from high above through cold mist, positioned in the lower third so a vertical descent can begin, composed as the first moment of a motion that will glide straight down through the mist toward the road. Cold blue hour light from the left, warm horizon glow far ahead. Palette: deep graphite asphalt and night air, steel blue mist, icy pale blue highlights, one warm amber horizon band. Atmosphere: slow drifting mist layers, faint distant city glow, thin light streaks. The frame is one continuous world edge to edge, the mist calm and even across the full width where captions will sit. Cinematic, photorealistic, 16:9. No text, no logos, no lettering anywhere."

Trecho 1 (6 s): "One continuous shot, no cuts. The camera descends straight down the center of frame through layered cold mist from high above toward a dawn highway. The mist stays alive throughout: slow swirls and parting veils. The scene stays alive: shifting blue hour light, faint streaks. The shot ends mid-motion inside thick mist with the road glow rising below. No text or lettering anywhere."

Trecho 2 (6 s): "One continuous shot, no cuts. The camera continues straight down the center of frame, breaking through the last mist veil as a refrigerated semi-trailer appears ahead on the road below, small and distant. The mist parts around the lens with a soft blur beat. The scene stays alive: drifting mist, brightening horizon. The shot ends mid-motion, still descending toward the trailer. No text or lettering anywhere."

Trecho 3 (6 s): "One continuous shot, no cuts. The camera continues straight down the center of frame, approaching the refrigerated semi-trailer as it grows from distant to near three-quarter view. The trailer stays alive: subtle suspension sway, faint vapor breathing from the cooling unit. The scene stays alive: mist streaming past, dawn light rising. The shot ends mid-motion, close and still gliding. No text or lettering anywhere."

Trecho 4 (6 s): "One continuous shot, no cuts. The camera settles straight down the center of frame to rest facing the refrigerated semi-trailer in full three-quarter view with generous margin above and below the whole vehicle. The trailer stays alive: gentle vapor breath, soft light play on the panels. The scene stays alive: calm mist floor, steady dawn glow. The shot ends at rest: the trailer composed center frame with open road around it, light settled, arrival felt. No text or lettering anywhere."

Foto estática do celular: original de `contexto/`, sem geração.

## 11. Custo e saldo

Referência do método: quadro inicial cerca de 2 créditos; cada trecho de 6 s em 1080p de 10 a 55 créditos conforme o modelo. Total estimado: 42 a 222 créditos, mais rascunho barato em 480p para aprovar o movimento antes da versão final. Saldo e conta: desconhecidos, sem acesso ao Higgsfield nesta sessão. Antes de gastar: conectar a conta, perguntar em qual conta gerar, consultar o preço exato de graça (quadro, depois o mesmo trecho em 2 ou 3 modelos) e apresentar os números. Gate do vídeo vale por trecho aprovado.

## 12. Celular, dito com clareza

O vídeo aparece só no computador. No celular entra foto vertical própria com os mesmos textos, carrossel com scroll-snap no lugar de palco grudado, efeitos pesados desligados e Lenis só com mouse ou trackpad. Fluidez medida em quadros por segundo no Android antes de mostrar.
