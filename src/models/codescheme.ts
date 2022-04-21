import { Reducer } from 'umi';

export enum Theme {
  Light = 'light',
  VSDark = 'vs-dark',
  Clouds = 'clouds',
  Dawn = 'dawn',
  Dracula = 'dracula',
  Monokai = 'monokai',
  OceanicNext = 'oceanic-next',
  SolarizedDark = 'solarized-dark',
  SolarizedLight = 'solarized-light',
  Twilight = 'twilight',
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
