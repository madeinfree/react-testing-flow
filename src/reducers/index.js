import { combineReducers } from 'redux'
import todos from './todos'
import edit from './edit'

export default combineReducers({
  todos,
  edit
})
