import { IntlShape } from '../../node_modules/@umijs/plugin-locale/node_modules/react-intl';
import { MessageType } from '@/locales/types';

export const renderMessage = (
  intl: IntlShape,
  message: MessageType,
  option?: any,
) => {
  return intl.formatMessage({ id: message }, option);
};
