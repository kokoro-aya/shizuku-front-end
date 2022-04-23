import { GamingCondition } from '@/data/SentData';
import React from 'react';
import { Button, Divider, Dropdown, Menu, Space } from 'antd';
import { useIntl } from 'umi';
import { renderMessage } from '@/locales/hook';

interface GameConditionsProps {
  gamingCondition?: GamingCondition;
  useCollision: boolean;
}

export const GameConditions: React.FC<GameConditionsProps> = (props) => {
  const intl = useIntl();

  const collectGemsBy = props?.gamingCondition?.collectGemsBy
    ? renderMessage(intl, 'playground.gameCond.collectGems', {
        num: props.gamingCondition.collectGemsBy,
      })
    : null;
  const switchesOnBy = props?.gamingCondition?.switchesOnBy
    ? renderMessage(intl, 'playground.gameCond.switchesBy', {
        num: props.gamingCondition.switchesOnBy,
      })
    : null;
  const monstersKilled = props?.gamingCondition?.monstersKilled
    ? renderMessage(intl, 'playground.gameCond.monstersKilled', {
        num: props.gamingCondition.monstersKilled,
      })
    : null;
  const monstersKilledLessThan = props?.gamingCondition?.monstersKilledLessThan
    ? renderMessage(intl, 'playground.gameCond.monstersKilledLessThan', {
        num: props.gamingCondition.monstersKilledLessThan,
      })
    : null;
  const arriveAt = props?.gamingCondition?.arriveAt
    ? renderMessage(intl, 'playground.gameCond.arriveAt', {
        coo: props.gamingCondition.arriveAt
          .map((e) => `(x:${e.x}, y:${e.y})`)
          .join(','),
      })
    : null;
  const endGameAfter = props?.gamingCondition?.endGameAfter
    ? renderMessage(intl, 'playground.gameCond.endGameAfter', {
        num: props.gamingCondition.endGameAfter,
      })
    : null;
  const noSameTileRepassed = props?.gamingCondition?.noSameTileRepassed
    ? renderMessage(intl, 'playground.gameCond.noSameTileRepassed')
    : null;

  const noEndGameCondition = renderMessage(
    intl,
    'playground.gameCond.noEndGameCondition',
  );

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

  const gameRulesDesc = renderMessage(intl, 'playground.gameCond.gameRules');
  const clickDesc = renderMessage(intl, 'playground.gameCond.click');

  const useCollision = props.useCollision
    ? renderMessage(intl, 'playground.gameCond.useCollision')
    : renderMessage(intl, 'playground.gameCond.noCollision');

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
          <div>
            <Button disabled={true}>{useCollision}</Button>
          </div>
        </Space>
      </div>
    </>
  );
};
