/**
 * NORTE PODCAST & BLN — MAIN APPLICATION & YOUTUBE FEED MANAGER
 */

// 15 VÍDEOS REAIS RASPAGEM OFICIAL DO CANAL @Nortepodcast
const FALLBACK_NORTE_EPISODES = [
  {
    id: "norte-01",
    youtubeId: "-JlBoMRyLIY",
    title: "MENDYS: PROMOTOR NÃO PODE DEFINIR O MEU CACHE, EU NÃO SOFRO",
    description: "Mendys em entrevista exclusiva no Norte Podcast debatendo cachês, indústria musical e postura profissional.",
    badge: "EXCLUSIVO",
    date: "Recente",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/-JlBoMRyLIY/hqdefault.jpg"
  },
  {
    id: "norte-02",
    youtubeId: "n9XAyzQdNkQ",
    title: "Norte Podcast | Mendys EP49",
    description: "Episódio completo #49 com Mendys no estúdio do Norte Podcast em Nampula.",
    badge: "EPISÓDIO #49",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/n9XAyzQdNkQ/hqdefault.jpg"
  },
  {
    id: "norte-03",
    youtubeId: "YcsrehWTUfU",
    title: "Norte Podcast | Bastidores e Destaques Mendys EP49",
    description: "Momentos marcantes e conversas francas do episódio 49 com o artista Mendys.",
    badge: "DESTAQUE",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/YcsrehWTUfU/hqdefault.jpg"
  },
  {
    id: "norte-04",
    youtubeId: "dexPwf2ZRmQ",
    title: "Norte Podcast | Chapane & Desscyange EP48",
    description: "Episódio #48 reunindo Chapane e Desscyange para debater cultura, desafios e arte no Norte.",
    badge: "EPISÓDIO #48",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/dexPwf2ZRmQ/hqdefault.jpg"
  },
  {
    id: "norte-05",
    youtubeId: "vDFzu5BplIM",
    title: "Norte Podcast | Nédio Taimo EP47",
    description: "Entrevista aprofundada com Nédio Taimo sobre liderança, sociedade e visão comunitária.",
    badge: "EPISÓDIO #47",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/vDFzu5BplIM/hqdefault.jpg"
  },
  {
    id: "norte-06",
    youtubeId: "eqksZza7CYY",
    title: "Norte Podcast | Líder dos Turlins EP46",
    description: "Diálogo aberto com o Líder dos Turlins sobre a evolução do movimento juvenil e cultural.",
    badge: "EPISÓDIO #46",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/eqksZza7CYY/hqdefault.jpg"
  },
  {
    id: "norte-07",
    youtubeId: "IwSvdePhJvg",
    title: "Norte Podcast | Bander Muirec & Maysen Bunekizzy | T3 #45",
    description: "Episódio #45 com Bander Muirec e Maysen Bunekizzy debatendo a cena contemporânea de Nampula.",
    badge: "EPISÓDIO #45",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/IwSvdePhJvg/hqdefault.jpg"
  },
  {
    id: "norte-08",
    youtubeId: "Jnn9099NDrU",
    title: "Sérgio Maposse | Norte Podcast T3 #44",
    description: "Reflexão sobre comunicação, trajetórias e desenvolvimento local com Sérgio Maposse.",
    badge: "EPISÓDIO #44",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/Jnn9099NDrU/hqdefault.jpg"
  },
  {
    id: "norte-09",
    youtubeId: "2S79OjLIfPA",
    title: "Logaritmo da Justina | Norte Podcast T3 #43",
    description: "Episódio #43 com o fenómeno do humor e conteúdo digital 'Logaritmo da Justina'.",
    badge: "EPISÓDIO #43",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/2S79OjLIfPA/hqdefault.jpg"
  },
  {
    id: "norte-10",
    youtubeId: "U0FQuNyOQU0",
    title: "Erica Dance | Norte Podcast T3 #42",
    description: "Dança, empreendedorismo feminino e superação cultural com Erica Dance.",
    badge: "EPISÓDIO #42",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/U0FQuNyOQU0/hqdefault.jpg"
  },
  {
    id: "norte-11",
    youtubeId: "hnAZjxG9cXM",
    title: "FOI AMOR À PRIMEIRA VISTA | Norte Podcast",
    description: "Conversas descontraídas sobre relacionamentos, histórias de vida e conexões humanas reais.",
    badge: "ESPECIAL",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/hnAZjxG9cXM/hqdefault.jpg"
  },
  {
    id: "norte-12",
    youtubeId: "mgphT5EPe9I",
    title: "Mariza Bragança: Artistas mendigam para aparecer em cartazes 'Mahala'",
    description: "Declarações polémicas de Mariza Bragança sobre os bastidores dos grandes eventos em Moçambique.",
    badge: "DESTAQUE VIRAL",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/mgphT5EPe9I/hqdefault.jpg"
  },
  {
    id: "norte-13",
    youtubeId: "Oj1LKQY4dqE",
    title: "Mariza Bragança: Leoklides Soares Não é chamado em shows por ser Arrogante",
    description: "Análise crítica do mercado musical e posicionamento de artistas com Mariza Bragança.",
    badge: "CORTE EXCLUSIVO",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/Oj1LKQY4dqE/hqdefault.jpg"
  },
  {
    id: "norte-14",
    youtubeId: "DAnF1_Du7ds",
    title: "Mariza Bragança | Norte Podcast T3 #41",
    description: "Episódio #41 completo com Mariza Bragança no estúdio do Norte Podcast.",
    badge: "EPISÓDIO #41",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/DAnF1_Du7ds/hqdefault.jpg"
  },
  {
    id: "norte-15",
    youtubeId: "WujFnACgQBg",
    title: "DONA LAURA, FECK BIM & NACULETE | Norte Podcast T3 #40",
    description: "Mesa redonda icónica com Dona Laura, Feck Bim e Naculette na 3ª Temporada.",
    badge: "EPISÓDIO #40",
    date: "Temporada 3",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/WujFnACgQBg/hqdefault.jpg"
  }
];

