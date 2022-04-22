import { InitStates } from '../playground';
import { Biome, Block, Role, Direction } from '../enums';

export const map7: InitStates = {
  id: 7,
  output: '',
  special: '',
  grid: [
    [
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.SNOWY,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.SNOWY,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.SNOWY,
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
        biome: Biome.SNOWY,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.SNOWY,
      },
      {
        block: Block.BLOCKED,
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
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.RAINY,
      },
    ],
    [
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.SNOWY,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.SNOWY,
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
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.RAINY,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.RAINY,
      },
    ],
    [
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.SNOWY,
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
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        biome: Biome.RAINY,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.RAINY,
      },
    ],
    [
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
        level: 1,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        biome: Biome.RAINY,
      },
    ],
  ],
  gems: [
    {
      x: 1,
      y: 2,
    },
    {
      x: 4,
      y: 2,
    },
  ],
  beepers: [],
  switches: [
    {
      coo: {
        x: 0,
        y: 2,
      },
      on: true,
    },
    {
      coo: {
        x: 2,
        y: 2,
      },
      on: false,
    },
    {
      coo: {
        x: 4,
        y: 2,
      },
      on: false,
    },
    {
      coo: {
        x: 3,
        y: 4,
      },
      on: false,
    },
    {
      coo: {
        x: 4,
        y: 4,
      },
      on: true,
    },
  ],
  portals: [],
  locks: [],
  stairs: [],
  monsters: [
    {
      x: 0,
      y: 1,
    },
    {
      x: 5,
      y: 3,
    },
  ],
  platforms: [],
  players: [
    {
      id: 1,
      x: 0,
      y: 0,
      dir: Direction.DOWN,
      role: Role.PLAYER,
      stamina: 200,
    },
  ],
  gamingCondition: {
    collectGemsBy: 2,
    switchesOnBy: 4,
    arriveAt: [
      {
        x: 5,
        y: 4,
      },
    ],
    monstersKilledLessThan: 1,
  },
  userCollision: true,
};

const code = `
val p = Player()

fun Player.processRow(times: Int) {
    repeat (times) {
        if (this.isOnClosedSwitch) {
            this.toggleSwitch()
        }
        this.moveForward()
    }
}

p.turnLeft()
p.processRow(4)
p.turnRight()

repeat (2) {
    p.moveForward()
}

p.turnRight()
p.collectGem()
p.processRow(3)
p.collectGem()
p.toggleSwitch()
p.turnLeft()

repeat (2) {
    p.moveForward()
}

p.turnLeft()
p.processRow(4)
`;
