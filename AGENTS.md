# NIJU · LP "O padrão que roda o Brasil"

Contexto para quem (pessoa ou agente de IA) for mexer nesta landing page. Leia inteiro antes de mudar qualquer coisa.

- **No ar (apresentação):** https://rodolfoaapr.github.io/niju-lp/ (GitHub Pages via Actions, indexado).
- **Domínio oficial:** a definir (publicado com `SITE_URL=https://dominio npm run build`).
- **Código:** `app/` (React 19 + Vite + TypeScript + Tailwind v4, pré-renderizado).
- **Remoto:** https://github.com/RodolfoAAPR/niju-lp (branch `main`). Pasta local segue `lp-niju`, padrão da skill.
- **Decisões de criação:** `design-package.md`. **Movimento:** `MOTION-DESIGN-SYSTEM.md`.
- **Fonte dos fatos:** `contexto/` (textos oficiais do cliente). Nenhum número, nome ou promessa fora dele.
- **Brutos e testes:** `review/` (nunca vai para o site).

## O que é a marca

A Niju fabrica implementos rodoviários em Chapecó, SC, desde 1994: semirreboques frigoríficos (paleteiro e gancheiro), baú metálico e baú plástico. Vende para transportadoras e frigoríficos no Brasil e no Mercosul. A tese da página: produto homologado nos maiores frigoríficos do país, com engenharia própria e durabilidade Padrão Niju. Ação única: formulário de orçamento.

## Regras do dono (não negociáveis)

1. Português do Brasil, frases curtas, palavras simples. Sem travessão em nada, nem no chat nem no site: usar vírgula, dois pontos ou ponto.
2. Mídia nos arquivos originais. Nunca comprimir, converter ou criar versões menores. Peso se resolve com hospedagem (R2).
3. Componentes de terceiros entram com código original em `src/components/ui/`. Personalização só por fora.
4. Nada inventado: números, clientes, homologações e promessas só com fonte do cliente em `contexto/`.
5. Ajuste só no que foi apontado. Feedback com print vale para aquela parte.
6. Commits em conventional commits. Push e publicação só com pedido explícito.

## Rodar, testar, publicar

```bash
cd app
npm install
npm run dev                                # http://localhost:8080
npm run build                              # dist/ completo (qualquer hospedagem), fora do Google
SITE_URL=https://dominio npm run build     # versão oficial
npm run build:pages                        # só se a mídia estiver no R2 (link de apresentação)
```

Deploy do link de apresentação: `npx wrangler pages deploy dist --project-name <projeto> --branch main --commit-dirty=true`.

## Arquitetura da página

Ordem das seções (`app/src/App.tsx`): Cabecalho · Topo · Manifesto · Ticker · Dor · Homologacoes · Produtos · Engenharia · SeuCaso · Portfolio · Empresa · Duvidas · Orcamento · Rodape.

- Topo (`sections/Topo.tsx` + `components/ScrollVideo.tsx`): cena por gesto Tier 2 com 5 faixas; PROVISÓRIO sem os mp4, cai no estático completo. Abertura V1 com logo em PNG (`mix-blend-mode: screen`).
- Produtos: abas no desktop, carrossel snap + régua no celular; escolhe o produto no formulário via localStorage.
- Portfolio, Engenharia: carrossel snap + régua (`components/CarrosselRegua.tsx`).
- Empresa: linha do tempo com `.lp-draw` e nós `--k/--pos` (`effects/pagina.ts`).
- Manifesto: `.lp-manifesto` acende palavra por palavra (filhos diretos `span`).
- Fio de frio: `#fio-progresso` com scaleY, só desktop.
- Form: mailto para vendas@niju.com.br até o cliente entregar o endpoint Formspree (`FORMSPREE_ENDPOINT` em `Orcamento.tsx`).
- `?ver=<id>` pula para a seção (revisão por print). `?teste=fio,reveal` desliga peças (fluidez).

## Celular