// 15 VÍDEOS REAIS RASPAGEM OFICIAL DO CANAL @batalhasliricas
const FALLBACK_BLN_BATTLES = [
  {
    id: "bln-01",
    youtubeId: "m0AE-r5dVUk",
    title: "BLN APRESENTA: Astro VS Delfim (Trailer) Quartos de Finais",
    description: "Trailer oficial dos Quartos de Finais da Temporada 2 entre Astro e Delfim nas Batalhas Líricas Nacionais.",
    badge: "QUARTOS DE FINAL",
    date: "Recente",
    duration: "Trailer HD",
    thumbnail: "https://i.ytimg.com/vi/m0AE-r5dVUk/hqdefault.jpg"
  },
  {
    id: "bln-02",
    youtubeId: "cTU1SMhxX4M",
    title: "#BLN APRESENTA T2: Zetto Divisa Vs Hugo Boss (Batalha Oficial)",
    description: "Confronto oficial completo da Temporada 2 entre Zetto Divisa e Hugo Boss na arena BLN.",
    badge: "BATALHA OFICIAL",
    date: "Temporada 2",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/cTU1SMhxX4M/hqdefault.jpg"
  },
  {
    id: "bln-03",
    youtubeId: "DBGE00VBBKI",
    title: "#BLN APRESENTA T2: Hugo VS Zetto Divissa (Trailer)",
    description: "A prévia e o clima tenso que antecederam a batalha entre Hugo e Zetto Divisa.",
    badge: "TRAILER OFICIAL",
    date: "Temporada 2",
    duration: "Trailer HD",
    thumbnail: "https://i.ytimg.com/vi/DBGE00VBBKI/hqdefault.jpg"
  },
  {
    id: "bln-04",
    youtubeId: "bwQlByY3_5o",
    title: "#BLN APRESENTA T2: Bangladesh Vs Danger (Batalha Oficial)",
    description: "Duelo épico de punchlines e lírica pura entre Bangladesh e Danger na Temporada 2.",
    badge: "BATALHA OFICIAL",
    date: "Temporada 2",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/bwQlByY3_5o/hqdefault.jpg"
  },
  {
    id: "bln-05",
    youtubeId: "BU5JRgNBY04",
    title: "#BLN APRESENTA: Bangladesh Vs Danger (Trailer) T2",
    description: "Trailer promocional do confronto explosivo entre Bangladesh e Danger.",
    badge: "TRAILER T2",
    date: "Temporada 2",
    duration: "Trailer HD",
    thumbnail: "https://i.ytimg.com/vi/BU5JRgNBY04/hqdefault.jpg"
  },
  {
    id: "bln-06",
    youtubeId: "bbARgSdHUGE",
    title: "#BLN APRESENTA T2: Tony Kidd Vs Quilton (Batalha Oficial)",
    description: "Batalha oficial com rimas contundentes entre Tony Kidd e Quilton na arena do BLN.",
    badge: "BATALHA OFICIAL",
    date: "Temporada 2",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/bbARgSdHUGE/hqdefault.jpg"
  },
  {
    id: "bln-07",
    youtubeId: "L9fWeTNnyQI",
    title: "#BLN APRESENTA T2: Quiton VS Tony Kid (Trailer Oficial)",
    description: "Trailer de apresentação para o confronto eletrizante de Tony Kidd vs Quilton.",
    badge: "TRAILER OFICIAL",
    date: "Temporada 2",
    duration: "Trailer HD",
    thumbnail: "https://i.ytimg.com/vi/L9fWeTNnyQI/hqdefault.jpg"
  },
  {
    id: "bln-08",
    youtubeId: "BhgFtY_ZMt0",
    title: "BLN Arena — Duelo Especial de Freestyle",
    description: "Exibição e confronto especial com plateia vibrante no Salão Nobre de Nampula.",
    badge: "ARENA ESPECIAL",
    date: "Ao Vivo",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/BhgFtY_ZMt0/hqdefault.jpg"
  },
  {
    id: "bln-09",
    youtubeId: "8LpCsiuA18U",
    title: "Podcast com Gladiadores | Rumo à Final",
    description: "Mesa redonda exclusiva com os MCs classificados analisando as estratégias para a Grande Final.",
    badge: "PODCAST BLN",
    date: "Especial",
    duration: "Debate",
    thumbnail: "https://i.ytimg.com/vi/8LpCsiuA18U/hqdefault.jpg"
  },
  {
    id: "bln-10",
    youtubeId: "Gbzcf_yCYzA",
    title: "#BLN APRESENTA T2: Paydizzy Vs Toy Flow (Batalha Oficial)",
    description: "Paydizzy e Toy Flow duelando pelo avanço na tabela classificatória da Temporada 2.",
    badge: "BATALHA OFICIAL",
    date: "Temporada 2",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/Gbzcf_yCYzA/hqdefault.jpg"
  },
  {
    id: "bln-11",
    youtubeId: "EG8WlEXgvEM",
    title: "#BLN APRESENTA T2: Paydizzy Vs Toy Flow (Trailer)",
    description: "Prévia com as melhores falas e a expectativa para Paydizzy vs Toy Flow.",
    badge: "TRAILER T2",
    date: "Temporada 2",
    duration: "Trailer HD",
    thumbnail: "https://i.ytimg.com/vi/EG8WlEXgvEM/hqdefault.jpg"
  },
  {
    id: "bln-12",
    youtubeId: "qy5qCT3gzu8",
    title: "#BLN APRESENTA T2: Akasa VS Seiva Bruta (Batalha Oficial)",
    description: "Um dos duelos líricos mais comentados da fase eliminatória entre Akasa e Seiva Bruta.",
    badge: "BATALHA OFICIAL",
    date: "Temporada 2",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/qy5qCT3gzu8/hqdefault.jpg"
  },
  {
    id: "bln-13",
    youtubeId: "NjdlpFdruBk",
    title: "#BLN APRESENTA T2: Akassa VS Seyva Bruta (Trailer Oficial)",
    description: "Trailer oficial anunciando o combate lírico de Akasa vs Seiva Bruta.",
    badge: "TRAILER OFICIAL",
    date: "Temporada 2",
    duration: "Trailer HD",
    thumbnail: "https://i.ytimg.com/vi/NjdlpFdruBk/hqdefault.jpg"
  },
  {
    id: "bln-14",
    youtubeId: "IoPhz_W2Twk",
    title: "#BLN APRESENTA T2: Saguas VS Brizzy (Batalha Oficial) #OitavosDeFinal",
    description: "Oitavos de Final com métrica pesada entre Saguas e Brizzy na arena BLN.",
    badge: "OITAVOS DE FINAL",
    date: "Temporada 2",
    duration: "Full Video",
    thumbnail: "https://i.ytimg.com/vi/IoPhz_W2Twk/hqdefault.jpg"
  },
  {
    id: "bln-15",
    youtubeId: "ks1aPi5M9ks",
    title: "#BLN APRESENTA T2: Saguas VS Brizzy (Trailer Oficial) #OitavosDeFinal",
    description: "Trailer oficial dos Oitavos de Final entre Saguas e Brizzy.",
    badge: "TRAILER OFICIAL",
    date: "Temporada 2",
    duration: "Trailer HD",
    thumbnail: "https://i.ytimg.com/vi/ks1aPi5M9ks/hqdefault.jpg"
  }
];

