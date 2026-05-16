# SITE DNA — Dra. Célia Falcão Advogada

**Nicho:** Advocacia Especializada em Direito Militar
**Posicionamento:** Advogada especialista em pensionistas e beneficiários militares no Rio de Janeiro — 9 anos de experiência exclusiva, atendimento premium com consulta fixada em R$170
**Data de criação:** 20/03/2026
**URL:** https://www.celiafalcaoadvogada.ag5agencia.site/
**Desenvolvido por:** AG5 Agência

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS | Hex | Função |
|---|---|---|
| `--color-primary` | `#1e3a5f` | Cor primária — headers, botões, borders, textos de destaque |
| `--color-secondary` | `#2d5a8c` | Cor secundária — gradients internos |
| `--color-accent` | `#c9a961` | Acento dourado — underlines animados, checkmarks, hover, CTAs de destaque |
| `--color-dark` | `#0f1d2e` | Texto escuro — parágrafos, footer background |
| `--color-light` | `#f8f9fa` | Fundo seções alternadas e seção contato |
| `#ff3b30` | `#ff3b30` | Vermelho — exclusivo na seção de problemas do cliente |
| `#ffffff` | `#ffffff` | Fundo de cards e formulário |
| `rgba(255,255,255,0.95)` | — | Header com glassmorphism |
| `#25D366` | `#25D366` | Botão flutuante WhatsApp |

### Tipografia

| Elemento | Família | Peso | Tamanho |
|---|---|---|---|
| H1 (Hero title) | Crimson Pro (serif) | 700 | `clamp(2.5rem, 6vw, 4rem)` — var `--text-hero` |
| H2 (Section titles) | Crimson Pro (serif) | 700 | `clamp(1.875rem, 4vw, 2.75rem)` — var `--text-h2` |
| H3 (Card titles) | Crimson Pro (serif) | 600 | `clamp(1.25rem, 2.5vw, 1.75rem)` — var `--text-h3` |
| Body / Parágrafos | Work Sans (sans-serif) | 400 | `clamp(1rem, 1.5vw, 1.125rem)` — var `--text-body` |
| Nav links | Work Sans | 500 | ~1rem |
| Badges de seção | Work Sans | 600 | 0.75rem, uppercase, letter-spacing: 0.15em |
| Botões | Work Sans | 600 | ~1rem |
| Footer texto | Work Sans | 400 | 0.875rem |
| Compliance footer | Work Sans | 400 | 0.875rem, font-style: italic |

**Pesos carregados do Google Fonts:** 300, 400, 500, 600, 700, 900 (Crimson Pro e Work Sans)

### Estilo Geral
Editorial minimalista de luxo jurídico — serifa clássica (Crimson Pro) combinada com sans-serif moderna (Work Sans), paleta fria azul marinho + dourado antigo, layout assimétrico com proporções áureas, ausência total de gradientes em texto, sombras editoriais suaves (`0 2px 8px rgba(27,27,27,0.08)`), animações discretas e funcionais. Textura orgânica de ruído `feTurbulence` SVG no fundo do body com 0.02% de opacidade — detalhe quase imperceptível que elimina a frieza do branco puro.

---

## LAYOUT — SEÇÃO POR SEÇÃO

---

### SEÇÃO 1 — Header Fixo

**Estrutura:** Flexbox horizontal — `justify-content: space-between; align-items: center`
**Fundo:** `rgba(255, 255, 255, 0.95)` + `backdrop-filter: blur(10px)` (glassmorphism)
**Posição:** `position: fixed; top: 0; left: 0; width: 100%; z-index: 1000`
**Padding:** `1rem 2rem` (desktop)
**Max-width container:** 1200px, centralizado

**Transição ao scroll:** Após 100px de scroll, adiciona `box-shadow: 0 2px 20px rgba(0,0,0,0.08)` via classe `.scrolled` (JS)

**Elementos e posições:**
- **Logo** (extrema esquerda): SVG via CDN Google Storage, `max-width: 180px; height: 60px`
- **Nav** (centro/direita): `<ul>` horizontal, 4 links âncora — `#sobre`, `#especialidades`, `#faq`, `#contato`
  - Link style: Work Sans 500, `color: --color-dark`, sem underline nativo
  - `::after` pseudo: `content: ""; display: block; height: 2px; background: --color-accent; width: 0; transition: width 300ms` → hover: `width: 100%` (sublinhado dourado deslizante)
- **CTA Button** (extrema direita): "Consulta Jurídica"
  - `background: --color-primary; color: white; padding: 0.625rem 1.5rem; border-radius: 0.25rem; font-family: Work Sans; font-weight: 600`
  - Hover: `background: --color-dark; transform: translateX(2px)`
