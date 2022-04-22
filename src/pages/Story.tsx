import React from 'react';
import { Divider } from 'antd';
import { useIntl } from 'umi';

const Story: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {useIntl().formatMessage({ id: 'section.Story' })}
      </Divider>
      <div>{useIntl().formatMessage({ id: 'underConstruct' })}</div>
    </div>
  );
};

export default Story;
