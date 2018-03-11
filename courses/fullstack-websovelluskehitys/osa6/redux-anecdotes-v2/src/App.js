import AnecdoteForm from './components/AnecdoteForm'
import { anecdoteInitialization } from './reducers/anecdoteReducer'
import AnecdoteList from './components/AnecdoteList'
import anecdoteService from './services/anecdotes'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import PropTypes from 'prop-types'
import React from 'react'

class App extends React.Component {
  componentDidMount = async () => {
    const anecdotes = await anecdoteService.getAll()
    this.props.anecdoteInitialization(anecdotes)
  }

  render() {
    //const anecdotes = this.props.store.getState()
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default connect(
  null,
  { anecdoteInitialization }
) (App)

App.propTypes = {
  anecdoteInitialization: PropTypes.func
}