/**
 * ============================================================================
 * 🌌 "REASONS WHY YOU'RE MY UNIVERSE" BENTO GRID & MICRO-INTERACTIONS
 * ============================================================================
 * Features:
 * - Interactive Bento Grid with 3D Flip and Frosted Mist Reveals
 * - Floating Heart Bursts at exact cursor/tap location
 * - Dynamic Sweet Affirmations & Whispers Generator
 * ============================================================================
 */

class ReasonsBentoGrid {
  constructor() {
    this.reasons = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.reasons : [];
    this.whispers = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.whispers : [];
    this.container = document.getElementById('bento-grid');
    this.whisperTextEl = document.getElementById('whisper-quote-text');
    this.whisperBtn = document.getElementById('whisper-next-btn');

    this.init();
  }

  init() {
    this.renderBentoCards();
    this.initWhisperGenerator();
    this.initGlobalHeartBursts();
  }

  renderBentoCards() {
    if (!this.container) return;

    this.container.innerHTML = this.reasons.map((item) => {
      if (item.interactiveType === 'flip') {
        return `
          <div 
            class="${item.gridSpan} bento-flip-card group" 
            data-id="${item.id}"
            tabindex="0"
            role="button"
            aria-label="Flip card: ${item.title}. Press Enter or Space to reveal note."
            aria-expanded="false">
            <div class="bento-flip-inner">
              <!-- Card Front -->
              <div class="bento-card-front glass-panel p-6 flex flex-col justify-between overflow-hidden relative">
                <div class="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.accentGradient} rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-rose-500/10 text-rose-300 border border-rose-400/20">
                      ${item.badge}
                    </span>
                    <div class="w-9 h-9 rounded-full bg-white/5 border border-rose-200/15 flex items-center justify-center text-rose-300 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all">
                      <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                    </div>
                  </div>

                  <span class="text-xs uppercase tracking-widest text-gray-400 font-mono">${item.category}</span>
                  <h3 class="font-serif-editorial text-2xl text-rose-100 font-semibold mt-1 mb-2 leading-snug">
                    ${item.title}
                  </h3>
                  <p class="text-sm text-gray-300/80 font-sans leading-relaxed">
                    ${item.shortDescription}
                  </p>
                </div>

                <div class="pt-4 mt-auto flex items-center justify-between text-xs text-rose-300/90 font-medium">
                  <span class="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-rose-400"></i> Tap or press Enter to reveal
                  </span>
                  <i data-lucide="arrow-right" class="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"></i>
                </div>
              </div>

              <!-- Card Back -->
              <div class="bento-card-back p-6 flex flex-col justify-between overflow-hidden relative">
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr ${item.accentGradient} rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-mono text-rose-300/80 uppercase tracking-wider flex items-center gap-1">
                      <i data-lucide="heart" class="w-3.5 h-3.5 text-rose-400 fill-rose-400"></i> From My Heart
                    </span>
                    <span class="text-[11px] text-gray-400">Tap / Enter to flip back</span>
                  </div>

                  <h4 class="font-serif-editorial text-xl text-rose-200 font-semibold mb-3">
                    ${item.title}
                  </h4>

                  <p class="text-sm text-rose-100/90 font-sans leading-relaxed italic border-l-2 border-rose-400/40 pl-3">
                    “${item.revealedContent}”
                  </p>
                </div>

                <div class="pt-4 mt-auto text-right">
                  <span class="text-xs font-cursive text-rose-200 text-lg">forever yours ♡</span>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        // Scratch / Mist Reveal Card
        return `
          <div 
            class="${item.gridSpan} relative rounded-2xl overflow-hidden glass-panel p-6 min-h-[260px] flex flex-col justify-between group" 
            data-id="${item.id}"
            tabindex="0"
            role="button"
            aria-label="Mist card: ${item.title}. Press Enter or Space to clear mist."
            aria-expanded="false">
            <!-- Background Content (Revealed) -->
            <div class="relative z-0 h-full flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-rose-500/10 text-rose-300 border border-rose-400/20">
                    ${item.badge}
                  </span>
                  <div class="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300">
                    <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                  </div>
                </div>

                <h3 class="font-serif-editorial text-2xl text-rose-100 font-semibold mb-2">
                  ${item.title}
                </h3>
                <p class="text-sm text-rose-100/90 leading-relaxed italic border-l-2 border-rose-400/50 pl-3 font-sans">
                  “${item.revealedContent}”
                </p>
              </div>

              <div class="pt-4 text-xs text-rose-300/70 font-mono flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-rose-400"></i> Secret Whispers Unveiled
              </div>
            </div>

            <!-- Scratch / Frosted Mist Overlay -->
            <div class="scratch-overlay p-6 text-center">
              <div class="w-12 h-12 rounded-full bg-rose-500/15 border border-rose-300/30 flex items-center justify-center text-rose-200 mb-3 animate-pulse">
                <i data-lucide="sparkles" class="w-6 h-6"></i>
              </div>
              <h4 class="font-serif-editorial text-xl text-rose-100 font-semibold mb-1">
                ${item.title}
              </h4>
              <p class="text-xs text-gray-300 font-sans max-w-xs mb-3">
                ${item.shortDescription}
              </p>
              <span class="px-4 py-1.5 rounded-full text-xs font-mono bg-white/10 hover:bg-rose-500/20 text-rose-200 border border-rose-200/30 transition-all shadow-sm">
                ✨ Click or press Enter to clear
              </span>
            </div>
          </div>
        `;
      }
    }).join('');

    if (window.lucide) window.lucide.createIcons();

    // Attach card flip listeners
    this.container.querySelectorAll('.bento-flip-card').forEach(card => {
      const toggleFlip = (e) => {
        const isFlipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-expanded', isFlipped ? 'true' : 'false');
        this.spawnHeartBurst(e.clientX || e.pageX, e.clientY || e.pageY);
        if (window.audioEngine) window.audioEngine.playHeartPop();
      };

      card.addEventListener('click', toggleFlip);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip(e);
        }
      });
    });

    // Attach scratch overlay listeners
    this.container.querySelectorAll('.scratch-overlay').forEach(overlay => {
      const parentCard = overlay.closest('[data-id]');
      const revealMist = (e) => {
        e.stopPropagation();
        overlay.classList.add('revealed');
        if (parentCard) parentCard.setAttribute('aria-expanded', 'true');
        this.spawnHeartBurst(e.clientX || e.pageX, e.clientY || e.pageY);
        if (window.audioEngine) window.audioEngine.playChime();
      };

      overlay.addEventListener('click', revealMist);
      if (parentCard) {
        parentCard.addEventListener('keydown', (e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !overlay.classList.contains('revealed')) {
            e.preventDefault();
            revealMist(e);
          }
        });
      }
    });
  }

  initWhisperGenerator() {
    if (!this.whisperBtn || !this.whisperTextEl || !this.whispers.length) return;

    let currentIndex = 0;
    this.whisperTextEl.textContent = `“${this.whispers[0]}”`;

    this.whisperBtn.addEventListener('click', (e) => {
      currentIndex = (currentIndex + 1) % this.whispers.length;
      
      this.whisperTextEl.style.opacity = '0';
      this.whisperTextEl.style.transform = 'translateY(6px)';

      setTimeout(() => {
        this.whisperTextEl.textContent = `“${this.whispers[currentIndex]}”`;
        this.whisperTextEl.style.opacity = '1';
        this.whisperTextEl.style.transform = 'translateY(0)';
      }, 250);

      this.spawnHeartBurst(e.clientX, e.clientY);
      if (window.audioEngine) window.audioEngine.playHeartPop();
    });
  }

  initGlobalHeartBursts() {
    // Add subtle heart burst on button clicks
    document.querySelectorAll('.trigger-heart').forEach(el => {
      el.addEventListener('click', (e) => {
        this.spawnHeartBurst(e.clientX, e.clientY);
      });
    });
  }

  spawnHeartBurst(x, y) {
    if (!x || !y) {
      x = window.innerWidth / 2;
      y = window.innerHeight / 2;
    }

    const emojis = ['💖', '✨', '🌸', '💕', '🌹', '💫', '❤️'];
    const count = 5;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-heart-burst';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      const dx = (Math.random() - 0.5) * 80;
      const rot = (Math.random() - 0.5) * 50;
      const size = Math.random() * 10 + 16;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.fontSize = `${size}px`;
      el.style.setProperty('--dx', `${dx}px`);
      el.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(el);

      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 1400);
    }
  }
}

// Attach globally
window.ReasonsBentoGrid = ReasonsBentoGrid;
