import { DashboardGrid, Lock, Player, Portal } from '@/components/Dashboard';

export const count = (grid: string[][], word: string) => {
  let cnt = 0;
  for (const x of grid) for (const y of x) if (y === word) cnt += 1;
  return cnt;
};

interface ExportLayout2S {
  x: number;
  y: number;
  color: string;
  level: number;
}

export const pack = (
  code: string,
  grids: DashboardGrid,
  portals: Portal[],
  locks: Lock[],
  players: Player[],
) => {
  const grid = grids.grid;
  const layout = grids.layout;
  let layout2s: ExportLayout2S[] = [];
  grids.layout2s.forEach((row, y) =>
    row.forEach((item, x) => {
      if (item.color !== 'WHITE' || item.level !== 0) {
        layout2s = layout2s.concat([
          {
            x: x,
            y: y,
            color: item.color,
            level: item.level,
          },
        ]);
      }
    }),
  );
  return {
    code: code,
    grid: grid,
    layout: layout,
    layout2s: layout2s,
    portals: portals,
    locks: locks,
    players: players,
  };
};
