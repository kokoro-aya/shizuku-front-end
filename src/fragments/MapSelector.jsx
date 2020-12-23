import React, {useState} from 'react'
import {Modal, Cascader, Switch, Row, Col, Space, Slider, Radio, Divider} from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

const Customizable = (props) => {

  if (!props.check) {
    return null
  }

  const onHorizontalChange = value => {
    props.onHorizontalChange(value)
  }

  const onVerticalChange = value => {
    props.onVerticalChange(value)
  }

  const onDirectionChange = e => {
    props.onDirectionChange(e.target.value)
  }

  return (
    <div>
      <Row gutter={16}>
        <Col span={16} style={{minHeight: '400px'}}>

        </Col>
        <Col span={8}>
          <Space direction='vertical'>
            <div>
              <Divider orientation='left'>横坐标</Divider>
              <Slider min={0} max={10} defaultValue={5} onChange={onHorizontalChange} />
            </div>
            <div>
              <Divider orientation='left'>纵坐标</Divider>
              <Slider min={0} max={10} defaultValue={5} onChange={onVerticalChange}/>
            </div>

            <Radio.Group onChange={onDirectionChange} value={props.dir}>
              <Divider orientation='left'>玩家面对的方向</Divider>
              <Radio value='up'>上</Radio>
              <Radio value='down'>下</Radio>
              <Radio value='left'>左</Radio>
              <Radio value='right'>右</Radio>
            </Radio.Group>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

const MapSelector = (props) => {

  const [ check, setCheck ] = useState(false)

  const options = [{
    value: 'simple',
    label: '简单',
    children: [{
      value: 'plain',
      label: '平原',
    }, {
      value: '3-walls',
      label: '三堵墙',
    },{
      value: 'helloworld',
      label: '你好世界',
    }],
  },{
    value: 'maze',
    label: '迷宫',
    children: [
      {
        value: 'go-and-back',
        label: '回形路径',
      },{
        value: 'labyrinth',
        label: '迷宫',
      }],
  },{
    value: 'mountainous',
    label: '丘陵',
    children: [
      {
        value: 'mountains',
        label: '崇山峻岭',
      },{
        value: 'small-path',
        label: '小径',
      },{
        value: 'zigzag',
        label: 'Z字',
      }
    ]
  },]

  const onCascadeChange = value => {
    console.log("Cascade: " + value)
  }

  const handleHorizontalChange = value => {
    console.log("Horizontal: " + value)
  }

  const handleVerticalChange = value => {
    console.log("Vertical" + value)
  }

  const handleDirectionChange = value => {
    console.log("Direction" + value)
  }

  const handleOk = () => {
    props.close()
  }

  const handleCancel = () => {
    props.close()
  }

  return (
    <Modal width='60%' title="选择一张地图" visible={props.visible} onOk={handleOk} onCancel={handleCancel}>
      <div style={{ padding: '16px' }}>
        <Cascader options={options} placeholder='请选择一张地图' onChange={onCascadeChange} />
      </div>
      <div style={{ padding: '16px' }}>
        <Switch checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={ () => setCheck(!check) }
                style={{ marginRight: '16px' }}
        />
        自定义地图初始化
      </div>
      <Customizable check={check}
                    onHorizontalChange={handleHorizontalChange}
                    onVerticalChange={handleVerticalChange}
                    onDirectionChange={handleDirectionChange}
                    dir='up'
      />
    </Modal>
  )
}

export default MapSelector
