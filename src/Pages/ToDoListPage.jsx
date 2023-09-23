import React from 'react'
import './toDoListPage.css'
import ToDoList from '../Components/ToToList/ToDoList'
import RightSide from '../Components/RightSide/RightSide'
function ToDoListPage() {
  return (
    <div className='toDo-list-page'>
        <ToDoList/>
        <RightSide/>
    </div>
  )
}

export default ToDoListPage