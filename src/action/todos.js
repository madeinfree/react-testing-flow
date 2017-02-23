export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: 1,
      title
    }
  }
}