- **Menu Toggle** (mobile, `display: none` no desktop):
  - 3 `<span>` de `2px` de altura, `background: --color-dark`
  - Estado `.active`: span do meio `opacity: 0`; spans superior e inferior rotacionam 45° e -45° formando X perfeito

**Animação:** Nenhuma de entrada — aparece fixado instantaneamente; sombra surge com `transition: box-shadow 300ms` ao scroll
**Micro-interações:** Nav links com underline dourado deslizando da esquerda para direita; botão com deslocamento horizontal no hover
**Diferenciador:** Header translúcido que "flutua" sobre a hero sem criar barrreira visual — o glassmorphism permite ver a imagem hero atrás do header

---

### SEÇÃO 2 — Hero Assimétrico Editorial

**Estrutura:** CSS Grid — `grid-template-columns: 1.5fr 1fr` (60% conteúdo / 40% imagem), `min-height: 100vh`, `align-items: start`, `padding-top: 80px` (offset do header fixo)
**Fundo:** `position: relative; overflow: hidden`
- `.hero-bg`: `position: absolute; inset: 0; object-fit: cover; width: 100%; height: 100%` — WebP da Dra. em background
- Overlay: `linear-gradient(135deg, rgba(30,58,95,0.75) 0%, rgba(15,29,46,0.70) 100%)` sobre a imagem

**Parallax (JS):**
- `window.scroll` → `requestAnimationFrame` → `.hero-bg.style.transform = scale(${1 + progress * 0.1}) translateY(${scrollY * 0.5}px)`
- Zoom de `1.0` a `1.1` ao longo dos primeiros 800px de scroll; translateY a 50% da velocidade do scroll

**Elementos e posição na coluna esquerda (60%):**
- **Badge** (topo): "DIREITO MILITAR" — `display: inline-flex; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: --color-accent; border: 1px solid --color-accent; padding: 0.375rem 1rem; border-radius: 999px`
- **H1** (abaixo do badge): "Advocacia Especializada em Pensionistas Militares"
  - `font-family: Crimson Pro; font-weight: 700; font-size: --text-hero; color: #FDFBF7; max-width: 24ch; line-height: 1.15`
- **Subtítulo** (parágrafo abaixo do H1): Work Sans 400, `opacity: 0.90; max-width: 50ch; line-height: 1.7; color: rgba(255,255,255,0.9)`
- **Benefits list** (abaixo do subtítulo): Grid com `gap: 0.875rem` — 3 itens, cada um com SVG checkmark dourado `16x16px` inline + texto Work Sans
- **Hero CTAs** (`display: flex; gap: 1.5rem; align-items: center`):
  - `.cta-link-primary`: "Agendar Consulta Jurídica →" — `display: inline-block; color: white; border-bottom: 2px solid --color-accent; padding-bottom: 2px`; hover: `transform: translateX(4px)`
  - `.cta-link-secondary`: "Tire suas dúvidas" — `display: flex; gap: 0.5rem; color: rgba(255,255,255,0.8)` — sem sublinhado
- **Social proof** (rodapé da coluna): "Atuando desde 2017 no Direito Militar" — `font-size: 0.875rem; opacity: 0.75; color: white`

**Elementos e posição na coluna direita (40%):**
- **Hero Image Container** `.hero-image-frame`: `position: relative; max-width: 400px; margin: auto`; hover: `transform: scale(1.02); transition: 300ms`
  - SVG da Dra. — `width: 400px; height: 500px; object-fit: contain`
  - **Moldura decorativa** `.hero-image-decoration`: `position: absolute; top: -15px; right: -15px; bottom: 15px; left: 15px; border: 3px solid --color-accent; border-radius: 0.5rem; z-index: -1; transition: 300ms`; hover (no pai): `top: -20px; right: -20px`

**Scroll Indicator** (bottom center, `position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%)`):
- Seta SVG para baixo
- `@keyframes scroll { 0%, 100% { transform: translateY(0); opacity: 1 } 50% { transform: translateY(8px); opacity: 0.5 } }` — `animation: scroll 2s ease-in-out infinite`

**Animação:** Parallax contínuo via JS; moldura da foto com transição de posição ao hover; scroll indicator pulsante infinito
**Micro-interações:** CTA primary desloca 4px para direita; imagem escala 1.02; moldura move para `top: -20px; right: -20px` criando efeito de "fuga"
**Diferenciador:** Grid editorial 60/40 onde a Dra. aparece como elemento de design, não como fundo — a moldura dourada que se afasta no hover é um micro-detalhe que comunica sofisticação sem ostentação

---

### SEÇÃO 3 — Conexão com Público (Dor/Solução)

