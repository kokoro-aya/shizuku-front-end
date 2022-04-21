import React, { MouseEventHandler, useRef, useState } from 'react';
import { Button, Dropdown, Space, Row, Col, Menu, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import Editor, { OnMount } from '@monaco-editor/react';
import MapSelector from '../fragments/MapSelector';
import { Theme, ThemeState } from '@/models/codescheme';
import { editor } from 'monaco-editor';
import IStandaloneCodeEditor from 'monaco-editor';

import { clouds } from '@/styles/Clouds';
import { dawn } from '@/styles/Dawn';
import { dracula } from '@/styles/Dracula';
import { monokai } from '@/styles/Monokai';
import { oceanic_next } from '@/styles/Oceanic Next';
import { solarized_dark } from '@/styles/Solarized-dark';
import { solarized_light } from '@/styles/Solarized-light';
import { twilight } from '@/styles/Twilight';

const namespace = 'codescheme';

interface InputBoxProps {
  onSubmit: MouseEventHandler<HTMLElement>;
  onReset: () => void;
  onChange: (arg0: string) => void;
  onEditorChange: (value: string | undefined, ev: unknown) => void;
  store: string;
  disabled: boolean;
  theme: Theme;
}

interface DropdownUnit {
  desc: string;
  code: string;
}

const dropdown = (items: DropdownUnit[], editor: editor.IEditor) => (
  <Menu>
    {items.map((e, i) => (
      <Menu.Item
        onClick={() => editor.trigger('keyboard', 'type', { text: e.code })}
        key={i}
      >
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

  // @ts-ignore
  const monacoRef = useRef<IStandaloneCodeEditor>();

  const onEditorMount: OnMount = (editor, monaco) => {
    // @ts-ignore
    monaco.editor.defineTheme('clouds', clouds);
    // @ts-ignore
    monaco.editor.defineTheme('dawn', dawn);
    // @ts-ignore
    monaco.editor.defineTheme('dracula', dracula);
    // @ts-ignore
    monaco.editor.defineTheme('monokai', monokai);
    // @ts-ignore
    monaco.editor.defineTheme('oceanic-next', oceanic_next);
    // @ts-ignore
    monaco.editor.defineTheme('solarized-dark', solarized_dark);
    // @ts-ignore
    monaco.editor.defineTheme('solarized-light', solarized_light);
    // @ts-ignore
    monaco.editor.defineTheme('twilight', twilight);
    monacoRef.current = editor;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props.onSubmit(event);
  };

  const handleReset = () => {
    props.onReset();
  };

  const blockedCommands = [
    { desc: 'isBlocked', code: 'isBlocked ' },
    { desc: 'isBlockedLeft', code: 'isBlockedLeft ' },
    { desc: 'isBlockedRight', code: 'isBlockedRight ' },
  ];
  const isOnCommands = [
    { desc: 'isOnGem', code: 'isOnGem ' },
    { desc: 'isOnOpenedSwitch', code: 'isOnOpenedSwitch ' },
    { desc: 'isOnClosedSwitch', code: 'isOnClosedSwitch ' },
  ];
  const moveForwardCommand = {
    desc: 'moveForward()',
    code: `moveForward()
  `,
  };
  const turnLeftCommand = {
    desc: 'turnLeft()',
    code: `turnLeft()
  `,
  };
  const toggleCommands = [
    {
      desc: 'collectGem()',
      code: `collectGem()
    `,
    },
    {
      desc: 'toggleSwitch()',
      code: `toggleSwitch()
    `,
    },
  ];

  const printCommand = { desc: 'console.log(...)', code: 'console.log() ' };
  const structuralCommands = [
    {
      desc: 'for循环',
      code: `for (_ in 1 until 3) {
...`,
    },
    {
      desc: 'while循环',
      code: `while (cond) {
...`,
    },
    {
      desc: 'repeat循环',
      code: `repeat (3) {
...`,
    },
    {
      desc: '函数',
      code: `fun foo(): Unit {
...`,
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
              overlay={dropdown(blockedCommands, monacoRef.current!)}
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
              overlay={dropdown(isOnCommands, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                isOn指令 <DownOutlined />
              </Button>
            </Dropdown>
          }
          <Button
            onClick={() =>
              monacoRef.current!.trigger('keyboard', 'type', {
                text: moveForwardCommand.code,
              })
            }
          >
            moveForward
          </Button>
          <Button
            onClick={() =>
              monacoRef.current!.trigger('keyboard', 'type', {
                text: turnLeftCommand.code,
              })
            }
          >
            turnLeft
          </Button>
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(toggleCommands, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                toggle指令 <DownOutlined />
              </Button>
            </Dropdown>
          }
          <Button
            onClick={() =>
              monacoRef.current!.trigger('keyboard', 'type', {
                text: printCommand.code,
              })
            }
          >
            print(...)
          </Button>
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(structuralCommands, monacoRef.current!)}
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
          onChange={props.onEditorChange}
          onMount={onEditorMount}
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
