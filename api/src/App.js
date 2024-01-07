import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [items, setitems] = useState([]);

  useEffect (() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((response) => {
        setitems(response.data.meals);
        // console.log(response.data.meals)
    })
    .catch((err) => {
      console.log("found err");
    })

  }, [])

return (
  <>
      {items.map(({strMeal, strMealThumb, idMeal}) => {
        return (
          <section>
            <h3>{strMeal}</h3>
            <img src={strMealThumb}/>
            <span>{idMeal}</span>
            </section>
          );
        })
      }
      </>
);
// return (
//         <div className="items-container">{itemlist}</div>
//         );
}

export default App;
