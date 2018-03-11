const initialState = null

const notificationReducer = (store = initialState, action) => {
  //console.log('action type: ', action.type)
  //console.log('action content: ', action.content)
  switch (action.type) {
  case 'VOTE':
    return `you voted ${action.anecdote.content}`
  case 'CREATE':
    return `you created ${action.data.content}`
  case 'RESET':
    return null
  default:
    return store
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export default notificationReducer