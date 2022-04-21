import {
  CoreData,
  Grid,
  PlayerData,
  ReceivedPlayerData,
  StairData,
} from '@/data/DataFragments';
import { GamingCondition } from '@/data/SentData';

export interface Frame extends CoreData {
  grid: Grid[][];
  stairs: StairData[];
  players: ReceivedPlayerData[];
  output: string;
  special: string;
}

export interface ModelStates {
  initialized: boolean;
  initialGem: number;
  nextFrame: Frame;
  answer: Frame[];
  currentLength: number;
  answerLength: number;
  returnedError: boolean;
  gamingCondition?: GamingCondition;
  userCollision: boolean;
}

export interface ErrorState {
  returnedError: boolean;
}
