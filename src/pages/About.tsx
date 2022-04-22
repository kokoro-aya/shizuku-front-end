import React from 'react';
import { Col, Divider, Row } from 'antd';
import { useIntl } from 'umi';

export default () => {
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {useIntl().formatMessage({ id: 'section.About' })}
      </Divider>
      <div>{useIntl().formatMessage({ id: 'underConstruct' })}</div>
    </div>
  );
};
