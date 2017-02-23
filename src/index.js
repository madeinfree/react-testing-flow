import React, { Component } from 'react'
import { render } from 'react-dom'

import { Provider, connect } from 'react-redux'
import store from './store'

import {
  addTodo
} from '../src/action/todos'
import {
  updateEdit
} from '../src/action/edit'

import App from './components/App/App.react'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    edit: state.edit
  }
}
const mapDispatchToProps = {
  addTodo,
  updateEdit
}

const ConnectApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

render(
  <Provider store={ store }>
    <ConnectApp />
  </Provider>
, document.getElementById('view'))
