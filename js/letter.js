/**
 * ============================================================================
 * 💌 INTERACTIVE LOVE LETTER & GRAND FINALE CLIMAX
 * ============================================================================
 * Features:
 * - 3D Wax Seal envelope unsealing animation
 * - Typewriter love letter with adjustable speed and realistic pacing
 * - Grand Finale "Open My Heart" screen bloom & canvas confetti explosion
 * - Declaration modal with heartfelt quote and celestial celebration
 * ============================================================================
 */

class RomanticLoveLetter {
  constructor() {
    this.config = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.letter : {};
    this.finaleConfig = window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.finale : {};
    
    this.isUnsealed = false;
    this.isTyping = false;
    this.isFinished = false;
    this.typeSpeed = this.config.typingSpeed || 22;
    this.typeTimeout = null;

    this.initElements();
  }

  initElements() {
    this.sealBtn = document.getElementById('wax-seal-btn');
    this.envelopeCover = document.getElementById('letter-envelope-cover');
    this.letterPaper = document.getElementById('letter-paper-content');
    this.typewriterTarget = document.getElementById('letter-typewriter-body');
    this.replayBtn = document.getElementById('letter-replay-btn');
    this.finaleBtn = document.getElementById('open-my-heart-btn');
    this.finaleModal = document.getElementById('finale-modal');
    this.finaleCloseBtn = document.getElementById('finale-modal-close');
    this.celestialFlash = document.getElementById('celestial-flash-overlay');

    if (this.sealBtn) {
      this.sealBtn.addEventListener('click', () => this.unsealLetter());
    }

    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', () => this.restartTypewriter());
    }

    if (this.finaleBtn) {
      this.finaleBtn.addEventListener('click', () => this.triggerGrandFinale());
    }

    if (this.finaleCloseBtn && this.finaleModal) {
      this.finaleCloseBtn.addEventListener('click', () => {
        this.finaleModal.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
  }

  unsealLetter() {
    if (this.isUnsealed) return;
    this.isUnsealed = true;

    if (window.audioEngine) {
      window.audioEngine.playSealBreak();
    }

    // Envelope break animation
    if (this.sealBtn) {
      this.sealBtn.style.transform = 'scale(0.8) rotate(20deg)';
      this.sealBtn.style.opacity = '0';
    }

    setTimeout(() => {
      if (this.envelopeCover) {
        this.envelopeCover.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        this.envelopeCover.style.transform = 'translateY(-100%) scaleY(0)';
        this.envelopeCover.style.opacity = '0';
        this.envelopeCover.style.pointerEvents = 'none';
      }

      if (this.letterPaper) {
        this.letterPaper.classList.remove('hidden');
        this.letterPaper.style.opacity = '0';
        this.letterPaper.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          this.letterPaper.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
          this.letterPaper.style.opacity = '1';
          this.letterPaper.style.transform = 'translateY(0)';
          this.startTypewriter();
        }, 100);
      }
    }, 400);
  }

