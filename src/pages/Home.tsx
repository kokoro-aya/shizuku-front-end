import React, { useState } from 'react';
import { Card, Col, Divider, Row } from 'antd';
import {
  CodeOutlined,
  EditOutlined,
  ReadOutlined,
  FileSearchOutlined,
  AndroidOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { Link, useIntl } from 'umi';

export default () => {
  const intl = useIntl();

  const [hovered, setHovered] = useState([0, 0, 0, 0, 0, 0]);

  const hoverIn = (num: number) => {
    let a = [0, 0, 0, 0, 0, 0];
    a[num] = 1;
    setHovered(a);
  };

  const hoverOut = () => {
    setHovered([0, 0, 0, 0, 0, 0]);
  };

  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {intl.formatMessage({ id: 'welcome' })}
      </Divider>
      <div style={{ margin: '16px' }}>
        {intl.formatMessage({ id: 'underConstruct' })}
      </div>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
          <Link to="/playground">
            <Card
              title={<CodeOutlined />}
              headStyle={{
                fontSize: '64px',
                textAlign: 'center',
              }}
              onMouseEnter={() => hoverIn(0)}
              onMouseLeave={() => hoverOut()}
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                border: '1px solid #e8e8e8',
                width: '100%',
                background: hovered[0] ? 'aliceblue' : 'white',
              }}
            >
              {intl.formatMessage({ id: 'section.Playground' })}
            </Card>
          </Link>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
          <Link to="/editor">
            <Card
              title={<EditOutlined />}
              headStyle={{
                fontSize: '64px',
                textAlign: 'center',
              }}
              onMouseEnter={() => hoverIn(1)}
              onMouseLeave={() => hoverOut()}
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                border: '1px solid #e8e8e8',
                width: '100%',
                background: hovered[1] ? 'aliceblue' : 'white',
              }}
            >
              {intl.formatMessage({ id: 'section.Editor' })}
            </Card>
          </Link>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
          <Link to="/gallery">
            <Card
              title={<FileSearchOutlined />}
              headStyle={{
                fontSize: '64px',
                textAlign: 'center',
              }}
              onMouseEnter={() => hoverIn(2)}
              onMouseLeave={() => hoverOut()}
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                border: '1px solid #e8e8e8',
                background: hovered[2] ? 'aliceblue' : 'white',
              }}
            >
              {intl.formatMessage({ id: 'section.Gallery' })}
            </Card>
          </Link>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
          <Link to="/story">
            <Card
              title={<AndroidOutlined />}
              headStyle={{
                fontSize: '64px',
                textAlign: 'center',
              }}
              onMouseEnter={() => hoverIn(3)}
              onMouseLeave={() => hoverOut()}
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                border: '1px solid #e8e8e8',
                background: hovered[3] ? 'aliceblue' : 'white',
              }}
            >
              {intl.formatMessage({ id: 'section.Story' })}
            </Card>
          </Link>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
          <Link to="/help">
            <Card
              title={<ReadOutlined />}
              headStyle={{
                fontSize: '64px',
                textAlign: 'center',
              }}
              onMouseEnter={() => hoverIn(4)}
              onMouseLeave={() => hoverOut()}
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                border: '1px solid #e8e8e8',
                width: '100%',
                background: hovered[4] ? 'aliceblue' : 'white',
              }}
            >
              {intl.formatMessage({ id: 'section.Help' })}
            </Card>
          </Link>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
          <Link to="/feedback">
            <Card
              title={<MessageOutlined />}
              headStyle={{
                fontSize: '64px',
                textAlign: 'center',
              }}
              onMouseEnter={() => hoverIn(5)}
              onMouseLeave={() => hoverOut()}
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                border: '1px solid #e8e8e8',
                width: '100%',
                background: hovered[5] ? 'aliceblue' : 'white',
              }}
            >
              {intl.formatMessage({ id: 'section.Feedback' })}
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
