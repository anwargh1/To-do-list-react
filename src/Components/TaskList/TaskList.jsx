import React, { useState } from 'react';
import Task from '../Task/Task';

function TaskList({ filterToDos, onDeleteToDo, handelUpdateToDo }) {
  let completedTasks = filterToDos.filter(filterToDo => filterToDo.completed).length;
  let pendingTasks = filterToDos.filter(filterToDo => !filterToDo.completed).length;

  const tasks = filterToDos.map(filterToDo => (
    <div>
      <Task
        filterToDo={filterToDo}
        onDelete={onDeleteToDo}
        onUpdate={handelUpdateToDo}
      />
    </div>
  ));

  return (
    <>
     <div style={{marginBottom: '20px'}}>{tasks}</div> 
     <div>
      <h4>Total tasks: {filterToDos.length}</h4>
      <h4>Number of completed tasks: {completedTasks}</h4>
      <h4>Number of pending tasks: {pendingTasks}</h4>
      </div>
    </>
  );
}

export default TaskList;
