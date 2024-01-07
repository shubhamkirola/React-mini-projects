import React from 'react'
import Okay from './render';


const Age = ({coding}) => {
    
const subject = "science";
const marks = 20;
const multiply = (a,b) => {
   return a+b;
};
const number = [1,2,3,4,5,6,7,8];
const userInfo = [
    {username : "shubham",
    age : 23
    },
    {username : "sanchit",
    age : 26
    }
]

  return (<>
    <div>Meri umar h 24 and in {subject} i have scored {marks} marks !! {['or', '', 'esi']}</div>
    <div>to dekho, 2 or 2 hote h, {multiply(2, 2)}</div>
    //return k andar js likhne k liye...culry braces
    {number.map((num)=> ( //y brackets jb return ni krre ho
        <ul key={num}>
            <li>{num}</li>
        </ul>
    ))}
    {userInfo.map((user) => (
        <ul key={user}>
            <li>{user.username}</li>
            <li>{user.age}</li>
        </ul>
    ))}
    <Okay name={coding}></Okay>
    </>
  );
}

export default Age;