// Библиотеки
import React from 'react';
import ReactDOM from 'react-dom';

// Компоненты
import AppHeader from './components/app-header';
import SearchPanel from './components/app-search-panel';
import TodoList from './components/todo-list';

// Код приложения
const App = () => {
    return (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);