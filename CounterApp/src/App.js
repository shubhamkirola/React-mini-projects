
import './App.css';
import {useState} from 'react';

function App() {

  let [Counter, setCount] = useState(0)
  
  const changeCounter = () => {
    Counter = Counter + 1;
    setCount(Counter)
  };
  const decCounter = () => {
    Counter = Counter - 1;
    setCount(Counter)
  };
  return (
    <div className="App">
        <h2>Counter Val = {Counter}</h2>
      <div className='button'>
        <button onClick={changeCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
      </div>
    </div>
  );
}

export default App;
