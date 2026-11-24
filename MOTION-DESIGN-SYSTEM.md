# NIJU · Design System de Motion

Vale para a LP e para tudo que vier depois: vídeos de anúncio, motion para redes, novas seções.

## 1. Essência

- **Em uma frase:** implementos que duram mais na estrada.
- **Sensação:** fria, pesada, precisa.
- **O que nunca é:** agitada, colorida, tech genérica, engraçadinha.

## 2. Logo

- Arquivo: `app/public/assets/logo-niju.png` (imagem com fundo preto, sem vetor até aqui).
- Como some o fundo: `mix-blend-mode: screen` sobre cenas escuras, ou selo com fundo próprio.
- Animações permitidas: revelação por máscara que abre (V1 aprovada), acendimento com brilho azul, varredura de luz única. Proibidas: girar, quicar, inclinar, recolorir.
- Sem vetor: nunca redesenhar o letreiro com fonte parecida. Vetorização só traçando o original, com OK lado a lado.
- Respiro mínimo: altura da letra N ao redor. Tamanho mínimo: 120 px de largura no digital.

## 3. Cores

| Token | Hex | Uso |
|---|---|---|
| `--canvas` | `#101418` | fundo |
| `--panel` | `#181e26` | superfície |
| `--line` | `#ffffff1f` | linhas sutis |
| `--accent` | `#2b3ff2` | sinal, CTA, fio de luz (raro) |
| `--accent-hover` | `#4356ff` | hover |
| `--accent-soft` | `#7d8bff` | palavra em destaque no título |
| `--gelo` | `#cfe0ff` | parágrafos sobre o vídeo |
| `--text-1` / `--text-2` | `#f4f6fa` / `#9aa4b2` | texto |

Sem cor de prestígio: a Niju não tem prêmios no package. Se entrar, será aço claro, nunca dourado genérico.

## 4. Tipografia

- Display: Anton 400, títulos grandes, entrelinha perto de 1.
- Corpo: Archivo 400/500/700.
- Destaque: Instrument Serif itálico 400, só dentro de títulos (`<em>`), sempre em `--accent-soft`.
- Rótulos: IBM Plex Mono 400/500, caixa alta, espaçamento 0,3 em.
- A cara da marca: rótulo mono azul acima, título gigante Anton, palavra-chave em serifada itálica azul clara.

## 5. Movimento

### 5.1 Curvas (só estas)

| Nome | cubic-bezier | Quando |
|---|---|---|
| Marca | `0.4, 0, 0.1, 1` | geral, câmera, transições |
| Saída | `0.16, 1, 0.3, 1` | entradas |
| Botão | `0.35, 0, 0, 1` | microinterações |

### 5.2 Durações

| Animação | Duração | Detalhe |
|---|---|---|
| Palavras do título | 1,0 s | 55 ms entre palavras, máscara com folga para acento |
| Bloco de texto | 0,9 s | sobe 22 px + aparece |
| Números | 1,4 s | caça-níquel, 45 ms por dígito |
| Linha que se desenha | 1,0 s | 250 ms depois do texto |
| Abertura de marca V1 | 1,6 s máscara + 1,2 s acender | apoio sobe aos 1,5 s |
| Portal | 1,3 s | curva Saída |
| Texto na tela (vídeo) | **mínimo 4,5 s** | tempo de leitura |

### 5.3 Regras

- Um movimento por elemento. Tudo entra uma vez. Nada pisca.
- Câmera lenta e contínua. Sem cortes secos no meio de um movimento.
- Azul aparece: CTA, nós acesos, fio de luz, palavra em itálico. Em mais nada.

## 6. Motivos visuais

- Fio de frio: fio de luz azul que serpenteia entre as seções e se desenha com a rolagem. Só desktop. É a assinatura.
- Portal circular: abre e fecha a cena do topo. Repete em fotos no celular.
- Névoa: fundo vivo das cenas, nunca atrás de texto sem véu.
- Linha capitular: traço fino que se desenha sob o título de cada capítulo.

## 7. Imagem e cena

- Estilo: madrugada fria, blue hour, névoa, asfalto grafite, um filete âmbar no horizonte. Fotorrealista, cinematográfico.
- Prompts aprovados: `design-package.md` seção 10. Cópias de geração em `review/prompts/` na Fase 6.
- Prontos em `app/public/assets/`: 18 fotos oficiais + logo (lista em `contexto/fontes.md`). Vídeos: pendentes (conta Higgsfield).

## 8. Composição

- Desktop 16:9: ação no centro ou terço inferior, texto no terço inferior esquerdo com véu.
- Celular 9:16: foto cheia, texto inferior com véu forte, sem vídeo.
- Títulos: margem generosa, nada encosta no menu nem nas bordas.

## 9. Roteiro-base

Usar exatamente assim: "Com Niju dura mais." / "Feita para durar mais." / "Carreta boa é carreta que roda." / "Solicite um orçamento." / "Enviar pedido de orçamento" / "Desde 1994 em Chapecó." / Números: 1994, 4 produtos, 5 homologações (Aurora, BRF, JBS, Seara, DIA), CNPJ 00.087.181/0001-35.

## 10. Som

Sem som na LP. Peças futuras: grave contínuo, sem batida marcada.

## 11. Checklist antes de entregar

- [ ] Só as três curvas.
- [ ] Texto no mínimo 4,5 s na tela.
- [ ] Azul só onde o sistema manda.
- [ ] Logo dentro das regras.
- [ ] Números e textos iguais ao roteiro-base.
