import React from "react"

export default class EditableContent extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  // 解决输入监听的问题
  onChange() {
    const html = this.ref.current.innerHTML;
    this.props.onChange(html);
  }

  render() {
    const {value} = this.props;
    return (
      <span contentEditable="true"
            ref={this.ref}
            dangerouslySetInnerHTML={{ __html: value }}
            placeholder={this.props.placeholder}
            onInput={this.onChange}
            onBlur={this.onChange}
      />
    );
  }
}

// source: https://juejin.cn/post/6854573208243273735
