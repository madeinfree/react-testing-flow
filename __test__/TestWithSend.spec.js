import React, { Component } from 'react'
import { shallow } from 'enzyme'
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
  let trigger_number = 0
  const _onClick = () => {
    trigger_number += 1
  }
  let send_event = shallow(
    <Send onClick={ _onClick } />
  )
  send_event.find('button').simulate('click')
  expect(trigger_number).toEqual(1)
})
