import { useState } from 'react';
import './App.css';


function App() {

  function generateid() {
    return Math.floor(Math.random() * 100);
  }

  const handleinp = (inp) => {
    setinput(inp.target.value);
  }

  function addinput () {
    setaddtask (addtask.concat({
      text : input,
      id : generateid()
    }));
    setinput("");
  };

  let [input, setinput] = useState("");
  let [addtask, setaddtask] = useState([]);




  return (
    <>
    <div className='m-10'>
      <input type='text' placeholder='add' value={input} className='border-2 border-blue-500' onChange={handleinp}></input>
      <button className='border-2 border-black' onClick={addinput}>Add task</button>
      <hr></hr>
      <h1> YOUR TASK </h1>
      <ul>
        {addtask.map(({text, id}) => {
           return <li>
              <span>{text}</span>
              <span>{id}</span>
            </li>
        })}
      </ul>

    </div>
    </>
  );
}

export default App;
