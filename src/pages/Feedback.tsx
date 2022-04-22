import React from 'react';
import { Divider } from 'antd';
import { useIntl } from 'umi';

const Feedback = () => {
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {useIntl().formatMessage({ id: 'section.Feedback' })}
      </Divider>
      <div>{useIntl().formatMessage({ id: 'underConstruct' })}</div>
    </div>
  );
};
export default Feedback;
