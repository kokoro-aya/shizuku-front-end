import { Request, Response } from '@umijs/types';
import { map1 } from './maps/map1';
import { map2 } from './maps/map2';
import { map3 } from './maps/map3';
import { map4 } from './maps/map4';
import { map5 } from './maps/map5';
import { map6 } from './maps/map6';
import { map7 } from './maps/map7';
import { map8 } from './maps/map8';
import { parseInt } from 'lodash';
import { isTypeKey, option, StoreType } from './utils';
// mock value should not be "export default" otherwise will not compile

let playgrounds: StoreType = {
  default: [map1, map2, map3, map4, map5, map6, map7, map8],
  simple: [],
  puzzle: [],
  hills: [],
  complex: [],
  custom: [],
};

let random_playground = 0;

export default {
  // Return type: InitStates
  'get /dev/playground/fetch/default': (req: Request, res: Response) => {
    // const responseObj = playgrounds[random_playground % playgrounds.length]
    const responseObj = map4;
    random_playground += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 1000);
  },

  // Return type: Array<{ value: string, label: string, children: Array<{ value: string, label: string }> }>
  'get /dev/playground/fetch/': (req: Request, res: Response) => {
    const r = [
      option(playgrounds, 'default'),
      option(playgrounds, 'simple'),
      option(playgrounds, 'puzzle'),
      option(playgrounds, 'hills'),
      option(playgrounds, 'complex'),
      option(playgrounds, 'custom'),
    ];
    setTimeout(() => {
      res.json(r);
    }, 1000);
  },

  // Return type: Array<{ id: number, name: string }> aka a list of maps in the category
  'get /dev/playground/fetch/:category/': (req: Request, res: Response) => {
    const category = req.params.category;
    if (isTypeKey(category)) {
      setTimeout(() => {
        res.json(
          playgrounds[category].map((s) => {
            return { ...s };
          }),
        );
      });
    }
  },

  // Return type: InitStates
  'get /dev/playground/fetch/:category/:id': (req: Request, res: Response) => {
    const category = req.params.category;
    const id = parseInt(req.params.id);
    if (isTypeKey(category)) {
      setTimeout(() => {
        res.json(playgrounds[category][id]);
      });
    } else {
      setTimeout(() => {
        res.json({
          success: false,
          message: 'No such map category',
        });
      });
    }
  },

  // Post type: EditPlayground
  // Return type: { success: bool, message: string }
  'post /dev/playground/add': (req: Request, res: Response) => {
    const newId = playgrounds.custom.length + 1;
    playgrounds.custom = [
      ...playgrounds.custom,
      {
        ...req.body,
        id: newId,
      },
    ];
    res.json({
      success: true,
      message: `Added a map to custom category with id = ${newId}`,
    });
  },

  // Put type: EditPlayground
  // Return type: { success: bool, message: string }
  'put /dev/playground/add/:id': (req: Request, res: Response) => {
    const id = req.params.id;
    if (playgrounds.custom.find((e) => e.id) !== undefined) {
      playgrounds.custom = [
        ...playgrounds.custom.filter((e) => e.id < id),
        {
          ...req.body,
          id: id,
        },
        ...playgrounds.custom.filter((e) => e.id > id),
      ];
      res.json({
        success: true,
        message: `Updated a map to custom category with id = ${id}`,
      });
    } else {
      res.json({
        success: false,
        message: `No such map with associated id = ${id}`,
      });
    }
  },

  // Return type: { success: bool, message: string }
  'delete /dev/playground/:id': (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    if (playgrounds.custom.find((p) => p.id === id) === undefined) {
      setTimeout(() => {
        res.json({
          success: false,
          message: `No such map with the given id ${id}!`,
        });
      }, 1500);
    } else {
      playgrounds.custom = playgrounds.custom.filter((p) => p.id !== id);
      setTimeout(() => {
        res.json({
          success: true,
          message: `The map of id ${id} has been deleted successfully`,
        });
      }, 1500);
    }
  },
};
