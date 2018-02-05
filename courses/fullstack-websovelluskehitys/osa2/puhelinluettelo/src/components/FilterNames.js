import React from 'react'

const FilterNames = (props) => {
    const filter = props.filter
    const handleFilterChange = props.handleFilterChange
    return (
        <div>
            rajaa näytettäviä: 
            <input
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default FilterNames