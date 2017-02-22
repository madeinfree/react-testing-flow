import store from '../src/store/index'

let testStore

beforeAll(() => {
  testStore = store
})

test('can get store by object', () => {
  expect(typeof testStore).toEqual('object')
})

test('store disaptch', () => {
  expect(typeof testStore.dispatch).toEqual('function')
})

test('initital store empty array', () => {
  expect(testStore.getState().todos.todos.length).toEqual(0)
})

test('dispatch ADD_TODO', () => {
  testStore.dispatch({ type: 'ADD_TODO', payload: { id: 1, title: 'Running' } })
  expect(testStore.getState().todos.todos.length).toEqual(1)
})

test('dispatch UPDATE_TODO', () => {
  testStore.dispatch({ type: 'UPDATE_TODO', payload: { id: 1, title: 'Eating' } })
  const todos = testStore.getState().todos.todos
  expect(todos[0].title).toEqual('Eating')
})

test('dispatch REMOVE_TODO', () => {
  testStore.dispatch({ type: 'REMOVE_TODO', payload: { id: 1 } })
  const todos = testStore.getState().todos.todos
  expect(todos.length).toEqual(0)
})
