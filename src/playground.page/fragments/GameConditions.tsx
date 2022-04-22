import { GamingCondition } from '@/data/SentData';
import React from 'react';
import { Button, Divider, Dropdown, Menu, Space } from 'antd';

interface GameConditionsProps {
  gamingCondition?: GamingCondition;
}

export const GameConditions: React.FC<GameConditionsProps> = (props) => {
  const collectGemsBy = props?.gamingCondition?.collectGemsBy
    ? `收集至少 ${props.gamingCondition.collectGemsBy} 个宝石`
    : null;
  const switchesOnBy = props?.gamingCondition?.switchesOnBy
    ? `开启至少 ${props.gamingCondition.switchesOnBy} 个开关`
    : null;
  const monstersKilled = props?.gamingCondition?.monstersKilled
    ? `杀死至少 ${props.gamingCondition.monstersKilled} 个怪兽`
    : null;
  const monstersKilledLessThan = props?.gamingCondition?.monstersKilledLessThan
    ? `杀死不多于 ${props.gamingCondition.monstersKilledLessThan} 个怪兽`
    : null;
  const arriveAt = props?.gamingCondition?.arriveAt
    ? `在以下坐标各有一个角色: ${props.gamingCondition.arriveAt
        .map((e) => `(x:${e.x}, y:${e.y})`)
        .join(',')}`
    : null;
  const endGameAfter = props?.gamingCondition?.endGameAfter
    ? `结束游戏在第 ${props.gamingCondition.endGameAfter} 个回合以前`
    : null;
  const noSameTileRepassed = props?.gamingCondition?.noSameTileRepassed
    ? '不能走重复的格子'
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
    items.push('该游戏没有设置胜利条件');
  }

  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
        <Divider orientation="left">游戏规则</Divider>
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
              <Button>点此了解游戏规则</Button>
            </Dropdown>
          }
        </Space>
      </div>
    </>
  );
};
