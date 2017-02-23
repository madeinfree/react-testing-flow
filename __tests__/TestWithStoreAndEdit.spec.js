import store from '../src/store/index'

let mockStore

beforeAll(() => {
  mockStore = store
})

test('get store', () => {
  expect(typeof mockStore).toEqual('object')
})

test('get store edit reducer', () => {
  const edit = mockStore.getState().edit
  expect(typeof edit).toEqual('object')
})

test('get empty text from edit store', () => {
  const edit = mockStore.getState().edit
  expect(edit.text).toEqual('')
})

test('dispatch UPDATE_EDIT to change text', () => {
  mockStore.dispatch({ type: 'UPDATE_EDIT', payload: { text: 'Watching' } })
  const edit = mockStore.getState().edit
  expect(edit.text).toEqual('Watching')
})
