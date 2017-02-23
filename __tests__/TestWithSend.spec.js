import React, { Component } from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Send from '../src/components/Todos/Send.react'
import store from '../src/store/index'

let send,
    testStore

beforeAll(() => {
  testStore = store
  send = shallow(
    <Send />
  )
})

test('render send button', () => {
  expect(send.type()).toEqual('button')
  expect(send.text()).toEqual('SEND')
})

test('click button to call dispatch', () => {
  const spy = sinon.spy()
  let send_event = shallow(
    <Send onClick={ spy } />
  )
  send_event.find('button').simulate('click')
  expect(spy.called).toBeTruthy()
})

test('click button to call dispatch and change todos', () => {
  const mockText = 'Watching'
  const mockFnToAddTODO = (text) => {
    testStore.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: 1,
        title: text
      }
    })
  }
  const send_dispatch = shallow(
    <Send
      text={ mockText }
      onClick={ mockFnToAddTODO }
    />
  )
  send_dispatch.simulate('click')
  expect(testStore.getState().todos[0].title).toEqual('Watching')
  expect(testStore.getState().todos.length).toEqual(1)
})
