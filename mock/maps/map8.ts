/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import { Biome, Block, Role, Direction } from '../enums';
import { InitStates } from '../utils';

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
      dir: Direction.DOWN,
      role: Role.PLAYER,
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
