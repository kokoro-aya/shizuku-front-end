import React from 'react';
import { Divider } from 'antd';
import { useIntl } from 'umi';

const Story: React.FC = () => {
  const intl = useIntl();
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {intl.formatMessage({ id: 'section.Story' })}
      </Divider>
      <div>{intl.formatMessage({ id: 'underConstruct' })}</div>
    </div>
  );
};

export default Story;
