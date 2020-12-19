import React from 'react'
import { Button, Dropdown, Space, Row, Col, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import ContentEditable from "react-contenteditable"
import { connect } from 'dva'
import Prism from 'prismjs'
require('prismjs/components/prism-swift.min')

const dropdown = (items) => (
  <Menu>
    { items.map((e, i) => (
      <Menu.Item onClick={e.onClick} key={i}>
        {e.desc}
      </Menu.Item>
    ))}
  </Menu>
)

const regex = /<\/?.*?>/g

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef()
    this.state = {code: ""}
  }

  handleChange = (event) => {
    this.setState({code: event.target.value})
    this.props.onChange(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(event)
  }

  handleReset = () => {
    this.setState({ code: ""})
    this.props.onReset()
  }

  handleAdd = (num) => {
    this.props.onAdd(num)
  }

  blockedCommands = [
    {
      desc: 'isBlocked',
      onClick: () => this.handleAdd(0),
    },
    {
      desc: 'isBlockedLeft',
      onClick: () => this.handleAdd(1),
    },
    {
      desc: 'isBlockedRight',
      onClick: () => this.handleAdd(2),
    }
  ]
  isOnCommands = [
    {
      desc: 'isOnGem',
      onClick: () => this.handleAdd(3),
    },
    {
      desc: 'isOnOpenedSwitch',
      onClick: () => this.handleAdd(4),
    },
    {
      desc: 'isOnClosedSwitch',
      onClick: () => this.handleAdd(5),
    }
  ]
  moveForwardCommand = {
    desc: 'moveForward()',
    onClick: () => this.handleAdd(6),
  }
  turnLeftCommand = {
    desc: 'turnLeft()',
    onClick: () => this.handleAdd(7),
  }
  toggleCommands = [
    {
      desc: 'collectGem()',
      onClick: () => this.handleAdd(8),
    },
    {
      desc: 'toggleSwitch()',
      onClick: () => this.handleAdd(9),
    },
  ]
  printCommand = {
    desc: 'print(...)',
    onClick: () => this.handleAdd(10),
  }
  structuralCommands = [
    {
      desc: 'for循环',
      onClick: () => this.handleAdd(11),
    },
    {
      desc: 'while循环',
      onClick: () => this.handleAdd(12),
    },
    {
      desc: 'repeat循环',
      onClick: () => this.handleAdd(13),
    },
    {
      desc: '函数',
      onClick: () => this.handleAdd(14),
    },
  ]

  render() {
    return (
      <div>
        <div style={{margin: '16px'}}>
          <Space wrap size='middle'>
            <Dropdown overlay={dropdown(this.blockedCommands)} placement="bottomLeft" arrow>
              <Button>blocked指令 <DownOutlined/></Button>
            </Dropdown>
            <Dropdown overlay={dropdown(this.isOnCommands)} placement="bottomLeft" arrow>
              <Button>isOn指令 <DownOutlined/></Button>
            </Dropdown>
            <Button onClick={this.moveForwardCommand.onClick}>moveForward</Button>
            <Button onClick={this.turnLeftCommand.onClick}>turnLeft</Button>
            <Dropdown overlay={dropdown(this.toggleCommands)} placement="bottomLeft" arrow>
              <Button>toggle指令 <DownOutlined/></Button>
            </Dropdown>
            <Button onClick={this.printCommand.onClick}>print(...)</Button>
            <Dropdown overlay={dropdown(this.structuralCommands)} placement="bottomLeft" arrow>
              <Button>结构化指令 <DownOutlined/></Button>
            </Dropdown>
          </Space>
        </div>
        <br/>
        <pre>
          <code></code>
          <ContentEditable
            innerRef={this.contentEditable}
            html={this.state.code}
            disabled={false}
            onChange={this.handleChange}
            style={{
              'width': '100%',
              'height': '400px',
              'fontFamily': 'monospace',
              'border': '1px dashed #aaa',
              'padding': '5px',
              'resize': 'none',
              'lineHeight': '100%',
              'overflow': 'scroll',
            }}
          />
        </pre>
        <br/>
        <Row justify="space-around" style={{ paddingBottom: '5%'}}>
          <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button type="primary" onClick={this.handleSubmit}>▶运行</Button>
          </Col>
          <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button type="dashed" onClick={this.handleReset}>清空</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect()(InputBox)
