/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

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
import { renderMessage } from '@/locales/hook';

interface StatusProps {
  status: string;
  style: { fontSize: string; marginLeft: string };
}

const Status = (props: StatusProps) => {
  const intl = useIntl();
  if (props.status === 'success')
    return (
      <Tag style={props.style} icon={<CheckCircleOutlined />} color="success">
        {renderMessage(intl, 'playground.status.success')}
      </Tag>
    );
  if (props.status === 'processing')
    return (
      <Tag style={props.style} icon={<SyncOutlined spin />} color="processing">
        {renderMessage(intl, 'playground.status.processing')}
      </Tag>
    );
  if (props.status === 'idle')
    return (
      <Tag style={props.style} icon={<ClockCircleOutlined />} color="default">
        {renderMessage(intl, 'playground.status.idle')}
      </Tag>
    );
  if (props.status === 'impossible' || props.status === 'err')
    return (
      <Tag style={props.style} icon={<CloseCircleOutlined />} color="error">
        {renderMessage(intl, 'playground.status.impossible')}
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
          {renderMessage(intl, 'playground.status.currentStatus')}
        </Divider>
        <Space wrap size="middle">
          <div>
            <StarTwoTone twoToneColor="#66ccff" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="blue">
              {renderMessage(intl, 'playground.status.gem', {
                gemInBag: props.gemInBag,
                gemOnGround: props.gemOnGround,
              })}
            </Tag>
          </div>
          <div>
            <BulbTwoTone twoToneColor="#52c41a" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="green">
              {renderMessage(intl, 'playground.status.switch', {
                openedSwitch: props.openedSwitch,
                allSwitch: props.closedSwitch + props.openedSwitch,
              })}
            </Tag>
          </div>
          <div>
            <AlertTwoTone twoToneColor="#f7c242" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="orange">
              {renderMessage(intl, 'playground.status.beeper', {
                beeperInBag: props.beeperInBag,
                allBeeper: props.beeperAtGround + props.beeperInBag,
              })}
            </Tag>
          </div>
          <div>
            <BugTwoTone twoToneColor="#f5222d" style={{ fontSize: `16px` }} />
            <Tag style={spanStyle} color="red">
              {renderMessage(intl, 'playground.status.monster', {
                monsters: props.monsters,
              })}
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
