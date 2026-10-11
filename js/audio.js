/**
 * ============================================================================
 * 🎵 SOULMATE AUDIO ENGINE & WEB AUDIO SYNTHESIZER
 * ============================================================================
 * Features:
 * - Plays full-length song (assets/audio/1.mp3)
 * - 12-bar stereo jumping equalizer visualizer ("Heartbeat Sync: 100%")
 * - Real Web Audio API synth tones for keypad chimes, card pops, and wax seal
 * ============================================================================
 */

class RomanticAudioEngine {
  constructor(config) {
    this.config = config || (window.SANCTUARY_CONFIG ? window.SANCTUARY_CONFIG.audio : {});
    this.isPlaying = false;
    this.volume = this.config.defaultVolume || 0.85;
    this.visInterval = null;
    this.audioCtx = null;

    // Load full soulmate playlist with all 8 tracks
    this.playlist = (this.config.playlist && Array.isArray(this.config.playlist) && this.config.playlist.length > 0)
      ? this.config.playlist
      : [
          { id: "apocalypse", title: "Apocalypse", artist: "Cigarettes After Sex", url: "assets/audio/Apocalypse.mp3", vibe: "Dreamy • Slow Dance • Ethereal Romance", color: "#FF0066", badge: "TRACK 01" },
          { id: "iwanna-be-yours", title: "I Wanna Be Yours", artist: "Arctic Monkeys", url: "assets/audio/IWannaBeYours.mp3", vibe: "Deep Devotion • Electric Cosmic Pull", color: "#7B00FF", badge: "TRACK 02" },
          { id: "cloud-9", title: "Cloud 9", artist: "Beach Bunny", url: "assets/audio/Cloud9.mp3", vibe: "Pure Joy • Golden Sunshine • Butterflies", color: "#FFE600", badge: "TRACK 03" },
          { id: "something-about-you", title: "Something About You", artist: "Eyedress & Dent May", url: "assets/audio/SomethingAboutYou.mp3", vibe: "Warm Glow • Soulmate Groove • Magic", color: "#00F5FF", badge: "TRACK 04" },
          { id: "k", title: "K.", artist: "Cigarettes After Sex", url: "assets/audio/K.mp3", vibe: "Late Night Whispers • Tender Heartbeats", color: "#FF4D00", badge: "TRACK 05" },
          { id: "the-night-we-met", title: "The Night We Met", artist: "Lord Huron", url: "assets/audio/TheNightWeMet.mp3", vibe: "Written in the Stars • Timeless Echoes", color: "#00FF75", badge: "TRACK 06" },
          { id: "love-you-so", title: "Love You So", artist: "The Walters", url: "assets/audio/LoveYouSo.mp3", vibe: "Playful Love • Infectious Smile • Pure Bebo", color: "#FF0066", badge: "TRACK 07" },
          { id: "classic-anthem", title: "Until I Found You", artist: "Stephen Sanchez", url: "assets/audio/1.mp3", vibe: "Classic Track 08 • Eternal Sanctuary Anthem", color: "#FFE600", badge: "TRACK 08" }
        ];

    // Current selected track
    this.currentTrack = this.playlist.find(t => t.url === this.config.customAudioUrl) || this.playlist[0];

    this.initElements();
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  initElements() {
    this.playBtn = document.getElementById('audio-toggle-btn');
    this.playlistBtn = document.getElementById('audio-playlist-btn');
    this.eqBars = document.querySelectorAll('.eq-bar');
    this.playerContainer = document.getElementById('audio-player-widget');
    this.trackTitleEl = document.getElementById('audio-track-title');

    // Bind to direct HTML5 audio element
    this.audioEl = document.getElementById('bg-audio-player') || new Audio(this.currentTrack.url);
    this.audioEl.src = this.currentTrack ? this.currentTrack.url : (this.config.customAudioUrl || 'assets/audio/Apocalypse.mp3');
    this.audioEl.loop = true;
    this.audioEl.volume = this.volume;
    this.audioEl.preload = 'auto';

    // Sync UI with audio events
    this.audioEl.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateUIPlyingState(true);
    });

