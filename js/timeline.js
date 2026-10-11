/**
 * ============================================================================
 * 📸 42-ITEM SOULMATE POLAROID WALL, DRAGGABLE DECALS & CINEMA LIGHTBOX
 * ============================================================================
 */

class MediaGalleryEngine {
  constructor() {
    this.mediaItems = window.MEDIA_ITEMS || [];
    this.currentFilter = 'all';
    this.currentIndex = 0;
    
    this.gridContainer = document.getElementById('media-gallery-grid');
    this.filterContainer = document.getElementById('gallery-filter-chips');
    this.lightbox = document.getElementById('cinema-lightbox');
    this.activeVideos = new Map();
    this.videoObserver = null;
    this.celebrationTriggered = false;

    this.init();
  }

  init() {
    this.renderFilterChips();
    this.setupIntersectionObserver();
    this.renderGallery();
    this.initLightboxEvents();
    this.initScrollMilestones();
    this.initDraggableDecals();
  }

  renderFilterChips() {
    if (!this.filterContainer) return;

    const filters = [
      { id: 'all', label: `All ${this.mediaItems.length} Memories ★`, count: this.mediaItems.length },
      { id: 'beginning', label: 'Loved You Before We Met 🌙', count: this.mediaItems.filter(m => m.tag === 'beginning').length },
      { id: 'whole-world', label: 'My Whole World 💖', count: this.mediaItems.filter(m => m.tag === 'whole-world').length },
      { id: 'adventures', label: 'Cosmic Adventures 🚗', count: this.mediaItems.filter(m => m.tag === 'adventures').length },
      { id: 'unfiltered', label: 'Unfiltered Twin Flame ☕', count: this.mediaItems.filter(m => m.tag === 'unfiltered').length },
      { id: 'favorites', label: 'Eternity Keepsakes 👑', count: this.mediaItems.filter(m => m.tag === 'favorites').length }
    ];

    this.filterContainer.innerHTML = filters.map(f => `
      <button 
        data-filter="${f.id}"
        class="filter-chip px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-150 flex items-center gap-2 border-[2.8px] border-[#0D001A] active:translate-x-[2px] active:translate-y-[2px] ${
          this.currentFilter === f.id 
            ? 'bg-[#FF0066] text-white shadow-[4px_4px_0px_#00F5FF,7px_7px_0px_#0D001A] -translate-y-0.5' 
            : 'bg-white text-[#0D001A] hover:bg-[#FFF8E7] shadow-[3px_3px_0px_#0D001A]'
        }">
        <span>${f.label}</span>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${this.currentFilter === f.id ? 'bg-[#0D001A] text-white' : 'bg-[#0D001A]/10 text-[#0D001A]'}">${f.count}</span>
      </button>
    `).join('');

    this.filterContainer.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.currentTarget.dataset.filter;
        this.setFilter(filter);
      });
    });
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.renderFilterChips();
    this.renderGallery();

    if (window.audioEngine) {
      window.audioEngine.playChime();
    }
  }

  getFilteredItems() {
    if (this.currentFilter === 'all') return this.mediaItems;
    return this.mediaItems.filter(m => m.tag === this.currentFilter);
  }

  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    this.videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      });
    }, {
      rootMargin: '50px 0px 50px 0px',
      threshold: 0.35
    });
  }

  renderGallery() {
    if (!this.gridContainer) return;

    const items = this.getFilteredItems();

    if (items.length === 0) {
      this.gridContainer.innerHTML = `
        <div class="col-span-full py-20 text-center text-[#FF0066] font-display text-2xl font-bold">
          No soulmate memories found in this constellation.
        </div>
      `;
      return;
    }

    const soulmateStamps = [
      "★ CERTIFIED SOULMATE ★",
      "NON-NEGOTIABLE FOREVER",
      "TWIN FLAMES COLLIDING",
      "MY HOME, MY HUMAN",
      "DESTINED ACROSS TIME",
      "1 IN 8 BILLION SOULS"
    ];

    const tapeStyles = ['tape-pink', 'tape-cyan', 'tape-gold', 'tape-lime'];
    const tapeLabels = ["COSMICALLY ENTANGLED", "MY WHOLE WORLD", "DESTINED FOREVER", "100% PURE LOVE"];

    const speechCallouts = [
      "The exact smile I fell for in every lifetime.",
      "My universe in a single gaze ♡",
      "Every timeline leads to you.",
      "Pure sunshine in human form."
    ];

    this.gridContainer.innerHTML = items.map((item, index) => {
      let aspectClass = 'aspect-[3/4]';
      if (item.aspectRatio === 'portrait') aspectClass = 'aspect-[3/4] sm:aspect-[4/5]';
      if (item.aspectRatio === 'landscape') aspectClass = 'aspect-[16/10] sm:aspect-[16/11]';
      if (item.aspectRatio === 'square') aspectClass = 'aspect-square';

      const isVideo = item.type === 'video';
      const rotClass = ['-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1'][index % 4];
      const tapeClass = tapeStyles[index % tapeStyles.length];
      const tapeLabel = tapeLabels[index % tapeLabels.length];
      const stampText = soulmateStamps[index % soulmateStamps.length];
      const tapeSide = index % 2 === 0 ? '-top-3.5 -left-3 rotate-[-10deg]' : '-top-3.5 -right-3 rotate-[12deg]';

      // Occasional speech bubble callout
      const hasSpeech = (index % 5 === 0);
      const speechText = speechCallouts[(index / 5) % speechCallouts.length];

      return `
        <div 
          class="media-card tilt-card break-inside-avoid w-full mb-8 group cursor-pointer bg-white border-[3.5px] border-[#0D001A] shadow-[4px_4px_0px_#00F5FF,8px_8px_0px_#FF0066,12px_12px_0px_#0D001A] hover:-translate-y-2 transition-all duration-200 relative p-3.5 pb-6 ${rotClass} hover:rotate-0 hover:z-30"
          data-id="${item.id}"
          data-index="${index}"
          tabindex="0"
          role="button"
          aria-label="View memory #${item.id}: ${item.title}. Press Enter to expand.">
          
          <!-- Holographic Rainbow Sheen Layer -->
          <div class="absolute inset-0 holographic-sheen opacity-0 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none rounded-xl z-20"></div>

          <!-- Stamped Washi Tape Strip -->
          <div class="washi-tape-strip ${tapeClass} ${tapeSide}">${tapeLabel}</div>

          <!-- Top Interactive Neo-Brutalist Badges -->
          <div class="flex items-center justify-between mb-2 z-20 pointer-events-auto gap-1">
            <button 
              type="button"
              class="card-song-btn px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-[#FF0066] hover:bg-[#e60057] flex items-center gap-1.5 border-[2px] border-[#0D001A] shadow-[2px_2px_0px_#0D001A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all touch-target-44"
              data-card-id="${item.id}"
              aria-label="Play Our Song for ${item.title}"
              title="Tap for Song">
              <i data-lucide="music" class="w-3 h-3 text-white"></i>
              <span>Song</span>
            </button>

            <!-- Physical Barcode Strip -->
            <div class="barcode-strip hidden sm:inline-flex scale-90">
              <div class="barcode-lines"></div>
              <span class="text-[8px] font-mono font-bold text-[#0D001A]">SOULMATE-${String(item.id).padStart(3, '0')}</span>
            </div>

            <button 
              type="button"
              class="card-voice-btn px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#0D001A] bg-[#FFE600] hover:bg-[#edd500] flex items-center gap-1.5 border-[2px] border-[#0D001A] shadow-[2px_2px_0px_#0D001A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all touch-target-44"
              data-card-id="${item.id}"
              aria-label="Hear voice note for ${item.title}"
              title="Click for Voice Note">
              <i data-lucide="mic" class="w-3 h-3 text-[#0D001A]"></i>
              <span>Voice</span>
            </button>
          </div>

          <!-- Media Container with Polaroid Window -->
          <div class="relative w-full ${aspectClass} overflow-hidden border-[2.8px] border-[#0D001A] bg-[#0D001A]">
            ${isVideo ? `
              <!-- Film Sprocket Overlay -->
              <div class="film-sprocket-track track-top z-10">
                <div class="sprocket-hole"></div><div class="sprocket-hole"></div><div class="sprocket-hole"></div><div class="sprocket-hole"></div><div class="sprocket-hole"></div>
              </div>

              <!-- HD Video Tile -->
              <video 
                class="media-thumb inline-video w-full h-full object-cover"
                src="${item.src}"
                poster="${item.poster || ''}"
                muted
                loop
                playsinline
                webkit-playsinline="true"
                x5-playsinline="true"
                preload="none">
              </video>

              <div class="film-sprocket-track track-bottom z-10">
                <div class="sprocket-hole"></div><div class="sprocket-hole"></div><div class="sprocket-hole"></div><div class="sprocket-hole"></div><div class="sprocket-hole"></div>
              </div>

              <div class="absolute bottom-4 left-3 px-2 py-0.5 rounded bg-[#00FF75] border-[2px] border-[#0D001A] text-[#0D001A] text-[9px] font-mono font-extrabold shadow-[2px_2px_0px_#0D001A] z-20">
                ★ DESTINED REEL ★
              </div>

              <div class="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                <div class="w-12 h-12 rounded-full bg-[#FF0066] border-[2.5px] border-[#0D001A] flex items-center justify-center text-white shadow-[3px_3px_0px_#0D001A]">
                  <i data-lucide="play" class="w-5 h-5 fill-white ml-0.5"></i>
                </div>
              </div>
            ` : `
              <!-- High-Resolution Photo Tile -->
              <img 
                src="${item.src}" 
                alt="${item.title}"
                loading="lazy"
                decoding="async"
                class="media-thumb w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            `}

            <!-- Hover Quick Info Overlay -->
            <div class="absolute inset-0 bg-[#00F5FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
              <span class="px-3.5 py-1.5 rounded-full bg-white border-[2px] border-[#0D001A] text-[#0D001A] font-mono text-xs font-bold shadow-[3px_3px_0px_#0D001A] flex items-center gap-1.5">
                <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-[#FF0066]"></i> Expand Polaroid
              </span>
            </div>
          </div>

          <!-- Bottom Handwritten Polaroid Caption Area -->
          <div class="pt-3 px-1 flex flex-col gap-1 relative">
            
            ${hasSpeech ? `
              <div class="soulmate-speech-bubble -top-6 right-2 absolute">
                ${speechText}
              </div>
            ` : ''}

            <div class="flex items-center justify-between text-[10px] font-mono font-bold uppercase text-[#0D001A]/80">
              <span class="px-2 py-0.5 rounded bg-[#FFF8E7] border border-[#0D001A]">
                ${stampText}
              </span>
              <span class="text-[#FF0066] font-bold">#${item.id} / ${this.mediaItems.length}</span>
            </div>

            <h3 class="font-display text-base font-bold text-[#0D001A] leading-snug group-hover:text-[#FF0066] transition-colors">
              ${item.title}
            </h3>

            <p class="font-handwriting text-lg text-[#0D001A] font-bold leading-tight pt-1">
              “${item.caption}”
            </p>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();

    if (window.tiltEngine) {
      window.tiltEngine.attachElements();
    }

    if (this.videoObserver) {
      this.gridContainer.querySelectorAll('video.inline-video').forEach(vid => {
        this.videoObserver.observe(vid);
      });
    }

    this.gridContainer.querySelectorAll('.card-song-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.cardId;
        if (window.audioEngine) {
          window.audioEngine.playCardSong(id);
        }
        btn.classList.add('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 400);
      });
    });

    this.gridContainer.querySelectorAll('.card-voice-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.cardId;
        if (window.audioEngine) {
          window.audioEngine.playVoiceNote(id);
        }
        btn.classList.add('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 400);
      });
    });

    this.gridContainer.querySelectorAll('.media-card').forEach(card => {
      const openCard = (e) => {
        if (e.target.closest('.card-song-btn') || e.target.closest('.card-voice-btn')) return;
        const id = parseInt(card.dataset.id, 10);
        const itemIdx = this.mediaItems.findIndex(m => m.id === id);
        if (itemIdx !== -1) {
          this.openLightbox(itemIdx);
        }
      };

      card.addEventListener('click', openCard);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          openCard(e);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     Draggable Soulmate Decals Engine
     -------------------------------------------------------------------------- */
  initDraggableDecals() {
    const decals = document.querySelectorAll('.draggable-decal');
    decals.forEach(decal => {
      let isDragging = false;
      let startX, startY, initialLeft, initialTop;

      const onMouseDown = (e) => {
        isDragging = true;
        startX = e.clientX || (e.touches && e.touches[0].clientX);
        startY = e.clientY || (e.touches && e.touches[0].clientY);

        const rect = decal.getBoundingClientRect();
        initialLeft = rect.left + window.scrollX;
        initialTop = rect.top + window.scrollY;

        decal.style.position = 'absolute';
        decal.style.left = `${initialLeft}px`;
        decal.style.top = `${initialTop}px`;
        decal.classList.add('decal-active');

        if (window.audioEngine) window.audioEngine.playHeartPop();
      };

      const onMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX || (e.touches && e.touches[0].clientX);
        const currentY = e.clientY || (e.touches && e.touches[0].clientY);
        const dx = currentX - startX;
        const dy = currentY - startY;

        decal.style.left = `${initialLeft + dx}px`;
        decal.style.top = `${initialTop + dy}px`;
      };

      const onMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        decal.classList.remove('decal-active');
        if (window.audioEngine) window.audioEngine.playChime();
      };

      decal.addEventListener('mousedown', onMouseDown);
      decal.addEventListener('touchstart', onMouseDown, { passive: true });

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onMouseMove, { passive: true });

      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onMouseUp);
    });
  }

  /* --------------------------------------------------------------------------
     Cinema Lightbox Handling
     -------------------------------------------------------------------------- */
  initLightboxEvents() {
    if (!this.lightbox) return;

    const closeBtn = document.getElementById('cinema-close-btn');
    const prevBtn = document.getElementById('cinema-prev-btn');
    const nextBtn = document.getElementById('cinema-next-btn');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeLightbox());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevMedia());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextMedia());

    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox || e.target.classList.contains('lightbox-backdrop')) {
        this.closeLightbox();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.prevMedia();
      if (e.key === 'ArrowRight') this.nextMedia();
    });
  }

  openLightbox(index) {
    if (!this.lightbox || !this.mediaItems[index]) return;
    this.currentIndex = index;
    const item = this.mediaItems[index];

    const imgEl = document.getElementById('cinema-image-player');
    const vidEl = document.getElementById('cinema-video-player');
    const titleEl = document.getElementById('cinema-title');
    const capEl = document.getElementById('cinema-caption');
    const countEl = document.getElementById('cinema-counter');
    const tagEl = document.getElementById('cinema-tag');

    if (countEl) countEl.textContent = `${this.currentIndex + 1} / ${this.mediaItems.length}`;
    if (tagEl) tagEl.textContent = `★ ${item.tag.replace('-', ' ')} ★`;
    if (titleEl) titleEl.textContent = item.title;
    if (capEl) capEl.textContent = `“${item.caption}”`;

    if (item.type === 'video') {
      if (imgEl) imgEl.classList.add('hidden');
      if (vidEl) {
        vidEl.classList.remove('hidden');
        vidEl.src = item.src;
        vidEl.play().catch(() => {});
      }
    } else {
      if (vidEl) {
        vidEl.pause();
        vidEl.classList.add('hidden');
      }
      if (imgEl) {
        imgEl.classList.remove('hidden');
        imgEl.src = item.src;
      }
    }

    this.lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    if (window.audioEngine) window.audioEngine.playChime();
  }

  closeLightbox() {
    if (!this.lightbox) return;
    const vidEl = document.getElementById('cinema-video-player');
    if (vidEl) {
      vidEl.pause();
      vidEl.src = '';
    }

    this.lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  prevMedia() {
    let newIndex = this.currentIndex - 1;
    if (newIndex < 0) newIndex = this.mediaItems.length - 1;
    this.openLightbox(newIndex);
  }

  nextMedia() {
    let newIndex = (this.currentIndex + 1) % this.mediaItems.length;
    this.openLightbox(newIndex);
  }

  initScrollMilestones() {
    const trigger = document.getElementById('gallery-completion-trigger');
    if (!trigger || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.celebrationTriggered) {
          this.celebrationTriggered = true;
          if (typeof confetti === 'function') {
            confetti({
              particleCount: 80,
              spread: 90,
              origin: { y: 0.8 },
              colors: ['#FF0066', '#00F5FF', '#FFE600', '#00FF75', '#7B00FF']
            });
          }
          if (window.audioEngine) window.audioEngine.playConfettiFanfare();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(trigger);
  }
}

if (typeof window !== 'undefined') {
  window.MediaGalleryEngine = MediaGalleryEngine;
  window.MemoryTimeline = MediaGalleryEngine;
}
