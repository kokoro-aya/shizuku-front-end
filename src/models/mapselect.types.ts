export interface MapType {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MapCategory {
  value: string;
  label: string;
  children: Array<MapType>;
}

export interface MapSelectStates {
  maps: Array<MapCategory>;
  current?: string;
}
