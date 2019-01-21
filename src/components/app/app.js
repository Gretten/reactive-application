import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

const Adder = () => {
  return (
    <button type="button">Add</button>
  )
}

export default class App extends Component {
   
  maxId = 100; 

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };
  
  /*

    Что происходит в методе deleteState: 
    1. Принимаем id компонента в метод deletedItem
    2. Получаем из state текущий массив todoData. Используем функцию, т.к. результат зависит от предыдущего состоятния поля.
    3. Находим индекс удаляемого элемента.
    4. Находим части исходного массива до и после удаления нужного элемента.
    5. Склеиваем их в новом массиве.
    6. Передаем в State.

  */
  deleteItem = (id) => {
    this.setState(({todoData}) => {

      const deletedElement = todoData.findIndex(el => el.id === id);
      const newArray = [
        ...todoData.slice(0, deletedElement),
        ...todoData.slice(deletedElement + 1)
      ];
      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {

    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]

      return {
        todoData: newArr
      }

    })
  }

  render() {

    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={(id) => this.deleteItem(id) }
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
