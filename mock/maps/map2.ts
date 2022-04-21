import { Biome, Block, Color, Direction, Role } from '../enums';
import { InitStates } from '../playground';

export const map2: InitStates = {
  id: 2,
  grid: [
    [
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
    ],
    [
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
    ],
    [
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
    ],
    [
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
    ],
    [
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.OPEN,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
      {
        block: Block.BLOCKED,
        biome: Biome.PLAINS,
        level: 0,
      },
    ],
  ],
  stairs: [],
  output: '',
  special: '',
  gems: [
    { x: 0, y: 2 },
    { x: 1, y: 4 },
    { x: 2, y: 3 },
    { x: 4, y: 2 },
    { x: 5, y: 3 },
    { x: 6, y: 4 },
    { x: 8, y: 2 },
  ],
  beepers: [],
  switches: [
    { coo: { x: 3, y: 0 }, on: true },
    { coo: { x: 1, y: 1 }, on: false },
    { coo: { x: 3, y: 1 }, on: false },
    { coo: { x: 5, y: 1 }, on: false },
    { coo: { x: 7, y: 1 }, on: false },
    { coo: { x: 1, y: 3 }, on: true },
    { coo: { x: 6, y: 3 }, on: false },
  ],
  monsters: [],
  locks: [],
  portals: [],
  platforms: [],
  players: [
    {
      id: 1,
      x: 0,
      y: 0,
      dir: Direction.RIGHT,
      role: Role.PLAYER,
      hasBeeper: 0,
      collectedGem: 0,
      stamina: 999,
    },
  ],
  userCollision: true,
};
