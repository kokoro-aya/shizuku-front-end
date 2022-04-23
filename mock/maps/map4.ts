/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import { Biome, Block, Color, Direction, Role } from '../enums';
import { InitStates } from '../utils';

export const map4: InitStates = {
  id: 4,
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
        color: Color.PINK,
        biome: Biome.SNOWY,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        color: Color.PINK,
        biome: Biome.SNOWY,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        color: Color.PINK,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        color: Color.PINK,
        biome: Biome.PLAINS,
      },
      {
        block: Block.OPEN,
        level: 1,
        color: Color.PINK,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        color: Color.PINK,
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
        color: Color.PINK,
        biome: Biome.SNOWY,
      },
      {
        block: Block.OPEN,
        level: 1,
        color: Color.PINK,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        color: Color.PINK,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        color: Color.PINK,
        biome: Biome.PLAINS,
      },
      {
        block: Block.BLOCKED,
        level: 1,
        color: Color.PINK,
        biome: Biome.RAINY,
      },
      {
        block: Block.OPEN,
        level: 1,
        color: Color.PINK,
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
    { x: 1, y: 2 },
    { x: 4, y: 2 },
  ],
  beepers: [],
  switches: [
    { coo: { x: 0, y: 2 }, on: true },
    { coo: { x: 2, y: 2 }, on: false },
    { coo: { x: 4, y: 2 }, on: false },
    { coo: { x: 3, y: 4 }, on: false },
    { coo: { x: 4, y: 4 }, on: true },
  ],
  portals: [],
  locks: [],
  stairs: [],
  monsters: [
    { x: 0, y: 1 },
    { x: 5, y: 3 },
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
      collectedGem: 0,
      hasBeeper: 0,
    },
  ],
  gamingCondition: {
    collectGemsBy: 2,
    switchesOnBy: 4,
    arriveAt: [{ x: 5, y: 4 }],
    monstersKilledLessThan: 1,
  },
  userCollision: true,
  special: '',
  output: '',
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
