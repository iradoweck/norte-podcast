/**
 * NORTE PODCAST & BLN — MAIN APPLICATION & YOUTUBE FEED MANAGER
 */

const FALLBACK_NORTE_EPISODES = [
  {
    id: "ep-norte-01",
    youtubeId: "dQw4w9WgXcQ", // Exemplo / Substituível pelo ID real do canal
    title: "Ep. #12 — O Futuro da Juventude e Empreendedorismo no Norte de Moçambique",
    description: "Uma conversa profunda sobre desafios económicos, inovação artística e o poder da voz nortenha com convidados especiais.",
    badge: "EPISÓDIO RECENTE",
    date: "Há 2 dias",
    duration: "1h 14m",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ep-norte-02",
    youtubeId: "dQw4w9WgXcQ",
    title: "Ep. #11 — Cultura Macua e Preservação de Raízes em Nampula",
    description: "Debatendo a evolução da música tradicional, oralidade e o resgate das narrativas ancestrais moçambicanas.",
    badge: "DEBATE ABERTO",
    date: "Há 6 dias",
    duration: "58m",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ep-norte-03",
    youtubeId: "dQw4w9WgXcQ",
    title: "Ep. #10 — Liderança Juvenil: De Nampula para o Mundo",
    description: "António Lápis e convidados debatem sobre como construir iniciativas culturais com impacto comunitário sustentável.",
    badge: "LIDERANÇA",
    date: "Há 1 semana",
    duration: "1h 05m",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
  }
];

const FALLBACK_BLN_BATTLES = [
  {
    id: "bln-01",
    youtubeId: "dQw4w9WgXcQ",
    title: "BLN Edição 2025 — Grande Final no Salão Nobre de Nampula",
    description: "A rima mais afiada de Moçambique num confronto épico de métrica, flow e poesia urbana de rua.",
    badge: "GRANDE FINAL",
    date: "Há 3 dias",
    duration: "45m",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bln-02",
    youtubeId: "dQw4w9WgXcQ",
    title: "Semifinais BLN — Batalhas Líricas ao Vivo no Centro Cultural UR",
    description: "Confrontos eliminatórios com casa cheia. Duelos líricos sem filtro sob comando de The Coach CEO.",
    badge: "SEMIFINAL",
    date: "Há 1 semana",
    duration: "38m",
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bln-03",
    youtubeId: "dQw4w9WgXcQ",
    title: "Cypher Especial BLN: As Novas Promessas da Rima em Moçambique",
    description: "Sessão especial de microfone aberto com os melhores talentos revelados na temporada de batalhas.",
    badge: "CYPHER OFICIAL",
    date: "Há 2 semanas",
    duration: "22m",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
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
    // Check LocalStorage Cache first
    const cached = this.getCache(type);
    if (cached) return cached;

    // In local development or without API Key, return curated high-fidelity fallback
    if (!this.apiKey || !this.channelId) {
      const data = type === "bln" ? FALLBACK_BLN_BATTLES : FALLBACK_NORTE_EPISODES;
      this.setCache(type, data);
      return data;
    }

    try {
      // 1. Get Uploads playlist ID (1 quota cost)
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${this.channelId}&key=${this.apiKey}`
      );
      const channelData = await channelRes.json();
      const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadsPlaylistId) throw new Error("Uploads playlist not found");

      // 2. Fetch Playlist Items
      const playlistRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${this.apiKey}`
      );
      const playlistData = await playlistRes.json();

      let items = (playlistData.items || []).map(item => ({
        id: item.id,
        youtubeId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description || "Episódio oficial do Norte Podcast.",
        badge: type === "bln" ? "BLN BATALHA" : "EPISÓDIO OFICIAL",
        date: "Recente",
        duration: "Full Video",
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url
      }));

      // Filter by type if needed
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
