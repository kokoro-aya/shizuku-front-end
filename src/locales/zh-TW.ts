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
