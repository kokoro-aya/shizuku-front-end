import { Biome, Block, Color, Direction, Role } from '../enums';
import { InitStates } from '../playground';

export const map1: InitStates = {
  id: 1,
  grid: [
    [
      { block: Block.OPEN, color: Color.GREY, biome: Biome.PLAINS, level: 2 },
      {
        block: Block.OPEN,
        color: Color.ALICEBLUE,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.OPEN,
        color: Color.YELLOW,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        color: Color.ORANGE,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.BLOCKED,
        color: Color.GREEN,
        biome: Biome.PLAINS,
        level: 2,
      },
    ],
    [
      {
        block: Block.LOCK,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.OPEN,
        color: Color.BLACK,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.OPEN,
        color: Color.BLACK,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 2,
      },
    ],
    [
      {
        block: Block.OPEN,
        color: Color.SILVER,
        biome: Biome.PLAINS,
        level: 2,
      },
      { block: Block.OPEN, color: Color.GOLD, biome: Biome.PLAINS, level: 2 },
      {
        block: Block.OPEN,
        color: Color.BEIGE,
        biome: Biome.PLAINS,
        level: 0,
      },
      { block: Block.OPEN, color: Color.PINK, biome: Biome.PLAINS, level: 2 },
      {
        block: Block.BLOCKED,
        color: Color.CYAN,
        biome: Biome.PLAINS,
        level: 2,
      },
    ],
    [
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.LOCK,
        color: Color.BLACK,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.OPEN,
        color: Color.BLACK,
        biome: Biome.PLAINS,
        level: 2,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 2,
      },
    ],
  ],
  stairs: [],
  output: '',
  special: '',
  gems: [{ x: 3, y: 2 }],
  beepers: [{ x: 1, y: 0 }],
  switches: [],
  monsters: [],
  locks: [
    {
      coo: { x: 0, y: 1 },
      controlled: [
        { x: 2, y: 0 },
        { x: 2, y: 2 },
      ],
      isActive: true,
      energy: 10,
    },
    {
      coo: { x: 1, y: 3 },
      controlled: [
        { x: 2, y: 0 },
        { x: 2, y: 2 },
      ],
      isActive: true,
      energy: 10,
    },
  ],
  portals: [
    {
      coo: { x: 3, y: 0 },
      dest: { x: 0, y: 2 },
      energy: 10,
    },
    {
      coo: { x: 0, y: 2 },
      dest: { x: 3, y: 0 },
      energy: 10,
    },
  ],
  platforms: [
    { coo: { x: 2, y: 0 }, level: 1 },
    { coo: { x: 2, y: 2 }, level: 3 },
  ],
  players: [
    {
      id: 0,
      x: 0,
      y: 0,
      dir: Direction.RIGHT,
      role: Role.SPECIALIST,
      hasBeeper: 0,
      collectedGem: 0,
      stamina: 999,
    },
  ],
  userCollision: true,
};
