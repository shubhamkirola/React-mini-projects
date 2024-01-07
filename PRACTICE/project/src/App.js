import './App.css';
import { createContext, useEffect, useReducer, useState } from 'react';
import Name from './components/name';
import Age from './components/age';
import Okay from './components/render';


export const Language = createContext();

function App() {
  let [naamm, setnaamm] = useState("shubham");
  let [friends, setfriends] = useState(['santa', 'dholu', 'pooja', 'bholu'])
 
  const tapkar = () => {
    setfriends(friends.filter((f) => f!== "dholu"));
  }
 
  const tapkardo = () => {
    setnaamm("sanchit");
  }
  let [digit, setdigit] = useState(0);

  useEffect(() => {
    if(digit > 0){
    document.title = "YOU CAN DO IT";
}},[digit])
  
const coding = "javascript";

// const [state, dispatch] = useReducer(reducer, initialState);
  
return (
    <>
      <h1 style={{margin:"20px"}}>my name is shubham</h1>
      <Name naam={naamm} kaam="coding">
        <p>aaj react k kuch concept hogye clear ab ese hi roz krna h</p> //y nested js h, isko component m access krne k liye children bolna padta h
      </Name>
      <Age></Age>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={tapkardo}>tap tap</button>
      <button onClick={tapkar}>tap</button>
        <h1>{digit}</h1>
        <button onClick={() => {setdigit(digit+1)}}>change</button>
        <Language.Provider value={coding}>
        <Okay/>
        </Language.Provider>

        {/* <h1>state.count</h1>
        <button onClick={() => dispatch{type:"inc"}}>+</button>
        <button onClick={() => dispatch{type:"dec"}}>-</button>
        <button onClick={() => dispatch{type:"Reset"}}>Reset</button> */}
    </>
  );
}

// const initialState = {count:0};

// const reducer = (state, action) => {
//   switch(action.type){
//     case "inc":
//     return{
//       state : state.count + 1
//     };
//     case "dec":
//       return{
//         state : state.count -1
//       }
//       case "Reset":
//       return{
//         state : state.count (0)      }
//   }
// }


export default App;