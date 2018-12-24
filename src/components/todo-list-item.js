import React from 'react';

import  './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: (important ? 'tomato' : 'black')
    } 

    return (
    <span className="todo-list-item">
        <span 
            className="todo-list-item-label"
            style={style}
        >
            {label}
        </span>
    </span>
    )
}

export default TodoListItem;