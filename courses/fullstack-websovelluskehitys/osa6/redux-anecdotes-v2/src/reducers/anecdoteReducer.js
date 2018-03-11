import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (store = [], action) => {
  if (action.type === 'VOTE') {
    const old = store.filter(a => a.id !== action.anecdote.id)
    const voted = store.find(a => a.id === action.anecdote.id)

    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type === 'CREATE') {
    return [...store, action.data]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return store
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const vote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      anecdote: votedAnecdote
    })
  }
}

export default anecdoteReducer