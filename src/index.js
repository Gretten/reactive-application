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
        {label: 'Изучить Реакт!', important: true},
        {label: 'Создать потрясающее (или не очень) приложение!', important: false},
        {label: 'Создать еще более потрясающее приложение!', important: false},
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