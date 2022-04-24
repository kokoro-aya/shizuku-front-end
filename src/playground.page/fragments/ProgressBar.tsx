/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import React from 'react';
import { Progress } from 'antd';

interface ProgressBarProps {
  curr: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  // console.log(props.curr, props.total)
  const progress = Math.round((props.curr * 100) / props.total);
  const active = progress > 0 && progress < 100 ? 'active' : 'normal';
  return (
    <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
      <Progress percent={progress} status={active} />
    </div>
  );
};
export default ProgressBar;
