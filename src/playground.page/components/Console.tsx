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
import { animateScroll } from 'react-scroll';

interface ConsoleProps {
  output: string;
  err: boolean;
}

const consoleStyle = (err: boolean) => {
  return {
    flexGrow: '1',
    height: '192px',
    margin: '5%',
    border: '1px solid #ccc',
    color: err ? 'red' : undefined,
    overflow: 'auto' as const,
    fontSize: '15px',
    whiteSpace: 'pre-wrap' as const,
    textAlign: 'left' as const,
  };
};

export default class Console extends React.Component<ConsoleProps, {}> {
  constructor(props: ConsoleProps) {
    super(props);
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'console',
    });
  }

  render() {
    return (
      <div
        className="Console"
        id="console"
        style={consoleStyle(this.props.err)}
      >
        {this.props.output}
      </div>
    );
  }
}
