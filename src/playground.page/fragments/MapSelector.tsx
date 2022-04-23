import React, { useEffect, useState } from 'react';
import {
  Modal,
  Cascader,
  Row,
  Col,
  Space,
  Slider,
  Radio,
  Divider,
  RadioChangeEvent,
} from 'antd';
import { CompatibleDispatchSender } from '@/models/dispatch.type';
import { MapSelectStates } from '@/models/mapselect.types';
import { connect } from 'umi';

interface CustomizableProps {
  check: boolean;
  dir: string;
  onHorizontalChange: (arg0: number) => void;
  onVerticalChange: (arg0: number) => void;
  onDirectionChange: (arg0: string) => void;
}

const Customizable: React.FC<CustomizableProps> = (props) => {
  if (!props.check) {
    return null;
  }

  const onHorizontalChange = (value: number) => {
    props.onHorizontalChange(value);
  };

  const onVerticalChange = (value: number) => {
    props.onVerticalChange(value);
  };

  const onDirectionChange = (e: RadioChangeEvent) => {
    props.onDirectionChange(e.target.value);
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={16} style={{ minHeight: '400px' }}></Col>
        <Col span={8}>
          <Space direction="vertical">
            <div>
              <Divider orientation="left">横坐标</Divider>
              <Slider
                min={0}
                max={10}
                defaultValue={5}
                onChange={onHorizontalChange}
              />
            </div>
            <div>
              <Divider orientation="left">纵坐标</Divider>
              <Slider
                min={0}
                max={10}
                defaultValue={5}
                onChange={onVerticalChange}
              />
            </div>

            <Radio.Group onChange={onDirectionChange} value={props.dir}>
              <Divider orientation="left">玩家面对的方向</Divider>
              <Radio value="up">上</Radio>
              <Radio value="down">下</Radio>
              <Radio value="left">左</Radio>
              <Radio value="right">右</Radio>
            </Radio.Group>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

const namespace = 'mapselect' as const;

const mapStateToProps = (state: MapSelectorStateToPropsMap) => {
  const { maps, current } = state[namespace];
  return { maps, current };
};

type MapSelectorStateToPropsMap = { mapselect: MapSelectStates };

interface MapSelectorProps extends MapSelectStates, CompatibleDispatchSender {
  onSelect: (arg0?: string) => void;
  visible: boolean;
  close: () => void;
}

const MapSelector: React.FC<MapSelectorProps> = (props) => {
  const [check, setCheck] = useState(false);

  const [path, setPath] = useState<string | undefined>(undefined);

  const initialFetch = () => {
    props.dispatch!({
      type: `${namespace}/fetch`,
      payload: '',
    });
  };

  const onCascadeChange = (value: (string | number)[]) => {
    setPath(value.join('/'));
  };

  const handleHorizontalChange = (value: number) => {
    console.log('Horizontal: ' + value);
  };

  const handleVerticalChange = (value: number) => {
    console.log('Vertical' + value);
  };

  const handleDirectionChange = (value: string) => {
    console.log('Direction' + value);
  };

  const handleCancel = () => {
    props.close();
  };

  return (
    <>
      {
        // @ts-ignore
        <Modal
          width="60%"
          title="选择一张地图"
          visible={props.visible}
          onOk={() => {
            props.onSelect(path);
            props.close();
          }}
          onCancel={handleCancel}
        >
          <div style={{ padding: '16px' }}>
            <Cascader
              options={props.maps}
              placeholder="请选择一张地图"
              onChange={onCascadeChange}
              onDropdownVisibleChange={initialFetch}
            />
          </div>
          {/*<div style={{ padding: '16px' }}>*/}
          {/*  <Switch*/}
          {/*    checkedChildren={<CheckOutlined />}*/}
          {/*    unCheckedChildren={<CloseOutlined />}*/}
          {/*    onChange={() => setCheck(!check)}*/}
          {/*    style={{ marginRight: '16px' }}*/}
          {/*  />*/}
          {/*  自定义地图初始化*/}
          {/*</div>*/}
          {/*<Customizable*/}
          {/*  check={check}*/}
          {/*  onHorizontalChange={handleHorizontalChange}*/}
          {/*  onVerticalChange={handleVerticalChange}*/}
          {/*  onDirectionChange={handleDirectionChange}*/}
          {/*  dir="up"*/}
          {/*/>*/}
        </Modal>
      }
    </>
  );
};

export default connect(mapStateToProps)(MapSelector);
