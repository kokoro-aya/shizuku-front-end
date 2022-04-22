import { GamingCondition } from '@/data/SentData';
import React from 'react';
import { Button, Divider, Dropdown, Menu, Space } from 'antd';
import { useIntl } from 'umi';

interface GameConditionsProps {
  gamingCondition?: GamingCondition;
}

export const GameConditions: React.FC<GameConditionsProps> = (props) => {
  const collectGemsBy = props?.gamingCondition?.collectGemsBy
    ? useIntl().formatMessage(
        { id: 'playground.gameCond.collectGems' },
        {
          num: props.gamingCondition.collectGemsBy,
        },
      )
    : null;
  const switchesOnBy = props?.gamingCondition?.switchesOnBy
    ? useIntl().formatMessage(
        { id: 'playground.gameCond.switchesBy' },
        {
          num: props.gamingCondition.switchesOnBy,
        },
      )
    : null;
  const monstersKilled = props?.gamingCondition?.monstersKilled
    ? useIntl().formatMessage(
        { id: 'playground.gameCond.monstersKilled' },
        {
          num: props.gamingCondition.monstersKilled,
        },
      )
    : null;
  const monstersKilledLessThan = props?.gamingCondition?.monstersKilledLessThan
    ? useIntl().formatMessage(
        { id: 'playground.gameCond.monstersKilledLessThan' },
        {
          num: props.gamingCondition.monstersKilledLessThan,
        },
      )
    : null;
  const arriveAt = props?.gamingCondition?.arriveAt
    ? useIntl().formatMessage(
        { id: 'playground.gameCond.arriveAt' },
        {
          coo: props.gamingCondition.arriveAt
            .map((e) => `(x:${e.x}, y:${e.y})`)
            .join(','),
        },
      )
    : null;
  const endGameAfter = props?.gamingCondition?.endGameAfter
    ? useIntl().formatMessage(
        { id: 'playground.gameCond.endGameAfter' },
        { num: props.gamingCondition.endGameAfter },
      )
    : null;
  const noSameTileRepassed = props?.gamingCondition?.noSameTileRepassed
    ? useIntl().formatMessage({ id: 'playground.gameCond.noSameTileRepassed' })
    : null;

  const items: Array<string> = [
    collectGemsBy,
    switchesOnBy,
    monstersKilled,
    monstersKilledLessThan,
    arriveAt,
    endGameAfter,
    noSameTileRepassed,
  ].filter((e) => e !== null) as Array<string>;

  if (items.length === 0) {
    items.push(
      useIntl().formatMessage({ id: 'playground.gameCond.noEndGameCondition' }),
    );
  }

  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
        <Divider orientation="left">
          {useIntl().formatMessage({ id: 'playground.gameCond.gameRules' })}
        </Divider>
        <Space wrap size="middle">
          {
            // @ts-ignore
            <Dropdown
              overlay={
                <Menu>
                  {items.map((e, i) => (
                    <Menu.Item key={i}>{e}</Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
            >
              <Button>
                {useIntl().formatMessage({ id: 'playground.gameCond.click' })}
              </Button>
            </Dropdown>
          }
        </Space>
      </div>
    </>
  );
};
