import React from 'react';
import { Divider, Space, Tag } from 'antd';
import {
  StarTwoTone,
  BulbTwoTone,
  AlertTwoTone,
  CheckCircleOutlined,
  SyncOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

interface StatusProps {
  status: string;
  style: { fontSize: string; marginLeft: string };
}

const Status = (props: StatusProps) => {
  if (props.status === 'success')
    return (
      <Tag style={props.style} icon={<CheckCircleOutlined />} color="success">
        运行成功
      </Tag>
    );
  if (props.status === 'processing')
    return (
      <Tag style={props.style} icon={<SyncOutlined spin />} color="processing">
        正在运行...
      </Tag>
    );
  if (props.status === 'idle')
    return (
      <Tag style={props.style} icon={<ClockCircleOutlined />} color="default">
        等待中...
      </Tag>
    );
  if (props.status === 'impossible' || props.status === 'err')
    return (
      <Tag style={props.style} icon={<CloseCircleOutlined />} color="error">
        发生错误
      </Tag>
    );
  return null;
};

interface StatusBarProps {
  gemInBag: number;
  gemOnGround: number;
  openedSwitch: number;
  closedSwitch: number;
  beeperInBag: number;
  beeperAtGround: number;
  status: string;
  iconSize?: number;
}

const StatusBar: React.FC<StatusBarProps> = (props) => {
  const spanStyle = { fontSize: `16px`, marginLeft: '8px' };
  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
        <Divider orientation="left">当前状态</Divider>
        <Space wrap size="middle">
          <div>
            <StarTwoTone twoToneColor="#66ccff" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="blue">
              Gem: {props.gemInBag} / {props.gemOnGround}
            </Tag>
          </div>
          <div>
            <BulbTwoTone twoToneColor="#52c41a" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="green">
              Switch: {props.openedSwitch} / {props.closedSwitch}
            </Tag>
          </div>
          <div>
            <AlertTwoTone twoToneColor="#f7c242" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="orange">
              Beeper: {props.beeperInBag} / {props.beeperAtGround}
            </Tag>
          </div>
          <div style={{ paddingLeft: '16px' }}>
            <Status status={props.status} style={spanStyle} />
          </div>
        </Space>
      </div>
    </>
  );
};

export default StatusBar;
