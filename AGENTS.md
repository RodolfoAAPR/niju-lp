# NIJU · LP "O padrão que roda o Brasil"

Contexto para quem (pessoa ou agente de IA) for mexer nesta landing page. Leia inteiro antes de mudar qualquer coisa.

- **No ar (apresentação):** a definir (fora do Google até a marca liberar).
- **Domínio oficial:** a definir (publicado com `SITE_URL=https://dominio npm run build`).
- **Código:** `app/` (React 19 + Vite + TypeScript + Tailwind v4, pré-renderizado).
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

A definir no Design Package. Base estrutural: https://autoseg-lp.pages.dev/

## Celular

A definir na construção. Regra: foto própria no lugar do vídeo, carrossel com scroll-snap no lugar de palco grudado, efeitos pesados desligados, fluidez medida.

## Conteúdo e decisões

- 2026-11-23: briefing fechado. Marca real com fotos, clima de força industrial premium, só a AutoSeg como base, materiais do site e do Instagram, ação única em formulário de orçamento, homologações gigantes na frente, atendimento Brasil e Mercosul.
- 2026-11-23: repositório `lp-niju`, padrão da skill. Remoto ainda não ligado (falta `gh auth login`).

## Pendências

1. `gh auth login` para ligar o remoto (dono: Rodolfo).
2. Rodolfo confirmar se o link de apresentação pode ser publicado sem pedir a cada mudança.
3. Recolher materiais oficiais do site e do Instagram para `contexto/`.
4. ffmpeg instalar antes da Fase 7 (`winget install Gyan.FFmpeg`).
5. Higgsfield conectar antes da Fase 6, com conta e saldo confirmados.
