/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

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
