import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      anecdotes: this.props.store.getState()
    }
  }

  addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    this.props.store.dispatch({
      type: 'ADD_ANECDOTE',
      data: content
    })
    const updatedAnecdotes = this.props.store.getState()
    this.setState({
      anecdotes: updatedAnecdotes
    })
    event.target.anecdote.value = ''
  }

  addVote = (event) => {
    const id = event.target.id
    this.props.store.dispatch({
      type: 'ADDVOTE',
      data: id
    })
    const updatedAnecdotes = this.props.store.getState()
    this.setState({
      anecdotes: updatedAnecdotes
    })
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.state.anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button id={anecdote.id} onClick={this.addVote}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anecdote" /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App