import { connect } from 'react-redux'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import PropTypes from 'prop-types'
import React from 'react'
import { reset } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createAnecdote(content)
    this.props.anecdoteCreation(newAnecdote)
    setTimeout(() => {
      this.props.reset()
    }, 5000)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
  reset
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
) (AnecdoteForm)

export default ConnectedAnecdoteForm

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}