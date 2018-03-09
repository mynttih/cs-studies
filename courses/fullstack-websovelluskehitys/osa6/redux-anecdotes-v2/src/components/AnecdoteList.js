import Filter from './Filter'
import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { reset } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const filter = this.props.store.getState().filter
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.indexOf(filter) > -1)
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch(vote(anecdote.id, anecdote.content))
                setTimeout(() => {
                  this.props.store.dispatch(reset())
                }, 5000)
              }}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
