# Especificação de Layout (V2) – Portfólio Dr. Henrique Ferreira

Este documento contém a especificação exaustiva e pixel-perfect para o desenvolvimento da página de vendas (portfólio) do Dr. Henrique Ferreira, incorporando as **imagens originais da apresentação PDF** (uma página do PDF correspondendo a cada seção).

O foco principal é autoridade, performance, responsividade corporativa, alto contraste visual e a **harmonização perfeita das imagens preexistentes** com a interface limpa e moderna.

---

## Design System Secundário
- **Tipografia:** 
  - Headings: `RCL Morland` (fallback: Playfair Display, serif)
  - Body: `Blauer Nue` (fallback: Inter, sans-serif)
- **Paleta de Cores:**
  - Dark Blue: `#031D5E` (Primária Escura)
  - Royal Blue: `#10389B` (Primária)
  - Light Blue: `#1F60FF` (Primária Clara)
  - Soft Blue: `#D0DEFF`
  - Pale Blue: `#D1EAFF`
  - White: `#FFFFFF`
  - Accent Gold: `#FAC25A`

---

## Seção 1: Hero

### Arquétipo e Constraints
- **Arquétipo:** Hero Dominante
- **Constraints:** Imagem Fullbleed (Imagem correspondente à Página 1 do PDF via CDN Otimizada), Texto com Sombra Colorida (sutil para leitura).
- **Justificativa:** O painel deve ser performático e transmitir grande autoridade cirúrgica imediatamente. A imagem de capa da apresentação atua como Hero em background-size cover. 

### Conteúdo
- **Headline:** Tenha no seu consultório um especialista em cirurgia bucomaxilofacial e resolva casos cirúrgicos complexos
- **Subheadline:** Dr. Henrique Ferreira

### Layout e Respeito à Imagem (Pág 1)
- `section` com `min-height: 100vh`, `display: flex`, `align-items: center`.
- Container centralizado com `max-width: 680px` alinhado à esquerda na grid geral (`padding: 0 5%` desktop, `0 24px` mobile).
- O fundo é preenchido pela **Imagem da Página 1**.
- No mobile, conteúdo deslocado à base (`align-items: flex-end`, `padding-bottom: 80px`).

### Cores e Elementos
- Borda lateral esquerda no subheadline (`3px solid #FAC25A`).
- Foreground gradient (ex: `linear-gradient(to right, rgba(3,29,94,0.85) 0%, rgba(3,29,94,0.2) 100%)`) sobre a imagem da Pág 1 para dar leitura aos textos sem perder a foto.

### Animações e Responsividade
- **SEM ANIMAÇÕES INICIAIS.** Regra restrita de alta performance (evitar CLS).
- Foco em `background-position` correto para portrait mobile.

---

## Seção 2: Sobre Mim e Formação

### Arquétipo e Constraints
- **Arquétipo:** Split Vertical (50/50 Lado a Lado)
- **Constraints:** Imagem Recortada (Round Corners), Glassmorphism (Card).
- **Justificativa:** A foto do Dr. Henrique (Página 2) precisa de destaque nobre. O texto institucional ganha vida quando o usuário enxerga o profissional.

### Conteúdo
**Sobre Mim:**
- Sou cirurgião bucomaxilofacial, com atuação focada no diagnóstico... visando previsibilidade, segurança e excelência nos resultados.
- Atuo tanto em ambiente ambulatorial quanto hospitalar... individualidades de cada paciente.

**Tópico Especial (Dentro do Card Abaixo):**
- ➢ Graduação – UFRGS (2019)
- ➢ Residência em CTBMF – UPF (2023)
- ➢ Membro do Colégio Brasileiro de Cirurgia Bucomaxilofacial

### Layout e Respeito à Imagem (Pág 2)
- Grid de 2 colunas no desktop (`1fr 1fr`), `gap: 64px`. `1fr` e `gap: 56px` no mobile.
- `padding: 120px 0`. Fundo: Gradiente diagonal suave (`#FFFFFF` a `#D1EAFF`).
- **Coluna Esquerda:** Imagem da Página 2 (Dr. Henrique) ocupando `100%` da largura da coluna, com `border-radius: 24px` e `box-shadow` suave `0 24px 48px rgba(3,29,94,0.08)`.
- **Coluna Direita:** Títulos e parágrafos ("Sobre Mim"), seguidos imediatamente por um card integrado com a Formação Acadêmica.