// YouTube API Fetcher with Cache & Fallback
class YouTubeFeedManager {
  constructor(apiKey = null, channelId = null) {
    this.apiKey = apiKey;
    this.channelId = channelId;
    this.cacheKey = "norte_youtube_feed_cache_v4";
    this.cacheDuration = 1000 * 60 * 60; // 1 hour cache
    this.channelHandles = {
      norte: "@Nortepodcast",
      bln: "@batalhasliricas"
    };
  }

  async getEpisodes(type = "norte") {
    const cached = this.getCache(type);
    if (cached) return cached;

    if (!this.apiKey || !this.channelId) {
      const data = type === "bln" ? FALLBACK_BLN_BATTLES : FALLBACK_NORTE_EPISODES;
      this.setCache(type, data);
      return data;
    }

    try {
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${this.channelId}&key=${this.apiKey}`
      );
      const channelData = await channelRes.json();
      const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadsPlaylistId) throw new Error("Uploads playlist not found");

      const playlistRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=15&key=${this.apiKey}`
      );
      const playlistData = await playlistRes.json();

      let items = (playlistData.items || []).map(item => ({
        id: item.id,
        youtubeId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description || "Episódio oficial do Norte Podcast / BLN.",
        badge: type === "bln" ? "BLN BATALHA" : "EPISÓDIO OFICIAL",
        date: "Recente",
        duration: "Full Video",
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url
      }));

      if (type === "bln") {
        items = items.filter(i => i.title.toLowerCase().includes("bln") || i.title.toLowerCase().includes("batalha"));
        if (items.length === 0) items = FALLBACK_BLN_BATTLES;
      }

      this.setCache(type, items);
      return items;
    } catch (err) {
      console.warn("YouTube API Fetch failed, loading offline fallback data:", err);
      return type === "bln" ? FALLBACK_BLN_BATTLES : FALLBACK_NORTE_EPISODES;
    }
  }

  getCache(type) {
    try {
      const raw = localStorage.getItem(`${this.cacheKey}_${type}`);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (Date.now() - parsed.timestamp < this.cacheDuration) {
        return parsed.data;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  setCache(type, data) {
    try {
      localStorage.setItem(
        `${this.cacheKey}_${type}`,
        JSON.stringify({ timestamp: Date.now(), data })
      );
    } catch (e) {}
  }
}

// Global Video Modal Controller
function initVideoModal() {
  const modal = document.getElementById("videoModal");
  const modalIframe = document.getElementById("modalVideoIframe");
  const closeBtn = document.getElementById("closeModalBtn");
  const modalTitle = document.getElementById("modalVideoTitle");

  if (!modal) return;

  window.openVideoPlayer = function(youtubeId, title = "Reproduzir Vídeo") {
    if (modalIframe) {
      modalIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    }
    if (modalTitle) {
      modalTitle.textContent = title;
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    modal.classList.remove("active");
    if (modalIframe) {
      modalIframe.src = "";
    }
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// Render Video Grid
async function renderEpisodes(feedType = "norte") {
  const container = document.getElementById("episodesContainer");
  if (!container) return;

  const feedManager = new YouTubeFeedManager();
  const episodes = await feedManager.getEpisodes(feedType);

  container.innerHTML = episodes.map(ep => `
    <article class="episode-card" onclick="openVideoPlayer('${ep.youtubeId}', '${escapeHtml(ep.title)}')">
      <div class="episode-thumb">
        <img src="${ep.thumbnail}" alt="${escapeHtml(ep.title)}" class="episode-thumb-img" loading="lazy">
        <span class="episode-duration">${ep.duration}</span>
      </div>
      <div class="episode-body">
        <div class="episode-meta">
          <span class="episode-badge">${ep.badge}</span>
          <span>•</span>
          <span>${ep.date}</span>
        </div>
        <h3 class="episode-title">${ep.title}</h3>
        <p class="episode-desc">${ep.description}</p>
        <div class="episode-footer">
          <button class="episode-watch-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            <span>Assistir Agora</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector(".header-nav");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Init on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initVideoModal();
  const currentTheme = document.documentElement.getAttribute("data-theme") || "norte";
  renderEpisodes(currentTheme === "bln" ? "bln" : "norte");
});
