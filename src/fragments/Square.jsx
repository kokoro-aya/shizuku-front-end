import React from 'react'
import { UpOutlined, RightOutlined, DownOutlined, LeftOutlined } from '@ant-design/icons'
import arrow from '../resources/arrow.png'
import styles from './SquareLayout.css'

const Square = (props) => {

  const fontSize = props.fontSize

  const getDir = (props) => {
    const { isPlayer } = props
    if (isPlayer) {
      const { dir } = props
      if (dir === 'RIGHT')
        return <RightOutlined />;
      if (dir === 'UP')
        return <UpOutlined />;
      if (dir === 'DOWN')
        return <DownOutlined />;
      if (dir === 'LEFT')
        return <LeftOutlined />;
    }
    else return null
  }
  const getValue = () => {
    // const { value: { status } } = this.props
    const { value } = props
    if (value === 'BLOCKED')
      return "🏔";
    if (value === 'GEM')
      return '💎';
    if (value === 'OPENEDSWITCH')
      return '🔲';
    if (value === 'CLOSEDSWITCH')
      return '🔳';
    return null;
  }
  // const getColor = () => {
  //   const { value: { color } } = this.props
  //   return color
  // }

  const contentStyle = {
    fontSize: `${fontSize}px`,
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'fill',
    overflow: 'hidden',
  }

  return (
      <div style={props.style} className={ 'square' /* && getColor() */ }>
        <div style={contentStyle} className="subsquare">{getValue(props)}</div>
        {getDir(props, imgStyle)}
      </div>
  )
}

export default Square
