import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super();
  }

  _onChangeText(e) {
    const {
      updateEdit
    } = this.props

    updateEdit(e.target.value)
  }

  render() {
    const {
      text
    } = this.props
    return (
      <div>
        <input
          value={ text }
          onChange={ this._onChangeText.bind(this) }
          type='text' />
      </div>
    )
  }
}

export default Input
