import React, { useState } from 'react'
import './addToDo.css'
function AddToDo({onAddToDo}) {
    const[inputValue ,setInputValue]=useState('')

    function handelInputChange(e){
      if(inputValue !== " "){
        setInputValue(e.target.value)
      }
    }

    function handelOnClick(){
      setInputValue('')
      if (inputValue.length == 0) {
        alert('Invalid value, input value can not be empty')
        return
      }else  
            onAddToDo(inputValue)
      
    }

  return (
    <div className='add-task'>
        <input placeholder='Add new Task' value={inputValue} onChange={handelInputChange} required/>
        <button onClick={handelOnClick}>Add</button>
    </div>
  )
}

export default AddToDo