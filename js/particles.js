/**
 * ============================================================================
 * ✨ PARTICLES & STARDUST CANVAS ENGINE
 * ============================================================================
 * High-performance HTML5 Canvas rendering:
 * - Multi-depth twinkling stardust & distant nebulae
 * - Interactive constellation lines connecting stars to cursor
 * - Physics-driven floating luminescent rose petals
 * ============================================================================
 */

class StardustUniverse {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.stars = [];
    this.petals = [];
    this.mouse = { x: -1000, y: -1000, radius: 140, isHovering: false };
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    this.config = {
      starCount: 160,
      petalCount: 22,
      constellationDistance: 110,
      starColors: ['#ffffff', '#f4d0d2', '#fceade', '#e8a598', '#e5b299']
    };

    this.init();
  }

  init() {
    this.handleResize();
    this.createStars();
    this.createPetals();
    this.bindEvents();
    this.animate();
  }

  handleResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  createStars() {
    this.stars = [];
    this.lastScrollY = window.scrollY || 0;
    // Adjust star count dynamically based on screen size
    const count = Math.min(this.config.starCount, Math.floor((this.width * this.height) / 6500));
    
    for (let i = 0; i < count; i++) {
      const depth = Math.random() < 0.6 ? 1 : (Math.random() < 0.85 ? 2 : 3); // 1 = far, 2 = mid, 3 = near
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        depth: depth,
        radius: depth === 1 ? (Math.random() * 0.9 + 0.4) : (depth === 2 ? (Math.random() * 1.3 + 0.8) : (Math.random() * 1.8 + 1.2)),
        baseAlpha: depth === 1 ? (Math.random() * 0.4 + 0.2) : (depth === 2 ? (Math.random() * 0.6 + 0.35) : (Math.random() * 0.8 + 0.4)),
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: (Math.random() * 0.02 + 0.006) * (depth === 3 ? 1.3 : 1),
        twinklePhase: Math.random() * Math.PI * 2,
        color: this.config.starColors[Math.floor(Math.random() * this.config.starColors.length)],
        vx: (Math.random() - 0.5) * 0.12 * depth,
        vy: (Math.random() - 0.5) * 0.12 * depth
      });
    }
  }

  createPetals() {
    this.petals = [];
    const count = Math.min(this.config.petalCount, Math.floor(this.width / 50));
    
    for (let i = 0; i < count; i++) {
      this.petals.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 7 + 5,
        speedY: Math.random() * 0.6 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.005,
        alpha: Math.random() * 0.45 + 0.25,
        color: Math.random() > 0.4 ? '#f4d0d2' : '#e8a598'
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.handleResize();
      this.createStars();
    });

    const updateMouse = (x, y) => {
      this.mouse.x = x;
      this.mouse.y = y;
      this.mouse.isHovering = true;
    };

    window.addEventListener('mousemove', (e) => updateMouse(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouse.isHovering = false;
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    // Pause rendering when tab is hidden to save battery & CPU
    document.addEventListener('visibilitychange', () => {
      this.isPaused = document.hidden;
      if (!this.isPaused && !this.animating) {
        this.animate();
      }
    });
  }

  drawStars() {
    const currentScrollY = window.scrollY || 0;
    const scrollDelta = (currentScrollY - (this.lastScrollY || currentScrollY));
    this.lastScrollY = currentScrollY;

    for (let star of this.stars) {
      // Update position with natural velocity and depth-based parallax scroll displacement
      star.x += star.vx;
      star.y += star.vy - (scrollDelta * 0.035 * star.depth);

      if (star.x < 0) star.x = this.width;
      if (star.x > this.width) star.x = 0;
      if (star.y < 0) star.y = this.height;
      if (star.y > this.height) star.y = 0;

      // Twinkle calculation
      star.twinklePhase += star.twinkleSpeed;
      const currentAlpha = star.baseAlpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));

      // Draw star core
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = currentAlpha;
      this.ctx.fill();

      // Soft glow for slightly larger stars
      if (star.radius > 1.2) {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.radius * 2.8, 0, Math.PI * 2);
        this.ctx.fillStyle = star.color;
        this.ctx.globalAlpha = currentAlpha * 0.25;
        this.ctx.fill();
      }
    }
  }

  drawConstellations() {
    // Only connect if mouse is active on screen
    if (!this.mouse.isHovering) return;

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      const dx = this.mouse.x - star.x;
      const dy = this.mouse.y - star.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouse.radius) {
        const lineAlpha = (1 - dist / this.mouse.radius) * 0.55;
        this.ctx.beginPath();
        this.ctx.moveTo(star.x, star.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.strokeStyle = `rgba(244, 208, 210, ${lineAlpha})`;
        this.ctx.lineWidth = 0.8;
        this.ctx.stroke();

        // Connect nearby neighbor stars too
        for (let j = i + 1; j < this.stars.length; j++) {
          const star2 = this.stars[j];
          const d2x = star.x - star2.x;
          const d2y = star.y - star2.y;
          const distNeighbors = Math.sqrt(d2x * d2x + d2y * d2y);

          if (distNeighbors < this.config.constellationDistance) {
            const neighborAlpha = (1 - distNeighbors / this.config.constellationDistance) * 0.25;
            this.ctx.beginPath();
            this.ctx.moveTo(star.x, star.y);
            this.ctx.lineTo(star2.x, star2.y);
            this.ctx.strokeStyle = `rgba(252, 234, 222, ${neighborAlpha})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }
      }
    }
  }

  drawPetals() {
    for (let petal of this.petals) {
      petal.y += petal.speedY;
      petal.swayPhase += petal.swaySpeed;
      petal.x += Math.sin(petal.swayPhase) * 0.7 + petal.speedX;
      petal.rotation += petal.rotationSpeed;

      // Wrap around bounds
      if (petal.y > this.height + 20) {
        petal.y = -20;
        petal.x = Math.random() * this.width;
      }
      if (petal.x > this.width + 20) petal.x = -20;
      if (petal.x < -20) petal.x = this.width + 20;

      this.ctx.save();
      this.ctx.translate(petal.x, petal.y);
      this.ctx.rotate(petal.rotation);
      this.ctx.globalAlpha = petal.alpha;

      // Draw elegant soft rose petal curve
      this.ctx.beginPath();
      this.ctx.moveTo(0, -petal.size);
      this.ctx.bezierCurveTo(
        petal.size * 0.8, -petal.size * 0.6,
        petal.size * 0.9, petal.size * 0.7,
        0, petal.size
      );
      this.ctx.bezierCurveTo(
        -petal.size * 0.9, petal.size * 0.7,
        -petal.size * 0.8, -petal.size * 0.6,
        0, -petal.size
      );

      this.ctx.fillStyle = petal.color;
      this.ctx.fill();
      this.ctx.restore();
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.handleResize();
      this.createStars();
    });

    const updateMouse = (x, y) => {
      this.mouse.x = x;
      this.mouse.y = y;
      this.mouse.isHovering = true;
    };

    window.addEventListener('mousemove', (e) => updateMouse(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouse.isHovering = false;
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    // Pause rendering when tab is hidden to save battery & CPU
    document.addEventListener('visibilitychange', () => {
      this.isPaused = document.hidden;
      if (!this.isPaused && !this.animating) {
        this.animate();
      }
    });
  }

  animate() {
    if (this.isPaused) {
      this.animating = false;
      return;
    }
    this.animating = true;

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawStars();
    this.drawConstellations();
    this.drawPetals();
    this.ctx.globalAlpha = 1.0;

    requestAnimationFrame(() => this.animate());
  }
}

// Attach globally
window.StardustUniverse = StardustUniverse;
