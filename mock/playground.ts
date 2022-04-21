import { Frame } from '@/models/playground.types';
import { Request, Response } from '@umijs/types';
import { GamingCondition } from '@/data/SentData';
import { Block, Color, Biome, Role, Direction } from './enums';

export interface InitStates extends Frame {
  id: number;
  gamingCondition?: GamingCondition;
  userCollision: boolean;
}

let playgrounds: Array<InitStates> = [
  {
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
          color: Color.WHITE,
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
          color: Color.WHITE,
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
          color: Color.WHITE,
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
          color: Color.WHITE,
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
          color: Color.WHITE,
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
          color: Color.WHITE,
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
  },
  {
    id: 2,
    grid: [
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
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
  },

  {
    id: 3,
    grid: [
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
      [
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
        {
          block: Block.OPEN,
          color: Color.WHITE,
          biome: Biome.PLAINS,
          level: 0,
        },
      ],
    ],
    stairs: [],
    output: '',
    special: '',
    gems: [
      { x: 3, y: 0 },
      { x: 2, y: 1 },
      { x: 7, y: 1 },
      { x: 9, y: 1 },
      { x: 2, y: 3 },
      { x: 7, y: 3 },
      { x: 9, y: 3 },
      { x: 3, y: 4 },
    ],
    beepers: [],
    switches: [
      { coo: { x: 0, y: 1 }, on: false },
      { coo: { x: 6, y: 1 }, on: false },
      { coo: { x: 4, y: 2 }, on: false },
      { coo: { x: 6, y: 2 }, on: true },
      { coo: { x: 0, y: 3 }, on: false },
      { coo: { x: 6, y: 3 }, on: false },
      { coo: { x: 6, y: 4 }, on: true },
      { coo: { x: 6, y: 5 }, on: false },
    ],
    monsters: [],
    locks: [],
    portals: [
      {
        coo: { x: 0, y: 5 },
        dest: { x: 4, y: 5 },
        energy: 5,
      },
      {
        coo: { x: 4, y: 5 },
        dest: { x: 0, y: 5 },
        energy: 5,
      },
      {
        coo: { x: 9, y: 5 },
        dest: { x: 6, y: 0 },
        energy: 5,
      },
      {
        coo: { x: 6, y: 0 },
        dest: { x: 9, y: 5 },
        energy: 5,
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
        hasBeeper: 0,
        collectedGem: 0,
        stamina: 999,
      },
      {
        id: 1,
        x: 9,
        y: 0,
        dir: Direction.DOWN,
        role: Role.PLAYER,
        hasBeeper: 0,
        collectedGem: 0,
        stamina: 999,
      },
    ],
    userCollision: true,
  },
];

let random_playground = 0;

export default {
  'get /dev/playground/fetch': (req: Request, res: Response) => {
    // const responseObj = playgrounds[random_playground % playgrounds.length]
    const responseObj = playgrounds[1];
    random_playground += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 1000);
  },
  'post /dev/playground/add': (req: Request, res: Response) => {
    playgrounds = [
      ...playgrounds,
      {
        ...req.body,
        id: playgrounds.length + 1,
      },
    ];
    res.json({
      success: true,
    });
  },
  'delete /dev/playground/:id': (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    if (id < 5) {
      setTimeout(() => {
        res.json({
          success: false,
          message: '无法删除自带的地图!',
        });
      }, 1500);
    } else {
      playgrounds = playgrounds.filter((p) => p.id !== id);
      setTimeout(() => {
        res.json({
          success: true,
          message: '已删除地图',
        });
      }, 1500);
    }
  },
};
