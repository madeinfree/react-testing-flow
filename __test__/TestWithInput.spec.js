import React from 'react'
import { shallow } from 'enzyme'
import Input from '../src/components/Todos/Input.react'
import store from '../src/store/index'

let input, mockStore

beforeEach(() => {
  mockStore = store
  input = shallow(
    <Input
      text={ mockStore.getState().edit.text }
      updateEdit={ (text) => mockStore.dispatch({ type: 'UPDATE_EDIT', payload: { text } }) }
    />
  )
})

test('default value from edit reducer', () => {
  expect(input.find('input').text()).toEqual('')
})

test('Typing Input and call dispatch updateEdit to change text state', () => {
  input.find('input').simulate('change', { target: { value: 'Watching' } })
  const secondInput = shallow(
    <Input
      text={ mockStore.getState().edit.text }
      updateEdit={ (text) => mockStore.dispatch({ type: 'UPDATE_EDIT', payload: { text } }) }
    />
  )
  expect(secondInput.find('input').props().value).toEqual('Watching')
})
