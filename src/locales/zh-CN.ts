import sections from './zh-CN/sections';
import playground from './zh-CN/playground';
import dialog from '@/locales/zh-CN/dialog';
import square from '@/locales/zh-CN/square';

export default {
  welcome: '欢迎',
  underConstruct: '施工中，请稍后再回来。。。',
  dark: '暗色',
  light: '亮色',
  ...sections,
  ...playground,
  ...dialog,
  ...square,
};
