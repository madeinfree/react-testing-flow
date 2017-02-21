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
