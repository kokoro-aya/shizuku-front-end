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
import { useThrottle } from '@/Utils';

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

  const handleResize = handleAlign;
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
  };

  const getData = () => {
    props.dispatch<Frame>({
      type: `${namespace}/nextFrame`,
    });
    const { nextFrame, answer } = props;
    if (nextFrame) {
      if (!idle && nextFrame.special.includes('GEM')) {
        // console.log('Collected a gem');
        activateNotification(
          NotificationType.Info,
          intl.formatMessage({ id: 'playground.notification.type.info' }),
          intl.formatMessage({ id: 'playground.notification.desc.gem' }),
        );
      }
      if (!idle && nextFrame.special.includes('SWITCH')) {
        // console.log('Toggled a switch');
        activateNotification(
          NotificationType.Info,
          intl.formatMessage({ id: 'playground.notification.type.info' }),
          intl.formatMessage({
            id: 'playground.notification.desc.switch',
          }),
        );
      }
      if (!idle && nextFrame.special.includes('BEEPER')) {
        activateNotification(
          NotificationType.Info,
          intl.formatMessage({ id: 'playground.notification.type.info' }),
          intl.formatMessage({
            id: 'playground.notification.desc.beeper',
          }),
        );
      }
      if (!idle && nextFrame.special.includes('ATTACK')) {
        activateNotification(
          NotificationType.Info,
          intl.formatMessage({ id: 'playground.notification.type.info' }),
          intl.formatMessage({
            id: 'playground.notification.desc.attack',
          }),
        );
      }
      if (!idle && answer.length === 0) {
        if (props.gameStatus === GameStatus.WIN) {
          activateNotification(
            NotificationType.Success,
            intl.formatMessage({ id: 'playground.notification.type.win' }),
            intl.formatMessage({ id: 'playground.notification.desc.win' }),
          );
        } else if (props.gameStatus === GameStatus.LOST) {
          activateNotification(
            NotificationType.Warning,
            intl.formatMessage({
              id: 'playground.notification.type.lost',
            }),
            intl.formatMessage({
              id: 'playground.notification.desc.lost',
            }),
          );
        } else {
          activateNotification(
            NotificationType.Info,
            intl.formatMessage({
              id: 'playground.notification.type.pending',
            }),
            intl.formatMessage(
              { id: 'playground.notification.desc.pending' },
              { count: `${props.gained ?? 0}` },
            ),
          );
        }
      }
    }
    if (!props.returnedError && !idle && answer.length === 0) {
      activateNotification(
        NotificationType.Info,
        intl.formatMessage({ id: 'playground.notification.type.endGame' }),
        intl.formatMessage({ id: 'playground.notification.desc.endGame' }),
      );
      setIdle(true);
    }
  };

  const onClickReset = () => {
    setDisabled(false);
    setCode('// Input your code...');
    initialFetch(props.currentMap);
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
    // console.log(props.answer);
    // console.log(props.answer !== []);
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
        overflow: 'hidden',
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
              />
            </Row>
            <Row>
              <Console output={props.nextFrame.output} />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps)(Playground);
