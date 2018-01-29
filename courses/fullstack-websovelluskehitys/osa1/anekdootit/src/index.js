import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
    <button type="button" onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({ anecdotes, votes }) => {
  let topAnecdoteIndex = votes.indexOf(Math.max(...votes))
  return (
    <div>
      <h2>anecdote with most votes</h2>
      {anecdotes[topAnecdoteIndex]}
      <br />
      <p>has {votes[topAnecdoteIndex]} votes</p>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  onClickNext = () => {
    return () => {
      this.setState({
        selected: this.getRandomInt(0, this.props.anecdotes.length)
      })
    }
  }

  onClickVote = () => {
    const newVotes = []
    for (let i = 0; i < this.props.anecdotes.length; i++) {
      if (i === this.state.selected) {
        newVotes.push(this.state.votes[i] + 1)
      } else {
        newVotes.push(this.state.votes[i])
      }
    }
    return () => {
      this.setState({
        votes: newVotes
      })
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br />
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <Button
          text="vote"
          handleClick={this.onClickVote()}
        />
        <Button
          text="next anecdote"
          handleClick={this.onClickNext()}
        />
        <Statistic
          anecdotes={this.props.anecdotes}
          votes={this.state.votes}
        />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
