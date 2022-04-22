import { EditorStates } from '@/models/editor.types';
import { Effect, ImmerReducer } from 'umi';

export interface EditorModelInterface {
  namespace: 'editor';
  state: EditorStates;
  effects: {
    loadMap: Effect;
    submitMap: Effect;
    deleteMap: Effect;
  };
  reducers: {
    resize: ImmerReducer<EditorStates>;
    setBlock: ImmerReducer<EditorStates>;
    addPlayer: ImmerReducer<EditorStates>;
    addGem: ImmerReducer<EditorStates>;
    addBeeper: ImmerReducer<EditorStates>;
    addSwitch: ImmerReducer<EditorStates>;
    addPortalPair: ImmerReducer<EditorStates>;
    addMonster: ImmerReducer<EditorStates>;
    /* locks and platforms are currently unavailable */
    addGameCondition: ImmerReducer<EditorStates>;
  };
}
