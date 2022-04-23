import React from 'react';
import { Col, Divider, Row } from 'antd';
import { useIntl } from 'umi';

export default () => {
  const intl = useIntl();
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {intl.formatMessage({ id: 'section.Editor' })}
      </Divider>
      <div>{intl.formatMessage({ id: 'underConstruct' })}</div>
    </div>
  );
};
