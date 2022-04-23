/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import { Frame } from '@/models/playground.types';
import { GamingCondition } from '@/data/SentData';

export interface InitStates extends Frame {
  id: number;
  name?: string;
  gamingCondition?: GamingCondition;
  userCollision: boolean;
}

export interface StoreType {
  default: Array<InitStates>;
  simple: Array<InitStates>;
  puzzle: Array<InitStates>;
  hills: Array<InitStates>;
  complex: Array<InitStates>;
  custom: Array<InitStates>;
}

export const TYPES = [
  'default',
  'simple',
  'puzzle',
  'hills',
  'complex',
  'custom',
] as const;
export type StoreKey = typeof TYPES[number];

export const isTypeKey = (typeKey: string): typeKey is StoreKey => {
  return TYPES.includes(typeKey as StoreKey);
};

export const option = (p: StoreType, s: StoreKey) => {
  return {
    value: s,
    label: s,
    children: p[s].map((e) => {
      return { value: '' + e.id, label: e.name ?? 'No Name' };
    }),
  };
};
