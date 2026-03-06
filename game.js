// ============================================================
// PIXEL FONT — 5x7 bitmasks (7 rows, each row = 5 bits, MSB=left)
// ============================================================
const FONT = {
  'A':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  'B':[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
  'C':[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,1]],
  'D':[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
  'E':[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
  'F':[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
  'G':[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  'H':[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  'I':[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],
  'J':[[0,0,0,1,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  'K':[[1,0,0,0,1],[1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
  'L':[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
  'M':[[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  'N':[[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  'O':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  'P':[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
  'Q':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1]],
  'R':[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
  'S':[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,0]],
  'T':[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
  'U':[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  'V':[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],
  'W':[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,0,0,1]],
  'X':[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]],
  'Y':[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
  'Z':[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
  '0':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,1,1],[1,0,1,0,1],[1,1,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  '1':[[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],
  '2':[[0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]],
  '3':[[1,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[0,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,0]],
  '4':[[0,0,0,1,0],[0,0,1,1,0],[0,1,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0],[0,0,0,1,0]],
  '5':[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,0]],
  '6':[[0,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  '7':[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
  '8':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  '9':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[0,1,1,1,0]],
  ':':[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],
  '!':[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0]],
  '.':[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0]],
  ' ':[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
  '-':[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
  '/':[[0,0,0,0,1],[0,0,0,1,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]],
  '+':[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],
};

function drawPixelText(ctx, text, cx, cy, scale, color) {
  scale = scale || 1;
  const charW = 5 * scale;
  const charH = 7 * scale;
  const gap = scale;
  const totalW = text.length * (charW + gap) - gap;
  let x = Math.floor(cx - totalW / 2);
  const y = Math.floor(cy - charH / 2);
  ctx.fillStyle = color || '#fff';
  for (let ci = 0; ci < text.length; ci++) {
    const ch = text[ci].toUpperCase();
    const bitmap = FONT[ch];
    if (bitmap) {
      for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 5; col++) {
          if (bitmap[row][col]) {
            ctx.fillRect(x + col * scale, y + row * scale, scale, scale);
          }
        }
      }
    }
    x += charW + gap;
  }
}

// ============================================================
// CANVAS SETUP
// ============================================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const BASE_W = 640;
const BASE_H = 480;
let SCALE = 1;

function resizeCanvas() {
  const sw = window.innerWidth / BASE_W;
  const sh = window.innerHeight / BASE_H;
  SCALE = Math.min(sw, sh);
  canvas.width = BASE_W;
  canvas.height = BASE_H;
  canvas.style.width = (BASE_W * SCALE) + 'px';
  canvas.style.height = (BASE_H * SCALE) + 'px';
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// ============================================================
// GLOBAL STATE
// ============================================================
let gameState = 'MENU';

const G = {
  level: 0,
  score: 0,
  highScore: parseInt(localStorage.getItem('retroShooterHS') || '0'),
  player: null,
  enemies: [],
  bullets: [],
  particles: [],
  camera: { x: 0, y: 0 },
  keys: {},
  mouse: { screenX: 0, screenY: 0, worldX: 0, worldY: 0, down: false },
  spawnQueue: [],   // {delay, spawns[], spawned}
  levelElapsed: 0,
  screenFlash: 0,
  noDamageThisLevel: true,
  menuEnemies: [],
  levelCompleteTimer: 0,
  timeBonus: 0,
  newHighScore: false,
};

// ============================================================
// UTILITY
// ============================================================
function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

function lerp(a, b, t) { return a + (b - a) * t; }

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function rand(lo, hi) { return lo + Math.random() * (hi - lo); }

function randInt(lo, hi) { return Math.floor(rand(lo, hi + 1)); }

// ============================================================
// PARTICLES
// ============================================================
class Particle {
  constructor(x, y, vx, vy, color, size, life) {
    this.x = x; this.y = y;
    this.vx = vx; this.vy = vy;
    this.color = color;
    this.size = size;
    this.maxLife = life;
    this.life = life;
  }
  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
  }
  draw(ctx, cam) {
    const t = this.life / this.maxLife;
    const s = this.size * t;
    ctx.globalAlpha = t;
    ctx.fillStyle = this.color;
    ctx.fillRect(
      Math.floor(this.x - cam.x - s / 2),
      Math.floor(this.y - cam.y - s / 2),
      Math.ceil(s), Math.ceil(s)
    );
    ctx.globalAlpha = 1;
  }
}

function spawnHitSpark(x, y) {
  const colors = ['#ffe066', '#ff9800', '#ffffff'];
  for (let i = 0; i < 7; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = rand(40, 120);
    G.particles.push(new Particle(
      x, y,
      Math.cos(angle) * spd, Math.sin(angle) * spd,
      colors[randInt(0, colors.length - 1)],
      rand(2, 5), rand(0.2, 0.5)
    ));
  }
}

function spawnExplosion(x, y, large) {
  const count = large ? 20 : 12;
  const colors = ['#ff4444', '#ff9800', '#ffe066', '#ffffff', '#ff6600'];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = rand(30, large ? 200 : 120);
    G.particles.push(new Particle(
      x, y,
      Math.cos(angle) * spd, Math.sin(angle) * spd,
      colors[randInt(0, colors.length - 1)],
      rand(2, large ? 10 : 6),
      rand(0.3, large ? 1.0 : 0.7)
    ));
  }
  if (large) G.screenFlash = 0.3;
}

// ============================================================
// BULLET
// ============================================================
class Bullet {
  constructor(x, y, vx, vy, owner, damage, color, size) {
    this.x = x; this.y = y;
    this.vx = vx; this.vy = vy;
    this.owner = owner; // 'player' or 'enemy'
    this.damage = damage;
    this.color = color;
    this.size = size;
    this.life = 3.0;
    this.dead = false;
  }
  update(dt, level) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
    if (this.life <= 0) this.dead = true;
    // World bounds
    if (this.x < 0 || this.x > level.worldWidth ||
        this.y < 0 || this.y > level.worldHeight) {
      this.dead = true;
    }
  }
  draw(ctx, cam) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      Math.floor(this.x - cam.x - this.size / 2),
      Math.floor(this.y - cam.y - this.size / 2),
      this.size, this.size
    );
  }
}

// ============================================================
// PLAYER
// ============================================================
class Player {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.w = 16; this.h = 16;
    this.hp = 100; this.maxHp = 100;
    this.speed = 120;
    this.fireCooldown = 0;
    this.fireRate = 0.18;
    this.ammo = 30; this.maxAmmo = 30;
    this.reloading = false;
    this.reloadTimer = 0;
    this.reloadTime = 1.2;
    this.iframes = 0;
    this.legFrame = 0;
    this.legTimer = 0;
    this.angle = 0;
    this.dead = false;
  }

  update(dt) {
    // Movement
    let dx = 0, dy = 0;
    if (G.keys['ArrowLeft'] || G.keys['a'] || G.keys['A']) dx -= 1;
    if (G.keys['ArrowRight'] || G.keys['d'] || G.keys['D']) dx += 1;
    if (G.keys['ArrowUp'] || G.keys['w'] || G.keys['W']) dy -= 1;
    if (G.keys['ArrowDown'] || G.keys['s'] || G.keys['S']) dy += 1;
    if (dx !== 0 && dy !== 0) { dx *= 0.707; dy *= 0.707; }

    const level = LEVELS[G.level];
    this.x = clamp(this.x + dx * this.speed * dt, this.w / 2, level.worldWidth - this.w / 2);
    this.y = clamp(this.y + dy * this.speed * dt, this.h / 2, level.worldHeight - this.h / 2);

    // Leg animation
    if (dx !== 0 || dy !== 0) {
      this.legTimer += dt;
      if (this.legTimer >= 0.12) { this.legTimer = 0; this.legFrame ^= 1; }
    }

    // Aim
    this.angle = Math.atan2(G.mouse.worldY - this.y, G.mouse.worldX - this.x);

    // I-frames
    if (this.iframes > 0) this.iframes -= dt;

    // Fire cooldown
    if (this.fireCooldown > 0) this.fireCooldown -= dt;

    // Reload
    if (this.reloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        this.ammo = this.maxAmmo;
        this.reloading = false;
      }
    }

    // Auto fire
    if (G.mouse.down && !this.reloading && this.ammo > 0 && this.fireCooldown <= 0) {
      this.shoot();
    }

    // Manual reload
    if ((G.keys['r'] || G.keys['R']) && !this.reloading && this.ammo < this.maxAmmo) {
      this.startReload();
    }
  }

  shoot() {
    const spd = 420;
    G.bullets.push(new Bullet(
      this.x + Math.cos(this.angle) * 10,
      this.y + Math.sin(this.angle) * 10,
      Math.cos(this.angle) * spd,
      Math.sin(this.angle) * spd,
      'player', 10, '#ffe066', 4
    ));
    this.ammo--;
    this.fireCooldown = this.fireRate;
    if (this.ammo === 0) this.startReload();
  }

  startReload() {
    this.reloading = true;
    this.reloadTimer = this.reloadTime;
  }

  takeDamage(amount) {
    if (this.iframes > 0) return;
    this.hp -= amount;
    this.iframes = 0.8;
    G.noDamageThisLevel = false;
    if (this.hp <= 0) { this.hp = 0; this.dead = true; }
  }

  draw(ctx, cam) {
    // Blink during i-frames
    if (this.iframes > 0 && Math.floor(this.iframes * 10) % 2 === 0) return;

    const sx = Math.floor(this.x - cam.x);
    const sy = Math.floor(this.y - cam.y);

    // Legs
    if (this.legFrame === 0) {
      ctx.fillStyle = '#33691e';
      ctx.fillRect(sx - 5, sy + 4, 4, 4);
      ctx.fillRect(sx + 1, sy + 6, 4, 4);
    } else {
      ctx.fillStyle = '#33691e';
      ctx.fillRect(sx - 5, sy + 6, 4, 4);
      ctx.fillRect(sx + 1, sy + 4, 4, 4);
    }

    // Torso
    ctx.fillStyle = '#558b2f';
    ctx.fillRect(sx - 4, sy - 2, 8, 6);

    // Head
    ctx.fillStyle = '#8bc34a';
    ctx.fillRect(sx - 3, sy - 8, 6, 6);

    // Visor
    ctx.fillStyle = '#00bcd4';
    ctx.fillRect(sx - 2, sy - 6, 4, 1);

    // Gun (rotated)
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(this.angle);
    ctx.fillStyle = '#78909c';
    ctx.fillRect(2, -1, 9, 2);
    ctx.restore();
  }
}

// ============================================================
// ENEMY BASE
// ============================================================
class Enemy {
  constructor(x, y, type) {
    this.x = x; this.y = y;
    this.type = type;
    this.dead = false;
    this.fireTimer = 0;
    this.legFrame = 0;
    this.legTimer = 0;
    this.angle = 0;

    const levelScale = G.level; // 0-indexed
    const speedMult = Math.pow(1.12, levelScale);
    const hpMult = Math.pow(1.15, levelScale);
    const fireRateMult = Math.pow(0.92, levelScale);

    switch (type) {
      case 'grunt':
        this.maxHp = Math.floor(30 * hpMult); this.hp = this.maxHp;
        this.speed = 60 * speedMult;
        this.fireRate = 2.0 * fireRateMult;
        this.score = 100;
        this.w = 14; this.h = 14;
        break;
      case 'flanker':
        this.maxHp = Math.floor(25 * hpMult); this.hp = this.maxHp;
        this.speed = 80 * speedMult;
        this.fireRate = 1.2 * fireRateMult;
        this.score = 150;
        this.w = 12; this.h = 12;
        this.flankerAngle = Math.random() * Math.PI * 2;
        break;
      case 'turret':
        this.maxHp = Math.floor(60 * hpMult); this.hp = this.maxHp;
        this.speed = 0;
        this.fireRate = 1.8 * fireRateMult;
        this.score = 200;
        this.w = 16; this.h = 16;
        break;
      case 'tank':
        this.maxHp = Math.floor(120 * hpMult); this.hp = this.maxHp;
        this.speed = 35 * speedMult;
        this.fireRate = 2.5 * fireRateMult;
        this.score = 300;
        this.w = 18; this.h = 14;
        break;
      case 'dasher':
        this.maxHp = Math.floor(30 * hpMult); this.hp = this.maxHp;
        this.speed = 80;
        this.dashSpeed = 200;
        this.fireRate = 1.5 * fireRateMult;
        this.score = 250;
        this.w = 12; this.h = 12;
        this.dashState = 'IDLE'; // IDLE, DASH, COOLDOWN
        this.dashTimer = 0;
        this.dashCooldown = 0;
        this.dashVx = 0; this.dashVy = 0;
        this.trailPositions = [];
        break;
    }
    this.fireTimer = Math.random() * this.fireRate;
  }

  update(dt) {
    const p = G.player;
    const dx = p.x - this.x;
    const dy = p.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const level = LEVELS[G.level];

    this.angle = Math.atan2(dy, dx);

    switch (this.type) {
      case 'grunt': {
        if (dist > 80) {
          this.x += (dx / dist) * this.speed * dt;
          this.y += (dy / dist) * this.speed * dt;
          this.legTimer += dt;
          if (this.legTimer >= 0.12) { this.legTimer = 0; this.legFrame ^= 1; }
        }
        break;
      }
      case 'flanker': {
        this.flankerAngle += dt * 1.5;
        const targetX = p.x + Math.cos(this.flankerAngle + Math.PI / 2) * 90;
        const targetY = p.y + Math.sin(this.flankerAngle + Math.PI / 2) * 90;
        const fdx = targetX - this.x;
        const fdy = targetY - this.y;
        const fd = Math.sqrt(fdx * fdx + fdy * fdy);
        if (fd > 1) {
          this.x += (fdx / fd) * this.speed * dt;
          this.y += (fdy / fd) * this.speed * dt;
        }
        this.legTimer += dt;
        if (this.legTimer >= 0.12) { this.legTimer = 0; this.legFrame ^= 1; }
        break;
      }
      case 'turret':
        // Stationary — just track angle
        break;
      case 'tank': {
        if (dist > 120) {
          this.x += (dx / dist) * this.speed * dt;
          this.y += (dy / dist) * this.speed * dt;
        }
        break;
      }
      case 'dasher': {
        if (this.dashState === 'IDLE') {
          // Walk slowly toward player
          if (dist > 50) {
            this.x += (dx / dist) * this.speed * dt;
            this.y += (dy / dist) * this.speed * dt;
          }
          this.dashTimer -= dt;
          if (this.dashTimer <= 0 && dist < 300) {
            // Start dash
            this.dashState = 'DASH';
            this.dashTimer = 0.4;
            if (dist > 0) {
              this.dashVx = (dx / dist) * this.dashSpeed;
              this.dashVy = (dy / dist) * this.dashSpeed;
            }
            this.trailPositions = [];
          }
        } else if (this.dashState === 'DASH') {
          this.trailPositions.unshift({ x: this.x, y: this.y });
          if (this.trailPositions.length > 4) this.trailPositions.pop();
          this.x += this.dashVx * dt;
          this.y += this.dashVy * dt;
          this.dashTimer -= dt;
          if (this.dashTimer <= 0) {
            this.dashState = 'COOLDOWN';
            this.dashTimer = 0.8;
            this.trailPositions = [];
          }
        } else { // COOLDOWN
          this.dashTimer -= dt;
          if (this.dashTimer <= 0) {
            this.dashState = 'IDLE';
            this.dashTimer = rand(0.5, 1.5);
          }
        }
        break;
      }
    }

    // Clamp to world
    this.x = clamp(this.x, this.w / 2, level.worldWidth - this.w / 2);
    this.y = clamp(this.y, this.h / 2, level.worldHeight - this.h / 2);

    // Fire
    this.fireTimer -= dt;
    if (this.fireTimer <= 0) {
      this.fireTimer = this.fireRate;
      this.fire();
    }
  }

  fire() {
    const angle = this.angle;
    if (this.type === 'turret') {
      // 3-bullet spread
      for (let i = -1; i <= 1; i++) {
        const a = angle + i * 0.2;
        G.bullets.push(new Bullet(
          this.x + Math.cos(a) * 10, this.y + Math.sin(a) * 10,
          Math.cos(a) * 180, Math.sin(a) * 180,
          'enemy', 10, '#ff4444', 5
        ));
      }
    } else if (this.type === 'tank') {
      G.bullets.push(new Bullet(
        this.x + Math.cos(angle) * 12, this.y + Math.sin(angle) * 12,
        Math.cos(angle) * 120, Math.sin(angle) * 120,
        'enemy', 25, '#ff6600', 7
      ));
    } else {
      G.bullets.push(new Bullet(
        this.x + Math.cos(angle) * 8, this.y + Math.sin(angle) * 8,
        Math.cos(angle) * 180, Math.sin(angle) * 180,
        'enemy', 10, '#ff4444', 5
      ));
    }
  }

  takeDamage(amount) {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.dead = true;
      G.score += this.score;
      const large = (this.type === 'tank');
      spawnExplosion(this.x, this.y, large);
    }
  }

  drawGrunt(ctx, sx, sy) {
    // Legs
    ctx.fillStyle = '#b71c1c';
    if (this.legFrame === 0) {
      ctx.fillRect(sx - 4, sy + 3, 3, 4);
      ctx.fillRect(sx + 1, sy + 5, 3, 4);
    } else {
      ctx.fillRect(sx - 4, sy + 5, 3, 4);
      ctx.fillRect(sx + 1, sy + 3, 3, 4);
    }
    // Torso
    ctx.fillStyle = '#c62828';
    ctx.fillRect(sx - 4, sy - 2, 8, 5);
    // Head
    ctx.fillStyle = '#e53935';
    ctx.fillRect(sx - 3, sy - 7, 6, 5);
    // Eye slit
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(sx - 2, sy - 5, 4, 1);
  }

  drawFlanker(ctx, sx, sy) {
    ctx.fillStyle = '#6a1b9a';
    ctx.fillRect(sx - 3, sy + 2, 3, 4);
    ctx.fillRect(sx, sy + 3, 3, 4);
    ctx.fillStyle = '#7b1fa2';
    ctx.fillRect(sx - 3, sy - 2, 6, 4);
    ctx.fillStyle = '#9c27b0';
    ctx.fillRect(sx - 2, sy - 6, 5, 4);
    ctx.fillStyle = '#ce93d8';
    ctx.fillRect(sx - 1, sy - 5, 3, 1);
  }

  drawTurret(ctx, sx, sy) {
    // Base
    ctx.fillStyle = '#455a64';
    ctx.fillRect(sx - 8, sy - 8, 16, 16);
    // Barrel
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(this.angle);
    ctx.fillStyle = '#607d8b';
    ctx.fillRect(0, -2, 12, 4);
    ctx.restore();
    // Center
    ctx.fillStyle = '#546e7a';
    ctx.fillRect(sx - 4, sy - 4, 8, 8);
  }

  drawTank(ctx, sx, sy) {
    // Tracks
    ctx.fillStyle = '#33691e';
    ctx.fillRect(sx - 9, sy - 5, 18, 3);
    ctx.fillRect(sx - 9, sy + 2, 18, 3);
    // Hull
    ctx.fillStyle = '#558b2f';
    ctx.fillRect(sx - 7, sy - 4, 14, 8);
    // Turret body
    ctx.fillStyle = '#689f38';
    ctx.fillRect(sx - 4, sy - 3, 8, 6);
    // Barrel
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(this.angle);
    ctx.fillStyle = '#455a64';
    ctx.fillRect(2, -2, 14, 4);
    ctx.restore();
  }

  drawDasher(ctx, sx, sy) {
    // Trail during dash
    if (this.dashState === 'DASH') {
      for (let i = 0; i < this.trailPositions.length; i++) {
        const tp = this.trailPositions[i];
        const alpha = (this.trailPositions.length - i) / (this.trailPositions.length + 1);
        ctx.globalAlpha = alpha * 0.5;
        ctx.fillStyle = '#00bcd4';
        ctx.fillRect(
          Math.floor(tp.x - G.camera.x) - 4,
          Math.floor(tp.y - G.camera.y) - 4,
          8, 8
        );
        ctx.globalAlpha = 1;
      }
    }
    ctx.fillStyle = '#004d40';
    ctx.fillRect(sx - 3, sy + 2, 3, 4);
    ctx.fillRect(sx, sy + 3, 3, 4);
    ctx.fillStyle = '#006064';
    ctx.fillRect(sx - 3, sy - 2, 6, 4);
    ctx.fillStyle = '#00bcd4';
    ctx.fillRect(sx - 3, sy - 6, 6, 5);
    ctx.fillStyle = '#e0f7fa';
    ctx.fillRect(sx - 1, sy - 5, 3, 1);
  }

  draw(ctx, cam) {
    const sx = Math.floor(this.x - cam.x);
    const sy = Math.floor(this.y - cam.y);

    switch (this.type) {
      case 'grunt': this.drawGrunt(ctx, sx, sy); break;
      case 'flanker': this.drawFlanker(ctx, sx, sy); break;
      case 'turret': this.drawTurret(ctx, sx, sy); break;
      case 'tank': this.drawTank(ctx, sx, sy); break;
      case 'dasher': this.drawDasher(ctx, sx, sy); break;
    }

    // Health bar if damaged
    if (this.hp < this.maxHp) {
      const bw = this.w + 4;
      const bx = sx - bw / 2;
      const by = sy - this.h / 2 - 8;
      ctx.fillStyle = '#333';
      ctx.fillRect(bx, by, bw, 3);
      ctx.fillStyle = '#4caf50';
      ctx.fillRect(bx, by, bw * (this.hp / this.maxHp), 3);
    }
  }
}

// ============================================================
// MENU ENEMY DRIFTERS
// ============================================================
function initMenuEnemies() {
  G.menuEnemies = [];
  const types = ['grunt', 'flanker', 'turret', 'tank', 'dasher'];
  for (let i = 0; i < 6; i++) {
    G.menuEnemies.push({
      x: Math.random() * BASE_W,
      y: Math.random() * BASE_H,
      vx: rand(-30, 30),
      vy: rand(-30, 30),
      type: types[i % types.length],
      legFrame: 0, legTimer: 0,
      angle: Math.random() * Math.PI * 2,
      dashState: 'IDLE', trailPositions: [], flankerAngle: 0,
      hp: 999, maxHp: 999, w: 14, h: 14
    });
  }
}

// ============================================================
// LEVEL INIT
// ============================================================
function startLevel(levelIndex) {
  G.level = levelIndex;
  G.levelElapsed = 0;
  G.noDamageThisLevel = true;
  G.enemies = [];
  G.bullets = [];
  G.particles = [];
  G.screenFlash = 0;

  const levelDef = LEVELS[G.level];
  G.player = new Player(levelDef.playerStart.x, levelDef.playerStart.y);

  // Build spawn queue (copy)
  G.spawnQueue = levelDef.waves.map(w => ({
    delay: w.delay,
    spawns: w.spawns,
    done: false
  }));

  // Center camera
  G.camera.x = levelDef.playerStart.x - BASE_W / 2;
  G.camera.y = levelDef.playerStart.y - BASE_H / 2;

  gameState = 'PLAYING';
}

function spawnEnemy(spawnDef) {
  G.enemies.push(new Enemy(spawnDef.x, spawnDef.y, spawnDef.type));
}

// ============================================================
// COLLISION
// ============================================================
function doCollisions() {
  const p = G.player;

  for (let bi = G.bullets.length - 1; bi >= 0; bi--) {
    const b = G.bullets[bi];
    if (b.dead) continue;

    if (b.owner === 'enemy') {
      // vs player
      if (rectsOverlap(b.x - b.size/2, b.y - b.size/2, b.size, b.size,
                        p.x - p.w/2, p.y - p.h/2, p.w, p.h)) {
        p.takeDamage(b.damage);
        spawnHitSpark(b.x, b.y);
        b.dead = true;
      }
    } else {
      // vs enemies
      for (let ei = G.enemies.length - 1; ei >= 0; ei--) {
        const e = G.enemies[ei];
        if (e.dead) continue;
        if (rectsOverlap(b.x - b.size/2, b.y - b.size/2, b.size, b.size,
                          e.x - e.w/2, e.y - e.h/2, e.w, e.h)) {
          e.takeDamage(b.damage);
          spawnHitSpark(b.x, b.y);
          b.dead = true;
          break;
        }
      }
    }
  }

  // Enemy contact damage
  for (let ei = 0; ei < G.enemies.length; ei++) {
    const e = G.enemies[ei];
    if (e.dead) continue;
    if (rectsOverlap(e.x - e.w/2, e.y - e.h/2, e.w, e.h,
                      p.x - p.w/2, p.y - p.h/2, p.w, p.h)) {
      p.takeDamage(15);
      // Knockback
      const dx = p.x - e.x;
      const dy = p.y - e.y;
      const d = Math.sqrt(dx*dx + dy*dy) || 1;
      p.x += (dx / d) * 20;
      p.y += (dy / d) * 20;
      const level = LEVELS[G.level];
      p.x = clamp(p.x, p.w/2, level.worldWidth - p.w/2);
      p.y = clamp(p.y, p.h/2, level.worldHeight - p.h/2);
    }
  }
}

// ============================================================
// CAMERA
// ============================================================
function updateCamera(dt) {
  const p = G.player;
  const level = LEVELS[G.level];
  const targetX = p.x - BASE_W / 2;
  const targetY = p.y - BASE_H / 2;
  G.camera.x += (targetX - G.camera.x) * Math.min(1, 8 * dt);
  G.camera.y += (targetY - G.camera.y) * Math.min(1, 8 * dt);
  G.camera.x = clamp(G.camera.x, 0, Math.max(0, level.worldWidth - BASE_W));
  G.camera.y = clamp(G.camera.y, 0, Math.max(0, level.worldHeight - BASE_H));
}

// ============================================================
// DRAW FLOOR
// ============================================================
function drawFloor(ctx, level) {
  ctx.fillStyle = level.floorColor;
  ctx.fillRect(0, 0, BASE_W, BASE_H);

  ctx.fillStyle = level.gridColor;
  const gridSize = 32;
  const startX = Math.floor(G.camera.x / gridSize) * gridSize;
  const startY = Math.floor(G.camera.y / gridSize) * gridSize;

  for (let gx = startX; gx < G.camera.x + BASE_W + gridSize; gx += gridSize) {
    const sx = Math.floor(gx - G.camera.x);
    ctx.fillRect(sx, 0, 1, BASE_H);
  }
  for (let gy = startY; gy < G.camera.y + BASE_H + gridSize; gy += gridSize) {
    const sy = Math.floor(gy - G.camera.y);
    ctx.fillRect(0, sy, BASE_W, 1);
  }
}

// ============================================================
// HUD
// ============================================================
function drawHUD(ctx) {
  const p = G.player;

  // Health bar
  const hbW = 100, hbH = 8;
  const hbX = 10, hbY = 10;
  ctx.fillStyle = '#333';
  ctx.fillRect(hbX, hbY, hbW, hbH);
  const hpRatio = p.hp / p.maxHp;
  let hpColor = '#4caf50';
  if (hpRatio < 0.6) hpColor = '#ff9800';
  if (hpRatio < 0.3) hpColor = '#f44336';
  ctx.fillStyle = hpColor;
  ctx.fillRect(hbX, hbY, Math.floor(hbW * hpRatio), hbH);
  ctx.fillStyle = '#555';
  ctx.fillRect(hbX, hbY + hbH - 1, hbW, 1);
  drawPixelText(ctx, 'HP', hbX + 50, hbY + 4, 1, '#aaa');

  // Score
  const scoreStr = String(G.score).padStart(6, '0');
  drawPixelText(ctx, 'SCORE ' + scoreStr, BASE_W / 2, 14, 1, '#ffe066');

  // Level
  drawPixelText(ctx, 'LVL ' + (G.level + 1), BASE_W - 30, 14, 1, '#80cbc4');

  // Ammo
  if (p.reloading) {
    const blink = Math.floor(Date.now() / 200) % 2;
    if (blink) drawPixelText(ctx, 'RELOADING', BASE_W - 55, BASE_H - 14, 1, '#ff9800');
  } else {
    drawPixelText(ctx, p.ammo + '/' + p.maxAmmo, BASE_W - 28, BASE_H - 14, 1, '#ffe066');
  }
}

// ============================================================
// CROSSHAIR
// ============================================================
function drawCrosshair(ctx) {
  const mx = G.mouse.screenX;
  const my = G.mouse.screenY;
  const len = 6, gap = 3;
  ctx.fillStyle = '#ffe066';
  ctx.fillRect(mx - len - gap, my - 1, len, 2);
  ctx.fillRect(mx + gap, my - 1, len, 2);
  ctx.fillRect(mx - 1, my - len - gap, 2, len);
  ctx.fillRect(mx - 1, my + gap, 2, len);
  ctx.fillRect(mx - 1, my - 1, 2, 2);
}

// ============================================================
// SCREEN FLASH
// ============================================================
function drawScreenFlash(ctx) {
  if (G.screenFlash > 0) {
    ctx.fillStyle = `rgba(255,200,100,${G.screenFlash})`;
    ctx.fillRect(0, 0, BASE_W, BASE_H);
  }
}

// ============================================================
// MENU SCREEN
// ============================================================
let menuBlink = 0;

function drawMenu(dt) {
  menuBlink += dt;

  // Background
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, BASE_W, BASE_H);

  // Scanlines
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  for (let y = 0; y < BASE_H; y += 4) {
    ctx.fillRect(0, y, BASE_W, 2);
  }

  // Drifting enemies
  for (const me of G.menuEnemies) {
    me.x += me.vx * dt;
    me.y += me.vy * dt;
    me.angle += dt * 0.5;
    me.legTimer += dt;
    if (me.legTimer >= 0.12) { me.legTimer = 0; me.legFrame ^= 1; }
    if (me.x < -20) me.x = BASE_W + 20;
    if (me.x > BASE_W + 20) me.x = -20;
    if (me.y < -20) me.y = BASE_H + 20;
    if (me.y > BASE_H + 20) me.y = -20;
    const dummy = Object.assign({}, me);
    dummy.draw = Enemy.prototype.draw;
    dummy.drawGrunt = Enemy.prototype.drawGrunt;
    dummy.drawFlanker = Enemy.prototype.drawFlanker;
    dummy.drawTurret = Enemy.prototype.drawTurret;
    dummy.drawTank = Enemy.prototype.drawTank;
    dummy.drawDasher = Enemy.prototype.drawDasher;
    dummy.draw(ctx, { x: 0, y: 0 });
  }

  // Title
  drawPixelText(ctx, 'RETRO', BASE_W / 2, 140, 5, '#e53935');
  drawPixelText(ctx, 'SHOOTER', BASE_W / 2, 180, 4, '#ffe066');

  // Blinking prompt
  if (Math.floor(menuBlink * 2) % 2 === 0) {
    drawPixelText(ctx, 'CLICK TO PLAY', BASE_W / 2, 260, 2, '#ffffff');
  }

  // High score
  drawPixelText(ctx, 'HI SCORE ' + String(G.highScore).padStart(6, '0'), BASE_W / 2, 300, 1, '#80cbc4');

  // Controls hint
  drawPixelText(ctx, 'WASD/ARROWS MOVE  MOUSE AIM  CLICK SHOOT  R RELOAD', BASE_W / 2, 380, 1, '#555');
}

// ============================================================
// LEVEL COMPLETE SCREEN
// ============================================================
function drawLevelComplete(dt) {
  G.levelCompleteTimer -= dt;

  ctx.fillStyle = 'rgba(0,0,0,0.8)';
  ctx.fillRect(0, 0, BASE_W, BASE_H);

  const isLast = G.level === LEVELS.length - 1;
  if (isLast) {
    drawPixelText(ctx, 'YOU WIN!', BASE_W / 2, 160, 4, '#ffe066');
  } else {
    drawPixelText(ctx, 'LEVEL', BASE_W / 2, 140, 3, '#4caf50');
    drawPixelText(ctx, 'COMPLETE', BASE_W / 2, 180, 3, '#4caf50');
  }

  drawPixelText(ctx, 'SCORE ' + String(G.score).padStart(6, '0'), BASE_W / 2, 240, 2, '#ffe066');
  if (G.timeBonus > 0) {
    drawPixelText(ctx, 'TIME BONUS +' + G.timeBonus, BASE_W / 2, 275, 2, '#80cbc4');
  }

  if (!isLast) {
    if (Math.floor(G.levelCompleteTimer * 2) % 2 === 0 || G.levelCompleteTimer <= 0) {
      drawPixelText(ctx, 'CLICK FOR NEXT LEVEL', BASE_W / 2, 340, 1, '#fff');
    }
  } else {
    drawPixelText(ctx, 'CONGRATULATIONS!', BASE_W / 2, 320, 1, '#ffe066');
    drawPixelText(ctx, 'CLICK TO MENU', BASE_W / 2, 360, 1, '#fff');
  }

  if (G.levelCompleteTimer <= 0 && !isLast) {
    // Auto advance
  }
}

// ============================================================
// GAME OVER SCREEN
// ============================================================
function drawGameOver() {
  ctx.fillStyle = 'rgba(0,0,0,0.85)';
  ctx.fillRect(0, 0, BASE_W, BASE_H);

  drawPixelText(ctx, 'GAME OVER', BASE_W / 2, 160, 4, '#f44336');
  drawPixelText(ctx, 'SCORE ' + String(G.score).padStart(6, '0'), BASE_W / 2, 240, 2, '#ffe066');
  drawPixelText(ctx, 'LEVEL ' + (G.level + 1), BASE_W / 2, 275, 2, '#80cbc4');
  if (G.newHighScore) {
    drawPixelText(ctx, 'NEW HIGH SCORE!', BASE_W / 2, 310, 2, '#ffe066');
  } else {
    drawPixelText(ctx, 'HI SCORE ' + String(G.highScore).padStart(6, '0'), BASE_W / 2, 310, 1, '#555');
  }
  drawPixelText(ctx, 'CLICK TO RETRY', BASE_W / 2, 360, 2, '#fff');
}

// ============================================================
// GAME LOOP
// ============================================================
let lastTime = 0;

function gameLoop(timestamp) {
  const dt = Math.min((timestamp - lastTime) / 1000, 0.1);
  lastTime = timestamp;

  ctx.clearRect(0, 0, BASE_W, BASE_H);

  if (gameState === 'MENU') {
    drawMenu(dt);
  } else if (gameState === 'PLAYING') {
    updateGame(dt);
    renderGame();
  } else if (gameState === 'LEVEL_COMPLETE') {
    renderGame();
    drawLevelComplete(dt);
  } else if (gameState === 'GAME_OVER') {
    renderGame();
    drawGameOver();
  }

  requestAnimationFrame(gameLoop);
}

function updateGame(dt) {
  const level = LEVELS[G.level];
  G.levelElapsed += dt;

  // Spawn waves
  for (const wave of G.spawnQueue) {
    if (!wave.done && G.levelElapsed >= wave.delay) {
      wave.done = true;
      for (const s of wave.spawns) spawnEnemy(s);
    }
  }

  // Update player
  G.player.update(dt);

  // Update enemies
  for (const e of G.enemies) {
    if (!e.dead) e.update(dt);
  }
  G.enemies = G.enemies.filter(e => !e.dead);

  // Update bullets
  for (const b of G.bullets) {
    if (!b.dead) b.update(dt, level);
  }
  G.bullets = G.bullets.filter(b => !b.dead);

  // Update particles
  for (const p of G.particles) p.update(dt);
  G.particles = G.particles.filter(p => p.life > 0);

  // Collisions
  doCollisions();

  // Camera
  updateCamera(dt);

  // Screen flash decay
  if (G.screenFlash > 0) G.screenFlash = Math.max(0, G.screenFlash - dt * 3);

  // Update mouse world coords
  G.mouse.worldX = G.mouse.screenX + G.camera.x;
  G.mouse.worldY = G.mouse.screenY + G.camera.y;

  // Check completion
  const allWavesDone = G.spawnQueue.every(w => w.done);
  if (allWavesDone && G.enemies.length === 0) {
    levelComplete();
  }

  // Player dead
  if (G.player.dead) {
    gameOver();
  }
}

function renderGame() {
  const level = LEVELS[G.level];

  // 1. Floor
  drawFloor(ctx, level);

  // 2. Floor particles (just use normal particles — no separate scorch list)

  // 3. Enemies
  for (const e of G.enemies) {
    if (!e.dead) e.draw(ctx, G.camera);
  }

  // 4. Bullets
  for (const b of G.bullets) {
    if (!b.dead) b.draw(ctx, G.camera);
  }

  // 5. Player
  if (!G.player.dead) G.player.draw(ctx, G.camera);

  // 6. Particles
  for (const p of G.particles) p.draw(ctx, G.camera);

  // 7. Screen flash
  drawScreenFlash(ctx);

  // 8. HUD
  if (gameState === 'PLAYING') drawHUD(ctx);

  // 9. Crosshair
  drawCrosshair(ctx);
}

function levelComplete() {
  // Time bonus
  const level = LEVELS[G.level];
  const timeBonus = Math.max(0, Math.floor((level.bonusTimeLimit - G.levelElapsed) * 10));
  G.score += timeBonus;
  G.timeBonus = timeBonus;

  // No-damage bonus
  if (G.noDamageThisLevel) {
    G.score += 500;
    G.timeBonus += 500; // show combined
  }

  // High score check
  if (G.score > G.highScore) {
    G.highScore = G.score;
    localStorage.setItem('retroShooterHS', G.highScore);
    G.newHighScore = true;
  }

  G.levelCompleteTimer = 4.0;
  gameState = 'LEVEL_COMPLETE';
}

function gameOver() {
  if (G.score > G.highScore) {
    G.highScore = G.score;
    localStorage.setItem('retroShooterHS', G.highScore);
    G.newHighScore = true;
  }
  gameState = 'GAME_OVER';
}

// ============================================================
// INPUT
// ============================================================
window.addEventListener('keydown', e => {
  G.keys[e.key] = true;
  e.preventDefault();
});
window.addEventListener('keyup', e => {
  G.keys[e.key] = false;
});

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  G.mouse.screenX = (e.clientX - rect.left) / SCALE;
  G.mouse.screenY = (e.clientY - rect.top) / SCALE;
  if (gameState === 'PLAYING' || gameState === 'LEVEL_COMPLETE') {
    G.mouse.worldX = G.mouse.screenX + G.camera.x;
    G.mouse.worldY = G.mouse.screenY + G.camera.y;
  }
});

canvas.addEventListener('mousedown', e => {
  if (e.button === 0) {
    G.mouse.down = true;
    handleClick();
  }
});

canvas.addEventListener('mouseup', e => {
  if (e.button === 0) G.mouse.down = false;
});

function handleClick() {
  if (gameState === 'MENU') {
    G.score = 0;
    G.newHighScore = false;
    startLevel(0);
  } else if (gameState === 'LEVEL_COMPLETE') {
    const isLast = G.level === LEVELS.length - 1;
    if (isLast) {
      gameState = 'MENU';
      initMenuEnemies();
    } else {
      startLevel(G.level + 1);
    }
  } else if (gameState === 'GAME_OVER') {
    G.score = 0;
    G.newHighScore = false;
    startLevel(0);
  }
}

// ============================================================
// INIT
// ============================================================
initMenuEnemies();
requestAnimationFrame(gameLoop);
