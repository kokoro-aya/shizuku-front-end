import React from 'react';
import {
  UpOutlined,
  RightOutlined,
  DownOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { Popover } from 'antd';
import _ from 'lodash';
import arrow from '../resources/arrow.png';
import styles from './SquareLayout.css';
import { PreprocessedGrid } from '@/components/Dashboard';

interface SquareProps {
  fontSize: number;
  isPlayer: boolean;
  dir?: string;
  value: PreprocessedGrid;
  style: { border: string; position: 'relative' };
}

const Square: React.FC<SquareProps> = (props) => {
  const fontSize = props.fontSize;

  const getDir = (props: SquareProps) => {
    const { isPlayer } = props;
    if (isPlayer) {
      const { dir } = props;
      if (dir === 'RIGHT') return <RightOutlined />;
      if (dir === 'UP') return <UpOutlined />;
      if (dir === 'DOWN') return <DownOutlined />;
      if (dir === 'LEFT') return <LeftOutlined />;
    } else return null;
  };
  const getValue = () => {
    // const { value: { status } } = this.props
    const {
      value: { grid, layout },
    } = props;
    if (grid === 'OPEN') {
      if (layout === 'GEM') return '💎';
      if (layout === 'OPENEDSWITCH') return '🔲';
      if (layout === 'CLOSEDSWITCH') return '🔳';
      if (layout === 'BEEPER') return '🕹';
      if (layout === 'PORTAL') return '🚪';
      if (layout === 'PLATFORM') return '_';
    }
    if (grid === 'LOCK') return '🎚';
    if (grid === 'BLOCKED') return '⛰';
    if (grid === 'WATER') return '🌊';
    if (grid === 'TREE') return '🌴';
    if (grid === 'DESERT') return '🏜';
    if (grid === 'HOME') return '🏡';
    if (grid === 'MOUNTAIN') return '🏔';
    if (grid === 'STONE') return '🗿';
    return null;
  };
  const getColor = () => {
    const {
      value: { color },
    } = props;
    return color;
  };

  const getLockInfo = () => {
    const {
      value: { lockInfo },
    } = props;
    if (lockInfo === undefined) {
      return null;
    }
    const tiles = _.chunk(lockInfo, 2).map((r, i) => {
      const row = r.map((e, y) => {
        return `x: ${e.x}, y: ${e.y}; `;
      });
      return <p key={i}>{row}</p>;
    });
    return (
      <div>
        <p>关联的方格子：</p>
        {tiles}
      </div>
    );
  };

  const getPlayerInfo = () => {
    const {
      value: { playerId },
    } = props;
    if (playerId === undefined) return null;
    return (
      <div>
        <p>这是一个角色</p>
        <p>id: {playerId}</p>
      </div>
    );
  };

  const getPopoverContent = () => {
    const {
      value: { level },
    } = props;
    return (
      <div>
        <p>高度： {level}</p>
        {getPlayerInfo()}
        {getLockInfo()}
      </div>
    );
  };

  const contentStyle = {
    fontSize: `${fontSize}px`, // fixme 用固定百分比取代
    position: 'absolute' as const,
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    zIndex: '1',
    background: getColor(),
    opacity: '0.6',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'fill',
    overflow: 'hidden',
  };

  return (
    <Popover
      content={getPopoverContent()}
      title={`x: ${props.value.x}, y: ${props.value.y}`}
      trigger="hover"
    >
      <div style={props.style} className={'square' /* && getColor() */}>
        <div style={contentStyle} className="subsquare">
          {getValue(/*props*/)}
        </div>
        {getDir(props /*imgStyle*/)}
      </div>
    </Popover>
  );
};

export default Square;
