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
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Popover, Collapse, Tabs } from 'antd';
import { Coordinate, Grid, PlayerData } from '@/data/DataFragments';
import { Biome, Block, Color, Direction, Role } from '@/data/Enums';
import { useIntl } from 'umi';
import { renderMessage } from '@/locales/hook';

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
  const intl = useIntl();

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
      case Block.VOID:
        return voidPattern();
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
      <Tabs.TabPane tab={renderMessage(intl, 'square.isChar')} key="1">
        <p>{renderMessage(intl, 'square.player.id', { id: player.id })}</p>
        <p>
          {renderMessage(intl, 'square.player.coo', {
            x: player.x,
            y: player.y,
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.player.beeper', {
            num: player.hasBeeper ?? 0,
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.player.gem', {
            num: player.collectedGem ?? 0,
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.player.stamina', {
            count: player.stamina,
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.player.role', {
            role: player.role === Role.PLAYER ? 'Player' : 'Specialist',
          })}
        </p>
      </Tabs.TabPane>
    );
  };

  const getDirInfo = (dir: Direction) => {
    switch (dir) {
      case Direction.UP:
        return renderMessage(intl, 'square.direction.up');
      case Direction.DOWN:
        return renderMessage(intl, 'square.direction.down');
      case Direction.LEFT:
        return renderMessage(intl, 'square.direction.left');
      case Direction.RIGHT:
        return renderMessage(intl, 'square.direction.right');
    }
  };

  const getObjectInfo = () => {
    const terrainText =
      terrain.block === Block.BLOCKED ? (
        <div>
          <p>{renderMessage(intl, 'square.blocked')}</p>
        </div>
      ) : (
        <div>
          <p>{renderMessage(intl, 'square.open')}</p>
        </div>
      );

    const heightText = (
      <p>
        {renderMessage(intl, 'square.height', {
          height: terrain.level,
        })}
      </p>
    );

    const switchBiome = () => {
      switch (terrain.biome) {
        case Biome.SNOWY:
          return renderMessage(intl, 'square.biome.snowy');
        case Biome.PLAINS:
          return renderMessage(intl, 'square.biome.plains');
        case Biome.RAINY:
          return renderMessage(intl, 'square.biome.rainy');
        case Biome.HELL:
          return renderMessage(intl, 'square.biome.hell');
      }
    };

    const biomeText = (
      <p>
        {renderMessage(intl, 'square.biome.info')}
        {switchBiome()}
      </p>
    );
    const colorText = (
      <p>{renderMessage(intl, 'square.color', { color: terrain.color })}</p>
    );
    const gemText = groundObjects.beeper ? (
      <p>{renderMessage(intl, 'square.gem')}</p>
    ) : null;
    const beeperText = groundObjects.beeper ? (
      <p>{renderMessage(intl, 'square.beeper')}</p>
    ) : null;
    const switchText = groundObjects.aSwitch ? (
      <p>
        {renderMessage(intl, 'square.switch', {
          status: groundObjects.aSwitch.on
            ? renderMessage(intl, 'square.opened')
            : renderMessage(intl, 'square.closed'),
        })}
      </p>
    ) : null;

    const portalText = groundObjects.portal ? (
      // @ts-ignore
      <Collapse.Panel header={renderMessage(intl, 'square.portal')} key="1">
        <p>
          {renderMessage(intl, 'square.portal.dest', {
            x: groundObjects.portal.dest.x,
            y: groundObjects.portal.dest.y,
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.color', {
            color: getColor(groundObjects.portal.color),
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.energy', {
            energy: groundObjects.portal.energy,
          })}
        </p>
      </Collapse.Panel>
    ) : null;
    const monsterText = groundObjects.monster ? (
      <Collapse.Panel header={renderMessage(intl, 'square.monster')} key="2" />
    ) : null;
    const lockText = groundObjects.lock ? (
      // @ts-ignore
      <Collapse.Panel header={renderMessage(intl, 'square.lock')} key="3">
        <p>
          {renderMessage(intl, 'square.lock.controlled', {
            controlled: groundObjects.lock.controlled
              .map((e) => `(x:${e.x} y:${e.y})`)
              .join(', '),
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.lock.info', {
            status: groundObjects.lock.isActive
              ? renderMessage(intl, 'square.opened')
              : renderMessage(intl, 'square.closed'),
          })}
        </p>
        <p>
          {renderMessage(intl, 'square.energy', {
            energy: groundObjects.lock.energy,
          })}
        </p>
      </Collapse.Panel>
    ) : null;
    const platformText = groundObjects.platform ? (
      // @ts-ignore
      <Collapse.Panel header={renderMessage(intl, 'square.platform')} key="4">
        <p>
          {renderMessage(intl, 'square.height', {
            height: groundObjects.platform.level,
          })}
        </p>
      </Collapse.Panel>
    ) : null;
    const stairText = groundObjects.stair ? (
      // @ts-ignore
      <Collapse.Panel header={renderMessage(intl, 'square.stair')} key="5">
        <p>
          {renderMessage(intl, 'square.direction')}
          {getDirInfo(groundObjects.stair.dir)}
        </p>
      </Collapse.Panel>
    ) : null;

    return (
      <>
        <Tabs.TabPane tab={renderMessage(intl, 'square.info')} key="2">
          {terrainText}
          {biomeText}
          {colorText}
          {gemText}
          {beeperText}
          {switchText}
        </Tabs.TabPane>
        <Tabs.TabPane tab={renderMessage(intl, 'square.advanced')} key="3">
          {
            // @ts-ignore
            <Collapse defaultActiveKey={['1']}>
              {portalText}
              {monsterText}
              {lockText}
              {platformText}
              {stairText}
            </Collapse>
          }
        </Tabs.TabPane>
      </>
    );
  };

  const getPopoverContent = () => {
    return (
      <Tabs defaultActiveKey="1">
        {getPlayerInfo()}
        {getObjectInfo()}
      </Tabs>
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
