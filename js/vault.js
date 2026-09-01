/**
 * ============================================================================
 * ⏳ RELATIONSHIP MILESTONE TICKER & SECRET STAR VAULT
 * ============================================================================
 * Features:
 * - Real-time live ticking counter (Years, Months, Days, Hours, Minutes, Seconds)
 * - Secret Easter Egg vault modal with passcode verification
 * ============================================================================
 */

class MilestoneAndVault {
  constructor() {
    this.config = window.SANCTUARY_CONFIG || {};
    this.anniversary = this.config.anniversaryDate || new Date(2023, 2, 14, 18, 30, 0); // March 14, 2023
    this.vaultConfig = this.config.secretVault || {};
    
    this.cachedDigits = { days: '', hours: '', minutes: '', seconds: '' };
    this.failedAttempts = 0;
    this.maxAttempts = 5;
    this.lockoutUntil = 0;
    this.lockoutInterval = null;

    this.initCounter();
    this.initVault();
  }

  initCounter() {
    this.daysEl = document.getElementById('count-days');
    this.hoursEl = document.getElementById('count-hours');
    this.minutesEl = document.getElementById('count-minutes');
    this.secondsEl = document.getElementById('count-seconds');

    this.updateCounter();
    setInterval(() => this.updateCounter(), 1000);
  }

  updateDigitWithRoll(element, newValue, key) {
    if (!element) return;
    if (this.cachedDigits[key] === newValue) return;
    this.cachedDigits[key] = newValue;

    let digitSpan = element.querySelector('.digit-value');
    if (!digitSpan) {
      element.innerHTML = `<span class="digit-box"><span class="digit-value is-rolling">${newValue}</span></span>`;
    } else {
      digitSpan.classList.remove('is-rolling');
      void digitSpan.offsetWidth; // Force reflow to replay roll animation
      digitSpan.textContent = newValue;
      digitSpan.classList.add('is-rolling');
    }
  }

  updateCounter() {
    const now = new Date();
    const diff = Math.max(0, now.getTime() - this.anniversary.getTime());

    const totalSeconds = Math.floor(diff / 1000);
    const days = String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, '0');
    const hours = String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');

    // Rolling digit transition
    this.updateDigitWithRoll(this.daysEl, days, 'days');
    this.updateDigitWithRoll(this.hoursEl, hours, 'hours');
    this.updateDigitWithRoll(this.minutesEl, minutes, 'minutes');
    this.updateDigitWithRoll(this.secondsEl, seconds, 'seconds');
  }

  initVault() {
    const triggerBtn = document.getElementById('vault-trigger-btn');
    const modal = document.getElementById('vault-modal');
    const closeBtn = document.getElementById('vault-modal-close');
    const submitBtn = document.getElementById('vault-submit-btn');
    const inputEl = document.getElementById('vault-passcode-input');
    const errorEl = document.getElementById('vault-error-msg');
    const formSection = document.getElementById('vault-form-section');
    const unlockedSection = document.getElementById('vault-unlocked-section');

    if (!triggerBtn || !modal) return;

    triggerBtn.addEventListener('click', () => {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (inputEl) {
        inputEl.value = '';
        setTimeout(() => inputEl.focus(), 100);
      }
      if (window.audioEngine) window.audioEngine.playChime();
    });

    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (errorEl) errorEl.classList.add('hidden');
      triggerBtn.focus();
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (modal.classList.contains('is-open') && e.key === 'Escape') {
        closeModal();
      }
    });

    if (inputEl) {
      inputEl.addEventListener('input', () => {
        if (errorEl && Date.now() >= this.lockoutUntil) {
          errorEl.classList.add('hidden');
        }
      });
    }

    const checkPasscode = () => {
      if (!inputEl) return;

      const now = Date.now();
      if (now < this.lockoutUntil) {
        const remainingSec = Math.ceil((this.lockoutUntil - now) / 1000);
        if (errorEl) {
          errorEl.classList.remove('hidden');
          errorEl.textContent = `Vault locked due to multiple attempts. Please wait ${remainingSec}s ✨`;
        }
        return;
      }

      const val = inputEl.value.trim().toLowerCase();
      const validCodes = (this.vaultConfig.validCodes || ['140323', '1402', 'bebo', 'forever']).map(c => c.toLowerCase());

      if (validCodes.includes(val)) {
        // Unlock Vault!
        this.failedAttempts = 0;
        if (formSection) formSection.classList.add('hidden');
        if (unlockedSection) {
          unlockedSection.classList.remove('hidden');
          unlockedSection.classList.add('vault-unlocked-reveal');
        }

        if (window.audioEngine) window.audioEngine.playConfettiFanfare();

        // Stardust & Confetti explosion
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 85,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#F4D0D2', '#FFD700', '#E8A598', '#FFFFFF', '#C084FC']
          });
        }
      } else {
        this.failedAttempts++;

        if (this.failedAttempts >= this.maxAttempts) {
          this.lockoutUntil = Date.now() + 30000; // 30s lockout
          this.failedAttempts = 0;

          if (errorEl) {
            errorEl.classList.remove('hidden');
            errorEl.textContent = "Too many attempts! Vault security paused for 30 seconds 🔒";
          }

          if (submitBtn) submitBtn.disabled = true;
          if (inputEl) inputEl.disabled = true;

          const updateLockoutMsg = () => {
            const timeLeft = Math.ceil((this.lockoutUntil - Date.now()) / 1000);
            if (timeLeft <= 0) {
              clearInterval(this.lockoutInterval);
              if (errorEl) errorEl.textContent = "Vault unlocked. You may try again ✨";
              if (submitBtn) submitBtn.disabled = false;
              if (inputEl) {
                inputEl.disabled = false;
                inputEl.focus();
              }
            } else {
              if (errorEl) errorEl.textContent = `Security pause active. Please wait ${timeLeft}s 🔒`;
            }
          };

          this.lockoutInterval = setInterval(updateLockoutMsg, 1000);
        } else {
          if (errorEl) {
            errorEl.classList.remove('hidden');
            const remaining = this.maxAttempts - this.failedAttempts;
            errorEl.textContent = `That's not the key, my love! (${remaining} attempts left) Hint: Special date 140323 or nickname 💖`;
          }
        }

        if (window.audioEngine) window.audioEngine.playHeartPop();
      }
    };

    if (submitBtn) submitBtn.addEventListener('click', checkPasscode);
    if (inputEl) {
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkPasscode();
      });
    }
  }
}

// Attach globally
window.MilestoneAndVault = MilestoneAndVault;
