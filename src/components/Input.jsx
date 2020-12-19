import React from 'react'
import { Button, Dropdown, Space, Row, Col, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import ContentEditable from "react-contenteditable"
import { connect } from 'dva'
import Prism from 'prismjs'
import Editor from 'react-simple-code-editor'
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

const InputBox = props => {

  const handleChange = (data) => {
    props.onChange(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit(event)
  }

  const handleReset = () => {
    props.onReset()
  }

  const handleAdd = (num) => {
    props.onAdd(num)
  }



  const blockedCommands = [
    {
      desc: 'isBlocked',
      onClick: () => handleAdd(0),
    },
    {
      desc: 'isBlockedLeft',
      onClick: () => handleAdd(1),
    },
    {
      desc: 'isBlockedRight',
      onClick: () => handleAdd(2),
    }
  ]
  const isOnCommands = [
    {
      desc: 'isOnGem',
      onClick: () => handleAdd(3),
    },
    {
      desc: 'isOnOpenedSwitch',
      onClick: () => handleAdd(4),
    },
    {
      desc: 'isOnClosedSwitch',
      onClick: () => handleAdd(5),
    }
  ]
  const moveForwardCommand = {
    desc: 'moveForward()',
    onClick: () => handleAdd(6),
  }
  const turnLeftCommand = {
    desc: 'turnLeft()',
    onClick: () => handleAdd(7),
  }
  const toggleCommands = [
    {
      desc: 'collectGem()',
      onClick: () => handleAdd(8),
    },
    {
      desc: 'toggleSwitch()',
      onClick: () => handleAdd(9),
    },
  ]
  const printCommand = {
    desc: 'print(...)',
    onClick: () => handleAdd(10),
  }
  const structuralCommands = [
    {
      desc: 'for循环',
      onClick: () => handleAdd(11),
    },
    {
      desc: 'while循环',
      onClick: () => handleAdd(12),
    },
    {
      desc: 'repeat循环',
      onClick: () => handleAdd(13),
    },
    {
      desc: '函数',
      onClick: () => handleAdd(14),
    },
  ]

  return (
    <div>
      <div style={{margin: '16px'}}>
        <Space wrap size='middle'>
          <Dropdown overlay={dropdown(blockedCommands)} placement="bottomLeft" arrow>
            <Button>blocked指令 <DownOutlined/></Button>
          </Dropdown>
          <Dropdown overlay={dropdown(isOnCommands)} placement="bottomLeft" arrow>
            <Button>isOn指令 <DownOutlined/></Button>
          </Dropdown>
          <Button onClick={moveForwardCommand.onClick}>moveForward</Button>
          <Button onClick={turnLeftCommand.onClick}>turnLeft</Button>
          <Dropdown overlay={dropdown(toggleCommands)} placement="bottomLeft" arrow>
            <Button>toggle指令 <DownOutlined/></Button>
          </Dropdown>
          <Button onClick={printCommand.onClick}>print(...)</Button>
          <Dropdown overlay={dropdown(structuralCommands)} placement="bottomLeft" arrow>
            <Button>结构化指令 <DownOutlined/></Button>
          </Dropdown>
        </Space>
      </div>
      <br/>
      <div style={{
        'width': '100%',
        'height': '400px',
        'overflow': 'scroll',
        'border': '1px dashed #aaa',
      }}>
        <Editor
          value={props.store}
          onValueChange={code => handleChange(code)}
          textareaClassName='editor_textarea'
          preClassName='editor_pre'
          padding={10}
          highlight={code => Prism.highlight(code, Prism.languages.swift, 'swift')}
          style={{
            'fontFamily': 'monospace',
            'resize': 'none',
          }}
        />
      </div>
      <br/>
      <Row justify="space-around" style={{ paddingBottom: '5%'}}>
        <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button type="primary" onClick={handleSubmit}>▶运行</Button>
        </Col>
        <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button type="dashed" onClick={handleReset}>清空</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect()(InputBox)
