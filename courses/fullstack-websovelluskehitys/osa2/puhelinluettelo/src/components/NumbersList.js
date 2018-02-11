import React from 'react';

const NumbersList = (props) => {
    const persons = props.persons
    const filter = props.filter
    const deleteName = props.deleteName
    const filteredPersons = persons.filter(person => person.name.indexOf(filter) > -1)

    return (
        <table>
            <tbody>
                {filteredPersons.map((person) =>
                    <tr key={person.id}>
                        <td >{person.name} </td>
                        <td>{person.number}</td>
                        <td><button type="button" id={person._id} onClick={deleteName}>poista</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default NumbersList