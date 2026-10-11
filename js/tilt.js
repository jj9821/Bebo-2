/**
 * ============================================================================
 * 🪞 3D CARD TILT & SPECULAR PARALLAX ENGINE
 * ============================================================================
 * Creates ultra-smooth 3D card rotation on cursor hover with dynamic
 * specular glare highlight reflection.
 * ============================================================================
 */

class TiltParallaxEngine {
  constructor(options = {}) {
    this.maxTilt = options.maxTilt || 10;
    this.perspective = options.perspective || 1000;
    this.scale = options.scale || 1.02;
    this.init();
  }

  init() {
    this.attachElements();
  }

  attachElements() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => this.setupCard(card));
  }

  setupCard(card) {
    // On coarse touch devices (smartphones, iPads), skip mouse tilt for buttery 60fps scrolling
    if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    // Add glare layer if not present
    let glare = card.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      card.appendChild(glare);
    }

    // Preserve initial transform rotation (e.g. polaroid randomized tilt)
    const baseRotation = card.dataset.baseRotation || '0deg';

    let bounds;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.1s ease-out';
      if (glare) glare.style.opacity = '1';
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();

      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const percentX = (mouseX / bounds.width) * 2 - 1; // -1 to 1
      const percentY = (mouseY / bounds.height) * 2 - 1; // -1 to 1

      const tiltX = -percentY * this.maxTilt;
      const tiltY = percentX * this.maxTilt;

      card.style.transform = `perspective(${this.perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${this.scale}, ${this.scale}, ${this.scale})`;

      if (glare) {
        const glareX = ((mouseX / bounds.width) * 100).toFixed(1);
        const glareY = ((mouseY / bounds.height) * 100).toFixed(1);
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.28) 0%, transparent 60%)`;
      }
    };

    const onMouseLeave = () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
      card.style.transform = `perspective(${this.perspective}px) rotate(${baseRotation}) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      if (glare) {
        glare.style.opacity = '0';
      }
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  }

  /* --------------------------------------------------------------------------
     Mobile Gyroscope Support
     -------------------------------------------------------------------------- */
  initMobileGyroscope() {
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      let lastUpdate = 0;
      window.addEventListener('deviceorientation', (e) => {
        const now = Date.now();
        if (now - lastUpdate < 40) return; // 25fps throttle
        lastUpdate = now;

        const gamma = e.gamma || 0; // Left-to-right [-90, 90]
        const beta = e.beta || 0;   // Front-to-back [-180, 180]

        const tiltX = Math.max(-12, Math.min(12, (beta - 45) * 0.3));
        const tiltY = Math.max(-12, Math.min(12, gamma * 0.3));

        const visibleCards = document.querySelectorAll('.tilt-card');
        visibleCards.forEach((card, i) => {
          if (i < 8) { // update top visible cards
            card.style.transform = `perspective(${this.perspective}px) rotateX(${-tiltX.toFixed(1)}deg) rotateY(${tiltY.toFixed(1)}deg)`;
          }
        });
      });
    }
  }
}

// Attach globally
window.TiltParallaxEngine = TiltParallaxEngine;
