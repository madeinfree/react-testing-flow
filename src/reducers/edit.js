const initialState = {
  text: ''
}

const edit = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_EDIT':
      return Object.assign({}, state, {
        text: action.payload.text
      })
    default:
      return state
  }
}

export default edit
