/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

export enum Block {
  OPEN = 'OPEN',
  BLOCKED = 'BLOCKED',
  LOCK = 'LOCK',
  STAIR = 'STAIR',
  VOID = 'VOID',
}

export enum Biome {
  SNOWY = 'SNOWY',
  PLAINS = 'PLAINS',
  RAINY = 'RAINY',
  HELL = 'HELL',
}

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum Role {
  PLAYER = 'PLAYER',
  SPECIALIST = 'SPECIALIST',
}

export enum GameStatus {
  WIN = 'WIN',
  LOST = 'LOST',
  PENDING = 'PENDING',
}

export enum Color {
  BLACK = 'BLACK',
  SILVER = 'SILVER',
  GREY = 'GREY',
  WHITE = 'WHITE',
  RED = 'RED',
  ORANGE = 'ORANGE',
  GOLD = 'GOLD',
  PINK = 'PINK',
  YELLOW = 'YELLOW',
  BEIGE = 'BEIGE',
  BROWN = 'BROWN',
  GREEN = 'GREEN',
  AZURE = 'AZURE',
  CYAN = 'CYAN',
  ALICEBLUE = 'ALICEBLUE',
  PURPLE = 'PURPLE',
}
