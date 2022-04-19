import { Payload } from '@/data/Payload';

export type ReceivedData = SuccessData | FailedData;

export interface SuccessData {
  status: 'OK';
  payload: Payload[];
  game: GameStatus;
  gained: number;
}

export interface FailedData {
  status: 'ERROR';
  msg: string;
}
