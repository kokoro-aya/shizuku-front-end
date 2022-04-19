import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';

interface ConsoleProps {
  output: string;
}

const consoleStyle = {
  flexGrow: '1',
  height: '192px',
  margin: '5%',
  border: '1px solid #ccc',
  overflow: 'auto' as const,
  fontSize: '15px',
  whiteSpace: 'pre-wrap' as const,
  textAlign: 'left' as const,
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
      <div className="Console" id="console" style={consoleStyle}>
        {this.props.output}
      </div>
    );
  }
}