**Estrutura:** CSS Grid — `grid-template-columns: 1fr auto 1fr; gap: --space-l; align-items: center`
**Fundo:** `background: white; padding: --space-xl 0`

**Coluna 1 — Bloco Problema:**
- Container: `background: rgba(255,59,48,0.05); border-left: 4px solid #ff3b30; padding: --space-m; border-radius: 0.5rem`
- H3: Crimson Pro, "Você enfrenta alguma dessas situações?"
- Lista `.conexao-dores` (4 itens, `list-style: none; display: grid; gap: 0.875rem`):
  - Cada item: `display: flex; align-items: flex-start; gap: 0.75rem`
  - SVG X: `width: 20px; height: 20px; color: #ff3b30; flex-shrink: 0; margin-top: 0.125rem`
  - Texto: Work Sans 400, `color: #444; line-height: 1.6`

**Coluna 2 — Imagem Central:**
- `.conexao-image-center`: WebP (militar feliz), `max-width: 350px; border-radius: 0.5rem; box-shadow: 0 10px 40px rgba(0,0,0,0.15)`

**Coluna 3 — Bloco Solução:**
- Container: `background: rgba(30,58,95,0.05); border-left: 4px solid --color-primary; padding: --space-m; border-radius: 0.5rem`
- H3: Crimson Pro, "A solução está em mãos especializadas"
- Parágrafo com `<strong>` em "9 anos de experiência"
- Lista `.conexao-beneficios` (3 itens, mesma estrutura das dores):
  - SVG checkmark: `color: --color-accent`
- Botão CTA primário full-width ao final do card

**Responsividade (max-width: 968px):** `grid-template-columns: 1fr` — empilha na ordem: conteúdo, imagem, solução

**Animação:** `.reveal` em cada bloco (JS IntersectionObserver, threshold 0.1, rootMargin -50px)
**Micro-interações:** Botão CTA com hover `translateY(-2px)` + sombra expandida
**Diferenciador:** A imagem física da Dra. no centro separa os dois blocos como árbitro visual — vermelho vs. azul cria tensão e resolução simultâneas sem texto de venda explícito

---

### SEÇÃO 4 — Quem Sou Eu

**Estrutura:** Dois níveis de grid:
- `.quem-sou-eu-main-grid`: `grid-template-columns: 1fr 1fr; gap: --space-l` (foto | conteúdo)
- `.quem-sou-eu-grid` (dentro da coluna direita): `grid-template-columns: repeat(2, 1fr); gap: --space-m` em viewport ≥ 768px; `1fr` abaixo disso
**Fundo:** `background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: --space-xl 0`

**Header da seção (centralizado, acima do grid principal):**
- Badge: "CONHEÇA A ADVOGADA"
- H2: "Dra. Célia Falcão" — Crimson Pro 700
- Subtítulo Work Sans: "Advogada Especialista em Direito Militar | Experiência e Dedicação à Justiça"
- `itemprop="name"` (Schema.org Person)

**Coluna Esquerda — Foto:**
- SVG da Dra. (advogada), `width: 100%; max-width: 600px; height: 700px; object-fit: contain`

**Coluna Direita — Grid de Cards:**

**Card Intro** (`grid-column: 1 / -1` — span 2 colunas):
- `background: white; border-left: 4px solid --color-primary; padding: --space-m; border-radius: 0.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.06)`
- Parágrafo: `font-size: 1.125rem; line-height: 1.8; color: --color-dark`
- Conteúdo: bio introdutória com menção a "56 anos", "9 anos de experiência", "Leblon" e "Sociedade Individual de Advocacia Célia Falcão"

**Card Especialidades** (1 coluna):
- `.card-icon`: `width: 48px; height: 48px; background: linear-gradient(135deg, --color-primary, --color-secondary); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: --space-s` — SVG branco 24px interno
- H3: Crimson Pro, `color: --color-primary`
- `.especialidades-list` (sem list-style):
  - `li { padding-left: 1.75rem; position: relative; color: #444; line-height: 1.6 }`
  - `li::before { content: "✓"; position: absolute; left: 0; color: --color-accent; font-weight: bold; font-size: 1.125rem }`
  - Itens: Pensões Estatutárias, Pensões Militares das Forças Armadas, FUSEX, Inventários, Pensão por Morte

**Card Experiência** (1 coluna):
- Mesma estrutura de `.card-icon`
- `.experiencia-item { margin-bottom: --space-s }` para cada sub-item
- H4 por área: `font-family: Crimson Pro; font-size: 1.125rem; color: --color-dark; font-weight: 600`
- Itens: Justiça Militar, Precatórios Judiciais

