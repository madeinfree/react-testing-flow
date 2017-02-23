import React from 'react'
import { shallow } from 'enzyme'
import Input from '../src/components/Todos/Input.react'
import store from '../src/store/index'
import sinon from 'sinon'

let input, mockStore

beforeEach(() => {
  mockStore = store
  input = shallow(
    <Input
      text={ mockStore.getState().edit.text }
      updateEdit={ (e) => mockStore.dispatch({ type: 'UPDATE_EDIT', payload: { text: e.target.value } }) }
      onKeyDown={ (e) => {
        if (e.keyCode === 13) {
          mockStore.dispatch({
            type: 'ADD_TODO',
            payload: {
              id: 1,
              title: 'Running'
            }
          })
        }
      } }
    />
  )
})

test('default value from edit reducer', () => {
  expect(input.find('input').text()).toEqual('')
})

test('Enter keydown to call method', () => {
  input.find('input').simulate('keyDown', {
    keyCode: 13
  })
  expect(mockStore.getState().todos.length).toEqual(1)
  expect(mockStore.getState().todos[0].title).toEqual('Running')
})

test('Typing Input and call dispatch updateEdit to change text state', () => {
  input.find('input').simulate('change', { target: { value: 'Watching' } })
  const second_input = shallow(
    <Input
      text={ mockStore.getState().edit.text }
      updateEdit={ (e) => mockStore.dispatch({ type: 'UPDATE_EDIT', payload: { text: e.target.value } }) }
      onKeyDown={ (e) => {
        if (e.keyCode === 13) {
          mockStore.dispatch({
            type: 'ADD_TODO',
            payload: {
              id: 1,
              title: 'Running'
            }
          })
        }
      } }
    />
  )
  expect(second_input.find('input').props().value).toEqual('Watching')
})
