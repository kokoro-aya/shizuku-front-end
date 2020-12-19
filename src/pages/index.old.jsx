import React, {Component} from 'react';
import styles from './index.less';
import { Button, Card, Input, Form } from 'antd';
import EditableContent from "../fragments/EditableContent";

const FormItem = Form.Item

export default class Main extends Component {

  style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  }
  constructor(props) {
    super(props);
    this.state = {
      messages: ["this is a text"]
    }
  }

  onClickButton = () => {
    const oldMessage = this.state.messages
    const newMessage = oldMessage.concat("Added a text")
    this.setState({
      messages: newMessage
    })
  }

  render() {
    return (
      <div>
        {this.state.messages.map( (m, index) =>
          <Card title={index} style={this.style}>
            <p>{m}</p>
          </Card>)
        }
        <Button onClick={this.onClickButton}>
          Add
        </Button>
        <EditableContent onChange={(values) => console.log(values)} />
      </div>
    );
  }
}