    this.audioEl.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateUIPlyingState(false);
    });

    if (!this.audioEl.paused) {
      this.isPlaying = true;
      this.updateUIPlyingState(true);
    }

    this.updateTrackTitle(this.currentTrack ? `${this.currentTrack.title} — ${this.currentTrack.artist}` : (this.config.trackTitle || "MIXTAPE: THE FREQUENCY OF US"));

    if (this.playBtn) {
      this.playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlayback();
      });
    }

    if (this.playlistBtn) {
      this.playlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openTracklistModal();
      });
    }

    this.initModalEvents();
    this.initAutoplay();
  }

  initAutoplay() {
    const unlockAudio = () => {
      this.getAudioContext();
      if (this.audioEl && this.audioEl.paused && this.isPlaying) {
        this.audioEl.play().catch(() => {});
      }
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };

    window.addEventListener('click', unlockAudio, { passive: true, once: true });
    window.addEventListener('touchstart', unlockAudio, { passive: true, once: true });
  }

  togglePlayback() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    this.getAudioContext();
    if (!this.audioEl) {
      this.audioEl = document.getElementById('bg-audio-player') || new Audio('assets/audio/1.mp3');
    }
    this.audioEl.volume = this.volume;

    const playPromise = this.audioEl.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.updateUIPlyingState(true);
      }).catch((err) => {
        console.log("Audio waiting for user gesture:", err);
      });
    } else {
      this.updateUIPlyingState(true);
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.updateUIPlyingState(false);
  }

  updateUIPlyingState(playing) {
    if (this.playerContainer) {
      if (playing) {
        this.playerContainer.classList.add('is-playing', 'cassette-spinning');
      } else {
        this.playerContainer.classList.remove('is-playing', 'cassette-spinning');
      }
    }

    const icon = this.playBtn ? this.playBtn.querySelector('i') : null;
    if (icon) {
      icon.setAttribute('data-lucide', playing ? 'pause' : 'music');
      if (window.lucide) window.lucide.createIcons();
    }

    if (playing) {
      this.startVisualizer();
    } else {
      this.stopVisualizer();
    }
  }

  startVisualizer() {
    if (this.visInterval) clearInterval(this.visInterval);

    this.visInterval = setInterval(() => {
      if (!this.isPlaying) {
        this.stopVisualizer();
        return;
      }

      this.eqBars = document.querySelectorAll('.eq-bar');
      this.eqBars.forEach((bar, idx) => {
        const base = Math.sin(Date.now() / 120 + idx * 0.7) * 0.5 + 0.5;
        const randomSpike = Math.random() * 6;
        const height = Math.min(20, Math.floor(4 + base * 14 + randomSpike));
        bar.style.height = `${height}px`;
      });
    }, 70);
  }

  stopVisualizer() {
    if (this.visInterval) {
      clearInterval(this.visInterval);
      this.visInterval = null;
    }
    this.eqBars = document.querySelectorAll('.eq-bar');
    this.eqBars.forEach(bar => {
      bar.style.height = '4px';
    });
  }

  /* --------------------------------------------------------------------------
     Web Audio Synthesizer Tones
     -------------------------------------------------------------------------- */
  playTone(freq, type = 'sine', duration = 0.16, gainLevel = 0.1) {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // AudioContext fallback
    }
  }

  playKeypadTone(digit) {
    const scale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25];
    const n = parseInt(digit, 10);
    const freq = (!isNaN(n) && scale[n]) ? scale[n] : 440;
    this.playTone(freq, 'triangle', 0.18, 0.08);
  }

  playChime() {
    this.playTone(659.25, 'sine', 0.22, 0.07);
    setTimeout(() => this.playTone(987.77, 'sine', 0.35, 0.06), 80);
  }

  playHeartPop() {
    this.playTone(523.25, 'triangle', 0.12, 0.09);
    setTimeout(() => this.playTone(783.99, 'sine', 0.15, 0.07), 50);
  }

  playSealBreak() {
    this.playTone(440, 'triangle', 0.15, 0.12);
    setTimeout(() => this.playTone(880, 'sine', 0.25, 0.1), 60);
    setTimeout(() => this.playTone(1320, 'sine', 0.4, 0.08), 120);
  }

  playConfettiFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.3, 0.08), i * 80);
    });
  }

  playCardSong(cardId) {
    if (!this.isPlaying) {
      this.play();
    }
    this.playChime();
    if (typeof confetti === 'function') {
      confetti({ particleCount: 25, spread: 55, origin: { y: 0.7 } });
    }
  }

  playVoiceNote(cardId) {
    if (!this.isPlaying) {
      this.play();
    }
    this.playHeartPop();
    if (typeof confetti === 'function') {
      confetti({ particleCount: 20, spread: 45, origin: { y: 0.6 } });
    }
  }

  /* --------------------------------------------------------------------------
     Soulmate Mixtape & Tracklist Controls
     -------------------------------------------------------------------------- */
  getPlaylist() {
    return this.playlist;
  }

  getCurrentTrack() {
    return this.currentTrack;
  }

  selectTrack(identifier, playImmediately = true) {
    let track = null;
    if (typeof identifier === 'number') {
      track = this.playlist[identifier];
    } else if (typeof identifier === 'string') {
      const cleanId = identifier.trim().toLowerCase();
      track = this.playlist.find(t => 
        t.id.toLowerCase() === cleanId || 
        t.id.replace(/-/g, ' ').toLowerCase() === cleanId.replace(/-/g, ' ') ||
        t.url.toLowerCase().includes(cleanId) || 
        t.title.toLowerCase() === cleanId
      );
    } else if (identifier && typeof identifier === 'object') {
      track = identifier;
    }

    if (!track && this.playlist.length > 0) {
      track = this.playlist[0];
    }

    if (track) {
      this.currentTrack = track;
      if (!this.audioEl) {
        this.audioEl = document.getElementById('bg-audio-player') || new Audio();
      }

      if (this.audioEl) {
        // Clear child <source> elements so browser doesn't lock onto old source
        while (this.audioEl.firstChild) {
          this.audioEl.removeChild(this.audioEl.firstChild);
        }
        this.audioEl.src = encodeURI(track.url);
        try {
          this.audioEl.currentTime = 0;
        } catch (e) {}
        try {
          this.audioEl.load();
        } catch (e) {}
      }

      this.updateTrackTitle(`${track.title} — ${track.artist}`);
      this.updateSelectedTrackUI(track.id);

      if (playImmediately) {
        this.play();
      }

      try {
        window.dispatchEvent(new CustomEvent('sanctuary:trackchange', { detail: { track } }));
      } catch (e) {}
    }
    return track;
  }

  shuffleTrack() {
    if (!this.playlist.length) return null;
    let available = this.playlist.filter(t => t.id !== (this.currentTrack ? this.currentTrack.id : ''));
    if (!available.length) available = this.playlist;
    const picked = available[Math.floor(Math.random() * available.length)];
    return this.selectTrack(picked, true);
  }

  updateTrackTitle(titleText) {
    if (this.trackTitleEl) {
      this.trackTitleEl.textContent = titleText;
      this.trackTitleEl.setAttribute('title', titleText);
    }
    const navTrackBadge = document.getElementById('nav-current-track-name');
    if (navTrackBadge) {
      navTrackBadge.textContent = titleText;
    }
    const lockTrackBadge = document.getElementById('lockscreen-selected-track-name');
    if (lockTrackBadge && this.currentTrack) {
      lockTrackBadge.textContent = `${this.currentTrack.title} (${this.currentTrack.artist})`;
    }
  }

  updateSelectedTrackUI(trackId) {
    document.querySelectorAll('.soundtrack-track-card').forEach(card => {
      const isSelected = card.getAttribute('data-track-id') === trackId;
      if (isSelected) {
        card.classList.add('is-active-track');
        const statusPill = card.querySelector('.track-active-pill');
        if (statusPill) statusPill.classList.remove('hidden');
      } else {
        card.classList.remove('is-active-track');
        const statusPill = card.querySelector('.track-active-pill');
        if (statusPill) statusPill.classList.add('hidden');
      }
    });
  }

  initModalEvents() {
    const modal = document.getElementById('soulmate-soundtrack-modal');
    const closeBtn = document.getElementById('close-soundtrack-modal-btn');
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        this.closeTracklistModal();
      });
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeTracklistModal();
        }
      });
    }

    const shuffleBtn = document.getElementById('soundtrack-modal-shuffle-btn');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        this.playChime();
        this.shuffleTrack();
        if (typeof confetti === 'function') {
          confetti({ particleCount: 35, spread: 65, origin: { y: 0.6 } });
        }
      });
    }

    // Direct event listener for clicking any soundtrack card in the modal or page
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.soundtrack-track-card');
      if (!card) return;

      const trackId = card.getAttribute('data-track-id');
      if (!trackId) return;

      e.preventDefault();
      e.stopPropagation();

      this.playHeartPop();
      this.selectTrack(trackId, true);

      if (typeof confetti === 'function') {
        confetti({ particleCount: 30, spread: 55, origin: { y: 0.6 } });
      }

      // If clicked inside the floating modal, close it after feedback
      const isInModal = card.closest('#soulmate-soundtrack-modal');
      if (isInModal) {
        setTimeout(() => this.closeTracklistModal(), 350);
      }

      // If clicked on lockscreen soundtrack view, dismiss lockscreen!
      const isInLockscreen = card.closest('#ipad-soundtrack-view');
      if (isInLockscreen) {
        const lockScreen = document.getElementById('ipad-lock-screen');
        if (lockScreen) {
          lockScreen.style.transform = 'translateY(-100%)';
          lockScreen.style.opacity = '0';
          setTimeout(() => {
            if (lockScreen.parentNode) lockScreen.parentNode.removeChild(lockScreen);
          }, 750);
        }
      }
    });
  }

  openTracklistModal() {
    const modal = document.getElementById('soulmate-soundtrack-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (this.currentTrack) {
        this.updateSelectedTrackUI(this.currentTrack.id);
      }
      if (window.lucide) window.lucide.createIcons();
    }
  }

  closeTracklistModal() {
    const modal = document.getElementById('soulmate-soundtrack-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  switchTrack(trackName) {
    this.selectTrack(trackName, true);
  }
}

if (typeof window !== 'undefined') {
  window.RomanticAudioEngine = RomanticAudioEngine;
}
