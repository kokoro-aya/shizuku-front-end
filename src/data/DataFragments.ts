import { Biome, Block, Color, Direction, Role } from '@/data/Enums';

export interface Grid {
  block: Block;
  biome: Biome;
  color: Color;
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
  collectedGem: number;
  hasBeeper: number;
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
