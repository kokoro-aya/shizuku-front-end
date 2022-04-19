import Square from '../fragments/Square';
import React from 'react';
import { Col, Row } from 'antd';
import StatusBar from '../fragments/StatusBar';
import styles from './DashboardLayout.css';
import ProgressBar from '../fragments/ProgressBar';
import { Coordinate } from '@/data/DataFragments';
import { ExecutionStatus } from '@/pages/Playground';
import { Frame } from '@/models/types';
import * as _ from 'lodash';
import { Color } from '@/data/Enums';

interface DashboardProp {
  frame: Frame;
  initialGem: number;
  current: number;
  aLength: number;
  status: ExecutionStatus;
}

export interface PreprocessedGrid {
  layout: string;
  isPlayer: boolean;
  lockInfo?: Coordinate[];
  color: string;
  level: number;
  grid: string;
  x: number;
  y: number;
  playerId?: number;
}

const Dashboard: React.FC<DashboardProp> = (props) => {
  const width = props.frame.grid[0].length;
  const fontSize = Math.round(320 / width);
  const { initialGem, frame, current, aLength } = props;
  const openedSwitch = frame.switches.filter((e) => e.on).length;
  const closedSwitch = frame.switches.filter((e) => !e.on).length;

  const gemOnGround = frame.gems.length;
  const beeperAtGround = frame.beepers.length;

  const collectedGems = _.sum(frame.players.map((e) => e.collectedGem));
  const beepersInBags = _.sum(frame.players.map((e) => e.hasBeeper));

  const preprocessGrid = (frame: Frame) => {
    return frame.grid.flatMap((gridRow, y) => {
      const row = gridRow.map((gridItem, x) => {
        const aSwitch = frame.switches.find(
          (p) => p.coo.x === x && p.coo.y === y,
        );
        const portal = frame.portals.find(
          (p) => p.coo.x === x && p.coo.y === y,
        );
        const lock = frame.locks.find((p) => p.coo.x === x && p.coo.y === y);
        const platform = frame.platforms.find(
          (p) => p.coo.x === x && p.coo.y === y,
        );
        const stair = frame.stairs.find((p) => p.coo.x === x && p.coo.y === y);
        return {
          player: frame.players.find((p) => p.x === x && p.y === y),
          terrain: gridItem,
          groundObjects: {
            beeper:
              frame.beepers.find((p) => p.x === x && p.y === y) === undefined
                ? undefined
                : (true as const),
            aSwitch: aSwitch
              ? aSwitch.on
                ? { on: true }
                : { on: false }
              : undefined,
            portal:
              portal === undefined
                ? undefined
                : {
                    dest: portal.dest,
                    color: portal.color ?? Color.WHITE,
                    energy: portal.energy,
                  },
            monster:
              frame.monsters.find((p) => p.x === x && p.y === y) === undefined
                ? undefined
                : (true as const),
            lock:
              lock === undefined
                ? undefined
                : {
                    controlled: lock.controlled!,
                    isActive: lock.isActive,
                    energy: lock.energy,
                  },
            platform:
              platform === undefined ? undefined : { level: platform.level },
            stair: stair === undefined ? undefined : { dir: stair.dir },
          },
        };
      });
      return [row];
    });
  };

  const renderGrid = (size: number) => {
    const preprocessedGrid = preprocessGrid(frame);

    return preprocessedGrid.map((gridRow, y) => {
      const row = gridRow.map((gridItem, x) => {
        const key = y * gridRow.length + x;
        const coo = { x: x, y: y };
        return (
          <Square
            fontSize={size}
            player={gridItem.player}
            terrain={gridItem.terrain}
            groundObjects={gridItem.groundObjects}
            coo={coo}
            key={key}
          />
        );
      });
      return [row];
    });
  };

  const getStatus = (s: ExecutionStatus) => {
    switch (s) {
      case ExecutionStatus.Err:
        return 'exception';
      case ExecutionStatus.Idle:
        return 'normal';
      case ExecutionStatus.Processing:
        return 'active';
      case ExecutionStatus.Success:
        return 'success';
      case ExecutionStatus.Impossible:
        return 'exception';
    }
  };

  const beforeStyle = {
    display: 'inline-block',
    paddingTop: '100%',
  };
  const wrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    padding: '5%',
  };

  return (
    <Col span={24}>
      <Row>
        <StatusBar
          iconSize={fontSize}
          gemInBag={initialGem - gemOnGround}
          gemOnGround={gemOnGround}
          openedSwitch={openedSwitch}
          closedSwitch={closedSwitch}
          beeperAtGround={beeperAtGround}
          status={getStatus(props.status)}
        />
      </Row>
      <Row>
        {/*<div className={styles.wrapperGrid}>*/}
        <div style={wrapperStyle}>{renderGrid(fontSize)}</div>
      </Row>
      <Row>
        <ProgressBar curr={current} total={aLength} />
      </Row>
    </Col>
  );
};
export default Dashboard;

// reference: https://stackoverflow.com/questions/14141374/using-css-before-and-after-pseudo-elements-with-inline-css/14141821#14141821