**Card Propósito** (`grid-column: 1 / -1`):
- `.proposito-card { background: linear-gradient(135deg, --color-primary, --color-secondary); color: white }`
- `.card-icon { background: rgba(255,255,255,0.2) }` — ícone com bg translúcido branco
- H3 `color: white`
- `.proposito-text { font-size: 1.0625rem; line-height: 1.8; color: rgba(255,255,255,0.95) }`
- Conteúdo: citação pessoal da Dra. sobre o Judiciário

**Animação:** `.reveal` em cada card com stagger natural por posição no DOM
**Micro-interações:** `.quem-sou-eu-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1) }` — somente nos cards padrão, não no intro nem no propósito
**Diferenciador:** O card propósito em gradient reverso (azul completo, texto branco) quebra a monotonia do grid de cards brancos e humaniza a Dra. com a voz dela — currículo + personalidade na mesma seção

---

### SEÇÃO 5 — Especialidades (Services)

**Estrutura:** `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: --space-m`
**Fundo:** `background: white; padding: --space-xl 0`

**Header (centralizado):**
- Badge: "Áreas de Atuação"
- H2: "Especialidades em Direito Militar"

**4 Service Cards:**
- Base: `background: white; border-top: 3px solid --color-primary; padding: --space-m; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(27,27,27,0.08); transition: --transition`
- `.service-icon`: `width: 48px; height: 48px; border: 2px solid --color-primary; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: --space-s` — SVG em `--color-primary` (sem gradiente — diferente dos card-icons do "quem sou eu")
- H3: Crimson Pro, `color: --color-dark`
- Parágrafo: Work Sans 400

**Cards:**
1. **Habilitação de Pensionistas** — ícone pessoas/família
2. **Revisão de Benefícios** — ícone checklist/documento
3. **Transferência de Cota-Parte** — ícone setas/transfer
4. **Precatórios Trabalhistas** — `grid-column: 1 / -1; justify-self: center; max-width: 800px` (card centralizado, largura reduzida)

**Assimetria intencional:** `.service-card:nth-child(2n) { margin-top: --space-s }` — cards pares deslocados verticalmente para criar ritmo visual

**Animação:** `.reveal` em cada card
**Micro-interações:** `:hover { border-top-color: --color-accent; transform: translateX(4px) }` — borda muda de azul para dourado e card desloca lateralmente (não verticalmente — diferente dos outros cards do site)
**Diferenciador:** O 4º card centralizado com `max-width: 800px` quebra o grid uniforme; hover em `translateX` em vez de `translateY` é incomum e elegante neste contexto

---

### SEÇÃO 6 — Diferenciais (Timeline Vertical)

**Estrutura:** Container centralizado com `.timeline` — lista vertical com linha conectora via pseudo-elemento
**Fundo:** `background: --color-light; padding: --space-xl 0`

**Header (centralizado):**
- Badge: "Por que escolher"
- H2: "Nossos Diferenciais"

**Timeline:**
- `.timeline { position: relative; list-style: none }`
- `.timeline::before { content: ""; position: absolute; left: 30px; top: 0; bottom: 0; width: 2px; background: --color-accent }`
- `.timeline-item { position: relative; padding-left: 80px; margin-bottom: --space-m }`
- `.timeline-marker { position: absolute; left: 21px; top: 0.25rem; width: 20px; height: 20px; background: --color-accent; border-radius: 50%; border: 4px solid white }`

**4 Itens:**
1. "Experiência consolidada desde 2017"
2. "Especialização exclusiva em Direito Militar"
3. "Atendimento técnico e humanizado"
4. "Acompanhamento completo do processo"

- H3: Crimson Pro, `color: --color-dark`
- Parágrafo: Work Sans 400, `color: #555`

**Animação:** `.reveal` em cada item
**Micro-interações:** Nenhuma — seção de leitura tranquila
**Diferenciador:** Linha dourada vertical contínua que conecta todos os marcadores cria sensação de progressão temporal — reforça narrativa de trajetória e experiência acumulada

---

### SEÇÃO 7 — CTA (Formulário de Conversão)

**Estrutura:** CSS Grid — `grid-template-columns: 0.8fr 1.2fr; gap: --space-l; align-items: start` (40% conteúdo / 60% formulário)
**Fundo:** `position: relative; background: --color-primary; overflow: hidden; padding: --space-xl 0`
- `::before { content: ""; position: absolute; inset: 0; background-image: url(cta-bg.webp); background-size: cover; background-position: center; opacity: 0.5; z-index: 0 }` — imagem da Dra. a 50% de opacidade como fundo

