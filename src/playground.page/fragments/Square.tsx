import React from 'react';
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Popover } from 'antd';
import _ from 'lodash';
import { Coordinate, Grid, PlayerData } from '@/data/DataFragments';
import { Biome, Block, Color, Direction, Role } from '@/data/Enums';

interface SquareProps {
  fontSize: number;
  player?: PlayerData;
  terrain: Grid;
  coo: { x: number; y: number };
  groundObjects: GroundObjects;
}

interface GroundObjects {
  gem?: true;
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

  const voidPattern = () => {
    const divStyle = {
      border: '1px solid gray',
      ...alignStyle,
      zIndex: 1,
    };

    const divAfterStyle = {
      content: '',
      position: 'absolute' as const,
      borderTop: '1px solid red',
      width: '40px',
      transform: 'rotate(45deg)',
      transformOrigin: '0% 0%',
    };

    return (
      <div style={divStyle}>
        <div style={divAfterStyle}></div>
      </div>
    );
  };

  const getTerrain = () => {
    const style = { ...alignStyle, zIndex: 1 };
    switch (terrain.block) {
      case Block.OPEN:
        return <div style={style}></div>;
      case Block.BLOCKED:
        return <div style={style}>⛰</div>;
      case Block.LOCK:
        return <div style={style}>🗝</div>;
      case Block.STAIR:
        if (groundObjects.stair) {
          switch (groundObjects.stair.dir) {
            case Direction.UP:
              return <div style={style}>🔼️</div>;
            case Direction.DOWN:
              return <div style={style}>🔽</div>;
            case Direction.LEFT:
              return <div style={style}>◀️</div>;
            case Direction.RIGHT:
              return <div style={style}>▶</div>;
          }
        } else {
          throw new Error('A stair block must be linked to stair object');
        }
      case Block.VOID:
        return voidPattern();
    }
  };

  const getObjects = () => {
    const gem = groundObjects.gem ? (
      <div style={{ ...alignStyle, zIndex: 7 }}>💎</div>
    ) : null;
    const beeper = groundObjects.beeper ? (
      <div style={{ ...alignStyle, zIndex: 6 }}>📹</div>
    ) : null;
    const aSwitch = groundObjects.aSwitch ? (
      groundObjects.aSwitch.on ? (
        <div style={{ ...alignStyle, zIndex: 5 }}>🔲</div>
      ) : (
        <div style={{ ...alignStyle, zIndex: 5 }}>🔳</div>
      )
    ) : null;
    const portal = groundObjects.portal ? (
      <div style={{ ...alignStyle, zIndex: 4 }}>💠</div>
    ) : null;
    const monster = groundObjects.monster ? (
      <div style={{ ...alignStyle, zIndex: 3 }}>😈</div>
    ) : null;
    const platform = groundObjects.platform ? (
      <div style={{ ...alignStyle, zIndex: 2 }}>_</div>
    ) : null;
    return (
      <div>
        {gem}
        {beeper}
        {aSwitch}
        {portal}
        {monster}
        {platform}
      </div>
    );
  };

  const getColor = (color?: Color) => {
    return color?.toString()?.toLowerCase() ?? 'white';
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

    const switchBiome = () => {
      switch (terrain.biome) {
        case Biome.SNOWY:
          return '雪山';
        case Biome.PLAINS:
          return '平地';
        case Biome.RAINY:
          return '雨林';
        case Biome.HELL:
          return '地狱';
      }
    };

    const biomeText = (
      <div>
        <p>生物群系: {switchBiome()}</p>
      </div>
    );
    const colorText = (
      <div>
        <p>颜色: {terrain.color}</p>
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

    return (
      <div>
        {terrainText}
        {biomeText}
        {colorText}
        {beeperText}
        {switchText}
        {portalText}
        {monsterText}
        {lockText}
        {platformText}
        {stairText}
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

  const alignStyle = {
    fontSize: `${fontSize}px`, // fixme 用固定百分比取代
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    display: 'flex' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    opacity: '0.6',
  };

  const contentStyle = {
    ...alignStyle,
    zIndex: 8,
    background: getColor(terrain.color),
    opacity: '0.6',
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
          {getTerrain()}
          {getObjects()}
          {getDir()}
        </div>
      </div>
    </Popover>
  );
};

export default Square;
