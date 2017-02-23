import {
  ADD_TODO,
  FETCH_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../const'

const initialState = []

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.concat(action.payload)
    case FETCH_TODO:
      return state
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, { title: action.payload.title })
        }
        return todo
      })
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}

export default todos
