import { InitStates } from '../playground';
import { Biome, Block, Role, Direction } from '../enums';

export const map6: InitStates = {
  id: 6,
  output: '',
  special: '',
  grid: [
    [
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.STAIR,
        level: 2,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 2,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.PLAINS,
      },
    ],
    [
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 2,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.PLAINS,
      },
    ],
    [
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 2,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
    ],
    [
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 2,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
    ],
    [
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 2,
        biome: Biome.PLAINS,
      },
      {
        block: Block.STAIR,
        level: 2,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.PLAINS,
      },
    ],
  ],
  gems: [
    {
      x: 0,
      y: 0,
    },
    {
      x: 3,
      y: 2,
    },
    {
      x: 0,
      y: 3,
    },
  ],
  beepers: [],
  switches: [
    {
      coo: {
        x: 0,
        y: 1,
      },
      on: false,
    },
    {
      coo: {
        x: 0,
        y: 3,
      },
      on: false,
    },
  ],
  portals: [
    {
      coo: {
        x: 0,
        y: 4,
      },
      dest: {
        x: 3,
        y: 0,
      },
      energy: 5,
    },
  ],
  locks: [],
  stairs: [
    {
      coo: {
        x: 1,
        y: 0,
      },
      dir: Direction.LEFT,
    },
    {
      coo: {
        x: 3,
        y: 4,
      },
      dir: Direction.RIGHT,
    },
  ],
  monsters: [
    {
      x: 4,
      y: 2,
    },
  ],
  platforms: [],
  players: [
    {
      id: 1,
      x: 2,
      y: 4,
      dir: Direction.UP,
      role: Role.PLAYER,
      stamina: 200,
    },
  ],
  gamingCondition: {
    collectGemsBy: 3,
    switchesOnBy: 2,
    arriveAt: [
      {
        x: 2,
        y: 4,
      },
    ],
  },
  userCollision: true,
};

const code = `
val p = Player()
p.moveForward()
p.dance1()
`;
