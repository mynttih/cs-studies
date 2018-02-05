import React from 'react'

const AddNameForm = (props) => {
    const newName = props.newName
    const handleNameChange = props.handleNameChange
    const newNumber = props.newNumber
    const handleNumberChange = props.handleNumberChange
    const addName = props.addName
    return (
        <form>
          <div>
            nimi: 
            <input
                value={newName}
                onChange={handleNameChange}
            />
          </div>
          <div>
            numero: 
            <input
                value={newNumber}
                onChange={handleNumberChange}
            />
          </div>
          <div>
            <button type="submit" onClick={addName}>lisää</button>
          </div>
        </form>
    )
}

export default AddNameForm