**Coluna 1 — Conteúdo (40%):**
- Badge: "ATENDIMENTO ESPECIALIZADO" (branco com border branca translúcida)
- H2: "Agende sua Consulta Jurídica" — Crimson Pro, branco
- Subtítulo: Work Sans, `color: rgba(255,255,255,0.9)`
- 3 Benefits (flex com gap, ícone SVG dourado + texto branco):
  - "Resposta em até 24h úteis"
  - "Atendimento individualizado"
  - "Consulta: R$ 170,00"

**Coluna 2 — Formulário (60%):**
- `.cta-form`: `background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.75rem; padding: --space-m; display: grid; gap: --space-s`
- **Campos (order):**
  1. `cta-nome`: `type="text"` required — "Nome completo"
  2. `cta-telefone`: `type="tel"` required — "Telefone" (máscara JS: `(XX) XXXXX-XXXX`)
  3. `cta-email`: `type="email"` required — "Email"
  4. `cta-servico`: `<select>` required, opções: Habilitação de Pensionistas / Revisão de Benefícios / Transferência de Cota-Parte / Precatórios Trabalhistas / Outro assunto
  5. `cta-mensagem`: `<textarea rows="3">` opcional — "Mensagem"
- **Estilos dos campos:**
  - `background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); color: white; border-radius: 0.375rem; padding: 0.875rem 1.25rem; width: 100%`
  - `:focus { border-color: --color-accent; background: rgba(255,255,255,0.15); outline: none }`
  - `::placeholder { color: rgba(255,255,255,0.5) }`
- **Select customizado:** `appearance: none; background-image: url("data:image/svg+xml...chevron-white")` — chevron SVG branco inline no background
- **Botão Submit:** `background: --color-accent; color: --color-dark; font-weight: 700; width: 100%; padding: 1rem; border-radius: 0.375rem; border: none`
  - Hover: `transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,97,0.4)`

**Fluxo de envio (JS):**
1. Intercepta `submit`, valida obrigatoriedade dos 4 campos
2. Valida formato de email com regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
3. Valida telefone com mínimo de 10 dígitos
4. Monta string: `Nome:\n${nome}\n\nTel:\n${tel}\n\nEmail:\n${email}\n\nServiço:\n${servico}` + mensagem se preenchida
5. `window.open('https://api.whatsapp.com/send?phone=5521999066640&text=' + encodeURIComponent(msg), '_blank')`
6. `form.reset()`

**Animação:** `.reveal` no container
**Micro-interações:** Campo em foco com border dourada e bg levemente mais claro; botão sobe 2px no hover; select com ícone personalizado
**Diferenciador:** Formulário que envia direto para WhatsApp sem backend — zero dependência de servidor, zero bounce por indisponibilidade de email; imagem da Dra. como fundo a 50% combina presença de autoridade com legibilidade do formulário

---

### SEÇÃO 8 — Localização / Contato

**Estrutura:** CSS Grid — `grid-template-columns: 1fr 1fr; min-height: 600px` (mapa | info)
**Sem padding de seção** — o mapa ocupa a altura total da coluna

**Coluna 1 — Mapa:**
- `<iframe>` Google Maps embed: Avenida Bartolomeu Mitre, 230, Leblon, Rio de Janeiro
- `width: 100%; height: 100%; min-height: 600px; border: 0; display: block`

**Coluna 2 — Informações:**
- `background: --color-light; display: flex; flex-direction: column; justify-content: center; padding: 3rem`
- Badge: "Contatos"
- H2: "Entre em Contato" — Crimson Pro
- 3 `.contact-item` (`display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 2rem`):
  - SVG icon: `width: 32px; height: 32px; color: --color-primary; flex-shrink: 0`
  - Conteúdo de texto
  1. **Endereço:** "Avenida Bartolomeu Mitre, 230, Leblon, Rio de Janeiro - RJ, 22431-002, Brasil"
  2. **Telefone:** `<a href="tel:+5521999066640">(21) 99906-6640</a>` — hover `color: --color-accent`
  3. **Horário:** "Segunda a Sexta, 10:30 às 17:00"

**Animação:** Nenhuma específica
**Diferenciador:** Endereço no Leblon (bairro nobre do RJ) comunicado de forma direta — a localização premium reforça o posicionamento sem precisar de texto de marketing

---

### SEÇÃO 9 — FAQ (Accordion)

**Estrutura:** `.faq-container` — lista vertical de items, `max-width: 800px; margin: 0 auto`
**Fundo:** `background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: --space-xl 0`

**Header (centralizado):**
- Badge: "Dúvidas Frequentes"
- H2: "Perguntas Frequentes sobre Direito Militar"

