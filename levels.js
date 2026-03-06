const LEVELS = [
  {
    // Level 1 - Military Base
    worldWidth: 640,
    worldHeight: 480,
    playerStart: { x: 320, y: 240 },
    floorColor: '#1a1a1a',
    gridColor: '#222',
    bonusTimeLimit: 60,
    completionCondition: 'killAll',
    waves: [
      {
        delay: 0,
        spawns: [
          { type: 'grunt', x: 80, y: 80 },
          { type: 'grunt', x: 560, y: 80 },
          { type: 'grunt', x: 80, y: 400 },
        ]
      },
      {
        delay: 8,
        spawns: [
          { type: 'grunt', x: 560, y: 400 },
          { type: 'grunt', x: 320, y: 60 },
        ]
      },
      {
        delay: 16,
        spawns: [
          { type: 'grunt', x: 100, y: 240 },
          { type: 'grunt', x: 540, y: 240 },
          { type: 'grunt', x: 320, y: 420 },
        ]
      }
    ]
  },
  {
    // Level 2 - Forest
    worldWidth: 640,
    worldHeight: 480,
    playerStart: { x: 320, y: 240 },
    floorColor: '#0d1a0d',
    gridColor: '#162116',
    bonusTimeLimit: 70,
    completionCondition: 'killAll',
    waves: [
      {
        delay: 0,
        spawns: [
          { type: 'grunt', x: 80, y: 80 },
          { type: 'grunt', x: 560, y: 400 },
          { type: 'flanker', x: 320, y: 60 },
        ]
      },
      {
        delay: 10,
        spawns: [
          { type: 'grunt', x: 560, y: 80 },
          { type: 'flanker', x: 80, y: 400 },
          { type: 'grunt', x: 320, y: 420 },
        ]
      },
      {
        delay: 20,
        spawns: [
          { type: 'flanker', x: 100, y: 240 },
          { type: 'flanker', x: 540, y: 240 },
          { type: 'grunt', x: 80, y: 240 },
          { type: 'grunt', x: 560, y: 240 },
        ]
      }
    ]
  },
  {
    // Level 3 - Desert
    worldWidth: 1280,
    worldHeight: 960,
    playerStart: { x: 640, y: 480 },
    floorColor: '#1a1200',
    gridColor: '#221a00',
    bonusTimeLimit: 90,
    completionCondition: 'killAll',
    waves: [
      {
        delay: 0,
        spawns: [
          { type: 'grunt', x: 150, y: 150 },
          { type: 'grunt', x: 1130, y: 150 },
          { type: 'flanker', x: 640, y: 100 },
          { type: 'turret', x: 200, y: 480 },
          { type: 'turret', x: 1080, y: 480 },
        ]
      },
      {
        delay: 12,
        spawns: [
          { type: 'grunt', x: 150, y: 810 },
          { type: 'grunt', x: 1130, y: 810 },
          { type: 'flanker', x: 640, y: 860 },
          { type: 'flanker', x: 300, y: 300 },
        ]
      },
      {
        delay: 25,
        spawns: [
          { type: 'turret', x: 640, y: 200 },
          { type: 'turret', x: 640, y: 760 },
          { type: 'grunt', x: 400, y: 480 },
          { type: 'grunt', x: 880, y: 480 },
          { type: 'flanker', x: 200, y: 700 },
          { type: 'flanker', x: 1080, y: 260 },
        ]
      }
    ]
  },
  {
    // Level 4 - Underground
    worldWidth: 1280,
    worldHeight: 960,
    playerStart: { x: 640, y: 480 },
    floorColor: '#05060f',
    gridColor: '#0a0c1a',
    bonusTimeLimit: 100,
    completionCondition: 'killAll',
    waves: [
      {
        delay: 0,
        spawns: [
          { type: 'tank', x: 200, y: 200 },
          { type: 'flanker', x: 400, y: 150 },
          { type: 'flanker', x: 880, y: 150 },
          { type: 'turret', x: 640, y: 150 },
        ]
      },
      {
        delay: 14,
        spawns: [
          { type: 'tank', x: 1080, y: 760 },
          { type: 'grunt', x: 200, y: 760 },
          { type: 'grunt', x: 400, y: 760 },
          { type: 'turret', x: 640, y: 810 },
          { type: 'flanker', x: 900, y: 700 },
        ]
      },
      {
        delay: 30,
        spawns: [
          { type: 'tank', x: 200, y: 480 },
          { type: 'tank', x: 1080, y: 480 },
          { type: 'turret', x: 640, y: 300 },
          { type: 'turret', x: 640, y: 660 },
          { type: 'flanker', x: 400, y: 480 },
          { type: 'flanker', x: 880, y: 480 },
        ]
      }
    ]
  },
  {
    // Level 5 - Stronghold
    worldWidth: 1920,
    worldHeight: 1440,
    playerStart: { x: 960, y: 720 },
    floorColor: '#150000',
    gridColor: '#200000',
    bonusTimeLimit: 120,
    completionCondition: 'killAll',
    waves: [
      {
        delay: 0,
        spawns: [
          { type: 'dasher', x: 200, y: 200 },
          { type: 'dasher', x: 1720, y: 200 },
          { type: 'tank', x: 960, y: 150 },
          { type: 'turret', x: 400, y: 400 },
          { type: 'turret', x: 1520, y: 400 },
          { type: 'grunt', x: 600, y: 300 },
          { type: 'grunt', x: 1320, y: 300 },
        ]
      },
      {
        delay: 18,
        spawns: [
          { type: 'dasher', x: 200, y: 1240 },
          { type: 'dasher', x: 1720, y: 1240 },
          { type: 'tank', x: 960, y: 1290 },
          { type: 'flanker', x: 400, y: 1000 },
          { type: 'flanker', x: 1520, y: 1000 },
          { type: 'turret', x: 600, y: 1100 },
          { type: 'turret', x: 1320, y: 1100 },
        ]
      },
      {
        delay: 38,
        spawns: [
          { type: 'tank', x: 300, y: 720 },
          { type: 'tank', x: 1620, y: 720 },
          { type: 'dasher', x: 960, y: 300 },
          { type: 'dasher', x: 960, y: 1140 },
          { type: 'turret', x: 500, y: 720 },
          { type: 'turret', x: 1420, y: 720 },
          { type: 'flanker', x: 700, y: 500 },
          { type: 'flanker', x: 1220, y: 500 },
          { type: 'flanker', x: 700, y: 940 },
          { type: 'flanker', x: 1220, y: 940 },
          { type: 'grunt', x: 960, y: 720 },
        ]
      }
    ]
  }
];
