import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../Todos/Input.react'
import Send from '../Todos/Send.react'
import List from '../Todos/List.react'

class App extends Component {
  render() {
    const {
      addTodo
    } = this.props
    return (
      <div>
        <h1>Daily Todo List</h1>
        <Input />
        <Send />
        <List />
      </div>
    )
  }
}

export default App
