import React from 'react';
import { Progress } from 'antd';

interface ProgressBarProps {
  curr: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const progress = Math.round((props.curr * 100) / props.total);
  const active = progress > 0 && progress < 100 ? 'active' : 'normal';
  return (
    <div style={{ padding: '0% 5% 0% 5%', width: '100%' }}>
      <Progress percent={progress} status={active} />
    </div>
  );
};
export default ProgressBar;
