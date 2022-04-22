import { CoreData, Grid, PlayerData, StairData } from '@/data/DataFragments';
import { GamingCondition } from '@/data/SentData';
import { GameStatus } from '@/data/Enums';

export interface Frame extends CoreData {
  grid: Grid[][];
  stairs: StairData[];
  players: PlayerData[];
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
  gameStatus: GameStatus;
  gained: number;
}

export interface ErrorState {
  returnedError: boolean;
}
