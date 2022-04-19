export const count = <T>(grid: Array<Array<T>>, pred: (arg0: T) => boolean) => {
  return grid.map((a) => a.filter(pred).length).reduce((a, b) => a + b);
};

interface ExportLayout2S {
  x: number;
  y: number;
  color: string;
  level: number;
}
