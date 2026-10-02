Atue como um Engenheiro Front-End e UI/UX Designer Sênior especializado em interfaces modernas, de alto impacto visual e alta performance para projetos de mídia e audiovisual.

Precisamos construir a Landing Page Oficial do "NortePodcast", sediado em Nampula, Moçambique. O objetivo da página é comunicar autoridade cultural, atrair audiência e potenciais patrocinadores, e exibir dinamicamente os episódios mais recentes do podcast e as batalhas do movimento associado BLN (Batalhas Líricas Nacionais).

---

### 1. IDENTIDADE E DIREÇÃO VISUAL
- **Tom de voz:** Autêntico, vibrante, urbano e institucionalmente confiável.
- **Paleta de cores (Dark Theme por padrão):** 
  - Fundo principal: `#0D0E12` (Dark Slate / Charcoal)
  - Cards e superfícies: `#16181F` com bordas sutis em `#262933`
  - Acentos primários: Laranja queimado / Âmbar cultural (`#F58220` ou `#FF6B00`) e toques de Branco/Cinza neutro para tipografia de alta legibilidade.
- **Estilo:** Visual cinematográfico (bento grid, tipografia robusta em títulos, badges para categorias e players embutidos com visual limpo).

---

### 2. ESTRUTURA DAS SEÇÕES DA LANDING PAGE

1. **Header / Navbar Fixa:**
   - Logótipo text/SVG: NortePodcast
   - Links de navegação suave (Scroll): *Início*, *Episódios*, *BLN*, *Sobre*, *Contacto / Parcerias*
   - CTA rápido: Botão com ícone do YouTube "Inscrever-se"

2. **Hero Section (Acima da Dobra):**
   - Headline impactante: "A Voz, a Cultura e as Histórias do Norte de Moçambique."
   - Subheadline: "O palco onde arte, empreendedorismo e reflexão comunitária se encontram. Transmissões todas as quartas e domingos diretamente de Nampula."
   - CTAs Duplos: [Assistir Último Episódio] (âncora) e [Seja um Parceiro / Patrocinador] (modal ou WhatsApp link).
   - Elemento visual: Destaque visual cinematográfico ou mockup do estúdio com badge de "Episódios Novos: Quartas & Domingos".

3. **Seção de Transmissão Dinâmica — NortePodcast (Últimos Episódios):**
   - Título da seção: "Últimas Conversas & Debates"
   - Grid de cards de vídeos responsivo (3 a 4 vídeos).
   - Cada card deve conter: Thumbnail do YouTube, título do vídeo, data de publicação relativa (ex: "há 2 dias"), e ao clicar abrir um modal com player embutido (`<iframe>`) ou reproduzir diretamente na página sem redirecionar.

4. **Seção Especial — Movimento BLN (Batalhas Líricas Nacionais):**
   - Contextualização visual: Fundo com textura urbana e estética de palco/rua/conselho municipal.
   - Headline: "BLN — Batalhas Líricas Nacionais"
   - Descrição curta: O maior movimento de rima, lírica e poesia urbana de Nampula, sob comando de The Coach CEO. Do Centro Cultural da UR ao Salão Nobre de Nampula.
   - Grid com os episódios/batalhas mais recentes do BLN.

5. **Sobre o NortePodcast & Liderança:**
   - Breve manifesto cultural da plataforma (promoção da zona norte).
   - Menção institucional: Uma produção sob gestão da XBetter Moçambique, SU, Lda.
   - Destaque dos fundadores: António Francisco Lápis ("The Coach CEO") e Belito Moreira ("Chefe do Grupo").

6. **Call To Action para Marcas & Patrocinadores:**
   - Card de destaque B2B: "Associe a sua marca ao maior movimento de comunicação e cultura de Nampula".
   - Benefícios: Visibilidade bissemanal, naming rights em eventos BLN e audiência qualificada.
   - Botão direto para contacto comercial (WhatsApp / E-mail).

7. **Footer Completo:**
   - Links das redes oficiais: YouTube (`Nortepodcast`), Facebook (`@NortePodcast2024`), TikTok (`@norte.podcast`).
   - Copyright © 2026 NortePodcast. Operado por XBetter Moçambique, SU, Lda. Cidade de Nampula.

---

### 3. INTEGRAÇÃO TÉCNICA COM YOUTUBE (REQ. OBRIGATÓRIO)

Para evitar consumo excessivo de cotas da YouTube Data API v3 com pesquisas por string (`search.list`), implemente a arquitetura recomendada pelo Google:

1. **Configuração de Variáveis de Ambiente:**
   - `YOUTUBE_API_KEY`: Chave da API v3 do Google Cloud.
   - `YOUTUBE_CHANNEL_ID`: O ID do canal do NortePodcast (ou use a função para resolver o Handle/@nome via API).
   - `BLN_PLAYLIST_ID` (Opcional/Recomendado): Se o BLN estiver numa Playlist específica do canal, busque direto da playlist (`playlistItems.list`); se não, filtre os vídeos do canal pelo título contendo "BLN" ou "Batalha".

2. **Fluxo de Busca Otimizado:**
   - Faça uma chamada inicial para `channels.list` (com `id` ou `forHandle`) com `part=contentDetails` para pegar o `uploads` playlist ID do canal.
   - Faça a chamada para `playlistItems.list` usando o ID da playlist de uploads (consome apenas 1 cota de quota da API, contra 100 de uma busca genérica).
   - Trate fallback: Se a API falhar (ex.: quota excedida ou sem chave no `.env`), o código deve renderizar automaticamente 3 cards mockados estáticos com dados reais do NortePodcast para a UI nunca quebrar.
   - Implemente cache (in-memory ou SWR/React Query/Next ISR) de pelo menos 1 hora para evitar chamadas redundantes a cada refresh de usuário.

---

### 4. STACK TECNOLÓGICA ESPERADA
- Framework: Next.js (App Router) ou Vite + React com TypeScript.
- Estilização: Tailwind CSS.
- Componentes UI: Lucide React (ícones), Radix UI / Framer Motion para animações suaves nos cards e modal do player.

Por favor, gere:
1. A estrutura de ficheiros recomendada.
2. O serviço/utilitário em TypeScript responsável por comunicar com a YouTube API (com o fallback mockado e cache).
3. O componente da Landing Page completo, modular, responsivo e estilizado com Tailwind CSS pronto para execução.