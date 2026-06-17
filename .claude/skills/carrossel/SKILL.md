---
name: carrossel
description: >
  Cria carrosseis para Instagram seguindo a identidade visual da Rúmina.
  Estilo minimalista / agrotech / moderno. Gera texto editorial, HTMLs estilizados
  e renderiza em PNG via Playwright. Reconhece qual produto está sendo comunicado
  e aplica a cor de destaque correta automaticamente.
  Use quando mencionar "carrossel", "slides", "faz um carrossel", ou pedir
  pra transformar um tema em conteúdo visual para Instagram.
triggers:
  - /carrossel
  - faz um carrossel
  - criar carrossel
  - slides instagram
  - carrossel sobre
---

# /carrossel — Criação de Carrossel Rúmina

## Setup

Ler antes de começar:
- `marca/design-guide.md` — identidade visual e sistema de cores dos produtos
- `_contexto/empresa.md` — produtos, contexto e público da Rúmina
- `_contexto/preferencias.md` — tom técnico e institucional
- `.claude/skills/carrossel/references/design-carrossel.md` — regras visuais do carrossel

Verificar se Playwright está instalado:
```bash
npx playwright screenshot --help 2>/dev/null && echo "OK" || echo "INSTALAR"
```
Se não estiver: `npx playwright install chromium`

---

## Identidade visual (resumo)

- **Fundo escuro:** `#0C2C30` (teal Rúmina)
- **Fundo claro:** `#FFFFFF`
- **Fonte:** Ubuntu (Google Fonts) — Bold para títulos, Regular para corpo
- **Destaque:** cor do produto sendo comunicado (ver `references/design-carrossel.md`)
- **Estilo:** minimalista, alinhamento esquerdo, espaço generoso, sem elementos decorativos

Ao receber o tema, identificar se há um produto específico da Rúmina e usar sua cor de destaque. Se não houver produto definido, usar `#0C2C30`.

---

## Workflow

### Fase 1 — Texto

1. Identificar o produto Rúmina envolvido (se houver) e definir a cor de destaque
2. Identificar a persona do público (produtor rural, técnico, consultor, gestor)
3. Perguntar ao usuário numa mensagem só:
   > "Antes de escrever, me confirma:
   > - Quantos slides? (padrão: 8)
   > - Tem imagens? Se sim, joga em `midias-sociais/carrosseis/[tema]/imagens/` e me diz os nomes. Se não, faço design visual sem foto
   > - CTA do último slide? (ex: 'acesse rumina.com.br', 'fale com nosso time', 'conheça o [produto]')
   > - Tem algum dado, estudo ou número real pra usar?"

   Se o usuário já deu essas infos, não perguntar de novo.

4. Montar e apresentar a espinha dorsal:

   > **Espinha dorsal:**
   >
   > **Ângulo:** [tese central — nunca diluir o ponto de vista]
   > **Tensão:** [fricção ou dado surpreendente que abre o carrossel]
   > **Mecanismo:** [por que isso acontece / como funciona]
   > **Provas:** [2-3 evidências concretas, específicas]
   > **Virada:** [o que muda pra quem lê]
   >
   > **5 opções de capa:**
   > A: [título] / [subtítulo]
   > B: [título] / [subtítulo]
   > C: [título] / [subtítulo]
   > D: [título] / [subtítulo]
   > E: [título] / [subtítulo]
   >
   > Qual capa? A narrativa está no caminho certo?

   **CHECKPOINT 1 — aguardar aprovação da capa e narrativa antes de escrever.**

5. Escrever os slides seguindo o arco:
   - **Slide 1 (Capa):** capa escolhida
   - **Slide 2 (Hook):** fato, dado ou situação que cria tensão — termina preparando o próximo
   - **Slides 3–4 (Mecanismo):** por que isso acontece, com dado concreto (número + fonte)
   - **Slides 5–7 (Provas):** um ponto por slide, cada um avança a narrativa
   - **Slide 8–9 (Virada):** o que muda pra quem lê — conexão prática
   - **Slide final (CTA):** chamada + conexão com o que foi dito + identidade Rúmina

6. Gerar legenda Instagram:
   - Gancho nos primeiros 125 caracteres
   - 2–3 parágrafos curtos
   - CTA no final
   - 5–10 hashtags relevantes para o setor agro/leiteiro

7. Mostrar texto completo + legenda no chat.
8. Salvar em `midias-sociais/carrosseis/[tema]/carousel-text.md`

**CHECKPOINT 2 — aguardar aprovação do texto antes de partir para o visual.**

**Regras de texto:**
- Tom técnico e institucional — sem informalidade, sem gírias
- Linguagem acessível para o produtor rural, com rigor para o técnico
- Afirmações factuais sempre com dado + fonte + ano
- Sem travessão (—), sem bullet points genéricos
- Sem cacoetes: "e isso muda tudo", "no fim das contas", "é preciso", "simplesmente"
- Sem jargão corporativo: "ecossistema", "mindset", "sinergia", "disruptivo"
- Cada slide é um bloco coeso de 2–4 frases, não uma lista disfarçada
- Texto sempre conectado ao setor: pecuária leiteira, gestão de fazenda, tecnologia no agro

---

### Fase 2 — Visual (HTMLs + PNGs)

1. Ler `references/design-carrossel.md` para seguir as regras visuais
2. Criar HTMLs com:
   - Dimensões: 1080×1350px
   - Fonte Ubuntu via Google Fonts
   - Alternância fundo escuro / fundo claro entre slides
   - Cor de destaque do produto identificado na Fase 1
   - Linha decorativa (2px, 48px) entre headline e corpo
   - Barra de progresso no rodapé
   - Logo Rúmina no slide final (fundo escuro)
3. Salvar HTMLs em `midias-sociais/carrosseis/[tema]/instagram/`
4. Renderizar slide 1 primeiro:
   ```bash
   npx playwright screenshot --viewport-size=1080,1350 --full-page "file:///caminho/absoluto/slide-01.html" "slide-01.png"
   ```

**CHECKPOINT — mostrar slide 1. Se aprovado, renderizar os demais. Se ajuste, editar HTML e re-renderizar só aquele.**

5. Renderizar todos os slides e salvar PNGs em `midias-sociais/carrosseis/[tema]/instagram/`

---

## Output final

```
midias-sociais/carrosseis/[tema]/
  carousel-text.md
  imagens/           (se houver fotos)
  instagram/
    slide-01.html → slide-01.png
    slide-02.html → slide-02.png
    ...
```

---

## Regras gerais

- Texto aprovado no Checkpoint 2 não muda na Fase 2
- Sempre mostrar slide 1 antes de renderizar os demais
- Se o usuário pedir ajuste visual, editar o HTML e re-renderizar só aquele slide
- As regras de design vivem em `references/design-carrossel.md` — para mudanças visuais permanentes, editar lá
- Se Playwright não estiver instalado, instalar antes de renderizar (não bloquear o fluxo)
- Imagens do usuário ficam em `midias-sociais/carrosseis/[tema]/imagens/` — referenciar com caminho relativo no HTML
