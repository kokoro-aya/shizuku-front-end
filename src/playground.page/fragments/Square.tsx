import React from 'react';
import {
  UpOutlined,
  RightOutlined,
  DownOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { Popover } from 'antd';
import _ from 'lodash';
import styles from './SquareLayout.css';
import { Coordinate, Grid, PlayerData } from '@/data/DataFragments';
import { Block, Color, Direction, Role } from '@/data/Enums';

interface SquareProps {
  fontSize: number;
  player?: PlayerData;
  terrain: Grid;
  coo: { x: number; y: number };
  groundObjects: GroundObjects;
}

interface GroundObjects {
  beeper?: true;
  aSwitch?: { on: boolean };
  portal?: { dest: Coordinate; color: Color; energy: number };
  monster?: true;
  lock?: { controlled: Coordinate[]; isActive: boolean; energy: number };
  platform?: { level: number };
  stair?: { dir: Direction };
}

const Square: React.FC<SquareProps> = (props) => {
  const fontSize = props.fontSize;

  const { player, terrain, groundObjects } = props;

  const getDir = () => {
    if (player !== undefined) {
      const { dir } = player;
      switch (dir) {
        case Direction.RIGHT:
          return <RightOutlined />;
        case Direction.UP:
          return <UpOutlined />;
        case Direction.DOWN:
          return <DownOutlined />;
        case Direction.LEFT:
          return <LeftOutlined />;
      }
    } else return null;
  };

  const propCount = () => {
    let count = 0;
    if (terrain.block !== Block.OPEN) count += 1;
    if (groundObjects.beeper) count += 1;
    if (groundObjects.aSwitch) count += 1;
    if (groundObjects.portal) count += 1;
    if (groundObjects.monster) count += 1;
    if (groundObjects.lock) count += 1;
    if (groundObjects.platform) count += 1;
    if (groundObjects.stair) count += 1;
    return count;
  };

  const getValue = () => {
    if (propCount() === 0) {
      return '';
    } else if (propCount() === 1) {
      if (terrain.block === Block.BLOCKED) return '⛰';
      if (groundObjects.beeper) return '📹';
      if (groundObjects.aSwitch) {
        return groundObjects.aSwitch.on ? '🔲' : '🔳';
      }
      if (groundObjects.portal) return '💠';
      if (groundObjects.monster) return '😈';
      if (groundObjects.lock) return '🗝';
      if (groundObjects.platform) return '_';
      if (groundObjects.stair) {
        switch (groundObjects.stair.dir) {
          case Direction.UP:
            return '🔼️';
          case Direction.DOWN:
            return '🔽';
          case Direction.LEFT:
            return '◀️';
          case Direction.RIGHT:
            return '▶️';
        }
      }
    } else {
      return '❓';
    }
  };

  const getColor = (color: Color) => {
    return color.toString().toLowerCase();
  };

  const getPlayerInfo = () => {
    if (player === undefined) return null;
    return (
      <div>
        <p>这是一个角色</p>
        <p>id: {player.id}</p>
        <p>
          坐标: x:{player.x}, y:{player.y}
        </p>
        <p>持有的beeper数量: {player.hasBeeper}</p>
        <p>收集的宝石: {player.collectedGem}</p>
        <p>角色: {player.role === Role.PLAYER ? '角色' : '专家'}</p>
        <p>体力: {player.stamina}</p>
      </div>
    );
  };

  const getDirInfo = (dir: Direction) => {
    switch (dir) {
      case Direction.UP:
        return '上';
      case Direction.DOWN:
        return '下';
      case Direction.LEFT:
        return '左';
      case Direction.RIGHT:
        return '右';
    }
  };

  const getObjectInfo = () => {
    const terrainText =
      terrain.block === Block.BLOCKED ? (
        <div>
          <p>这个格子被阻挡了</p>
        </div>
      ) : (
        <div>
          <p>这个格子是空白的</p>
        </div>
      );
    const beeperText = groundObjects.beeper ? (
      <div>
        <p>这里有个beeper</p>
      </div>
    ) : null;
    const switchText = groundObjects.aSwitch ? (
      <div>
        <p>这里有个{groundObjects.aSwitch.on ? '开启的' : '关闭的'}开关</p>
      </div>
    ) : null;
    const portalText = groundObjects.portal ? (
      <div>
        <p>这里有一个传送门</p>
        <p>
          目的地: x:{groundObjects.portal.dest.x}, y:
          {groundObjects.portal.dest.y}
        </p>
        <p>颜色: {getColor(groundObjects.portal.color)}</p>
        <p>能量: {groundObjects.portal.energy}</p>
      </div>
    ) : null;
    const monsterText = groundObjects.monster ? (
      <div>
        <p>这里有个怪物</p>
      </div>
    ) : null;
    const lockText = groundObjects.lock ? (
      <div>
        <p>这里有个机关锁</p>
        <p>
          控制以下的平台:{' '}
          {groundObjects.lock.controlled
            .map((e) => `(x:${e.x} y:${e.y})`)
            .join(', ')}
        </p>
        <p>这个机关锁是{groundObjects.lock.isActive ? '开启的' : '关闭的'}</p>
        <p>能量: {groundObjects.lock.energy}</p>
      </div>
    ) : null;
    const platformText = groundObjects.platform ? (
      <div>
        <p>这是一个平台</p>
        <p>高度: {groundObjects.platform.level}</p>
      </div>
    ) : null;
    const stairText = groundObjects.stair ? (
      <div>
        <p>这是一个楼梯</p>
        <p>方向: {getDirInfo(groundObjects.stair.dir)}</p>
      </div>
    ) : null;

    const debugText = (
      <div>
        <p>Prop count: {propCount()}</p>
      </div>
    );
    return (
      <div>
        {terrainText}
        {beeperText}
        {switchText}
        {portalText}
        {monsterText}
        {lockText}
        {platformText}
        {stairText}
        {debugText}
      </div>
    );
  };

  const getPopoverContent = () => {
    return (
      <div>
        <p>高度: {terrain.level}</p>
        {getPlayerInfo()}
        {getObjectInfo()}
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
    background: getColor(terrain.color),
    opacity: '0.6',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'fill',
    overflow: 'hidden',
  };

  const squareStyle = {
    border: '0.5px dotted grey',
    position: 'relative' as const,
  };

  return (
    <Popover
      content={getPopoverContent()}
      title={`x: ${props.coo.x}, y: ${props.coo.y}`}
      trigger="hover"
    >
      <div style={squareStyle} className={'square' /* && getColor() */}>
        <div style={contentStyle} className="subsquare">
          {getValue(/*props*/)}
        </div>
        {getDir()}
      </div>
    </Popover>
  );
};

export default Square;
