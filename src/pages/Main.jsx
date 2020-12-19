import React, {useEffect, useState} from 'react'
import {Row, Col, Divider, notification} from 'antd'
import InputBox from '../components/Input'
import Console from "../components/Console";
import Dashboard from '../components/Dashboard';
import {connect} from "../.umi/plugin-dva/exports";
import { count } from "../fragments/Utils";

const namespace = 'playground'

const regex = /<\/?.*?>/g

const activateNotification = (type, message = null, desc = null) => {
  switch (type) {
    case 'success':
      return notification['success']({
        message: message == null ? '任务执行成功' : message,
        description: desc == null ? '代码正在运行中……' : desc,
      })
    case 'info':
      return notification['info']({
        message: message == null ? '提示' : message,
        description: desc == null ? '虽然不知道发生了什么但是似乎很厉害的样子？' : desc,
      })
    case 'warning':
      return notification['warning']({
        message: message == null ? '警告' : message,
        description: desc == null ? '似乎有些不对劲' : desc,
      })
    case 'error':
      return notification['error']({
        message: message == null ? '错误' : message,
        description: desc == null ? '发生了一些错误' : desc,
      })
  }
}

const mapStateToProps = state => {
  const { answer, nextFrame } = state[namespace]
  return {
    answer, nextFrame
  }
}

const Main = (props) => {

  const [ firstLoad, setFirstLoad ] = useState(true)
  const [ code, setCode ] = useState("")
  const [ initialGem, setInitialGem ] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (firstLoad) {
        initialFetch()
        setFirstLoad(false)
      } else {
        getData()
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const initialFetch = () => {
    props.dispatch({
      type: `${namespace}/initialFetch`,
    })
  }

  const getData = () => {
    props.dispatch({
      type: `${namespace}/nextFrame`,
    })
    const { nextFrame, answer } = props
    if (nextFrame) {
      if (nextFrame.special === 'GEM') {
        return () => activateNotification('info', '消息', '捡到了一颗钻石。')
      }
      if (nextFrame.special === 'SWITCH') {
        return () => activateNotification('info', '消息', '按下了一个开关。')
      }
    }
    if (answer.length === 1) {
      return () => activateNotification('success', '任务执行成功', '程序执行完成。')
    }
  }

  const onClickReset = () => {
    setCode("<p>Input your <span style='color: red'>code</span>...</p>")
    props.dispatch({
      type: `${namespace}/initialFetch`,
    })
  }

  const onClickSubmit = (event) => {
    event.preventDefault()
    makeRequest()
  }

  const makeRequest = () => {
    props.dispatch({
      type: `${namespace}/handleSubmit`,
      payload: code.replace(regex, ''),
    })
  }

  const onChange = (data) => {
    setCode(data)
  }

  const onClickAdd = (num) => {
    switch (num) {
      case 0: {
        const newHTML = code + 'isBlocked '
        setCode(newHTML)
        break
      }
      case 1: {
        const newHTML = code + 'isBlockedLeft '
        setCode(newHTML)
        break
      }
      case 2: {
        const newHTML = code + 'isBlockedRight '
        setCode(newHTML)
        break
      }
      case 3: {
        const newHTML = code + 'isOnGem '
        setCode(newHTML)
        break
      }
      case 4: {
        const newHTML = code + 'isOnOpenedSwitch '
        setCode(newHTML)
        break
      }
      case 5: {
        const newHTML = code + 'isOnClosedSwitch '
        setCode(newHTML)
        break
      }
      case 6: {
        const newHTML = code + 'moveForward() '
        setCode(newHTML)
        break
      }
      case 7: {
        const newHTML = code + 'turnLeft() '
        setCode(newHTML)
        break
      }
      case 8: {
        const newHTML = code + 'collectGem() '
        setCode(newHTML)
        break
      }
      case 9: {
        const newHTML = code + 'toggleSwitch '
        setCode(newHTML)
        break
      }
      case 10: {
        const newHTML = code + 'print() '
        setCode(newHTML)
        break
      }
      case 11: {
        const newHTML = code + 'for _ in 1 ... 3 { } '
        setCode(newHTML)
        break
      }
      case 12: {
        const newHTML = code + 'while cond { } '
        setCode(newHTML)
        break
      }
      case 13: {
        const newHTML = code + 'repeat { } while cond '
        setCode(newHTML)
        break
      }
      case 14: {
        const newHTML = code + 'func foo() -> Void { } '
        setCode(newHTML)
        break
      }
    }
  }

  const renderInput = (submit, reset, change, add) => {
    return (
      <InputBox onSubmit={submit} onReset={reset} onChange={change} onAdd={add} />
    )
  }

  const renderDashboard = (initialGem, grid, player) => {
    return (
      <Dashboard initialGem={initialGem} grid={grid} player={player} />
    )
  }

  const renderConsole = (output) => {
    return (
      <Console output={output} />
    )
  }

  return (
    <div style={{
      minHeight: '600px',
      overflow: 'hidden',
    }}>
      <Divider orientation='left'>Playground</Divider>
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          {renderInput(onClickSubmit, onClickReset, onChange, onClickAdd)}
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12} style={{
          background: 'white',
          minHeight: '600px',
          overflow: 'scroll',
          overflowWrap: 'break-word',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          border: '1px solid #e8e8e8',
        }}>
          <Row>
            {renderDashboard(props.nextFrame.initialGem, props.nextFrame.grid, props.nextFrame.player)}
          </Row>
          <Row>
            {renderConsole(props.nextFrame.output)}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default connect(mapStateToProps)(Main)
