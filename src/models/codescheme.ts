import { Reducer } from 'umi';

export enum Theme {
  Light = 'light',
  VSDark = 'vs-dark',
  AtomDark = 'atom-dark',
  Darcula = 'darcula',
  MaterialLight = 'material-light',
  MaterialOceanic = 'material-oceanic',
  SolarizedLight = 'solarized-light',
}

export interface CodeSchemeInterface {
  namespace: 'codescheme';
  state: ThemeState;
  effects: {};
  reducers: {
    updateTheme: Reducer<ThemeState>;
  };
}

export interface ThemeState {
  theme: Theme;
}

const model: CodeSchemeInterface = {
  namespace: 'codescheme',
  state: { theme: Theme.Light },
  effects: {},
  reducers: {
    updateTheme(state, { payload }) {
      return { theme: payload as Theme };
    },
  },
};

export default model;
