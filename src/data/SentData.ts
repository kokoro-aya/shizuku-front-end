import {
  Coordinate,
  CoreData,
  Grid,
  LockData,
  PlatformData,
  PlayerData,
  PortalData,
  StairData,
  SwitchData,
} from '@/data/DataFragments';

export interface GamingCondition {
  collectGemsBy?: number;
  switchesOnBy?: number;
  arriveAt?: Coordinate[];
  monstersKilled?: number;
  monstersKilledLessThan?: number;
  noSameTileRepassed?: boolean;
  endGameAfter?: number;
}

export interface SentData extends CoreData {
  type: 'default';
  code: string;
  grid: Grid[][];
  stairs: StairData[];
  gamingCondition?: GamingCondition;
  userCollision: boolean;
}
