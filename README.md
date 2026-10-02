# 🎙️ Norte Podcast & BLN — Landing Page Oficial

[![Live Demo](https://img.shields.io/badge/Live_Demo-nortepodcast.zedecks.com-00E5FF?style=for-the-badge&logo=google-chrome&logoColor=white)](https://nortepodcast.zedecks.com)
[![BLN Arena](https://img.shields.io/badge/BLN_Arena-Batalhas_Líricas-FF2A36?style=for-the-badge&logo=youtube&logoColor=white)](https://nortepodcast.zedecks.com/bln.html)
[![License](https://img.shields.io/badge/Licence-Proprietary_XBetter-2952FF?style=for-the-badge)](LICENSE)

Plataforma Web oficial e interativa do **NortePodcast** e do movimento **BLN (Batalhas Líricas Nacionais)**, sediado na Cidade de Nampula, Província de Nampula, Moçambique.

---

## 🌟 Visão Geral & Funcionalidades

- **🎙️ Norte Podcast (`index.html`):** 
  - Identidade visual Dark Navy & Cyan Elétrico (`#00E5FF`).
  - Grelha bissemanal de transmissões (Quartas e Domingos).
  - Grid de episódios com Player Modal interativo sem redirecionamento externo.
  - Manifesto cultural, perfil de liderança (*The Coach CEO & Belito Moreira*) e proposta B2B de patrocínios.

- **🔥 BLN Arena (`bln.html`):**
  - Identidade visual Obsidian Dark & Crimson Flame (`#FF2A36`).
  - Cobertura da trajetória do movimento (do Centro Cultural da UR ao Salão Nobre do Conselho Municipal de Nampula).
  - Feed dos duelos e semifinais da temporada.
  - Código de honra e cotas de ativação de marca.

- **⚡ Integração YouTube Data API v3:**
  - Consumo otimizado via *Uploads Playlist* (1 ponto de quota).
  - Cache local (`localStorage`) de 1 hora.
  - Fallback offline de alta fidelidade para disponibilidade 100% contínua.

---

## 🛠️ Stack Tecnológica

- **Front-End:** Vanilla HTML5 semântico, JavaScript ES6+ Modular.
- **Estilização & Design System:** Vanilla CSS com tokens customizados (`assets/css/styles.css`), CSS Grid & Flexbox, micro-animações.
- **Tipografia:** Google Fonts (*Space Grotesk* e *Inter*).
- **Icons:** SVG nativo integrado de alto desempenho.

---

## 🚀 Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/iradoweck/norte-podcast.git
   cd norte-podcast
   ```

2. Inicie um servidor local (exemplo via VS Code Live Server ou `npx live-server`):
   ```bash
   npx live-server --port=1810
   ```

3. Abra no navegador:
   - Norte Podcast: `http://localhost:1810/`
   - BLN Arena: `http://localhost:1810/bln.html`

---

## 🏛️ Estrutura Institucional & Governança

- **Entidade Mantenedora:** XBetter Moçambique, SU, Lda.
- **Sede:** Cidade de Nampula, Moçambique.
- **Redes Oficiais:**
  - YouTube Norte Podcast: [@Nortepodcast](https://www.youtube.com/@Nortepodcast)
  - YouTube BLN: [@batalhasliricas](https://www.youtube.com/@batalhasliricas)
  - Facebook BLN: [Batalhas Líricas Nacionais](https://web.facebook.com/profile.php?id=61573137554082)
  - Facebook Norte Podcast: [@NortePodcast2024](https://facebook.com/NortePodcast2024)

---

## 🔒 Segurança

Consulte [SECURITY.md](SECURITY.md) para diretrizes de divulgação responsável de vulnerabilidades.

---

Copyright © 2026 **NortePodcast** & **BLN**. Produção operada por **XBetter Moçambique, SU, Lda.**
