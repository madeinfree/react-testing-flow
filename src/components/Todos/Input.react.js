import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super();
  }

  _onChangeText(e) {
    const {
      updateEdit
    } = this.props

    if (updateEdit !== undefined) {
      updateEdit(e)
    }
  }

  _onKeyDown(e) {
    const {
      onKeyDown
    } = this.props

    if (onKeyDown !== undefined) {
      onKeyDown(e)
    }
  }

  render() {
    const {
      text
    } = this.props
    return (
      <div>
        <input
          value={ text }
          onKeyDown={ this._onKeyDown.bind(this) }
          onChange={ this._onChangeText.bind(this) }
          type='text' />
      </div>
    )
  }
}

export default Input