### Cores (Card Formação)
- Fundo do Card (Direita-Base): `#031D5E` com radial gradient (Glass/Accent) e opacidade 0.15 usando `#1F60FF`. Letras Brancas. Accent bullets em `#FAC25A`.

---

## Seção 3: Perfil de Atuação 1 (Campos da Cirurgia)

### Arquétipo e Constraints
- **Arquétipo:** Bento Box / Split com Overlap
- **Constraints:** Dark Mode, Imagem Duotone ou com Overlay, Hover Reveal.
- **Justificativa:** Integrar a Imagem (Página 3) ao grid Bento para fundir os dados técnicos (8 tópicos) a uma representação visual profunda em modo escuro.

### Conteúdo
- **Título:** Perfil de atuação
- **Subtítulo:** Como especialista, atuo em todos os campos da cirurgia bucomaxilofacial:
- **Tópicos:** Cirurgias dentoalveolares; Reconstruções ósseas e implantes dentários; Patologia bucomaxilofacial; Disfunção... etc.

### Layout e Respeito à Imagem (Pág 3)
- `padding: 120px 0`. Fundo master: `#031D5E`.
- **Área da Imagem:** A Imagem da Pág 3 atuará como o fundo fixo central de um grid assimétrico modular, ou ocupará 2 células 2x2 centrais (Bento Box overlap). 
- Teremos 8 cards com subitens técnicos organizados visualmente ao redor desta imagem central. Toda a imagem tem opacidade controlada `0.4` com blend mode `luminosity` para se fundir ao Dark Blue.

### Estilo e Iteratividade
- Título branco (48px), Subtítulo `#D0DEFF`.
- **Cards Bento:** Fundo `rgba(255,255,255,0.05)`, com expansão iluminada `#FAC25A` ao passar o mouse.
- Staggered Entrance Animations: `data-aos="fade-up"` em ordem sequencial para montagem orgânica.

---

## Seção 4: Consultórios Parceiros (Exodontias e afins)

### Arquétipo e Constraints
- **Arquétipo:** Sticky Element / Scroll Storytelling
- **Constraints:** Split High Contrast, Imagem Parallax.
- **Justificativa:** Cria um painel dinâmico à esquerda com o título e a imagem representativa, enquanto os 5 tópicos (exodontias, cirurgias pré-protéticas) arrastam à direita de forma cadenciada. 

### Conteúdo
- **Subtítulo:** Nos consultórios parceiros, o atendimento é voltado para:
- **Itens principais:** Cirurgias dentoalveolares; Exodontias; Retiradas de dentes; etc.

### Layout e Respeito à Imagem (Pág 4)
- **Secão Clara:** Background `#FFFFFF`.
- **Esquerda (40% - Sticky Column):** Ficará travada 120px do topo da tela. Ela abriga o "Título Perfil de atuação", o subtítulo e a **Imagem da Pág 4**. Essa imagem fica com `border-radius: 16px` e sombra pesada. 
- **Direita (60%):** A lista desliza individualmente como cartões brancos com linha divisória lateral de cor `#1F60FF`.

### Interatividade
- Na direita, os itens textuais ganham destaque numérico ou setas laterais, reagindo levemente no eixo X (`hover: translateX(-5px)`).

---

## Seção 5: Perfil de Atualização 3 (Reconstruções e Implantes)

### Arquétipo e Constraints
- **Arquétipo:** Overlapping Grid (Quebrado)
- **Constraints:** Imagem Flutuante (Floating Cards), Soft Pastel Colors.
- **Justificativa:** O tema implantes sugere precisão geométrica. Para quebrar a monotonia, os cards flutuarão num cruzamento sobre a imagem.

### Conteúdo
- **Tópicos:** Implantes (unitários, estéticos) e Técnicas Protocolo (Convencional, All-on-four, etc.)

### Layout e Respeito à Imagem (Pág 5)
- Fundo preenchido com tom muito suave `#F8FAFC`.
- Uma grande **Imagem Fixa Horizontal (da Pág 5)** funciona como âncora no topo central (um banner com altura controlada 300px, recortado geometricamente/Clip).
- Logo abaixo (invadindo margens negativas no Eixo Y, ex: `margin-top: -80px`), posicionaremos boxes brancos de protocolo que se sobrepõem parcialmente à base desta Imagem 5.
- Isso cria profundidade e "amarra" elementos com estética de dashboard premium.
- Técnicas (Convencional, All-on-four) formatadas como Bullet List Clean em fonte de nível terciário (`16px`, `#10389B`).

