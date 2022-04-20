import React, { MouseEventHandler, useState } from 'react';
import { Button, Dropdown, Space, Row, Col, Menu, Card, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ContentEditable from 'react-contenteditable';
import { connect } from 'umi';
import Prism from 'prismjs';
import Editor from '@monaco-editor/react';
import MapSelector from '../fragments/MapSelector';
import { Theme, ThemeState } from '@/models/codescheme';

const namespace = 'codescheme';

interface InputBoxProps {
  onSubmit: MouseEventHandler<HTMLElement>;
  onReset: () => void;
  onChange: (arg0: string) => void;
  onAdd: (arg0: number, arg1: HTMLInputElement) => void;
  store: string;
  disabled: boolean;
  theme: Theme;
}

interface DropdownUnit {
  onClick: () => void;
  desc: string;
}

const dropdown = (items: DropdownUnit[]) => (
  <Menu>
    {items.map((e, i) => (
      <Menu.Item onClick={e.onClick} key={i}>
        {e.desc}
      </Menu.Item>
    ))}
  </Menu>
);

const regex = /<\/?.*?>/g;

const mapStateToProps = (state: ThemeStateToPropsMap) => {
  const { theme } = state[namespace];
  return { theme };
};

type ThemeStateToPropsMap = { codescheme: ThemeState };

const InputBox: React.FC<InputBoxProps> = (props) => {
  const [isModalDisplayed, setModalDisplayed] = useState(false);

  // const handleChange = data => {
  //   props.onChange(data);
  // };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props.onSubmit(event);
  };

  const handleReset = () => {
    props.onReset();
  };

  const handleAdd = (num: number) => {
    props.onAdd(
      num,
      document.getElementById('amatsukaze-code-editor') as HTMLInputElement,
    );
  };

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
    },
  ];
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
    },
  ];
  const moveForwardCommand = {
    desc: 'moveForward()',
    onClick: () => handleAdd(6),
  };
  const turnLeftCommand = {
    desc: 'turnLeft()',
    onClick: () => handleAdd(7),
  };
  const toggleCommands = [
    {
      desc: 'collectGem()',
      onClick: () => handleAdd(8),
    },
    {
      desc: 'toggleSwitch()',
      onClick: () => handleAdd(9),
    },
  ];
  const printCommand = {
    desc: 'print(...)',
    onClick: () => handleAdd(10),
  };
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
  ];

  return (
    <div>
      <Divider orientation="left">Playground</Divider>
      <MapSelector
        visible={isModalDisplayed}
        close={() => setModalDisplayed(false)}
      />
      <div style={{ marginTop: '16px', marginLeft: '16px' }}>
        <Button type="primary" onClick={() => setModalDisplayed(true)}>
          更换地图
        </Button>
      </div>
      <Divider orientation="left">输入指令</Divider>
      <div style={{ margin: '16px' }}>
        <Space wrap size="middle">
          {
            // FIXME find a solution for the no children error of Dropdown
            // @ts-ignore
            <Dropdown
              overlay={dropdown(blockedCommands)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                blocked指令 <DownOutlined />
              </Button>
            </Dropdown>
          }
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(isOnCommands)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                isOn指令 <DownOutlined />
              </Button>
            </Dropdown>
          }
          <Button onClick={moveForwardCommand.onClick}>moveForward</Button>
          <Button onClick={turnLeftCommand.onClick}>turnLeft</Button>
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(toggleCommands)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                toggle指令 <DownOutlined />
              </Button>
            </Dropdown>
          }
          <Button onClick={printCommand.onClick}>print(...)</Button>
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(structuralCommands)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                结构化指令 <DownOutlined />
              </Button>
            </Dropdown>
          }
        </Space>
      </div>
      <br />
      <div
        style={{
          width: '100%',
          height: '400px',
          overflow: 'scroll',
          border: '1px dashed #aaa',
        }}
      >
        {/*<Editor*/}
        {/*  value={props.store}*/}
        {/*  onValueChange={code => handleChange(code)}*/}
        {/*  textareaClassName='editor_textarea'*/}
        {/*  preClassName='editor_pre'*/}
        {/*  textareaId='amatsukaze-code-editor'*/}
        {/*  padding={10}*/}
        {/*  highlight={code => Prism.highlight(code, Prism.languages.swift, 'swift')}*/}
        {/*  style={{*/}
        {/*    'fontFamily': 'Fira Code, Iosevka, source-code-pro, Menlo, Monaco, Consolas, Droid Sans, monospace, sans-serif',*/}
        {/*    fontVariantLigatures: 'normal',*/}
        {/*    'resize': 'none',*/}
        {/*  }}*/}
        {/*/>*/}
        <Editor
          height="50vh"
          language="kotlin"
          theme={props.theme.toString()}
          value={props.store}
        />
      </div>
      <br />
      <Row justify="space-around" style={{ paddingBottom: '5%' }}>
        <Col
          span={6}
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={props.disabled}
          >
            ▶运行
          </Button>
        </Col>
        <Col
          span={6}
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button type="dashed" onClick={handleReset}>
            重置
          </Button>
        </Col>
      </Row>
      <Row justify="space-around" style={{ paddingBottom: '5%' }}>
        <Col span={12}>
          {/*<Card style={{*/}
          {/*  overflow: 'scroll',*/}
          {/*  overflowWrap: 'break-word',*/}
          {/*  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',*/}
          {/*  border: '1px solid #e8e8e8',*/}
          {/*}} title="备忘事项">*/}
          {/*  目前的Player结构还是写死在后端的，mock里面的player字段仅在initialize时被用到。*/}
          {/*  换地图的时候需要在后端更改对应的Player字段，并且重启一下后端。*/}
          {/*</Card>*/}
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps)(InputBox);
