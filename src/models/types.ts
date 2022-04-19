import { DashboardGrid, Portal, Lock, Player } from '@/components/Dashboard';
import { FrameProps } from '@/pages/Playground';

export interface FetchPayload {
  payload: {
    code: string;
    grid: DashboardGrid;
    portals: Portal[];
    locks: Lock[];
    players: Player[];
  };
}

export interface ModelStates {
  initialized: string;
  nextFrame: FrameProps;
  answer: FrameProps[];
  currentLength: number;
  answerLength: number;
  returnedError: boolean;
}

export interface ErrorState {
  returnedError: boolean;
}
