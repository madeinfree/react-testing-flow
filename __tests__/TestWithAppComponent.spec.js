import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../src/components/App/App.react'
import List from '../src/components/Todos/List.react'

test('Test With App Component render child', () => {
  const app = mount(
    <App
      edit={{ text: '' }}
    />
  )

  expect(app.find('h1').text()).toEqual('Daily Todo List')
})

test('Test with app and list to render children items', () => {
  const mockTodos = [
    { id: 1, title: 'Running' },
    { id: 2, title: 'Eating' }
  ]
  const app = mount(
    <App
      todos={ mockTodos }
      edit={{ text: '' }}
    />
  )

  expect(app.find(List).children()).toHaveLength(2)

})
