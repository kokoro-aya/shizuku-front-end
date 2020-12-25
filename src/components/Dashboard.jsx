import Square from "../fragments/Square";
import React from "react";
import {Col, Row} from 'antd';
import StatusBar from "../fragments/StatusBar";
import { count } from "../fragments/Utils";
import styles from './DashboardLayout.css';
import ProgressBar from "../fragments/ProgressBar";

const Dashboard = (props) => {
  const width = props.grid.grid[0].length
  const fontSize =  Math.round(320 / width)
  const { initialGem, current, aLength } = props
  const gemOnGround = count(props.grid.layout, 'GEM')
  const openedSwitch = count(props.grid.layout, 'OPENEDSWITCH')
  const closedSwitch = count(props.grid.layout, 'CLOSEDSWITCH')
  // const beeperInBag = // TODO
  const beeperAtGround = count(props.grid.layout, "BEEPER")

  const preprocessGrid = (grid, layout, layout2s, players, locks) => {
    return grid.flatMap((gridRow, y) => {
      const row = gridRow.map((gridItem, x) => {
        if (players.filter(p => p.x === x && p.y === y).length !== 0) {
          return {
            x: x,
            y: y,
            grid: grid[y][x],
            layout: layout[y][x],
            color: layout2s[y][x].color,
            level: layout2s[y][x].level,
            isPlayer: true,
            playerId: players.filter(p => p.x === x && p.y === y)[0].id,
            // TODO: collectedGem, stamina, beeperInBag
          }
        } else if (locks.filter(p => p.coo.x === x && p.coo.y === y).length !== 0) {
          return {
            x: x,
            y: y,
            grid: grid[y][x],
            layout: layout[y][x],
            color: layout2s[y][x].color,
            level: layout2s[y][x].level,
            isPlayer: false,
            lockInfo: locks.filter(p => p.coo.x === x && p.coo.y === y)[0].controlled,
          }
        } else {
          return {
            x: x,
            y: y,
            grid: grid[y][x],
            layout: layout[y][x],
            color: layout2s[y][x].color,
            level: layout2s[y][x].level,
            isPlayer: false,
          }
        }
      })
      return [row]
    })
  }

  const renderGrid = (grid, players, locks, size) => {
    const preprocessedGrid = preprocessGrid(grid.grid, grid.layout, grid.layout2s, players, locks)

    return preprocessedGrid.map((gridRow, y) => {
      const row = gridRow.map((gridItem, x) => {
        const key = y * gridRow.length + x
        if (gridItem.isPlayer) {
          const p = players.filter(e => e.x === x && e.y === y)
          return (
            <Square style={squareStyle} value={gridItem} dir={p[0].dir} isPlayer={true} fontSize={size} key={key} />
          )
        } else {
          return (
            <Square style={squareStyle} value={gridItem} isPlayer={false} fontSize={size} key={key} />
          )
        }
      })
      return [row]
    })
  }

  const beforeStyle = {
    display: 'inline-block',
    paddingTop: '100%',
  }
  const squareStyle = {
    border: '0.5px dotted grey',
    position: 'relative',
  }
  const wrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    padding: '5%',
  }

  return (
    <Col span={24}>
      <Row>
        <StatusBar iconSize={fontSize} gemInBag={initialGem - gemOnGround}
                   gemOnGround={gemOnGround} openedSwitch={openedSwitch}
                   closedSwitch={closedSwitch} beeperAtGround={beeperAtGround} status={props.status} />
      </Row>
      <Row>
        {/*<div className={styles.wrapperGrid}>*/}
        <div style={wrapperStyle} >
          {renderGrid(props.grid, props.players, props.locks, fontSize)}
        </div>
      </Row>
      <Row>
        <ProgressBar curr={current} total={aLength} />
      </Row>
    </Col>
  )
}
export default Dashboard;

// reference: https://stackoverflow.com/questions/14141374/using-css-before-and-after-pseudo-elements-with-inline-css/14141821#14141821

