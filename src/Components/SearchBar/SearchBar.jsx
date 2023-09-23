import React, { useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import './searchbar.css';
function SearchBar({onSearch}) {
    const [searchTask , setSearchTask]=useState('')

   
        function handelOnChange(e){
          const value=e.target.value.toLowerCase()
            setSearchTask(value)
            onSearch(value)
        }
  return (
    <div className="search-bar" id="search">
      <label className="search-bar-box">
        <TfiSearch className="search-icon" />{' '}
        <input
          htmlFor="search"
          type="search"
          className="search-input"
          placeholder="Find member"
          value={searchTask}
          onChange={handelOnChange}
        />
      </label>
    </div>
  );
}

export default SearchBar;
