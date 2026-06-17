# Regras de Design — Carrossel Rúmina

> Estilo: Minimalista / AgroTech / Moderno
> Baseado na identidade visual da Rúmina (Jan 2026 V4)
> Para alterar qualquer regra, edite este arquivo ou peça "muda a regra X no design do carrossel"

---

## Paleta base

| Uso | Cor | Hex |
|---|---|---|
| Fundo claro | Branco | `#FFFFFF` |
| Fundo escuro | Teal Rúmina | `#0C2C30` |
| Texto principal (fundo claro) | Teal escuro | `#0C2C30` |
| Texto principal (fundo escuro) | Branco | `#FFFFFF` |
| Texto secundário (fundo claro) | Cinza médio | `#5A6672` |
| Texto secundário (fundo escuro) | Branco 70% | `rgba(255,255,255,0.70)` |
| Borda / linha decorativa | Cor de destaque do produto | ver abaixo |

## Cores de destaque por produto

Aplicar quando o carrossel for sobre um produto específico da Rúmina.
Se não houver produto definido, usar o teal Rúmina `#0C2C30` como destaque.

| Produto | Cor de destaque |
|---|---|
| Ideagri | `#00C5A0` |
| OnFarm | `#FF0099` |
| RúmiAction | `#0BAADD` |
| RúmiFlow | `#E8007A` |
| RúmiProCare | `#D4005A` |
| Rúmina Insights | `#0C2C30` |
| Rúmi | gradiente `#00C5A0` → `#8833FF` |
| RúmiScore | `#00C45A` |
| RúmiCorte | `#E83030` |
| iMilk | `#CC33FF` |
| Rúmina (institucional) | `#0C2C30` |

---

## Dimensões

- **Instagram feed:** 1080×1350px (proporção 4:5)
- **Safe area:** 64px laterais, 80px topo, 96px baixo

---

## Tipografia

- **Família:** Ubuntu (Google Fonts)
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700&display=swap" rel="stylesheet">
  ```
- **Títulos / headline:** Ubuntu Bold (700), 52–64px
- **Corpo / texto:** Ubuntu Regular (400), 36–40px, line-height 1.55
- **Labels / tags / categorias:** Ubuntu Medium (500), 20–22px, uppercase, letter-spacing 2px
- **Dados em destaque (stat):** Ubuntu Bold (700), 80–108px
- **Nota / rodapé:** Ubuntu Light (300), 22px

---

## Ritmo visual

Alternar fundos para criar contraste entre slides:

- Slide 1 (Capa): **fundo escuro** (#0C2C30)
- Slide 2: **fundo claro** (#FFFFFF)
- Slide 3: **fundo escuro**
- Slide 4: **fundo claro**
- ... (continuar alternando)
- Slide final (CTA): **fundo escuro** com logo

Adaptar se o total de slides for ímpar — o importante é não fazer dois slides iguais seguidos.

---

## Layouts disponíveis

Usar pelo menos 3 layouts diferentes no mesmo carrossel:

### 1. Headline + Corpo (padrão)
```
[tag de categoria — uppercase, 22px]
[headline — bold, 56px, máx 2 linhas]
[linha decorativa — 2px, cor de destaque, 48px largura]
[corpo — regular, 38px, máx 5 linhas]
[barra de progresso no rodapé]
```

### 2. Stat em destaque (para dados)
```
[número grande — bold, 96px, cor de destaque]
[unidade / contexto — medium, 28px]
[linha decorativa]
[texto de explicação — regular, 34px]
[barra de progresso no rodapé]
```

### 3. Card com borda esquerda (para citações ou destaques)
```
[borda esquerda — 4px, cor de destaque]
[texto em destaque — bold, 42px, padding-left: 32px]
[fonte ou contexto — regular, 26px, cor secundária]
[barra de progresso no rodapé]
```

### 4. Lista (máx 3 itens)
```
[headline — bold, 48px]
[linha decorativa]
[item 1 — bullet quadrado 8px + texto regular 34px]
[item 2]
[item 3]
[barra de progresso no rodapé]
```

### 5. Slide de capa
```
[fundo: #0C2C30]
[tag de produto ou tema — uppercase, cor de destaque, 20px]
[headline — bold, 60–68px, branco, máx 3 linhas]
[subtítulo — regular, 34px, branco 70%, máx 2 linhas]
[barra de progresso no rodapé — branco]
```

---

## Elementos fixos

### Barra de progresso (rodapé)
- Posição: `bottom: 0`, largura total (1080px)
- Altura: 3px
- Preenchimento: `(slide_atual / total_slides) × 100%`
- Cor em fundo claro: cor de destaque do produto
- Cor em fundo escuro: `rgba(255,255,255,0.4)`
- Fundo da barra (parte vazia): `rgba(0,0,0,0.10)` em claro / `rgba(255,255,255,0.15)` em escuro

### Tag de produto (opcional, slide 1)
- Texto: nome do produto em uppercase
- Estilo: Ubuntu Medium 20px, letter-spacing 2px
- Cor: cor de destaque do produto
- Posição: acima do headline, distância ~48px do topo safe area

### Logo no slide final (CTA)
- Usar `Logo Rúmina 2026 - Horizontal - fundo escuro.png` (CTA sempre em fundo escuro)
- Caminho: `C:\Users\Usuario\Documents\Rúmina\Identidade Visual Rúmina\Logos\Logos\00. ID - Rúmina 2026\00. Logotipos\00. Rúmina 2026\00. PNG - Sem fundo\Logo Rúmina 2026 - Horizontal - fundo escuro.png`
- Largura: 160px
- Posição: canto inferior direito, dentro da safe area

---

## Linha decorativa

Elemento visual entre headline e corpo:
- Largura: 48px
- Altura: 2px
- Cor: cor de destaque do produto (ou `#0C2C30` no default)
- Margin: 24px 0

---

## Princípios de espaçamento

- Padding interno dos slides: 64px laterais, 80px topo/baixo
- Espaço entre elementos: múltiplos de 16px (16, 32, 48, 64)
- Nunca comprimir o texto pra caber — se precisar, reduzir o tamanho da fonte em 4px

---

## O que NUNCA fazer

- Sombras pesadas ou efeitos de profundidade exagerados
- Mais de 2 pesos de fonte no mesmo slide
- Gradientes fora do produto Rúmi
- Cores vibrantes que não estejam no sistema de produtos
- Texto centralizado (sempre alinhar à esquerda)
- Mais de 3 itens em lista
- Bordas arredondadas excessivas (máx 8px nos cards)
- Elementos decorativos sem função (setas, formas aleatórias, ícones genéricos)
