import React from 'react';
import { Divider, Space, Tag } from 'antd';
import {
  StarTwoTone,
  BulbTwoTone,
  AlertTwoTone,
  BugTwoTone,
  CheckCircleOutlined,
  SyncOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { useIntl } from 'umi';

interface StatusProps {
  status: string;
  style: { fontSize: string; marginLeft: string };
}

const Status = (props: StatusProps) => {
  const intl = useIntl();
  if (props.status === 'success')
    return (
      <Tag style={props.style} icon={<CheckCircleOutlined />} color="success">
        {intl.formatMessage({ id: 'playground.status.success' })}
      </Tag>
    );
  if (props.status === 'processing')
    return (
      <Tag style={props.style} icon={<SyncOutlined spin />} color="processing">
        {intl.formatMessage({ id: 'playground.status.processing' })}
      </Tag>
    );
  if (props.status === 'idle')
    return (
      <Tag style={props.style} icon={<ClockCircleOutlined />} color="default">
        {intl.formatMessage({ id: 'playground.status.idle' })}
      </Tag>
    );
  if (props.status === 'impossible' || props.status === 'err')
    return (
      <Tag style={props.style} icon={<CloseCircleOutlined />} color="error">
        {intl.formatMessage({ id: 'playground.status.impossible' })}
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
  monsters: number;
  status: string;
  iconSize?: number;
}

const StatusBar: React.FC<StatusBarProps> = (props) => {
  const intl = useIntl();
  const spanStyle = { fontSize: `16px`, marginLeft: '8px' };
  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
        <Divider orientation="left">
          {intl.formatMessage({ id: 'playground.status.currentStatus' })}
        </Divider>
        <Space wrap size="middle">
          <div>
            <StarTwoTone twoToneColor="#66ccff" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="blue">
              {intl.formatMessage(
                { id: 'playground.status.gem' },
                { gemInBag: props.gemInBag, gemOnGround: props.gemOnGround },
              )}
            </Tag>
          </div>
          <div>
            <BulbTwoTone twoToneColor="#52c41a" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="green">
              {intl.formatMessage(
                { id: 'playground.status.switch' },
                {
                  openedSwitch: props.openedSwitch,
                  allSwitch: props.closedSwitch + props.openedSwitch,
                },
              )}
            </Tag>
          </div>
          <div>
            <AlertTwoTone twoToneColor="#f7c242" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="orange">
              {intl.formatMessage(
                { id: 'playground.status.beeper' },
                {
                  beeperInBag: props.beeperInBag,
                  allBeeper: props.beeperAtGround + props.beeperInBag,
                },
              )}
            </Tag>
          </div>
          <div>
            <BugTwoTone twoToneColor="#f5222d" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="red">
              {intl.formatMessage(
                { id: 'playground.status.monster' },
                { monsters: props.monsters },
              )}
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
