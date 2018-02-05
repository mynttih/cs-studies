import AddNameForm from './components/AddNameForm'
import FilterNames from './components/FilterNames'
import Notification from './components/Notification'
import NumbersList from './components/NumbersList'
import personService from './services/persons'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      message: null
    }
  }

  addName = (event) => {
      event.preventDefault()
      if (this.state.persons.every(person => person.name !== this.state.newName)) {
        const newPerson = {
            name: this.state.newName,
            number: this.state.newNumber
        }

        personService
            .create(newPerson)
            .then(response => {
                this.setState({
                    persons: this.state.persons.concat(response.data),
                    newName: '',
                    newNumber: '',
                    message: 'lisättiin ' + response.data.name
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
            })
      } else if (window.confirm(this.state.newName + ' on jo luettelossa, korvataanko vanhan numero uudella?')) {
        let updatePerson = this.state.persons.find(person => person.name === this.state.newName)
        updatePerson.number = this.state.newNumber
        
        personService
            .update(updatePerson.id, updatePerson)
            .then(response => {
                const newPersons = this.state.persons.map(person => {
                    return person.id !== updatePerson.id ? person : updatePerson
                })
                this.setState({
                    persons: newPersons,
                    newName: '',
                    newNumber: '',
                    message: 'muutettiin henkilön ' + updatePerson.name + ' numero'
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
            })
      } else {
        this.setState({
            newName: '',
            newNumber: ''
        })
      }
  }

  componentDidMount() {
      personService
        .getAll()
        .then(response => {
            this.setState({ persons: response.data })
        })
  }

  deleteName = (event) => {
      event.preventDefault()
      const deletePerson = this.state.persons.find(person => {
          return person.id === parseInt(event.target.id, 10)
      })
      if (window.confirm('poistetaanko' + deletePerson.name + '?')) {
        personService
            .deletePerson(deletePerson)
            .then(response => {
                const newPersons = this.state.persons.filter(person => {
                    return person.id !== deletePerson.id
                })
                this.setState({
                    persons: newPersons,
                    message: 'poistettiin ' + deletePerson.name
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
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
        <Notification message={this.state.message} />
        <FilterNames
            filter={this.state.filter}
            handleFilterChange={this.handleFilterChange}
        />
        <h2>Lisää uusi</h2>
        <AddNameForm
            newName={this.state.newName}
            handleNameChange={this.handleNameChange}
            newNumber={this.state.newNumber}
            handleNumberChange={this.handleNumberChange}
            addName={this.addName}
        />
        <h2>Numerot</h2>
        <NumbersList
            persons={this.state.persons}
            filter={this.state.filter}
            deleteName={this.deleteName} 
        />
      </div>
    )
  }
}

export default App