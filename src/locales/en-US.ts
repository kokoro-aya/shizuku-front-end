import sections from './en-US/sections';
import playground from './en-US/playground';
import dialog from '@/locales/en-US/dialog';

export default {
  welcome: 'Welcome',
  underConstruct: 'This section is under construction.',
  dark: 'dark',
  light: 'light',
  ...sections,
  ...playground,
  ...dialog,
};
