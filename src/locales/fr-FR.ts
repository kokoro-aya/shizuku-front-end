import sections from './fr-FR/sections';
import playground from './fr-FR/playground';
import dialog from '@/locales/fr-FR/dialog';
import square from '@/locales/fr-FR/square';

export default {
  welcome: 'Bienvenue',
  underConstruct: 'Construction en cours...',
  dark: 'foncée',
  light: 'clair',
  ...sections,
  ...playground,
  ...dialog,
  ...square,
};