Foto `portfolio-sebominas.jpg` em bloco 4:5 no topo (sem vídeo), carrosséis snap com régua em Produtos, Engenharia e Portfólio, Lenis só com mouse, fio de frio só no desktop, alturas em lvh/svh. Estouro em 360/390 corrigido no Manifesto. Fluidez em fps ainda não medida (sem Android aqui).

## Conteúdo e decisões

- 2026-11-23: briefing fechado. Marca real com fotos, clima de força industrial premium, só a AutoSeg como base, materiais do site e do Instagram, ação única em formulário de orçamento, homologações gigantes na frente, atendimento Brasil e Mercosul.
- 2026-11-23: repositório `lp-niju`, padrão da skill. Remoto ainda não ligado (falta `gh auth login`).
- 2026-11-23: Fase 3 caminho A (vídeo). Fase 4: conceito Descida da madrugada, Tier 2, marca V1 máscara, Trio A Estrada. Paleta: grafite, azul sinal, gelo.
- 2026-11-23: Fase 5 aprovada. CLI Higgsfield instalado. Fotos em `app/public/assets/`, fontes em `app/public/fonts/`. Falta login no Higgsfield.
- 2026-11-23: Fase 8 construída com topo provisório em foto (rodolfo escolheu construir com provisório). Autoteste: 360 a 1920 sem estouro, form erro/sucesso, movimento reduzido, gate de copy zerado, SITE_URL testado. Prints em `review/pw-*`.
- 2026-11-23: link de apresentação liberado para publicar sem pedir a cada mudança. Projeto Pages: `lp-niju`. Falta token Cloudflare do rodolfo.
- 2026-11-23: remoto ligado no `niju-lp` existente (rodolfo escolheu reaproveitar). Push com a conta da máquina via Credential Manager.
- 2026-11-23: repo tornado público a pedido do rodolfo. `gh` logado como RodolfoAAPR.
- 2026-11-23: deploy no GitHub Pages via Actions (`.github/workflows/pages.yml`, source precisa estar em GitHub Actions). Caminhos relativos em tudo (`PAGES_BASE=/niju-lp/` no build). URL: https://rodolfoaapr.github.io/niju-lp/
- 2026-11-23: respiro das seções apertado, portfólio com 5 lado a lado no desktop, régua pelo centro visível e centralizada (rodolfo pediu).
- 2026-11-23: botões de mapa no contato (Google, Waze, Apple), letreiros duplos, CTA grudada no celular, holofote nos pilares e magnet nos botões, Seara real nos homologados, rodapé com mapa numerado (rodolfo pediu).
- 2026-11-23: formulário virou chat em 5 passos (mecânica da AutoSeg, envio igual), mapa OSM com alfinete da logo, respiro apertado de novo (rodolfo pediu).
- 2026-11-23: detalhes com frontend-design e ui-ux-pro-max: legenda do topo, ícones nos pilares, como-funciona, skip link, scrollspy, foco visível, alvos 44px, pausa no letreiro, voltar no chat, teclado certo por pergunta.
- 2026-11-23: espelho AutoSeg de verdade: pinces de prova no topo, seção Dor, seção interativa Seu Caso, capítulos renumerados (rodolfo cobrou).
- 2026-11-23: restyle no idioma AutoSeg com cores Niju: nave em pílula, trilho de capítulos, caixa alta sem serifada, botões com chip de seta, seu caso em cartões, painel no orçamento, rodapé com ícones (rodolfo pediu).

## Pendências

1. `gh auth login` para ligar o remoto (dono: Rodolfo).
2. Rodolfo confirmar se o link de apresentação pode ser publicado sem pedir a cada mudança.
3. Conta e login no Higgsfield para a Fase 6 (dono: Rodolfo).
4. Logos BRF e Seara oficiais (403 nos originais do site).
5. Endpoint Formspree do cliente (form usa mailto até lá).
6. ffmpeg instalar antes da Fase 7 (`winget install Gyan.FFmpeg`).
7. Fotos do feed do Instagram (pedem login): cliente arrasta no chat se quiser trocar alguma.
8. Regra provisória `#topo .lp-foto img { filter: brightness(0.62) }`: remover quando o still virar o primeiro quadro do vídeo.
