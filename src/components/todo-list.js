import React from 'react';
import TodoListItem from "./todo-list-item";

import './todo-list.css';


const TodoList = ({ dump }) => {

    const elements = dump.map((item) => {
        // используется spread-оператор. Без него мы просто хардкодили бы каждое значение массива. Подбробности в шаге 30.
        
        const { id, ...itemProps } = item;
        
        return(
            <li 
            key={id} 
            className="list-group-item"
            >
              <TodoListItem {...itemProps}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );  
};

export default TodoList;