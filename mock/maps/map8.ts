import { Biome, Block } from 'mock/enums';
import { InitStates } from '../playground';

export const map8: InitStates = {
  id: 8,
  output: '',
  special: '',
  grid: [
    [
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
    ],

    [
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
    ],

    [
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
    ],

    [
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
    ],

    [
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
    ],

    [
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.OPEN, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
      { block: Block.BLOCKED, level: 1, biome: Biome.PLAINS },
    ],
  ],
  gems: [{ x: 1, y: 3 }],
  beepers: [],
  switches: [],
  platforms: [],
  portals: [],
  monsters: [{ x: 1, y: 1 }],
  locks: [],
  stairs: [],
  players: [
    {
      id: 1,
      x: 1,
      y: 0,
      dir: 'DOWN',
      role: 'PLAYER',
      stamina: 500,
    },
  ],
  gamingCondition: {
    monstersKilled: 1,
  },
  userCollision: true,
};

const code = `
val p = Player()
p.attack()
`;
