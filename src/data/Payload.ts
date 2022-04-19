import { Block } from '@/data/Enums';

import { CoreData } from '@/data/DataFragments';

interface SerializedBlock {
  block: Block;
  level: number;
}

export interface Payload extends CoreData {
  grid: SerializedBlock[][];
  consoleLog: string;
  special: string;
}