---

## Seção 6: Opções de Anestesia

### Arquétipo e Constraints
- **Arquétipo:** Layered + Minimal (Shadow Depth)
- **Constraints:** Background Imagem Desfocada, Color Overlays.
- **Justificativa:** Ponto vital do gatilho de conforto e controle da dor. A imagem no fundo reforça hospital/ambiente esterilizado e focado na sedação visual.

### Conteúdo
- **Opções:** Anestesia convencional; Sedação oral; Sedação endovenosa; Anestesia geral.

### Layout e Respeito à Imagem (Pág 6)
- A **Imagem da Pág 6** define o `background-image` master da seção inteira ocupando vh.
- Uma opacidade fortíssima (90% de Navy Blue `#031D5E`) cai sobre essa foto (Color Overlay e Blur). Garantindo percepção de que a foto está lá.
- Os 4 cartões de opções flutuam como Popovers (`#10389B`, borda massiva de 32px e estofo interno de 48px). Badges informando onde a anestesia é feita via tag colorida `(#FAC25A)`. 

---

## Seção 7: Equipamentos Disponibilizados

### Arquétipo e Constraints
- **Arquétipo:** Split Horizontal + Marquee Cinematico
- **Constraints:** Typography Outline, Bleed Top.
- **Justificativa:** Material tangível físico e bélico hospitalar que ganha visibilidade ampla, lincando elementos técnicos rapidamente à imagem visual da sala de operação.

### Conteúdo
- **Itens (Marquee):** Motor Cirúrgico NSK • Contra-ângulo • Laser MMOptics • Fotóforo • Caixa cirúrgica • Materiais...

### Layout e Respeito à Imagem (Pág 7)
- **Parte Superior (Height: 120px):** Drag Horizontal Infinito. Letras vazadas gigantes com stroke Azul pálido em fundo branco absoluto. `white-space: nowrap`.
- **Parte Inferior:** A **Imagem da Pág 7** atua cobrindo toda a base (Bleed Both - `width: 100%`) como um banner hero inferior, `height: 400px` em crop perfeito para mostrar caixa cirúrgica ou tecnologias do local, sem sobreposições textuais massantes. Foco na materialidade da clínica.

---

## Seção 8: Diferenciais Profissionais e Contato

### Arquétipo e Constraints
- **Arquétipo:** Split Vertical
- **Constraints:** High Contrast Action, Diagonal Divider (Tópicos vs Informações de rede).
- **Justificativa:** Fim do funil de vendas, focando no convite para os colegas/hospitais contratarem o Dr. Henrique. Lado esquerdo (ético), Lado direito (gatilho de contato).

### Conteúdo
- **Esquerda:** Evidência científica, Comunicação, Planejamento, Fast Recovery.
- **Direita:** Contato (Telefone, E-mail, Site).

### Layout e Respeito à Imagem (Pág 8)
- Em Desktop, `50% Esquerda | 50% Direita`. 
- **Lado Esquerdo (Diferenciais):** Fundo predominante `#10389B` (Royal Blue). **A Imagem da Pág 8** é mascarada como background suave ou mesclada num canto esquerdo servindo de pano de fundo conceitual para as convicções éticas (ex: foto em ação do Dr ou das mãos/sala, misturada ao gradient). Os bullet-points com check amarelo sobrepõem essa textura.
- **Lado Direito (CTA Real):** Fundo `#031D5E`. Apresenta um Glass Card gigantesco focado no Click (WhatsApp/Ligação/Site e Email corporativos). 
- **Botão CTA:** Gigante, `background: #FAC25A`, letras `#031D5E`, com pulsação nativa box-shadow animada por CSS infinity. Ação imediata.

---

> **Critério de Otimizações Previsto (Desenvolvimento):** 
> * Lazy load será ativado em praticamente tudo (Scripts AOS desabilitam CLS; imagens abaixos de fold carregarão apenas com `loading="lazy"` e via path CDN local ou Cloudinary gerado).
> * O Design não só posiciona esteticamente as fotos do PDF como cria containers dedicativos, tornando-os centrais para a experiência fluida sem atrapalhar a autoridade e leitura das cópias da landing page.
