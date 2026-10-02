/**
 * NORTE PODCAST & BLN — MAIN APPLICATION & YOUTUBE FEED MANAGER
 */

const FALLBACK_NORTE_EPISODES = [
  {
    id: "ep-norte-01",
    youtubeId: "dQw4w9WgXcQ",
    title: "Ep. #12 — O Futuro da Juventude e Empreendedorismo no Norte de Moçambique",
    description: "Uma conversa profunda sobre desafios económicos, inovação artística e o poder da voz nortenha com convidados especiais.",
    badge: "EPISÓDIO RECENTE",
    date: "Recente",
    duration: "1h 14m",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ep-norte-02",
    youtubeId: "dQw4w9WgXcQ",
    title: "Ep. #11 — Cultura Macua e Preservação de Raízes em Nampula",
    description: "Debatendo a evolução da música tradicional, oralidade e o resgate das narrativas ancestrais moçambicanas.",
    badge: "DEBATE ABERTO",
    date: "Recente",
    duration: "58m",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ep-norte-03",
    youtubeId: "dQw4w9WgXcQ",
    title: "Ep. #10 — Liderança Juvenil: De Nampula para o Mundo",
    description: "António Lápis e convidados debatem sobre como construir iniciativas culturais com impacto comunitário sustentável.",
    badge: "LIDERANÇA",
    date: "Recente",
    duration: "1h 05m",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
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
    this.cacheKey = "norte_youtube_feed_cache";
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
