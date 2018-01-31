import React from 'react';

const NumbersList = (props) => {
    const persons = props.persons
    const filter = props.filter
    const filteredPersons = persons.filter(person => person.name.indexOf(filter) > -1)

    return (
        <table>
            <tbody>
                {filteredPersons.map((person, index) =>
                    <tr key={index}>
                        <td >{person.name} </td>
                        <td>{person.number}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default NumbersList