**6 FAQ Items:**
1. "Como funciona a habilitação de pensionistas militares?"
2. "Quanto tempo demora o processo de habilitação?"
3. "Quais documentos são necessários para habilitação de pensionistas?"
4. "Quanto custa a consultoria jurídica para pensão militar?"
5. "Posso perder a pensão militar? Em quais situações?"
6. "Qual a diferença entre pensão militar e pensão do INSS?"

**Estrutura de cada item:**
- Container `.faq-item`: `background: white; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06); margin-bottom: 0.75rem`
- Botão `.faq-question`: `display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; cursor: pointer; width: 100%; background: none; border: none; text-align: left; font-family: Crimson Pro; font-size: var(--text-h3); color: --color-dark`
  - `aria-expanded="false"` atualizado por JS
- `.faq-icon` (SVG chevron): `width: 24px; height: 24px; transition: transform 0.3s; flex-shrink: 0` → `.faq-item.active .faq-icon { transform: rotate(180deg) }`
- `.faq-answer`: `max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s ease; padding: 0 1.5rem` → `.faq-item.active .faq-answer { max-height: 500px; padding: 0 1.5rem 1.5rem }`

**Comportamento JS (accordion):** Ao clicar: remove `.active` de todos os itens, adiciona no clicado (ou não adiciona se já estava ativo = toggle fechamento)

**Schema.org:** FAQPage JSON-LD no `<head>` com todas as 6 perguntas/respostas duplicadas — indexável para rich results no Google

**Animação:** Expand/collapse via `max-height` com `transition: 0.4s ease`; chevron rotaciona 180° no open
**Micro-interações:** Chevron rotação; fundo do item pode ter leve hover state
**Diferenciador:** Schema FAQPage estruturado para rich results — conteúdo do acordeão duplicado em JSON-LD para aparecer como featured snippet no Google

---

### SEÇÃO 10 — Footer

**Estrutura:** CSS Grid — `grid-template-columns: repeat(4, 1fr); gap: 3rem`
**Fundo:** `background: --color-dark (#0f1d2e); padding: 3rem 0 0`

**Coluna 1 — Marca:**
- Logo SVG: `max-width: 160px; margin-bottom: 1rem`
- Parágrafo: Work Sans 400, `color: rgba(255,255,255,0.7); font-size: 0.9375rem; line-height: 1.7`
- Social links: `display: flex; gap: 1rem; margin-top: 1.5rem`
  - Cada link: `width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center`
  - Hover: `background: --color-accent`
  - SVG ícones: Instagram, Facebook (brancos, 20x20px)

**Coluna 2 — Contato:**
- H3: Crimson Pro, `color: white; margin-bottom: 1.5rem`
- 3 contact items com ícones SVG brancos

**Coluna 3 — Links Rápidos:**
- H3: Crimson Pro, `color: white`
- `<ul>` sem estilo, links: Sobre, Especialidades, FAQ, Contato
- `<a> { color: rgba(255,255,255,0.8); text-decoration: none; display: block; padding: 0.375rem 0; transition: --transition }`
- Hover: `color: --color-accent; padding-left: 4px` (pequeno recuo + mudança de cor)

**Coluna 4 — Especialidades:**
- H3: Crimson Pro, `color: white`
- Links: Pensões Militares, Habilitação de Pensionistas, Revisão de Benefícios, Precatórios
- Mesmo estilo da coluna 3

**Footer Bottom:**
- `border-top: 1px solid rgba(255,255,255,0.1); padding: 1.5rem 0; margin-top: 3rem`
- `display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem`
- Esquerda: "Atuação em conformidade com o Código de Ética e Disciplina da OAB" — `font-size: 0.875rem; font-style: italic; color: rgba(255,255,255,0.6)`
- Direita: "© Desenvolvido por AG5 Agência" — `font-size: 0.875rem; color: rgba(255,255,255,0.5)`

**Responsividade (max-width: 968px):** `grid-template-columns: 1fr 1fr`; abaixo de 640px: `grid-template-columns: 1fr`

**Diferenciador:** Compliance OAB no rodapé como elemento de design — transforma obrigação regulatória em diferencial de confiança; link de voltar ao topo implícito via smooth scroll no logo

---

### COMPONENTE FLUTUANTE — WhatsApp Button

