
import './App.css';
import Dropdown from './Dropdown.js'
import { detailss } from './Details/details.js';


function App() {
  return (
    <div>
     {detailss.map(({title, content}) => {
      return (<Dropdown title={title} content={content}></Dropdown>)
     })}
    </div>
  );
}

export default App;
