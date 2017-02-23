import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../Todos/Input.react'
import Send from '../Todos/Send.react'
import List from '../Todos/List.react'

class App extends Component {
  render() {
    const {
      addTodo,
      updateEdit,
      todos,
      edit
    } = this.props
    return (
      <div>
        <h1>Daily Todo List</h1>
        <div style={ { display: 'flex' } }>
          <Input
            text={ edit.text }
            updateEdit={ updateEdit }
          />
          <Send
            text={ edit.text }
            onClick={ addTodo }
          />
        </div>
        <List
          todos={ todos }
        />
      </div>
    )
  }
}

export default App
