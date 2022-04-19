interface Grid {
  block: Block;
  biome: Biome;
  level: number;
}

interface Coordinate {
  x: number;
  y: number;
}

interface GamingCondition {
  collectGemsBy?: number;
  switchesOnBy?: number;
  arriveAt?: Coordinate[];
  monstersKilled?: number;
  monstersKilledLessThan?: number;
  noSameTileRepassed?: boolean;
  endGameAfter?: number;
}

interface SentData {
  type: 'default';
  code: string;
  grid: Grid[][];
  gems: Coordinate[];
  beepers: Coordinate[];
  switches: { coo: Coordinate; on: boolean }[];
  portals: {
    coo: Coordinate;
    dest: Coordinate;
    color?: Color;
    energy: number;
  }[];
  monsters: Coordinate[];
  locks: {
    coo: Coordinate;
    controlled: Coordinate[];
    energy: number;
  }[];
  stairs: { coo: Coordinate; dir: Direction }[];
  platforms: { coo: Coordinate; level: number }[];
  players: {
    id: number;
    x: number;
    y: number;
    dir: Direction;
    role: Role;
    stamina: number;
  }[];
  gamingCondition?: GamingCondition;
  userCollision: boolean;
}

interface SerializedBlock {
  block: Block;
  level: number;
}

interface Payload {
  grid: SerializedBlock[][];
  gems: Coordinate[];
  beepers: Coordinate[];
  switches: { coo: Coordinate; on: boolean }[];
  portals: {
    coo: Coordinate;
    dest: Coordinate;
    color: Color;
    energy: number;
  }[];
  monsters: Coordinate[];
  locks: {
    coo: Coordinate;
    isActive: boolean;
    energy: number;
  }[];
  platforms: { coo: Coordinate; level: number }[];
  players: {
    id: number;
    x: number;
    y: number;
    dir: Direction;
    role: Role;
    stamina: number;
  };
}

type ReceivedData = SuccessData | FailedData;

interface SuccessData {
  status: 'OK';
  payload: Payload[];
  game: GameStatus;
  gained: number;
}

interface FailedData {
  status: 'ERROR';
  msg: string;
}
