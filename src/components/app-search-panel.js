import React from 'react';

const SearchPanel = () => {
    const inputStyles = {
        width: '150px',
        borderColor: 'red'
    }
    return (
    <input 
        placeholder="search"
        style={inputStyles}
        >
    </input>
    )
}

export default SearchPanel;