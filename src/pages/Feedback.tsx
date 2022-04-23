import React from 'react';
import { Divider } from 'antd';
import { useIntl } from 'umi';
import { renderMessage } from '@/locales/hook';

const Feedback = () => {
  const intl = useIntl();
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {renderMessage(intl, 'section.Feedback')}
      </Divider>
      <div>{renderMessage(intl, 'underConstruct')}</div>
    </div>
  );
};
export default Feedback;