  startTypewriter() {
    if (!this.typewriterTarget || this.isTyping) return;
    this.isTyping = true;
    this.isFinished = false;

    if (this.replayBtn) this.replayBtn.classList.add('hidden');

    const paragraphs = this.config.paragraphs || [];
    const greeting = this.config.greeting || "My Dearest,";
    const signOff = this.config.signOff || "Yours Forever,";
    const signature = this.config.signatureName || "Soulmate";

    // Build the full narrative text with HTML formatting markers
    this.typewriterTarget.innerHTML = `
      <div class="font-serif-editorial text-2xl text-rose-200 font-bold mb-4 tracking-wide">${greeting}</div>
      <div id="typewriter-body-stream" class="space-y-4 font-serif-editorial text-lg md:text-xl text-rose-100/90 leading-relaxed"></div>
      <div id="typewriter-signoff" class="mt-8 pt-4 opacity-0 transition-opacity duration-700">
        <div class="font-serif-editorial text-rose-300 text-lg italic">${signOff}</div>
        <div class="font-cursive text-3xl md:text-4xl text-gradient-gold mt-1">${signature}</div>
      </div>
    `;

    const bodyStream = document.getElementById('typewriter-body-stream');
    const signoffEl = document.getElementById('typewriter-signoff');

    let currentParaIdx = 0;
    let currentCharIdx = 0;

    // Create container for first paragraph
    let currentParaEl = document.createElement('p');
    bodyStream.appendChild(currentParaEl);

    // Typing Cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    currentParaEl.appendChild(cursor);

    const typeNextChar = () => {
      if (currentParaIdx >= paragraphs.length) {
        // Typing finished
        this.isTyping = false;
        this.isFinished = true;
        if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
        if (signoffEl) signoffEl.style.opacity = '1';
        if (this.replayBtn) this.replayBtn.classList.remove('hidden');
        return;
      }

      const currentText = paragraphs[currentParaIdx];

      if (currentCharIdx < currentText.length) {
        const char = currentText.charAt(currentCharIdx);
        // Insert character before cursor
        currentParaEl.insertBefore(document.createTextNode(char), cursor);
        currentCharIdx++;

        // Calculate dynamic pause for natural punctuation cadence
        let delay = this.typeSpeed;
        if (char === '.' || char === '!' || char === '?') {
          delay = this.typeSpeed * 8;
        } else if (char === ',' || char === '—' || char === ';') {
          delay = this.typeSpeed * 4;
        }

        this.typeTimeout = setTimeout(typeNextChar, delay);
      } else {
        // Move to next paragraph
        currentParaIdx++;
        currentCharIdx = 0;

        if (currentParaIdx < paragraphs.length) {
          currentParaEl = document.createElement('p');
          bodyStream.appendChild(currentParaEl);
          currentParaEl.appendChild(cursor);
          this.typeTimeout = setTimeout(typeNextChar, this.typeSpeed * 10);
        } else {
          this.typeTimeout = setTimeout(typeNextChar, 200);
        }
      }
    };

    typeNextChar();
  }

  restartTypewriter() {
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
    this.isTyping = false;
    this.startTypewriter();
  }

  /* --------------------------------------------------------------------------
     Grand Finale: Celestial Confetti & Heart Bloom Explosion
     -------------------------------------------------------------------------- */
  triggerGrandFinale() {
    // 1. Play synthesized fanfare
    if (window.audioEngine) {
      window.audioEngine.playConfettiFanfare();
    }

    // 2. Trigger soft celestial screen bloom
    if (this.celestialFlash) {
      this.celestialFlash.classList.add('active');
      setTimeout(() => {
        this.celestialFlash.classList.remove('active');
      }, 700);
    }

    // 3. Canvas Confetti Explosions (if canvas-confetti is loaded)
    if (typeof confetti === 'function') {
      const colors = this.finaleConfig.confettiColors || ['#F4D0D2', '#E8A598', '#FCEADE', '#FF6B8B', '#E5B299'];

      // Stage 1: Massive center heart blast
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.2,
        disableForReducedMotion: false
      });

      // Stage 2: Left and right side fireworks canons
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 75,
          origin: { x: 0, y: 0.7 },
          colors: colors
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 75,
          origin: { x: 1, y: 0.7 },
          colors: colors
        });
      }, 250);

      // Stage 3: Cascading golden star shower
      setTimeout(() => {
        confetti({
          particleCount: 90,
          spread: 160,
          origin: { y: 0.3 },
          colors: ['#FCEADE', '#FFD700', '#F4D0D2'],
          gravity: 0.6,
          scalar: 1.4,
          drift: 0.1
        });
      }, 550);
    }

    // 4. Open Grand Finale Modal
    setTimeout(() => {
      if (this.finaleModal) {
        this.finaleModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }, 600);
  }
}

// Attach globally
window.RomanticLoveLetter = RomanticLoveLetter;
