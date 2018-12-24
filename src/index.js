// Библиотеки
import React from 'react';
import ReactDOM from 'react-dom';

// Компоненты
import AppHeader from './components/app-header';
import SearchPanel from './components/app-search-panel';
import TodoList from './components/todo-list';

// Код приложения
const App = () => {

    // Фейковые данные, которые в идеале должны содержаться где-то еще, 
    // так как React - View-библиотека

    const dumbData = [
        { label: 'Learn React!', important: true, id: 1, },
        { label: 'Create some fantastic (or not) reactive app!', important: false, id: 2, },
        { label: 'And create another!', important: false, id: 3, },
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList dump={dumbData} />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);