**Posição:** `position: fixed; bottom: 2rem; right: 2rem; z-index: 9999`
**Tamanho:** `width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center`
**Cor:** `background: #25D366` (verde WhatsApp oficial)
**Sombra:** `box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4)` (sombra verde)
**Animação:** `@keyframes pulse { 0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(37,211,102,0.4) } 50% { transform: scale(1.05); box-shadow: 0 8px 30px rgba(37,211,102,0.6) } }` — `animation: pulse 2s ease-in-out infinite`
**Hover:** `transform: scale(1.1)` (sobrescreve pulse)
**SVG:** ícone WhatsApp branco, `width: 32px; height: 32px`
**Link:** `href="https://wa.me/5521999066640"`, `target="_blank"`, `rel="noopener"`, `aria-label="Falar com a Dra. Célia Falcão pelo WhatsApp"`
**Mobile:** Reduz para `56x56px; bottom: 1.5rem; right: 1.5rem`; SVG para `28x28px`

---

## COMPONENTES REUTILIZÁVEIS

### Botões

**`.btn-primary`** (Header e seções gerais):
```css
background: #1e3a5f;
color: white;
padding: 0.625rem 1.5rem;
border-radius: 0.25rem;
font-family: 'Work Sans';
font-weight: 600;
border: none;
cursor: pointer;
transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
/* hover: */
background: #0f1d2e;
transform: translateX(2px);
```

**`.cta-link-primary`** (Hero):
```css
display: inline-block;
color: white;
text-decoration: none;
border-bottom: 2px solid #c9a961;
padding-bottom: 2px;
font-family: 'Work Sans';
font-size: clamp(1rem, 1.5vw, 1.125rem);
/* hover: */
transform: translateX(4px);
```

**`.btn-cta-submit`** (Formulário):
```css
background: #c9a961;
color: #0f1d2e;
font-weight: 700;
width: 100%;
padding: 1rem;
border-radius: 0.375rem;
border: none;
font-size: 1rem;
/* hover: */
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(201,169,97,0.4);
```

**Badge de seção** (reutilizado em todas as seções):
```css
display: inline-flex;
align-items: center;
font-size: 0.75rem;
font-weight: 600;
letter-spacing: 0.15em;
text-transform: uppercase;
color: #c9a961;
border: 1px solid #c9a961;
padding: 0.375rem 1rem;
border-radius: 999px;
margin-bottom: 1rem;
```
*Em fundo escuro (CTA, Hero): border e cor mudam para `rgba(255,255,255,0.6)` e `white`*

---

### Cards

**Padrão de cards brancos (seção Quem Sou Eu):**
```css
background: white;
padding: var(--space-m);
border-radius: 0.5rem;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
/* hover: */
transform: translateY(-4px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
```

**Card com border-left (intro, conexão-problema, conexão-solução):**
```css
/* Adicionar ao padrão: */
border-left: 4px solid #1e3a5f; /* ou #ff3b30 para problema */
/* Sem hover transform */
```

**Service cards (seção Especialidades):**
```css
border-top: 3px solid #1e3a5f;
/* hover: */
border-top-color: #c9a961;
transform: translateX(4px); /* lateral, não vertical */
```

**Card propósito (gradiente reverso):**
```css
background: linear-gradient(135deg, #1e3a5f, #2d5a8c);
color: white;
/* Sem hover */
```

**FAQ item:**
```css
background: white;
border-radius: 0.5rem;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
margin-bottom: 0.75rem;
overflow: hidden;
```

---

### Ícones de Cards

**`.card-icon`** (seção Quem Sou Eu — com gradiente):
```css
width: 48px;
height: 48px;
background: linear-gradient(135deg, #1e3a5f, #2d5a8c);
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: var(--space-s);
/* SVG interno: color white; width/height: 24px */
```

**`.service-icon`** (seção Especialidades — sem gradiente):
```css
width: 48px;
height: 48px;
border: 2px solid #1e3a5f; /* borda, não preenchimento */
background: transparent;
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
/* SVG interno: color #1e3a5f; width/height: 24px */
```

---

### Navbar

**Desktop:**
- `display: flex; gap: 2.5rem; list-style: none`
- Links: Work Sans 500, `color: #0f1d2e`, sem decoration
- Hover: sublinhado dourado via `::after` deslizante

**Mobile (max-width: 968px):**
- `position: fixed; right: -100%; top: 0; height: 100vh; width: 80%; max-width: 400px; background: white; padding: 5rem 2rem 2rem; box-shadow: -4px 0 20px rgba(0,0,0,0.1); transition: right 300ms; z-index: 999; flex-direction: column`
- `.nav.active { right: 0 }` — desliza da direita
- Links verticais com `font-size: 1.25rem; padding: 0.75rem 0`

**Hamburger animation (`.menu-toggle.active`):**
- `span:nth-child(1) { transform: translateY(8px) rotate(45deg) }`
- `span:nth-child(2) { opacity: 0 }`
- `span:nth-child(3) { transform: translateY(-8px) rotate(-45deg) }`

---

