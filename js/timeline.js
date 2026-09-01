/**
 * ============================================================================
 * 📸 42-ITEM HYBRID BENTO-MASONRY GALLERY & CINEMA LIGHTBOX ENGINE
 * ============================================================================
 * Features:
 * - 42 structured items (photos and HD videos)
 * - IntersectionObserver for lazy loading & auto-pausing off-screen videos
 * - Inline video hover preview & muted viewport playback
 * - Cinema Lightbox modal supporting both photo zoom & video playback
 * - Category filter chips ("All", "The Beginning", "My Whole World", "Adventures", "Unfiltered", "Favorites")
 * - Scroll milestone heart burst triggers & final gallery completion celebration
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
  }

  renderFilterChips() {
    if (!this.filterContainer) return;

    const filters = [
      { id: 'all', label: 'All 42 Memories ✨', count: this.mediaItems.length },
      { id: 'beginning', label: 'Loved You Before We Began 🌙', count: this.mediaItems.filter(m => m.tag === 'beginning').length },
      { id: 'whole-world', label: 'My Whole World 💖', count: this.mediaItems.filter(m => m.tag === 'whole-world').length },
      { id: 'adventures', label: 'Our Adventures 🚗', count: this.mediaItems.filter(m => m.tag === 'adventures').length },
      { id: 'unfiltered', label: 'Unfiltered & Candid ☕', count: this.mediaItems.filter(m => m.tag === 'unfiltered').length },
      { id: 'favorites', label: 'Forever Keepsakes 👑', count: this.mediaItems.filter(m => m.tag === 'favorites').length }
    ];

    this.filterContainer.innerHTML = filters.map(f => `
      <button 
        data-filter="${f.id}"
        class="filter-chip px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 ${
          this.currentFilter === f.id 
            ? 'bg-rose-500/25 text-rose-100 border border-rose-300/50 shadow-md shadow-rose-500/20 scale-105' 
            : 'bg-white/5 text-gray-400 hover:text-rose-200 hover:bg-white/10 border border-white/10'
        }">
        <span>${f.label}</span>
        <span class="text-[10px] opacity-70 px-1.5 py-0.5 rounded-full bg-black/30">${f.count}</span>
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
          // Play video muted when in view
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay policy fallback
            });
          }
        } else {
          // Pause video when scrolled away
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
        <div class="col-span-full py-20 text-center text-rose-200/60 font-serif-editorial text-2xl">
          No memories found in this constellation.
        </div>
      `;
      return;
    }

    this.gridContainer.innerHTML = items.map((item, index) => {
      // Dynamic aspect ratio class matching intrinsic photo/video orientation
      let aspectClass = 'aspect-[3/4]';
      if (item.aspectRatio === 'portrait') aspectClass = 'aspect-[3/4] sm:aspect-[4/5]';
      if (item.aspectRatio === 'landscape') aspectClass = 'aspect-[16/10] sm:aspect-[16/11]';
      if (item.aspectRatio === 'square') aspectClass = 'aspect-square';

      const isVideo = item.type === 'video';

      return `
        <div 
          class="media-card tilt-card break-inside-avoid w-full mb-6 group cursor-pointer"
          data-id="${item.id}"
          data-index="${index}"
          tabindex="0"
          role="button"
          aria-label="View memory #${item.id}: ${item.title}. Press Enter to expand.">
          
          <!-- Top Interactive Frosted Glass Action Buttons -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto gap-2">
            <button 
              type="button"
              class="card-song-btn glass-pill px-2.5 py-1 rounded-full text-[10px] font-mono text-rose-200 hover:text-white flex items-center gap-1.5 border border-white/20 bg-black/50 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md shadow-black/40 touch-target-44"
              data-card-id="${item.id}"
              aria-label="Play Our Song for ${item.title}"
              title="Tap for Our Song">
              <i data-lucide="music" class="w-3 h-3 text-rose-300"></i>
              <span>Our Song</span>
            </button>
            
            <button 
              type="button"
              class="card-voice-btn glass-pill px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-200 hover:text-white flex items-center gap-1.5 border border-white/20 bg-black/50 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md shadow-black/40 touch-target-44"
              data-card-id="${item.id}"
              aria-label="Hear voice note for ${item.title}"
              title="Click to Hear My Voice">
              <i data-lucide="mic" class="w-3 h-3 text-amber-300"></i>
              <span>Hear Voice</span>
            </button>
          </div>

          <!-- Media Container with Dynamic Framing -->
          <div class="relative w-full ${aspectClass} overflow-hidden bg-black/60">
            ${isVideo ? `
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

              <!-- Video Badge Overlay -->
              <div class="video-badge">
                <span class="video-play-pulse"></span>
                <span>HD REEL</span>
              </div>

              <div class="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                <div class="w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-rose-300/40 flex items-center justify-center text-rose-100 shadow-lg group-hover:bg-rose-500/40 group-hover:border-rose-300 transition-all">
                  <i data-lucide="play" class="w-4.5 h-4.5 fill-rose-100 ml-0.5"></i>
                </div>
              </div>
            ` : `
              <!-- High-Resolution Photo Tile -->
              <img 
                src="${item.src}" 
                alt="${item.title}"
                loading="lazy"
                decoding="async"
                class="media-thumb w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            `}

            <!-- Hover Quick Info Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
              <span class="text-[10px] font-mono uppercase tracking-widest text-rose-300/90 mb-1 flex items-center gap-1">
                <i data-lucide="maximize-2" class="w-3 h-3"></i> Expand Cinema View
              </span>
            </div>
          </div>

          <!-- Flush Personalized Metadata Bar with Embedded Captions -->
          <div class="p-4 bg-gradient-to-b from-[#161324] to-[#100d1c] border-t border-rose-200/10 flex flex-col gap-1.5">
            <div class="flex items-center justify-between text-[10px] font-mono uppercase text-rose-300/70">
              <span class="flex items-center gap-1.5">
                <i data-lucide="${isVideo ? 'video' : 'camera'}" class="w-3 h-3 text-rose-400"></i>
                ${item.tag.replace('-', ' ')}
              </span>
              <span class="text-gray-400 font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/40 border border-white/5">#${item.id}</span>
            </div>

            <h3 class="font-serif-editorial text-base text-rose-100 font-medium group-hover:text-rose-200 transition-colors leading-tight">
              ${item.title}
            </h3>

            <p class="text-xs text-gray-300 font-sans italic leading-relaxed pt-0.5 border-t border-white/5">
              “${item.caption}”
            </p>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();

    // Reattach Tilt engine
    if (window.tiltEngine) {
      window.tiltEngine.attachElements();
    }

    // Observe videos for viewport auto-play
    if (this.videoObserver) {
      this.gridContainer.querySelectorAll('video.inline-video').forEach(vid => {
        this.videoObserver.observe(vid);
      });
    }

    // Attach card action listeners for Tap for Song & Voice Note
    this.gridContainer.querySelectorAll('.card-song-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.cardId;
        if (window.audioEngine) {
          window.audioEngine.playCardSong(id);
        }
        btn.classList.add('scale-110', 'bg-rose-500/40');
        setTimeout(() => btn.classList.remove('scale-110', 'bg-rose-500/40'), 500);
      });
    });

    this.gridContainer.querySelectorAll('.card-voice-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.cardId;
        if (window.audioEngine) {
          window.audioEngine.playVoiceNote(id);
        }
        btn.classList.add('scale-110', 'bg-amber-500/40');
        setTimeout(() => btn.classList.remove('scale-110', 'bg-amber-500/40'), 500);
      });
    });

    // Attach card click & keyboard handlers to open Cinema Lightbox
    this.gridContainer.querySelectorAll('.media-card').forEach(card => {
      const openCard = (e) => {
        if (e.target.closest('.card-song-btn') || e.target.closest('.card-voice-btn')) return;
        const id = parseInt(card.dataset.id, 10);
        const itemIdx = this.mediaItems.findIndex(m => m.id === id);
        if (itemIdx !== -1) {
          this.openCinemaLightbox(itemIdx);
        }
      };

      card.addEventListener('click', openCard);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCard(e);
        }
      });
    });
  }

  initLightboxEvents() {
    if (!this.lightbox) return;

    const closeBtn = document.getElementById('cinema-close-btn');
    const prevBtn = document.getElementById('cinema-prev-btn');
    const nextBtn = document.getElementById('cinema-next-btn');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeCinemaLightbox());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevItem());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextItem());

    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox || e.target.classList.contains('lightbox-backdrop')) {
        this.closeCinemaLightbox();
      }
    });

    // Touch Swipe Gestures for Mobile (Next/Prev/Close)
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    this.lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    this.lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal Swipe
        if (diffX < -45) {
          this.nextItem(); // Swipe left -> Next
        } else if (diffX > 45) {
          this.prevItem(); // Swipe right -> Previous
        }
      } else {
        // Vertical Swipe
        if (diffY > 80) {
          this.closeCinemaLightbox(); // Swipe down -> Close
        }
      }
    };

    window.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('is-open')) return;

      if (e.key === 'Escape') this.closeCinemaLightbox();
      if (e.key === 'ArrowLeft') this.prevItem();
      if (e.key === 'ArrowRight') this.nextItem();
      if (e.key === ' ') {
        const vid = document.getElementById('cinema-video-player');
        if (vid && !vid.classList.contains('hidden')) {
          e.preventDefault();
          if (vid.paused) vid.play(); else vid.pause();
        }
      }
    });
  }

  openCinemaLightbox(index) {
    this.currentIndex = index;
    const item = this.mediaItems[this.currentIndex];
    if (!item || !this.lightbox) return;

    const imgEl = document.getElementById('cinema-image-player');
    const vidEl = document.getElementById('cinema-video-player');
    const titleEl = document.getElementById('cinema-title');
    const tagEl = document.getElementById('cinema-tag');
    const captionEl = document.getElementById('cinema-caption');
    const counterEl = document.getElementById('cinema-counter');

    if (item.type === 'video') {
      if (imgEl) imgEl.classList.add('hidden');
      if (vidEl) {
        vidEl.classList.remove('hidden');
        vidEl.src = item.src;
        vidEl.poster = item.poster || '';
        vidEl.currentTime = 0;
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

    if (titleEl) titleEl.textContent = item.title;
    if (tagEl) tagEl.textContent = `Era: ${item.tag.replace('-', ' ').toUpperCase()}`;
    if (captionEl) captionEl.textContent = item.caption;
    if (counterEl) counterEl.textContent = `${this.currentIndex + 1} / ${this.mediaItems.length}`;

    this.lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    if (window.audioEngine) {
      window.audioEngine.playChime();
    }
  }

  closeCinemaLightbox() {
    if (!this.lightbox) return;
    const vidEl = document.getElementById('cinema-video-player');
    if (vidEl) {
      vidEl.pause();
      vidEl.src = '';
    }
    this.lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  prevItem() {
    const newIdx = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
    this.openCinemaLightbox(newIdx);
  }

  nextItem() {
    const newIdx = (this.currentIndex + 1) % this.mediaItems.length;
    this.openCinemaLightbox(newIdx);
  }

  initScrollMilestones() {
    // Trigger celebratory confetti / hearts when user reaches bottom of gallery
    const triggerEl = document.getElementById('gallery-completion-trigger');
    if (!triggerEl || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.celebrationTriggered) {
          this.celebrationTriggered = true;
          this.triggerGalleryCelebration();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(triggerEl);
  }

  triggerGalleryCelebration() {
    if (window.audioEngine) {
      window.audioEngine.playConfettiFanfare();
    }

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.8 },
        colors: ['#F4D0D2', '#E8A598', '#FCEADE', '#FF6B8B', '#FFD700']
      });
    }
  }
}

// Attach globally
window.MediaGalleryEngine = MediaGalleryEngine;
window.MemoryTimeline = MediaGalleryEngine; // Backwards compatible alias
