export type DispatchType<T> = {
  type: string;
  payload?: T;
};

export interface DispatchSender {
  dispatch: <T>(arg0: DispatchType<T>) => void;
}

export interface CompatibleDispatchSender {
  dispatch?: <T>(arg0: DispatchType<T>) => void;
}
