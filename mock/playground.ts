import { Frame } from '@/models/playground.types';
import { Request, Response } from '@umijs/types';
import { GamingCondition } from '@/data/SentData';
import { Biome, Block, Color } from './enums';
import { Direction, Role } from '@/data/Enums';
import { map1 } from './maps/map1';
import { map2 } from './maps/map2';
import { map3 } from './maps/map3';
import { map4 } from './maps/map4';
// mock value should not be "export default" otherwise will not compile

export interface InitStates extends Frame {
  id: number;
  name?: string;
  gamingCondition?: GamingCondition;
  userCollision: boolean;
}

let playgrounds: Array<InitStates> = [map1, map2, map3, map4];

let random_playground = 0;

export default {
  'get /dev/playground/fetch': (req: Request, res: Response) => {
    // const responseObj = playgrounds[random_playground % playgrounds.length]
    const responseObj = map4;
    random_playground += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 1000);
  },
  'post /dev/playground/add': (req: Request, res: Response) => {
    playgrounds = [
      ...playgrounds,
      {
        ...req.body,
        id: playgrounds.length + 1,
      },
    ];
    res.json({
      success: true,
    });
  },
  'delete /dev/playground/:id': (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    if (id < 5) {
      setTimeout(() => {
        res.json({
          success: false,
          message: '无法删除自带的地图!',
        });
      }, 1500);
    } else {
      playgrounds = playgrounds.filter((p) => p.id !== id);
      setTimeout(() => {
        res.json({
          success: true,
          message: '已删除地图',
        });
      }, 1500);
    }
  },
};
