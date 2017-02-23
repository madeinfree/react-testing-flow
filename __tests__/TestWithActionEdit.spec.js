import { updateEdit } from '../src/action/edit'

test('test update edit return correct object', () => {
  expect(updateEdit('Watching')).toEqual({
    type: 'UPDATE_EDIT',
    payload: {
      text: 'Watching'
    }
  })
})
