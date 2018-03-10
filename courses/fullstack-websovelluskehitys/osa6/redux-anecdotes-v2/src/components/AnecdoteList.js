import { connect } from 'react-redux'
import Filter from './Filter'
import PropTypes from 'prop-types'
import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { reset } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.anecdotes
    const filter = this.props.filter
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.indexOf(filter) > -1)
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.vote(anecdote.id, anecdote.content)
                setTimeout(() => {
                  this.props.reset()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  vote,
  reset
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
) (AnecdoteList)

export default ConnectedAnecdoteList

AnecdoteList.contextTypes = {
  store: PropTypes.object
}