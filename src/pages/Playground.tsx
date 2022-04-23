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
  message: string | null = null,
  desc: string | null = null,
) => {
  switch (type) {
    case NotificationType.Success:
      return notification['success']({
        message:
          message == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.success.message',
              })
            : message,
        description:
          desc == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.success.desc',
              })
            : desc,
      });
    case NotificationType.Info:
      return notification['info']({
        message:
          message == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.info.message',
              })
            : message,
        description:
          desc == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.info.desc',
              })
            : desc,
      });
    case NotificationType.Warning:
      return notification['warning']({
        message:
          message == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.warning.message',
              })
            : message,
        description:
          desc == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.warning.desc',
              })
            : desc,
      });
    case NotificationType.Error:
      return notification['error']({
        message:
          message == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.error.message',
              })
            : message,
        description:
          desc == null
            ? useIntl().formatMessage({
                id: 'playground.defaultNotification.error.desc',
              })
            : desc,
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
  };
};

type PlaygroundStateToPropsMap = { playground: ModelStates };

interface PlaygroundProps extends ModelStates, DispatchSender {}

const Playground: React.FC<PlaygroundProps> = (props) => {
  const initCode = '// Input your code...';
  const [code, setCode] = useState(initCode);
  const [idle, setIdle] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("in setInterval: " + props.initialized)
      if (!props.initialized) {
        initialFetch();
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

  const initialFetch = () => {
    props.dispatch({
      type: `${namespace}/initialFetch`,
      payload: '',
    });
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
          useIntl().formatMessage({ id: 'playground.notification.type.info' }),
          useIntl().formatMessage({ id: 'playground.notification.desc.gem' }),
        );
      }
      if (!idle && nextFrame.special.includes('SWITCH')) {
        // console.log('Toggled a switch');
        activateNotification(
          NotificationType.Info,
          useIntl().formatMessage({ id: 'playground.notification.type.info' }),
          useIntl().formatMessage({
            id: 'playground.notification.desc.switch',
          }),
        );
      }
      if (!idle && nextFrame.special.includes('BEEPER')) {
        activateNotification(
          NotificationType.Info,
          useIntl().formatMessage({ id: 'playground.notification.type.info' }),
          useIntl().formatMessage({
            id: 'playground.notification.desc.beeper',
          }),
        );
      }
      if (!idle && nextFrame.special.includes('ATTACK')) {
        activateNotification(
          NotificationType.Info,
          useIntl().formatMessage({ id: 'playground.notification.type.info' }),
          useIntl().formatMessage({
            id: 'playground.notification.desc.attack',
          }),
        );
      }
      if (!idle && answer.length === 0) {
        if (props.gameStatus === GameStatus.WIN) {
          activateNotification(
            NotificationType.Success,
            useIntl().formatMessage({ id: 'playground.notification.type.win' }),
            useIntl().formatMessage({ id: 'playground.notification.desc.win' }),
          );
        } else if (props.gameStatus === GameStatus.LOST) {
          activateNotification(
            NotificationType.Warning,
            useIntl().formatMessage({
              id: 'playground.notification.type.lost',
            }),
            useIntl().formatMessage({
              id: 'playground.notification.desc.lost',
            }),
          );
        } else {
          activateNotification(
            NotificationType.Info,
            useIntl().formatMessage({
              id: 'playground.notification.type.pending',
            }),
            useIntl().formatMessage(
              { id: 'playground.notification.desc.pending' },
              { count: `${props.gained}` },
            ),
          );
        }
      }
    }
    if (!props.returnedError && !idle && answer.length === 0) {
      activateNotification(
        NotificationType.Info,
        useIntl().formatMessage({ id: 'playground.notification.type.endGame' }),
        useIntl().formatMessage({ id: 'playground.notification.desc.endGame' }),
      );
      setIdle(true);
    }
  };

  const onClickReset = () => {
    setDisabled(false);
    setCode('// Input your code...');
    props.dispatch({
      type: `${namespace}/initialFetch`,
      payload: '',
    });
  };

  const onClickSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    makeRequest();
  };

  const makeRequest = () => {
    console.log(code);
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
      console.log('set idle to false');
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
