import React, { useContext } from 'react'
import { Language } from '../App';




const Okay = ({coding}) => {

  const username = useContext(Language);

  return (
    <>
    {/* <Language.Consumer>
      {(coding) => {
        return <h1>muje aati h language {coding}</h1>
      }}
    </Language.Consumer> */}
    <h1>sjdfalkj {username}</h1>
    </>
  )
}

export default Okay;