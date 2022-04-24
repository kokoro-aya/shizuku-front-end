/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import React, { useEffect, useState } from 'react';
import { Col, notification, Row } from 'antd';
import { useIntl } from 'umi';
import InputBox from '../playground.page/components/Input';
import Console from '../playground.page/components/Console';
import Dashboard from '../playground.page/components/Dashboard';
import { connect } from '../.umi/plugin-dva/exports';
import { Frame, ModelStates } from '@/models/playground.types';
import { SentData } from '@/data/SentData';
import { DispatchSender } from '@/models/dispatch.type';
import { GameStatus } from '@/data/Enums';
import { renderMessage } from '@/locales/hook';
import * as _ from 'lodash';

const namespace = 'playground';

const regex = /<\/?.*?>/g;

enum NotificationType {
  Success,
  Info,
  Warning,
  Error,
}

export enum ExecutionStatus {
  Err,
  Success,
  Idle,
  Processing,
  Impossible,
}

const activateNotification = (
  type: NotificationType,
  message: string,
  desc: string,
) => {
  switch (type) {
    case NotificationType.Success:
      return notification['success']({
        message: message,
        description: desc,
      });
    case NotificationType.Info:
      return notification['info']({
        message: message,
        description: desc,
      });
    case NotificationType.Warning:
      return notification['warning']({
        message: message,
        description: desc,
      });
    case NotificationType.Error:
      return notification['error']({
        message: message,
        description: desc,
      });
  }
};

const mapStateToProps = (state: PlaygroundStateToPropsMap) => {
  const {
    initialized,
    initialGem,
    nextFrame,
    answer,
    currentLength,
    answerLength,
    returnedError,
    gamingCondition,
    userCollision,
    currentMap,
  } = state[namespace];
  return {
    initialized,
    initialGem,
    nextFrame,
    answer,
    currentLength,
    answerLength,
    returnedError,
    gamingCondition,
    userCollision,
    currentMap,
  };
};

type PlaygroundStateToPropsMap = { playground: ModelStates };

interface PlaygroundProps extends ModelStates, DispatchSender {}

