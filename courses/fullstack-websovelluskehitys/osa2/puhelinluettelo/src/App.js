import NumbersList from './components/NumbersList'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addName = (event) => {
      event.preventDefault()
      if (this.state.persons.every(person => person.name !== this.state.newName)) {
        const newPerson = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        const persons = this.state.persons.concat(newPerson)
        
        this.setState({
            persons,
            newName: '',
            newNumber: ''
        })
      } else {
        this.setState({
            newName: '',
            newNumber: ''
        })
      }
  }

  handleFilterChange = (event) => {
      this.setState({
          filter: event.target.value
      })
  }

  handleNameChange = (event) => {
      this.setState({
          newName: event.target.value
      })
  }

  handleNumberChange = (event) => {
      this.setState({
          newNumber: event.target.value
      })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
            rajaa näytettäviä: 
            <input
                value={this.state.filter}
                onChange={this.handleFilterChange}
            />
        </div>
        <h2>Lisää uusi</h2>
        <form>
          <div>
            nimi: 
            <input
                value={this.state.newName}
                onChange={this.handleNameChange}
            />
          </div>
          <div>
            numero: 
            <input
                value={this.state.newNumber}
                onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit" onClick={this.addName}>lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <NumbersList persons={this.state.persons} filter={this.state.filter} />
      </div>
    )
  }
}

export default App