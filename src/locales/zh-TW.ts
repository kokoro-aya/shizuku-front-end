/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import sections from './zh-TW/sections';
import playground from './zh-TW/playground';
import dialog from './zh-TW/dialog';
import square from '@/locales/zh-TW/square';

export default {
  welcome: '歡迎',
  underConstruct: '工程進行中，請稍後訪問。。。',
  dark: '暗色',
  light: '亮色',
  ...sections,
  ...playground,
  ...dialog,
  ...square,
};
