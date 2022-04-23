import React, { MouseEventHandler, useRef, useState } from 'react';
import { Button, Dropdown, Space, Row, Col, Menu, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect, useIntl } from 'umi';
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

  // Global

  const initPlayers = [
    {
      desc: useIntl().formatMessage({ id: 'playground.input.player' }),
      code: 'Player()',
    },
    {
      desc: useIntl().formatMessage({ id: 'playground.input.specialist' }),
      code: 'Specialist()',
    },
    {
      desc: useIntl().formatMessage({ id: 'playground.input.playerNull' }),
      code: 'PlayerOrNull()',
    },
    {
      desc: useIntl().formatMessage({ id: 'playground.input.specialistNull' }),
      code: 'SpecialistOrNull()',
    },
  ];

  const allCounters = [
    { desc: 'allGemCollected', code: 'allGemCollected ' },
    { desc: 'allGemLeft', code: 'allGemLeft ' },
    { desc: 'allBeeperCollected', code: 'allBeeperCollected ' },
    { desc: 'allBeeperLeft', code: 'allBeeperLeft ' },
    { desc: 'allOpenedSwitch', code: 'allOpenedSwitch ' },
    { desc: 'allBeeperCollected', code: 'allClosedSwitch ' },
  ];

  // Per player

  const blockedCommands = [
    { desc: 'isBlocked', code: 'isBlocked ' },
    { desc: 'isBlockedLeft', code: 'isBlockedLeft ' },
    { desc: 'isBlockedRight', code: 'isBlockedRight ' },
  ];
  const isOnCommands = [
    { desc: 'isAlive', code: 'isAlive ' },
    { desc: 'isOnGem', code: 'isOnGem ' },
    { desc: 'isOnOpenedSwitch', code: 'isOnOpenedSwitch ' },
    { desc: 'isOnClosedSwitch', code: 'isOnClosedSwitch ' },
    { desc: 'isOnBeeper', code: 'isOnBeeper ' },
    { desc: 'isOnPortal', code: 'isOnPortal ' },
    { desc: 'isOnPlatform', code: 'isOnPlatform ' },
    { desc: 'isBeforeMonster', code: 'isBeforeMonster ' },
  ];

  const collectedVars = [
    { desc: 'collectedGem', code: 'collectedGem ' },
    { desc: 'collectedBeeper', code: 'collectedBeeper ' },
  ];

  const moveForwardCommand = {
    desc: 'moveForward()',
    code: `moveForward()
  `,
  };
  const turnCommand = [
    {
      desc: 'turnLeft()',
      code: `turnLeft()
  `,
    },
    {
      desc: 'turnRight()',
      code: `turnRight()
  `,
    },
  ];
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
    {
      desc: 'takeBeeper()',
      code: `takeBeeper()
    `,
    },
    {
      desc: 'dropBeeper()',
      code: `dropBeeper()
    `,
    },
  ];
  const attackCommand = {
    desc: 'attack()',
    code: `attack()
    `,
  };

  // Insts

  const printCommands = [
    {
      desc: 'console.log()',
      code: 'console.log()',
    },
    {
      desc: 'console.logln()',
      code: 'console.logln()',
    },
  ];
  const structuralCommands = [
    {
      desc: useIntl().formatMessage(
        { id: 'playground.input.loop' },
        { name: 'for' },
      ),
      code: `for (_ in 1 until 3) {
...`,
    },
    {
      desc: useIntl().formatMessage(
        { id: 'playground.input.loop' },
        { name: 'while' },
      ),
      code: `while (cond) {
...`,
    },
    {
      desc: useIntl().formatMessage(
        { id: 'playground.input.loop' },
        { name: 'repeat' },
      ),
      code: `repeat (3) {
...`,
    },
    {
      desc: useIntl().formatMessage({ id: 'playground.input.function' }),
      code: `fun foo(): Unit {
...`,
    },
  ];

  return (
    <>
      <Divider orientation="left">Playground</Divider>
      <MapSelector
        visible={isModalDisplayed}
        close={() => setModalDisplayed(false)}
      />
      <div style={{ marginTop: '16px', marginLeft: '16px' }}>
        <Button type="primary" onClick={() => setModalDisplayed(true)}>
          {useIntl().formatMessage({ id: 'playground.input.changeMap' })}
        </Button>
      </div>
      <Divider orientation="left">
        {useIntl().formatMessage({ id: 'playground.input.globalCode' })}
      </Divider>
      <div style={{ margin: '16px' }}>
        <Space wrap size="middle">
          {
            // FIXME find a solution for the no children error of Dropdown
            // @ts-ignore
            <Dropdown
              overlay={dropdown(initPlayers, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage({ id: 'playground.input.newChar' })}
                <DownOutlined />
              </Button>
            </Dropdown>
          }
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(allCounters, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage({ id: 'playground.input.global' })}
                <DownOutlined />
              </Button>
            </Dropdown>
          }
        </Space>
      </div>
      <Divider orientation="left">
        {useIntl().formatMessage({ id: 'playground.input.instanceCode' })}
      </Divider>
      <div style={{ margin: '16px' }}>
        <Space wrap size="middle">
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(blockedCommands, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage(
                  { id: 'playground.input.inst' },
                  { var: 'blocked' },
                )}
                <DownOutlined />
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
                {useIntl().formatMessage(
                  { id: 'playground.input.inst' },
                  { var: 'isOn' },
                )}
                <DownOutlined />
              </Button>
            </Dropdown>
          }
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(collectedVars, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage({ id: 'playground.input.collected' })}
                <DownOutlined />
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
            {moveForwardCommand.desc}
          </Button>
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(turnCommand, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage({ id: 'playground.input.turn' })}
                <DownOutlined />
              </Button>
            </Dropdown>
          }
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(toggleCommands, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage(
                  { id: 'playground.input.inst' },
                  { var: 'toggle' },
                )}
                <DownOutlined />
              </Button>
            </Dropdown>
          }

          <Button
            onClick={() =>
              monacoRef.current!.trigger('keyboard', 'type', {
                text: attackCommand.code,
              })
            }
          >
            {attackCommand.desc}
          </Button>
        </Space>
      </div>
      <Divider orientation="left">
        {useIntl().formatMessage({ id: 'playground.input.instructions' })}
      </Divider>
      <div style={{ margin: '16px' }}>
        <Space wrap size="middle">
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(printCommands, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage({ id: 'playground.input.print' })}
                <DownOutlined />
              </Button>
            </Dropdown>
          }
          {
            // @ts-ignore
            <Dropdown
              overlay={dropdown(structuralCommands, monacoRef.current!)}
              placement="bottomLeft"
              arrow
            >
              <Button>
                {useIntl().formatMessage({ id: 'playground.input.structInst' })}
                <DownOutlined />
              </Button>
            </Dropdown>
          }
        </Space>
      </div>
      <br />
      <div
        id="editor"
        style={{
          width: '100%',
          height: '50vh',
          maxHeight: '50vh',
          border: '1px dashed #aaa',
        }}
      >
        <Editor
          height="100%"
          language="kotlin"
          theme={props.theme.toString()}
          value={props.store}
          onChange={props.onEditorChange}
          onMount={onEditorMount}
          className="monaco.editor"
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
            {useIntl().formatMessage({ id: 'playground.input.run' })}
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
            {useIntl().formatMessage({ id: 'playground.input.reset' })}
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
    </>
  );
};

export default connect(mapStateToProps)(InputBox);
