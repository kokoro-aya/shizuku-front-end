import { Payload } from '@/data/Payload';
import { Frame } from '@/models/types';
import { Grid, StairData } from '@/data/DataFragments';

export const count = <T>(grid: Array<Array<T>>, pred: (arg0: T) => boolean) => {
  return grid.map((a) => a.filter(pred).length).reduce((a, b) => a + b);
};

// Currently, change block tiles programmally is unsupported, an initial grid array is supplied
export const constructFrame = (
  p: Payload,
  blocks: Array<Array<Grid>>,
  stairs: Array<StairData>,
): Frame => {
  const { consoleLog, grid, ...values } = p;
  return {
    grid: blocks,
    output: consoleLog,
    stairs: stairs,
    ...values,
  };
};
