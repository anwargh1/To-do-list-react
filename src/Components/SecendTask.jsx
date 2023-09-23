import React, { useState, useEffect } from 'react';
import './secendTask.css'
export default function SecendTask() {
  const [name, setName] = useState(0);
  const [mobile, setMobile] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  //you've defined dependency as an object containing name and mobile. 
  //However, objects in JavaScript are reference types, so even if the values 
  //of name and mobile change, the reference to the dependency object remains the same. 
  //This means that React will consider the dependency object
  // itself as a single dependency, not its properties (name and mobile) individually.

  useEffect(() => {
    console.log('UseEffect is called');
  }, [ name, mobile]);
  
  return (
    <div className={`container ${darkMode ? 'bgDark' : 'bgLight'}`}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        id="mobile"
        placeholder="Mobile"
        onChange={e => setMobile(e.target.value)}
      />
      <div className="darkmode">
        <input
          type="checkbox"
          id="darkMode"
          onChange={() => setDarkMode(!darkMode)}
        />
        Enable dark mode
      </div>
    </div>
  );
}
