import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }
  _onChangeText(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input
          onChange={ this._onChangeText.bind(this) }
          value={ this.state.text }
          type='text' />
      </div>
    )
  }
}

export default Input
