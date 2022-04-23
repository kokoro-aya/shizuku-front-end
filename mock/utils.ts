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
