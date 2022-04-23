/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import React, { useState } from 'react';
import { Modal, Cascader } from 'antd';
import { CompatibleDispatchSender } from '@/models/dispatch.type';
import { MapSelectStates } from '@/models/mapselect.types';
import { connect, useIntl } from 'umi';
import { renderMessage } from '@/locales/hook';

const namespace = 'mapselect' as const;

const mapStateToProps = (state: MapSelectorStateToPropsMap) => {
  const { maps, current } = state[namespace];
  return { maps, current };
};

type MapSelectorStateToPropsMap = { mapselect: MapSelectStates };

interface MapSelectorProps extends MapSelectStates, CompatibleDispatchSender {
  onSelect: (arg0?: string) => void;
  visible: boolean;
  close: () => void;
}

const MapSelector: React.FC<MapSelectorProps> = (props) => {
  const intl = useIntl();

  const [path, setPath] = useState<string | undefined>(undefined);

  const initialFetch = () => {
    props.dispatch!({
      type: `${namespace}/fetch`,
      payload: '',
    });
  };

  const onCascadeChange = (value: (string | number)[]) => {
    setPath(value.join('/'));
  };

  const handleCancel = () => {
    props.close();
  };

  const selectTitle = renderMessage(intl, 'playground.map.select');
  const selectPlaceholder = renderMessage(intl, 'playground.map.selection');
  const okText = renderMessage(intl, 'dialog.ok');
  const cancelText = renderMessage(intl, 'dialog.cancel');

  return (
    <>
      {
        // @ts-ignore
        <Modal
          width="60%"
          title={selectTitle}
          visible={props.visible}
          onOk={() => {
            props.onSelect(path);
            props.close();
          }}
          onCancel={handleCancel}
          okText={okText}
          cancelText={cancelText}
        >
          <div style={{ padding: '16px' }}>
            <Cascader
              options={props.maps}
              placeholder={selectPlaceholder}
              onChange={onCascadeChange}
              onDropdownVisibleChange={initialFetch}
            />
          </div>
        </Modal>
      }
    </>
  );
};

export default connect(mapStateToProps)(MapSelector);