const Playground: React.FC<PlaygroundProps> = (props) => {
  const initCode = '// Input your code...';
  const [code, setCode] = useState(initCode);
  const [idle, setIdle] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const intl = useIntl();

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("in setInterval: " + props.initialized)
      if (!props.initialized) {
        initialFetch(props.currentMap);
      } else {
        getData();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [props.initialized, props.nextFrame, props.answer, idle, disabled]); // 如果想要让setInterval和呼叫的函数里对应的变量发生改变，就要在数组里声明
  // setInterval相当于一个闭包，里面的变量如果不额外声明的话值是固定的

  // Align bottom of editor and board
  const handleAlign = () => {
    const h1 = document.getElementById('board')!.getBoundingClientRect().bottom;
    const h2 = document.getElementById('editor')!.getBoundingClientRect().top;
    if (h1 - h2 > 144) {
      document.getElementById('editor')!.style.height = `${h1 - h2}px`;
    }
  };
  useEffect(handleAlign, []);

  const handleResize = _.throttle(handleAlign);
  window.addEventListener('resize', handleResize);

  // Clean up
  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const initialFetch = (mapPath?: string) => {
    if (mapPath === undefined) {
      props.dispatch({
        type: `${namespace}/initialFetch`,
        payload: '',
      });
    } else {
      props.dispatch({
        type: `${namespace}/fetchMap`,
        payload: mapPath,
      });
    }
  };

  const fetchMap = async (path?: string) => {
    // There is an issue that the props.currentMap is not immediately updated after dispatch to setMap, that's why the initialFetch calls directly on path
    // However, the setMap ensures that if the map is reloaded, it will be persisted instead of reload the default one
    props.dispatch<string>({
      type: `${namespace}/setMap`,
      payload: path,
    });
    initialFetch(path);
    setDisabled(false);
    setCode('// Input your code...');
  };

  const getData = () => {
    props.dispatch<Frame>({
      type: `${namespace}/nextFrame`,
    });
    console.log(props.returnedError);
    const { nextFrame, answer } = props;
    if (!props.returnedError) {
      if (!idle && nextFrame.special.includes('GEM')) {
        // console.log('Collected a gem');
        activateNotification(
          NotificationType.Info,
          renderMessage(intl, 'playground.notification.type.info'),
          renderMessage(intl, 'playground.notification.desc.gem'),
        );
      }
      if (!idle && nextFrame.special.includes('SWITCH')) {
        // console.log('Toggled a switch');
        activateNotification(
          NotificationType.Info,
          renderMessage(intl, 'playground.notification.type.info'),
          renderMessage(intl, 'playground.notification.desc.switch'),
        );
      }
      if (!idle && nextFrame.special.includes('BEEPER')) {
        activateNotification(
          NotificationType.Info,
          renderMessage(intl, 'playground.notification.type.info'),
          renderMessage(intl, 'playground.notification.desc.beeper'),
        );
      }
      if (!idle && nextFrame.special.includes('ATTACK')) {
        activateNotification(
          NotificationType.Info,
          renderMessage(intl, 'playground.notification.type.info'),
          renderMessage(intl, 'playground.notification.desc.attack'),
        );
      }
      if (!idle && answer.length === 0) {
        if (props.gameStatus === GameStatus.WIN) {
          activateNotification(
            NotificationType.Success,
            renderMessage(intl, 'playground.notification.type.win'),
            renderMessage(intl, 'playground.notification.desc.win'),
          );
        } else if (props.gameStatus === GameStatus.LOST) {
          activateNotification(
            NotificationType.Warning,
            renderMessage(intl, 'playground.notification.type.lost'),
            renderMessage(intl, 'playground.notification.desc.lost'),
          );
        } else {
          activateNotification(
            NotificationType.Info,
            renderMessage(intl, 'playground.notification.type.pending'),
            renderMessage(intl, 'playground.notification.desc.pending', {
              count: `${props.gained ?? 0}`,
            }),
          );
        }
      }
    } else {
      if (!idle) {
        activateNotification(
          NotificationType.Error,
          renderMessage(intl, 'playground.notification.type.error'),
          renderMessage(intl, 'playground.notification.desc.error'),
        );
      }
      setIdle(true);
    }
    if (!props.returnedError && !idle && answer.length === 0) {
      activateNotification(
        NotificationType.Info,
        renderMessage(intl, 'playground.notification.type.endGame'),
        renderMessage(intl, 'playground.notification.desc.endGame'),
      );
      setIdle(true);
    }
  };

  const onClickReset = () => {
    setDisabled(false);
    initialFetch(props.currentMap);
    setCode('// Input your code...');
  };

  const onClickSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    makeRequest();
  };

  const makeRequest = () => {
    // console.log(code);
    const { output, special, ...sentData } = props.nextFrame;
    props.dispatch<SentData>({
      type: `${namespace}/handleSubmit`,
      payload: {
        type: 'default',
        code: code,
        ...sentData,
        gamingCondition: props.gamingCondition,
        userCollision: props.userCollision,
      },
    });
    console.log(props.answer);
    console.log(props.answer !== []);
    if (props.answer !== []) {
      // fixme 用同步的思路写异步，错了，而且不能直接[] !== []
      setIdle(false);
      setDisabled(true);
      // console.log('set idle to false');
    }
  };

  const onChange = (data: string) => {
    setCode(data);
  };

  const status = props.returnedError
    ? ExecutionStatus.Err
    : idle
    ? disabled
      ? ExecutionStatus.Success
      : ExecutionStatus.Idle
    : disabled
    ? ExecutionStatus.Processing
    : ExecutionStatus.Impossible;

  const handleEditorChange = (value: string | undefined, _: unknown) => {
    setCode(value ?? '');
  };

  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          <InputBox
            onFetchMap={fetchMap}
            onSubmit={onClickSubmit}
            onReset={onClickReset}
            onChange={onChange}
            onEditorChange={handleEditorChange}
            init={initCode}
            store={code}
            disabled={disabled}
          />
        </Col>
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{ maxHeight: '200vh' }}
        >
          <div
            id="board"
            style={{
              background: 'white',
              overflow: 'scroll',
              overflowWrap: 'break-word',
              maxHeight: '100%',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              border: '1px solid #e8e8e8',
            }}
          >
            <Row>
              <Dashboard
                frame={props.nextFrame}
                initialGem={props.initialGem}
                current={props.currentLength}
                aLength={props.answerLength}
                status={status}
                gamingCondition={props.gamingCondition}
                useCollision={props.userCollision}
              />
            </Row>
            <Row>
              <Console
                output={props.nextFrame.output}
                err={props.returnedError}
              />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps)(Playground);
