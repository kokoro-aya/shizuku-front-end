import { GamingCondition } from '@/data/SentData';
import React from 'react';
import { Button, Divider, Dropdown, Menu, Space } from 'antd';
import { useIntl } from 'umi';

interface GameConditionsProps {
  gamingCondition?: GamingCondition;
}

export const GameConditions: React.FC<GameConditionsProps> = (props) => {
  const intl = useIntl();

  const collectGemsBy = props?.gamingCondition?.collectGemsBy
    ? intl.formatMessage(
        { id: 'playground.gameCond.collectGems' },
        {
          num: props.gamingCondition.collectGemsBy,
        },
      )
    : null;
  const switchesOnBy = props?.gamingCondition?.switchesOnBy
    ? intl.formatMessage(
        { id: 'playground.gameCond.switchesBy' },
        {
          num: props.gamingCondition.switchesOnBy,
        },
      )
    : null;
  const monstersKilled = props?.gamingCondition?.monstersKilled
    ? intl.formatMessage(
        { id: 'playground.gameCond.monstersKilled' },
        {
          num: props.gamingCondition.monstersKilled,
        },
      )
    : null;
  const monstersKilledLessThan = props?.gamingCondition?.monstersKilledLessThan
    ? intl.formatMessage(
        { id: 'playground.gameCond.monstersKilledLessThan' },
        {
          num: props.gamingCondition.monstersKilledLessThan,
        },
      )
    : null;
  const arriveAt = props?.gamingCondition?.arriveAt
    ? intl.formatMessage(
        { id: 'playground.gameCond.arriveAt' },
        {
          coo: props.gamingCondition.arriveAt
            .map((e) => `(x:${e.x}, y:${e.y})`)
            .join(','),
        },
      )
    : null;
  const endGameAfter = props?.gamingCondition?.endGameAfter
    ? intl.formatMessage(
        { id: 'playground.gameCond.endGameAfter' },
        { num: props.gamingCondition.endGameAfter },
      )
    : null;
  const noSameTileRepassed = props?.gamingCondition?.noSameTileRepassed
    ? intl.formatMessage({ id: 'playground.gameCond.noSameTileRepassed' })
    : null;

  const noEndGameCondition = intl.formatMessage({
    id: 'playground.gameCond.noEndGameCondition',
  });

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
    items.push(noEndGameCondition);
  }

  const gameRulesDesc = intl.formatMessage({
    id: 'playground.gameCond.gameRules',
  });
  const clickDesc = intl.formatMessage({
    id: 'playground.gameCond.click',
  });

  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
        <Divider orientation="left">{gameRulesDesc}</Divider>
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
              <Button>{clickDesc}</Button>
            </Dropdown>
          }
        </Space>
      </div>
    </>
  );
};
