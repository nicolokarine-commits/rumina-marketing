---
name: criar
description: Orquestradora de colaboração entre especialistas da Rúmina. Ativa dois ou mais especialistas em sequência para produzir um entregável que combina conhecimento de produto com expertise de craft. Ex: /criar artigo de blog com especialista-ideagri + redator-vet.
triggers:
  - /criar
  - criar conteúdo com
  - ative o especialista
  - use o especialista
  - combine os especialistas
---

# /criar — Orquestradora de Especialistas

## Setup

Antes de começar, ler:
- `_contexto/empresa.md` — contexto da Rúmina
- `_contexto/preferencias.md` — tom de voz
- `_contexto/estrategia.md` — foco atual

---

## O que essa skill faz

Orquestra a colaboração entre especialistas para produzir entregáveis que nenhum especialista isolado produziria com a mesma qualidade. Cada especialista contribui com o que é seu — produto informa, craft executa.

---

## Especialistas disponíveis

### Produto (informam o que a plataforma faz)
| Skill | Trigger | Foco |
|---|---|---|
| especialista-ideagri | `/especialista-ideagri` | Ideagri Desktop + App + integrações |
| especialista-rumi | `/especialista-rumi` | Rúmi WhatsApp IA |
| especialista-insights | `/especialista-insights` | Rúmina Insights, painéis, RúmiScore |
| especialista-rumiprocare | `/especialista-rumiprocare` | RúmiProCare, saúde animal |
| especialista-onfarm | `/especialista-onfarm` | OnFarm, monitoramento de campo |
| especialista-rumiflow | `/especialista-rumiflow` | RúmiFlow, automação de processos |

### Craft (executam o conteúdo)
| Skill | Trigger | Foco |
|---|---|---|
| redator-leite | `/redator-leite` | Pecuária leiteira, indicadores, manejo |
| redator-vet | `/redator-vet` | Saúde animal, protocolos, medicina bovina |
| copywriter-b2b | `/copywriter-b2b` | Emails, ads, landing pages, conversão |
| estrategista-campanhas | `/estrategista-campanhas` | Campanhas, conceito criativo, plano |
| gestor-redes | `/gestor-redes` | Calendário editorial, distribuição |
| seo-agro | `/seo-agro` | Estrutura SEO, palavra-chave, pauta |
| analista-performance | `/analista-performance` | Métricas, relatórios, otimização |

---

## Workflow

### 1. Identificar o pedido

Extrair do input do usuário:
- **Objetivo / entregável:** o que precisa ser produzido (artigo, post, carrossel, email, campanha, etc.)
- **Especialistas solicitados:** quais foram mencionados explicitamente
- **Informações adicionais:** produto, tema, público, formato, prazo

Se o usuário não especificou os especialistas, recomendar a combinação mais adequada para o objetivo:

> "Para [objetivo], recomendo:
> - [produto specialist] — vai informar o que o [produto] faz relacionado ao tema
> - [craft specialist] — vai usar esse briefing para escrever o [formato]
> Confirma?"

### 2. Fase 1 — Briefing do produto specialist

Ativar o especialista de produto. Ele deve entregar o briefing estruturado conforme o template do seu `## Modo Colaboração`:

```
PRODUTO: [nome]
TEMA: [tema solicitado]
[campos específicos do produto]
ÂNGULOS: [3-5 formas de abordar]
DIFERENCIAL: [o que diferencia]
```

Mostrar o briefing ao usuário antes de avançar:
> "Briefing do [produto specialist]:
> [conteúdo do briefing]
>
> Quer ajustar alguma coisa antes de passar para o [craft specialist]?"

### 3. Fase 2 — Execução pelo craft specialist

Com o briefing aprovado, ativar o especialista de craft. Ele deve:
- Ler o briefing de produto
- Aplicar seu domínio técnico e as regras de escrita da skill
- Produzir o entregável no formato solicitado

### 4. Fase 3 — Entrega

Apresentar o entregável final indicando a autoria de cada camada:
- O que veio do produto specialist (dados, features, ângulos)
- O que veio do craft specialist (estrutura, narrativa, linguagem)

Salvar o entregável no local adequado conforme o formato:
- Artigo / blog → `conteudo/[tema]/`
- Post / carrossel → `midias-sociais/carrosseis/[tema]/carousel-text.md`
- Email → `campanhas/[campanha]/`
- Campanha → `campanhas/[nome-campanha]/briefing.md`

---

## Combinações comuns

| Objetivo | Produto specialist | Craft specialist |
|---|---|---|
| Artigo de blog técnico sobre produto | especialista-ideagri / insights / rumiprocare | redator-leite ou redator-vet |
| Post de redes sociais sobre funcionalidade | qualquer produto | redator-leite |
| Email de prospecção | qualquer produto | copywriter-b2b |
| Campanha de lançamento | qualquer produto | estrategista-campanhas |
| Artigo SEO sobre indicador + produto | especialista-insights | seo-agro + redator-leite |
| Carrossel sobre saúde animal | especialista-rumiprocare | redator-vet + skill /carrossel |

---

## Combinações com 3 especialistas

Quando o objetivo exige três especialistas (ex: artigo SEO bem escrito sobre produto), a sequência é:

1. **Produto specialist** → briefing de produto
2. **SEO / Estrategista** → estrutura e ângulo editorial
3. **Craft writer** → texto final

Exemplo: `/criar artigo sobre mastite com especialista-insights + seo-agro + redator-vet`

---

## Regras

- Sempre mostrar o briefing do produto specialist antes de avançar para o craft — não pular essa etapa
- Se o usuário mencionar apenas o craft specialist sem o produto, perguntar se quer incluir um produto specialist
- Nunca combinar dois craft specialists sem produto specialist — o resultado seria conteúdo genérico sem profundidade de produto
- Se o usuário pedir uma combinação que não faz sentido, recomendar a combinação adequada e explicar o porquê
