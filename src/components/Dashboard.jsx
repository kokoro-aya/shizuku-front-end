import Square from "../fragments/Square";
import React from "react";
import {Col, Row} from 'antd';
import StatusBar from "../fragments/StatusBar";
import { count } from "../fragments/Utils";
import styles from './DashboardLayout.css';
import ProgressBar from "../fragments/ProgressBar";

const Dashboard = (props) => {
  const width = props.grid[0].length
  const fontSize =  Math.round(320 / width)
  const { initialGem, current, aLength } = props
  const gemOnGround = count(props.grid, 'GEM')
  const openedSwitch = count(props.grid, 'OPENEDSWITCH')
  const closedSwitch = count(props.grid, 'CLOSEDSWITCH')

  const renderGrid = (grid, player, size) => {
    return grid.map((gridRow, y) => {
      const row = gridRow.map((gridItem, x) => {
        const key = y * gridRow.length + x
        if (player.y * gridRow.length + player.x === key) {
          return (
            // <Square className={styles.sq} value={gridItem} dir={player.dir} isPlayer={true} key={key}/>
              <Square style={squareStyle} value={gridItem} dir={player.dir} isPlayer={true} fontSize={size} key={key} />
          )
        } else {
          return (
            // <Square className={styles.sq} value={gridItem} isPlayer={false} key={key}/>
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
    border: '1px dotted grey',
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
        <StatusBar iconSize={fontSize} gemInBag={initialGem - gemOnGround} gemOnGround={gemOnGround} openedSwitch={openedSwitch} closedSwitch={closedSwitch} />
      </Row>
      <Row>
        {/*<div className={styles.wrapperGrid}>*/}
        <div style={wrapperStyle} >
          {renderGrid(props.grid, props.player, fontSize)}
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

