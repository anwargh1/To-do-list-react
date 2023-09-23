import React, { useEffect, useState } from 'react';
import toDosList from '../Data/data';
import TaskList from '../TaskList/TaskList';
import AddToDo from '../AddToDo/AddToDo';
import SearchBar from '../SearchBar/SearchBar';
import './toDoList.css'
function ToDoList() {
  const [toDos, setToDos] = useState(toDosList);
  const [filterToDos, setFilterToDos] = useState(toDos);

  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem('toDos'));
    if (savedToDos) {
      setToDos(savedToDos);
      setFilterToDos(savedToDos);
    }
  }, []);

  function handelAddToDo(title) {
    const nextToDos = [
      ...toDos,
      {
        id: Math.random().toString(),
        title: title,
        completed: false,
      },
    ];
    setToDos(nextToDos);
    localStorage.setItem('toDos', JSON.stringify(nextToDos));
    setFilterToDos(nextToDos);
  }

  function handelDeleteToDo(toDoId) {
    const toDosAfterDelete = toDos.filter(toDo => toDo.id !== toDoId);
    setToDos(toDosAfterDelete);
    localStorage.setItem('toDos', JSON.stringify(toDosAfterDelete));
    setFilterToDos(toDosAfterDelete);
  }

  function handelUpdateToDo(updatedToDo) {
    const updatedToDos = toDos.map(toDo =>
      toDo.id === updatedToDo.id ? updatedToDo : toDo
    );
    setToDos(updatedToDos);
    localStorage.setItem('toDos', JSON.stringify(updatedToDos));

    setFilterToDos(updatedToDos);
  }

  function handelSearchToDo(searchValue) {
    if (searchValue === '') {
      setFilterToDos(toDos);
    } else {
      setFilterToDos(
        toDos.filter(toDo => toDo.title.toLowerCase().includes(searchValue))
      );
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To Do List </h1>
      <SearchBar onSearch={handelSearchToDo} />
      <AddToDo onAddToDo={handelAddToDo} />
      <TaskList
        filterToDos={filterToDos}
        onDeleteToDo={handelDeleteToDo}
        handelUpdateToDo={handelUpdateToDo}
      />
    </div>
  );
}

export default ToDoList;
