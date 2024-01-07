import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa';

const Search = () => {
  
    const [display, setdisplay] = useState(false);

    const handleclick = () => {
        setdisplay(true);
    }

    return (

    <div>
        {display ? <input type='text' placeholder='Search' style={{border: "2px solid black"}}></input> :
        <button style={{margin:"20px"}} onClick={handleclick}>
            <FaSearch/>
        </button>}
    </div>
  )
}

export default Search;