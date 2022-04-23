import { Payload } from '@/data/Payload';
import { Frame } from '@/models/playground.types';
import { Grid, StairData } from '@/data/DataFragments';
import * as _ from 'lodash';
import { useCallback, useEffect, useRef } from 'react';

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

// UseThrottle: https://stackoverflow.com/questions/54666401/how-to-use-throttle-or-debounce-with-react-hook
export const useThrottle = (cb: (...args: any) => void, delay: number) => {
  const options = { leading: true, trailing: false }; // add custom lodash options
  const cbRef = useRef(cb);
  // use mutable ref to make useCallback/throttle not depend on `cb` dep
  useEffect(() => {
    cbRef.current = cb;
  });
  return useCallback(
    _.throttle((...args: any) => cbRef.current(...args), delay, options),
    [delay],
  );
};
