/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import { Biome, Block, Color, Direction, Role } from '@/data/Enums';

export interface Grid {
  block: Block;
  biome: Biome;
  color?: Color;
  level: number;
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface SwitchData {
  coo: Coordinate;
  on: boolean;
}

export interface PortalData {
  coo: Coordinate;
  dest: Coordinate;
  color?: Color;
  energy: number;
}

export interface PlayerData {
  id: number;
  x: number;
  y: number;
  dir: Direction;
  role: Role;
  stamina: number;
  collectedGem?: number;
  hasBeeper?: number;
}

export interface LockData {
  coo: Coordinate;
  controlled?: Coordinate[];
  isActive: boolean;
  energy: number;
}

export interface StairData {
  coo: Coordinate;
  dir: Direction;
}

export interface PlatformData {
  coo: Coordinate;
  level: number;
}

export interface CoreData {
  gems: Coordinate[];
  beepers: Coordinate[];
  switches: SwitchData[];
  portals: PortalData[];
  monsters: Coordinate[];
  locks: LockData[];
  platforms: PlatformData[];
  players: PlayerData[];
}
