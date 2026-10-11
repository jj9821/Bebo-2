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

    this.container.innerHTML = this.reasons.map((item, idx) => {
      const tapeClass = ['tape-pink', 'tape-lime', 'tape-gold', 'tape-sky'][idx % 4];
      const tapeSide = idx % 2 === 0 ? '-top-3 left-6 -rotate-6' : '-top-3 right-6 rotate-6';

      if (item.interactiveType === 'flip') {
        return `
          <div 
            class="${item.gridSpan} bento-flip-card group relative min-h-[300px]" 
            data-id="${item.id}"
            tabindex="0"
            role="button"
            aria-label="Flip card: ${item.title}. Press Enter or Space to reveal note."
            aria-expanded="false">
            <div class="bento-flip-inner">
              <!-- Card Front -->
              <div class="bento-card-front bg-white border-[3.5px] border-[#0D001A] shadow-[4px_4px_0px_#00F5FF,8px_8px_0px_#0D001A] hover:shadow-[4px_4px_0px_#FFE600,8px_8px_0px_#FF0066,12px_12px_0px_#0D001A] hover:-translate-y-1.5 p-6 flex flex-col justify-between overflow-hidden relative rounded-2xl transition-all duration-200">
                <div class="washi-tape-strip ${tapeClass} ${tapeSide}"></div>

                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-[#FF0066] text-white border-[2px] border-[#0D001A] shadow-[2px_2px_0px_#0D001A]">
                      ${item.badge}
                    </span>
                    <div class="w-10 h-10 rounded-full bg-[#FFF8E7] border-[2px] border-[#0D001A] flex items-center justify-center text-[#0D001A] shadow-[2px_2px_0px_#0D001A] group-hover:bg-[#00FF75] transition-colors">
                      <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                    </div>
                  </div>

                  <span class="text-xs uppercase tracking-widest text-[#0D001A]/70 font-mono font-bold">${item.category}</span>
                  <h3 class="font-display text-2xl text-[#0D001A] font-bold mt-1 mb-2 leading-snug">
                    ${item.title}
                  </h3>
                  <p class="text-sm text-[#0D001A]/85 font-sans leading-relaxed">
                    ${item.shortDescription}
                  </p>
                </div>

                <div class="pt-4 mt-auto flex items-center justify-between text-xs text-[#FF0066] font-mono font-bold">
                  <span class="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <i data-lucide="sparkles" class="w-4 h-4 text-[#FFE600]"></i> Tap to flip note
                  </span>
                  <i data-lucide="arrow-right" class="w-4 h-4 opacity-70 group-hover:opacity-100"></i>
                </div>
              </div>

              <!-- Card Back -->
              <div class="bento-card-back bg-[#FFF8E7] border-[3.5px] border-[#0D001A] shadow-[4px_4px_0px_#FF0066,8px_8px_0px_#0D001A] p-6 flex flex-col justify-between overflow-hidden relative rounded-2xl">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-mono font-bold text-[#FF0066] uppercase tracking-wider flex items-center gap-1">
                      <i data-lucide="heart" class="w-3.5 h-3.5 fill-[#FF0066]"></i> From My Soul
                    </span>
                    <span class="text-[11px] font-mono text-[#0D001A]/60 font-bold">Tap to flip back</span>
                  </div>

                  <h4 class="font-display text-xl text-[#0D001A] font-bold mb-3">
                    ${item.title}
                  </h4>

                  <p class="text-base text-[#0D001A] font-handwriting leading-relaxed font-bold border-l-3 border-[#FF0066] pl-3">
                    “${item.revealedContent}”
                  </p>
                </div>

                <div class="pt-4 mt-auto text-right">
                  <span class="font-handwriting text-2xl text-[#FF0066] font-bold">forever yours ♡</span>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        // Scratch / Mist Reveal Card
        return `
          <div 
            class="${item.gridSpan} relative rounded-2xl overflow-hidden bg-white border-[3.5px] border-[#0D001A] shadow-[4px_4px_0px_#00FF75,8px_8px_0px_#0D001A] hover:shadow-[4px_4px_0px_#00F5FF,8px_8px_0px_#0D001A] p-6 min-h-[300px] flex flex-col justify-between group cursor-pointer transition-all duration-200" 
            data-id="${item.id}"
            tabindex="0"
            role="button"
            aria-label="Mist card: ${item.title}. Press Enter or Space to clear mist."
            aria-expanded="false">
            <div class="washi-tape-strip ${tapeClass} ${tapeSide}"></div>

            <!-- Background Content (Revealed) -->
            <div class="relative z-0 h-full flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-[#00FF75] text-[#0D001A] border-[2px] border-[#0D001A] shadow-[2px_2px_0px_#0D001A]">
                    ${item.badge}
                  </span>
                  <div class="w-9 h-9 rounded-full bg-[#FFF8E7] border-[2px] border-[#0D001A] flex items-center justify-center text-[#0D001A]">
                    <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                  </div>
                </div>

                <h3 class="font-display text-2xl text-[#0D001A] font-bold mb-2">
                  ${item.title}
                </h3>
                <p class="text-base text-[#0D001A] font-handwriting font-bold leading-relaxed border-l-3 border-[#00FF75] pl-3">
                  “${item.revealedContent}”
                </p>
              </div>

              <div class="pt-4 text-xs text-[#FF0066] font-mono font-bold flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-[#00FF75]"></i> Secret Whispers Unveiled
              </div>
            </div>

            <!-- Scratch / Frosted Mist Overlay -->
            <div class="scratch-overlay p-6 text-center bg-[#FFFDF5]/95 border-[2px] border-[#0D001A] rounded-xl flex flex-col items-center justify-center">
              <div class="w-12 h-12 rounded-full bg-[#FF0066] border-[2px] border-[#0D001A] flex items-center justify-center text-white mb-3 shadow-[3px_3px_0px_#0D001A]">
                <i data-lucide="sparkles" class="w-6 h-6"></i>
              </div>
              <h4 class="font-display text-xl text-[#0D001A] font-bold mb-1">
                ${item.title}
              </h4>
              <p class="text-xs text-[#0D001A]/70 font-sans max-w-xs mb-3">
                ${item.shortDescription}
              </p>
              <span class="px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#00FF75] text-[#0D001A] border-[2px] border-[#0D001A] shadow-[3px_3px_0px_#0D001A] active:translate-x-0.5 active:translate-y-0.5 transition-all">
                ✨ Click to reveal note
              </span>
            </div>
          </div>
        `;
      }
    }).join('');

    if (window.lucide) window.lucide.createIcons();

    // Attach card flip listeners & 3D perspective hover tilt
    this.container.querySelectorAll('.bento-flip-card').forEach(card => {
      const inner = card.querySelector('.bento-flip-inner');

      // 3D Cursor Hover Tilt
      card.addEventListener('mousemove', (e) => {
        if (card.classList.contains('is-flipped')) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        if (inner) {
          inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('is-flipped') && inner) {
          inner.style.transform = '';
        }
      });

      const toggleFlip = (e) => {
        const isFlipped = card.classList.toggle('is-flipped');
        if (inner) inner.style.transform = '';
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
