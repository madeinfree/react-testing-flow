import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../src/components/App/App.react'

test('Test With App Component render child', () => {
  const app = mount(
    <App />
  )

  expect(app.find('h1').text()).toEqual('Daily Todo List')
})
