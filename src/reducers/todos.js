import {
  ADD_TODO,
  FETCH_TODO
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
    default:
      return state
  }
}

export {
  todos
}
