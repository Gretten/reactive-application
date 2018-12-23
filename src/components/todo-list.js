import React from 'react';
import TodoListItem from "./todo-list-item";


const TodoList = ({ dump }) => {

    const elements = dump.map((item) => {
        // используется spread-оператор. Без него мы просто хардкодили бы каждое значение массива. Подбробности в шаге 30.
        return(
            <li>
                <TodoListItem {...item}/>
            </li>
        )
    })

    return (
        <ul>
            { elements }
        </ul>
    );  
};

export default TodoList;