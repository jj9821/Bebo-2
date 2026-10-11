/**
 * ============================================================================
 * ✨ TRAIL OF DESTINY & COSMIC RAINBOW STARDUST ENGINE
 * ============================================================================
 * High-performance HTML5 Canvas:
 * - Sparkling rainbow stardust comet trail tracking cursor/touch
 * - Technicolor twinkling destiny stars across the background
 * - Physics-driven floating holographic hearts and sparkles
 * ============================================================================
 */

class StardustUniverse {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.stars = [];
    this.trail = [];
    this.sparkles = [];
    this.mouse = { x: -1000, y: -1000, isHovering: false };
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    this.config = {
      starCount: 180,
      sparkleCount: 18,
      rainbowColors: ['#FF0066', '#00F5FF', '#FFE600', '#00FF75', '#7B00FF', '#FF4D00', '#ffffff']
    };

    this.init();
  }

  init() {
    this.handleResize();
    this.createStars();
    this.createSparkles();
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
    const count = Math.min(this.config.starCount, Math.floor((this.width * this.height) / 5500));
    
    for (let i = 0; i < count; i++) {
      const depth = Math.random() < 0.5 ? 1 : (Math.random() < 0.8 ? 2 : 3);
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        depth: depth,
        radius: depth === 1 ? (Math.random() * 1.2 + 0.6) : (depth === 2 ? (Math.random() * 1.8 + 1) : (Math.random() * 2.4 + 1.4)),
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: (Math.random() * 0.025 + 0.008) * (depth === 3 ? 1.4 : 1),
        twinklePhase: Math.random() * Math.PI * 2,
        color: this.config.rainbowColors[Math.floor(Math.random() * this.config.rainbowColors.length)],
        vx: (Math.random() - 0.5) * 0.15 * depth,
        vy: (Math.random() - 0.5) * 0.15 * depth
      });
    }
  }

  createSparkles() {
    this.sparkles = [];
    const count = Math.min(this.config.sparkleCount, Math.floor(this.width / 60));
    for (let i = 0; i < count; i++) {
      this.sparkles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 6 + 4,
        speedY: Math.random() * 0.5 + 0.25,
        speedX: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        alpha: Math.random() * 0.5 + 0.25,
        color: this.config.rainbowColors[Math.floor(Math.random() * this.config.rainbowColors.length)]
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.handleResize();
      this.createStars();
    });

    const addTrailPoint = (x, y) => {
      this.mouse.x = x;
      this.mouse.y = y;
      this.mouse.isHovering = true;

      // Add rainbow particle to cursor trail
      for (let i = 0; i < 2; i++) {
        this.trail.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.8,
          radius: Math.random() * 3.5 + 1.5,
          alpha: 1,
          decay: Math.random() * 0.035 + 0.02,
          color: this.config.rainbowColors[Math.floor(Math.random() * this.config.rainbowColors.length)]
        });
      }

      if (this.trail.length > 55) {
        this.trail.shift();
      }
    };

    window.addEventListener('mousemove', (e) => addTrailPoint(e.clientX, e.clientY), { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        addTrailPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      this.mouse.isHovering = false;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Twinkling Technicolor Stars
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      s.twinklePhase += s.twinkleSpeed;
      const currentAlpha = Math.max(0.15, Math.min(1, s.alpha + Math.sin(s.twinklePhase) * 0.4));

      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = this.width;
      if (s.x > this.width) s.x = 0;
      if (s.y < 0) s.y = this.height;
      if (s.y > this.height) s.y = 0;

      this.ctx.save();
      this.ctx.globalAlpha = currentAlpha;
      this.ctx.fillStyle = s.color;
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Soft glow for larger stars
      if (s.depth === 3) {
        this.ctx.shadowColor = s.color;
        this.ctx.shadowBlur = 8;
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    // 2. Draw Floating Holographic Sparkles
    for (let i = 0; i < this.sparkles.length; i++) {
      const sp = this.sparkles[i];
      sp.y -= sp.speedY;
      sp.x += sp.speedX;
      sp.rotation += sp.rotSpeed;

      if (sp.y < -20) {
        sp.y = this.height + 20;
        sp.x = Math.random() * this.width;
      }

      this.ctx.save();
      this.ctx.translate(sp.x, sp.y);
      this.ctx.rotate(sp.rotation);
      this.ctx.globalAlpha = sp.alpha;
      this.ctx.fillStyle = sp.color;

      // 4-pointed diamond star
      const sz = sp.size;
      this.ctx.beginPath();
      this.ctx.moveTo(0, -sz);
      this.ctx.quadraticCurveTo(0, 0, sz, 0);
      this.ctx.quadraticCurveTo(0, 0, 0, sz);
      this.ctx.quadraticCurveTo(0, 0, -sz, 0);
      this.ctx.quadraticCurveTo(0, 0, 0, -sz);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 3. Draw Trail of Destiny (Comet Trail)
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const p = this.trail[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.trail.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 6;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

if (typeof window !== 'undefined') {
  window.StardustUniverse = StardustUniverse;
}
