import React from 'react'
import { shallow } from 'enzyme'
import Input from '../src/components/Todos/Input.react'

let input

beforeAll(() => {
  input = shallow(
    <Input />
  )
})

test('Test Input is render and state text is empty', () => {
  expect(input.state(['text'])).toEqual('')
})

test('Typing Input and change text state', () => {
  input.find('input').simulate('change', {
    target: {
      value: 'Running'
    }
  })
  expect(input.state(['text'])).toEqual('Running')
})
