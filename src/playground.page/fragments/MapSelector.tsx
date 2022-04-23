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
