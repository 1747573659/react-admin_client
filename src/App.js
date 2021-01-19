import React, { Component } from 'react';
import { Button, message } from 'antd'

export default class App extends Component {

  click = () => {
    message.success('我是真的帅')
  }

  render () {
    return (
      <Button type="primary" onClick={this.click}>点我</Button>
    )
  }
}
