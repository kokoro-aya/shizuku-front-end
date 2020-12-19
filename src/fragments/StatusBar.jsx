import React from 'react'
import { Divider, Space, Badge } from 'antd'
import { StarTwoTone, BulbTwoTone } from '@ant-design/icons'

const StatusBar = (props) => {
  const { iconSize, gemInBag, gemOnGround, openedSwitch, closedSwitch } = props
  const spanStyle = { fontSize: `${Math.floor(iconSize*0.75)}px` }
  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
        <Divider orientation="left">当前状态</Divider>
        <Space size='large'>
          <StarTwoTone twoToneColor='#66ccff' style={{fontSize: `${iconSize}px`}} />
          <span style={spanStyle}>{gemInBag} / {gemOnGround}</span>
          <BulbTwoTone twoToneColor='#52c41a' style={{fontSize: `${iconSize}px`}} />
          <span style={spanStyle}>{openedSwitch} / {closedSwitch}</span>
        </Space>
      </div>
    </>
  )
}

export default StatusBar
