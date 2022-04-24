/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import { Biome, Block, Direction, Role } from '../enums';
import { InitStates } from '../utils';

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