### Scroll Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  /* sem transition aqui — transition vem ao adicionar .active */
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
```
**JS:** `IntersectionObserver({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' })` → adiciona `.active` → `unobserve()` (executa uma vez)

---

## ANTI-PADRÕES REGISTRADOS

1. **Sem gradientes em texto** — Nenhum `background-clip: text` ou gradiente aplicado em tipografia; requinte vem de Crimson Pro bem proporcionada, não de efeitos visuais em palavra

2. **Sem carrossel/slider** — Nenhum componente de slides automáticos ou manuais; conteúdo estático de fácil absorção sem distrações de automação

3. **Sem stock photos genéricas de advocacia** — Nenhuma imagem de banco com "advogado de terno genérico", "martelo de juiz" ou "balança da justiça"; protagonismo visual dado exclusivamente à Dra. Célia

4. **Sem pop-ups de captura** — Nenhum exit-intent modal, nenhum lightbox de newsletter; conversão via formulário embutido e WhatsApp flutuante

5. **Sem vídeo de fundo no hero** — Opção deliberada por imagem estática com parallax JS leve; vídeo de fundo penaliza performance mobile e é clichê no nicho jurídico

6. **Sem seção de avaliações com estrelas** — Código de Ética da OAB restringe publicidade por depoimentos no setor jurídico; diferenciais e credenciais substituem reviews

7. **Sem chatbot** — WhatsApp direto é mais eficiente e pessoal para o perfil do cliente; chatbot cria camada de fricção desnecessária antes do contato humano

8. **Sem menu dropdown ou mega-menu** — Navegação flat com 4 links diretos; single-page de conversão não precisa de hierarquia de menu

9. **Sem modo escuro automático** — Paleta azul profundo + branco é identidade do escritório; `prefers-color-scheme: dark` ignorado intencionalmente para manter coerência visual

10. **Sem loading screen** — Sem splash, sem spinner de carregamento; recursos críticos (hero image, fonts) em preload para conteúdo visível em < 1s

11. **Sem formulário com muitos campos** — Apenas 4 campos obrigatórios (nome, telefone, email, serviço); mensagem é opcional; redução máxima de fricção na conversão

12. **Sem cores quentes** — Paleta fria rigorosa (azuis + dourado clássico) — ausência de laranja, verde, roxo ou qualquer cor não jurídica que quebre o posicionamento premium

13. **Sem textura fotográfica nos cards** — Cards completamente brancos com sombra editorial sutil; fotografias ficam restritas ao hero e seções de imagem

---

## DADOS TÉCNICOS

| Item | Detalhe |
|---|---|
| HTML | Semântico: `<header>`, `<main>`, `<section>`, `<footer>` com ARIA labels e Schema.org itemscope/itemtype |
| CSS | Puro — Custom Properties, clamp() responsivo, zero frameworks ou bibliotecas |
| JavaScript | Vanilla — requestAnimationFrame (parallax), IntersectionObserver (reveal + lazy), addEventListener, regex |
| Fontes | Google Fonts: Crimson Pro + Work Sans, pesos 300/400/500/600/700/900 |
| Imagens | WebP + SVG vetorial; `loading="lazy"` abaixo do fold; `<link rel="preload">` para hero |
| Performance | DNS prefetch Google Storage; WebP otimizado (hero: 86KB, CTA bg: 15KB) |
| SEO | Schema.org LegalService + FAQPage (JSON-LD), Open Graph, Twitter Card, canonical, sitemap.xml, robots.txt |
| Formulário | Sem backend — encode direto para WhatsApp deeplink API |
| Breakpoints | 968px (tablet → mobile menu), 640px (mobile pequeno) |
| Robots | Permite: Googlebot, Googlebot-Image, Bingbot / Bloqueia: AhrefsBot, SemrushBot, DotBot |
| Sombra padrão | `0 2px 8px rgba(27, 27, 27, 0.08)` — editorial, ultra sutil |
| Border-radius | `0.5rem` cards; `0.25rem` botões; `0.375rem` inputs; `999px` badges e WhatsApp |
| Transição padrão | `300ms cubic-bezier(0.4, 0, 0.2, 1)` definida em `--transition` |
| Textura de fundo | SVG com `feTurbulence` injetado via `background-image` no body — opacidade 0.02%, praticamente invisível mas elimina frieza do branco puro |
| Contato | Tel: (21) 99906-6640 / Email: contato@celiafalcaoadvogada.ag5agencia.site |
| Endereço | Av. Bartolomeu Mitre, 230, Leblon, Rio de Janeiro - RJ, 22431-002 |
| Horário | Segunda a Sexta, 10:30 às 17:00 |
| Consulta | R$ 170,00 (fixo, exibido na seção CTA) |
