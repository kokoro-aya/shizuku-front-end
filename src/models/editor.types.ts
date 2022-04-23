import { Frame } from '@/models/playground.types';
import { GamingCondition } from '@/data/SentData';

export interface EditorStates {
  playground?: EditPlayground;
}

export interface EditPlayground extends Frame {
  name?: string;
  gamingCondition?: GamingCondition;
  userCollision: boolean;
}
