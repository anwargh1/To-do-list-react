import React, { useState } from 'react';
import './task.css';

function Task({ filterToDo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  let editContent;

  isEditing
    ? (editContent = (
        <div >
          <input
            value={filterToDo.title}
            onChange={(e) =>
              onUpdate({
                ...filterToDo,
                title: e.target.value,
              })
            }
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </div>
      ))
    : (editContent = (
        <div style={{display:'flex' , gap: "20px" ,alignItems: 'center'}}>
          <h4>{filterToDo.title} </h4>
          <button onClick={() => setIsEditing(true)} style={{width:'80px' ,padding:"8px" , height:'fit-content'}}>Edit</button>
        </div>
      ));

  return (
    <tr key={filterToDo.id}>
      <td>
        <div
          className={filterToDo.isVisibil ? 'notVisibil' : 'visibil'}
          style={{ display: 'flex', gap: '8px' ,alignItems: 'center' }}
        >
          <input
            type="checkbox"
            checked={filterToDo.completed}
            onChange={(e) =>
              onUpdate({ ...filterToDo, completed: e.target.checked })
            }
          />
          {editContent}
          <button onClick={() => onDelete(filterToDo.id)} style={{width:'80px' ,padding:"8px" , height:'fit-content'}}>Delete</button>
        </div>
      </td>
      <td>
        <input
          type="checkbox"
          checked={filterToDo.isVisibil}
          onChange={(e) =>
            onUpdate({ ...filterToDo, isVisibil: e.target.checked })
          }
        />
      </td>
    </tr>
  );
}

export default Task;

