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
  expect(children_list.childAt(0).containsAllMatchingElements([<div>running</div>, <button>x</button>])).toBeTruthy()
  expect(children_list.childAt(1).containsAllMatchingElements([<div>eating</div>, <button>x</button>])).toBeTruthy()
  expect(children_list.childAt(2).containsAllMatchingElements([<div>watching</div>, <button>x</button>])).toBeTruthy()
})

test('list items with remove button', () => {
  const todos = [
    { title: 'running' }
  ]
  let children_list = shallow(
    <List
      todos={ todos }
    />
  )
  expect(children_list.children()).toHaveLength(1)
  expect(children_list.find('button').exists()).toBeTruthy()
})
