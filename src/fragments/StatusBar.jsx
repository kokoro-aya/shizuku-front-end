import React from 'react'
import {Divider, Space, Badge, Tag} from 'antd'
import { StarTwoTone, BulbTwoTone, AlertTwoTone } from '@ant-design/icons'

const StatusBar = (props) => {
  const { iconSize, gemInBag, gemOnGround, openedSwitch, closedSwitch } = props
  const spanStyle = { fontSize: `${iconSize > 44 ? 33 : Math.floor(iconSize*0.75)}px` }
  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
        <Divider orientation="left">当前状态</Divider>
        <Space wrap size='middle'>
          <StarTwoTone twoToneColor='#66ccff' style={{fontSize: `${iconSize < 32 ? iconSize : 32}px`}} />
          <Tag style={spanStyle} color='blue'>Gem: {gemInBag} / {gemOnGround}</Tag>
          <BulbTwoTone twoToneColor='#52c41a' style={{fontSize: `${iconSize < 32 ? iconSize : 32}px`}} />
          <Tag style={spanStyle} color='green'>Switch: {openedSwitch} / {closedSwitch}</Tag>
          <AlertTwoTone twoToneColor='#f7c242' style={{fontSize: `${iconSize < 32 ? iconSize : 32}px`}} />
          <Tag style={spanStyle} color='orange'>Beeper: 0 / 0</Tag>
        </Space>
      </div>
    </>
  )
}

export default StatusBar
