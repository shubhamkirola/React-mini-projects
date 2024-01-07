import {useState} from 'react';
import './App.css';

function App() {

  const [bg, setbg] = useState("white");
  const [color, setcolor] = useState("black");

  const change = () => {
    setbg(bg === "white" ? "black" : "white");
    setcolor(color === "black" ? "white" : "black");
    
  }

  return (
    <>
    <section className='body'
    style={{backgroundColor: bg}}
    >
    <button onClick={change} className='btn'
    style={{color: color,
    backgroundColor: bg
    }}
    >dark mode</button>
    </section>
    </>
  );
}

export default App;
