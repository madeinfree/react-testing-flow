import React, { Component } from 'react'
import { shallow } from 'enzyme'
import List from '../src/components/Todos/List.react'

let list
beforeAll(() => {
  list = shallow(
    <List />
  )
})

test('render list component', () => {
  expect(list.exists()).toEqual(true)
})

test('empty childen', () => {
  expect(list.children()).toHaveLength(0)
})

test('third children', () => {
  const todos = [
    { title: 'running' },
    { title: 'eating' },
    { title: 'watching' }
  ]
  let children_list = shallow(
    <List
      todos={ todos }
    />
  )
  expect(children_list.children()).toHaveLength(3)
  expect(children_list.childAt(1).text()).toEqual('eating')
})
