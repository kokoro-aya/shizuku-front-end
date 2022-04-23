import React from 'react';
import { Divider } from 'antd';
import { useIntl } from 'umi';
import { renderMessage } from '@/locales/hook';

export default () => {
  const intl = useIntl();
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {renderMessage(intl, 'section.About')}
      </Divider>
      <div>{renderMessage(intl, 'underConstruct')}</div>
    </div>
  );
};
