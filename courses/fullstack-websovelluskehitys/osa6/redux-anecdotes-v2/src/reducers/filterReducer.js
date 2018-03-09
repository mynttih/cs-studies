const initialState = ''

const filterReducer = (store = initialState, action) => {
  switch (action.type) {
  case 'ON_CHANGE':
    return action.data
  default:
    return store
  }
}

export const onChange = (data) => {
  return {
    type: 'ON_CHANGE',
    data
  }
}

export default filterReducer