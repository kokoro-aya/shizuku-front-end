import React, { Component } from 'react'
import { animateScroll } from 'react-scroll'

const consoleStyle = {
  flexGrow: '1',
  height: '192px',
  margin: '5%',
  border: '1px solid #ccc',
  overflow: 'auto',
  fontSize: '15px',
  whiteSpace: 'pre-wrap',
  textAlign: 'left',
}

export default class Console extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.scrollToBottom()
  }
  componentDidUpdate() {
    this.scrollToBottom()
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'console'
    })
  }

  render() {
    return (
      <div className="Console" id="console" style={consoleStyle}>
        {this.props.output}
      </div>
    )
  }
}
