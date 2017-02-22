import {
  ADD_TODO,
  FETCH_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../const'

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      if (action.payload) {
        return Object.assign({}, state, {
          todos: state.todos.concat(action.payload)
        })
      }
      return state
    case FETCH_TODO:
      return state
    case UPDATE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return Object.assign({}, todo, { title: action.payload.title })
          }
          return todo
        })
      })
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      })
    default:
      return state
  }
}

export {
  todos
}
