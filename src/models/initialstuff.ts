import { ModelStates } from '@/models/playground.types';
import { Biome, Block, GameStatus } from '@/data/Enums';

export const initialState: ModelStates = {
  initialized: false,
  initialGem: 0,
  nextFrame: {
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
    ],
    gems: [],
    beepers: [],
    switches: [],
    portals: [],
    monsters: [],
    locks: [],
    platforms: [],
    players: [],
    stairs: [],
    output: '',
    special: '',
  },
  answer: [],
  currentLength: 0,
  answerLength: 1,
  returnedError: false,
  gamingCondition: undefined,
  userCollision: false,
  gameStatus: GameStatus.PENDING,
  gained: 0,
};
